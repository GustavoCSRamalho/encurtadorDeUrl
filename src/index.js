const express = require('express');
const { selecAllQRCodes, insertLink, insertUrlShorted, selectByUrl, selecById, selectAllUrlShortedFrom } = require('./database/database');
const { persistirUrlNoBanco, recuperarUrlEncurtadaConformeEncurtamento, recuperarUrlEncurtadaConformeId, recuperarTodasUrlDeAcordoComAData } = require('./controller/controller');

const server = express();

server.use(express.json());

server.get("/shortUrl/:url",persistirUrlNoBanco);

server.get("/shortUrl/url/:value",recuperarUrlEncurtadaConformeEncurtamento);

server.get("/shortUrl/id/:value", recuperarUrlEncurtadaConformeId);

server.get("/shortUrl/all/:date", recuperarTodasUrlDeAcordoComAData);

server.listen(3333);