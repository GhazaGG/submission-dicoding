const argentinaButton = document.getElementById('argentinaButton');
const barcelonaButton = document.getElementById('barcelonaButton');
const psgButton = document.getElementById('psgButton')
const interMiamiButton = document.getElementById('interMiamiButton')


const argentinaContent = document.getElementById('argentinaContent')
const barcelonaContent = document.getElementById('barcelonaContent')
const psgContent = document.getElementById('psgContent')
const interMiamiContent = document.getElementById('interMiamiContent')

barcelonaContent.style.display ='none'
psgContent.style.display = 'none'
interMiamiContent.style.display = 'none'

argentinaButton.addEventListener('click', function(){
    barcelonaContent.style.display = 'none'
    psgContent.style.display = 'none'
    interMiamiContent.style.display = 'none'
    
    argentinaContent.style.display = 'block'
    
    
    argentinaButton.classList.add('button-active')
    psgButton.classList.remove('button-active')
    barcelonaButton.classList.remove('button-active')
    interMiamiButton.classList.remove('button-active')
})


barcelonaButton.addEventListener('click', function(){
    argentinaContent.style.display = 'none'
    psgContent.style.display = 'none'
    interMiamiContent.style.display = 'none'

    barcelonaContent.style.display = 'block'

    barcelonaButton.classList.add('button-active')
    psgButton.classList.remove('button-active')
    argentinaButton.classList.remove('button-active')
    interMiamiButton.classList.remove('button-active')
})

psgButton.addEventListener('click', function(){
    argentinaContent.style.display = 'none'
    barcelonaContent.style.display = 'none'
    interMiamiContent.style.display = 'none'
    
    psgContent.style.display = 'block'
    
    psgButton.classList.add('button-active')
    argentinaButton.classList.remove('button-active')
    barcelonaButton.classList.remove('button-active')
    interMiamiButton.classList.remove('button-active')
})

interMiamiButton.addEventListener('click', function(){
    argentinaContent.style.display = 'none'
    barcelonaContent.style.display = 'none'
    psgContent.style.display = 'none'

    interMiamiContent.style.display = 'block'

    interMiamiButton.classList.add('button-active')
    argentinaButton.classList.remove('button-active')
    barcelonaButton.classList.remove('button-active')
    psgButton.classList.remove('button-active')
})