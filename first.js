let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#rbtn");
let newGameBtn=document.querySelector("#newbtn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


 let turnO = true;
 let  count=0;

 const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];





 const resetGame=()=>{
    
    turnO = true;
    
    count=0;
    enBoxes();
msgContainer.classList.add("hide");
 }





boxes.forEach((box)=> {
    box.addEventListener("click", ()=>{
       console.log("box was clicked");
       
       if (turnO){
        box.innerText="O";
        turnO=false;
       }
        else{
        box.innerText="X";
        turnO=true;
        
       }
    
       count++;
       box.disabled=true;
       checkWinner();
      let drawGame= checkWinner();
        if(count===9 && !drawGame){
            shownoWinner();
        }
         
       
    });
}); 

    const disboxes=()=>{
        for(box of boxes){
            box.disabled=true;
        }
    }

    const enBoxes=()=>{
        for(box of boxes){
            box.disabled=false;
            box.innerText="";
        }
    }


      const showWinner=(winner)=>{
        
          msg.innerText= `Congratulations ,Winner is ${winner}`;
          msgContainer.classList.remove("hide");
           disboxes(); 
      }




 const checkWinner = () => {
             for(let patterns of winPatterns){
                let pos1val=boxes[patterns[0]].innerText;
                let pos2val=boxes[patterns[1]].innerText;
                let pos3val=boxes[patterns[2]].innerText;
    
            if(pos1val !="" && pos2val !="" && pos3val !="" ){
                  if(pos1val===pos2val && pos2val===pos3val){
                    console.log("winner" ,pos1val);
                    showWinner(pos1val);
                  }
            }
             }
    };

    
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);


const shownoWinner=()=>{
        
    msg.innerText=" no  Winner";
    msgContainer.classList.remove("hide");
     disboxes(); 
}


    



