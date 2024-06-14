curso = "Python"

print(curso.upper()) # Coloca tudo em maiusculo
print(curso.lower()) # Coloca tudo em minusculo
print(curso.title()) # Pega a penas o titulo da variavel ou o primeiro nome dela

# Eliminando espaços
Testando = '  Aquarela '

print(Testando.strip()) # Remove todos os espaços
print(Testando.lstrip()) # Remove os espaços da esquerda
print(Testando.rstrip()) # Remove os espaços da direita

# Junções e centralização
print(curso.center(10, "#")) # Centraliza e coloca o caracter # para completar os espaços
print(".".join(curso)) # Separa as letras pelo "." 