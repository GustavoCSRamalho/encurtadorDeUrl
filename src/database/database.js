async function connect(){
    if(global.connect && global.connection.state !== "disconnected"){
        return global.connection;
    }
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection({host:'127.0.0.1',
    port: 3306,
    user: 'my-app-user',
    password: 'my-app-password',
    database: 'encurtadordb'});
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
    // var code = generateCode()
    const conn = await connect();
    const [rows] = await conn.query("SELECT * FROM urlencurtadas where created=?;", [date]);
    return rows;
}

async function selectByUrl(value){
    // var code = generateCode()
    const conn = await connect();
    const [rows] = await conn.query("SELECT * FROM urlencurtadas where shortedUrl = ?", [value]);
    return rows;
}

async function selecById(value){
    // var code = generateCode()
    const conn = await connect();
    const [rows] = await conn.query("SELECT * FROM urlencurtadas where id = ?", [value]);
    return rows;
}

async function insertUrlShorted(url){
    var code = generateCode()
    const conn = await connect();
    const sql = "INSERT INTO urlencurtadas (url, shortedUrl) values(?,?);";
    const values = [url, code];
    return await conn.query(sql, values);
}

function generateCode() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

module.exports = {selectAllUrlShortedFrom, selectByUrlDefault, selectByUrl, insertUrlShorted, selecById}