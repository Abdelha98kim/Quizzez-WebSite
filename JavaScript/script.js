var questionsAll = ["5+5", "8*2", "10*10", "3*3"];
var ques1rep = ["5", "10", "100", "8"];
var ques2rep = ["10", "18", "16", "7"];
var ques3rep = ["9", "16.5", "22", "100"];
var ques4rep = ["6", "16", "8.5", "9"];

var question = document.getElementById("question-qtnt");
var reponse1 = document.getElementById("reponse1");
var reponse2 = document.getElementById("reponse2");
var reponse3 = document.getElementById("reponse3");
var reponse4 = document.getElementById("reponse4");
var next = document.getElementById("next");

var i = 0;

next.addEventListener("click", function(){
    next.innerHTML = ("Next ->");
    question.innerHTML = (questionsAll[i]);
    reponse1.innerHTML = (ques1rep[i]);
    reponse2.innerHTML = (ques2rep[i]);
    reponse3.innerHTML = (ques3rep[i]);
    reponse4.innerHTML = (ques4rep[i]);
    i++;
});

    

