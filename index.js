let screen= document.getElementById('screen');
buttons= document.querySelectorAll('button');
let screenValue= '';
for (item of buttons){
    item.addEventListener('click',(e)=>{
    buttonText=e.target.innerText;
    console.log('Button Text is:', buttonText);
    if (buttonText=='X'){
        buttonText='*';
        screenValue+=buttonText;
        screen.value=screenValue;
    }
    else if (buttonText=='C'){
        screenValue="";
        screen.value=screenValue;

    }
    else if (buttonText=='='){
        screen.value= eval(screenValue);
        
    }
    else if (buttonText=='DEL'){
        var remove=screenValue;
        remove=remove.slice(0,-1);
        screenValue= remove;
        screen.value=screenValue;
        
    }
    else if (buttonText=='x^2'){
        screenValue= Math.pow(screenValue,2);
        screen.value=screenValue;
        
    }
    else if (buttonText=='x^3'){
        screenValue= Math.pow(screenValue,3);
        screen.value=screenValue;
        
    }

    else{
        screenValue+=buttonText;
        screen.value=screenValue;
    }


})
}