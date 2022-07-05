const operatingSystem = require('os');

console.log(operatingSystem.freemem());

const systemDetails = {
    operatingSystem : operatingSystem.type(),
    version : operatingSystem.version(),
    upTime : operatingSystem.uptime(),
    totalMem : operatingSystem.totalmem(),
    freeMem : operatingSystem.freemem()
}

console.log(systemDetails);
