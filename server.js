/*
 * Server Process
 */

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const settings = require("./settings.js");
const fs = require("fs");
const IPFS = require("./config/ipfs.js");
const Web3 = require("./config/web3.js");
//const OrbitDB = require("./config/orbitdb.js");
const express = require("./config/express.js");
//const PostDb = require("./app/postdb.js");
//const UserDb = require("./app/userdb.js");
//const MessageDb = require("./app/messagedb.js");

async function run() {
    
    var ipfs = await IPFS();
    //var orbitdb = await OrbitDB(ipfs);
    var web3Connections = await Web3();
    var app = express(ipfs, web3Connections);

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

    app.listen(settings.serverPort);

    console.log(process.env.NODE_ENV + " server listening on port " + settings.serverPort);
}

run();

/*
 * vim: ts=4 et nowrap autoindent
 */