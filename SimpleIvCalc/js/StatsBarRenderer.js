const StatsBarRenderer = class {
	static draw(ivObj) {
		this._drawOneStat('canvasA', ivObj.attack);
		this._drawOneStat('canvasD', ivObj.defense);
		this._drawOneStat('canvasS', ivObj.stamina);
	}
	
	static _drawOneStat(targetCanvasIdPrefix, statsValue) {
	  if(statsValue === 15) {
	    // render 3 full bars
	    let fullColor = '#E18079';
	    this._drawOneBar(document.getElementById(targetCanvasIdPrefix + '1'), 5, fullColor);
	    this._drawOneBar(document.getElementById(targetCanvasIdPrefix + '2'), 5, fullColor);
	    this._drawOneBar(document.getElementById(targetCanvasIdPrefix + '3'), 5, fullColor);
	  }
		else if(statsValue >= 10) {
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
	
	static _drawOneBar(targetCanvas, oneThirdStatsValue, color) {
	  color = color ? color : "#EE9219";
	  //let windowWidth = window.innerWidth * 0.8;
	  //let barWidth = windowWidth / 3;
	  //let fillWidth = (oneThirdStatsValue/5) * barWidth;
	  
	  //targetCanvas.width = barWidth;
	  //targetCanvas.width = targetCanvas.width;
	  //targetCanvas.height = targetCanvas.height;
	  //console.log('targetCanvas.height: ' + targetCanvas.height);
	  let fillWidth = (oneThirdStatsValue/5) * targetCanvas.width;
	  
	  var ctx = targetCanvas.getContext("2d");
	  ctx.clearRect(0, 0, targetCanvas.width, targetCanvas.height);
	  ctx.fillStyle = color;
	  ctx.fillRect(0, 0, fillWidth, targetCanvas.height);
	  
	  //console.log('_drawOneBar: ' + fillWidth);
	}
	
	static clear() {
	  this._clearOneStat('canvasA');
	  this._clearOneStat('canvasD');
	  this._clearOneStat('canvasS');
	}
	
	static _clearOneStat(targetCanvasIdPrefix) {
		//targetElement.innerHTML = '';
		this._drawOneBar(document.getElementById(targetCanvasIdPrefix + '1'), 0);
		this._drawOneBar(document.getElementById(targetCanvasIdPrefix + '2'), 0);
		this._drawOneBar(document.getElementById(targetCanvasIdPrefix + '3'), 0);
	}
	
}