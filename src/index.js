const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors(
  // {
  //   origin: 'http://meuapp.com'
  // }
  )
);
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 *
 * GET: Buscar/listar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 *
 * Query Params: Parâmetros nomeados enviados na rota após o "?" (Filtros / paginação
 * ex: http://localhost:3333/users?page=2&nome=Denis&idade=25)
 *
 * Route Params: Parâmetros utilizados para identificar um único recurso
 * Ex: app.get('/users/:id', (request, response) => {
 *
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * Banco de dados
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */


