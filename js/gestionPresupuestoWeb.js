// Variables globales.



// Funciones.
export function mostrarDatoEnId(idElemento, valor) {
    let elemento = document.getElementById(idElemento);
    elemento.textContent = valor;
}

function mostrarGastoWeb(idElemento, gasto) {
    let elemento = document.getElementById(idElemento);

    let divGasto = document.createElement('div');
    divGasto.classList.add('gasto');

    let divGastoDescripcion = document.createElement('div');
    divGastoDescripcion.classList.add('gasto-descripcion');
    divGastoDescripcion.textContent = gasto.descripcion;

    let divGastoFecha = document.createElement('div');
    divGastoFecha.classList.add('gasto-fecha');
    divGastoFecha.textContent = gasto.fecha;

    let divGastoValor = document.createElement('div');
    divGastoValor.classList.add('gasto-valor');
    divGastoValor.textContent = gasto.valor;

    let divGastoEtiquetas = document.createElement('div');
    divGastoEtiquetas.classList.add('gasto-etiquetas');

    for (let etiqueta of gasto.etiquetas) {
        let divGastoEtiquetasEtiqueta = document.createElement('span');
        divGastoEtiquetasEtiqueta.classList.add('gasto-etiquetas-etiqueta');
        divGastoEtiquetasEtiqueta.textContent = etiqueta;
        divGastoEtiquetas.append(divGastoEtiquetasEtiqueta);
    }

    divGasto.append(divGastoDescripcion);
    divGasto.append(divGastoFecha);
    divGasto.append(divGastoValor);
    divGasto.append(divGastoEtiquetas);

    elemento.append(divGasto);
}

function mostrarDatosAgrupadosWeb(idElemento, agrup, periodo) {

}


// Export.
export {
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarDatosAgrupadosWeb
}