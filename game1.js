
var alphabet_arr = [
    'img/Game1/A.png',
    'img/Game1/B.png',
    'img/Game1/C.png',
    'img/Game1/D.png',
    'img/Game1/E.png',
    'img/Game1/F.png',
    'img/Game1/G.png',
    'img/Game1/H.png',
    'img/Game1/I.png',
    'img/Game1/J.png',
    'img/Game1/K.png',
    'img/Game1/L.png',
    'img/Game1/M.png',
    'img/Game1/N.png',
    'img/Game1/O.png',
    'img/Game1/P.png',
    'img/Game1/Q.png',
    'img/Game1/R.png',
    'img/Game1/S.png',
    'img/Game1/T.png',
    'img/Game1/U.png',
    'img/Game1/V.png',
    'img/Game1/W.png',
    'img/Game1/X.png',
    'img/Game1/Y.png',
    'img/Game1/Z.png'
]

count = 0
function restart(){
    count = 0
    AnswerCount = 0
 
        const randomNumber = Math.floor(Math.random() * alphabet_arr.length);
        display_computer = alphabet_arr[randomNumber]
        document.getElementById('display_computer').src = `${display_computer}`
        document.getElementById('mainAlphabetsDiv').style.display ='flex';
        document.getElementById('message').style.display = 'none';
        document.getElementById('scoreCount').innerHTML = AnswerCount;

    console.log(display_computer);
    getUserOptions();
}


function getComputerChoice() {
    console.log('clicked', count);
 
    // if (count <= 10) {
        const randomNumber = Math.floor(Math.random() * alphabet_arr.length);
        display_computer = alphabet_arr[randomNumber]


        /*console.log(getComputerChoice(display_computer));*/


        document.getElementById('display_computer').src = `${display_computer}`


        
    // }
    // count += 1;
    console.log(display_computer);

}

var isCorrect = false;
AnswerCount = 0;

function increamentAnswer() {

    if (count <= 10) {

        AnswerCount += 1;

        document.getElementById('scoreCount').innerHTML = AnswerCount;
        
        doNext();
      

    }
}
function doNext() {
    if (count < 10) {

        getComputerChoice();
        getUserOptions();

    }else{
        document.getElementById('mainAlphabetsDiv').style.display ='none';
        document.getElementById('message').style.display = 'block';
        document.getElementById('message').innerHTML = 'Your score is :' + AnswerCount;
    }
}

function showAndHideDiv() {
    count += 1;
    if (isCorrect) {
        console.log('v');

        document.getElementById('showAndHide').style.display = 'flex';

        increamentAnswer();


    } else {
        console.log('h');

        document.getElementById('showAndHide').style.display = 'none'
        doNext();

    }
}

document.getElementById('display_option1').addEventListener('click', function () {
    console.log('object clicked1');

    if (document.getElementById('display_computer').src == document.getElementById('display_option1').src) {
        console.log('matched');
        isCorrect = true;
        showAndHideDiv();
    } else {
        console.log('unmacted');
        isCorrect = false;
        showAndHideDiv();
    }
});
document.getElementById('display_option2').addEventListener('click', function () {
    console.log('object clicked2');
    if (document.getElementById('display_computer').src == document.getElementById('display_option2').src) {
        console.log('matched');
        isCorrect = true;
        showAndHideDiv();
    } else {
        console.log('unmacted');
        isCorrect = false;
        showAndHideDiv();
    }

});
document.getElementById('display_option3').addEventListener('click', function () {
    console.log('object clicked3');
    if (document.getElementById('display_computer').src == document.getElementById('display_option3').src) {
        console.log('matched');
        isCorrect = true;
        showAndHideDiv();
    } else {
        console.log('unmacted');
        isCorrect = false;
        showAndHideDiv();
    }

});


