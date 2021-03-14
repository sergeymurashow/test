// const _ = require('lodash')
// const records = require('./record.json').values[15]

// function log( ...args ) {
//     args.forEach( n => console.log( JSON.stringify( n, 0, 1 )))
// }

// const mapping = {
//     "33": {
//         "name": "apps1920",
//         "field": "4",
//         "sendFull": "6",
//         "sendHalf": "7"
//     },
//     "51": {
//         "name": "apps2021",
//         "field": "6",
//         "sendFull": "4",
//         "sendHalf": "5"
//     },
//     "37": {
//         "name": "containers1920",
//         "field": "3",
//         "sendFull": "4"
//     },
//     "53": {
//         "name": "containers2021",
//         "field": "4",
//         "sendFull": "3"
//     }
//   }

// const values = require('./values.json')



// let mappedData = records.map( r => { // Идем по полю Заявки
//     let dictForMap = mapping[ r.catalogId ] // По номеру каталога берем нужный маппинг
//     let value = values.filter( v => { // Получение нужной Записи
//         return v.catalogId == r.catalogId && v.recordId == r.recordId // Строгое условие на случай, если есть пересекающиеся ИД записей
//     })
//     .map( f => {
//         return f[ dictForMap.field ] // Получение значения именно нужного поля со статусом
//     })[0]
//     console.log( 'value', value)
//     let newValue = value.includes(dictForMap.sendHalf) ? value : [ dictForMap.sendFull ] // Если значение равно значению не полной отправки то сохраняем статус, если нет то ставим Отправлено
//     r.recordValue = { // Создание свойства
//         [ dictForMap.field ]: newValue
//     }
//     return r
// })
// log( mappedData )

let citiesArr = require( './cities.json' )

console.log( citiesArr.length )
