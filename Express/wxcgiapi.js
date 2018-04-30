var https = require('https')
var http = require('http')

async function getToken(appid, appsecret){
	var url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET"
	url = url.replace("APPID", appid)
	url = url.replace("APPSECRET", appsecret)
	var a = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("dsfsdf");
        }, 2000);
    });
	return a
}

module.exports = {
	getToken
}
