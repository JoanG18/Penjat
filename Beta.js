
var lletres = [];
var dolentes = ["_","_","_","_","_","_","_"];
var vides = 7;

        //...
        
//Lista de palabras para el juego

var paraules = ["cordes","fetge","forca","jutges","jutjat","mengen","penjat","quinta","forca"];

var pistes = ["A la quinta forca","A ca un penjat, no hi anomenis cordes",
    "Setze jutges d'un penjat mengen fetge d'un penjat"];

var paraulespistes = [1, 2, 0, 2, 2, 2, 1, 0, 2];

        //...
        
//Escull paraula aleatoria

var aleatori = Math.floor(Math.random() * paraules.length);
var paraula = paraules[aleatori];
var pista = pistes[paraulespistes[aleatori]];

        //...
        
//Marcar cada letra con un "_"

for (var i = 0; i < paraules.length; i++) {
    lletres[i] = "_";}

        
        function comprova() {
            
            lletra = document.getElementById("valor").value;
    
            //Convertir majusc. en minusc. (lletra = lletra.toLowerCase();)
            lletra = lletra.toLowerCase();
            
            switch (lletra) {
                
            case "á":
            case "à":
                lletra = "a";
                break;
            case "è":
            case "é":
                lletra = "e";
                break;
            case "í":
            case "ì":
                lletra = "i";
                break;
            case "ú":
            case "ù":
            case "ü":
                lletra = "u";
                break;
            }
            
        
            
        
          
        var pos = paraula.indexOf(lletra);
        if ((pos != -1) && (lletra !="")) {
            // document.getElementById('miau').play();    
            document.getElementById('miau').play();
            alert("Has encertat!"); 
            
            for (var i = pos; i < paraula.length; i++){
                if (paraula[i] == lletra){
                    lletres[i] = lletra;
                }
              }
              document.getElementById("lletres").innerHTML = lletres;
            } 
        else if (((lletra >= "a") && (lletra <= "z")) ||
                (lletra == "ñ") || (lletra == "-") ||
                (lletra == "ç") || (lletra == ".")) {
                 alert("Has fallat!");
                 document.getElementById('boom_cloud').play();
                 dolentes[7-vides] = lletra;
                 document.getElementById("lletra").innerHTML = dolentes;
                     
                    //Decrementam el comptador Vides
                    // vides = vides - 1;
                    vides--;
       
                    MostraImg();
                } else{
                 window.alert(Idioma.Incorrecte);
        
        document.getElementById("lletra").focus();

        // Actualitzam Vides a la pantalla.
        document.getElementById("vides").innerHTML = 
                "&nbsp;&nbsp;&nbsp;\n\
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + Vides;
            }
            
            
        //comprovar les vides per guanyar o perdre
        if (vides <=0) {
            document.getElementById('cat_fight').play();
            window.alert("I has perdut!");
            
          //  if (document.getElementById('off').hidden) { 
                
          //  }
            AturaTot();
          
        } else {
            if (lletres.indexOf('_') == -1) {
                AmagaImg();
                document.getElementById("ahorcado").hidden = false;
                
                //calcular puntuació
                /*Punts = paraula.length * Vides * 10 - document.getElementById("Segons").innerHTML;
                if (Punts < 0) { Punts = 0; };
                document.getElementById("Punts").innerHTML = Idioma.Puntuacio + " " + Punts;
                */
            
                window.alert("I has guanyat!");
            if (document.getElementById('off').hidden) { 
             document.getElementById("cheer").play();   
            }
            AturaTot();
        } else {
            if (document.getElementById('off').hidden) { 
           document.getElementById("clock_ticking").play();     
            }
        }
    }
 }
    
        
    
    function AturaTot(){
            document.getElementById("valor").disabled = true;
            document.getElementById("boto").disabled = true;
        }
        
    function MostraImg(){
              
        switch (vides) {
         
          case 6:
              
            document.getElementById("ahorcado_6").hidden = false;
            break;
            
          case 5:
                
            document.getElementById("ahorcado_5").hidden = false;
            document.getElementById("ahorcado_6").hidden = true;
            break;
            
          case 4:
 
            document.getElementById("ahorcado_4").hidden = false;
            document.getElementById("ahorcado_5").hidden = true;
            break;
            
          case 3:
 
            document.getElementById("ahorcado_3").hidden = false;
            document.getElementById("ahorcado_4").hidden = true;
            break;
            
          case 2:
 
            document.getElementById("ahorcado_2").hidden = false;
            document.getElementById("ahorcado_3").hidden = true;
            break;
            
          case 1:
 
            document.getElementById("ahorcado_1").hidden = false;
            document.getElementById("ahorcado_2").hidden = true;
            break;
            
          case 0:
 
            document.getElementById("ahorcado_0").hidden = false;
            document.getElementById("ahorcado_1").hidden = true;
            break;
            
          default:
          break;
        }
     }
                
    function AmagaImg(){
        
        document.getElementById("ahorcado_0").hidden = true;
        document.getElementById("ahorcado_1").hidden = true;
        document.getElementById("ahorcado_2").hidden = true;
        document.getElementById("ahorcado_3").hidden = true;
        document.getElementById("ahorcado_4").hidden = true;
        document.getElementById("ahorcado_5").hidden = true;
        document.getElementById("ahorcado_6").hidden = true;
     }
   
    var seconds=0;
    function timer(){
      seconds=seconds+1;
      document.getElementById("counter").innerHTML=seconds;
    }
    setInterval(timer,1000);
