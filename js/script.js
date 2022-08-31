const quizData = [
    {
        question: "Tiene mayor rendimiento",
        a: "App Híbridas",
        b: "App Nativas",
        correct: "b"
    },
    {
        question: "Reutilizacion de codigo",
        a: "App Híbridas",
        b: "App Nativas",
        correct: "a"
    },
    {
        question: "Mayor escalabilidad",
        a: "App Híbridas",
        b: "App Nativas",
        correct: "a"
    },
    {
        question: "Mayor seguridad",
        a: "App Híbridas",
        b: "App Nativas",
        correct: "b"
    },
    {
        question: "Mayor audiencia",
        a: "App Híbridas",
        b: "App Nativas",
        correct: "a"
    },
    {
        question: "Mayor velocidad de respuesta",
        a: "App Híbridas",
        b: "App Nativas",
        correct: "b"
    },
    {
        question: "Requiere una menor inversión de tiempo y recursos",
        a: "App Híbridas",
        b: "App Nativas",
        correct: "a"
    },
    {
        question: "Brinda una mejor experiencia de usuario y la integración correcta a las funcionalidades del hardware",
        a: "App Híbridas",
        b: "App Nativas",
        correct: "b"
    },
    {
        question: "Menor consumo de memoria.",
        a: "App Híbridas",
        b: "App Nativas",
        correct: "b"
    },
    {
        question: "El mantenimiento de estas aplicaciones es mucho menos costoso y más rápido",
        a: "App Híbridas",
        b: "App Nativas",
        correct: "a"
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const submitBtn  = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected(){
    let answer
    answerEls.forEach(answerEl =>{
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
           
       }

       currentQuiz++
       updateProgressBar(myProgressBar, currentQuiz*10);
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Tus respuestas ${score}/${quizData.length} preguntas correctas</h2>

           <button onclick="location.reload()">Reiniciar</button>
           `
       }
    }
})


function updateProgressBar(progressBar, value) {
    value = Math.round(value);
    progressBar.querySelector(".relleno").style.width = `${value}%`;
    progressBar.querySelector(".texto").textContent = `${value}%`;
  }
  
  const myProgressBar = document.querySelector(".progress");
  