const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {
    question: "The attribute, which define the relationship between current document and HREF'ed URL is",
    choice1: "REL",
    choice2: "URL",
    choice3: "REV",
    choice4: "all of these",
    answer: "1"
    },
    {
    question: "<DT> tag is designed to fit a single line of our web page but <DD> tag will accept a",
    choice1: "line of text",
    choice2: "full paragraph",
    choice3: "word",
    choice4: "request",
    answer: "2"
    },
    {
    question: "Character encoding is",
    choice1: "method used to represent numbers in a character",
    choice2: "method used to represent character in a number",
    choice3: "a system that consists of a code which pairs each character with a pattern,sequence of natural numbers or electrical pulse in order to transmit the data",
    choice4: "none of these",
    answer: "3"
    },
    {
    question: "From which tag the descriptive list starts?",
    choice1: "<LL>",
    choice2: "<DD>",
    choice3: "<DL>",
    choice4: "<DS>",
    answer: "3"
    },
    {
    question: "Correct HTML to left align the content inside a table cell is",
    choice1: "<tdleft>",
    choice2: "<td raligh = left >",
    choice3: "<td align = left>",
    choice4: "<td leftalign>",
    answer: "C"
    },
    {
    question: "cfront",
    choice1: "is the front end of a C compiler",
    choice2: "is the pre-processor of a C compiler",
    choice3: "is a tool that translates a C++ code to its equivalent C code",
    choice4: "none of the above",
    answer: "3"
    },
    {
     question: "The tag which allows you to rest other HTML tags within the description is",
     choice1: "<TH>",
    choice2: "<TD>",
    choice3: "<TR>",
    choice4: "<CAPTION>",
    answer: "4"
    },
    {
    question: "<Base> tag is designed to appear only between",
    choice1: "<HEAD>",
    choice2: "<TITLE>",
     choice3: "<BODY>",
     choice4: "<FORM>",
     answer: "1"
    },
    {
     question: "How can you open a link in a new browser window?",
     choice1: "< a href = url target = new>",
    choice2: "<a href = url target= _blank>",
     choice3: "<a href = url.new>",
    choice4: "<a href = url target =open>",
    answer: "2"
    },
    {
        question: "which of the following tag is used to mark a begining of paragraph?",
        choice1: "<TD>",
        choice2: "<br>",
        choice3: "<p>",
        choice4: "<TR>",
        answer: "3"
    },
    {
        question: "A much better approach to establish the base URL is to use",
        choice1: "BASE element",
        choice2: "HEAD element",
        choice3: "both (a) and (b)",
        choice4: "None of these",
        answer: "1"
    },
    {
        question: "The tag used to create a new list item and also include a hyperlink isCorrect HTML tag for the largest heading is",
        choice1: "<LI>",
        choice2: "<DD>",
        choice3: "<DL>",
        choice4: "<UL>",
        answer: "1"
    },
    {
        question: "Can the element <First> be replaced with <first>",
        choice1: "No, they represent different elements altogether",
        choice2: "Both are same",
        choice3: "First is correct only",
        choice4: "first is only correct",
        answer: "2"
    },
    {
        question: "Markup tags tell the web browser",
        choice1: "How to organise the page",
        choice2: "How to display the page",
        choice3: "How to display message box on page",
        choice4: "None of these",
        answer: "2"
    },
    {
        question: "Any part of the graphic that is not included in another hot zone is considered to be part of",
        choice1: "rect",
        choice2: "point",
        choice3: "default",
        choice4: "polygon",
        answer: "3"
    },
    {
        question: "Which of the tag is used to creates a number list?",
        choice1: "<LI>",
        choice2: "<OL>",
        choice3: "<LI> and <OL>",
        choice4: "None of these",
        answer: "3"
    },
    {
        question: "<INPUT> is",
        choice1: "format tag",
        choice2: "empty tag",
        choice3: "Both of these",
        choice4: "None of these",
        answer: "2"
    },
    {
        question: "The map definition file is generally stored in",
        choice1: "CGI-BIN",
        choice2: "RECYCLE-BIN",
        choice3: "BIN",
        choice4: "None of these",
        answer: "1"
    },
    {
        question: "The latest HTML standard is",
        choice1: "XML",
        choice2: "SGML",
        choice3: "HTML 4.0",
        choice4: "HTML 5.0",
        answer: "4"
    },
    {
        question: "The tag used to create a hypertext relationship between current document and another URL is",
        choice1: "<ISINDEX>",
        choice2: "<A>",
        choice3: "<LINK>",
        choice4: "Both (a) and (b)",
        answer: "3"
    },
]

    const CORRECT_BONUS = 5;
    const MAX_QUESTIONS = 20;

    startQuiz1 = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        
        return window.location.assign('end.html');
    }
     questionCounter++;
     questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
choice.addEventListener('click', (e) => {
      if (!acceptingAnswers) return;

     acceptingAnswers = false;
     const selectedChoice = e.target;
     
     const selectedAnswer = selectedChoice.dataset['number'];

     const classToApply = 
     selectedAnswer == currentQuestion.answer ? alert("Great!") : alert("feedback");

     if(selectedAnswer == currentQuestion.answer) {
        
        incrementScore(CORRECT_BONUS);
    }

     selectedChoice.parentElement.classList.add(classToApply);

     setTimeout( () => {
         selectedChoice.parentElement.classList.remove(classToApply);
         getNewQuestion();
     }, 1000);

    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

startQuiz1();
