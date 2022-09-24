var input=document.querySelector("#enterdata1");
var insert=document.querySelector("#enterdata2")
const output=document.querySelector("#outputtext");
const sumbmitbtn=document.querySelector("#checkarea");

function calculateproductofinputs(Base,Height){
    const prodofinputs=Base*Height;
    return prodofinputs;
}

function calculateareaoftriangle(){
    if(input.value>0 && insert.value>0){
        const prodofinputs=calculateproductofinputs(Number(input.value),Number(insert.value));
        const areaoftriangle=(prodofinputs/2);
        output.innerText="The Area of Tringle is "+ Math.round(areaoftriangle);}
        else if (input.value<0 || insert.value<0){
            output.innerText=("Negative number are not allowed")
        }else{
            output.innerText=("Please Enter valid information")
        }
    
}

sumbmitbtn.addEventListener("click",calculateareaoftriangle)