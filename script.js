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

// test strava data
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = "6e57d40b403333339ddf7ca6177881820a3892cf"

var api = new StravaApiV3.ActivitiesApi()

var id = 36416; // {Long} The identifier of the activity.

var opts = { 
  'includeAllEfforts': true // {Boolean} To include all segments efforts.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getActivityById(id, opts, callback);

log('Я не знаю, зачем ты смотришь JS debug консоль.', "color: green;");
log('Но, видимо, тебе действительно нужно что-то важное. ', "color: green;");
log('Такому человеку я готов дать свой номер телефона.', "color: green;");
log('Записывай. +79163092560', "color: green;");
