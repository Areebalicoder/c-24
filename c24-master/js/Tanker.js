class Tanker extends BaseClass {
  constructor(x, y, width, height) {
    super(100,390,20,50,angle)
    };

    display(){
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      super.display();
    };
}
