//obtener fecha desde input
const txt = document.querySelector('#date')
const boton = document.querySelector('#calcular')
boton.addEventListener("click", function() {

//constantes fijas
const docehoras = 43200000;
const seishoras = (docehoras / 2);
const unciclo = (docehoras * 12)

//constantes desde html
const txtinput = txt.value;
const hoy = (new Date(txtinput).getTime()) + (docehoras / 2)
console.log(hoy);

//iterar cada  cierto de descanso
for(i=0;i<150;i++) {
    calcularturno();
}

//funcion para calcular turnos y horarios
function calcularturno() {
        //turnos dia
        dia1 = (hoy + (unciclo * i)) + (docehoras * 0);
        des1 =  (hoy + (unciclo * i)) + (docehoras * 1);
        dia2 =  (hoy + (unciclo * i)) + (docehoras * 2);
        des2 =  (hoy + (unciclo * i)) + (docehoras * 3);
        des3 =  (hoy + (unciclo * i)) + (docehoras * 4);

        //turnos noche
        noc1 = (hoy + (unciclo * i)) + (docehoras * 5);
        desN1 =  (hoy + (unciclo * i)) + (docehoras * 6);
        noc2 =  (hoy + (unciclo * i)) + (docehoras * 7);
        desN2 =  (hoy + (unciclo * i)) + (docehoras * 8);
        desN3 =  (hoy + (unciclo * i)) + (docehoras * 9);
        desN4 =  (hoy + (unciclo * i)) + (docehoras * 10);
        desN5 =  (hoy + (unciclo * i)) + (docehoras * 11);
        

        document.write(`<hr>DIA LABORAL:👉<strong>${i+1 } </strong><br> `);
        document.write(new Date(dia1).toLocaleString() + " =🌞DIA1<br>" );
        document.write(new Date(des1).toLocaleString() + " =🌞DIA1🍻descanso<br>");
        document.write(new Date(dia2).toLocaleString() + " =🌞DIA2<br>");
        document.write(new Date(des2).toLocaleString() + " =🌞DIA2🍻descanso<br> " );
        document.write(new Date(des3).toLocaleString() + " =🌞DIA3🍻descanso</br><br>");

        document.write(new Date(noc1).toLocaleString() + " =🌚NOCHE1 <br> " );
        document.write(new Date(desN1).toLocaleString() + " =🌚NOCHE1🍻descanso<br> ");
        document.write(new Date(noc2).toLocaleString() + " =🌚NOCHE2<br>");
        document.write(new Date(desN2).toLocaleString() + " =🌚NOCHE2🍻descanso<br>");
        document.write(new Date(desN3).toLocaleString() + " =🌚NOCHE3🍻descanso<br>");
        document.write(new Date(desN4).toLocaleString() + " =🌚NOCHE3🍻descanso<br>");
        document.write(new Date(desN5).toLocaleString() + " =🌚NOCHE4🍻descanso<br>");
    };
});
