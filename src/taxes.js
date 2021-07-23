export default class Tax {
  constructor(monto_bruto_anual, deducciones) {
    this._monto_bruto_anual = monto_bruto_anual;
    this._deducciones = deducciones;
  }
  get monto_bruto_anual() {
    return this._monto_bruto_anual;
  }
  set monto_bruto_anual(nuevoMonto_bruto_anual) {
    this._monto_bruto_anual = nuevoMonto_bruto_anual;
  }
  get deducciones() {
    return this._deducciones;
  }
  set deducciones(nuevasDeducciones) {
    this._deducciones = nuevasDeducciones;
  }
}

/////////////////////////// PAra
// Para revisar el código

// class Tax {
//   constructor(monto_bruto_anual, deducciones) {
//     this._monto_bruto_anual = monto_bruto_anual;
//     this._deducciones = deducciones;
//   }
//   get monto_bruto_anual() {
//     return this._monto_bruto_anual;
//   }
//   set monto_bruto_anual(nuevoMonto_bruto_anual) {
//     this._monto_bruto_anual = nuevoMonto_bruto_anual;
//   }
//   get deducciones() {
//     return this._deducciones;
//   }
//   set deducciones(nuevasDeducciones) {
//     this._deducciones = nuevasDeducciones;
//   }
// }

// class Clients {
//   constructor(nombre, impuesto) {
//     this._nombre = nombre;
//     this._impuesto = impuesto;
//   }
//   get nombre() {
//     return this._nombre;
//   }
//   set nombre(nuevoNombre) {
//     this._nombre = nuevoNombre;
//   }

//   calcularImpuesto() {
//     return (
//       (this._impuesto._monto_bruto_anual - this._impuesto._deducciones) * 0.21
//     );
//   }
// }

// // checkeando el código

// const valores1 = new Tax(1000, 500);
// console.log(valores1._monto_bruto_anual, valores1._deducciones);
// valores1._monto_bruto_anual = 2000;
// valores1._deducciones = 1500;
// console.log(valores1._monto_bruto_anual, valores1._deducciones);

// const cliente1 = new Clients("Jaime", valores1);

// console.log(cliente1._nombre, cliente1._impuesto);

// console.log(cliente1.calcularImpuesto());
