var roll=document.getElementById("roll");
var p1=document.getElementById("p1");
var p2=document.getElementById("p2");
var L=document.getElementById("L");
var R=document.getElementById("R");
var c1=0;
var c2=0;
var score1=0;
var score=0;
var score2=0;
var k1=0;
var k2=0; 
var change=0;
var hold=document.getElementById("hold");
var dice=document.querySelector(".dice");
 var pl1=document.getElementById("pl1");
 var pl2=document.getElementById("pl2");
 pl1.textContent=score1;
pl2.textContent=score2;


dice.style.display='block';
hold.addEventListener("click",function(){
    change=change+1;
    if((change)%2==0)
       { L.style.background="rgb(216, 194, 194)";R.style.background="whitesmoke";}
        else
        { R.style.background="rgb(216, 194, 194)";L.style.background="whitesmoke";}
    console.log(change);
    pl1.textContent=Number(pl1.textContent)+score1;
    pl2.textContent=Number(pl2.textContent)+score2;
    c1=0;c2=0;
    score1=0;
    score2=0;
    p1.textContent=c1;
    p2.textContent=c2;
})



roll.addEventListener("click",function()
{
   if((change)%2==0){
       L.style.background="rgb(216, 194, 194)";
       R.style.background="whitesmoke";
    var p=Math.ceil(Math.random()*5);
    dice.src=p+'.png';
    console.log(p);
       if(p==1){
        score1=0; 
      change++;
      p1.textContent=score1;
      c1=0;
        //score1=score1+c1;
    } 
               else{ c1=c1+p; 
       p1.textContent=c1;
       score1=c1;
    
           }   
      }
        else{
            R.style.background="rgb(216, 194, 194)";
          L.style.background="whitesmoke";
            var p=Math.ceil(Math.random()*5);
            dice.src=p+'.png';
            console.log(p);if(p==1){
                score2=0;
                p2.textContent=score2;
              change++;
              c2=0;
                 } 
                else{ c2=c2+p; 
               p2.textContent=c2;
                 score2=c2;
                                 }   

        }
        console.log("score1="+score1);
        console.log("score2="+score2);
});