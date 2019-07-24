const app= require(“express”)()
app.get(“/“, (req, res) => {
    res.setHeder(“set-cookie”, [“setfromserver=1”]
    res.sendFile(‘${_dirname}/index.html’)
})
app.listen(8080, () =>console.log(“listening on port 8080”))