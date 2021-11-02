//constantes
const docehoras = 43200000;
const seishoras = (docehoras / 2);
const undia = (docehoras * 2);
const unciclo = (docehoras * 10)

//fecha a calcular
const  hoy = (new Date('11-01-2021').getTime()) + seishoras
console.log(new Date(hoy).toLocaleString())


//iterar cada  cierto de descanso
for(i=1;i<10;i++) {
    calcularturno();
}

//funcion para calcular turnos y horarios
function calcularturno() {
    dia1 = (hoy + (unciclo * i)) + (docehoras * 0);
    des1 =  (hoy + (unciclo * i)) + (docehoras * 1);
    dia2 =  (hoy + (unciclo * i)) + (docehoras * 2);
    des2 =  (hoy + (unciclo * i)) + (docehoras * 3);
    des3 =  (hoy + (unciclo * i)) + (docehoras * 4);

    document.write("<br> DIA1:🎃🎃" + new Date(dia1).toLocaleString());
    document.write("<br> DES1:👉" + new Date(des1).toLocaleString());
    document.write("<br> DIA2:👉" + new Date(dia2).toLocaleString());
    document.write("<br> DES2:👉" + new Date(des2).toLocaleString());
    document.write("<br> DES2:👉" + new Date(des3).toLocaleString() + "</br>");
}

