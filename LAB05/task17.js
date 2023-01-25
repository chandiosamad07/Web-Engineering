function vowelCount(str){
    let c, i
    vowelsStr = [];
    for (i=0; i<=str.length-1; i++){
      c = str[i]
      if (c=="a"|| c=="e" || c=="i" || c=="o" || c=="u" || c=="A"|| c=="E"|| c=="I" || c=="O" || c=="U"){
        vowelsStr.push(c);
      }
    }
   console.log(vowelsStr);
    var countA_a = 0, countE_e = 0, countI_i = 0, countO_o = 0, countU_u = 0;
    for(var j=0; j<vowelsStr.length; j++){
        c1 = vowelsStr[j];
        if(c1 == 'a' || c1 == 'A'){
            countA_a +=1;
            //console.log(countA_a);
        }
        else if(c1 == 'e' || c1 == 'E'){
            countE_e +=1;
        }
        else if(c1 == 'I' || c1 == 'i'){
            countI_i +=1;
        }
        else if(c1 == 'O' || c1 == 'o'){
            countO_o +=1;
        }
        else if(c1 == 'U' || c1 == 'u'){
            countU_u +=1;
        }
    }
    obj = {
        a:countA_a,
        e:countE_e,
        i:countI_i,
        o:countO_o,
        u:countU_u
    };
    return obj; 
}

console.log(vowelCount("Samad"));
