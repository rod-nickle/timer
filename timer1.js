// This is an alarm clock / timer which will beep after a specified amount of time has passed.
// The user can specify an unlimited number of alarms using command line arguments

const beep = 'Beep!\n';
const alarms = process.argv.slice(2);
let seconds = 0;

for (let alarm of alarms) {
  seconds = Number(alarm);
  if (isNaN(seconds) || seconds < 0) {
    continue;
  }

  setTimeout(() => {
    process.stdout.write(beep);
  }, (seconds * 1000));
}
