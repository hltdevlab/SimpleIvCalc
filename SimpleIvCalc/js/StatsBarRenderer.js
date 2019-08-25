const StatsBarRenderer = class {
	static draw(targetElement, ivObj) {
		//let str = '';
		//str += ''
		//targetElement.innerHTML = '<h1>hello</h1>';
		//alert(this._drawOneBar);
		
		this._drawOneBar(document.getElementById('canvasA1'), ivObj.attack);
		this._drawOneBar(document.getElementById('canvasD1'), ivObj.defense);
		this._drawOneBar(document.getElementById('canvasS1'), ivObj.stamina);
	}
	
	static _drawOneBar(targetCanvas, statsValue) {
		let windowWidth = window.innerWidth;
		let barWidth = windowWidth / 3;
		let fillWidth = (statsValue/15) * barWidth;
		
		targetCanvas.width = barWidth;
		
		var ctx = targetCanvas.getContext("2d");
		ctx.fillRect(1, 1, fillWidth, 18);
	}
	
	static clear(targetElement) {
		//targetElement.innerHTML = '';
	}
}