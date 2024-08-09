const test = process.env.PASSWORD_LENGTH;
const characters = "12312123412341";
console.log(characters.substring(0,test));

const sizePassword = process.env.PASSWORD_LENGTH;

for (let i = 0; i < process.env.PASSWORD_LENGTH; i++) {
    const element = characters[i];
    console.log(element);
}


characters.length

// if (sizePassword > 0) {
//     characters[sizePassword]
// }
