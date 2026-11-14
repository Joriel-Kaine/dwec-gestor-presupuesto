// TODO: Crear las funciones, objetos y variables indicadas en el enunciado
// Función auxiliar.
function esNumeroNoNegativo(num) {
    return (typeof num === 'number' && num >= 0) ? true : false;
}
// TODO: Variable global
let presupuesto = 0;

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

function CrearGasto(descripcion, valor) {
    // TODO
        this.descripcion = descripcion;
        this.valor = valor;

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
        
}

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto
}
