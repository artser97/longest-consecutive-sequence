module.exports = function longestConsecutiveLength(array) {
  let sorted = array.sort(function(a, b) {return a-b});
	let length = sorted.length;
	let res;
	let pos;

	pos = null;
	res = null;

	if (length == 0) {
		return 0;
	}
	else if (length == 1) {
		return 1;
	}
	else {
		for (var i = 0; i < length; i++) {
		pos = pos + 1;

			if(res<pos){
				res = pos;
			}
			if(sorted[i] == (sorted[i+1])){
				pos = pos - 1;
			} else if (sorted[i] != (sorted[i+1] -1 )){
				pos = 0;
			}

		}
	
	return res;
	}
}
