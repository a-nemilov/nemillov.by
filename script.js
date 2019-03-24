function blink()
{
    if(document.querySelector("blink"))
    {
        const d = document.querySelector("#blink") ;
        d.style.visibility= (d.style.visibility=='hidden'?'visible':'hidden');
        setTimeout('blink()', 250);
    }
}
blink();
const text = "nemilov.by"
let i = 0;
function type(){
	i++;
	if( i <= text.length )
	{
		document.querySelector("#type").innerHTML = text.substr(0, i);
		setTimeout( type, 250 );
	}
}
type();


function log(msg) {
   setTimeout(function() {
       console.log('%c'+msg, "color: green;");
   }, 0);
}

log('Я не знаю, зачем ты смотришь JS debug консоль.', "color: green;");
log('Но, видимо, тебе действительно нужно что-то важное. ', "color: green;");
log('Такому человеку я готов дать свой номер телефона.', "color: green;");
log('Записывай. +79163092560', "color: green;");
