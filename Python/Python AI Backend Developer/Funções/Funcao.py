def exibir_msg(): # Definição
    print('Olá')

def exibir_msg1(nome): # Recebe um argumento
    print(f'Olá {nome}!')

def exibir_msg2(nome="Bruno"): 
    print(f'Olá estudante {nome}!')

def exibir_msg3():
    print('Testando 4')

exibir_msg()
exibir_msg1(nome="Bruno")
exibir_msg2()
exibir_msg3()