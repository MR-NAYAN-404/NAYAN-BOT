console.clear();
const { spawn } = require("child_process");
const express = require("express");
const app = express();
const axios = require("axios");
const chalk = require('chalk');
const logger = require("./Nayanc.js");
const path = require('path');
const PORT = process.env.PORT || 8080 || 9000 || 5555 || 5050 || 5000 || 3003 || 2000 || 1029 || 1010;
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/website/Nayan.html'));
});
console.clear();



function startBot(message) {
    (message) ? logger(message, "starting") : "";
 
  console.log(chalk.blue('⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n             DEPLOYING MAIN SYSTEM\n⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n'));
  logger.loader(`deploying app on port ${chalk.blueBright(PORT)}`);
  app.listen(logger.loader(`app deployed on port ${chalk.blueBright(PORT)}`));
  console.clear()
  /*const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "Nayanb.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });
  child.on("close", (codeExit) => {
        if (codeExit != 0 || global.countRestart && global.countRestart < 5) {
            startBot();
            global.countRestart += 1;
            return;
        } else return;
   */
axios.get("https://raw.githubusercontent.com/MR-NAYAN-404/NAYAN-BOT/main/update.json").then((res) => {
  logger(res['data']['name'], "[ NAME ]");
  logger("Version: " + res['data']['version'], "[ VERSION ]");
  logger(res['data']['description'], "[ DESCRIPTION ]");
  logger(res['data']['new command'], "[ NEW COMMAND ]");
  logger(res['data']['main'], "[ FORK ]");
});

console.log(chalk.blue("            ┳┓┏┓┓┏┏┓┳┓  ┳┓┏┓┏┳┓\n            ┃┃┣┫┗┫┣┫┃┃━━┣┫┃┃ ┃ \n            ┛┗┛┗┗┛┛┗┛┗  ┻┛┗┛ ┻ "))
console.log(chalk.blue(`⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n             NAYAN-BOT UPDATE \n⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n`));
  
  
};
startBot();

