class bicicleta:
    def __init__(self, cor, modelo, ano, valor): #Self é a instancia do objeto que foi passado
        self.cor = cor
        self.modelo = modelo
        self.ano = ano  
        self.valor = valor

# Comportamentos da classe bicicleta = Definidos por métodos

    def buzinar(self): # Self é a referencia explicita
        print('Plin Plin...')

    def parar(self):
        print('Parando a bicicleta...')
        print('Bicicleta parada!')

    def correr(self):
        print('Vrummmm...')


    # def __str__(self):
    #     return f'bicicleta: cor={self.cor}, modelo={self.modelo}, ano={self.ano}, valor={self.valor}'
    
    def __str__(self):
        return f'{self.__class__.__name__}: {', '.join([f'{chave} = {valor}' for chave, valor in self.__dict__.items()])}'

b1 = bicicleta('vemelha', "caloi", 2022, 800)

bicicleta.buzinar(b1) #outra maneira de chamar
b1.buzinar()
b1.correr()
b1.parar()

print(b1.cor, b1.modelo, b1.ano, b1.valor)

print(b1)