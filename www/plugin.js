var exec = require('cordova/exec');

var PLUGIN_NAME = 'WriteSettings';

var WriteSettings = {
    requestWriteSettings: function(successCallback, errorCallback) {

        function onError(error) {
            errorCallback(error);
        }

        function onSuccess(status) {
            successCallback(status);
        }

        return exec(onSuccess, onError, PLUGIN_NAME, 'requestPermission', []);
    }

};

module.exports = WriteSettings;
