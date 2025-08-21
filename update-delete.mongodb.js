/* Criação da constante que representa o nome do banco de dados */
const database = 'BD3-AULA';

/* Criação da constante que representa o nome da coleção de arquivos */
const collection = 'LIVRARIA';

/* Define o banco de dados que será utilizado, caso não exista será criado */
use(database);

/* Atualização de um arquivo no MongoDB: */

/*db['LIVRARIA'].update(
    {codigo:'1'},
    {$set:{"titulo":"Teste de alteração de titulo"}}
);
*/

/* Excluir um arquivo no MongoDB: */
// db['LIVRARIA'].deleteOne({"codigo":'1'});

/* Excluir varios arquivo no MongoDB: */
db['LIVRARIA'].deleteMany({"codigo":'1'});

