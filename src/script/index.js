function start(){
    let buttonCalc = document.querySelector('#calcular');
    buttonCalc.addEventListener('click', handleButtonClick);
    let inputNumA = document.querySelector('#input-numA')
    let inputNumB = document.querySelector('#input-numB')
    // inputNumA.addEventListener('input', handleButtonClick)
    // inputNumB.addEventListener('input', handleButtonClick)

    handleButtonClick();
    
}

function handleButtonClick(){
    let inputNumA = document.querySelector('#input-numA')
    let inputNumB = document.querySelector('#input-numB')
    let somaResult = document.querySelector('.resultado-soma');
    let subtracaoDeAPorB = document.querySelector('.resultado-subtracaoAb');
    let subtracaodeBPorA = document.querySelector('.resultado-subtracaoBa');
    let multiplicar = document.querySelector('.resultado-multiplicacao');
    let divideAb = document.querySelector('.resultado-divisaoAb');
    let divideBa = document.querySelector('.resultado-divisaoBa');
    let powAb = document.querySelector('.resultado-potenciaAb');
    let powBa = document.querySelector('.resultado-potenciaBa');
    let raizDeA = document.querySelector('.resultado-raizA');
    let raizDeB = document.querySelector('.resultado-raizB');
    let fatA = document.querySelector('.resultado-fatorialA');
    let fatB = document.querySelector('.resultado-fatorialB');
    let porcentoAb = document.querySelector('.resultado-porcentagemAb');
    let porcentoBa = document.querySelector('.resultado-porcentagemBa');
    let mediaDosNumeros = document.querySelector('.resultado-media');

    let numA = Number(inputNumA.value)
    let numB = Number(inputNumB.value);
    let calc = soma(numA, numB);
    somaResult.textContent = calc;

    let calcSubAb = subtracaoAb(numA,numB)
    subtracaoDeAPorB.textContent = calcSubAb;

    let calcSubBa = subtracaoBa(numA, numB);
    subtracaodeBPorA.textContent = calcSubBa;

    let calcMultiplica = multiplica(numA, numB);
    multiplicar.textContent = calcMultiplica;

    let calcDivideAb =  divisaoAb(numA, numB);
    divideAb.textContent = calcDivideAb.toFixed(2).replace('.', ',');

    let calcDivideBa = divisaobA(numA, numB);
    divideBa.textContent = calcDivideBa.toFixed(2).replace('.', ',');

    let calcPotenciaAb =  potenciaAb(numA, numB);
    powAb.textContent = calcPotenciaAb;

    let calcPotenciaBa = potenciaBa(numA, numB);
    powBa.textContent = calcPotenciaBa;

    let calcRaizA =  raizA(numA);
    raizDeA.textContent = calcRaizA;

    let calcRaizB = raizB(numB);
    raizDeB.textContent = calcRaizB;

    let fatorialDeA =  fatorialA(numA);
    fatA.textContent = fatorialDeA;

    let fatorialDeB = fatorialB(numB);
    fatB.textContent = fatorialDeB;

    let calcPorcentAb = porcentagemAb(numA,numB);
    porcentoAb.textContent = calcPorcentAb;

    let calcPorcentBa =  porcentagemBa(numA,numB);
    porcentoBa.textContent = calcPorcentBa;

    let calcMedia = media(numA, numB);
    mediaDosNumeros.textContent = calcMedia;
   
    
}





function soma(numA, numB){
   return numA+numB
     
}

function subtracaoAb(numA, numB){
    return numA - numB
}

function subtracaoBa(numA, numB){
    return numB - numA;
}

function multiplica(numA, numB){
    return numA * numB;
}

function divisaoAb(numA, numB){
    return numA/numB;
}

function divisaobA(numA, numB){
    return numB/numA;
}

function potenciaAb(numA, numB){
    return Math.pow(numA, numB);
}


function potenciaBa(numA, numB){
    return Math.pow(numB, numA);
}

function raizA(numA){
    return Math.sqrt(numA).toFixed(2).replace('.', ',');    
}

function raizB(numB){
    return Math.sqrt(numB).toFixed(2).replace('.', ',');
}

function fatorialA(numA){
    if(numA === 0  || numA === 1)
    return 1;    
    for(let i = numA-1; i>= 1; i--){
        numA = numA *i;
    }
    return numA;

}

function fatorialB(numB){
    if(numB === 0  || numB === 1)
    return 1;    
    for(let i = numB-1; i>= 1; i--){
        numB = numB *i;
    }
    return numB;
}

function porcentagemAb(numA, numB){
    let result;     
    result= Math.ceil((numB/numA)*100);
    return `${result}%`;
}

function porcentagemBa(numA, numB){
    let result;     
    result= Math.ceil((numA/numB)*100);
    return `${result}%`;
}

function media(numA, numB){
    let result = (numA + numB)/2
    return result.toFixed(1).replace('.',',');
}


start();













