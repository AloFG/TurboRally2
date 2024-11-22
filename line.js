class Lap {
  constructor(tempX, tempY){
    this.x = tempX;
    this.y = tempY;
    this.s = 60;
  }
  
  display(){
    
    rect(this.x, this.y, 100, 30)
  }
  
  addTime(objectX, objectY){
    let d = dist(this.x, this.y, objectX, objectY);
    
    if (d < this.s/2){
      points += 100;
      console.log("completed a lap");
    }
    
  }
}