/**First Task
 * Create a maximum of 30 Questions Bank Array for the Quiz using let keyword
 * Create an array of objects to store the questions and answers
 * Each object should have the following properties:
 * - question: the question text
 * - answers: an array of possible answers
 * - correctAnswer: the index of the correct answer in the answers array
 * Second Task
 * Get all the references to the IDs in the HTML file
 * Quiz will be shuffled randomly to select 12 questions each time
 * Create a function to shuffle the questions
 * Create a function to display the questions and answers
 * Create a function to check the answers
 * Create a function to display the score
 * 
 *
 */

let quizQuestions = [];
const questionBank = [{
    question: 'Which Scottish island recently introduced community ownership to resist corporate tourism development?',
    answers: ['Isle of Skye', 'Eigg', 'Mull', 'Lewis'],
    correctAnswer: 'Eigg'
}, 
{
    question: 'Which ancient festival in Cambodia is closely associated with water, boats, and the full moon?',
    answers: ['Bon Om Touk', 'Pchum Ben', 'Khmer New Year', 'Angkor Light Festival'],
    correctAnswer: 'Bon Om Touk'
},
{
    question: 'What is the significance of the "Kashi Vishwanath Corridor" inaugurated in 2022?',
    answers: ['It connects temples in four directions', 'It provides access to the Ganges for pilgrims', 'It enhances solar energy for the holy town', 'It links Varanasi to the Buddhist circuit'],
    correctAnswer: 'It provides access to the Ganges for pilgrims'
},
{
    question: 'Which state in India recently declared itself "mineral-surplus" with deposits of lithium and rare earths?',
    answers: ['Karnataka', 'Jammu and Kashmir', 'Chhattisgarh', 'Gujarat'],
    correctAnswer: 'Jammu and Kashmir'
},
{
    question: "Which Siberian lake, often targeted in climate studies, is known as the world’s deepest freshwater lake?",
    answers: ['Lake Karakul', 'Lake Ladoga', 'Lake Onega', 'Lake Baikal'],
    correctAnswer: 'Lake Baikal'
},
{
    question: 'Which Vietnamese city was recently recognized by UNESCO for its unique craft of making ceremonial conical hats?',
    answers: ['Hanoi', 'Hue', 'Da Nang', 'Hoi Chi Minh City'],
    correctAnswer: 'Hue'
},
{
    question: 'Which region in Vietnam is famous for its terraced rice fields and ethnic diversity?',
    answers: ['Mekong Delta', 'Ninh Binh', 'Sapa', 'Da Lat'],
    correctAnswer: 'Sapa'
},
{
    question: 'Which mineral is a major source of conflict in Myanmar due to illegal trade and armed group control?',
    answers: ['Gold', 'Jade', 'Sapphire', 'Copper'],
    correctAnswer: 'Jade'
},
{
    question: 'Which country recently elected its first female president (2024)?',
    answers: ['Argentina', 'Brazil', 'Mexico', 'Italy'],
    correctAnswer: 'Mexico'
},
{
    question: "What is Lesotho’s primary export?",
    answers: ['Coffee', 'Water', 'Diamonds', 'Cotton'],
    correctAnswer: 'Water'
},
{
    question: 'Which mountain range stretches across the western edge of South America?',
    answers: ['Andes', 'Rockies', 'Himalayas', 'The Alps'],
    correctAnswer: 'Andes'
},
{
    question: "Which country is the world’s largest producer of diamonds?",
    answers: ['Russia', 'Botswana', 'Canada', 'South Africa'],
    correctAnswer: 'Russia'
},
{
    question: 'Which of these is the tallest mountain in the Americas?',
    answers: ['Aconcagua', 'Denali', 'Mount Elbert', 'Mount Everest'],
    correctAnswer: 'Aconcagua'
},
{
    question: 'Which rare metal is increasingly mined in Nigeria due to its use in electric batteries?',
    answers: ['Uranium', 'Tantalite', 'Lithium', 'Cobalt'],
    correctAnswer: 'Tantalite'
},
{
    question: 'The Zungeru Hydroelectric Dam, recently commissioned in Nigeria, is located in which state?',
    answers: ['Ogun', 'Kaduna', 'Niger', 'Jos'],
    correctAnswer: 'Niger'
},
{
    question: 'Which cultural celebration in Myanmar marks the Buddhist New Year and is observed with water fights?',
    answers: ['Phaung Daw Oo Festival', 'Thingyan', 'Tazaungdaing Festival', 'Ananda Pagoda Festival'],
    correctAnswer: 'Thingyan'
},
{
    question: 'Which recent UK policy initiative aimed to reduce carbon emissions by banning sales of new petrol and diesel cars by 2035?',
    answers: ['Green Shift Strategy', 'Clean Growth Strategy', 'Carbon Neutrality Act', 'Net Zero Transport Plan'],
    correctAnswer: 'Net Zero Transport Plan'
},
{
    question: 'Which international organization recently partnered with Cambodia to restore the Tonle Sap Lake ecosystem?',
    answers: ['UNESCO Environment Programme', 'World Wildlife Fund', 'ASEAN Biodiversity Center', 'Greenpeace Southeast Asia'],
    correctAnswer: 'World Wildlife Fund'
},
{
    question: 'Which recent law passed in North Korea further cemented nuclear weapon status into its constitution?',
    answers: ['DPRK Strategic Weapon Code', 'Pyongyang Sovereignty Law', 'National Nuclear Defense Act', 'Nuclear Forces Policy Law'],
    correctAnswer: 'Nuclear Forces Policy Law'
},
{
    question: 'Mount Paektu is considered sacred in North Korea for being the legendary birthplace of whom?',
    answers: ['Kim Il-sung', 'Kim Jong-il', 'Kim Jong-un', 'General Kang Sun'],
    correctAnswer: 'Kim Jong-il'
},
{
    question: "Which event marked North Korea's largest missile test in 2023?",
    answers: ['Kimchi Shield Drill', 'Hwasong-18 Launch', 'Juche Fire Exercise', 'Submarine-Launched Missile'],
    correctAnswer: 'Hwasong-18 Launch'
},
{
    question: "Lesotho’s economy is uniquely dependent on what geographical feature shared with South Africa?",
    answers: ['Maletsunyane Falls', 'Drakensberg Range', 'Katse Dam', 'Plateaus'],
    correctAnswer: 'Katse Dam'
},
{
    question: 'What traditional garment of Lesotho was famously worn by Prince Harry on his 2013 visit?',
    answers: ['Seshoeshoe Wrap', 'Lesotho Cape', 'Mokorotlo', 'Basotho Blanket'],
    correctAnswer: 'Basotho blanket'
},
{
    question: 'What is the cultural significance of Lake Titicaca for indigenous communities in Bolivia and Peru?',
    answers: ['Sacred site of annual animal sacrifice', 'Pilgrimage lake for lunar rituals', 'Center of Andean salt trade', 'Birthplace of the sun god Inti'],
    correctAnswer: 'Birthplace of the sun god Inti'
},
{
    question: 'Which Caribbean country was the first to offer a digital nomad visa in 2020 to attract remote workers?',
    answers: ['Barbados', 'Bahamas', 'Trinidad & Tobago', 'Dominican Republic'],
    correctAnswer: 'Barbados'
},
{
    question: 'What is the traditional dress of Vietnam called?',
    answers: ['Ao Dai', 'Kimono', 'Hanbok', 'Sari'],
    correctAnswer: 'Ao Dai'
},
{
    question: "Who is Myanmar’s controversial leader who was detained in a 2021 coup?",
    answers: ['Aung San Suu Kyi', 'Min Aung Hlaing', 'Thein Sein', 'Win Myint'],
    correctAnswer: 'Aung San Suu Kyi'
},
{
    question: 'Which Indian city is known as the "Pink City"?',
    answers: ['Jaipur', 'Kolkata', 'Delhi', 'Varanasi'],
    correctAnswer: 'Jaipur'
},
{
    question: 'Which Scottish city is known for hosting the largest arts festival in the world?',
    answers: ['Edinburgh', 'Glasgow', 'Aberdeen', 'Inverness'],
    correctAnswer: 'Edinburgh'
},
{
    question: "Which ancient temple complex is Cambodia’s most famous tourist attraction?",
    answers: ['Bayon Temple', 'Angkor Wat', 'Prambanan', 'Borobudur'],
    correctAnswer: 'Angkor Wat'
}
];

