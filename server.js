/*
 * Server Process
 */

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const settings = require("./settings.js");
const fs = require("fs");
const express = require("./config/express.js");

async function run() {
    
    var app = express();

    var argv = process.argv.slice(2);

//    if (argv[0] === "master") {
//        var postDb = await PostDb(orbitdb, true);
//        var userDb = await UserDb(orbitdb, true);
//        var messageDb = await MessageDb(orbitdb, postDb, userDb, true);
//        
//        fs.writeFileSync("./databases.json", JSON.stringify({
//            postDb: postDb.address, 
//            userDb: userDb.address, 
//            messageDb: messageDb.address
//        }));
//        
//    }

    app.listen(settings.server.port);

    console.log(process.env.NODE_ENV + " server listening on port " + settings.server.port);
}

run();

/*
 * vim: ts=4 et nowrap autoindent
 */