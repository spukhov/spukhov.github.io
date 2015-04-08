window.onload =function () {
    var jso;

    jso = new JSO({
        authorization: "https://accounts.google.com/o/oauth2/auth",
        providerID: "google",
        client_id: "497911777160-6mtch23mhiv2avljs4r5eo6v15ook84v.apps.googleusercontent.com",
        redirect_uri: "http://portal.cloudpixx.com:8084/recieveToken"
    });
    JSO.enablejQuery($);

    jso.wipeTokens();
    
    jso.ajax({
        redirect_uri: "http://portal.cloudpixx.com:8080/recieveToken",
        oauth: {
        scopes: {
                request: ["https://www.google.com/m8/feeds/"],
                require: ["https://www.google.com/m8/feeds/"]
            }
        },
        dataType: 'json'
    });
}