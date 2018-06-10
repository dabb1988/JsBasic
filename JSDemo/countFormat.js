function format() {
	var count = 1234567
	var arry = count.toString().split('')
	var newStr = arry.reverse().join().replace(/,/g, '')
	var reg = /\d{1,3}/g
	var addStr = newStr.match(reg).join()
	var b = addStr.split("").reverse();
	console.log(b.reduce(function(a, b) {
		return a + b
	}))
	var num_s = "1232134456.546";
	console.log(parseFloat(num_s).toLocaleString());

}
format()