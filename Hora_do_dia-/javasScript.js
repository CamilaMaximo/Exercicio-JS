
function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data =  new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`



    if (hora >= 0 && hora < 12) {
        img.src = 'img/bomdia.png'
       document.body.style.background = '#B8E3E9'

    } else if (hora >= 12 && hora < 18){
        img.src = 'img/boatarde.png'
        document.body.style.background = '#e2cd9f'
    } else {
        img.src = 'img/boanoite.png'
        document.body.style.background = '#646279'
        
    }
}
    

