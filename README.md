# trip_calculator



https://maps.googleapis.com/maps/api/directions/json?origin=Lincoln,MA&destination=Concoard,MA&key=AIzaSyCgMJ4FlwGHeL3nRiexUcv7hXeHMM--K98


https://maps.googleapis.com/maps/api/directions/json?origin= + " " + &destination= + " " + &key=AIzaSyCgMJ4FlwGHeL3nRiexUcv7hXeHMM--K98


-can pass through a string 183sandypondroadlincolnma and it will work - take in any user address search (Google will handle it)

have to get MPG through style ID which I currently pull as the edmundId (rename as styleID):
https://api.edmunds.com/api/vehicle/v2/styles/{style ID}/equipment?fmt=json&api_key={api key}
