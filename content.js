setInterval(function(){
    const elements = document.getElementsByTagName('img');
    for (i in elements){
        elements[i].setAttribute('src', 'https://media1.tenor.com/images/aa8e6052d66a9393bc9ac6001c64f151/tenor.gif?itemid=7519899');
    }    
}, 500);