/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

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
var paraula = paraules [aleatori];
var pista = pistes [paraulespistes [aleatori]];

        //...
        
//Marcar cada letra con un "_"

for (var i = 0; i < paraula.leigth; i++) {lletres[i] = "_"}

        
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
            
        if ((lletra >= "a") && (lletra <= "m") || (lletra == "ç"))
        {      
            alert("Has encertat!"); 
            document.getElementById('miau').play();
            document.getElementById('clock_ticking').play();
            
            lletres = document.getElementById("lletres").innerHTML;
            
            if (lletres == ""){
                lletres = lletres + document.getElementById("valor").value;    
            }
            else{
                lletres = lletres + ", " + document.getElementById("valor").value;
            }
            document.getElementById("lletres").innerHTML = lletres;

        } 
       

        else if((lletra >= "n") && (lletra <= "z") || (lletra == "ñ")){
            
            dolentes = document.getElementById("dolentes").innerHTML;
             
            alert("Has fallat!");
            document.getElementById('boom_cloud').play();
            document.getElementById('clock_ticking').play();
           
            vides = vides - 1;
            MostraImg();
            
            /*
                if (dolentes == ""){
                dolentes = dolentes + document.getElementById("valor").value;  
                
            } else{
                dolentes = dolentes + ", " + document.getElementById("valor").value;
            }
            document.getElementById("dolentes").innerHTML = dolentes;

            document.getElementById("vida").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + vides;
        }
                 
            */
        
        //comprovar les vides per guanyar o perdre
        if (vides <=0) {
            window.alert("I has perdut!");
            document.getElementById('cat_fight').play();
            AturaTot();
            
        } else {
            if (lletres.length >=14) {
                window.alert("I has guanyat!");
                document.getElementById('cheer').play();
                AturaTot();
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
                
    function amaga(){
        
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
