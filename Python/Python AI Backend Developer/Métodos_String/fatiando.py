nome = "Bruno Lopes Dias"

print(nome[0]) # vai pegar a primeira letra da string
print(nome[-2]) # Pegar os dois ultimos
print(nome[:5]) # Vai pegar os 5 primeiros caracteres
print(nome[10:]) # Vai pular os 10 primeiros caracteres
print(nome[5:5]) # Vai pular 5 do começo e 5 do fim
print(nome[5:5:2]) # Vai fazer a mesma coisa que o de cima, mas vai pulando de 2 em 2
print(nome[:]) # Vai pegar tudo
print(nome[:: -1]) # Vai espelhar a String

# Multiplas linhas

print(f'''
          Meu nome é {nome}
          tenho 23 anos
          moro em algum lugar
''' 
)