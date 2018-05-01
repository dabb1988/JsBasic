var https = require('https')

function getToken(appid, appsecret) {
	var url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET"
	url = url.replace("APPID", appid)
	url = url.replace("APPSECRET", appsecret)
	
	var result = new Promise((resolve, reject) => {
		https.get(url, function(res){
		    console.log('status code: ' + res.statusCode);
		    console.log('headers: ' + res.headers);
		    res.setEncoding('utf8')
		    res.on('data', function(data){
		    	resolve(JSON.parse(data))
		    });
		}).on('error', function(err){
		    reject(err);
		});
    });
	return result
}

function getTicket(access_token) {
	var url = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=ACCESS_TOKEN&type=jsapi"
	url = url.replace("ACCESS_TOKEN", access_token)
	
	var result = new Promise((resolve, reject) => {
		https.get(url, function(res){
		    res.setEncoding('utf8')
		    res.on('data', function(data){
		    	resolve(JSON.parse(data))
		    });
		}).on('error', function(err){
		    reject(err);
		});
    });
	return result
}

module.exports = {
	getToken,
	getTicket
}
