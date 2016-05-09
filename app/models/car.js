app.car = {
   all : [],
   new: (function() {
    var car = function Car(edmundsId, style, carYear){ // add carMake, carModel, carYear
      var that = this;
      this.edmundsId = edmundsId;
      this.style = style;
      this.carYear = carYear;
      function initalize(){
        app.car.all.push(that);
      };
      initalize()
      }
      return car;
    }()),
  adapter: {
    getBy: function(carYear, carMake, carModel){
      return $.ajax({
        method: "GET",
        url: "https://api.edmunds.com/api/vehicle/v2/" + carMake + "/" + carModel + "/" + carYear + "?fmt=json&api_key=y3ynbmeg2hxs7uzx6jm3b8nm"
      }).then(function(data){
        app.car.all.length = 0
        var styleNum;
        var carYear;
        var edmundsId;
        var style;

        var styleNum = data.styles.length; // eventually pass this through to h2 please select from following '8' models
        var carYear = data.year;
        for(var i = 0; i < styleNum; i ++){
          edmundsId = data.styles[i].id
          style = data.styles[i].name
          var Car = new app.car.new(edmundsId, style, carYear)
          // figure out how to pass through carMake, carYear, and carModel from getBy above?
         }
         return app.car.all
      })
    }
  }
}

//forEach loop did not have scope for creating objects
 // data.styles.forEach(function(car){
        //   debugger;
        //   style = car.name;
        //   edmundsId = car.id;
        // });

// create a success and failure for if they search for a car we dont have or wrong term (
  // Lexus RX-350 and RX 350 works but RX doesnt and Civic SI doesnt)