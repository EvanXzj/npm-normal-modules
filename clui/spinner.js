// Spinner(statusText)
// Parameters

// statusText - The default status text to display while the spinner is spinning.
// style - Array of graphical characters used to draw the spinner. By default, on Windows: ['|', '/', '-', ''], on other platforms: ['◜','◠','◝','◞','◡','◟']
// Methods

// start() - Show the spinner on the screen.
// message(statusMessage) - Update the status message that follows the spinner.
// stop() - Erase the spinner from the screen.
const clui = require('clui'),
  Spinner = clui.Spinner;

let countdown = new Spinner('Exiting in 10 seconds...  ', ['⣾', '⣽', '⣻', '⢿', '⡿', '⣟', '⣯', '⣷']);

countdown.start();

let number = 10;

setInterval(() => {
  number--;
  countdown.message(`Exiting in ${number} seconds...`);
  if (number === 0) {
    process.stdout.write('\n');
    process.exit(0);
  }
}, 1000);
