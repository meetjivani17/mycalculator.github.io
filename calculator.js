let screen = document.getElementById('value');
let buttons = document.querySelectorAll('button');
let screenvalue = ' ';

for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttontext = e.target.innerText;
        if(buttontext == 'C'){
            screenvalue = '';
            screen.value = screenvalue; 
        }
        else if(buttontext == '='){
            screen.value = eval(screenvalue);
        }
        else{
            screenvalue += buttontext;
            screen.value = screenvalue;
        }
    })
}