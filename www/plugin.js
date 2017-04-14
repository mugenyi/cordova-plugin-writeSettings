var exec = require('cordova/exec');

var PLUGIN_NAME = 'WriteSettings';

var WriteSettings = {
    echo: function(phrase, cb) {
        exec(cb, null, PLUGIN_NAME, 'echo', [phrase]);
    },
    getDate: function(cb) {
        exec(cb, null, PLUGIN_NAME, 'getDate', []);
    },

    requestWriteSettings: function(cb) {
        exec(cb, null, PLUGIN_NAME, 'requestPermission', []);
    }

};

module.exports = WriteSettings;
