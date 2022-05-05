const open = require('open');
const randomFile = require('select-random-file');

// NOTE the dir:  I put things under "projects" but you can change
const dir = '/home/pi/projects/joy/assets';

var joystick = new (require('joystick'))(0, 3500, 350);

// first page
var state = 1;

joystick.on('button', e => {
  
  // init:true in the event is a "startup" event that
  // can be ignored

  if (!e.init && !e.value) {
    console.log(e);

    // Press a button to (re)initialize 
    state = 1;
      await open(`file://${dir}/1.html`,
      {newinstance: false, app: {name: 'chromium-browser',arguments: ['--kiosk','--force-device-scale-factor=1.50']}});

    })

  }
});

joystick.on('axis', e => {
  if (!e.init) {
    console.log(e);

    var s = -1;

    // Calculate new state
    // LEFT   -32767 1
    // RIGHT  32767  1
    if (e.value == -32767 && e.number == 1) {
      // LEFT
      s = 0;
    } else if (e.value == 32767 && e.number == 1) {
      // RIGHT
      s = 1;
    }

    if (s == -1) {
      return; // If not left or right, do nothing
    }

    // Otherwise the new state is calculated
    state = state * 2 + s;

    f = state + ".html";

    await open(`file://${dir}/${f}`,
    {newinstance: false, app: {name: 'chromium-browser',arguments: ['--kiosk','--force-device-scale-factor=1.50']}});

    //        value  number
    // UP     32767  0
    // DOWN   -32767 0
    // LEFT   -32767 1
    // RIGHT  32767  1
    // CENTER 0      0
    //  
  }
});
