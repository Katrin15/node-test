// встроенные модули
const path = require('path') // без этой строки не работает, хотя модуль встроенный
console.log('Название файла: ', path.basename(__filename))
console.log('Название файла без модуля path: ', __filename)
console.log('Название директории: ', path.dirname(__filename))
console.log('Название директории без модуля path: ', __dirname)
console.log('Расширение: ', path.extname(__filename))
console.log('Много инфы по файлу: ', path.parse(__filename))
// console.log("создать путь до папки: ", path.join(__dirname, 'server', 'index.html'))
