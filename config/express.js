module.exports = function()
{

    var app = express();

    app.use(express.static('./public'));
    app.set('view engine', 'ejs');
    app.set('views', './views');

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));




    app.use(expressValidator());

    consign()
    .include('routes')
    .then('infra')
    .then('servico')
    .into(app);

    return app;
}