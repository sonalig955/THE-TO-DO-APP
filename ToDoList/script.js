const input1= document.getElementById('input1')
const label1=document.getElementById('label1')
const listContainer = document.getElementById('list')
const btn = document.getElementById('btn')

btn.addEventListener('click', ()=>{
    if(input1.value===""){
        alert('you have to enter')
    }else{
    console.log(input1.value)
    let li = document.createElement('li')
    li.innerText = input1.value
    listContainer.appendChild(li)
    // let input = document.createElement('input')
    // input.type= "radio";
    // listContainer.appendChild(input)
    // let label = document.createElement('label')
    // label.innerHTML=input1.value
    // listContainer.appendChild(label)
    let span = document.createElement('span')
    span.innerHTML="\u00d7";
    li.appendChild(span)
    }
    input1.value = "";
    saveData();

})

listContainer.addEventListener('click', function(e){
    if(e.target.tagName==='LABEL'){
        e.target.classList.toggle(input.checked);
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false)


const saveData=()=>{
    localStorage.setItem('data', listContainer.innerHTML)
}


const ShowTask=()=>{
    listContainer.innerHTML = localStorage.getItem('data')

}
ShowTask();





