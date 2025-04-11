
// A bank for quiz question Bank with let and const array object

let questions = [];
const questionsBank = [{
    question: 'Which Scottish island recently introduced community ownership to resist corporate tourism development?',
    options: ['Isle of Skye', 'Eigg', 'Mull', 'Lewis'],
    correct: 'Eigg'
}, 
{
    question: 'Which ancient festival in Cambodia is closely associated with water, boats, and the full moon?',
    options: ['Bon Om Touk', 'Pchum Ben', 'Khmer New Year', 'Angkor Light Festival'],
    correct: 'Bon Om Touk'
},
{
    question: 'What is the significance of the "Kashi Vishwanath Corridor" inaugurated in 2022?',
    options: ['It connects temples in four directions', 'It provides access to the Ganges for pilgrims', 'It enhances solar energy for the holy town', 'It links Varanasi to the Buddhist circuit'],
    correct: 'It provides access to the Ganges for pilgrims'
},
{
    question: 'Which state in India recently declared itself "mineral-surplus" with deposits of lithium and rare earths?',
    options: ['Karnataka', 'Jammu and Kashmir', 'Chhattisgarh', 'Gujarat'],
    correct: 'Jammu and Kashmir'
},
{
    question: "Which Siberian lake, often targeted in climate studies, is known as the world’s deepest freshwater lake?",
    options: ['Lake Karakul', 'Lake Ladoga', 'Lake Onega', 'Lake Baikal'],
    correct: 'Lake Baikal'
},
{
    question: 'Which Vietnamese city was recently recognized by UNESCO for its unique craft of making ceremonial conical hats?',
    options: ['Hanoi', 'Hue', 'Da Nang', 'Hoi Chi Minh City'],
    correct: 'Hue'
},
{
    question: 'Which region in Vietnam is famous for its terraced rice fields and ethnic diversity?',
    options: ['Mekong Delta', 'Ninh Binh', 'Sapa', 'Da Lat'],
    correct: 'Sapa'
},
{
    question: 'Which mineral is a major source of conflict in Myanmar due to illegal trade and armed group control?',
    options: ['Gold', 'Jade', 'Sapphire', 'Copper'],
    correct: 'Jade'
},
{
    question: 'Which country recently elected its first female president (2024)?',
    options: ['Argentina', 'Brazil', 'Mexico', 'Italy'],
    correct: 'Mexico'
},
{
    question: "What is Lesotho’s primary export?",
    options: ['Coffee', 'Water', 'Diamonds', 'Cotton'],
    correct: 'Water'
},
{
    question: 'Which mountain range stretches across the western edge of South America?',
    options: ['Andes', 'Rockies', 'Himalayas', 'The Alps'],
    correct: 'Andes'
},
{
    question: "Which country is the world’s largest producer of diamonds?",
    options: ['Russia', 'Botswana', 'Canada', 'South Africa'],
    correct: 'Russia'
},
{
    question: 'Which of these is the tallest mountain in the Americas?',
    options: ['Aconcagua', 'Denali', 'Mount Elbert', 'Mount Everest'],
    correct: 'Aconcagua'
},
{
    question: 'Which rare metal is increasingly mined in Nigeria due to its use in electric batteries?',
    options: ['Uranium', 'Tantalite', 'Lithium', 'Cobalt'],
    correct: 'Tantalite'
},
{
    question: 'The Zungeru Hydroelectric Dam, recently commissioned in Nigeria, is located in which state?',
    options: ['Ogun', 'Kaduna', 'Niger', 'Jos'],
    correct: 'Niger'
},
{
    question: 'Which cultural celebration in Myanmar marks the Buddhist New Year and is observed with water fights?',
    options: ['Phaung Daw Oo Festival', 'Thingyan', 'Tazaungdaing Festival', 'Ananda Pagoda Festival'],
    correct: 'Thingyan'
},
{
    question: 'Which recent UK policy initiative aimed to reduce carbon emissions by banning sales of new petrol and diesel cars by 2035?',
    options: ['Green Shift Strategy', 'Clean Growth Strategy', 'Carbon Neutrality Act', 'Net Zero Transport Plan'],
    correct: 'Net Zero Transport Plan'
},
{
    question: 'Which international organization recently partnered with Cambodia to restore the Tonle Sap Lake ecosystem?',
    options: ['UNESCO Environment Programme', 'World Wildlife Fund', 'ASEAN Biodiversity Center', 'Greenpeace Southeast Asia'],
    correct: 'World Wildlife Fund'
},
{
    question: 'Which recent law passed in North Korea further cemented nuclear weapon status into its constitution?',
    options: ['DPRK Strategic Weapon Code', 'Pyongyang Sovereignty Law', 'National Nuclear Defense Act', 'Nuclear Forces Policy Law'],
    correct: 'Nuclear Forces Policy Law'
},
{
    question: 'Mount Paektu is considered sacred in North Korea for being the legendary birthplace of whom?',
    options: ['Kim Il-sung', 'Kim Jong-il', 'Kim Jong-un', 'General Kang Sun'],
    correct: 'Kim Jong-il'
},
{
    question: "Which event marked North Korea's largest missile test in 2023?",
    options: ['Kimchi Shield Drill', 'Hwasong-18 Launch', 'Juche Fire Exercise', 'Submarine-Launched Missile'],
    correct: 'Hwasong-18 Launch'
},
{
    question: "Lesotho’s economy is uniquely dependent on what geographical feature shared with South Africa?",
    options: ['Maletsunyane Falls', 'Drakensberg Range', 'Katse Dam', 'Plateaus'],
    correct: 'Katse Dam'
},
{
    question: 'What traditional garment of Lesotho was famously worn by Prince Harry on his 2013 visit?',
    options: ['Seshoeshoe Wrap', 'Lesotho Cape', 'Mokorotlo', 'Basotho Blanket'],
    correct: 'Basotho blanket'
},
{
    question: 'What is the cultural significance of Lake Titicaca for indigenous communities in Bolivia and Peru?',
    options: ['Sacred site of annual animal sacrifice', 'Pilgrimage lake for lunar rituals', 'Center of Andean salt trade', 'Birthplace of the sun god Inti'],
    correct: 'Birthplace of the sun god Inti'
},
{
    question: 'Which Caribbean country was the first to offer a digital nomad visa in 2020 to attract remote workers?',
    options: ['Barbados', 'Bahamas', 'Trinidad & Tobago', 'Dominican Republic'],
    correct: 'Barbados'
},
{
    question: 'What is the traditional dress of Vietnam called?',
    options: ['Ao Dai', 'Kimono', 'Hanbok', 'Sari'],
    correct: 'Ao Dai'
},
{
    question: "Who is Myanmar’s controversial leader who was detained in a 2021 coup?",
    options: ['Aung San Suu Kyi', 'Min Aung Hlaing', 'Thein Sein', 'Win Myint'],
    correct: 'Aung San Suu Kyi'
},
{
    question: 'Which Indian city is known as the "Pink City"?',
    options: ['Jaipur', 'Kolkata', 'Delhi', 'Varanasi'],
    correct: 'Jaipur'
},
{
    question: 'Which Scottish city is known for hosting the largest arts festival in the world?',
    options: ['Edinburgh', 'Glasgow', 'Aberdeen', 'Inverness'],
    correct: 'Edinburgh'
},
{
    question: "Which ancient temple complex is Cambodia’s most famous tourist attraction?",
    options: ['Bayon Temple', 'Angkor Wat', 'Prambanan', 'Borobudur'],
    correct: 'Angkor Wat'
}
];

