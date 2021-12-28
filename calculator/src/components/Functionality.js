import React from "react";
var gInput;
export let handleOut = (input, currentOut) => {
  let vals = {
    a: 0,
    b: 0,
  };
  let finalOut;
  gInput = input;
  if (input.indexOf("+") > 0) {
    parseOperand(vals, input.indexOf("+"));
    finalOut = sum(vals);
  } else if (input.indexOf("-") > 0) {
    parseOperand(vals, input.indexOf("-"));
    finalOut = dif(vals);
  } else if (input.indexOf("*") > 0) {
    parseOperand(vals, input.indexOf("*"));
    finalOut = pro(vals);
  } else if (input.indexOf("/") > 0) {
    parseOperand(vals, input.indexOf("/"));
    finalOut = quo(vals);
  }
  return finalOut;
};
function parseOperand(vals, c) {
  vals.a = parseFloat(gInput.slice(0, c));
  vals.b = parseFloat(gInput.slice(c + 1));
}
function sum(vals) {
  return vals.a + vals.b;
}
function dif(vals) {
  return vals.a - vals.b;
}
function pro(vals) {
  return vals.a * vals.b;
}
function quo(vals) {
  return vals.a / vals.b;
}
