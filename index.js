// Object Literals
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function() {
//         console.log('draw')
//     }
// }

// circle.draw()

// Factories
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function() {
//             console.log('draw')
//         }
//     }
// }
// const circle = createCircle(1)
// circle.draw()

// // Constructors
// function Circle(radius) {
//     console.log('this', this)
//     this.radius = radius,
//     this.draw = function() {
//         console.log('draw')
//     }
// }
// const another = new Circle(1)

// Constructor Property
// every function has a constructor property to create that object
// let x = {}

// // let x - new Object()

// new String() // '', "", ``
// new Boolean() // true, false
// new Number() // 1, 2, 3 ...

// Function are Objects in javaScript
// function Circle(radius) {
//     this.radius = radius
//     this.draw = function() {
//         console.log('draw')
//     }
// }

// const Cirlce1 = new Function('radius', `
//     this.radius = radius
//     this.draw = function() {
//         console.log('draw)
//     }
// `)

// Circle.call({}, 1)
// Circle.apply({}, [1, 2, 3])

// const another = new Circle(1)

// Value (primitives) vs Reference Types (objects)
// let x = 10
// let y = x

// x = 20
// let x = { value: 10}
// let y = x

// x.value = 20

// let obj = {value: 10}

// function increase(obj) {
//     obj.value++
// }

// increase(obj)
// console.log(obj)

//Value types (Primitives) - Number, String, Boolean, Symbol, undefined, null
// - are copies by their value
//Reference Types (Objects) - Object, Function Array
// - are copies by their reference

// Adding or Removing Properties
// function Circle(radius) {
//     this.radius = radius
//     this.draw = function() {
//         console.log('draw')
//     }
// }

// const circle= new Circle(10)
// dot notation
// circle.location = {x: 1}

// const propertyName = 'center-location'
// bracket notation
// circle[propertyName] = { x: 1}

// delete properties
// delete circle.location
// delete circle['location']

//Enumerating Properties
// function Circle(radius) {
//     this.radius = radius
//     this.draw = function() {
//         console.log('draw')
//     }
// }

// const circle = new Circle(10)
// get all keys iterate through all keys/properties in Circle object
// for (let key in circle) {
//     if (typeof circle[key] !== 'function')
//     console.log(key, circle[key])
// }
// get all keys
// const keys = Object.keys(circle)
// console.log(keys)
// check for existance of a property or method of an object use 'in' operator
// if ('radius' in circle)
//     console.log('Circle has a radius.')

// Abstraction -> hide the complicated details and expose show only the essentials
// function Circle(radius) {
//     this.radius = radius
//     this.defaultLocation = { x: 0, y:0 }

//     this.computeOptimumLocation = function(factor) {

//     }

//     this.draw = function() {
//         this.computeOptimumLocation

//         console.log('draw')
//     }
// }

// const circle = new Circle(10)
// circle.computeOptimumLocation()
// circle.draw()

// Private Properties and Methods
// function Circle(radius) {
    // let color = 'red'  // is local/block scope variable not property
    // this.color = 'red' // property of object

//     this.radius = radius

//     let defaultLocation = { x: 0, y: 0}

        // private members
//     this.computeOptimumLocation = function(factor) {

//     }

//     this.draw = function() {

//         computeOptimumLocation(0.1)

//         console.log('draw')
//     }
// }

// const circle = new Circle(10)
// circle.draw()

// Getters and Setters

// function Circle(radius) {
//     this.radius = radius

//     let defaultLocation = { x: 0, y:0}

//     this.getDefaultLocation = function() {
//         return defaultLocation
//     }
//     this.draw = function() {
//         console.log('draw')
//     }

//     Object.defineProperty(this, 'defaultLocation', {
//         get: function() {
//             return defaultLocation
//         },
//         set: function(value) {
//             if (!value.x || !value.y)
//                 throw new Error('Invalid location.')

//             defaultLocation = value
//         }
//     })
// }

// const circle = new Circle(10)
// circle.defaultLocation = 1
// circle.draw()

// Exercise Stopwatch
// function Stopwatch() {
//     let startTime, endTime, running, duration = 0

//     this.start = function() {
//         if (running)
//             throw new Error('Stopwatch has already started.')

//         running = true

//         startTime = new Date()
//     }

//     this.stop = function() {
//         if (!running)
//             throw new Error('Stopwatch is not started')

//         running = false
        
//         endTime = new Date()

//         const seconds = (endTime.getTime() - startTime.getTime()) / 1000
//         duration += seconds
//     }

//     this.reset = function() {
//         startTime = null
//         endTime = null
//         running = false
//         duration = 0
//     }

//     Object.defineProperty(this, 'duration', {
//         get: function() { return duration }
//     })
// }

// Inheritance Base/Super/Parent Class

// Exercise Stopwatch 2
// function Stopwatch() {
//     let startTime, endTime, running, duration = 0

//     Object.defineProperty(this, 'duration', {
//         get: function() { return duration },
//         set: function(value) {duration = value}
//     })
//     Object.defineProperty(this, 'startTime', {
//         get: function() { return startTime }
//     })
//     Object.defineProperty(this, 'endTime', {
//         get: function() { return endTime }
//     })
//         Object.defineProperty(this, 'running', {
//         get: function() { return running }
//     })
// }

// Stopwatch.protoype.start = function() {
//     if (running)
//         throw new Error('Stopwatch has already started.')

//     this.running = true

//     this.startTime = new Date()
// }

// Stopwatch.protoype.stop = function() {
//     if (!running)
//         throw new Error('Stopwatch is not started')

//     this.running = false
    
//     this.endTime = new Date()

//     const seconds = (endTime.getTime() - startTime.getTime()) / 1000
//     this.duration += seconds
// }

// Stopwatch.protoype.reset = function() {
//     this.startTime = null
//     this.endTime = null
//     this.running = false
//     this.duration = 0
// }

// const sw = new Stopwatch()
// sw.duration = 10

// Premature optimization is the root of all evils

// function Shape() {

// }

// Shape.prototype.duplicate = function() {
//     console.log('duplicate')
// }

// function Circle(radius) {
//     this.radius = radius
// }

// Circle.prototype = Object.create(Object.prototype) // objectBase
// Circle.prototype = Object.create(Shape.prototype)

// Circle.prototype.draw = function() {
//     console.log('draw')
// }

// const s = new Shape()
// const c = new Circle(1)

// Method Overriding
// function extend(Child, Parent) {
//     Child.prototype = Object.create(Parent.prototype)
//     Child.prototype.constructor = Child
// }

// function Shape() {

// }
// function Circle() {

// }

// extend(Circle, Shape)

// Circle.prototype.duplicate = function() {
//     console.log('duplicate cirlce')
// }

// const c = new Circle(1, 'red')

// Mixins / Inheritance
// function mixin(target, ...sources) {
//     Object.assign(target, ...sources)
// }

// const canEat = {
//     eat: function() {
//         this.hunger--
//         console.log('eating')
//     }
// }

// const canWalk = {
//     walk: function() {
//         console.log('walking')
//     }
// }

// const canSwim = {
//     swim: function() {
//         console.log('swim')
//     }
// }

// function Person() {

// }

// mixin(Person.prototype, canEat, canWalk)

// const person = new Person()
// console.log(person)

// function Goldfish() {
// }

// mixin(Goldfish.prototype, canEat, canSwim)

// const goldfish = new Goldfish()
// console.log(goldfish)

// Exercise - Prototypical Inheritannce
// function HtmlElement() {
//     this.click = function() {
//         console.log('clicked')
//     }
// }

// HtmlElement.prototype.focus = function() {
//     console.log('focused')
// }

// function HtmlSelectElement(items = []) {
//     this.items = items

//     this.addItem = function(item) {
//         this.items.push(item)
//     }

//     this.removeItem = function(item) {
//         this.items.splice(this.items.indexOf(item), 1)
//     }
// }

// baseHtmlSelectElement
//HtmlSelectElement.prototype = Object.create(HtmlElement.prototype) //basehtmlElement

// Exercise Polymorphism

// function HtmlElement() { 
//     this.click = function() { 
//       console.log('clicked');
//     }
//   }
  
//   HtmlElement.prototype.focus = function(){
//     console.log('focued');
//   }
  
//   function HtmlSelectElement(items = []) { 
//     this.items = items;
    
//     this.addItem = function(item) { 
//       this.items.push(item);
//     }
  
//     this.removeItem = function(item) {
//       this.items.splice(this.items.indexOf(item), 1);
//     }
  
//     this.render = function() {
//       return `
//   <select>${this.items.map(item => `
//     <option>${item}</option>`).join('')}
//   </select>`;
//     }  
//   }
//   HtmlSelectElement.prototype = new HtmlElement(); 
//   HtmlSelectElement.prototype.constructor = HtmlSelectElement;
  
//   function HtmlImageElement(src) { 
//     this.src = src; 
    
//     this.render = function() {
//       return `<img src="${this.src}" />`
//     }
//   }
//   HtmlImageElement.prototype = new HtmlElement(); 
//   HtmlImageElement.prototype.constructor = HtmlImageElement;
  
//   const elements = [
//     new HtmlSelectElement([1, 2, 3]),
//     new HtmlImageElement('http://')
//   ];
  
//   for (let element of elements) 
//     console.log(element.render());

// ES6 Classes
// class Circle {
//     constructor(radius) {
//         this.radius = radius
//         this.move = function() {}
        
//     }

//     draw() {
//         console.log('draw')
//     }
// }

// const c = new Circle(1)

// const Circle = function() {
//     this.draw = function() { console.log(this) }
// }

// const c = new Circle()
// c.draw()

// const draw = c.draw
// draw()

// const _radius = Symbol()

// class Circle {
//     constructor(radius) {
//         this.radius = radius
//         this['radius'] = radius
//         this[_radius] = radius
//     }
// }

// const c = new Circle(1)

// class Shape {
//     constructor(color) {
//         this.color = color
//     }

//     move() {
//         console.log('move')
//     }
// }

// class Circle extends Shape {
//     constructor(color, radius) {
//         super(color)
//         this.radius = radius
//     }

//     draw() {
//         console.log('draw')
//     }
// }

// const c = new Circle('red', 1)

// Exercise
// const _items = new WeakMap()

// class Stack {
//     constructor() {
//         _items.set(this, [])
//     } 

//     push(obj) {
//         _items.get(this).push(obj)
//     }

//     pop() {
//         const items = _items.get(this)

//         if (_items.get(this).length === 0)
//             throw new Error('Stack is empty.')

//         return items.pop()
//     }

//     peek() {
//         const items = _items.get(this)

//         if (items.length === 0)
//             throw new Error('Stack is empty.')

//         return items[items.length -a]
//     }

//     get count() {
//         return _items.get(this).length
//     }
// }


