import Tax from "./taxes.js";
import Clients from "./clients.js";

const valores1 = new Tax(1000, 500);
console.log(valores1._monto_bruto_anual, valores1._deducciones);
valores1._monto_bruto_anual = 2000;
valores1._deducciones = 1500;
console.log(valores1._monto_bruto_anual, valores1._deducciones);

const cliente1 = new Clients("Jaime", valores1);

console.log(cliente1._nombre, cliente1._impuesto);

console.log(cliente1.calcularImpuesto());
