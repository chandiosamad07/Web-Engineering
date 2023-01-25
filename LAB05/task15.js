function addKeyAndValue(arr, myKey, myValue){
    for(var i=0; i<arr.length; i++){
        arr[i][myKey] = myValue;
    }
    return arr;
}
console.log(addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name:'Elie'}], "isInstructor", true));
