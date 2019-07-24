const app= require(“express”)()
app.get(“/“, (req, res) => {

    res.setHeader(“set-cookie”, [“setfromserver=1”])
    res.sendFile(‘${__dirname}/index.html’)

})

app.listen(8080, () =>console.log(“listening on port 8080”)