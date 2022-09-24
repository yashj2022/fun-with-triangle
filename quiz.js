const Quizform=document.querySelector("#quizForm")
const output=document.querySelector("#outputBox")
const submitbtn=document.querySelector("#submitAnswer")

const correctanswer=["45°","equilateral triangle","125","5"]

function calculatescore(){
  
     let score=0;
        let index=0;
        let count=0;
        const formresult=new FormData(Quizform);
        for(let value of formresult.values()){
            if(value=== correctanswer[index]){
                score=score+1;
            }
            index=index+1
        count++;}
        
        
        if(count==4)
        {output.innerText="Your Score is "+ score + "out of 4."}

        else{ output.innerText=("Please fill all questions")}
           

        }
   



submitbtn.addEventListener("click",calculatescore)