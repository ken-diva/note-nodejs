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
	const insert =
		"INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";

	// jalankan querynya
	con.query(insert, (err, result) => {
		if (err) throw err;
		console.log("Result: " + result);
	});
});
