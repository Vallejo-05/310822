//importar o pacote do express
const express = require('express')
//executar o express application
const app = express()

//configurar a porta local 
const porta = process.env.PORT || 4040

//habilitar o expresspara receber dados de formularios
app.use(express.urlencoded({extended:false}))

//importar o consign
const consign = require('consign')
//executar e configurar 
consign().include('./routes').into(app)

//indicar a pasta dos assets (css, js, imagens, webfonts)
app.use(express.static('./src'))    

module.exports = {app,porta}