# Meetup Azure Machine Learning

**Oque é?**

Este repositório contem dois exemplos utilizados no meetup, sendo eles uma Api
REST que busca e disponibiliza os dados históricos da Bitfinex (Exchange de bitcoin),
e um exemplo de funcionamento e visualização do algoritmo Ordinary Least Square.

## Pré-requisitos

A api foi criada em NodeJS e precisa do mesmo instalado e atualizado.

## Exemplo grafico Ordinary Least Square

Este exemplo não precisa de nenhum comando previo, basta abrir o arquivo
indexhtml e pode ser encontrado no path:
```
./Ordinary Least Squares
```

## Como usar a Bitfinex Api

- Primeiramente deve-se baixar as dependencias do projeto
```
cd ./BitfinexApi
```
And

```
npm install
```

### Atualizando dados históricos

- Os dados passados são armazenados no path:
```
./BitfinexApi/statics/data.csv
```

- Para atualiza-los execute o comando

```
npm run update
```

### WEB API
- Existem dois end-points na API um simples get ('/') que 
retorna o csv dos dados historicos e um get ('/last') 
que retorna o ultimo candle.

- Para inicializar a API basta executar o comando:
```
npm start
```

- Caso queria disponibilizar o serviço para a web para testes, 
execute o comando:

```
npm run tunnel
```

Este comando irá criar um tunnel da WEB para sua porta local.