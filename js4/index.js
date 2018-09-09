var min = document.getElementById("input1");
var max = document.getElementById("input2");
var out = document.getElementById("output");
var array = [];


function validate() {
	if (!min.value || !max.value){
		out.value = "Enter From or To";
		return;
	}

	if (typeof(+min.value) !== 'number' || !Number.isInteger(+max.value)) {
		out.value = "Enter From or To only number";
		return;
	}

	if (min.value  >= max.value ) {
		out.value = "From number need less than To ";
		return;
	}

	if (min.value  < 0 ||  max.value < 0 ) {
		out.value = "No negative numbers";
		return;
	}

	return true;
}


function getRange(min, max){
	return +max - +min;
}

function getRandomNumber({max, min}) {
	return Math.floor(Math.random()*(Number(max) - Number(min) +1))+ +min;
}

function Count(){

	if(!validate()) {
		return;
	};


	var diff  = getRange(+max.value, +min.value);

	if (array.length<=diff){

		while(true){
			var k = getRandomNumber({ 
				max: max.value, 
				min: min.value 
			});


			if (array.includes(k)){
				continue;
			}else{
				array.push(k);
				out.value = k;	
				break;


			}
		}
	}else{
		array = [];
	}
}
	