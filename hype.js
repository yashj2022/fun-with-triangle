const side1=document.querySelector("#angel-side1")
const side2=document.querySelector("#angel-side2")
const calculatebtn=document.querySelector("#calculateHype")
const outputBox=document.querySelector("#output")

function calculatesumofsquare(A,B){
    const sumofsquares=A*A + B*B;
    return sumofsquares;
}

function calculatehypotenuse(){
    if(side1.value>0 && side2.value>0)
    {const sumofsquares=calculatesumofsquare(Number(side1.value),Number(side2.value))
        const lengthofhypotenuse=Math.sqrt(sumofsquares);
        outputBox.innerText="The length of Hypotenuse is "+ Math.round(lengthofhypotenuse);}
        else if (side1.value<0 || side2.value<0){
            outputBox.innerText=("Negative number are not allowed")
        }else{
            outputBox.innerText=("Please Enter valid information")
        }
    
}

calculatebtn.addEventListener("click",calculatehypotenuse)