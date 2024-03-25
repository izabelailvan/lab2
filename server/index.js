var api = require("./src/api.js").app;
var users = require("./src/users.json");

api.get("/", function (request, response) { ///
  response.json("NodeJS REST API");
});

// http://localhost:3000/

api.get("/users", function (request, response) {
  response.json(users);
});

// http://localhost:3000/

api.listen(3000, function () {
  console.log("Server running @ localhost:3000");
});


api.post("/addUser", function(request, response){
  let name = request.body.name;
  let city = request.body.city;
  users.push({"name": "Iza", "city": "Cluj"});
  response.json(users);
});

api.delete("/removeUser", function(request, response){
  let startIndex = request.query.index;
  let count = 1; 
  users.splice(startIndex, count);
  response.json(users);
});