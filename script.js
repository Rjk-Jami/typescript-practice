// type Function
var myNewFunc = function (a, b, c) {
    console.log("hello ".concat(a, " ").concat(b));
};
//  kisu define na korle void return korbe,  ar javascript e return kore unDefined
//  void mane akbare sunno, = kisu nai
// unDefined mane, defined na kintu akta value
myNewFunc("a", "b");
var myNewFunc2 = function (a, b, c) {
    if (c === void 0) { c = "null"; }
    console.log("hello ".concat(a, " ").concat(b));
};
myNewFunc2("a", "b");
// type aliases = nickname er moto, same type er data akdik jaigai babohar korle, code er simplicity er jonno common vabe declare kore dile eke type aliases bole
//  Function Signature
var userDetails;
userDetails = function (id, info) {
    console.log("id: ".concat(id, ", name: ").concat(info.name, ", age: ").concat(info.age, " "));
};
userDetails("jami1", { name: "jami khan", age: 25 });
//  class type
//  class hoilo object er blueprints
var Player = /** @class */ (function () {
    function Player(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    Player.prototype.play = function () {
        console.log("".concat(this.name, " from ").concat(this.country, " is playing!"));
    };
    return Player;
}());
var jami = new Player("jami", 25, "bogura");
var himel = new Player("himel", 25, "kosba");
var players = [];
players.push(jami);
players.push(himel);
console.log(players);
//  access modifier
var Player2 = /** @class */ (function () {
    function Player2(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    Player2.prototype.play = function () {
        console.log("".concat(this.name, " from ").concat(this.country, " is playing!"));
    };
    return Player2;
}());
var jami1 = new Player("jami", 25, "bogura");
var himel1 = new Player("himel", 25, "kosba");
var players2 = [];
players.push(jami1);
players.push(himel1);
console.log(players2);
//  jodi access modifier define kore dei
// access modifier na dile, this use kore constructor er modde define kore dite hobe
var Player3 = /** @class */ (function () {
    function Player3(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    Player3.prototype.play = function () {
        console.log("".concat(this.name, " from ").concat(this.country, " is playing!"));
    };
    return Player3;
}());
