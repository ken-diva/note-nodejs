const http = require("http");
const url = require("url");
const fs = require("fs");

http
	.createServer(function (req, res) {
		const q = url.parse(req.url, true); // parse urlnya
		const filename = "." + q.pathname + ".html"; // ambil filenya dari url
		fs.readFile(filename, function (err, data) {
			// readnya pakai fs.readFile
			if (err) {
				// return ini kalau error
				res.writeHead(404, { "Content-Type": "text/html" });
				return res.end("404 Not Found");
			}
			// return ini kalau suskes
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(data);
			return res.end();
		});
	})
	.listen(3000);
