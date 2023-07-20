 let randomNumber;
 const codeGenerator=()=>{
     let prev=document.getElementById('code-number').innerHTML;
     
     const random=Math.floor(Math.random()*16777215);
     randomNumber="#"+random.toString(16);
     document.body.style.backgroundColor=randomNumber;
     document.getElementById('code-number').innerHTML=randomNumber;
     
   

    document.getElementById('btn2').style.backgroundColor=prev;
    document.getElementById('btn1').style.backgroundColor=randomNumber;
     
    }
    
const copyText=()=>{
    navigator.clipboard.writeText(randomNumber);
    document.getElementById('btn1').innerHTML=`Copied!`
    
    
    setTimeout(() => {
        
        document.getElementById('btn1').innerHTML=`  Copy text`
    }, 1000);

}

codeGenerator();