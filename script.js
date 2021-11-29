const form = document.querySelector('form')
const ul = document.querySelector('ul')
const myList = document.getElementById('myList')
const input = document.querySelector('.item-input')
const radio = document.createElement("INPUT");
radio.setAttribute("type", "radio");


form.addEventListener('submit', Event =>{
    Event.preventDefault()
    
    listMaker()
    input.value = ''
})


function addItem() {   
    listMaker()
    input.value =  ''
}

const listMaker = () => {
    const li = document.createElement('LI')
     
    li.addEventListener('click', function(){
        li.classList.toggle('checked')
    }, false)

    if(input.value !== ''){
        ul.appendChild(li)
        let txt = document.createTextNode(input.value)
        li.appendChild(txt)
        
        
    }else {
        console.log('nenhum item adicionando')
    }
}




const clearBtn = () => {
    var lista = Array.from(document.querySelectorAll('ul > li'));
    
    lista.forEach((item)=>{
        if(item.className == 'checked'){
            item.style.display = 'none'
        }
        console.log(item.className)
    })
 
}



 
 

 


 