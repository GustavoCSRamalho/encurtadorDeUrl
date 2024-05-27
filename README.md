# encurtadorDeUrl

## Como usar o projeto

* 1 => baixe o projeto com https://github.com/GustavoCSRamalho/encurtadorDeUrl
* 2 => entre na pasta do projeto e execute o comando docker compose up
* 3 => Caso o banco de dados nao tenha sido criado, entrar no docker compose com o seguinte comando :
* docker exec -ti projeto1-db-1 /bin/bash
* mariadb -uroot -p
* Senha: test
* Copie e cole o codigo dentro do arquivo scripts, na linha de comando e execute para criar o banco de dados e as tabelas.
* Na pasta do projeto, execute o comando yarn start para iniciar o projeto!


## Rotas

* http://localhost:3333/shortUrl/testando123 =>  encurtar uma URL persistindo-a no banco de dados.
* http://localhost:3333/shortUrl/url/2hHny => retorna uma url encurtada conforme o encurtamento da URL.
* http://localhost:3333/shortUrl/id/1 => retorna uma url encurtada conforme um id.
* http://localhost:3333/shortUrl/all/2024-05-27 => retorna todas as URLs encurtadas em uma data específica.
