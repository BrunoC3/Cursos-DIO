# Declaração

frutas = ["laranja", "maçã", "uva"]

frutas = []

letras = list('python') # Vai criar um elemento com cada item da string

numero = list(range(10))

carro = ['Ferrari', 'F8', 12934123, 2020, 2900, "São Paulo", True]

# Acessando uma lista
frutas = ["laranja", "maçã", "uva"]
print(frutas[0]) # Vai pegar o primeiro item da lista = laranja
print(frutas[-1]) # vai pegar de trás para frente os itens da lista

# Percorrendo uma lista
carros = ["Gol", "Celta", "Palio"]

for carro in carros: # Vai jogar todos os valores de carros em carro e vai mostrar eles
    print(carro)

for indece, carroo in enumerate(carros):
    print(f'{indece}: {carroo}')

# Filtrando uma lista 1
numeros = [1, 30, 21, 2, 9, 65, 34]
pares = []

for numerop in numeros:
    if numerop % 2 == 0:
        pares.append(numerop) # Adiciona o item a lista 
                              # .clear = limpa a lista
                              # .copy = Copia a lista
                              # .count = Conta quantas vezes um objeto aparece na sua lista
                              # .extend = Junta listas
                              # .index = acha a primeira ocorrencia de um item e mostra a sua posição na lista
                              # .pop = Mostra a lista no formato de pilha, pode ser usado para tirar itens da lista também
                              # .remove = Remove o item da lista com o nome dele != do .pop que remove pelo indece
                              # .reverse = faz o espelhamento da lista
                              # .sort = ordena a lista
                              # len(lista) = mostra a quantidade de itens da lista

print(pares)

# Filtrando uma lista 2
numeros = [1, 30, 21, 2, 9, 65, 34]
pares = [numerop for numerop in numeros if numerop % 2 == 0] # Já adiciona os valores a lista

# Modificando valores 1
numeros = [1, 30, 21, 2, 9, 65, 34]
quadrado = []

for quad in numeros:
    quadrado.append(quad ** 2)

# Modificando valores 2
numeros = [1, 30, 21, 2, 9, 65, 34]
pares = [quad ** 2 for quad in numeros]