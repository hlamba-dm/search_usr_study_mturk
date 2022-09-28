/*
To add config to a file add the following line in the imports:

import Config from "../config"

The config exported by this file has the following structure:

"Config":{
    "timers": bool,
    "pfButton": bool,
    "routeProtect": bool
    "firebase": {} 
}

be sure to update this if you change the fields in config.json
*/

var configFile = require("./config.json")

var Config = {}
if (configFile["isDebugMode"] && process.env.NODE_ENV === "development"){
    Config = configFile["debugConfig"]
} else {
    Config = configFile["prodConfig"]
}

export default Config