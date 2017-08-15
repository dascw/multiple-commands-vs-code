'use strict';
// vs API import
var vscode = require('vscode');
// import package for json command contents
var pjson  = require('./commands.json');

// activate extension, @note prints out short message to notify user of activation.
function activate(context) {
    console.log('Activated command consolidation.');
    // resgister the command defined in package.json
    var disposable = vscode.commands.registerCommand('extension.callBack', function () {
        // iterate through commands stored in 'callBack' section in package.json.
        for (var idx in pjson.callBack) {
            vscode.commands.executeCommand(pjson.callBack[idx]);
        }
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {
}
exports.deactivate = deactivate;