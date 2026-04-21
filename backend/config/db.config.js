import mysql from "mysql2/promise";

const pool = mysql.createPool({
  // host: "localhost",
  // user:
  // password:
  // database:
  waitForConnections: true,
  connectionLimit: 10,
});

db.connect((err) => {
  if (err) console.log("db연결 실패");
  else console.log("db연결 성공");
});