function getUserOptions() {
    if (display_computer == alphabet_arr[0]) {
        document.getElementById('display_option1').src = 'img/Game1/V.png';
        document.getElementById('display_option2').src = 'img/Game1/S.png';
        document.getElementById('display_option3').src = 'img/Game1/A.png';
    }
    else if (display_computer == alphabet_arr[1]) {
        document.getElementById('display_option1').src = 'img/Game1/B.png';
        document.getElementById('display_option2').src = 'img/Game1/P.png';
        document.getElementById('display_option3').src = 'img/Game1/D.png';
    }
    else if (display_computer == alphabet_arr[2]) {
        document.getElementById('display_option1').src = 'img/Game1/U.png';
        document.getElementById('display_option2').src = 'img/Game1/C.png';
        document.getElementById('display_option3').src = 'img/Game1/O.png';
    }
    else if (display_computer == alphabet_arr[3]) {
        document.getElementById('display_option1').src = 'img/Game1/D.png';
        document.getElementById('display_option2').src = 'img/Game1/O.png';
        document.getElementById('display_option3').src = 'img/Game1/B.png';
    }
    else if (display_computer == alphabet_arr[4]) {
        document.getElementById('display_option1').src = 'img/Game1/F.png';
        document.getElementById('display_option2').src = 'img/Game1/E.png';
        document.getElementById('display_option3').src = 'img/Game1/K.png';
    }
    else if (display_computer == alphabet_arr[5]) {
        document.getElementById('display_option1').src = 'img/Game1/F.png';
        document.getElementById('display_option2').src = 'img/Game1/T.png';
        document.getElementById('display_option3').src = 'img/Game1/C.png';
    }
    else if (display_computer == alphabet_arr[6]) {
        document.getElementById('display_option1').src = 'img/Game1/C.png';
        document.getElementById('display_option2').src = 'img/Game1/G.png';
        document.getElementById('display_option3').src = 'img/Game1/O.png';
    }
    else if (display_computer == alphabet_arr[7]) {
        document.getElementById('display_option1').src = 'img/Game1/H.png';
        document.getElementById('display_option2').src = 'img/Game1/T.png';
        document.getElementById('display_option3').src = 'img/Game1/N.png';
    }
    else if (display_computer == alphabet_arr[8]) {
        document.getElementById('display_option1').src = 'img/Game1/T.png';
        document.getElementById('display_option2').src = 'img/Game1/L.png';
        document.getElementById('display_option3').src = 'img/Game1/I.png';
    }
    else if (display_computer == alphabet_arr[9]) {
        document.getElementById('display_option1').src = 'img/Game1/J.png';
        document.getElementById('display_option2').src = 'img/Game1/T.png';
        document.getElementById('display_option3').src = 'img/Game1/I.png';
    }
    else if (display_computer == alphabet_arr[10]) {
        document.getElementById('display_option1').src = 'img/Game1/R.png';
        document.getElementById('display_option2').src = 'img/Game1/M.png';
        document.getElementById('display_option3').src = 'img/Game1/K.png';
    }
    else if (display_computer == alphabet_arr[11]) {
        document.getElementById('display_option1').src = 'img/Game1/I.png';
        document.getElementById('display_option2').src = 'img/Game1/L.png';
        document.getElementById('display_option3').src = 'img/Game1/Y.png';
    }
    else if (display_computer == alphabet_arr[12]) {
        document.getElementById('display_option1').src = 'img/Game1/M.png';
        document.getElementById('display_option2').src = 'img/Game1/N.png';
        document.getElementById('display_option3').src = 'img/Game1/H.png';
    }
    else if (display_computer == alphabet_arr[13]) {
        document.getElementById('display_option1').src = 'img/Game1/E.png';
        document.getElementById('display_option2').src = 'img/Game1/F.png';
        document.getElementById('display_option3').src = 'img/Game1/N.png';
    }
    else if (display_computer == alphabet_arr[14]) {
        document.getElementById('display_option1').src = 'img/Game1/O.png';
        document.getElementById('display_option2').src = 'img/Game1/C.png';
        document.getElementById('display_option3').src = 'img/Game1/Q.png';
    }
    else if (display_computer == alphabet_arr[15]) {
        document.getElementById('display_option1').src = 'img/Game1/R.png';
        document.getElementById('display_option2').src = 'img/Game1/P.png';
        document.getElementById('display_option3').src = 'img/Game1/F.png';
    }
    else if (display_computer == alphabet_arr[16]) {
        document.getElementById('display_option1').src = 'img/Game1/O.png';
        document.getElementById('display_option2').src = 'img/Game1/A.png';
        document.getElementById('display_option3').src = 'img/Game1/Q.png';
    }
    else if (display_computer == alphabet_arr[17]) {
        document.getElementById('display_option1').src = 'img/Game1/X.png';
        document.getElementById('display_option2').src = 'img/Game1/K.png';
        document.getElementById('display_option3').src = 'img/Game1/R.png';
    }
    else if (display_computer == alphabet_arr[18]) {
        document.getElementById('display_option1').src = 'img/Game1/S.png';
        document.getElementById('display_option2').src = 'img/Game1/Z.png';
        document.getElementById('display_option3').src = 'img/Game1/M.png';
    }
    else if (display_computer == alphabet_arr[19]) {
        document.getElementById('display_option1').src = 'img/Game1/L.png';
        document.getElementById('display_option2').scc = 'img/Game1/A.png';
        document.getElementById('display_option3').src = 'img/Game1/T.png';
    }
    else if (display_computer == alphabet_arr[20]) {
        document.getElementById('display_option1').src = 'img/Game1/C.png';
        document.getElementById('display_option2').src = 'img/Game1/P.png';
        document.getElementById('display_option3').src = 'img/Game1/U.png';
    }
    else if (display_computer == alphabet_arr[21]) {
        document.getElementById('display_option1').src = 'img/Game1/V.png';
        document.getElementById('display_option2').src = 'img/Game1/A.png';
        document.getElementById('display_option3').src = 'img/Game1/N.png';
    }
    else if (display_computer == alphabet_arr[22]) {
        document.getElementById('display_option1').src = 'img/Game1/X.png';
        document.getElementById('display_option2').src = 'img/Game1/A.png';
        document.getElementById('display_option3').src = 'img/Game1/W.png';
    }
    else if (display_computer == alphabet_arr[23]) {
        document.getElementById('display_option1').src = 'img/Game1/M.png';
        document.getElementById('display_option2').src = 'img/Game1/A.png';
        document.getElementById('display_option3').src = 'img/Game1/X.png';
    }
    else if (display_computer == alphabet_arr[24]) {
        document.getElementById('display_option1').src = 'img/Game1/W.png';
        document.getElementById('display_option2').src = 'img/Game1/H.png';
        document.getElementById('display_option3').src = 'img/Game1/Y.png';
    }
    else {
        document.getElementById('display_option1').src = 'img/Game1/N.png';
        document.getElementById('display_option2').src = 'img/Game1/Z.png';
        document.getElementById('display_option3').src = 'img/Game1/M.png';
    }

}

/*const score = 0;
const underScore_span = document.getElementById("score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".decision");
const option1_div = document.getElementById("display_option1");
const option2_div = document.getElementById("display_option2");
const option3_div = document.getElementById("display_option3");*/

