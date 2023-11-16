function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play('');
}

const listaDeTeclas = document.querySelectorAll('.tecla')

let contador = 0;

while(contador < 9) {

const instrumento = listaDeTeclas[contador].classList[1];

const tecla = listaDeTeclas[contador];

const idAudio = `#som_${instrumento}`;

     tecla.onclik = function(){
        tocaSom(idAudio)
     };
     contador = contador + 1;
}

