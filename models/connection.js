import mysql from 'mysql';


var connection = mysql.createConnection({
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    user: 'bsale_test',
    password: 'bsale_test',
    database: 'bsale_test'
});

connection.connect(function(err){
    if (err) {
        console.log("Error de connexión a base de datos " + err.code);
    }
})


export default connection
   