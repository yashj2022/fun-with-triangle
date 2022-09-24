const input1=document.querySelector("#inputNumber1")
const input2=document.querySelector("#inputNumber2")
const input3=document.querySelector("#inputNumber3")
const outputbox=document.querySelector("#output")
const checktriangle=document.querySelector("#checkbtn")

function calculatesumofangle(Angel1,Angle2,Angle3){
   const sumofangels=Angel1+Angle2+Angle3;
   return sumofangels;
}
function istriangle(){ 
   if(input1.value>0 && input2.value>0 && input3.value)
   {  const sumofangels=calculatesumofangle(Number(input1.value),Number(input2.value),Number(input3.value));
       if(sumofangels===180){
           outputbox.innerText="Yes, you are right. It's a Triangle"
       }else{
           outputbox.innerText="No, you are wrong. Check it again"
       }} else if (input1.value<0 || input2.value<0 || input3.value<0){
            outputbox.innerText=("Negative number are not allowed")
       }else{
            outputbox.innerText=("Please Enter valid information")
       }

 
};
checktriangle.addEventListener("click",istriangle)