
function RegresarAtras(){
    let store_id = $("#sucursal").val()
    let name =  $("#sucursal").text();
     window.location.href = "index.php?store_id="+store_id+"&name="+name;
 }	// RegresarAtras 