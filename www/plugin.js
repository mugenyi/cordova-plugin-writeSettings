var exec = require('cordova/exec');

var PLUGIN_NAME = 'WriteSettings';

var WriteSettings = {
    requestWriteSettings: function(cb) {
        exec(cb, null, PLUGIN_NAME, 'requestPermission', []);
    }

};

module.exports = WriteSettings;
