const StatsBarRenderer = class {
	static draw(targetElement, ivObj) {
		//let str = '';
		//str += ''
		//targetElement.innerHTML = '<h1>hello</h1>';
		//alert(this._drawOneBar);
		
		/*this._drawOneBar(document.getElementById('canvasA1'), ivObj.attack);
		this._drawOneBar(document.getElementById('canvasD1'), ivObj.defense);
		this._drawOneBar(document.getElementById('canvasS1'), ivObj.stamina);*/
		
		this._drawOneStat('canvasA', ivObj.attack);
		this._drawOneStat('canvasD', ivObj.defense);
		this._drawOneStat('canvasS', ivObj.stamina);
	}
	
	static _drawOneStat(targetCanvasIdPrefix, statsValue) {
		if(statsValue >= 10) {
		  // render 2 full bars
		  this._drawOneBar(document.getElementById(targetCanvasIdPrefix + '1'), 5);
		  this._drawOneBar(document.getElementById(targetCanvasIdPrefix + '2'), 5);
		  this._drawOneBar(document.getElementById(targetCanvasIdPrefix + '3'), statsValue-10);
		}
		else if(statsValue >= 5) {
		  //render 1 full bar
		  this._drawOneBar(document.getElementById(targetCanvasIdPrefix + '1'), 5);
		  this._drawOneBar(document.getElementById(targetCanvasIdPrefix + '2'), statsValue-5);
		  this._drawOneBar(document.getElementById(targetCanvasIdPrefix + '3'), 0);
		}
		else {
		  this._drawOneBar(document.getElementById(targetCanvasIdPrefix + '1'), statsValue);
		  this._drawOneBar(document.getElementById(targetCanvasIdPrefix + '2'), 0);
		  this._drawOneBar(document.getElementById(targetCanvasIdPrefix + '3'), 0);
		}
	}
	
	static _drawOneBar(targetCanvas, statsValue) {
	  let windowWidth = window.innerWidth * 0.8;
	  let barWidth = windowWidth / 3;
	  let fillWidth = (statsValue/5) * barWidth;
	  
	  targetCanvas.width = barWidth;
	  
	  var ctx = targetCanvas.getContext("2d");
	  ctx.fillRect(1, 1, fillWidth, 18);
	}
	
	static _clearOneStat(targetCanvasIdPrefix) {
		//targetElement.innerHTML = '';
		this._drawOneBar(document.getElementById(targetCanvasIdPrefix + '1'), 0);
		this._drawOneBar(document.getElementById(targetCanvasIdPrefix + '2'), 0);
		this._drawOneBar(document.getElementById(targetCanvasIdPrefix + '3'), 0);
	}
	
	static clear(targetCanvasIdPrefix) {
	  this._clearOneStat('canvasA');
	  this._clearOneStat('canvasD');
	  this._clearOneStat('canvasS');
	}
}