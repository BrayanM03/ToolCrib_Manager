function configurationPanel(id){
    
    Swal.fire({
        icon: 'info',
        title: 'Configuraciones',
        html: `
        <div class="container">
        <div class="list-group">
            
            <a href="#" class="list-group-item list-group-item-action" onclick="editarProducto(${id})">Editar datos del producto</a>
            <a href="#" class="list-group-item list-group-item-action" onclick="editarImg(${id})">Cambiar imagen</a>

            </div>
        </div>
        `
        
    })
}

function editarImg(id){
    window.location.href = 'subir-imagen-producto.php?id='+id;
}


