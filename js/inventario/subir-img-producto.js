Dropzone.options.myGreatDropzone = { // camelized version of the `id`
    paramName: "file", // The name that will be used to transfer the file
    maxFilesize: .5, // MB
    maxFiles: 1,
    acceptedFiles: ".jpg",
    accept: function(file, done) {
      if (file.name == "avatar.jpg") {
        done("Naha, you don't.");
      }
      else { done(); }
    }
  };

  $("#myGreatDropzone").on("complete", function(file) {
    $("#myGreatDropzone").removeFile(file);
  });

  Dropzone.options.dictMaxFilesExceeded = "No puedes subir más de una imagen";