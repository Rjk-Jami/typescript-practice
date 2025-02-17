// type Function
let myNewFunc = (a: string, b: string, c?: string) => {
  console.log(`hello ${a} ${b}`);
};
//  kisu define na korle void return korbe,  ar javascript e return kore unDefined
//  void mane akbare sunno, = kisu nai
// unDefined mane, defined na kintu akta value
myNewFunc("a", "b");
let myNewFunc2 = (a: string, b: string, c: string = "null") => {
  console.log(`hello ${a} ${b}`);
};

myNewFunc2("a", "b");

// type aliases = nickname er moto, same type er data akdik jaigai babohar korle, code er simplicity er jonno common vabe declare kore dile eke type aliases bole

//  Function Signature
let userDetails: (
  id: number | string,
  userInfo: {
    name: string;
    age: number;
  }
) => void;

userDetails = (
  id: number | string,
  info: {
    name: string;
    age: number;
  }
) => {
  console.log(`id: ${id}, name: ${info.name}, age: ${info.age} `);
};

userDetails("jami1", { name: "jami khan", age: 25 });

//  class type
//  class hoilo object er blueprints
class Player {
  name: string;
  age: number;
  country: string;
  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }
  play() {
    console.log(`${this.name} from ${this.country} is playing!`);
  }
}

const jami = new Player("jami", 25, "bogura");
const himel = new Player("himel", 25, "kosba");

let players: Player[] = [];

players.push(jami);
players.push(himel);

console.log(players);

//  access modifier
class Player2 {
  private name: string; //not reedit from another space | class er baire use kora jabe na
  public age: number;
  readonly country: string; // readonly private er motoi , eita baire theke change kora jabe na kintu view kora jabe
  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }
  play() {
    console.log(`${this.name} from ${this.country} is playing!`);
  }
}

const jami1 = new Player("jami", 25, "bogura");
const himel1 = new Player("himel", 25, "kosba");

let players2: Player2[] = [];

players.push(jami1);
players.push(himel1);

console.log(players2);

//  jodi access modifier define kore dei
// access modifier na dile, this use kore constructor er modde define kore dite hobe
class Player3 {
  constructor(
    private name: string,
    public age: number,
    readonly country: string
  ) {}
  play() {
    console.log(`${this.name} from ${this.country} is playing!`);
  }
}
