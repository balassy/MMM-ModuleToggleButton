/* global Module, MM, Log */

/* Magic Mirror Module: MMM-ModuleToggleButton (https://github.com/balassy/MMM-ModuleToggleButton)
 * By György Balássy (https://www.linkedin.com/in/balassy)
 * MIT Licensed.
 */

Module.register('MMM-ModuleToggleButton', {
  defaults: {
    gpioPin: 6,
    moduleNames: [
    ]
  },

  requiresVersion: '2.1.0',

  notificationReceived(notification, payload, sender) {
    if (notification === 'DOM_OBJECTS_CREATED') {
      this._initialize();
    }
  },

  _initialize() {
    const targetModules = this._getTargetModules();
    for (let i = 0; i < targetModules.length; i++) {
      const targetModule = targetModules[i];
      targetModule.hide(0);
    }
  },

  _getTargetModules() {
    return MM.getModules().withClass(this.config.moduleNames);
  }
});
