class Ball extends BaseClass{
  constructor(x,y,radius) {
    super(x,y,radius)
  }
  display() {
    this.body = Bodies.circle(x,y,radius);
  }
}
