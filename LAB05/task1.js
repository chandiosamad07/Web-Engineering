function countDown(number){
    var id = setInterval(func,1000);

    function func(){
        console.log(number)
        if (number==0){
            clearInterval(id);
            console.log("Done!")
        }
        else
            number = number-1;
    }
        
}

countDown(5);