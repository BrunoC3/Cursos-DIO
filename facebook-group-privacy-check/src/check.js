const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const COOKIES_PATH = 'cookies.json';
const OUTPUT_FILE = 'feed_items_with_messages.txt';
const IMAGES_FOLDER = 'feed_images';

async function saveCookies(page) {
    const cookies = await page.cookies();
    fs.writeFileSync(COOKIES_PATH, JSON.stringify(cookies, null, 2));
}

async function loadCookies(page) {
    if (fs.existsSync(COOKIES_PATH)) {
        const cookies = JSON.parse(fs.readFileSync(COOKIES_PATH));
        await page.setCookie(...cookies);
    }
}

async function getGroupDetails(groupUrl) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    try {
        await loadCookies(page); // Carregar os cookies salvos

        await page.goto(groupUrl, { waitUntil: 'networkidle2' });

        const groupDetails = await page.evaluate(() => {
            const privacyElement = document.querySelector('div.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x2lah0s.x193iq5w.xeuugli.xg83lxy.x1h0ha7o.x1120s5i.x1nn3v0j');
            const privacyStatus = privacyElement ? privacyElement.textContent.trim() : 'Público';

            const nameElement = document.evaluate('/html/body/div[1]/div/div[1]/div/div[3]/div/div/div[1]/div[1]/div[1]/div[2]/div/div/div/div/div[1]/div/div/div/div/div/div[1]/h1/span/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            const groupName = nameElement ? nameElement.textContent.trim() : 'Nome do grupo não encontrado';

            return {
                groupName,
                privacyStatus
            };
        });

        if (groupDetails.groupName && groupDetails.privacyStatus) {
            await saveCookies(page); // Salvar os cookies após a operação
            return groupDetails;
        } else {
            return 'Grupo não encontrado';
        }
    } catch (error) {
        console.error('Erro:', error);
        return 'Grupo não encontrado';
    } finally {
        await browser.close();
    }
}

async function scrollToElementAndCollect(page, feedSelector, messageSelector, imageSelector, minItemCount) {
    let itemsWithMessagesAndImages = []; // Array para armazenar itens, mensagens e imagens

    const scrollDelay = 2000; // Tempo em milissegundos entre os scrolls
    const maxScrolls = 50; // Número máximo de scrolls permitidos

    try {
        let previousItemsCount = 0;
        let scrollAttempts = 0;

        while (itemsWithMessagesAndImages.length < minItemCount && scrollAttempts < maxScrolls) {
            await autoScroll(page);
            const newItems = await page.$$eval(feedSelector, elements => elements.map(el => el.textContent.trim()));
            const newMessages = await page.$$eval(messageSelector, elements => elements.map(el => el.textContent.trim()));
            const newImages = await page.$$eval(imageSelector, elements => elements.map(el => el.getAttribute('src')));

            for (let i = 0; i < newItems.length; i++) {
                const item = newItems[i];
                const message = newMessages[i] || '';
                const imageSrc = newImages[i] || '';

                itemsWithMessagesAndImages.push({ item, message, imageSrc });

                if (imageSrc) {
                    await downloadAndSaveImage(imageSrc, item);
                }
            }

            if (itemsWithMessagesAndImages.length > previousItemsCount) {
                previousItemsCount = itemsWithMessagesAndImages.length;
                console.log(`Total de itens coletados: ${itemsWithMessagesAndImages.length}`);
                await saveItemsToFile(itemsWithMessagesAndImages, OUTPUT_FILE);
            }

            scrollAttempts++;
            await sleep(scrollDelay); // Aguarda antes de realizar o próximo scroll
        }

        return itemsWithMessagesAndImages.slice(0, minItemCount); // Retorna a quantidade mínima desejada de itens
    } catch (error) {
        console.error('Erro ao obter os itens do feed:', error);
        return [];
    }
}

async function autoScroll(page) {
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            let totalHeight = 0;
            const distance = 100;
            const maxScrollAttempts = 10;
            let scrollAttempts = 0;

            const timer = setInterval(() => {
                const scrollHeight = document.body.scrollHeight;

                window.scrollBy(0, distance);
                totalHeight += distance;

                if (totalHeight >= scrollHeight || scrollAttempts >= maxScrollAttempts) {
                    clearInterval(timer);
                    resolve();
                }

                scrollAttempts++;
            }, 1000);
        });
    });
}

async function saveItemsToFile(items, fileName) {
    try {
        const formattedItems = items.map(item => `${item.item}\n${item.message}\n`).join('\n');
        fs.writeFileSync(fileName, formattedItems, { flag: 'a' }); // Append mode
        console.log(`Itens salvos em ${fileName}`);
    } catch (error) {
        console.error('Erro ao salvar itens em arquivo:', error);
    }
}

async function downloadAndSaveImage(imageUrl, itemName) {
    try {
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const imageExtension = path.extname(imageUrl.split('?')[0]);
        const imageName = `${itemName.replace(/\W/g, '')}${imageExtension}`;
        const imagePath = path.join(__dirname, IMAGES_FOLDER, imageName); // Salvar no diretório atual

        fs.writeFileSync(imagePath, response.data);
        console.log(`Imagem salva: ${imageName}`);
    } catch (error) {
        console.error('Erro ao baixar e salvar a imagem:', error);
    }
}

async function getFeedItems(groupUrl, feedSelector, messageSelector, imageSelector, minItemCount) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    try {
        await loadCookies(page); // Carregar os cookies salvos

        await page.goto(groupUrl, { waitUntil: 'networkidle2' });

        const itemsWithMessagesAndImages = await scrollToElementAndCollect(page, feedSelector, messageSelector, imageSelector, minItemCount);
        return itemsWithMessagesAndImages;
    } catch (error) {
        console.error('Erro ao obter os itens do feed:', error);
        return [];
    } finally {
        await browser.close();
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
    const groupUrl = 'https://www.facebook.com/groups/2445080325767922';
    const feedSelector = 'strong.html-strong.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1hl2dhg.x16tdsg8.x1vvkbs.x1s688f span.html-span.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1hl2dhg.x16tdsg8.x1vvkbs';
    const messageSelector = 'div.html-div.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd div.x1iorvi4.x1pi30zi.x1l90r2v.x1swvt13 span.x193iq5w.xeuugli.x13faqbe.x1vvkbs.x1xmvt09.x1lliihq.x1s928wv.xhkezso.x1gmr53x.x1cpjm7i.x1fgarty.x1943h6x.xudqn12.x3x7a5m.x6prxxf.xvq8zen.xo1l8bm.xzsf02u.x1yc453h';
    const imageSelector = 'img.x1ey2m1c.xds687c.x5yr21d.x10l6tqk.x17qophe.x13vifvy.xh8yej3.xl1xv1r';

    const minItemCount = 30; // Quantidade mínima de itens desejada

    // Exemplo de uso para obter detalhes do grupo
    const groupDetails = await getGroupDetails(groupUrl);
    if (typeof groupDetails === 'string') {
        console.log(groupDetails);
    } else {
        console.log(`Nome do grupo: ${groupDetails.groupName}`);
        console.log(`Status de privacidade: ${groupDetails.privacyStatus}`);
    }

    // Exemplo de uso para obter itens do feed com mensagens e imagens associadas
    const itemsWithMessagesAndImages = await getFeedItems(groupUrl, feedSelector, messageSelector, imageSelector, minItemCount);
    console.log('Itens do feed com mensagens e imagens associadas:');
    console.log(itemsWithMessagesAndImages);
})();
