function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play('');
}

const listaDeTeclas = document.querySelectorAll('.tecla')

let contador = 0;

while(contador < 9) {
     listaDeTeclas[contador].onclik = function(){
        tocaSom('#som_tecla_clap')
     };
     contador = contador + 1;
}
listaDeTeclas[1].onclik = tocaSomClap;
listaDeTeclas[2].onclik = tocaSomTim;
listaDeTeclas[3].onclik = tocaSomPuff;
document.querySelector('.tecla_pom').onclik=tocaSomPom();