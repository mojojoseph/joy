const open = require('open');
const randomFile = require('select-random-file')
const dir = '/home/pi/projects/joy/assets';

var joystick = new (require('joystick'))(0, 3500, 350);

joystick.on('button', e => {
  
  // init:true in the event is a "startup" event that
  // can be ignored

  if (!e.init && !e.value) {
    console.log(e);

    randomFile(dir, async (e, f) => {
      console.log(f)
      await open(`file://${dir}/${f}`,
      {newinstance: false, app: {name: 'chromium-browser',arguments: ['--kiosk','--force-device-scale-factor=1.50']}});

    })

  }
});

joystick.on('axis', e => {
  if (!e.init) {
    console.log(e);

    //        value  number
    // UP     32767  0
    // DOWN   -32767 0
    // LEFT   -32767 1
    // RIGHT  32767  1
    // CENTER 0      0
    //  
  }
});
