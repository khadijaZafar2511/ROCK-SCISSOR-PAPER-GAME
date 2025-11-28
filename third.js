let scissor=document.querySelector("#scissor");
let paper=document.querySelector("#paper");
let rock=document.querySelector("#rock");
let buttons=document.querySelectorAll(".buttons");
let Uscore=document.querySelector("#Uscore");
let Cscore=document.querySelector("#Cscore");
let playbutton=document.querySelector("#playbutton");
let time=document.querySelector("#timer");
let winner=document.querySelector("#winner");
let you;
let comp;
let Ccount=0;
let Ucount=0;
function setTimer(){
for(let i=30;i>=0;i--){
setTimeout(()=>{ 
   time.innerHTML=`<h4 >Time left : ${i}s</h4>` 
   if(i==0){
    winner.style.visibility="visible";
    checkFinalWinner();
    playbutton.innerHTML="<h3>Play Again </h3>";
   }
},(31-i)*1000); }
};
console.log("hello");

function COchoice(){
    let n= Math.floor(Math.random()*3); 
    if(n==0)
        return "scissor";
    else if (n==1)
       return "paper";
    else
        return "rock";
};
function events(){
scissor.addEventListener("click" , ()=>{ 
    you = "scissor";
    comp=COchoice();
    checkWinner();
});

paper.addEventListener("click" , ()=>{ 
    you= "paper";
    comp=COchoice();
    checkWinner();
     
});
rock.addEventListener("click" , ()=>{ 
   you= "rock";
    comp=COchoice();
     checkWinner(); 
}); 
}
playbutton.addEventListener("click",()=>{ 
    winner.style.visibility="hidden";
    Uscore.innerHTML="0";
    Cscore.innerHTML="0";
    playbutton.innerHTML="<h3>Play</h3>"
    events ();
    setTimer();

});
function checkWin(){ 
    if(you==="scissor"){
        if(comp==="paper")
            return 1;
        else if (comp==="rock")
            return 2;
        else
        return 0;
    }
    else if(you==="rock"){
        if( comp==="paper")
            return 2;
        else if(comp==="scissor")
            return 1;
        else
            return 0;
    }
    else if(you==="paper"){ 
        if(comp==="scissor")
            return 2;
        else if (comp==="rock")
            return 1;
        else
            return 0;
    }
};


function checkWinner(){ 
    let winner = checkWin();
    if(winner===1){
         Ucount+=1;
        Uscore.innerHTML=`<h3>${Ucount}</h3>`;
    }
    if (winner===2){
        Ccount+=1;
        Cscore.innerHTML=`<h3>${Ccount}</h3>`; 
    }
}

function checkFinalWinner(){ 
    winner.classList.remove("hide");
    if(Ucount>Ccount)
        winner.innerText="Winner is You";
    else if(Ccount>Ucount)
        winner.innerText="Winner is Computer";
    else
        winner.innerText="Match Draw";

}
