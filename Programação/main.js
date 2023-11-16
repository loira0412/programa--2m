function TocaSom (audio) {
    document.querySelector(audio).play();
}

const ListaDeSom = document.querySelectorAll('.tecla');

//let Contador = 0;

for (let Contador = 0; Contador < ListaDeSom.length; Contador++) {
    const tecla = ListaDeSom[Contador];
    const classe = tecla.classList [1];
    
    const idSom = `#som_${classe}`;
    tecla.onclick = function() {
    TocaSom(idSom);
    }
    console.log(idSom);
    //Contador = Contador + 1;
    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
        tecla.classList.add('ativa');
       //console.log(evento.code === 'Space' || evento.code === 'Enter');
    }
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
    }