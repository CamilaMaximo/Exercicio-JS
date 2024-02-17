# Exercicio-JS
Conforme muda a hora da maquina em que esta aberto mudara a imagem e  a cor do fundundo aparecendo uma mensagem que irá informar a hora  atual.
# Hora_do_dia
conforme muda o horário do aparelho que está conectado a imagem e a cor de funda mudam.


![Logo do Markdown](Screenshot%202022%2D11%2D14%2018.38.35.png)


 # Autor
  
  [Camila Maximo]().



## Linguagens utilizada

- Css
- Html
- JavaScript

## O que aprendi ?
  Conseguir entender o que é uma variável como trabalhar com ela dentro do JavaScript,também, consegui aprender códigos para trabalhar data e hora e a utilização da condicional **IF** e **else**.
  
    ```
  function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/bomdia.png'
        document.body.style.background = '#B8E3E9'

    } else if (hora >= 12 && hora < 18){
        img.src = 'imagens/boatarde.png'
        document.body.style.background = '#e2cd9f'
    } else {
        img.src = 'imagens/boanoite.png'
        document.body.style.background = '#646279'
        
    }}
  ```
  
  
  
 
  
