$(function () {
    var jso;

    jso = new JSO({
        providerID: "google",
        client_id: "497911777160-6mtch23mhiv2avljs4r5eo6v15ook84v.apps.googleusercontent.com",
        redirect_uri: "http://portal.cloudpixx.com:8084/recieveToken",
        authorization: "https://accounts.google.com/o/oauth2/auth",
    });
    
    var info = document.URL.substring(document.URL.indexOf('#') + 1),
        hash = {},
        parentWindow,
        infoParams,
        split;

    infoParams = info.split('&');
    infoParams.forEach(function (param) {
        split = param.split('=');
        hash[split[0]] = split[1];
    });

    localStorage.authInfo = JSON.stringify(hash);
    parentWindow = window.open('', 'parent');
    parentWindow.focus();
    
    window.close();
    
});
