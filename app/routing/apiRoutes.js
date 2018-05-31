var friends = require("../data/friends");

module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
  
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });

    app.post("/api/friends", function(req, res) {

      var bestMatched = {
        name: "",
        photo: "",
        matchDifference: 500
      }
      var clientData 	= req.body;

      var clientName 	= clientData.name;
      var clientPhoto 	= userData.photo;
      var clientScores 	= clientData.scores;

      var totalDifference = 0;

      for (var i=0; i< friends.length; i++) {
        console.log(friends[i].name);
          totalDifference = 0;

          for (var k=0; k< friends[i].scores[k]; k++){

            // We calculate the difference between the scores and sum them into the totalDifference
          totalDifference += Math.abs(parseInt(clientScores[k]) - parseInt(friends[i].scores[j]));
  
          // If the sum of differences is less then the differences of the current "best match"
          if (totalDifference <= bestMatched.matchDifference){
  
            // Reset the bestMatch to be the new friend. 
          bestMatched.name = friends[i].name;
          bestMatched.photo = friends[i].photo;
          bestMatched.matchDifference = totalDifference;
            }
          }
        }
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body-parser middleware
          friends.push(clientData);
          //res.json(true);
          res.json(bestMatched);
      }); 
}


