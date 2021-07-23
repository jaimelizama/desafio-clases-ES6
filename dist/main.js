"use strict";

var _taxes = _interopRequireDefault(require("./taxes.js"));

var _clients = _interopRequireDefault(require("./clients.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var valores1 = new _taxes["default"](1000, 500);
console.log(valores1._monto_bruto_anual, valores1._deducciones);
valores1._monto_bruto_anual = 2000;
valores1._deducciones = 1500;
console.log(valores1._monto_bruto_anual, valores1._deducciones);
var cliente1 = new _clients["default"]("Jaime", valores1);
console.log(cliente1._nombre, cliente1._impuesto);
console.log(cliente1.calcularImpuesto());