# encurtadorDeUrl

## Como usar o projeto

* 1 => baixe o projeto com https://github.com/GustavoCSRamalho/encurtadorDeUrl
* 2 => Caso o banco de dados nao tenha sido criado, entrar no docker compose com o seguinte comando :
* Na pasta do projeto, execute o comando npm start para iniciar o projeto!


## Rotas

* http://localhost:3000/shortUrl/testando123 =>  encurtar uma URL persistindo-a no banco de dados.
* http://localhost:3000/shortUrl/url/2hHny => retorna uma url encurtada conforme o encurtamento da URL.
* http://localhost:3000/shortUrl/id/1 => retorna uma url encurtada conforme um id.
* http://localhost:3000/shortUrl/all/2024-05-27 => retorna todas as URLs encurtadas em uma data específica.
