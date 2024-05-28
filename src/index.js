const express = require('express');
const { persistirUrlNoBanco, recuperarUrlEncurtadaConformeEncurtamento, recuperarUrlEncurtadaConformeId, recuperarTodasUrlDeAcordoComAData } = require('./controller/controller');
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const spec = YAML.load("./src/swagger.yml");


const server = express();

server.use(express.json());
server.use("/docs", swaggerUI.serve, swaggerUI.setup(spec));

server.get("/shortUrl/:url", persistirUrlNoBanco);

server.get("/shortUrl/url/:value",recuperarUrlEncurtadaConformeEncurtamento);

server.get("/shortUrl/id/:value", recuperarUrlEncurtadaConformeId);

server.get("/shortUrl/all/:date", recuperarTodasUrlDeAcordoComAData);

server.listen(80);