const IvCalc  = class {
	static calc(ivNumStr) {
		//alert('must do something');
		let a = parseInt(ivNumStr.substring(0, 2));
		let d = parseInt(ivNumStr.substring(2, 4));
		let s = parseInt(ivNumStr.substring(4, 6));
		let ivRaw = ((a + d + s) / 45) * 100;
		let iv = Math.trunc(ivRaw);
		
		let obj = {
			attack: a,
			defense: d,
			stamina: s,
			iv: iv 
		};
		
		//alert('a: ' + a + '\nd: ' + d + '\ns: ' + s + '\niv: ' + iv);
		
		return obj;
	}
	
	static isValid(ivNumStr) {
		if(ivNumStr.length>6) return false;
		
		if(ivNumStr.length>=2) {
			let a = parseInt(ivNumStr.substring(0, 2));
			if(a > 15) return false;
		}
		
		if(ivNumStr.length>=4) {
			let d = parseInt(ivNumStr.substring(2, 4));
			if(d > 15) return false;
		}
		
		if(ivNumStr.length>=6) {
			let s = parseInt(ivNumStr.substring(4, 6));
			if(s > 15) return false;
		}
		
		return true;
	}
};
