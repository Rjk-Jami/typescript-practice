var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
// interfaces
// odject er stucture toiri kore
// class er stucture toiri kore
// generics
var addId = function (obj) {
    // <T>
    var id = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { id: id });
};
var user = addId({
    name: "jami",
    age: 25,
});
var addId2 = function (obj) {
    // <T>
    var id = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { id: id });
};
var user2 = addId2({
    name: "jami",
    age: 25,
});
var response1 = {
    status: 200,
    type: 1,
    data: "test"
};
// ENUM
var response2Type;
(function (response2Type) {
    response2Type[response2Type["SUCCESS"] = 200] = "SUCCESS";
    response2Type[response2Type["FAILURE"] = 500] = "FAILURE";
    response2Type[response2Type["UNAUTHENTICATED"] = 401] = "UNAUTHENTICATED";
    response2Type[response2Type["FORBIDDEN"] = 402] = "FORBIDDEN";
})(response2Type || (response2Type = {}));
var response2 = {
    status: 200,
    type: response2Type.UNAUTHENTICATED,
    data: "test"
};
console.log(response2);
