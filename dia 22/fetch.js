function leerUsuarios(mi_callback) {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((la_respuesta) => {
            // Retorna un 'stream' al contenido
            // Se recibira poco a poco hasta
            // ejecutarse el siguiente then()
            return la_respuesta.json();
        }).then((todo_el_json) => {
            // Ya tenemos toda la respuesta completa
            // Llamamos al callback con el array recibido
            mi_callback(todo_el_json)
        });
}

function listar_usuarios(array_usuarios) {
    array_usuarios.forEach((user) => {
        console.log(`Name: ${user.name}, Email: ${user.email}`);
    });
}

leerUsuarios(listar_usuarios);
