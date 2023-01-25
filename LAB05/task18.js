function removeVowels(str){
    let c, i
    stringWithoutVowels = [];
    for (i=0; i<=str.length-1; i++){
      c = str[i];
      if (c=="a"|| c=="e" || c=="i" || c=="o" || c=="u" || c=="A"|| c=="E"|| c=="I" || c=="O" || c=="U"){
      }
      else{
          stringWithoutVowels.push(c);
      }
    }
    return stringWithoutVowels;
}

console.log(removeVowels("Abdul Samad"));
