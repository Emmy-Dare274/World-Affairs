/**First Task
 * Create a maximum of 30 Questions Bank Array for the Quiz using let keyword
 * Create an array of objects to store the questions and answers
 * Each object should have the following properties:
 * - question: the question text
 * - answers: an array of possible answers
 * - correctAnswer: the index of the correct answer in the answers array
 * Second Task
 * 
 */

// A bank for quiz question Bank with const array object

const questionBank = [{
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








/*function to show and hide instructions
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
