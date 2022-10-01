const dataMostrar = datinha();
const horarioMostrar = horaAtual();
 
const msg = `${dataMostrar} <br/> ${horarioMostrar}`;

function datinha() {
    const data = new Date();
    const dia = data.getDay();
    const diaSemanaTexto = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const hora = data.getHours();
    const minuto = data.getMinutes();
    const segundo = data.getSeconds();

    let diaDaSemana;
    let mesDoAno;
    switch (dia) { 
        case 0:
            diaDaSemana = 'Domingo';
            break;
        case 1:
            diaDaSemana = 'Segunda-Feira';
            break;
        case 2:
            diaDaSemana = 'Terça-Feira';
            break;
        case 3:
            diaDaSemana = 'Quarta-Feira';
            break;
        case 4:
            diaDaSemana = 'Quita-Feira';
            break;
        case 5:
            diaDaSemana = 'Sexta-Feira';
            break;
        case 6:
            diaDaSemana = 'Sábado';
            break;
        
        default:
            diaDaSemana = '';
    }

    switch (mes) { 
        case 1:
        mesDoAno = 'Janeiro';
            break;
        
        case 2:
        mesDoAno = 'Fevereiro';
            break;
        
        case 3:
        mesDoAno = 'Março';
            break;
        
        case 4:
        mesDoAno = 'Abril';
            break;
        
        case 5:
        mesDoAno = 'Maio';
            break;
        
        case 6:
        mesDoAno = 'Junho';
            break;
        case 7:
        mesDoAno = 'Julho';
            break;
        case 8:
        mesDoAno = 'Agosto';
            break;
        
        case 9:
        mesDoAno = 'Setembro';
            break;
        
        case 10:
        mesDoAno = 'Outubro';
            break;
        
        case 12:
        mesDoAno = 'Novembro';
            break;
        
        case 12:
        mesDoAno = 'Dezebro';
            break;
        
        default:
            mesDoAno = '';
    }
    
    const msgData = `${diaDaSemana}, ${dia} de ${mesDoAno} de ${ano}`;
    return msgData;
}

function horaAtual() { 
    const data = new Date();
    const hora = data.getHours();
    const minuto = data.getMinutes();
    const segundo = data.getSeconds();
    const msg = `${hora}:${minuto}:${segundo}`;
    return msg;
}

function criaElemento() { 
    const elemento = document.createElement('element');
    return elemento;
}

function resultadoEscopo() { 
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = "";
    const elemento = criaElemento();
    elemento.innerHTML = msg;
    resultado.appendChild(elemento);
}

resultadoEscopo();
