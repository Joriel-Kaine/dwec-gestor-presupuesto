// TODO: Crear las funciones, objetos y variables indicadas en el enunciado
// TODO: Variable global
let presupuesto = 0;
let gastos = [];
let idGasto = 0;

function actualizarPresupuesto(presupActualizado) {
    // TODO
    if (esNumeroNoNegativo(presupActualizado)) {
        return presupuesto = presupActualizado;
    }
    else {
        console.log('Valor incorrecto.');
        return -1;
    }
}

function mostrarPresupuesto() {
    // TODO
    return `Tu presupuesto actual es de ${presupuesto} €`;
}

function CrearGasto(descripcion, valor, fecha, ...etiquetas) {
    // TODO
        this.descripcion = descripcion;
        this.valor = valor;
        this.fecha = isNaN(Date.parse(fecha)) ? Date.now() : Date.parse(fecha);
        this.etiquetas = [];

        if (!esNumeroNoNegativo(this.valor)) this.valor = 0;

        this.mostrarGasto = function() {
            return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`
        };
        this.actualizarDescripcion = function(descripcion) {
            this.descripcion = descripcion;
        };
        this.actualizarValor = function(valor) {
            if (esNumeroNoNegativo(valor)) this.valor = valor;
        };
        this.mostrarGastoCompleto = function() {

        }
        this.actualizarFecha = function() {
            
        }
        this.anyadirEtiquetas = function(...etiquetas) {
            for (let etiqueta of etiquetas) {
                if (!this.etiquetas.includes(etiqueta)) {
                    this.etiquetas.push(etiqueta);
                }
            }
        }
        this.anyadirEtiquetas(...etiquetas);

        this.borrarEtiquetas = function() {

        }
}

function anyadirGasto() {

}

function borrarGasto() {
    
}

function calcularBalance() {

}

function calcularTotalGastos() {

}

function listarGastos() {
    return gastos;
}

// Función auxiliar.
function esNumeroNoNegativo(num) {
    return (typeof num === 'number' && num >= 0) ? true : false;
}

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    anyadirGasto,
    borrarGasto,
    calcularBalance,
    calcularTotalGastos,
    listarGastos
}
