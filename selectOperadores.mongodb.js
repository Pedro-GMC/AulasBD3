/* Criação da constante que representa o nome do banco de dados */
const database = 'BD3-AULA';

/* Criação da constante que representa o nome da coleção de arquivos */
const collection = 'LIVRARIA';

/* Define o banco de dados que será utilizado, caso não exista será criado */
use(database);

/* Seleciona documentos com a ajuda do operador maior $gt: */
db['LIVRARIA'].find({valor:{$gt:100}});

/* Seleciona documentos com a ajuda do operador menor $lt: */
db['LIVRARIA'].find({valor:{$lt:110}});

/* Definindo um intervalo entre valores: */
db['LIVRARIA'].find({valor:{$gte:100, $lte:150}})
              .sort({valor:1});

/* operador lógico and: */
db['LIVRARIA'].find({$and:[
    {valor:{$lte:100}},
    {categoria:{$eq:'Fantasia Heroica'}}
]}).sort({valor:1});

/* operador lógico or: */
db['LIVRARIA'].find({$or:[
    {valor:{$lte:100}},
    {categoria:{$eq:'Fantasia Heroica'}}
]}).sort({valor:1});

/* Seleção de docuentos com uso do operador $in: */
db['LIVRARIA'].find({
    autor:{
        $in:['J.R.R Tolkien', 'Isaac Asimov']
    }
}, {_id:0, codigo:0, descicao:0}).sort({valor:-1});
