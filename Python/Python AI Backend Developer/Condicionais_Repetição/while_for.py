texto = input("Informe um texto: ")
VOGAIS = "AEIOU"

#Uso do for quando sabe a quantidade que vai repetir
for letra in texto:
    if letra.upper() in VOGAIS:
        print(letra, end='')

# Função range 
list(range(4)) # Precisa ser convertido em lista para ser utilizado

# Ranger com o For
for numero in range(0, 10):
    print(numero, end=" ")

for numero in range(0, 51, 5): # O termo do meio é o final do range
    print(numero, end=" ")

# While é para quando não sabemos a quantidade de repetições
opcao = -1

while opcao != 0:
    opcao = int(input("[1] Sacar \n[2] Extrato \n[0] Sair \n: "))
    
    if opcao == 1:
        print("Sacando...")
    elif opcao == 2:
        print('Exibindo o extrado!')
    elif opcao == 0:
        break   # Vai quebrar o laço
else:
    print('Até logo!')

# Exemplo de for 

for numero in range(100):

    if numero == 12: # Vai remover o 12 e vai continuar o codigo
        continue

    print(numero, end="")