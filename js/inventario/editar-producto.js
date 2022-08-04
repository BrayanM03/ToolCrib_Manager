

    let id = getParameterByName("id_product")
    console.log(id);
    

    $.ajax({
        type: "POST",
        url: "servidor/inventario/traer-producto.php",
        data: {"id": id},
        dataType: "JSON",
        success: function (resp) {

            $("#codigo").val(resp.data.codigo);
            $("#proveedor").val(resp.data.proveedor);
            $("#costo").val(resp.data.costo);
            $("#cantidad").val(resp.data.stock);
            $("#stock-minimo").val(resp.data.minimo);
            $("#stock-maximo").val(resp.data.maximo);
            $("#locacion").val(resp.data.locacion);
            $("#categoria").val(resp.data.categoria);
            $("#descripcion").val(resp.data.descripcion);
            $("#label-codigo").attr("codigo", resp.data.codigo);
            $("#area").val(resp.data.area);

            
    /* Swal.fire({
        icon: 'info',
        title: 'Editar refacción',
        html: `<div class="container">
                <div class="row mb-3">
                  <div class="col-md-6 col-12">
                      <label>Proveedor</label>
                      <input class="form-control" type="text" id="proveedor" value="${resp.data.proveedor}" placeholder="Proveedor"/>
                  </div>
                  <div class="col-md-6 col-12">
                      <label>Modelo</label>
                      <input class="form-control" value="${resp.data.modelo}" type="text" id="modelo" placeholder="Modelo"/>
                  </div>
               </div>
               <div class="row mb-3">
                  <div class="col-md-6 col-12">
                      <label>Costo</label>
                      <input class="form-control" value="${resp.data.costo}" type="number" id="costo" placeholder="0.00"/>
                  </div>
                  <div class="col-md-6 col-12">
                      <label>Precio</label>
                      <input class="form-control" value="${resp.data.precio}" type="number" id="precio" placeholder="0.00"/>
                  </div>
               </div>
               <div class="row mb-3">
                    <div class="col-md-6 col-12">
                        <label>Marca</label>
                        <input class="form-control" value="${resp.data.marca}" type="text" id="marca" placeholder="Marca"/>
                    </div>
               </div>
               <div class="row mb-3">
                  <div class="col-md-6 col-12">
                      <label>Estatus</label>
                      <select class="form-control" id="estatus">
                            <option value="Activo">Activo</option>
                            <option value="Inactivo">Inactivo</option>
                      </select>
                  </div>
               </div>
               <div class="row mb-3">
                  <div class="col-md-4 col-12">
                      <label>Cantidad</label>
                      <input class="form-control" value="${resp.data.stock}" type="number" id="cantidad" placeholder="0"/>
                  </div>
                  <div class="col-md-8 col-12">
                      <label>Observación</label>
                      <textarea class="form-control" type="text" id="observacion" placeholder="Escribe observacion de la refacción">${resp.data.observaciones}</textarea>
                  </div>
               </div>
               <div class="row">
                  <div class="col-md-12 col-12">
                      <label>Descripción</label>
                      <textarea class="form-control" type="text" id="descripcion" placeholder="Escribe descripción de la refacción">${resp.data.descripcion}</textarea>
                  </div>
               </div>
               </div>`,
        didOpen: function(){
            $("#estatus").val(resp.data.estatus)
        },       
        confirmButtonText: "Actualizar",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        preConfirm: function() {

            let proveedor = $("#proveedor").val();
            let modelo = $("#modelo").val();
            let costo = $("#costo").val();
            let precio = $("#precio").val();
            let cantidad = $("#cantidad").val();
            let observacion = $("#observacion").val();
            let descripcion = $("#descripcion").val();
    
            if(costo == ""){
                Swal.showValidationMessage("Agrega un costo")
            }else
            if(precio == ""){
                Swal.showValidationMessage("Agrega un precio")
            }else
            if(cantidad == ""){
                Swal.showValidationMessage("Agrega una cantidad")
            }else
            if(descripcion == ""){
                Swal.showValidationMessage("Agrega una descripcion")
            }

        }
    }).then(function(response) {

        if(response.isConfirmed){

            

            let proveedor = $("#proveedor").val();
            let modelo = $("#modelo").val();
            let marca = $("#marca").val();
            let costo = $("#costo").val();
            let precio = $("#precio").val();
            let cantidad = $("#cantidad").val();
            let observacion = $("#observacion").val();
            let descripcion = $("#descripcion").val();
            let sucursal = getParameterByName("store_id");
            let estatus = $("#estatus").val();

            let data = {
                id : id,
                proveedor: proveedor,
                modelo: modelo,
                marca: marca,
                costo: costo,
                precio: precio,
                cantidad: cantidad,
                observacion: observacion,
                descripcion: descripcion,
                sucursal: sucursal,
                estatus: estatus
            } 

            $.ajax({
                type: "POST",
                url: "../servidor/refacciones/actualizar-refaccion.php",
                data: data,
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
    }) */
        }
    });

    function editarProducto(id){

        let area = $("#area").val();
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
    
            console.log(id);
        let data = {
            id: id,
            proveedor: proveedor,
            codigo: codigo,
            categoria: categoria,
            costo: costo,
            locacion: locacion,
            stock_minimo: stock_minimo,
            stock_maximo: stock_maximo,
            descripcion: descripcion,
            cantidad: cantidad,
            sucursal: sucursal,
            area: area
        } 
    

        $.ajax({
            type: "POST",
            url: "servidor/inventario/actualizar-item.php",
            data: data,
            dataType: "JSON",
            success: function (response2) {
                if(response2.status == true){

                    Swal.fire({
                        icon:"success",
                        html: `<b>${response2.mensj}</b><br>
                        La pagina se recargara`
                    })

                    setTimeout(ReldPage, 1800)
    
                   
                }}})

                function ReldPage(){window.location.reload()}
    
    }
    

    }




    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
      }



  

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

            let codigo_actual = $("#label-codigo").attr("codigo")
    
            $.ajax({
                type: "POST",
                url: "servidor/inventario/validar-codigo.php",
                data: {"codigo":cod, "modo":"edicion", "codigo_actual": codigo_actual},
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