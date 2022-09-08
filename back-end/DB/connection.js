import mysql from 'mysql2';
const sql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'assignment4',
})


export default sql