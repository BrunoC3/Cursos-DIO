class Heroi {
    // Construtor que inicializa as propriedades do herói
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método para o ataque do herói
    atacar() {
      let ataque;
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'não tem um ataque definido';
      }
      
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplos de uso da classe Heroi
  
  const heroi1 = new Heroi('Gandalf', 150, 'mago');
  heroi1.atacar(); // Output: O mago atacou usando magia
  
  const heroi2 = new Heroi('Conan', 30, 'guerreiro');
  heroi2.atacar(); // Output: O guerreiro atacou usando espada
  
  const heroi3 = new Heroi('Bruce', 25, 'monge');
  heroi3.atacar(); // Output: O monge atacou usando artes marciais
  
  const heroi4 = new Heroi('Kage', 20, 'ninja');
  heroi4.atacar(); // Output: O ninja atacou usando shuriken
  
  const heroi5 = new Heroi('Unknown', 40, 'arqueiro');
  heroi5.atacar(); // Output: O arqueiro não tem um ataque definido
  