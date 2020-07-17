// hhhh test
 // hhhhh
Function.prototype.myBind = function (context, ...args1) {
  context = context || window;
  const that = this;

  const Bind = function (...args2) {
    const args = args1.concat(args2);
    return that.apply(this instanceof Bind ? this : context, args);
  };

  const F = function () {};
  F.prototype = this.prototype;
  Bind.prototype = new F();

  return Bind;
}

function P (color) {
  this.color = color;
  console.log(this.name, this.age, color)
}

const S = {
  name: 'ljc',
  age: 25
}

P.prototype.getColor = function () {
  console.log(this.color);
}

const myBind = P.myBind(S);
const T = new myBind('red');
console.log(T);
T.getColor();