const express = require('express')
const app = express()

const items = [
    {
        title: 'JavaScript',
        message: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
    },

    {
        title: 'HTML5',
        message: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },

    {
        title: 'CSS3',
        message: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
    }
]

const subtitle = "Uma linguagem de modelagem para criação de página HTML em Javascript."

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("pages/index", { 
        qualitys: items, 
        subtitle: subtitle
    })
})

app.get("/about", (req, res) => {
    res.render("pages/about")
})

app.listen(8080)