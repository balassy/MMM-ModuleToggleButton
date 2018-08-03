# MMM-ModuleToggleButton

This is a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/) to show and hide modules when a hardware button is pushed. This can be useful to temporarily display modules for debugging after the mirror is deployed.

## Features

Coming soon...

For updates, please check the [CHANGELOG](https://github.com/balassy/MMM-ModuleToggleButton/blob/master/CHANGELOG.md).

## Using the module

To use this module follow these steps:

1. Clone this repository to the `modules` folder of your MagicMirror:

```bash
git clone https://github.com/balassy/MMM-ModuleToggleButton.git
```

2. Add the following configuration block to the modules array in the `config/config.js` file:

```js
var config = {
  modules: [
    {
      module: 'MMM-ModuleToggleButton',
      config: {
      }
    }
  ]
}
```

## Configuration options

Coming soon...

## How it works

Coming soon...

## Contribution

Although for operation this module does not depend on any other module, if you would like to contribute to the codebase, please use the preconfigured linters to analyze the source code before sending a pull request. To run the linters follow these steps:

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
