# MMM-ModuleToggleButton

This is a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/) to show and hide modules when a hardware button is pushed. This can be useful to temporarily display modules for debugging after the mirror is deployed.

## Features

With this module you can control the visibility of a set of modules by pressing a temporary push button connected to a GPIO port of your Raspberry Pi. This module will hide the target modules when the MagicMirror is started, and show them when you press and release the push button. To hide the target modules press and release the push button again.

This module can be useful to temporary display modules that you need only for maintenance (e.g. [MMM-SystemStats](https://github.com/BenRoe/MMM-SystemStats), [MMM-Remote-Control](https://github.com/Jopyth/MMM-Remote-Control), [MMM-NetworkConnection](https://github.com/slametps/MMM-NetworkConnection) or [MMM-ip](https://github.com/fewieden/MMM-ip)).

This module does not render anything to the screen of the MagicMirror, just controls other modules.

For updates, please check the [CHANGELOG](https://github.com/balassy/MMM-ModuleToggleButton/blob/master/CHANGELOG.md).

## Using the module

To use this module follow these steps:

1. Clone this repository to the `modules` folder of your MagicMirror:

```bash
git clone https://github.com/balassy/MMM-ModuleToggleButton.git
```

2. Run `npm install` in the `modules/MMM-ModuleToggleButton` folder to install its dependencies.

3. Add the following configuration block to the modules array in the `config/config.js` file to control the visibility of the built-in Clock and Calendar modules:

```js
var config = {
  modules: [
    {
      module: 'MMM-ModuleToggleButton',
      config: {
        buttonGpioPin: 6,
        moduleNames: [
          'clock',
          'calendar'
        ]
      }
    }
  ]
}
```

4. Connect a momentary push button between the GPIO 6 and GND (Ground) pins of the Raspberry Pi.

## Configuration options

| Option                 | Description
|------------------------|-----------
| `buttonGpioPin`        | **REQUIRED** The number of the GPIO pin to what the button is connected.<br><br> **Type:** `number` <br>**Default value:** `6`
| `moduleNames`          | **REQUIRED** The list of module names that are controlled by this module.<br><br> **Type:** `Array<string>` <br>**Default value:** `[]` (empty string array - does nothing)
| `debounceTimeoutInMilliseconds`| *Optional* The delay in milliseconds before the button push is detected while the GPIO input is bouncing.<br><br> **Type:** `number` <br>**Default value:** `500`

## How it works

This module uses the [onoff NPM package](https://www.npmjs.com/package/onoff) to monitor the GPIO input, and uses the `MM.getModules().withClass(...)` API of the MagicMirror to find the target modules by their name.

## Contribution

If you would like to contribute to the codebase, please use the preconfigured linters to analyze the source code before sending a pull request. To run the linters follow these steps:

1. Install developer dependencies:

```bash
npm install
```

2. Install Grunt:

```bash
npm install -g grunt
```

3. Use Grunt to run all linters:

```bash
grunt
```

## Got feedback?

Your feedback is more than welcome, please send your suggestions, feature requests or bug reports as [Github issues](https://github.com/balassy/MMM-ModuleToggleButton/issues).

## About the author

This project is created and maintaned by [György Balássy](https://www.linkedin.com/in/balassy).
