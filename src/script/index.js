function start(){
    let buttonCalc = document.querySelector('#calcular');
    buttonCalc.addEventListener('click', handleButtonClick);
    let inputNumA = document.querySelector('#input-numA')
    let inputNumB = document.querySelector('#input-numB')
    inputNumA.addEventListener('input', handleButtonClick)
    inputNumB.addEventListener('input', handleButtonClick)

    handleButtonClick();
    soma()
    subtracaoAb()
    subtracaoBa()
    multiplica()
    divisaoAb()
    divisaobA()
    potenciaAb()
    potenciaBa()
    raizA()
    raizB()
    fatorialA()
    fatorialB()
    porcentagemAb()
    porcentagemBa()
    media()
}

function handleButtonClick(){
    let inputNumA = document.querySelector('#input-numA')
    let inputNumB = document.querySelector('#input-numB')
    let numA = inputNumA.value
    let numB = inputNumB.value
    console.log(numA, numB)
}





function soma(numA, numB){
    return numA + numB
}

function subtracaoAb(numA, numB){
    return numA - numB
}

function subtracaoBa(numA, numB){
    return numB - numA
}

function multiplica(numA, numB){
    return numA * numB
}

function divisaoAb(numA, numB){
    return numA/numB
}

function divisaobA(numA, numB){
    return numB/numA
}

function potenciaAb(numA, numB){
    return Math.pow(numA, numB)
}


function potenciaBa(numA, numB){
    return Math.pow(numB, numA)
}

function raizA(numA){
    return Math.sqrt(numA).toFixed(2);    
}

function raizB(numB){
    return Math.sqrt(numB).toFixed(2)
}

function fatorialA(numA){
    if(numA === 0  || numA === 1)
    return 1;    
    for(let i = numA-1; i>= 1; i--){
        numA = numA *i
    }
    return numA

}

function fatorialB(numB){
    if(numB === 0  || numB === 1)
    return 1;    
    for(let i = numB-1; i>= 1; i--){
        numB = numB *i
    }
    return numB
}

function porcentagemAb(numA, numB){
    let result;     
    result= Math.ceil((numB/numA)*100)
    return `${result}%`;
}

function porcentagemBa(numA, numB){
    let result;     
    result= Math.ceil((numA/numB)*100)
    return `${result}%`;
}

function media(numA, numB){
    return (numA+numB)/2
}

start();













