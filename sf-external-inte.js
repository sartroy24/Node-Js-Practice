var sf = require('node-salesforce');
require('dotenv').config()
let username = '**'
let password = '**'
var conn = new sf.Connection({
    // you can change loginUrl to connect to sandbox or prerelease env.
    loginUrl: 'https://login.salesforce.com'
});
conn.login(username, password, function (err, userInfo) {
    if (err) { return console.error(err); }
    // Now you can get the access token and instance URL information.
    // Save them to establish connection next time.
    console.log(conn.accessToken);
    console.log(conn.instanceUrl);
    // logged in user property
    console.log("User ID: " + userInfo.id);
    console.log("Org ID: " + userInfo.organizationId);
    // ...
    conn.apex.get("/ContactAPI/5", function (err, result) {
        // the response object structure depends on the definition of apex class
        console.log('result:', JSON.stringify(result))
    });
    // var records = [];
    // conn.query("SELECT Id, Name FROM Account", function (err, result) {
    //     if (err) { return console.error(err); }
    //     console.log("total : " + result.totalSize);
    //     console.log("fetched : " + result.records.length);
    // });
})