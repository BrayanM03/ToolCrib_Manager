producto = $("#codigo")
producto.select2({
    placeholder: "Busca por codigo o descripcion...",
    theme: "bootstrap-5",
    height:"20px",
    ajax: {
        url: "servidor/busqueda/buscar-productos.php",
        type: "post",
        dataType: 'json',
        delay: 250,

        data: function (params) {
         return {
           input: params.term // search term
           
         };
        },
        processResults: function (data) {
            return {
               results: data
            }; 
          },
       
        cache: true

    },
    language:  {

        inputTooShort: function () {
            return "Busca por codigo o descripcion...";
          },
          
        noResults: function() {
    
          return "Sin resultados";        
        },
        searching: function() {
    
          return "Buscando..";
        }
      },

      templateResult: formatResultProducto,
      templateSelection: formatsSelection

});



producto.on('select2:select', function(selection){

  let repo = selection.params.data
  

      formatSelectionP(repo)
   

})

function formatsSelection(repo){

  
  if(repo.id == ""){
  let label =  repo.text;
  return label;
  }else{
    $("#btn-add").attr("valid", "true");
    return repo.descripcion
   
  }
}

function formatResultProducto(repo){


    if (repo.loading) {
        return repo.text;
      }


      if(repo.id !== ""){

     
        

 
       var $container = $(`
           <div class="row">
                <div class="col-12 col-md-8">

                <div class="row">
                    <div class="col-12 col-md-12">
                        <div>${repo.descripcion}</div>
                    </div>
                </div>

                <div class="row">
                        <div class="col-12 col-md-12 mt-1" style="font-size:12px;">
                        <div><b>Codigo:</b>${repo.codigo}  <b>Stock:</b>${repo.stock}</div>
                    </div>
                </div>

                </div>

           <div class="col-12 col-md-4">
           <img src="img/productos/${repo.img}.jpg" class="img-fluid" width="50" height="50"alt="Responsive image" style="border:1px solid gray; border-radius: 8px;">
           </div>

           </div>

           



       `
         //  "<span id='"+repo.id+"'>"+ repo.marca +" "+ repo.modelo + " " + repo.tonelaje + "</span>"
       );
        
      }else{
          $container = "";
      }

        return $container;

}


function formatSelectionP(repo) {

  
  if(repo.stock !== 0){

  setPantallaCargando()  
  $("#codigo-data").text(repo.codigo)
  $("#proveedor-data").text(repo.proveedor)
  $("#stock-data").text(repo.stock)
  $("#locacion-data").text(repo.locacion)
  $("#categoria-data").text(repo.categoria)
  $("#descripcion-data").text(repo.descripcion)
  $("#img-prod").attr("src", "img/productos/"+ repo.img	+ ".jpg")
  $("#cantidad").val("")
  $('#feedback').removeClass();
  $('#feedback').text("");
  $("#cantidad").attr("valido", "");
  $("#cantidad").removeClass().addClass("form-control");
  $("#producto_id").val(repo.id)


  quitarLoad()


  }else{

    Toast.fire({
      icon: 'error',
      title: 'Este producto ya no tiene stock'
    });
    
    $("#lista-series").empty().append(`
                    <div class="list-group-item list-group-item-action" aria-current="true">
                        <div class="row">
                            <div class="col-12 col-md-12">Sin datos</div>
                        </div>
                    </div>
            `)

  }

  

  
}



function setPantallaCargando(){
 
    $("#area-loading").append(`
    <div class="loading show">
    <div style="display:flex; flex-direction:column; justify-content:center;">
        <div class="spin"></div><br>
        <span><b>Cargando<span class = "dotting"> </span></b></span>
    </div>
  </div>
    `)
  }

  function quitarLoad() { 
 
    $(".loading").removeClass("show");
    setTimeout(removeLoad, 1300)
   }

   function removeLoad(){
    $(".loading").remove();
   };