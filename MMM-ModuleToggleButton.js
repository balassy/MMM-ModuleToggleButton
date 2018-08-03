/* global Module, MM, Log */

/*
 * MagicMirror Module: MMM-ModuleToggleButton (https://github.com/balassy/MMM-ModuleToggleButton)
 * By György Balássy (https://www.linkedin.com/in/balassy)
 * MIT Licensed.
 */

Module.register('MMM-ModuleToggleButton', {
  defaults: {
    buttonGpioPin: 6,
    debounceTimeoutInMilliseconds: 500,
    notificationName: 'BUTTON_PRESSED',
    moduleNames: [
    ]
  },

  requiresVersion: '2.1.0',

  _isDisplayed: false,

  start: function () {
    this.sendSocketNotification('TOGGLE_BUTTON_CONFIG', this.config);
  },

  notificationReceived(notification, payload, sender) {
    if (notification === 'DOM_OBJECTS_CREATED') {
      this._hideTargetModules();
    }
  },

  socketNotificationReceived: function (notification, payload) {
    if (notification === this.config.notificationName) {
      if (this._isDisplayed) {
        this._hideTargetModules();
      } else {
        this._showTargetModules();
      }
    }
  },

  _hideTargetModules() {
    const targetModules = this._getTargetModules();
    for (let i = 0; i < targetModules.length; i++) {
      const targetModule = targetModules[i];
      targetModule.hide(0);
    }

    this._isDisplayed = false;
  },

  _showTargetModules() {
    const targetModules = this._getTargetModules();
    for (let i = 0; i < targetModules.length; i++) {
      const targetModule = targetModules[i];
      targetModule.show(0);
    }

    this._isDisplayed = true;
  },

  _getTargetModules() {
    return MM.getModules().withClass(this.config.moduleNames);
  }
});
