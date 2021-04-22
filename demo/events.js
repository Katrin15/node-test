const eventEmitter = require('events')

// const emitter = new eventEmitter()

// // слушаем событие
// emitter.on('anything', (eventData)=> {
//     console.log('данные события: ', eventData)
// })

// // создаем событие
// emitter.emit('anything', {a: 1})

// setTimeout(()=>{
//     emitter.emit('anything', {b: 2})
// }, 2500)


class dispatcher extends eventEmitter {
    subscribe(event) {  // , data
        this.on(event, data => {
            console.log(`подписка на событие ${event} со значением: `, data)
        })
    }

    dispatch(event, data) {
        this.emit(event, data)
    }
} 

const Dispatcher = new dispatcher()
Dispatcher.subscribe('any-event')
Dispatcher.dispatch('any-event', {a: 33})