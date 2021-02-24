const fs = require('fs');
const path = require('path');
const yargs = require('yargs').argv;

if (!yargs.ruta) return console.log('Agrege una ruta ')

if (fs.existsSync(`${yargs.ruta}/documentos`)) {
    console.log('existe')

} else {
    fs.mkdirSync(`${yargs.ruta}/documentos`, error => {
        console.log(error)
    })

}

if (fs.existsSync(`${yargs.ruta}/otros`)) {
    console.log('existe')

} else {
    fs.mkdirSync(`${yargs.ruta}/otros`, error => {
        console.log(error)
    })


}

if (fs.existsSync(`${yargs.ruta}/images`)) {
    console.log('existe')

} else {
    fs.mkdirSync(`${yargs.ruta}/images`, error => {
        console.log(error)
    })

}



const files = fs.readdirSync(`${yargs.ruta}`)


const arraydocumentos = files.filter(e => e.split('.')[1] !== undefined)


if (!arraydocumentos) return console.log('array vacio')



arraydocumentos.map(e => {
    switch (e.split('.')[1]) {
        case "doc":
        case "pdf":
        case "txt":
        case "ppt":
            return fs.renameSync(`${yargs.ruta}/${e}`, `${yargs.ruta}/documentos/${e}}`)

        case "svg":
        case "png":
        case "jpg":


            return fs.renameSync(`${yargs.ruta}/${e}`, `${yargs.ruta}/images/${e}`)

        default:

            return fs.renameSync(`${yargs.ruta}/${e}`, `${yargs.ruta}/otros/${e}`)
    }



})



