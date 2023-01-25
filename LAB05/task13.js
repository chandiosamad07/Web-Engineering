function filterLetters(arrOfLetters, letterToFind){
    count = 0;
    for(var i=0; i<arrOfLetters.length; i++){
        
        if(arrOfLetters[i].toLowerCase() == letterToFind.toLowerCase()){
            count = count+1;
        }
    }
    return count;
}
console.log(filterLetters(['S','A', 'M', 'A', 'D'], 'M'));
console.log(filterLetters(['J','a', 'C', 'k', 'S', 'p', 'a', 'r', 'r','o','w'], 'r'));
