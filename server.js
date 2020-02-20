const firebase = require("firebase/app");
require("firebase/database");
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.MYAPIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DBURL,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STRBUCKET,
    messagingSenderId: process.env.MSGSENDERID,
    appId: process.env.APPID
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const express = require("express");
const server = express();

// Configurar o servidor para apresentar arquivos estáticos
server.use(express.static('public'));

// Habilitar body
server.use(express.urlencoded({extended: true}));

// Configurando a template engine
const nunjucks = require("nunjucks");
nunjucks.configure("./", {
    express: server,
    noCache: true
});

// Configurando a apresentação da página
server.get("/", function(req, res) {
    const donors = [];
    const db = firebase.database();
    const ref = db.ref("donors");
    ref.once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot){
            donors.push({
                name: childSnapshot.val().name, 
                email: childSnapshot.val().email, 
                blood: childSnapshot.val().blood
            });
        });
        return res.render("index.html", {donors});
    });
    
});

server.post("/", function(req, res) {
    // Pegar dados do formulário
    const name = req.body.name;
    const email = req.body.email;
    const blood = req.body.blood;

    // Checando se todos os campos foram preenchidos
    if (name == "" || email == "" || blood == "") {
        return res.send("Todos os campos são obrigatórios.");
    }

    // Insderindo dados no Firebase
    const timestamp = new Date().getTime();
    const database = firebase.database();
    database.ref('/donors/' + timestamp).set({
        name: name,
        email: email,
        blood: blood
    });

    return res.redirect("/");
});

// Ligar o servidor e permitir acesso na porta 3000
server.listen(3000, function() {
    console.log("Servidor iniciado.");
});