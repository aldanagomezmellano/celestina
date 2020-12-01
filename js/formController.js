var getData = function () {
    var nombreSolicitante = document.getElementById("fdNombreSolicitante").value;
    var apellidoSolicitante = document.getElementById("fdApellidoSolicitante").value;
    var edadSolicitante = document.getElementById("fdEdadSolicitante").value;
    var descripcionSolicitante = document.getElementById("fdDescripcionSolicitante").value;
    var domicilioSolicitante = document.getElementById("fdDomicilioSolicitante").value;
    let pago = '';
    let cadenaOro = document.getElementById("check1");
    let efectivo = document.getElementById("check2");
    let transferencia = document.getElementById("check3");

    if (cadenaOro.checked) {
        pago = cadenaOro.value;
    }
    if (efectivo.checked) {
        pago = efectivo.value;
    }
    if (transferencia.checked) {
        pago = transferencia.value;
    }
    var servicioAdicional = document.getElementById("servicioDropDown").value;
    var nombreObjetivo = document.getElementById("fdNombreObjetivo").value;
    var apellidoObjetivo = document.getElementById("fdApellidoObjetivo").value;
    var edadObjetivo = document.getElementById("fdEdadObjetivo").value;
    var descripcionObjetivo = document.getElementById("fdDescripcionObjetivo").value;
    var domicilioObjetivo = document.getElementById("fdDomicilioObjetivo").value;

    let factura = "Solicitante " +"\n"+ "Nombre y Apellido: " + nombreSolicitante + " " + apellidoSolicitante
        + "\n"+"Edad: " + edadSolicitante + "\n"+"Domicilio: " + domicilioSolicitante
        +"\n"+"Descripcion: " + descripcionSolicitante +"\n"+"Pago: " + pago 
        +"\n"+"Objetivo "
        +"\n"+"Nombre y Apellido: " + nombreObjetivo + " " + apellidoObjetivo
        +"\n"+"Edad: " + edadObjetivo +"\n"+"Domicilio: " + domicilioObjetivo;
        +"\n"+"Descripcion: " + descripcionObjetivo;

    window.alert(factura);
};