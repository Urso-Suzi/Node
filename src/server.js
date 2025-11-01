import http from 'http';
// import fastify from 'fastify';


//Criar Usuário recebe:(name, email, senha)


// com req e res é possível ter acesso a todos os dados das requisições
const server = http.createServer((request, response) => {
    const {method, url} = request;

    if(method === 'GET' && url === '/users') {
        return response.end('Listagem de Usuários')
    }

    if(method === 'POST' && url === '/users') {
        return response.end('Crianção de Usuários')
    }

    return response.end("Hello World")
})


server.listen(3333)