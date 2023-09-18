const { mimcsponge } = require("@tornado/circomlib");
const { bigInt } = require("@tornado/snarkjs");
module.exports = (left, right) =>
  mimcsponge.multiHash([bigInt(left), bigInt(right)]).toString();
