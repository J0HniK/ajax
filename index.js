const express = require("express");

const app = express();

const jsonParser = express.json();
app.get("/", function(request, response){
    var agent = request.headers["user-agent"];
    var check = agent.search('Mozilla');
    console.log(check);
    if(check != -1) {
        return response.sendStatus(400)} 
    else{
    response.sendFile(__dirname + "/index.html")}
    });

app.post("/", jsonParser, function (request, response) {;

    if(!request.body) return response.sendStatus(400);
    console.log(request.body)
    response.json(request.body)
});

app.listen(3000);