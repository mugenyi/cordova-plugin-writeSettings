var exec = require('cordova/exec');

var PLUGIN_NAME = 'WriteSettings';

var WriteSettings = {
    requestWriteSettings: function(successCallback, errorCallback) {
        if (requestInProgress) {
            return onError("A runtime permissions request is already in progress");
        }

        function onError(error) {
            requestInProgress = false;
            errorCallback(error);
        }

        function onSuccess(status) {
            requestInProgress = false;
            successCallback(status);
        }

        requestInProgress = true;

        exec(onSuccess, onError, PLUGIN_NAME, 'requestPermission', []);
    }

};

module.exports = WriteSettings;
