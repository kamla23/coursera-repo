const fs = require('fs');

function checkReboot() {
  
    return fs.existsSync('/run/reboot-required');
}

function main() {
    if (checkReboot()) {
        console.log('Pending Reboot.');
        process.exit(1);
    }
    console.log("Everything ok.");
    process.exit(0);
}

main();

