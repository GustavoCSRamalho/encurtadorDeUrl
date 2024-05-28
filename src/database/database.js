const { v1: uuidv1 } = require('uuid');

function generateNumericUUID() {
    const uuid = uuidv1();
    const numericUUID = parseInt(uuid.replace(/-/g, '').substring(0, 8), 16);
    return numericUUID;
}
async function connect(){
    console.log("Conectando ao mysql!");

    if(global.connect && global.connection.state !== "disconnected"){
        return global.connection;
    }
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection({host:'roundhouse.proxy.rlwy.net',
    port: 52904,
    user: 'root',
    password: 'AcsqtxsTVXhKngkFFufVMuYILArmgvhe',
    database: 'railway'});
    console.log("Conectou ao mysql!");
    global.connection = connection;
    return connection
}

async function selectByUrlDefault(value){
    const conn = await connect();
    const [rows] = await conn.query("SELECT * FROM urlencurtadas where url = ?", [value]);
    return rows;
}

async function selectAllUrlShortedFrom(date){
    const conn = await connect();
    const [rows] = await conn.query("SELECT * FROM urlencurtadas where created=?;", [date]);
    return rows;
}

async function selectByUrl(value){
    const conn = await connect();
    const [rows] = await conn.query("SELECT * FROM urlencurtadas where shortedUrl = ?", [value]);
    return rows;
}

async function selecById(value){
    const conn = await connect();
    const [rows] = await conn.query("SELECT * FROM urlencurtadas where id = ?", [value]);
    return rows;
}

async function insertUrlShorted(url){
    console.log('aqui')
    var code = generateCode()
    const conn = await connect();
    const sql = "INSERT INTO urlencurtadas (id,url, shortedUrl, created) values(?,?,?,?);";
    const values = [generateNumericUUID(), url, code, new Date()];
    console.log('aqui2')
    return await conn.query(sql, values);
}

function generateCode() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Adiciona um zero à esquerda se for menor que 10
    const day = String(today.getDate()).padStart(2, '0'); // Adiciona um zero à esquerda se for menor que 10
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}

module.exports = {selectAllUrlShortedFrom, selectByUrlDefault, selectByUrl, insertUrlShorted, selecById}
