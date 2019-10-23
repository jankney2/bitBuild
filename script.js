


//functions

//nav comes back in about 1/4 down the page

let nav= document.getElementsByTagName('nav')[0]

window.addEventListener('scroll', ()=>{
    if(window.scrollY<400){
        nav.classList.remove('scrollNav')
        nav.classList.remove('scrolling')
        
        
    }
    if(window.scrollY>100){
        nav.classList.add('scrolling')
        
    }
    if(window.scrollY>500) {
        nav.classList.add('scrollNav')
    }  
})

//get started today form- displays on button click. 

let buttons=document.getElementsByTagName('button')

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',()=>{
        document.getElementsByClassName('getStarted')[0].classList.remove('hidden')
    })
}



//youtube video is linked

