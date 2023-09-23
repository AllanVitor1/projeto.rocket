function togglemode() {
 const html = document.documentElement
 /*essa é a lógica do botão, se "light" for verdadeiro ele tira, se for falso coloca.*/
 html.classList.toggle("light")


 const img = document.querySelector('#profile img')

 if (html.classList.contains('light')) {
    /*imagem usada caso esteja no light mode*/ 
    img.setAttribute('src','./assets/avatar-light.png')
 } else {
    /*imagem do dark mode*/ 
    img.setAttribute('src','./assets/avatar.png')
 }
 
}