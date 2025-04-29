

class Animal {
  constructor(name,sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    console.log(`${this.name} makes a noise. by making sound ${this.sound}`);
  }
}


let dog=new Animal("dog","bhow bhow")
dog.speak() // dog makes a noise.
let cat=new Animal("cat",'meow meow') 
cat.speak() // cat makes a noise.
