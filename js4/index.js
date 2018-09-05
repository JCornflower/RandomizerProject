var min = document.getElementById("input1");
var max = document.getElementById("input2");
var out = document.getElementById("output");
var diff  = Number(max.value) - Number(min.value);
function Count(){
	if ((min.value==='')||(max.value==='')){
		out.value = "Enter From or To";
		return;
	}
	var array = [];
	if (array.length<=diff){
		while(true){
			if (array.includes(k)===true){
				continue;
			}else{
				var k = Math.floor(Math.random()*(Number(max.value) - Number(min.value) +1))+ +min.value;
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
	