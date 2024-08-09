import prompt from 'prompt';
import mainPrompt from './prompts/prompt-main.js';
import createQRCode from './services/qr-code/create.js';
import createPassword from './services/password/create.js';

async function main() {
    prompt.get(mainPrompt, async (err, chosse) => {
    if (chosse.select == 1) await createQRCode();
    if (chosse.select == 2) await createPassword();
    })
}

main()