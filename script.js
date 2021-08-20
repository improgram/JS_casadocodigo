function object() { 
    let object = document.createElement('object');
    object.text = '\n TESTE OBJECT';
    object.setAttribute('a', "Resultado");
    object.id = "object" /* Igual a setAttribute('className', "object")*/
    console.log('TESTE OBJECT');
    object.insertAdjacentHtml("afterEnd", buttonBatimentos);
}

//beforebegin = Antes do element
//afterbegin = Dentro do element e antes do primeiro filho
//beforeEnd = Dentro do element e apos seu ultimo filho
//afterEnd = Após o element

// Calculo Batimentos
let buttonBatimentos = document.getElementById("batimentos");
    buttonBatimentos.addEventListener("click", batimentos);

let codBatimentos = document.createElement('a');
    codBatimentos.text = '\n Abrir Codigo Batimentos no GitHub';
    codBatimentos.setAttribute('href', 'https://github.com/improgram/casadocodigo/blob/master/Capitulo3/024Topico3.6.html');
    codBatimentos.setAttribute("target", "_blank");

function batimentos () {
    let idade = prompt('Quantos anos voce tem ?');
    let diasdevida = idade * 365;
    let calcBatimentos = '\n Idade: ' + idade + ' anos.\n' + 'O Coração bateu: \n' + diasdevida * 24 * 60 * 80 + ' vezes em toda a vida.\n';
    console.log(calcBatimentos);
        
    buttonBatimentos.insertAdjacentHTML("beforeEnd", calcBatimentos);
    buttonBatimentos.insertAdjacentElement("afterEnd", codBatimentos);

    object();
}

// Anos de Copa
let copa = '\n Todas as Copas \n';
let ultimaCopa = 2018;
let buttonCopa = document.getElementById('copas');
    buttonCopa.addEventListener("click", anodeCopa);

let codCopas = document.createElement('a');
    codCopas.text = '\n Abrir Codigo Fonte das Copas no GitHub';
    codCopas.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo5/036Topico5.3.html");
    codCopas.setAttribute("target", "_blank");    

    function checkWar (ano){
        var houveGuerra = false;
            if (ano >= 1942 && ano <= 1946){                    
                houveGuerra = true; //Caso for V executa o codigo abaixo:
                console.log('Sem Copa.')
                copa += 'Em ' + ano + ': nao teve Copa devido a Guerra. \n';
            };
        return houveGuerra;
    };

    function anodeCopa () {
        for (ano = 1930; ano <= ultimaCopa; ano += 4) {
            if (checkWar(ano) == true)  
                continue
                copa += 'Em ' + ano + ': Teve Copa. \n';
                console.log('Em: ' + ano + ': Teve Copa.')
        }
            if (ano > 2020) {
                console.log('Em: ' + ano + ' : vai ter copa.')
                copa += 'Em ' + ano + ': vai ter Copa.\n';
        //innerText deve usar \n para pular a linha. Com textContent e innerHTML nao pula a linha
                buttonCopa.insertAdjacentElement("afterEnd", codCopas);
            }

        buttonCopa.insertAdjacentHTML("afterEnd", copa);      
        buttonCopa.insertAdjacentElement("beforeEnd", codCopas);
    } 
    
//Anos de Olimpiada
let olimpiadas = '\n Todas as Olimpiadas \n';
let ultimaOlimpiadas = 2016;
let buttonOlimpiadas = document.getElementById('olimpiadas');
    buttonOlimpiadas.addEventListener("click", anodeOlimpiadas);

let codOlimpiadas = document.createElement('a');
    codOlimpiadas.text = '\n Abrir o Codigo Olimpiadas no GitHub';
    codOlimpiadas.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo5/038Topico5.5.html");
    codOlimpiadas.setAttribute('target', "_blank");

function checkWar2 (ano){
    let pausaGuerra = false;
    if (ano >= 1940 && ano <= 1946){
        pausaGuerra = true; //Caso for V executa a condicao
        console.log('Sem Olimpiadas.')
        olimpiadas += 'Em ' + ano + ': interrupção devido a Guerra. \n';
    };
    return pausaGuerra;
}
    
