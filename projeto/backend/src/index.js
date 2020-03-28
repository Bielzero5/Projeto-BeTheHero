const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


/**
 *   Rota / Recrso
 *
*/
/** 
 * Métodos HTTP:
 * GET: Buscar uma informção no back-end
 * POST: Criar/Cadastrar uma informação no back-end
 * PUT: Alterar uma inforação no back-end
 * DELETE: Deletar uma informação do back-end
*/

/**
 * Tipos de parâmetros;
 * 
 * Querry params: Parâmetros nomeados e enviados na rota após "?" (Filtros, paginaçãp)
 * Route params: Parâmetros utilizados pra identificar recursos
 * Request body: Corpo da requisição, utilzido para criar ou alterar recursos
 */


app.listen(3333);

