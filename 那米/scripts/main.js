var picture = document.querySelector('img');

picture.onclick = function(){
    let picclass = picture.getAttribute('class');
    if(picclass === 'picture'){
        picclass = 'pictureshow';
    }else{
        picclass = 'picture';
    }
}
