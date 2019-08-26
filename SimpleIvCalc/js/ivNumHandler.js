const ivNumHandler= function(elem) {
  //console.log('ivNumHandler');
  
	if(elem.value !== '') {
		if(elem.value.length > 6) {	// limit maxlength to 6.
			elem.value = elem.value.slice(0, 6);
		}
		
		let num = parseInt(elem.value);
		if(isNaN(num)) elem.value = 0;
		else if(num < elem.min) elem.value = elem.min;
		else if(num > elem.max) elem.value = elem.max;
		
		let resultElem = document.getElementById('txtResult');
		
		let ivObj = IvCalc.calc(elem.value);
		if(!IvCalc.isValid(elem.value)) {
		  resultElem.value = 'invalid input';
		  return;
		}
		else {
		  resultElem.value = ivObj.iv;
		}
		
		StatsBarRenderer.draw(ivObj);
		
		if(elem.value.length == 6) {
		  elem.blur();
		  /*
			let ivObj = IvCalc.calc(elem.value);
			resultElem.value = ivObj.iv;
			
			StatsBarRenderer.draw(ivObj);
			*/
		}
		/*else {
			resultElem.value = '';
			StatsBarRenderer.clear();
		}*/
	}
};

const Test  = class {
	static mustDo() {
		alert('must do something');
	}
	
	do() {
		alert('do something');
	}
};
