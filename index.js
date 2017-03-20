function Point(x,y) {
  this.x = x
  this.y = y
  this.toString =  function() {
      return `${this.x}, ${this.y}`
  }
}

// ##############################################
function Shape() {
}

Shape.prototype = Object.create(Point.prototype)

Shape.prototype.constructor = Shape

Shape.prototype.addToPlane = function(x,y) {
  return this.position = new Point(x,y)
}

Shape.prototype.move = function(x,y) {
  return this.position = new Point(x,y)
}

// ##############################################
function Circle(radius) {
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)

Circle.prototype.constructor = Circle

Circle.prototype.area = function() {
  return Math.PI * (this.radius**2)
}

Circle.prototype.circumference = function() {
  return Math.PI * this.radius * 2
}

Circle.prototype.diameter = function() {
  return this.radius * 2
}

// ##############################################
function Side(length) {
  this.length = length
}

// ##############################################
function Polygon(sideArray) {
  this.sides = sideArray
}

Polygon.prototype = Object.create(Shape.prototype)

Polygon.prototype.constructor = Polygon

Polygon.prototype.perimeter = function() {
  let perim = 0
  this.sides.forEach(function(side) {
    return perim += side.length
  })
  return perim
}

Polygon.prototype.numberOfSides = function() {return this.sides.length}

// ##############################################
function Quadrilateral(side1, side2, side3, side4) {
  // Polygon.call(this, x, y)
  this.sides = [new Side(side1), new Side(side2), new Side(side3), new Side(side4)]
}

Quadrilateral.prototype = Object.create(Polygon.prototype)

Quadrilateral.prototype.constructor = Polygon

// ##############################################
function Triangle(side1, side2, side3) {
  this.sides = [new Side(side1), new Side(side2), new Side(side3)]
}

Triangle.prototype = Object.create(Polygon.prototype)

Triangle.prototype.constructor = Polygon

// ##############################################
function Rectangle(width, height) {
  this.width = width
  this.height = height
  this.sides = [new Side(width), new Side(width), new Side(height), new Side(height)]
  // Polygon.call(this, x, y, [new Side(width), new Side(width), new Side(length), new Side(length)])
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)

Rectangle.prototype.constructor = Quadrilateral

Rectangle.prototype.area = function() {
  return this.width * this.height
}
// ##############################################
function Square(side) {
  this.sides = [new Side(side), new Side(side), new Side(side), new Side(side)]
  this.height = side
  this.width = side
  this.hello = () => {console.log('hello')}
}

Square.prototype = Object.create(Rectangle.prototype)

Square.prototype.constructor = Rectangle

Square.prototype.listProperties = function() {
  let prop = [];
  Object.getOwnPropertyNames(Square).forEach(function(item) {
    prop.push(item.toString())
  })
  return prop.join(" ");
}
// var sideee = [new Side(5), new Side(6), new Side(55), new Side(46)]
// var blast = new Triange(4,5)
// blast.addToPlane()
// blast.postition
// blast.move(20,30)
