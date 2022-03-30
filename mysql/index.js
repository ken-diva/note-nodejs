const mysql = require("mysql");

const con = mysql.createConnection({
	// basic connection ke mysql. "con" itu connection
	host: "localhost",
	user: "root",
	password: "",
});

con.connect((err) => {
	// cek error disini, kalau mau lihat, isi aja password diatas
	if (err) throw err;
	console.log("connected!");

	// query start disini
	const create_db = "CREATE DATABASE node_mysql";

	// jalankan querynya
	con.query(create_db, (err, result) => {
		if (err) throw err;
		console.log("Result: " + result);
	});
});
