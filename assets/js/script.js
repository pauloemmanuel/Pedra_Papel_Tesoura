var escolhaBot = 'tesoura';
function resultado(opcao){
    var vencedor;
    resetar();





  var i = 0;
 const intervalo = setTimeout( () =>{

    while(i<=3){
    document.getElementById("pedra").classList.add('azul');
    setTimeout(() => { 
          document.getElementById("pedra").classList.remove('azul');
          document.getElementById("tesoura").classList.add('azul');
          setTimeout(() => { 
              document.getElementById("tesoura").classList.remove('azul');
              document.getElementById("papel").classList.add('azul');
              setTimeout(() => { 
                   document.getElementById("papel").classList.remove('azul');
              }, 300);
         }, 300);
    }, 300); 
    
    if(i==3){
      

      let opcaoBot = Math.floor(Math.random() * 2);

          if(opcaoBot == 0){
             escolhaBot = 'pedra';
          }else if(opcaoBot == 1){
            escolhaBot =  'papel';
          }else{
            escolhaBot = 'tesoura'
          }
      

      if(opcaoBot == opcao){
          vencedor = empate();
      }else if(opcao != 3){
          
          if(opcao == 0 && opcaoBot == 2 ){
            vencedor = botganha();
          }else if(opcao == 1 && opcaoBot == 0 ){
              vencedor = botganha();
          }else if(opcao == 2 && opcaoBot == 1){
              vencedor = botganha();
          }else{
             vencedor = playerganha();
          }
  
      }
      console.log(opcaoBot);
      console.log(opcao);
      clearInterval(intervalo);



      
    }
    i++; 
}
}, 2000);


    
   

}

function empate(){

  
    document.getElementById('resultado').style.display = 'block';
    
     document.getElementById('resultado').innerHTML = " Empate!";
}

function playerganha(){

   
    document.getElementById('resultado').style.display = 'block';
   
    document.getElementById('resultado').innerHTML = " Você Ganhou!";
}
function botganha(){

  
    document.getElementById('resultado').style.display = 'block';
 
    document.getElementById('resultado').innerHTML = " Você Perdeu!";

}

function resetar(){
    
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('resultado').style.display = 'none';
    document.getElementById(escolhaBot).classList.remove('azul');
}
