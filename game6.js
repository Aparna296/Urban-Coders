var alphabet_arr = [

    'img/Game5/0.png',
    'img/Game5/1.png',
    'img/Game5/2.png',
    'img/Game5/3.png',
    'img/Game5/4.png',
    'img/Game5/5.png',
    'img/Game5/6.png',
    'img/Game5/7.png',
    'img/Game5/8.png',
    'img/Game5/9.png',
    'img/Game5/10.png',
    'img/Game5/11.png',
    'img/Game5/12.png',
    'img/Game5/13.png',
    'img/Game5/14.png',
    'img/Game5/15.png',
    'img/Game5/16.png',
    'img/Game5/17.png',
    'img/Game5/18.png',
    'img/Game5/19.png',
    'img/Game5/20.png'

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
        document.getElementById('display_option1').src = 'img/Game5/0.png';
        document.getElementById('display_option2').src = 'img/Game5/10.png';
        document.getElementById('display_option3').src = 'img/Game5/20.png';
    }
    else if (display_computer == alphabet_arr[1]) {
        document.getElementById('display_option1').src = 'img/Game5/11.png';
        document.getElementById('display_option2').src = 'img/Game5/1.png';
        document.getElementById('display_option3').src = 'img/Game5/10.png';
    }
    else if (display_computer == alphabet_arr[2]) {
        document.getElementById('display_option1').src = 'img/Game5/12.png';
        document.getElementById('display_option2').src = 'img/Game5/2.png';
        document.getElementById('display_option3').src = 'img/Game5/20.png';
    }
    else if (display_computer == alphabet_arr[3]) {
        document.getElementById('display_option1').src = 'img/Game5/3.png';
        document.getElementById('display_option2').src = 'img/Game5/13.png';
        document.getElementById('display_option3').src = 'img/Game5/9.png';
    }
    else if (display_computer == alphabet_arr[4]) {
        document.getElementById('display_option1').src = 'img/Game5/14.png';
        document.getElementById('display_option2').src = 'img/Game5/8.png';
        document.getElementById('display_option3').src = 'img/Game5/4.png';
    }
    else if (display_computer == alphabet_arr[5]) {
        document.getElementById('display_option1').src = 'img/Game5/5.png';
        document.getElementById('display_option2').src = 'img/Game5/15.png';
        document.getElementById('display_option3').src = 'img/Game5/10.png';
    }
    else if (display_computer == alphabet_arr[6]) {
        document.getElementById('display_option1').src = 'img/Game5/16.png';
        document.getElementById('display_option2').src = 'img/Game5/6.png';
        document.getElementById('display_option3').src = 'img/Game5/19.png';
    }
    else if (display_computer == alphabet_arr[7]) {
        document.getElementById('display_option1').src = 'img/Game5/7.png';
        document.getElementById('display_option2').src = 'img/Game5/17.png';
        document.getElementById('display_option3').src = 'img/Game5/14.png';
    }
    else if (display_computer == alphabet_arr[8]) {
        document.getElementById('display_option1').src = 'img/Game5/16.png';
        document.getElementById('display_option2').src = 'img/Game5/8.png';
        document.getElementById('display_option3').src = 'img/Game5/18.png';
    }
    else if (display_computer == alphabet_arr[9]) {
        document.getElementById('display_option1').src = 'img/Game5/9.png';
        document.getElementById('display_option2').src = 'img/Game5/19.png';
        document.getElementById('display_option3').src = 'img/Game5/18.png';
    }
    else if (display_computer == alphabet_arr[10]) {
        document.getElementById('display_option1').src = 'img/Game5/1.png';
        document.getElementById('display_option2').src = 'img/Game5/10.png';
        document.getElementById('display_option3').src = 'img/Game5/11.png';
    }
    else if (display_computer == alphabet_arr[11]) {
        document.getElementById('display_option1').src = 'img/Game5/11.png';
        document.getElementById('display_option2').src = 'img/Game5/1.png';
        document.getElementById('display_option3').src = 'img/Game5/10.png';
    }
    else if (display_computer == alphabet_arr[12]) {
        document.getElementById('display_option1').src = 'img/Game5/2.png';
        document.getElementById('display_option2').src = 'img/Game5/12.png';
        document.getElementById('display_option3').src = 'img/Game5/16.png';
    }
    else if (display_computer == alphabet_arr[13]) {
        document.getElementById('display_option1').src = 'img/Game5/13.png';
        document.getElementById('display_option2').src = 'img/Game5/3.png';
        document.getElementById('display_option3').src = 'img/Game5/6.png';
    }
    else if (display_computer == alphabet_arr[14]) {
        document.getElementById('display_option1').src = 'img/Game5/7.png';
        document.getElementById('display_option2').src = 'img/Game5/14.png';
        document.getElementById('display_option3').src = 'img/Game5/4.png';
    }
    else if (display_computer == alphabet_arr[15]) {
        document.getElementById('display_option1').src = 'img/Game5/3.png';
        document.getElementById('display_option2').src = 'img/Game5/5.png';
        document.getElementById('display_option3').src = 'img/Game5/15.png';
    }
    else if (display_computer == alphabet_arr[16]) {
        document.getElementById('display_option1').src = 'img/Game5/6.png';
        document.getElementById('display_option2').src = 'img/Game5/16.png';
        document.getElementById('display_option3').src = 'img/Game5/12.png';
    }
    else if (display_computer == alphabet_arr[17]) {
        document.getElementById('display_option1').src = 'img/Game5/17.png';
        document.getElementById('display_option2').src = 'img/Game5/7.png';
        document.getElementById('display_option3').src = 'img/Game5/9.png';
    }
    else if (display_computer == alphabet_arr[18]) {
        document.getElementById('display_option1').src = 'img/Game5/9.png';
        document.getElementById('display_option2').src = 'img/Game5/18.png';
        document.getElementById('display_option3').src = 'img/Game5/8.png';
    }
    else if (display_computer == alphabet_arr[19]) {
        document.getElementById('display_option1').src = 'img/Game5/19.png';
        document.getElementById('display_option2').scc = 'img/Game5/9.png';
        document.getElementById('display_option3').src = 'img/Game5/16.png';
    }
    else {
        document.getElementById('display_option1').src = 'img/Game5/10.png';
        document.getElementById('display_option2').src = 'img/Game5/2.png';
        document.getElementById('display_option3').src = 'img/Game5/20.png';
    }

}