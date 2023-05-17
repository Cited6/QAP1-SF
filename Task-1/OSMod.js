// The OS Module is used to get information about a computers operating system.
// For example: Memory usage
//OS Module has a variety of functions relating to anoperating system.
// You can recieve information about the systems architecture, current system environment, network interfaces, etc.

const os = require("os");

// Retrieves the total memory available on your device/system
var totalMem = os.totalmem();

// Retrieves the total free memory available on your device/system
var freeMem = os.freemem();

// Displays total memory
console.log(`Total Memory: ${totalMem}`);

//Displays total free memory
console.log(`Free Memory: ${freeMem}`);

//
