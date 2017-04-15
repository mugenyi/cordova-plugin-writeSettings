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



        exec(onSuccess, onError, PLUGIN_NAME, 'requestPermission', []);
    }

};

module.exports = WriteSettings;
