const form = document.querySelector('form')
const ul = document.querySelector('ul')
const myList = document.getElementById('myList')
const input = document.querySelector('.item-input')
const checkbox = document.createElement('DIV')
checkbox.setAttribute('class', 'checkbox')

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
        li.append(txt)      
    }else {
        console.log('nenhum item adicionando')
    }

    li.innerHTML += '<div class="checkbox"></div>'
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



 
 

 


 