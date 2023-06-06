
function converter(){
const cmvalue=Number(document.getElementById("input").value)
const inchval=cmvalue/2.54
const result=document.getElementById("answer")
result.innerHTML=inchval.toFixed(2)+" inches"
    if(isNaN(inchval))
        result.innerHTML= "Enter a valid input"

}