function anodeOlimpiadas(){
    for(ano = 1896; ano <= ultimaOlimpiadas; ano += 4){
        if(checkWar2(ano) == true)
        continue
        olimpiadas += 'Em ' + ano + ': Teve Olimpiadas. \n';
        console.log('Em: ' + ano + ': Teve Olimpiadas.')
    }

    if(ano > 2019) {
        console.log('Em: ' + ano + ' : vai ter Olimpiadas.');
        olimpiadas += 'Em ' + ano + ': Interrupção devido a Covid-19.\n';
        buttonOlimpiadas.insertAdjacentElement('afterEnd', codOlimpiadas);
    } 

    buttonOlimpiadas.insertAdjacentHTML("afterEnd", olimpiadas);
    buttonOlimpiadas.insertAdjacentElement("beforeEnd", codOlimpiadas);
}

//Tabuada
let buttonTabuada = document.getElementById('tabuada');
    buttonTabuada.addEventListener("click", tabuada);
let buttonTabuada2 = document.createElement('button');
    buttonTabuada2.innerText = 'Escolha outro Numero';

    function tabuada (){
        let numero = parseInt(prompt('Tabuada de qual numero ?' ));
        let resposta = 'Numero escolhido: ' + numero + '\n';
        
            for(let count = 1; count <= 10; count++) {
                resposta += numero + " X " + count + " = " + numero*count + '\n';
            }
            
        let codTabuada = document.createElement('a');
            codTabuada.text = '\n Abrir o Codigo Tabuada no GitHub';
            codTabuada.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo5/039Topico5.6-Tabuada.html");
            codTabuada.setAttribute('target', "_blank");

        buttonTabuada.insertAdjacentElement('afterEnd', codTabuada , buttonTabuada2);
        buttonTabuada.insertAdjacentElement("afterEnd", buttonTabuada2);   
        buttonTabuada.insertAdjacentHTML("afterEnd", resposta);
    }

//Comparativo combustiveis
let buttonCombustiveis = document.getElementById('combustiveis');
    buttonCombustiveis.addEventListener("click", combustiveis);

let buttonComparativo = document.createElement('button')
    buttonComparativo.innerText = "Clique para Comparar Alcool x Gasolina";
    buttonComparativo.addEventListener("click", comparaCombustivel);

    function combustiveis (){
        let tanqueCarro = 40;
        let kmcomGas = parseInt(prompt('Digite km Percorridos com Gasolina.'))
        let consumoGasolina = (kmcomGas / tanqueCarro);
        let resumoGas = 'Km percorridos digitado: ' + kmcomGas + '\n' +
                    'Com tanque de combustivel: ' + tanqueCarro + ' litros.\n' +
                    'Resultado: km rodado por litro: ' + consumoGasolina + ' km/L.\n';

        let codCombustiveis = document.createElement('a');
            codCombustiveis.text = '\n Abrir o Codigo no GitHub';
            codCombustiveis.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo2/011Topico2.6_Opcao3.html");
            codCombustiveis.setAttribute('target', "_blank");

    buttonCombustiveis.insertAdjacentHTML("beforeEnd", resumoGas);
    buttonCombustiveis.insertAdjacentElement("beforeEnd", buttonComparativo);
    buttonCombustiveis.insertAdjacentElement("afterEnd", codCombustiveis);
}

function comparaCombustivel () {
    let buttonValorGas = parseInt(prompt('Digite o valor do litro da Gasolina.') );   
    let buttonValorAlcool = parseInt(prompt('Digite o valor do litro do Alcool.') );
    console.log("litro da Gasolina: " + buttonValorGas);
    console.log("litro do Alcool: " + buttonValorAlcool);
}

//Media de Idade dos familiares
let buttonIdade = document.getElementById('mediaIdade');
    buttonIdade.addEventListener("click", mediaIdade);

function mediaIdade(){
    console.log('media de idade')

    let familiares = parseInt(prompt('Quantos familiares ?'));
    let somarIdades = 0;
    let numeroInicio = 1;
    while (numeroInicio <= familiares) {
        let idade = parseInt(prompt('Digite a idade do familiar'));         
        somarIdades = somarIdades + idade;
        numeroInicio++
    }

    let mediaIdade = somarIdades / familiares
    console.log('Media idade dos familiares: ' + Math.round(mediaIdade));

    let codIdade = document.createElement('a');
        codIdade.text = '\n Abrir o Codigo no GitHub';
        codIdade.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo5/042Topico5.9.html");
        codIdade.setAttribute('target', "_blank");

    //buttonIdade.insertAdjacentHTML("beforeEnd", );
    //buttonIdade.insertAdjacentElement("beforeEnd", );
    buttonIdade.insertAdjacentElement("afterEnd", codIdade);
}

