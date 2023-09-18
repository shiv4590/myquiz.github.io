const questions=[
    {
        question:" Students can get the JEE Advanced 2023 question papers and answer keys along with detailed solutions here. Also, they can access the detailed paper analysis of JEE Advanced 2023 official question papers as and when the examination is over. Check the detailed solutions for both paper 1 and paper 2 of JEE Advanced question paper 2023 below:?",
        
            answer :[
            {text:"1",correct:"true"},
            {text:"2",correct:"false"},
            {text:"3",correct:"false"},
            {text:"4",correct:"false"}
        
        ]
            
        
    },
    {
        question:" What is second?",
        
        answer :[
        {text:"1",correct:"false"},
        {text:"2",correct:"true"},
        {text:"3",correct:"false"},
        {text:"4",correct:"false"}
    
    ]
    },
    {
        question:" What is third?",
        
        answer :[
        {text:"1",correct:"false"},
        {text:"2",correct:"false"},
        {text:"3",correct:"true"},
        {text:"4",correct:"false"}
    
    ]
    },
    {
        question:" What is fourth?",
        
        answer :[
        {text:"1",correct:"false"},
        {text:"2",correct:"false"},
        {text:"3",correct:"false"},
        {text:"4",correct:"true"}
    
    ]
    }
];

const questionElement=document.getElementById("question");
const answerButton=document.getElementById("nextanswer");
const nextButton=document.getElementById("nextbutton");

let currentquestionindex=0;
let score=0;
function showQuiz()  {
    currentquestionindex=0;
    score=0;
    nextButton.innerHTML="next";
    showQuestion();
}
 function showQuestion(){
    let currentQuestion=questions[currentquestionindex];
    let questionNo=currentquestionindex+1;
    questionElement.innerHTML=questionNo+"."+currentQuestion.question;
    currentQuestion.answer.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);

    });

 }
 showQuiz();