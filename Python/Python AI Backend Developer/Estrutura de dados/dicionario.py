pessoa = {'nome': "bruno", "idade": 23}

pessoa = dict(name="Bruno", idade=23)

# Adicionando uma chave

pessoa["celular"] = "21222-3748"

# Acessando os dados

pessoa["celular"]

pessoa

# Iterar dicionario
for chave, valor in pessoa:
    print(chave, valor)

# Metodos #.clear() = Apaga tudo do dicionario
          #.copy() = a mesma coisa das outras estruturas
          #.fromkeys() = adiciona chaves ao dicionario
          #.get() = Uma pesquesa por chave
          #.items() = retorna uma lista de tuplas
          #.keys() = Retorna as chaves dos dicionarios
          #.pop() = Remove e retorna o que ele removeu 
          #.popitem() = Remove os itens na sequencia
          #.setdefault() = Adiciona caso a chabe não tenha nada
          #.update() = Atualização do dicionario com outro dicionario 
          #.values() = Retorna todas as chaves do dicionario
          # in = Verificar se a chave está naquele dicionario 
          # del = remoção de itens
          