// Get reference to IDs in HTML
const playQuizBtn = document.getElementById('play-btn');
const instructionBtn = document.getElementById('inst-btn');
const backToQuizBtn = document.getElementById('back-btn');
const playAgainBtn = document.getElementById('completed-area"');
const quizLogo = document.getElementById('head-logo');

// declare a variable for selected questions in the quiz
let selectedQuestions = 0;
// indicate the number of correct points
let point = 0;


// add event listener to display quiz button
/*playQuizBtn.addEventListener('click', function() {
    displayQuiz();
});

backToQuizBtn.addEventListener('click', function() {
    document.getElementById('play-btn').classList.add('hidden');
    document.getElementById('instruction-area').classList.remove('hidden');
});

// go to the main page when the play again button is clicked
playAgainBtn.addEventListener('click', function() {
    document.getElementById('completed-area').classList.add('hidden');
    document.getElementById('back-btn').classList.remove('hidden');
});
// add event listener to start the main page when the logo is clicked
quizLogo.addEventListener('click', function() {
    displayQuiz();
});

*/



// Function to display instruction and hide the quiz game area and Event listeners
function displayInstructions() {
    document.getElementById('start-quiz-area').classList.add('hidden');
    document.getElementById('instruction-area').classList.remove('hidden');
}

instructionBtn.addEventListener('click', function() {
    displayInstructions();
});

