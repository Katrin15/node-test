// Operating system
const os = require('os')

console.log('Операционная система: ', os.platform())
console.log('Архитектура процессора: ', os.arch())
// console.log('Подробная инфорамация по процессорам: ', os.cpus())
console.log('Свободная память: ', os.freemem())
console.log('Всего памяти: ', os.totalmem())
console.log('Домашняя директория: ', os.homedir())
console.log('Время работы: ', os.uptime())