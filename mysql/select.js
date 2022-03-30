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
	const select = "SELECT * FROM customers";

	// jalankan querynya
	con.query(select, function (err, result, fields) {
		if (err) throw err;
		console.log(result);
	});
});
