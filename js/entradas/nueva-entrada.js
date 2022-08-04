/*  */




    function registarEntrada() { 

      Swal.fire({
        icon: 'question',
        html: '<h5>¿Esta seguro de registrar la Entrada?</h5>',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, registrar!',
        cancelButtonText: 'No, cancelar!',
      }).then((result) => {
        if (result.value) {
          registrar();
        }

      })
     
      
  
   }


   function registrar(){
    let nombre = $("#nombre").val();
    let no_empleado = $("#no_empleado").val();
    let area = $("#area").val();
    let fecha = $("#fecha").val();
 

    

    
   if(fecha == ""){
      toastr.error('Escribe una fecha', 'Error')
  }else{

        let sucursal = $("#sucursal").val();

    let data = {
        
        fecha: fecha,
        sucursal: sucursal
    } 

    $.ajax({
        type: "POST",
        url: "servidor/entradas/registrar-entrada.php",
        data: data,
        dataType: "JSON",
        success: function (response2) {
            if(response2.status == true){
                Swal.fire({
                    icon:"success",
                    html: `<b>${response2.mensj}</b>
                    ¿Abrir ticket?
                    `,
                    confirmButtonText: 'Si, por supuesto',
                    showCancelButton: true,
                    cancelButtonText: "Mejor no"

                }).then((result) => {

                    if(result.isConfirmed){
                      restearTabla(user_id);
                      window.location.href = "ticket-entrada.php?id="+response2.id_nuevo;

                       

                    }else if(result.isCancelled){
                        window.location.reload
                    }

                })

                
            }
        }
    });

    }  

    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
   };