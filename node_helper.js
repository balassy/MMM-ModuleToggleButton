/*
 * MagicMirror Module: MMM-ModuleToggleButton (https://github.com/balassy/MMM-ModuleToggleButton)
 * By György Balássy (https://www.linkedin.com/in/balassy)
 * MIT Licensed.
 */

const NodeHelper = require('node_helper'); // eslint-disable-line import/no-extraneous-dependencies
const Gpio = require('onoff').Gpio;

module.exports = NodeHelper.create({
  start() {
    this.started = false;
  },

  socketNotificationReceived(notification, payload) {
    if (notification === 'TOGGLE_BUTTON_CONFIG' && !this.started) {
      const self = this;
      this.config = payload;

      const button = new Gpio(this.config.buttonGpioPin, 'in', 'both', { persistentWatch: true, debounceTimeout: this.config.debounceTimeoutInMilliseconds });
      button.watch((err, state) => {
        if (state === 1) {
          self.sendSocketNotification(self.config.notificationName, true);
        }
      });

      this.started = true;
    }
  }
});
