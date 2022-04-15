# Overview

# Install

Get NodeJS and NPM
```
apt-get install -y nodejs npm
```

`npm install`

# Running

`node index.js`

# Common Errors

Cannot open `/dev/input/js0`:
```
Error: ENOENT: no such file or directory, open '/dev/input/js0'
```

If the USB is flaky the joystick could be getting bumped off the bus.  Try again.

Web browser opens tabs.

This app is designed to run Chromium in Kiosk mode.  Kill any copies of Chromium and press a button.
```
killall chromium-browser
```
