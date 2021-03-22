/*
 * Express Server
 */

var settings = require("../settings.js");
var express = require("express");
var compression = require("compression");
var bodyParser = require("body-parser");

module.exports = function () {
    
    var app = express();
    
    app.use(compression());

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.enable("trust proxy");

//    require('../app/routes/system.route.js')(app, ipfs, web3Connections);
//    require('../app/routes/web3.route.js')(app, ipfs, web3Connections);

    app.use(express.static(settings.server.publicHtml));

    app.use("/json", express.static("./"));
    app.use("/media", express.static("./media"));

    app.get("/*", function (req, res) {
        res.sendFile("index.html", {root: settings.server.publicHtml});
    });

    return app;

};

/*
 * vim: ts=4 et nowrap autoindent
 */