let nomeDoHeroi = "Dinho"
let xp = 1001
let nivel

function statusDoHeroi(nomeDoHeroi, nivel) {
    console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivel}`);
}

switch(true) {
    case xp > 1000 && xp < 2000:
        nivel = "Bronze";
        statusDoHeroi(nomeDoHeroi, nivel)
        break;
    
    case 2001 > xp && xp < 5000:
        nivel = "Prata";
        statusDoHeroi(nomeDoHeroi, nivel)
        break;

    case 5001 > xp && xp < 7000:
        nivel = "Ouro";
        statusDoHeroi(nomeDoHeroi, nivel)
        break;

    case 7001 > xp && xp < 8000:
        nivel = "Platina";
        statusDoHeroi(nomeDoHeroi, nivel)
        break;        

    case 8001 > xp && xp < 9000:
        nivel = "Ascendente";
        statusDoHeroi(nomeDoHeroi, nivel)
        break;
        
    case 9001 > xp && xp < 10000:
        nivel = "Imortal";
        statusDoHeroi(nomeDoHeroi, nivel)
        break;   
        
    case 10001 > xp:
        nivel = "Radiante";
        statusDoHeroi(nomeDoHeroi, nivel)
        break;
}