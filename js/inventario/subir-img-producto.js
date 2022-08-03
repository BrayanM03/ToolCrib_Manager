
let id_prod = getParameterByName("id");
$.ajax({
  type: "POST",
  url: "./servidor/inventario/traer-producto.php",
  data: {id: id_prod},
  dataType: "JSON",
  success: function (response) {
    name_p = response.data.codigo;
    $("#name_p").attr("name", name_p);
  }
});




Dropzone.options.myGreatDropzone = { // camelized version of the `id`
    paramName: "file", // The name that will be used to transfer the file
    maxFilesize: .5, // MB
    maxFiles: 1,
    acceptedFiles: ".jpg",
    addRemoveLinks: true,
    renameFile: function (file) {

      let timestamp = getTimestampInSeconds();
      newName = $("#name_p").attr("name");
      console.log(newName);
       return newName +".jpg";// "?t="+ timestamp +
    }
  };

 

 

  Dropzone.options.dictMaxFilesExceeded = "No puedes subir más de una imagen";

  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  function getTimestampInSeconds () {
    return Math.floor(Date.now() / 1000)
  }

