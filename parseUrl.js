const url = require('url')
const alamat = 'http://localhost:3000/default.htm?tahun=2022&bulan=maret'
const q = url.parse(alamat, true)

console.log(q.hostname); // return localhost
console.log(q.pathname); // return /default.htm
console.log(q.search); // return ?tahun=2022&bulan=maret
console.log(q.query);

const data = q.query // return { tahun: '2022', bulan: 'maret' }
console.log(data.tahun); // return 2022