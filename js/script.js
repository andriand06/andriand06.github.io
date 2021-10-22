const jumbo = document.getElementById('jumbo')
const thumbs = document.querySelectorAll('img-thumbnail')
const container = document.getElementById('container')

container.addEventListener('click',function(e){
    if (e.target.className = 'img-thumbnail'){
        jumbo.src = e.target.src;
    }
})