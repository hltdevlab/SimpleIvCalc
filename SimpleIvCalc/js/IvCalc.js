const IvCalc  = class {
	static calc(ivNumStr) {
	  let ivObj = {
	    attack: 0,
	    defense: 0,
	    stamina: 0,
	    iv: 0
	  };
	  
	  /*if(!this.isValid(ivNumStr) || ivNumStr.length !== 6) {
	    return ivObj;
	  }*/
	  
	  if(ivNumStr.length>=2) {
	    let a = parseInt(ivNumStr.substring(0, 2));
	    if(a <= 15) ivObj.attack = a;
	  }
	  
	  if(ivNumStr.length>=4) {
	    let d = parseInt(ivNumStr.substring(2, 4));
	    if(d <= 15) ivObj.defense = d;
	  }
	  
	  if(ivNumStr.length>=6) {
	    let s = parseInt(ivNumStr.substring(4, 6));
	    if(s <= 15) ivObj.stamina = s;
	  }
	  
		let ivRaw = ((ivObj.attack + ivObj.defense + ivObj.stamina) / 45) * 100;
		let iv = Math.trunc(ivRaw);
		ivObj.iv = iv;
		
		//alert('a: ' + a + '\nd: ' + d + '\ns: ' + s + '\niv: ' + iv);
		
		return ivObj;
	}
	
	static isValid(ivNumStr) {
		if(ivNumStr === undefined || ivNumStr === null) return true;
		if(ivNumStr === "") return true;
		//if(ivNumStr.length !== 6) return true;
		
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
