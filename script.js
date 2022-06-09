
let submitBtn = document.getElementById('submit');
let para = document.getElementById('para');
submitBtn.addEventListener('click', myFun=()=>{
    let textP = document.getElementById('text');
    let inputText = document.getElementById('inputText');
    let para = textP.innerHTML;
    let inputPara = inputText.value;
    let addPara = document.getElementById('addPara');

    let result = para.includes(inputPara);
    console.log(result);

    if(inputPara !='' && result == true){
      addPara.innerHTML = inputPara+ ' Found';
    
    } else{
        addPara.innerHTML = inputPara+ ' Not Found';
    }

   
})