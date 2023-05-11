// inputs 
const diaInp = document.getElementById('dia');
const mesInp = document.getElementById('mes');
const anoInp = document.getElementById('ano');

// outInput

const diaOtp = document.getElementById('dd')
const mesOtp = document.getElementById('mm')
const anoOtp = document.getElementById('yy')


// Form elemento
const form = document.querySelector('form')

// Adicionar um evento no botao submit para o form

form.addEventListener('submit', btn);

// pegando as datas corretamente.
const date = new Date();
let dia = date.getDate();
let mes= 1 + date.getMonth();
let ano = date.getFullYear();

// um array com todas os dias de cada mes
const meses =[31,28,31,30,31,30,31,31,30,31,30,31]

function validacao(){
    const inputs = document.querySelectorAll('input');
    let validador = true;
    inputs.forEach((item)=>{
        const parent = item.parentElement;
        if(!item.value){
            item.style.borderColor = 'hsl(0, 100%, 67%)';
            parent.querySelector('label').style.color = 'hsl(0, 100%, 67%)'
            parent.querySelector('small').innerText= 'Preencha os campos, por favor!'
            validador = false;
        }else if(mesInp.value > 12){
            mesInp.style.borderColor = 'hsl(0, 100%, 67%)';
            mesInp.parentElement.querySelector('small').innerText= 'Preencha o mes , por favor!'
            validador = false;
        }else if(diaInp.value > 31){
            diaInp.style.borderColor = 'hsl(0, 100%, 67%)';
            diaInp.parentElement.querySelector('small').innerText= 'Preencha o dia , por favor!'
            validador = false;
        
        } else if(anoInp.value > ano){
            anoInp.style.borderColor = 'hsl(0, 100%, 67%)';
            anoInp.parentElement.querySelector('small').innerText= 'Preencha o dia , por favor!'
            validador = false;
        
        }
        else{
            item.style.borderColor = 'inherit';
            parent.querySelector('small').innerText= ''
            parent.querySelector('label').style.color = 'inherit';
            validador = true;
        }
        
    })
    return validador;
}

function btn(event){
    event.preventDefault();
    if(validacao()){
        if(diaInp.value > dia){
            dia = dia + meses[mes - 1];
            mes = mes - 1;
        }
        if(mesInp.value > mes){
            mes = mes + 12;
            ano = ano - 1;
        }

        const d = dia - diaInp.value;
        const m = mes - mesInp.value;
        const y = ano - anoInp.value;

        diaOtp.innerHTML = d;
        mesOtp.innerHTML = m;
        anoOtp.innerHTML = y;

    }
}