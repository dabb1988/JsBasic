var cgiApi = require('./cgiApi')
var { randomString } = require('./utils')
var sha1 = require('js-sha1');

function initConfig (_url, _jsapi_ticket, _jsApiList) {
	var noncestr = randomString(16)
	var jsapi_ticket = _jsapi_ticket
	var timestamp = Math.round(new Date().getTime()/1000);
	var url = _url
	
	var str = 'jsapi_ticket=' + jsapi_ticket + '&noncestr=' + noncestr + '&timestamp=' + timestamp + '&url=' + url
	var signature = sha1(str)
	
	return {
		debug: false,
		appId: '',
		timestamp,
		noncestr,
		signature,
		jsApiList: _jsApiList,
	}
}

module.exports = {
	...cgiApi,
	initConfig,
}
