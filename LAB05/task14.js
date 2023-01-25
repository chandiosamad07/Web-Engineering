function filterKey(objectsArr, keyGiven){
    const objects = [];
    for (let i = 0; i < objectsArr.length; i++) {
        var s=objectsArr[i];
        if (objectsArr[i].hasOwnProperty(keyGiven)) {
           
            if(objectsArr[i][keyGiven]){
                objects.push(objectsArr[i]);
           }
        }
    }
return objects;
}

console.log(filterKey([
                {name: "Elie", isInstructor:true, isHilarious: false},
                {name: "Tim", isInstructor:true,isHilarious: true},
                {name: "Matt", isInstructor:true}],
                    "isHilarious"));
