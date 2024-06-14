def salvar_carro(marca, modelo, ano, placa):
    # "Salva no banco de dados"
    print(f'Carro inserido com sucesso! {marca}/{modelo}/{ano}/{placa}')

salvar_carro('Fiat', 'Palio', 1999, 'ABC-1234') # Desvantagem = Alterar a ordem dos argumentos
salvar_carro(marca="Fiat", modelo="Palio", ano=1999, placa="ABC-1234") # Dificilmente vai ter um erro nessa situação
salvar_carro(**{'marca': 'Fiat', 'modelo': 'Palio', 'ano': 1999, 'placa': 'ABC-1234'}) # Passando um dicionario