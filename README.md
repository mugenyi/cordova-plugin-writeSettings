cordova-plugin-writesettings
======

Cordova Plugin To Request Write Settings Permissions for android 6.0 and above

installation
--
    cordova plugin add https://github.com/mugenyi/cordova-plugin-writeSettings.git

How to request permission

    WriteSettings.requestWriteSettings(function(error){
       console.log(error);
    });
