
// Armazenamos as questões dentro de uma variável de acordo com o id delas.

var answers = {};

var question_one = document.getElementById('question-1');
var question_two = document.getElementById('question-2');
var question_three = document.getElementById('question-3');
var question_four = document.getElementById('question-4');
var question_five = document.getElementById('question-5');

//1º função para alimentar o objeto answers

function storeAnswer(question_number, event){
    //pegaremos na DOM todos os eventos relacionados com o tipo radio.
    if(event.target.type === 'radio'){
        console.log(event.target.value); 
        /* vamos criar uma array chamada answers com dois elementos. 
        Vamos fazer o parseInt para transformar em número inteiro. Transformar a string em número inteiro. Armazenando dentro do objeto*/
        answers['question'+question_number] = parseInt(event.target.value);
        console.log(answers);
    }
}

// Vamos adicionar event listener - evento de click 

question_one.addEventListener('click', function(event){
    storeAnswer(1, event)
})

question_two.addEventListener('click', function(event){
    storeAnswer(2, event)
})

question_three.addEventListener('click', function(event){
    storeAnswer(3, event)
})

question_four.addEventListener('click', function(event){
    storeAnswer(4, event)
})

question_five.addEventListener('click', function(event){
    storeAnswer(5, event)
})

function totalScore(){ 
    var total_score = 
    answers.question1+
    answers.question2+
    answers.question3+
    answers.question4+
    answers.question5;
}

function getInfoBasedOnScore(){
    if(totalScore() < 7){
        var score_info = "Você precisa tomar mais cuidado com a segurança!";
    }else if(totalScore() <7) {
        var score_info = "Parabéns! Você está bem de segurança!"
    } 
    return score_info;
}

var submit1 = document.getElementById('submit1');
var submit1 = document.getElementById('submit2');
var submit1 = document.getElementById('submit3');
var submit1 = document.getElementById('submit4');
var submit1 = document.getElementById('submit5');