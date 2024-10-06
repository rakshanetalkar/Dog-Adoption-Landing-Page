var header=document.querySelector('#header')
async function getheader(){
    var headObj=await fetch('header.html')
    var content=await headObj.text()
    header.innerHTML=content
}
getheader()

var footer=document.querySelector('#footer')
async function getfooter(){
    var footObj=await fetch('footer.html')
    var content=await footObj.text()
    footer.innerHTML=content
}
getfooter()

var reaveals=document.querySelectorAll('.reaveal')

window.addEventListener('scroll',function(){
    //console.log('scrolling')

    for(let i=0;i<reaveals.length;i++){
        let windowHeight=this.window.innerHeight
        let reavealTop=reaveals[i].getBoundingClientRect().top
        let reavealPoint=100
        if(reavealTop<windowHeight-reavealPoint){
            reaveals[i].classList.remove('reaveal')
            reaveals[i].classList.add('active')
        }else{
            reaveals[i].classList.add('reaveal')
            reaveals[i].classList.remove('active')
        }
    }
})