//Acertar Numero pensado
let buttonNumero = document.getElementById('adivinharNumero');
    buttonNumero.addEventListener("click", numeroPensado);

function numeroPensado() {
    console.log('numero pensado:' )

    let codNumero = document.createElement('a');
        codNumero.text = '\n Abrir o Codigo no GitHub';
        codNumero.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo5/044Topico5.11_Exerci1_2_3.html");
        codNumero.setAttribute('target', "_blank");   

    //buttonNumero.insertAdjacentHTML("beforeEnd", );
    //buttonNumero.insertAdjacentElement("beforeEnd", );
    buttonNumero.insertAdjacentElement("beforeEnd", codNumero);
}

//Linhas e Colunas
let buttonlinhaColuna = document.getElementById('linhaColuna');
    buttonlinhaColuna.addEventListener("click", linhaComColuna);

function linhaComColuna(){
    console.log('linhas e colunas')

    let codLinhasColunas = document.createElement('a');
        codLinhasColunas.text = '\n Abrir o Codigo no GitHub';
        codLinhasColunas.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo5/045Topico5.12.html");
        codLinhasColunas.setAttribute('target', "_blank");    

    //buttonlinhaColuna.insertAdjacentHTML("beforeEnd", );
    //buttonlinhaColuna.insertAdjacentElement("beforeEnd", );
    buttonlinhaColuna.insertAdjacentElement("before", codLinhasColunas);
}

//Mega-Sena
let buttonMegaSena = document.getElementById('megaSena');
    buttonMegaSena.addEventListener("click", megasena);

function megasena(){
    console.log('teste Mega Sena');

    let codMegasena = document.createElement('a');
        codMegasena.text = '\n Abrir o Codigo no GitHub';
        codMegasena.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo6/051Topico6.4_Opcao2.html");
        codMegasena.setAttribute('target', "_blank");    

    //buttonMegaSena.insertAdjacentHTML("beforeEnd", );
    //buttonMegaSena.insertAdjacentElement("beforeEnd", );       
    buttonMegaSena.insertAdjacentElement("before", imgMegaSena);
}

//Introducao Canvas
let buttonCanvas = document.getElementById('canvas');
    buttonCanvas.addEventListener("click", introCanvas);

function introCanvas() {
    console.log('Intro Canvas');

    let codIntroCanvas = document.createElement('a');
        codIntroCanvas.text = '\n Abrir o Codigo no GitHub';
        codIntroCanvas.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo7/055Topico7.2.html");
        codIntroCanvas.setAttribute('target', "_blank");

    //buttonCanvas.insertAdjacentHTML("beforeEnd", );
    //buttonCanvas.insertAdjacentElement("beforeEnd", );
    buttonCanvas.insertAdjacentElement("before", codIntroCanvas);
}

//Tabuleiro Damas
let buttonDamas = document.getElementById('damas');
    buttonDamas.addEventListener("click", damas);

function damas(){
    console.log('teste damas');

    let codDamas = document.createElement('a');
        codDamas.text = '\n Abrir o Codigo no GitHub';
        codDamas.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo7/056Topico7.3_Tabuleiro.html");
        codDamas.setAttribute('target', "_blank");  

    //buttonDamas.insertAdjacentHTML("beforeEnd", );
    //buttonDamas.insertAdjacentElement("beforeEnd", );
    buttonDamas.insertAdjacentElement("before", codDamas);
}

//Bandeiras com Canvas
let buttonBandeiras = document.getElementById('bandeiras');
    buttonBandeiras.addEventListener("click", bandeiras)

function bandeiras() {
    console.log('bandeiras');

    let codBandeiras = document.createElement('a');
        codBandeiras.text = '\n Abrir o Codigo no GitHub';
        codBandeiras.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo7/057Topico7.4_Bandeiras.html");
        codBandeiras.setAttribute('target', "_blank");  

    //buttonBandeiras.insertAdjacentHTML("beforeEnd", );
    //buttonBandeiras.insertAdjacentElement("beforeEnd", );
    buttonBandeiras.insertAdjacentElement("before", codBandeiras);
}

//Canvas com Condicionais
let buttonCondicionais = document.getElementById('canvasCondicionais');
    buttonCondicionais.addEventListener("click", canvasCondicionais);

