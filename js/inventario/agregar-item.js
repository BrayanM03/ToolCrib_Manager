toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-bottom-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut" 
  }

  $("#codigo").keyup(function(e) {
  let cod = $(this).val()
  cod = cod.replace(/ /g, "")
    if(cod.length <= 0){

        input_codigo = $("#codigo");
        input_codigo.removeClass().addClass("form-control")

    }else{

        $.ajax({
            type: "POST",
            url: "servidor/inventario/validar-codigo.php",
            data: {"codigo":cod},
            dataType: "JSON",
            success: function (response2) {
               if(response2.status == true) {
    
                input_codigo = $("#codigo");
                validar_clase_valida = input_codigo.hasClass("is-valid");
                validar_clase_invalida = input_codigo.hasClass("is-invalid");
    
                if(validar_clase_invalida == true){
                  input_codigo.removeClass("is-invalid");
                  input_codigo.addClass("is-valid");
                }else if(validar_clase_invalida == false){
                  input_codigo.addClass("is-valid");
                }else if(validar_clase_valida == true){
                  input_codigo.removeClass("is-valid");
                  input_codigo.addClass("is-valid");
                }
    
                $('#feedback').removeClass();
                $('#feedback').addClass("valid-feedback");
                $('#feedback').text("El código esta disponible");
                validad_code_area = $("#codigo").attr("valido", "si");
    
                /* if (response == 0) {
    
                    input_codigo = $("#codigo");
                    validar_clase_valida = input_codigo.hasClass("is-valid");
                    validar_clase_invalida = input_codigo.hasClass("is-invalid");
    
                    if(validar_clase_invalida == true){
                      input_codigo.removeClass("is-invalid");
                      input_codigo.addClass("is-invalid");
                    }else if(validar_clase_invalida == false){
                      input_codigo.removeClass("is-valid");
                      input_codigo.addClass("is-invalid");
                    }else if(validar_clase_valida == true){
                      input_codigo.removeClass("is-valid");
                      input_codigo.addClass("is-invalid");
                    }
    
                    $('#feedback').removeClass();
                    $('#feedback').addClass("invalid-feedback");
                    $('#feedback').text("Ya hay un producto con ese código");
                    validad_code_area = $("#codigo").attr("valido", "no");
    
    
                  }else if(response == 1){
    
                    input_codigo = $("#codigo");
                    validar_clase_valida = input_codigo.hasClass("is-valid");
                    validar_clase_invalida = input_codigo.hasClass("is-invalid");
    
                    if(validar_clase_invalida == true){
                      input_codigo.removeClass("is-invalid");
                      input_codigo.addClass("is-valid");
                    }else if(validar_clase_invalida == false){
                      input_codigo.addClass("is-valid");
                    }else if(validar_clase_valida == true){
                      input_codigo.removeClass("is-valid");
                      input_codigo.addClass("is-valid");
                    }
    
                    $('#feedback').removeClass();
                    $('#feedback').addClass("valid-feedback");
                    $('#feedback').text("El código esta disponible");
                    validad_code_area = $("#codigo").attr("valido", "si");
    
                  }else if(response == 2){
    
                    input_codigo = $("#codigo");
                    validar_clase_valida = input_codigo.hasClass("is-valid");
                    validar_clase_invalida = input_codigo.hasClass("is-invalid");
    
                    if(validar_clase_invalida == true){
                      input_codigo.removeClass("is-invalid");
                      input_codigo.addClass("is-valid");
                    }else if(validar_clase_invalida == false){
                      input_codigo.addClass("is-valid");
                    }else if(validar_clase_valida == true){
                      input_codigo.removeClass("is-valid");
                      input_codigo.addClass("is-valid");
                    }
    
                    $('#feedback').removeClass();
                    $('#feedback').addClass("valid-feedback");
                    $('#feedback').text("Este es el mismo codigo");
                      validad_code_area = $("#codigo").attr("valido", "si");
                  } */
    
               }else if(response2.status == false){
    
                input_codigo = $("#codigo");
                validar_clase_valida = input_codigo.hasClass("is-valid");
                validar_clase_invalida = input_codigo.hasClass("is-invalid");
    
                if(validar_clase_invalida == true){
                  input_codigo.removeClass("is-invalid");
                  input_codigo.addClass("is-invalid");
                }else if(validar_clase_invalida == false){
                  input_codigo.removeClass("is-valid");
                  input_codigo.addClass("is-invalid");
                }else if(validar_clase_valida == true){
                  input_codigo.removeClass("is-valid");
                  input_codigo.addClass("is-invalid");
                }
    
                $('#feedback').removeClass();
                $('#feedback').addClass("invalid-feedback");
                $('#feedback').text("Ya hay un item con ese código");
                validad_code_area = $("#codigo").attr("valido", "no");
    
               }
            }
        });

    }
    
  })


function agregarProducto() { 


    let proveedor = $("#proveedor").val();
    let codigo = $("#codigo").val();
    codigo = codigo.replace(/ /g, "")
    let costo = $("#costo").val();
    let stock_minimo = $("#stock-minimo").val();
    let stock_maximo = $("#stock-maximo").val();
    let cantidad = $("#cantidad").val();
    let locacion = $("#locacion").val();
    let categoria = $("#categoria").val();
    let descripcion = $("#descripcion").val();
    let valid_codigo = $("#codigo").attr("valido")

    

    
    if(codigo == ""){
        toastr.error('Agrega un codigo', 'Error')
    }else
    if(valid_codigo == "no"){
        toastr.error('El codigo ingresado esta ocupado', 'Error')
    }else
    if(costo == ""){
        toastr.error('Agrega un costo', 'Error')
    }else
    if(cantidad == ""){
        toastr.error('Agrega una cantidad', 'Error')
    }else
    if(stock_minimo == ""){
        toastr.error('Agrega una stock minimo', 'Error')
    }else
    if(stock_maximo == ""){
        toastr.error('Agrega una stock maximo', 'Error')
    }else
    if(descripcion == ""){
        toastr.error('Agrega una descripcion', 'Error')
    }else{

        let sucursal = $("#sucursal").val();

    let data = {
        proveedor: proveedor,
        codigo: codigo,
        categoria: categoria,
        costo: costo,
        locacion: locacion,
        stock_minimo: stock_minimo,
        stock_maximo: stock_maximo,
        descripcion: descripcion,
        cantidad: cantidad,
        sucursal: sucursal
    } 

    $.ajax({
        type: "POST",
        url: "servidor/inventario/registrar-item.php",
        data: data,
        dataType: "JSON",
        success: function (response2) {
            if(response2.status == true){
                Swal.fire({
                    icon:"success",
                    html: `<b>${response2.mensj}</b>
                    ¿Quieres asignarle una imagen?
                    `,
                    confirmButtonText: 'Si, por supuesto',
                    showCancelButton: true,
                    cancelButtonText: "Mejor no"

                }).then((result) => {

                    if(result.isConfirmed){

                      $.ajax({
                        type: "POST",
                        url: "./servidor/inventario/traer-producto.php",
                        data: {id: response2.id_nuevo},
                        dataType: "JSON",
                        success: function (response) {
                         window.location.href = "subir-imagen-producto.php?id="+response.data.id;
                        }
                      });

                       

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

 }





  