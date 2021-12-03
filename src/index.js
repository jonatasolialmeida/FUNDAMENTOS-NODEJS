const { response, request } = require("express");
const express = require("express");

const app = express();

// essa é forma de informar ao express
// que tipo de informação ele vai receber
// nesse caso, um json
app.use(express.json());

// METODO GET
// **********/////////////////////////*************************** */

//  O BROWSER SÓ ACEITA REQUISIÇÕES GET

// Exemplo com response.send
app.get("/", (request, response) => {
return response.send("Olá Olá")
});

// *************************
// ATENÇÃO, 
// Os parametros precisam ser passados na ordem acima que esta na linha 7 a 10
// app.get("/", (response, request) => {
// return response.send("Olá Olá")
// });
// ********************

// EXEMPLO 1 json com objeto
// app.get("/", (request, response) => {
//     return response.json({ message: "Again, Hello World"})
// });


// Exemplo 2 json com array
// app.get("/courses", (request, response) => {
//     return response.json([
//         "Curso 1",
//         "Curso 2",
//         "Curso 3"])
// });

// **********************///////////////////////////////////*********************** */

// METODO POST
// ///////////////////////////////////////////////


// app.post("/courses", (request, response) => {
// return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
// });

// ///////////////////////////////////////////////////////////

// METODO PUT
// ///////////////////////////////////////////////

// app.put("/courses/:id", (request, response) => {
//     return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
// });


// ///////////////////////////////////////////////////////////

// METODO PATCH
// ///////////////////////////////////////////////

app.patch("/courses/:id", (request, response) => {
    return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});


// ///////////////////////////////////////////////////////////

// METODO DELETE
// ///////////////////////////////////////////////

app.delete("/courses/:id", (request, response) => {
    return response.json(["Curso 6", "Curso 3", "Curso 4"]);
});


// ///////////////////////////////////////////////////////////

/**
 * TIPOS DE PARAMETROS
 * 
 * Route Params => Parametros que recebemos encapsulados na nossa rota
 * são aqueles divididos pelas barras >> (/courses/../../)
 * 
 * SERVEM PARA             PUT OU PATCH    DELETE      GET
 * Identificar um recurso,    editar,     deletar,     buscar
 * 
 * Query Params => Paginação/filtro de busca
 * 
 * Body Params => Os objetos que passamos como parametros para inserção/ alteração
 */

//  app.put("/courses/:id", (request, response) => {
//     //  Essa é uma das formas de trazer o id
//     // o const abaixo traz o parametro acimana linha 92
//      const params = request.params;
//      console.log(params)
//     return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
// });

// ROUTE PARAMS
// ****************
app.put("/courses/:id", (request, response) => {
    //  Outra forma é desestruturando
     const { id } = request.params;
     console.log(id)
    return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});
// nesse formato ele traz o parametro direto que foi definido lá no insomnia 
// courses/1  ou seja // id = 1
// *************

// QUERY PARAMS

app.get("/courses", (request, response) => {
    const query = request.query;
    console.log(query)
    return response.json([
        "Curso 1",
        "Curso 2",
        "Curso 3"])
});

//  BODY PARAMS

app.post("/courses", (request, response) => {
    const body =request.body;
    console.log(body)
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
    });

app.listen(3333);