function canvasCondicionais(){
    console.log('canvas condicionais')

    let codCondicionais = document.createElement('a');
        codCondicionais.text = '\n Abrir o Codigo no GitHub';
        codCondicionais.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo7/062Topico7.6_Exercicio4.html");
        codCondicionais.setAttribute('target', "_blank");

    //buttonCondicionais.insertAdjacentHTML("beforeEnd", );
    //buttonCondicionais.insertAdjacentElement("beforeEnd", );
    buttonCondicionais.insertAdjacentElement("before", codCondicionais);
}

//Canvas Ordem crescente
let buttonCrescente = document.getElementById('canvasCrescente');
    buttonCrescente.addEventListener("click", canvasCrescente);

function canvasCrescente(){
    console.log('canvas crescente')

    let codCanvasCrescente = document.createElement('a');
        codCanvasCrescente.text = '\n Abrir o Codigo no GitHub';
        codCanvasCrescente.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo7/063Topico7.7.html");
        codCanvasCrescente.setAttribute('target', "_blank");

    //buttonCrescente.insertAdjacentHTML("beforeEnd", );
    //buttonCrescente.insertAdjacentElement("beforeEnd", );
    buttonCrescente.insertAdjacentElement("before", codCanvasCrescente);    
}

//Canvas Parabola
let buttonParabola = document.getElementById('canvasParabola');
    buttonParabola.addEventListener("click", canvasParabola)

function canvasParabola(){
    console.log('canvas parabola')

    let codParabola = document.createElement('a');
        codParabola.text = '\n Abrir o Codigo no GitHub';
        codParabola.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo7/065Topico7.9_Parabola.html");
        codParabola.setAttribute('target', "_blank");

    //buttonParabola.insertAdjacentHTML("beforeEnd", );
    //buttonParabola.insertAdjacentElement("beforeEnd", );
    buttonParabola.insertAdjacentElement("before", codParabola);
}

//Calculo do Seno com Canvas
let buttonSeno = document.getElementById('seno');
    buttonSeno.addEventListener("click", seno)

function seno(){
    console.log('seno')

    let codSeno = document.createElement('a');
        codSeno.text = '\n Abrir o Codigo no GitHub';
        codSeno.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo7/069Topico7.13_Seno.html");
        codSeno.setAttribute('target', "_blank");

    //buttonSeno.insertAdjacentHTML("beforeEnd", );
    //buttonSeno.insertAdjacentElement("beforeEnd", );
    buttonSeno.insertAdjacentElement("before", codSeno);
}

// Detecta cliques:
let buttonClique = document.getElementById('cliques');
    buttonClique.addEventListener("click", detectaClique)

function detectaClique(){
    console.log('test1')

    let codClique = document.createElement('a');
        codClique.text = '\n Abrir o Codigo no GitHub';
        codClique.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo8/070Topico8.1_Com_Alert.html");
        codClique.setAttribute('target', "_blank");

    //buttonClique.insertAdjacentHTML("beforeEnd", );
    //buttonClique.insertAdjacentElement("beforeEnd", );
    buttonClique.insertAdjacentElement("before", codClique);
}

// Detecta botao Mouse:
let buttonMouse = document.getElementById('botaoMouse');
    buttonMouse.addEventListener("click", mouse)

function mouse(){
    console.log('test1')

    let codMouse = document.createElement('a');
        codMouse.text = '\n Abrir o Codigo no GitHub';
        codMouse.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo8/071Topico8.2_Exercicio1.html");
        codMouse.setAttribute('target', "_blank");

    //buttonMouse.insertAdjacentHTML("beforeEnd", );
    //buttonMouse.insertAdjacentElement("beforeEnd", );
    buttonMouse.insertAdjacentElement("before", codMouse);
}

// Paint com Canvas:
let buttonPaint = document.getElementById('paint');
    buttonPaint.addEventListener("click", paint)

function paint(){
    console.log('test1')

    let codPaint = document.createElement('a');
        codPaint.text = '\n Abrir o Codigo no GitHub';
        codPaint.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo8/073Topico8.2_Paint_Canvas_Exerci3.html");
        codPaint.setAttribute('target', "_blank");

    //buttonPaint.insertAdjacentHTML("beforeEnd", );
    //buttonPaint.insertAdjacentElement("beforeEnd", );
    buttonPaint.insertAdjacentElement("before", codPaint);
}

// CanvasaAnimacoes:
let buttonAnimacoes = document.getElementById('animacoes');
    buttonAnimacoes.addEventListener("click", CanvasAnimacoes)

