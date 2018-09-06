var min = document.getElementById("input1");
var max = document.getElementById("input2");
var out = document.getElementById("output");
var diff  = Number(max.value) - Number(min.value);
var array = [];
function Count(){
	if ((min.value==='')||(max.value==='')){
		out.value = "Enter From or To";
		return;
	}
	if (array.length<=diff){
		var k = Math.floor(Math.random()*(Number(max.value) - Number(min.value) +1))+ +min.value;
		while(true){
			if (array.includes(k)===true){
				continue;
			}else{
				var pushed = array.push(k);
				console.log(array);
				return;
				out.value = k;	
			}
		}
	}else{
		array.length = 0;
		}
	}
	