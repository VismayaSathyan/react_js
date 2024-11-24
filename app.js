"use strict";

console.log(this);

function x() {
  console.log(this);
  function y() {
    console.log(this);
  }
  y();
}

x();

const a = () => {
  console.log(this, "a");
  const b = () => {
    console.log(this, "b");
  };
  b();
};

a();

const obj = {
  a: 10,
  screen: function () {
    const y = () => {
      console.log(this);
    };
    y();
  },
};

obj.screen();

console("second commit");

console("third commit");
