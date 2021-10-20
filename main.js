//llamando libreria moment
const moment = require ('moment');

//variables
const hora = moment([2021, 10, 19, 06]); // fecha ingresada por user
const descanso = 12; //horas de descanso
const datos = {};

let calcularhoras =function () {
    const dia1 = moment(hora).add(0, 'h').format("DD-MM-YYYY HH:mm");
    const dia1_descanso1 = moment(hora).add(12, 'h').format("DD-MM-YYYY HH:mm");
    const dia2 = moment(hora).add(24, 'h').format("DD-MM-YYYY HH:mm");
    const dia2_descanso2 = moment(hora).add(36, 'h').format("DD-MM-YYYY HH:mm");
    const dia2_descanso3 = moment(hora).add(48, 'h').format("DD-MM-YYYY HH:mm");

    datos.dia1 = dia1;
    datos.dia1_descanso1 = dia1_descanso1;
    datos.dia2 = dia2;
    datos.dia2_descanso2 = dia2_descanso2;
    datos.dia2_descanso3 = dia2_descanso3;

    const noche1 = moment(hora).add(60, 'h').format("DD-MM-YYYY HH:mm");
    const noche1_descanso1 = moment(hora).add(72, 'h').format("DD-MM-YYYY HH:mm");
    const noche2 = moment(hora).add(84, 'h').format("DD-MM-YYYY HH:mm");
    const noche2_descanso2 = moment(hora).add(96, 'h').format("DD-MM-YYYY HH:mm");
    const noche2_descanso3 = moment(hora).add(108, 'h').format("DD-MM-YYYY HH:mm");
    const noche2_descanso4 = moment(hora).add(120, 'h').format("DD-MM-YYYY HH:mm");

    datos.noche1 = noche1;
    datos.noche1_descanso1 = noche1_descanso1;
    datos.noche2 = noche2;
    datos.noche2_descanso2 = noche2_descanso2;
    datos.noche2_descanso3 = noche2_descanso3;
    datos.noche2_descanso4 = noche2_descanso4;
};

for (let i = 0; i < 5; i++) {
    const num = 5;
    const i = moment(hora).add(num, 'd').format("DD-MM-YYYY HH:mm");
    console.log(i)
}



