Const app= require(“express”)()
App,get(“/“, (req, res) => {
    res.setHeder(“set-cookie”, [“setfromserver=1”]
    res.sendFile(‘${_dirname}/index.html’)
})
App.listen(8080, () =>console.log(“listening on port 8080”))