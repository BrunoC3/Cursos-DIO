# Kwargs = Colocando ** vai ser recebido um dicionario
# Args = Colocando * vai passar uma tupla

def exibir_poema(data_extenso, *args, **kwargs):
    texto = "\m".join(args) # Concatenando os valores de args com \n e colocando eles dentro da variavel texto
    meta_dados = "\n".join([f'{chave.title()}: (valor)' for chave, valor in kwargs.items()]) # 
    menssagem = f'{data_extenso}\n\n{texto}\n\n{meta_dados}'
    print(menssagem)

exibir_poema('Zen of Python', 'Beutiful is batter than ugly.', autor="Tim Peters", ano=1999)