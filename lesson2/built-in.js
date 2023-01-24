const os = require('os');

// info about user
const user = os.userInfo();
 console.log(user);

 //info about system uptime in seconds
 console.log(`the system uptime is ${os.uptime()/60} minutes`);

 const currentOs = {
    name: os.type() ,
    release : os.release() ,
    totalMemory : os.totalmem(),
    freeMemory : os.freemem() ,

 };
 console.log(currentOs);