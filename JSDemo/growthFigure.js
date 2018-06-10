function growthFigure(fromFigure, toFigure, cb) {
	// 全部装为字符串
	fromFigure = fromFigure.toString()
	toFigure = toFigure.toString()
	// 计算小数位数
	var reg = /(?:\.)(\d+)$/g
	var dot = 0
	var matchFrom = fromFigure.match(reg)
	var matchTo = toFigure.match(reg)
	if(!!matchFrom === true) {
		if(dot <= matchFrom[0].length - 1) {
			dot = matchFrom[0].length - 1
		}
	}
	if(!!matchTo === true) {
		if(dot <= matchTo[0].length - 1) {
			dot = matchTo[0].length - 1
		}
	}
	console.log(dot)
}

function showFigure(count) {
	console.log(count)
}

growthFigure('324324', '112', showFigure)