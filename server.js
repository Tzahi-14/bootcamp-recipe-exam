const express = require("express")
const path = require("path")
const app = express()
const urllib = require('urllib')


app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))


app.get(`/sanity`, function (req, res) {
    res.send("ok")
})

app.get(`/recipes/:ingredient`, function (req, res) {
    const ingredient = req.params.ingredient
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (err, data) {
        if (err) {
            console.log("error")
            throw err
        }
        const recapies = JSON.parse(data).results
        const recapiesList = []
        for (let r of recapies){

            recapiesList.push({
                ingredients:r.ingredients,
                title : r.title,
                thumbnail: r.thumbnail,
                href : r.href
            })
        }
        console.log(recapiesList)
        res.send(recapiesList)
    })
})


const port = 8081
app.listen(port, function () {
    console.log(`running server on port ${port}`)
})


