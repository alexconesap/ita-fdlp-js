let usuarios;

fetch('https://jsonplaceholder.typicode.com/users')
    .then((la_respuesta) => {
        return la_respuesta.json();
    })
    .then((json) => usuarios = json);

// for (user of usuarios) {
//     console.log(user);
// }