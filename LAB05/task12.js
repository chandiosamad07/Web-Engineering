function extractKey(arr, key){
   return arr.map(function(value,index,array){
		return value[key];
	});   
}
console.log(extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name:
"Matt", isInstructor:true}], "name"));