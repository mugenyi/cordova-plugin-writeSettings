var exec = require('cordova/exec');

var PLUGIN_NAME = 'WriteSettings';

var WriteSettings = {
    requestWriteSettings: function(errorCallback) {

        function onError(error) {
            errorCallback(error);
        }

        return exec(null, onError, PLUGIN_NAME, 'requestPermission', []);
    }

};

module.exports = WriteSettings;
