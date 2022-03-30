const mysql = require("mysql");

const con = mysql.createConnection({
	// basic connection ke mysql. "con" itu connection
	host: "localhost",
	user: "root",
	password: "",

	// pilih databasenya disini
	database: "node_mysql",
});

con.connect((err) => {
	// cek error disini, kalau mau lihat, isi aja password diatas
	if (err) throw err;
	console.log("connected!");

	// query start disini
	const create_table =
		"CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";

	// jalankan querynya
	con.query(create_table, (err, result) => {
		if (err) throw err;
		console.log("Result: " + result);
	});
});
