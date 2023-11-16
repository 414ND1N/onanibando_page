const image = document.getElementById('toffu_img');

//evento doble click
image.addEventListener('dblclick', () => {
    //verificar si el src es img/panas/Toffu 3D nb.png
    if(image.src.includes('3D')){
        image.src = 'img/panas/Toffu V4 nb.png'
    }else{
        image.src = 'img/panas/Toffu 3D nb.png'
    }
});

