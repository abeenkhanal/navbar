
let navitems=document.querySelectorAll('items ul li')

function navbar(active){
    console.log(navitems)
    navitems.forEach((li)=>{
        console.log(li.getAttribute('id')==active);
       li.classlist.remove('active')
       if(li.getAttribute('id')==active){
        li.classlist.add('active')
       }
    })
}
navbar('home')