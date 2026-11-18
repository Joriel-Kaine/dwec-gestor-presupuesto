// Variables globales.



// Funciones.
function mostrarDatoEnId(idElemento, valor) {
    let elemento = document.getElementById(idElemento);
    elemento.textContent = valor;
}

function mostrarGastoWeb(idElemento, gasto) {
    let contenedorPrincipal = document.getElementById(idElemento);

    let divGasto = document.createElement('div');
    divGasto.classList.add('gasto');

    let divGastoDescripcion = document.createElement('div');
    divGastoDescripcion.classList.add('gasto-descripcion');
    divGastoDescripcion.textContent = gasto.descripcion;
    divGasto.append(divGastoDescripcion);

    let divGastoFecha = document.createElement('div');
    divGastoFecha.classList.add('gasto-fecha');
    divGastoFecha.textContent = gasto.fecha;
    divGasto.append(divGastoFecha);

    let divGastoValor = document.createElement('div');
    divGastoValor.classList.add('gasto-valor');
    divGastoValor.textContent = gasto.valor;
    divGasto.append(divGastoValor);

    let divGastoEtiquetas = document.createElement('div');
    divGastoEtiquetas.classList.add('gasto-etiquetas');
    divGasto.append(divGastoEtiquetas);

    for (let etiqueta of gasto.etiquetas) {
        let spanGastoEtiquetasEtiqueta = document.createElement('span');
        spanGastoEtiquetasEtiqueta.classList.add('gasto-etiquetas-etiqueta');
        spanGastoEtiquetasEtiqueta.textContent = etiqueta;
        divGastoEtiquetas.append(spanGastoEtiquetasEtiqueta);
    }
    
    contenedorPrincipal.append(divGasto);
}

function mostrarGastosAgrupadosWeb(idElemento, agrup, periodo) {
    let contenedorPrincipal = document.getElementById(idElemento);

    let divAgrupacion = document.createElement('div');
    divAgrupacion.classList.add('agrupacion');

    let divEncabezado = document.createElement('h1');
    divEncabezado.classList.add('encabezado');

    if (periodo === 'dia') {
        divEncabezado.textContent = 'Gastos agrupados por día';
    }
    else if (periodo === 'anyo') {
        divEncabezado.textContent = 'Gastos agrupados por año';
    }
    else {
        divEncabezado.textContent = `Gastos agrupados por ${periodo}`;
    }
    divAgrupacion.append(divEncabezado);

    for (let periodoGasto in agrup) {
        let divAgrupacionDato = document.createElement('div');
        divAgrupacionDato.classList.add('agrupacion-dato');
        divAgrupacion.append(divAgrupacionDato);

        let spanAgrupacionDatoClave = document.createElement('span');
        spanAgrupacionDatoClave.classList.add('agrupacion-dato-clave');
        spanAgrupacionDatoClave.textContent = periodoGasto;
        divAgrupacionDato.append(spanAgrupacionDatoClave);

        let spanAgrupacionDatoValor = document.createElement('span');
        spanAgrupacionDatoValor.classList.add('agrupacion-dato-valor');
        spanAgrupacionDatoValor.textContent = agrup[periodoGasto];
        divAgrupacionDato.append(spanAgrupacionDatoValor);
    }

    contenedorPrincipal.append(divAgrupacion);
}


// Export.
export {
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb
}