// Quiz app prepare

//Link to elements with IDs
const startButton = document.getElementById("startBtn");
const instructionsButton = document.getElementById("instructionBtn");
const restartButton = document.getElementById("restartButton");
const backToStartButton = document.getElementById("backToHomeBtn");
const logo = document.getElementById("head-logo");

// App state variables
let currentQuestion = 0;
let score = 0;

// add event listeners here

startButton.addEventListener("click", function () {
    startQuiz();
});

instructionsButton.addEventListener("click", function () {
    showInstructions();
});

restartButton.addEventListener("click", function () {
    restartQuiz();
});

backToStartButton.addEventListener("click", function () {
    goToStart();
});

logo.addEventListener("click", function () {
    goToStart();
});


/**
 * functions to shuffle array with Fisher Yates algorithm
 */
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// function to initialize quiz game
function startQuiz() {
    const shuffledQuestions = shuffleArray(questionsBank);

    //Set the questions array to the first 12 questions
    questions = shuffledQuestions.slice(0, 12);
    currentQuestion = 0;
    score = 0;
    showQuestion();

    //Hide the start page and show the quiz page
    document.getElementById("start-page").classList.add("hidden");
    document.getElementById("quizPage").classList.remove("hidden");
}

// function to show quiz game
function showQuestion() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("optionsContainer");
    const scoreElement = document.getElementById("score");

    //Set the question text
    questionElement.textContent = questions[currentQuestion].question;

    //Clear previous options (if any)
    optionsContainer.innerHTML = "";

    //Create and append buttons for each option
    questions[currentQuestion].options.forEach((option, index) => {

        //Create a new button element
        const button = document.createElement("button");

        //Set the button text to the current option
        button.textContent = option;

        button.addEventListener("click", () => checkAnswer(index));

        optionsContainer.appendChild(button);
    });
    scoreElement.textContent = `${score} question(s) answered correctly out of ${currentQuestion} questions`;
}

// functions to check answers
function checkAnswer(selectedIndex) {

    //Get the correct index of the current questions answer
    const correctIndex = questions[currentQuestion].options.indexOf(questions[currentQuestion].correct);

    //Check if the selected index matches the correct index
    if (selectedIndex === correctIndex) {

        //If the answer is correct, increment the user's score
        score++;
    }
    //Check for more questions to display
    if (currentQuestion < questions.length - 1) {
        //If there are more questions, move to the next question and show it
        currentQuestion++;
        showQuestion();
    } else {
        showFinalPage();
    }
}

// function to show final page

function showFinalPage() {

    //Get Ids to the final score element in the HTML
    const finalScoreElement = document.getElementById("finalScore");

    //Update the text content of the final score element with the user's score
    finalScoreElement.textContent = `You scored ${score} correctly out of ${questions.length} questions.`;

    //Hide the quiz page and show the final page
    document.getElementById("quizPage").classList.add("hidden");
    document.getElementById("final").classList.remove("hidden");
}

// function to show restart page
function restartQuiz() {
    document.getElementById("final").classList.add("hidden");
    document.getElementById("start-page").classList.remove("hidden");
}

// function to show instruction page
function showInstructions() {
    document.getElementById("start-page").classList.add("hidden");
    document.getElementById("instructions").classList.remove("hidden");
}

// function to go to the start page
function goToStart() {
    document.getElementById("start-page").classList.remove("hidden");
    document.getElementById("quizPage").classList.add("hidden");
    document.getElementById("instructions").classList.add("hidden");
    document.getElementById("final").classList.add("hidden");
}
