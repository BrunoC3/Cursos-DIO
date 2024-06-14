class Veiculo:
    def __init__(self, cor, placa, numero_rodas):
        self.cor = cor
        self.placa = placa
        self.numero_rodas= numero_rodas

    def ligar_motor(self):
        print("ligando o motor")

    pass

class Motocicleta(Veiculo):
    pass

class Carro(Veiculo):
    pass

class Caminhao(Veiculo):
    pass

moto = Motocicleta("preta", 'ABC-1234', 2)
moto.ligar_motor()

carro = Carro('Branco', 'ABCD-1222', 4)
carro.ligar_motor()

caminhao = Caminhao('Azul', 'ABCD-23222', 8)
caminhao.ligar_motor()