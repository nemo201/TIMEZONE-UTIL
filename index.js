const moment = require('moment-timezone');

moment.tz.setDefault('Asia/Kolkata');
moment.tz.add('America/Los_Angeles|PST PDT|80 70|0101|1Lzm0 1zb0 Op0');

let targetTimezone;

if (process.argv.length != 3) {
  console.log("Usages: node <script-file> <timezone>");
  process.exit(1);
} else {
  targetTimezone = process.argv[2];
}

console.log(`The time at the ${targetTimezone} timezone is ${moment().tz(targetTimezone).format()}`);