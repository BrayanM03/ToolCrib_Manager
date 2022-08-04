function verTicket(id) {
    
    window.open("ticket-entrada.php?id="+id, '_blank', 'location=yes,height=570,width=1000,scrollbars=yes,status=yes');
}

function eliminarRegistro(id){
    Swal.fire({
        icon:"question",
        html: `<b>¿Eliminar registro?</b>`,
        confirmButtonText: "Borrar",
        showCancelButton: true,
        cancelButtonText: "Cancelar"
    }).then((response)=>{
        if(response.isConfirmed){

            $.ajax({
                type: "POST",
                url: "servidor/historial/eliminar-entrada.php",
                data: {id:id},
                dataType: "JSON",
                success: function (response2) { 
                    if(response2.status == true){
                        Swal.fire({
                            icon:"success",
                            html: `<b>${response2.mensj}</b>`
                        })

                        tabla.ajax.reload( null, false)
                    }
                }
            });

        }
    })
}