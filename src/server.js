const express = require('express')
const app = express()
const nunjucks = require('nunjucks')

const { pageGiveClasses, pageLanding, pageStudy, saveClasses} = require('./pages')
const Database = require('./database/db')
const { urlencoded } = require('express')


const port = process.env.port || 8080


//Configuração
app.use(urlencoded({extended:true}))
app.use(express.static("public"))
nunjucks.configure('src/views', {
    express:app,
    noCache:true,
})

// Rotas

app.get("/" , pageLanding)
app.get("/study", pageStudy)
app.get("/give_classes", pageGiveClasses)
app.post('/save_classes', saveClasses)


//Servidor
app.listen(port, ()=>{
    console.log("Servidor rodando na porta ", port ," !");
})
