//Capturar evento de submit do formulário

const form = document.querySelector('#form');

form.addEventListener('submit', function(e)
{
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    //filtra entradas erradas

    if(!peso || !altura)
    {
        showResult('Entrada inválida!', false);
        return;
    }

   showResult(imcResult(peso, altura), true);
})

function criaP()
{
    const p = document.createElement('p');
    return p;
}

//calcula e cria mensagem imc

function imcResult(peso, altura)
{
    const imc = (peso / (altura * altura)).toFixed(2);
    let msg = `Seu IMC é: ${imc} - `;

    if(imc < 18.5) return msg + 'Abaixo do peso';
    if(imc >= 18.5 && imc <= 24.9) return msg + 'Peso normal';
    if(imc >= 25 && imc <= 29.9) return msg + 'Sobrepeso';
    if(imc >= 30 && imc <= 34.9) return msg + 'Obesidade grau 1';
    if(imc >= 35 && imc <= 39.9) return msg + 'Obesidade grau 2';
    else return msg + 'Obesidade grau 3';
      
}

//exibe e determina a cor da mensagem

function showResult(msg, valid)
{
    const resultado = document.querySelector('#result');
    resultado.innerHTML = '';
    const p = criaP();
    resultado.appendChild(p);

    if(valid)
    {
        p.classList.add('show-result-valid');
        p.innerHTML = msg;
        return;
    }
    p.classList.add('show-result-invalid');
    p.innerHTML = msg;
}



