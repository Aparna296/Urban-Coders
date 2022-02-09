var alphabet_arr = [
    'img/Game3/s1.png',
    'img/Game3/s2.png',
    'img/Game3/s3.png',
    'img/Game3/s4.png',
    'img/Game3/s5.png',
    'img/Game3/s6.png',
    'img/Game3/s7.png',
    'img/Game3/s8.png',
    'img/Game3/s9.png',
    'img/Game3/s10.png',
    'img/Game3/s11.png',
    'img/Game3/s12.png',
    'img/Game3/s13.png',
    'img/Game3/P1.png',
    'img/Game3/P2.png',
    'img/Game3/P3.png',
    'img/Game3/P4.png',
    'img/Game3/P5.png',
    'img/Game3/P6.png',
    'img/Game3/P7.png',
    'img/Game3/P8.png',
    'img/Game3/P9.png',
    'img/Game3/P10.png',
    'img/Game3/P11.png',
    'img/Game3/P12.png',
    'img/Game3/P13.png',
    'img/Game3/P14.png',
    'img/Game3/P15.png',
    'img/Game3/P16.png',
    'img/Game3/P17.png',
    'img/Game3/P18.png',
    'img/Game3/P19.png',
    'img/Game3/P20.png',
    'img/Game3/P21.png',
    'img/Game3/P22.png',
    'img/Game3/P23.png',
    'img/Game3/P24.png',
    'img/Game3/P25.png',
    'img/Game3/P26.png',
    'img/Game3/P27.png',
    'img/Game3/P28.png',
    'img/Game3/P29.png',
    'img/Game3/P30.png',
    'img/Game3/P31.png',
    'img/Game3/P32.png',
    'img/Game3/P33.png',
    'img/Game3/P34.png',
    'img/Game3/P35.png',
    'img/Game3/P36.png',
    'img/Game3/P37.png',
    'img/Game3/P38.png',
    'img/Game3/P39.png',
    'img/Game3/P40.png',
    'img/Game3/P41.png'
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
        document.getElementById('display_option1').src = 'img/Game3/s3.png';
        document.getElementById('display_option2').src = 'img/Game3/s2.png';
        document.getElementById('display_option3').src = 'img/Game3/s1.png';
    }
    else if (display_computer == alphabet_arr[1]) {
        document.getElementById('display_option1').src = 'img/Game3/s4.png';
        document.getElementById('display_option2').src = 'img/Game3/s2.png';
        document.getElementById('display_option3').src = 'img/Game3/s5.png';
    }
    else if (display_computer == alphabet_arr[2]) {
        document.getElementById('display_option1').src = 'img/Game3/s4.png';
        document.getElementById('display_option2').src = 'img/Game3/s3.png';
        document.getElementById('display_option3').src = 'img/Game3/s5.png';
    }   
    else if (display_computer == alphabet_arr[3]) {
        document.getElementById('display_option1').src = 'img/Game3/s3.png';
        document.getElementById('display_option2').src = 'img/Game3/s7.png';
        document.getElementById('display_option3').src = 'img/Game3/s4.png';
    }
    else if (display_computer == alphabet_arr[4]) {
        document.getElementById('display_option1').src = 'img/Game3/s5.png';
        document.getElementById('display_option2').src = 'img/Game3/s10.png';
        document.getElementById('display_option3').src = 'img/Game3/s6.png';
    }
    else if (display_computer == alphabet_arr[5]) {
        document.getElementById('display_option1').src = 'img/Game3/s11.png';
        document.getElementById('display_option2').src = 'img/Game3/s6.png';
        document.getElementById('display_option3').src = 'img/Game3/s3.png';
    }
    else if (display_computer == alphabet_arr[6]) {
        document.getElementById('display_option1').src = 'img/Game3/s8.png';
        document.getElementById('display_option2').src = 'img/Game3/s9.png';
        document.getElementById('display_option3').src = 'img/Game3/s7.png';
    }
    else if (display_computer == alphabet_arr[7]) {
        document.getElementById('display_option1').src = 'img/Game3/s7.png';
        document.getElementById('display_option2').src = 'img/Game3/s4.png';
        document.getElementById('display_option3').src = 'img/Game3/s8.png';
    }
    else if (display_computer == alphabet_arr[8]) {
        document.getElementById('display_option1').src = 'img/Game3/s2.png';
        document.getElementById('display_option2').src = 'img/Game3/s9.png';
        document.getElementById('display_option3').src = 'img/Game3/s10.png';
    }
    else if (display_computer == alphabet_arr[9]) {
        document.getElementById('display_option1').src = 'img/Game3/s9.png';
        document.getElementById('display_option2').src = 'img/Game3/s1.png';
        document.getElementById('display_option3').src = 'img/Game3/s10.png';
    }
    else if (display_computer == alphabet_arr[10]) {
        document.getElementById('display_option1').src = 'img/Game3/s13.png';
        document.getElementById('display_option2').src = 'img/Game3/s11.png';
        document.getElementById('display_option3').src = 'img/Game3/s10.png';
    }
    else if (display_computer == alphabet_arr[11]) {
        document.getElementById('display_option1').src = 'img/Game3/s10.png';
        document.getElementById('display_option2').src = 'img/Game3/s12.png';
        document.getElementById('display_option3').src = 'img/Game3/s11.png';
    }
    else if (display_computer == alphabet_arr[12]) {
        document.getElementById('display_option1').src = 'img/Game3/s8.png';
        document.getElementById('display_option2').src = 'img/Game3/s2.png';
        document.getElementById('display_option3').src = 'img/Game3/s13.png';
    }
    else if (display_computer == alphabet_arr[13]) {
        document.getElementById('display_option1').src = 'img/Game3/P24.png';
        document.getElementById('display_option2').src = 'img/Game3/P23.png';
        document.getElementById('display_option3').src = 'img/Game3/P1.png';
    }
    else if (display_computer == alphabet_arr[14]) {
        document.getElementById('display_option1').src = 'img/Game3/P7.png';
        document.getElementById('display_option2').src = 'img/Game3/P2.png';
        document.getElementById('display_option3').src = 'img/Game3/P4.png';
    }
    else if (display_computer == alphabet_arr[15]) {
        document.getElementById('display_option1').src = 'img/Game3/P15.png';
        document.getElementById('display_option2').src = 'img/Game3/P26.png';
        document.getElementById('display_option3').src = 'img/Game3/P3.png';
    }
    else if (display_computer == alphabet_arr[16]) {
        document.getElementById('display_option1').src = 'img/Game3/P4.png';
        document.getElementById('display_option2').src = 'img/Game3/P21.png';
        document.getElementById('display_option3').src = 'img/Game3/P19.png';
    }
    else if (display_computer == alphabet_arr[17]) {
        document.getElementById('display_option1').src = 'img/Game3/P16.png';
        document.getElementById('display_option2').src = 'img/Game3/P13.png';
        document.getElementById('display_option3').src = 'img/Game3/P5.png';
    }
    else if (display_computer == alphabet_arr[18]) {
        document.getElementById('display_option1').src = 'img/Game3/P22.png';
        document.getElementById('display_option2').scc = 'img/Game3/P6.png';
        document.getElementById('display_option3').src = 'img/Game3/P28.png';
    }
    else if (display_computer == alphabet_arr[19]) {
        document.getElementById('display_option1').src = 'img/Game3/P4.png';
        document.getElementById('display_option2').src = 'img/Game3/P21.png';
        document.getElementById('display_option3').src = 'img/Game3/P7.png';
    }
    else if (display_computer == alphabet_arr[20]) {
        document.getElementById('display_option1').src = 'img/Game3/P8.png';
        document.getElementById('display_option2').src = 'img/Game3/P6.png';
        document.getElementById('display_option3').src = 'img/Game3/P10.png';
    }
    else if (display_computer == alphabet_arr[21]) {
        document.getElementById('display_option1').src = 'img/Game3/P21.png';
        document.getElementById('display_option2').src = 'img/Game3/P9.png';
        document.getElementById('display_option3').src = 'img/Game3/P41.png';
    }
    else if (display_computer == alphabet_arr[22]) {
        document.getElementById('display_option1').src = 'img/Game3/P10.png';
        document.getElementById('display_option2').src = 'img/Game3/P18.png';
        document.getElementById('display_option3').src = 'img/Game3/P8.png';
    }
    else if (display_computer == alphabet_arr[23]) {
        document.getElementById('display_option1').src = 'img/Game3/P12.png';
        document.getElementById('display_option2').src = 'img/Game3/P11.png';
        document.getElementById('display_option3').src = 'img/Game3/P23.png';
    }
    else if (display_computer == alphabet_arr[24]) {
        document.getElementById('display_option1').src = 'img/Game3/P12.png';
        document.getElementById('display_option2').src = 'img/Game3/P14.png';
        document.getElementById('display_option3').src = 'img/Game3/P20.png';
    }
    else if (display_computer == alphabet_arr[25]) {
        document.getElementById('display_option1').src = 'img/Game3/P16.png';
        document.getElementById('display_option2').src = 'img/Game3/P9.png';
        document.getElementById('display_option3').src = 'img/Game3/P13.png';
    }
    else if (display_computer == alphabet_arr[26]) {
        document.getElementById('display_option1').src = 'img/Game3/P12.png';
        document.getElementById('display_option2').src = 'img/Game3/P14.png';
        document.getElementById('display_option3').src = 'img/Game3/P11.png';
    } 
    else if (display_computer == alphabet_arr[27]) {
        document.getElementById('display_option1').src = 'img/Game3/P15.png';
        document.getElementById('display_option2').src = 'img/Game3/P33.png';
        document.getElementById('display_option3').src = 'img/Game3/P32.png';
    }
    else if (display_computer == alphabet_arr[28]) {
        document.getElementById('display_option1').src = 'img/Game3/P5.png';
        document.getElementById('display_option2').src = 'img/Game3/P16.png';
        document.getElementById('display_option3').src = 'img/Game3/P13.png';
    }
    else if (display_computer == alphabet_arr[29]) {
        document.getElementById('display_option1').src = 'img/Game3/P14.png';
        document.getElementById('display_option2').src = 'img/Game3/P11.png';
        document.getElementById('display_option3').src = 'img/Game3/P17.png';
    }
    else if (display_computer == alphabet_arr[30]) {
        document.getElementById('display_option1').src = 'img/Game3/P18.png';
        document.getElementById('display_option2').src = 'img/Game3/P30.png';
        document.getElementById('display_option3').src = 'img/Game3/P27.png';
    }
    else if (display_computer == alphabet_arr[31]) {
        document.getElementById('display_option1').src = 'img/Game3/P28.png';
        document.getElementById('display_option2').src = 'img/Game3/P19.png';
        document.getElementById('display_option3').src = 'img/Game3/P21.png';
    }
    else if (display_computer == alphabet_arr[32]) {
        document.getElementById('display_option1').src = 'img/Game3/P14.png';
        document.getElementById('display_option2').src = 'img/Game3/P20.png';
        document.getElementById('display_option3').src = 'img/Game3/P35.png';
    }
    else if (display_computer == alphabet_arr[33]) {
        document.getElementById('display_option1').src = 'img/Game3/P21.png';
        document.getElementById('display_option2').src = 'img/Game3/P4.png';
        document.getElementById('display_option3').src = 'img/Game3/P26.png';
    }
    else if (display_computer == alphabet_arr[34]) {
        document.getElementById('display_option1').src = 'img/Game3/P22.png';
        document.getElementById('display_option2').src = 'img/Game3/P27.png';
        document.getElementById('display_option3').src = 'img/Game3/P26.png';
    }
    else if (display_computer == alphabet_arr[35]) {
        document.getElementById('display_option1').src = 'img/Game3/P24.png';
        document.getElementById('display_option2').src = 'img/Game3/P23.png';
        document.getElementById('display_option3').src = 'img/Game3/P27.png';
    }
    else if (display_computer == alphabet_arr[36]) {
        document.getElementById('display_option1').src = 'img/Game3/P4.png';
        document.getElementById('display_option2').src = 'img/Game3/P26.png';
        document.getElementById('display_option3').src = 'img/Game3/P24.png';
    }
    else if (display_computer == alphabet_arr[37]) {
        document.getElementById('display_option1').src = 'img/Game3/P31.png';
        document.getElementById('display_option2').src = 'img/Game3/P25.png';
        document.getElementById('display_option3').src = 'img/Game3/P18.png';
    }
    else if (display_computer == alphabet_arr[38]) {
        document.getElementById('display_option1').src = 'img/Game3/P27.png';
        document.getElementById('display_option2').src = 'img/Game3/P26.png';
        document.getElementById('display_option3').src = 'img/Game3/P24.png';
    }
    else if (display_computer == alphabet_arr[39]) {
        document.getElementById('display_option1').src = 'img/Game3/P28.png';
        document.getElementById('display_option2').src = 'img/Game3/P19.png';
        document.getElementById('display_option3').src = 'img/Game3/P27.png';
    }
    else if (display_computer == alphabet_arr[40]) {
        document.getElementById('display_option1').src = 'img/Game3/P21.png';
        document.getElementById('display_option2').src = 'img/Game3/P19.png';
        document.getElementById('display_option3').src = 'img/Game3/P28.png';
    }
    else if (display_computer == alphabet_arr[41]) {
        document.getElementById('display_option1').src = 'img/Game3/P18.png';
        document.getElementById('display_option2').src = 'img/Game3/P29.png';
        document.getElementById('display_option3').src = 'img/Game3/P3.png';
    }
    else if (display_computer == alphabet_arr[42]) {
        document.getElementById('display_option1').src = 'img/Game3/P30.png';
        document.getElementById('display_option2').src = 'img/Game3/P8.png';
        document.getElementById('display_option3').src = 'img/Game3/P37.png';
    }
    else if (display_computer == alphabet_arr[43]) {
        document.getElementById('display_option1').src = 'img/Game3/P25.png';
        document.getElementById('display_option2').src = 'img/Game3/P31.png';
        document.getElementById('display_option3').src = 'img/Game3/P14.png';
    }
    else if (display_computer == alphabet_arr[44]) {
        document.getElementById('display_option1').src = 'img/Game3/P19.png';
        document.getElementById('display_option2').src = 'img/Game3/P21.png';
        document.getElementById('display_option3').src = 'img/Game3/P32.png';
    }
    else if (display_computer == alphabet_arr[45]) {
        document.getElementById('display_option1').src = 'img/Game3/P23.png';
        document.getElementById('display_option2').src = 'img/Game3/P33.png';
        document.getElementById('display_option3').src = 'img/Game3/P15.png';
    }
    else if (display_computer == alphabet_arr[46]) {
        document.getElementById('display_option1').src = 'img/Game3/P30.png';
        document.getElementById('display_option2').src = 'img/Game3/P29.png';
        document.getElementById('display_option3').src = 'img/Game3/P34.png';
    }
    else if (display_computer == alphabet_arr[47]) {
        document.getElementById('display_option1').src = 'img/Game3/P8.png';
        document.getElementById('display_option2').src = 'img/Game3/P35.png';
        document.getElementById('display_option3').src = 'img/Game3/P29.png';
    }
    else if (display_computer == alphabet_arr[48]) {
        document.getElementById('display_option1').src = 'img/Game3/P36.png';
        document.getElementById('display_option2').src = 'img/Game3/P21.png';
        document.getElementById('display_option3').src = 'img/Game3/P34.png';
    }
    else if (display_computer == alphabet_arr[49]) {
        document.getElementById('display_option1').src = 'img/Game3/P10.png';
        document.getElementById('display_option2').src = 'img/Game3/P37.png';
        document.getElementById('display_option3').src = 'img/Game3/P35.png';
    }
    else if (display_computer == alphabet_arr[50]) {
        document.getElementById('display_option1').src = 'img/Game3/P37.png';
        document.getElementById('display_option2').src = 'img/Game3/P38.png';
        document.getElementById('display_option3').src = 'img/Game3/P21.png';
    }
    else if (display_computer == alphabet_arr[51]) {
        document.getElementById('display_option1').src = 'img/Game3/P39.png';
        document.getElementById('display_option2').src = 'img/Game3/P8.png';
        document.getElementById('display_option3').src = 'img/Game3/P10.png';
    }
    else if (display_computer == alphabet_arr[53]) {
        document.getElementById('display_option1').src = 'img/Game3/P40.png';
        document.getElementById('display_option2').src = 'img/Game3/P24.png';
        document.getElementById('display_option3').src = 'img/Game3/P15.png';
    }
    else {
        document.getElementById('display_option1').src = 'img/Game3/P8.png';
        document.getElementById('display_option2').src = 'img/Game3/P26.png';
        document.getElementById('display_option3').src = 'img/Game3/P41.png';
    }

}