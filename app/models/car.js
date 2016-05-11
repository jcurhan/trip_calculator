app.car = {
   all : [],
   new: (function() {
    var car = function Car(styleId, style, carYear){ // add carMake, carModel, carYear
      var that = this;
      this.styleId = styleId;
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
    carGetBy: function(carYear, carMake, carModel){
      return $.ajax({
        method: "GET",
        url: "https://api.edmunds.com/api/vehicle/v2/" + carMake + "/" + carModel + "/" + carYear + "?fmt=json&api_key=y3ynbmeg2hxs7uzx6jm3b8nm"
      }).then(function(data){
        app.car.all.length = 0
        var styleNum;
        var carYear;
        var styleId;
        var style;

        var styleNum = data.styles.length; // eventually pass this through to h2 please select from following '8' models
        var carYear = data.year;
        for(var i = 0; i < styleNum; i ++){
          styleId = data.styles[i].id
          style = data.styles[i].name
          var Car = new app.car.new(styleId, style, carYear)
          // figure out how to pass through carMake, carYear, and carModel from getBy above?
         }
         return app.car.all
      })
    },
    mpgGetBy: function(styleId) {
    return $.ajax({
      method: "GET",
      url: "https://api.edmunds.com/api/vehicle/v2/styles/" + styleId + "/equipment?fmt=json&api_key=y3ynbmeg2hxs7uzx6jm3b8nm"
    }).then(function(data){
      var fuelType;
      var cityMpg;
      var highwayMpg;
      var combinedMpg;
      var fuelCapacity;

      data.equipment.forEach(function(equipment) {
        if (equipment.fuelType) {
          fuelType = equipment.fuelType;
        }
        if (equipment.name === "Specifications") {
          equipment.attributes.forEach(function(mpgStat) {
            if (mpgStat.name === "Epa Highway Mpg") {
              highwayMpg = mpgStat.value;
            } else if (mpgStat.name === "Epa City Mpg") {
              cityMpg = mpgStat.value;
            } else if (mpgStat.name === "Epa Combined Mpg") {
              combinedMpg = mpgStat.value;
            } else if (mpgStat.name === "Fuel Capacity") {
              fuelCapacity = mpgStat.value;
            }
          })
        }
      })
      debugger; //need to have the return value pass through whatever is created here - update the car object (or create new one?)
            // the API is formatted different for different cars. itterate through each object and if data.equipment.each do data.equipment.
    })
    }
  }
}

//forEach loop did not have scope for creating objects
 // data.styles.forEach(function(car){
        //   debugger;
        //   style = car.name;
        //   styleId = car.id;
        // });

// create a success and failure for if they search for a car we dont have or wrong term (
  // Lexus RX-350 and RX 350 works but RX doesnt and Civic SI doesnt)