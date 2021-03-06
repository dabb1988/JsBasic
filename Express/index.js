var express = require('express');
var https = require('https')
var http = require('http')
var bodyParser = require('body-parser')
var { initConfig, getToken, getTicket } = require('./wxApi')
var { randomString } = require('./utils')
var mcache = require('memory-cache');
var app = express();

app.use(express.static('Express'));
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.get('/', function(req, res) {
	res.send('Hello World!');
});

//app.get('/wx11', function(req, res) {
//	var proxy_url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET';
////	proxy_url = proxy_url.replace("APPID", "wx84361f0ff19640ca")
//	proxy_url = proxy_url.replace("APPID", "wxac53d8efe2418c35")
////	proxy_url = proxy_url.replace("APPID", "wx340b81f0ca06277a")
//	
////	proxy_url = proxy_url.replace("APPSECRET", "7eced4e6f4b43f754d0e5ea01bbb8789")
//	proxy_url = proxy_url.replace("APPSECRET", "c9c4dc1fd56a90cb2a1454144c1186b3")
////	proxy_url = proxy_url.replace("APPSECRET", "3287ee9f5912a5a8f03359f6bc6276cf")
//	// 
//	console.log(proxy_url)
//	proxy_url = proxy_url.replace("https://api.weixin.qq.com", "/wxapi")
//	console.log(proxy_url)
//	var options = {
//		hostname: 'www.liubo055.top',
//		path: proxy_url,
//		method: 'GET'
//	};
//	var _res = res
//	var req = http.request(options, function(res) {
//		console.log('STATUS: ' + res.statusCode);
//		console.log('HEADERS: ' + JSON.stringify(res.headers));
//		res.setEncoding('utf8');
//		res.on('data', function(chunk) {
//			console.log(JSON.parse(chunk))
//			mcache.put("_token_result_",JSON.parse(chunk))
//			_res.send(chunk);
//		});
//	});
//
//	req.on('error', function(e) {
//		console.log('problem with request: ' + e.message);
//	});
//
//	req.end();
//
////	res.send('Hello World!');
//});

app.get('/wx/getToken',function(req, res) {
//	res.send(mcache.get('_token_result_'));
	getToken("wxac53d8efe2418c35", "c9c4dc1fd56a90cb2a1454144c1186b3")
		.then(function(result){
			if (result.access_token) {
				mcache.put("_token_result_", result)
			}
			res.send(result)
		})
})

app.get('/wx/getTicket',function(req, res) {
	const token_result = mcache.get('_token_result_')
	if (token_result) {
		getTicket(token_result.access_token)
			.then(function(result){
				if (result.ticket) {
					mcache.put("_ticket_result_", result)
				}
				res.send(result)
			})
	}
})

app.post('/wx/getWxConfig', function(req, res) {
	console.log(req.body.initUrl)
	console.log(req.body.jsApiList)
	const ticket_result = mcache.get('_ticket_result_')
	if (ticket_result) {
		var result = initConfig(req.body.initUrl, ticket_result.ticket, req.body.jsApiList)
		console.log(result)
	}
	
	res.send(result)
})

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
});