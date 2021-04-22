// fs - file system
// fs - файловая система
const chalk = require('chalk')
const fs = require('fs')
const path = require('path')

// создать папку
// fs.mkdir(path.join(__dirname, 'test2'), err=>{
//     if (err) {
//         throw err
//     }
//     console.log('Папка создана!')
// })

// создать файл
// записать в него какую-то инфу
const filePath = path.join(__dirname, 'test2', 'test.txt')
console.log(chalk.bold(filePath))
// fs.writeFile - перетирает файлы
fs.writeFile(filePath, 'Hello, NodeJS', (err)=>{
    if (err) {
        throw err
    }
    console.log(chalk.cyan('информация записана в файл test.txt'))

    // добавляет инфу в файл
    fs.appendFile(filePath, '\nHello, again!', (err)=>{
        if (err) {
            throw err
        }
        console.log(chalk.cyan('информация Добавлена в файл test.txt'))
    })
})

// чтение файла
fs.readFile(filePath, (err, data)=>{
    if (err) {
        throw err
    }
    // chalk - представляет инфу НЕ в виде буфера
    console.log(chalk.yellow('данные, прочитанные из файла + chalk:', data))
    console.log('данные, прочитанные из файла в виде буфера:', data)

    // вар 1 - разбуферированные данные
    const dataUnBuffered = (Buffer.from(data)).toString()
    console.log('dataUnBuffered 1', dataUnBuffered)
})
// вар 2 - разбуферированные данные
fs.readFile(filePath, 'utf-8', (err, content)=>{
    if (err) {
        throw err
    }
    console.log('чтение файла с укзанием кодировки: ', content)
})