// Create a function that shuffles quiz game here; in a way that user has a new question every time

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Function to start the quiz
function displayQuiz() {
    const shuffledQuestions = shuffleArray(questionBank);

    // display an array of 12 questions
    selectedQuestions = shuffledQuestions.slice(0, 12);
    currentQuestion = 0;
    point = 0;
    displayQuestion();

    document.getElementById('start-quiz-area').classList.add('hidden');
    document.getElementById('quiz-area').classList.remove('hidden');
}

// Function to display the current question and answers
function displayQuestion() {
    const question = document.getElementById('quiz-area');
    const quizAnswers = document.getElementById('options');
    const pointEarned = document.getElementById('point');

    // assign the question text
    question.textContent = selectedQuestions[currentQuestion].question;
    // remove all previous answers
    quizAnswers.innerHTML = '';

    // create and append buttons for each answer
    selectedQuestions[currentQuestion].answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.addEventListener('click', () => checkAnswer(index));
        quizAnswers.appendChild(button);
    });
    pointEarned.textContent = `Your current Points is: ${point} out of ${selectedQuestions}`;

}

// back to quiz button event listener added here
/*backToQuizBtn.addEventListener('click', function() {
    document.getElementById('instruction-area').classList.add('hidden');
    document.getElementById('start-quiz-area').classList.remove('hidden');
});*/
// play again button event listener


   




















// Shuffle function to randomize the questions

/* Some comments here to explain the code
 * - The function takes an array as an argument and shuffles it in place.
 * - It uses the Fisher-Yates algorithm to ensure each element has an equal chance of being in any position.
 * - The function iterates through the array from the last element to the first, swapping each element with a randomly chosen earlier element.
 * - The result is a shuffled array that can be used for quiz questions or other purposes.
 */

/*
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
    function to show and hide instructions
function showInstructions() {
    document.getElementById('instructions').style.display = 'block';
    document.getElementById('quiz-area').style.display = 'none';
}
function hideInstructions() {
    document.getElementById('instructions').style.display = 'none';
    document.getElementById('quiz-area').style.display = 'block';
}

}
// Function to display a question and its answers
function displayQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.forEach((button, index) => {
        button.innerText = question.answers[index];
        button.onclick = () => checkAnswer(index, question.correctAnswer);
    });
}
// Function to check the answer
function checkAnswer(selectedIndex, correctAnswer) {
    if (answerButtons[selectedIndex].innerText === correctAnswer) {
        scoreElement.innerText = 'Correct!';
    } else {
        scoreElement.innerText = 'Wrong!';
    }
}
// Function to display the score
function displayScore() {
    const score = document.querySelectorAll('.correct').length;
    scoreElement.innerText = `Your score: ${score}`;
}
// Shuffle the questions
shuffle(questionBank);
// Display the first question
displayQuestion(questionBank[0]);
// Event listener for the next button
nextButton.addEventListener('click', () => {
    const currentQuestionIndex = questionBank.indexOf(questionBank[0]);
    if (currentQuestionIndex < questionBank.length - 1) {
        displayQuestion(questionBank[currentQuestionIndex + 1]);
    } else {
        displayScore();
    }
});
// Display the score button
scoreButton.addEventListener('click', displayScore);

// function to start the quiz
function startQuiz() {
    shuffle(questionBank);
    displayQuestion(questionBank[0]);
}
// Start the quiz
startQuiz();

*/
