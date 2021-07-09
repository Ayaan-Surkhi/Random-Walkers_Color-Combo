class Walker{
    constructor(x, y, radius, red, green , blue){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.red = red;
        this.green = green;
        this.blue = blue;
    }

    draw = () => {
        stroke(this.red, this.green, this.blue);
        strokeWeight(this.radius*2);
        point(this.x, this.y);
    }

    walk = () => {
        this.r = floor(random(4));
        switch (this.r) {
            case 0:
              this.x = this.x + 5;
              break;
            case 1:
              this.x = this.x - 5;
              break;
            case 2:
              this.y = this.y + 5;
              break;
            case 3:
              this.y = this.y - 5;
              break;
          }        
    }
}
