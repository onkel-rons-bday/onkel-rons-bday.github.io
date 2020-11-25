
//Erstellung der Türchen
for(var i = 1; i<=24; i++){
	$('#tuerchenDiv').append('<div id="tor'+i+'" class="card justify-content-center hoverClass tor ml-4 mb-4 border border-danger" style="width: 14rem;height: 14rem;">'+i+'</div>');
}

//Aktuellen Tag herausfinden
today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
today = Number(dd);

//Veränderung der Türchen durch Hover
$('.hoverClass').hover(hoverOn,hoverOff);

var Frage = '';
var Antwort ='';


function hoverOn(){
    $('#'+this.id).removeClass('tor');
    $('#'+this.id).addClass('torQ');
    $('#'+this.id).empty();

    //Datums Check
    var TorFrage = this.id;
    if(today >= Number(TorFrage.replace('tor',''))){

                if($('#'+TorFrage+'Present').length == 0){
                    $('#'+TorFrage).append('<button class="btn btn-danger blink" id="'+TorFrage+'Present">Show me todays picture!</button>');
                }

                //Modal Anzeigen

                $('#'+TorFrage+'Present').click(ModalAnzeigen);

                function ModalAnzeigen(){

                    $('#ModHead').empty();
	                $('#ModBody').empty();

                    //Titel Modalfenster
                    $('#ModHead').append('Rons Adventstor No. ' + TorFrage.replace('tor',''));


                    //Inhalte der Modalfenster
	                var Eingabe = TorFrage;
                    switch (Eingabe) {
                        case "tor1":
                            Content = '<img class="imgCenter"src="img/pic1.jpg" ></img>';
                            break;
                        case "tor2":
                            Content = '<img class="imgCenter"src="img/pic2.jpg" ></img>';
                            break;
                        case "tor3":
                            Content = '<img class="imgCenter"src="img/pic3.jpg" ></img>';
                            break;
                        case "tor4":
                            Content = '<img class="imgCenter"src="img/pic4.jpg" ></img>';
                            break;
                        case "tor5":
                            Content = '<img class="imgCenter"src="img/pic5.jpg" ></img>';
                            break;
                        case "tor6":
                            Content = '<img class="imgCenter"src="img/pic6.jpg" ></img>';
                            break;
                        case "tor7":
                            Content = '<img class="imgCenter"src="img/pic7.jpg" ></img>';
                            break;
                        case "tor8":
                            Content = '<img class="imgCenter"src="img/pic8.jpg" ></img>';
                            break;
                        case "tor9":
                            Content = '<img class="imgCenter"src="img/pic9.jpg" ></img>';
                            break;
                        case "tor10":
                            Content = '<img class="imgCenter"src="img/pic10.jpg" ></img>';
                            break;
                        case "tor11":
                            Content = '<img class="imgCenter"src="img/pic11.jpg" ></img>';
                            break;
                        case "tor12":
                            Content = '<img class="imgCenter"src="img/pic12.jpg" ></img>';
                            break;
                        case "tor13":
                            Content = '<img class="imgCenter"src="img/pic13.jpg" ></img>';
                            break;
                        case "tor14":
                            Content = '<img class="imgCenter"src="img/pic14.jpg" ></img>';
                            break;
                        case "tor15":
                            Content = '<img class="imgCenter"src="img/pic15.jpg" ></img>';
                            break;
                        case "tor16":
                            Content = '<img class="imgCenter"src="img/pic16.jpg" ></img>';
                            break;
                        case "tor17":
                            Content = '<img class="imgCenter"src="img/pic17.jpg" ></img>';
                            break;
                        case "tor18":
                            Content = '<img class="imgCenter"src="img/pic18.jpg" ></img>';
                            break;
                        case "tor19":
                            Content = '<img class="imgCenter"src="img/pic19.jpg" ></img>';
                            break;
                        case "tor20":
                            Content = '<img class="imgCenter"src="img/pic20.jpg" ></img>';
                            break;
                        case "tor21":
                            Content = '<img class="imgCenter"src="img/pic21.jpg" ></img>';
                            break;
                        case "tor22":
                            Content = '<img class="imgCenter"src="img/pic22.jpg" ></img>';
                            break;
                        case "tor23":
                            Content = '<img class="imgCenter"src="img/pic23.jpg" ></img>';
                            break;
                        case "tor24":
                            Content = '<img class="imgCenter"src="img/pic24.jpg" ></img>';
                            break;
                        default:
                            Content = '<p>Something went wrong :(</p>';
                            break;
                    }
                    $('#ModBody').append(Content);
	                $('#Modal').modal('show');
        		}
    }
    else{
        var Wartezeit = Number(TorFrage.replace('tor','')) - today;
        if (Wartezeit >= 2){$('#'+this.id).append('<p>Too early! Come back in '+Wartezeit+' days.</p>');}
        else{$('#'+this.id).append('<p>Too early! Come back tomorrow!!</p>');}
    }
}

function hoverOff(){
    $('.QAB').popover('hide');
    $('#'+this.id).removeClass('torQ');
    $('#'+this.id).addClass('tor');
    $('#'+this.id).text(this.id.replace('tor',''));
}



