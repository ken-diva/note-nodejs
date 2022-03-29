const http = require("http");
const uc = require("upper-case");

http
	.createServer((req, res) => {
		res.writeHead(200, { "Context-Type": "text/html" });
		res.write(uc.upperCase("ini besar semua"));
		res.end();
	})
	.listen(3000);
