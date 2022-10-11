const mostraData = dataGeral();
const mostraMes = mesGeralEAno();
const msg = `${mostraData} ${mostraMes}`;

function dataGeral() { 
    const data = new Date();
    const dia = data.getDate();
    const diaSemana = data.getDay();
    const mes = data.getMonth();
    const ano = data.getFullYear();

    let diaSemanaTexto;
    switch (diaSemana) { 
        case 0:
            diaSemanaTexto = 'Domingo';
            break;
        case 1:
            diaSemanaTexto = 'Segunda-Feira';
            break;
        case 2:
            diaSemanaTexto = 'Terça-Feira';
            break;
        case 3:
            diaSemanaTexto = 'Quarta-Feira';
            break;
        case 4:
            diaSemanaTexto = 'Quinta-Feira';
            break;
        case 5:
            diaSemanaTexto = 'Sexta-Feira';
            break;
        case 6:
            diaSemanaTexto = 'Sábado';
            break;
        default:
            diaSemanaTexto = '';
            break;
    }
    const msg = `${diaSemanaTexto}, ${dia}`;
    return msg;
}

console.log(dataGeral());


function mesGeralEAno() { 
    const data = new Date();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    
    function retornaValor(num) {
        return num >= 10 ? num : `0${num}`;
    }
    
    const hora = retornaValor(data.getHours());
    const minuto = retornaValor(data.getMinutes());
    const segundo = retornaValor(data.getSeconds());


    let mesRetorno;
    switch (mes) { 
        case 1:
            mesRetorno = 'Janeiro';
            break;
        case 2:
            mesRetorno = 'Fevereiro';
            break;
        case 3:
            mesRetorno = 'Março';
            break;
        case 4:
            mesRetorno = 'Abril';
            break;
        case 5:
            mesRetorno = 'Maio';
            break;
        case 6:
            mesRetorno = 'Junho';
            break;
        case 7:
            mesRetorno = 'Julho';
            break;
        case 8:
            mesRetorno = 'Agosto';
            break;
        case 9:
            mesRetorno = 'Setembro';
            break;
        case 10:
            mesRetorno = 'Outubro';
            break;
        case 11:
            mesRetorno = 'Novembro';
            break;
        case 12:
            mesRetorno = 'Dezembro';
            break;
        default:
            mesRetorno = '';
            break;
    }

    const msg = `de ${mesRetorno} de ${ano} <br /> ${hora}:${minuto}:${segundo}`
    return msg;
}


function criaElemento() {
    const elemento = document.createElement('elemento');
    return elemento;
}

function resultadoData () { 
    const h1 = document.querySelector('div #conteiner h1');
    h1.innerHTML = "";
    const elemento = criaElemento();
    elemento.innerHTML = msg;
    resultado.appendChild(elemento);
}

resultadoData(); 

// Fazendo exatamente o mesmo código de forma reduzida:

/*
const h1 = document.querySelector('h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);
*/