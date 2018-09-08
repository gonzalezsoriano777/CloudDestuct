var CloudDestruction = {
    Towns: 5, 
    TownPopulation: 120,
    LocationOfTown:"Lan, 2134, Lon, 3472",
    NumberOfClouds:"2",
    LocationOfEachCloud:1,
    SizeOfEachCloud:"13 meters",


cloud1: function() {
    return this.Towns + " , " + this.TownPopulation;
    },
    
cloud2: function() {
    return this.LocationOfTown + " , " + this.NumberOfClouds;
}    
    


};

var cloudDestroyer = {
  SizeOfEachCloud: "70 meters",
  colorOfcloud: "greyish white",
  numberOfClouds: "2 each",
  
  
  cloudDes: function() {
      return this.SizeOfEachCloud +  " , " + this.colorOfcloud;
  }
  
  
  
};