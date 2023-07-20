let randomNumber;
const codeGenerator=()=>{

    const random=Math.floor(Math.random()*16777215);
    randomNumber="#"+random.toString(16);
    document.body.style.backgroundColor=randomNumber;
    document.getElementById('code-number').innerText=randomNumber;
}

const copyText=()=>{
    navigator.clipboard.writeText(randomNumber);
    document.getElementById('btn1').innerHTML=`Copied!`

}

codeGenerator();