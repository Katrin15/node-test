const chalk = require('chalk')
const text = require('./data.js')
const http = require('http')

const fs = require('fs')
const path = require('path')

console.log(chalk.blue('hello nodeJS'))
console.log(chalk.cyan(text))

console.log(__dirname)
console.log(__filename)

// // 1. создать сервер
// const server = http.createServer((req, res)=> {
//     res.writeHead(200, {
//         // 'Content-type': 'text/plain'
//         'Content-type': 'text/html'    
//     })
//     res.end('<h1>hello, nodeJS</h1><h1>using nodemon</h1>')
// })
// server.listen(3000, ()=>{
//     console.log('server has been started')
// })


// // 2. создать сервер и передавать файлы html на клиента
// const server = http.createServer((req, res)=> {
//     console.log('req url: ', req.url)
//     if (req.url === '/') {
//         fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data)=>{
//             if (err) {
//                 throw err
//             }
//             res.writeHead(200, {
//                 // 'Content-type': 'text/plain'
//                 'Content-type': 'text/html'    
//             })
//             res.end(data)
//         })
//     }
//     else if (req.url === '/contact') {
//         fs.readFile(path.join(__dirname, 'public/contact.html'), (err, data)=>{
//             if (err) {
//                 throw err
//             }
//             res.writeHead(200, {
//                 // 'Content-type': 'text/plain'
//                 'Content-type': 'text/html'    
//             })
//             res.end(data)
//         })    
//     }
// })
// server.listen(3000, ()=>{
//     console.log('server has been started')
// })

// 3. создать сервер и передавать файлы html на клиента - название файла html из запрашиваемого url
const server = http.createServer((req, res)=> {

    console.log('req url: ', req.url)

    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index' : req.url)

    // если в созданном пути к файлу нет расширения - добавить его - когда название файла == url (для html файлов)
    let extension = path.extname(filePath)
    let contentType;
    if (!extension) {
        filePath+='.html'
        contentType = 'text/html'
    }
    else if (extension === '.css'){
        contentType = 'text/css'
    }
    else if (extension === '.js'){
        contentType = 'text/javascript'
    }
    else if (extension === '.ico') {
        contentType = 'image/x-icon'
    }    

    console.log('filePath: ', filePath)
    console.log('extension: ', extension)

    fs.readFile(filePath, (err, data) => {
        // ошибка при чтении файла, соответствующего запрашиваемому url
        if (err) {            
            res.writeHead(404, {
                'Content-type': 'text/html'    
            })
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, errorData) => {
                if (err) {
                    throw err
                }
                console.log('errorData: ', errorData)
                res.end(errorData)
            })
            // если здесь throw error - то в браузере страница не грузится ERR_CONNECTION_REFUSED           
            // throw err
        }
        else {
            // файл с названием, равным запрашиваемому url, может быть прочитан
            res.writeHead(200, {
                'Content-type': contentType    
            })
            console.log('normalData: ', data)        
            res.end(data)
        }        
    })
})
const PORT = process.env.PORT || 3000
server.listen(PORT, ()=>{
    console.log(`server has been started at port: ${PORT}`)
})