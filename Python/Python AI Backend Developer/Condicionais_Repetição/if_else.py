saldo = 2000.0
saque = float(input("Informe o valor do saque: "))

# Condicional
if saldo >= saque:
    print('Realidando saque!')
elif saldo == saque:
    print('Você está liso!')
else:
    print('Saldo insuficiente!!') 

# if ternário
status = "Sucesso!" if saldo >= saque else "Falha" # if retorna o que vem antes e o else o que vem depois
print(f'{status} ao realizar o saque!')