function CanvasAnimacoes(){
    console.log('test1')

    let codAnimacoes = document.createElement('a');
        codAnimacoes.text = '\n Abrir o Codigo no GitHub';
        codAnimacoes.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo8/075Topico8.4.html");
        codAnimacoes.setAttribute('target', "_blank");

    //buttonAnimacoes.insertAdjacentHTML("beforeEnd", );
    //buttonAnimacoes.insertAdjacentElement("beforeEnd", );
    buttonAnimacoes.insertAdjacentElement("before", codAnimacoes);
}

// CODIGO Tiro ao alvo:
let buttonAlvo = document.getElementById('tiroAlvo');
    buttonAlvo.addEventListener("click", tiroAlvo)

function tiroAlvo(){
    console.log('test1')

    let codTiroAlvo = document.createElement('a');
        codTiroAlvo.text = '\n Abrir o Codigo no GitHub';
        codTiroAlvo.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo8/079Topico8.5_opcao2.html");
        codTiroAlvo.setAttribute('target', "_blank");

    //buttonAlvo.insertAdjacentHTML("beforeEnd", );
    //buttonAlvo.insertAdjacentElement("beforeEnd", );
    buttonAlvo.insertAdjacentElement("before", codTiroAlvo);
}

// CODIGO Formulario com Eventos:
let buttonFormEventos = document.getElementById('formEventos');
    buttonFormEventos.addEventListener("click", formEventos)

function formEventos(){
    console.log('test1')

    let codFormEventos = document.createElement('a');
        codFormEventos.text = '\n Abrir o Codigo no GitHub';
        codFormEventos.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo8/080Topico9.1.html");
        codFormEventos.setAttribute('target', "_blank");

    //buttonFormEventos.insertAdjacentHTML("beforeEnd", );
    //buttonFormEventos.insertAdjacentElement("beforeEnd", );
    buttonFormEventos.insertAdjacentElement("before", codFormEventos);
}

//Formulario com Array:
let buttonFormArray = document.getElementById('formArray');
    buttonFormArray.addEventListener("click", formArray)

function formArray(){
    console.log('test1')

    let codFormArray = document.createElement('a');
        codFormArray.text = '\n Abrir o Codigo no GitHub';
        codFormArray.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo8/081Topico9.1_formulario_array.html");
        codFormArray.setAttribute('target', "_blank");

    //buttonFormArray.insertAdjacentHTML("beforeEnd", );
    //buttonFormArray.insertAdjacentElement("beforeEnd", );
    buttonFormArray.insertAdjacentElement("before", codFormArray);
}

// CODIGO Objetos:
let buttonObjetos = document.getElementById('objetos');
    buttonObjetos.addEventListener("click", objetos)

function objetos(){
    console.log('test1')

    let codObjetos = document.createElement('a');
        codObjetos.text = '\n Abrir o Codigo no GitHub';
        codObjetos.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo8/083_Arrays.html");
        codObjetos.setAttribute('target', "_blank");

    //buttonObjetos.insertAdjacentHTML("beforeEnd", );
    //buttonObjetos.insertAdjacentElement("beforeEnd", );
    buttonObjetos.insertAdjacentElement("before", codObjetos);
}

// CODIGO DOM:
let buttonDom = document.getElementById('dom');
    buttonDom.addEventListener("click", dom);

function dom(){
    console.log('test1')

    let codDom = document.createElement('a');
        codDom.text = '\n Abrir o Codigo no GitHub';
        codDom.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo8/084Topico9.2_links.html");
        codDom.setAttribute('target', "_blank");

    //buttonDom.insertAdjacentHTML("beforeEnd", );
    //buttonDom.insertAdjacentElement("beforeEnd", );
    buttonDom.insertAdjacentElement("before", codDom);
}

// CODIGO IMC:
let buttonImc = document.getElementById('imc');
    buttonImc.addEventListener("click", imc);

function imc(){
    console.log('test1')

    let codImc = document.createElement('a');
        codImc.text = '\n Abrir o Codigo no GitHub';
        codImc.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo8/085Topico9.3_IMC.html");
        codImc.setAttribute('target', "_blank");

    //buttonImc.insertAdjacentHTML("beforeEnd", );
    //buttonImc.insertAdjacentElement("beforeEnd", );
    buttonImc.insertAdjacentElement("before", codImc);
}
