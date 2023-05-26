//  config incial
const express = require("express")
const app = express()

// forma de ler JSON / middlewares
app.use(
    express.urlencoded({
        extended: true,

    }),
)

app.use(express.json())

// rota incial / endpoint
app.get('/', (req, res) => { // callback 

    // mostrar req
    res.json({ message: "Oi, Express!" })
})


// porta
    app.listen(3000)




