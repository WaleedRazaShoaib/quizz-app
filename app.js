// ==================================
// ============sign up=================
// ==================================
var signUpUserEmail = document.getElementById('emailuserName');
var signUpUserPassword = document.getElementById('passworduserName');
var userloginEmail = document.getElementById('userloginEmail');
var userPw = document.getElementById('userloginPassword');
var emailRegax = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


function store() {
    if (signUpUserEmail.value.trim() === "") {
        Swal.fire({
            icon: 'error',
            title: 'WRITE A EMAIL',
            text: 'FILL THE EMAIL',
        })

    } else if (signUpUserPassword.value.trim() === "") {
        Swal.fire({
            icon: 'error',
            title: 'WRITE A PASSWORD',
            text: 'FILL THE PASSWORD!',
        })

    }else {
        localStorage.setItem('email', signUpUserEmail.value);
        localStorage.setItem('password',signUpUserPassword.value );
        Swal.fire({
            icon: 'success',
            title: 'Your Account  has been saved',
        })
location.href = "./login.html"
    }
    emailuserName.value = "";
    signUpUserPassword.value = "";
    console.log(emailuserName.value,signUpUserPassword.value )
}

//checking
function check() {
    var storedName = localStorage.getItem('email');
    var storedPw = localStorage.getItem('password');
    if (userloginEmail.value == storedName && userloginPassword.value == storedPw) {
        Swal.fire({
            icon: 'success',
            title: 'You have Log In the quizz ',
        })
        setTimeout(function(){
            location.href = "./quizz.html"
        },1000)
   
        userloginEmail.value ="" ;
        userloginPassword.value = "" ;
    } 
    // else {
    //     Swal.fire({
    //         icon: 'error',
    //         title: 'PLEASE CREATE A ACCOUNT',
    //         text: 'YOU ARE NOT SIGN IN',
    //     })
        
    // }
 
}

// *******************************
var questions = [
    {
        question: " Q : What does HTML stand for?",
        option1: "a) Hyperlinks and Text Markup Language ",
        option2: "b) Home Tool Markup Language",
        option3: "c) Hyper Text Markup Language  ",
        correctOption: "c) Hyper Text Markup Language  ",
    },
    {
        question: "Q : Who is making the Web standards?",
        option1: "a) Microsoft ",
        option2: "b) Mozilla",
        option3: "c) The World Wide Web Consortium",
        correctOption: "c) The World Wide Web Consortium",
    },
    {
        question: "Q : Choose the correct HTML element for the largest heading:",
        option1: `a) &lth1&gt`,
        option2: `b) &lth6&gt`,
        option3: `c) &ltHeading&gt`,
        correctOption: `a) &lth1&gt`,
    },
    {
        question: 'Q : What is the correct HTML element for inserting a line break?',
        option1: 'a) &ltlinebreak&lt',
        option2: 'b) &ltbr&gt',
        option3: 'c) &ltbreak&gt',
        correctOption: "b) &ltbr&gt"
    },
    {
        question: 'Q : What is the correct HTML for adding a background color?',
        option1: 'a) &ltbody bg="gellow"&gt',
        option2: 'b) &ltbackground&gtyellow&lt/background&gt',
        option3: 'c) &ltbody style="background-color:yellow;"&gt',
        correctOption: 'c) &ltbody style="background-color:yellow;"&gt'
    },
    {
        question: 'Q : Choose the correct HTML element to define important text:',
        option1: 'a) &ltstrong&gt',
        option2: 'b) &ltb&gt',
        option3: 'c) &lti&gt',
        correctOption: 'a) &gtstrong&gt'
    },
    {
        question: 'Q : Choose the correct HTML element to define emphasized text:',
        option1: 'a) &ltitalic&gt',
        option2: 'b) &lti&gt',
        option3: 'c) &ltem&gt',
        correctOption: "c) &ltem&gt"
    },
    {
        question: 'Q : What is the correct HTML for creating a hyperlink?',
        option1: 'a) &lthttp://www.w3schools.coma&gt',
        option2: 'b) &lta href="http://www.w3schools.com"&gtW3Schools&lt/a&gt',
        option3: 'c) &lta url="http://www.w3schools.com"&gtW3Schools.com&lt/a&gt',
        correctOption: 'b) &lta href="http://www.w3schools.com"&gtW3Schools&lt/a&gt'
    },
    {
        question: 'Q : Which character is used to indicate an end tag?',
        option1: 'a) *',
        option2: 'b) /',
        option3: 'c) <',
        correctOption: "b) /"
    },
    {
        question: 'Q : How can you open a link in a new tab/browser window?',
        option1: 'a) &lta href="url" target="new"&gt',
        option2: 'b) &lta href="url" new&gt',
        option3: 'c) &lta href="url" target="_blank"&gt',
        correctOption: 'c) <a href="url" target="_blank"&gt'
    },
    {
        question: 'Q : Which of these elements are all <table> elements?',
        option1: 'a) &lttable&gt &lttr&gt &lttd&gt',
        option2: 'b) &lttable&gt &lthead&gt &lttfoot&gt',
        option3: 'c) &lttable&gt &lttr&gt &lttt&gt',
        correctOption: "a) &lttable&gt &lttr&gt &lttd&gt"
    },
    {
        question: 'Q : Inline elements are normally displayed without starting a new line.',
        option1: 'a) True',
        option2: 'b) False',
        correctOption: "a) True"
    },
    {
        question: "Q : How can you make a numbered list?",
        option1: 'a) &ltdl&gt',
        option2: 'b) &ltul&gt',
        option3: 'c) &ltol&gt',
        option4: 'd) &ltlist&gt',
        correctOption: "c) &ltol&gt"
    },
    {
        question: 'Q : How can you make a bulleted list?',
        option1: 'a) &ltol&gt',
        option2: 'b) &ltlist&gt',
        option3: 'c) &ltul&gt',
        option4: 'd) &ltdl&gt',
        correctOption: "c) &ltul&gt"
    },
    {
        question: 'Q : What is the correct HTML for inserting an image?',
        option1: 'a) &ltimg alt="MyImage"&gtimage.gif&lt/img&gt',
        option2: 'b) &ltimg href="image.gif" alt="MyImage"&gt',
        option3: 'c) &ltimg src="image.gif" alt="MyImage"&gt',
        option4: 'd) &ltimage src="image.gif" alt="MyImage"&gt',
        correctOption: 'c) &ltimg src="image.gif" alt="MyImage"&gt'
    },
    {
        question: 'Q : What is the correct HTML for making a checkbox?',
        option1: 'a) &ltiput type="check"&gt',
        option2: 'b) &ltcheck&gt',
        option3: 'c) &ltcheckbox&gt',
        option4: 'd) &ltinput type="checkbox"&gt',
        correctOption: 'd) &ltinput type="checkbox"&gt'
    },
    {
        question: "Q : What is the correct HTML for making a text input field?",
        option1: 'a) &ltinput type="textfield"&gt',
        option2: 'b) &ltinput type="text"&gt',
        option3: 'c) &lttextfield&gt',
        option4: 'd) &lttextinput type="textfield"&gt',
        correctOption: 'b) &ltinput type="text"&gt'
    },
    {
        question: 'Q : What is the correct HTML for making a drop-down list?',
        option1: 'a) &ltinput type="list"&gt',
        option2: 'b) &ltlist&gt',
        option3: 'c) &ltinput type="dropdown"&gt',
        option4: 'd) &ltselect&gt',
        correctOption: 'd) &ltselect&gt'
    },
    {
        question: 'Q : What is the correct HTML for making a text area?',
        option1: 'a) &ltinput type="textbox"&gt',
        option2: 'b) &ltinput type="textarea"&gt',
        option3: 'c) &lttextarea&gt',
        correctOption: 'c) &lttextarea&gt'
    },
    {
        question: 'Q : What is the correct HTML for inserting a background image?',
        option1: 'a) &ltbackground img="background.gif"&gt',
        option2: 'b) &ltbody bg="background.gif"&gt',
        option3: 'c) &ltbody style="background-image:url(background.gif)"&gt',
        correctOption: 'c) &ltbody style="background-image:url(background.gif)"&gt'
    }
]

var question = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var index = 0;
var btn = document.getElementById("btn1");
var score = 0;

function nextQuestion() {
    var options = document.getElementsByName("answers");
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            var selected = options[i].value;
            var useranswer = questions[index - 1][`option${selected}`];
            var corectanswer = questions[index - 1].correctOption;
            if (useranswer === corectanswer) {
                score++;

            }
        }
        options[i].checked = false;
        btn.disabled = true;
    }

    if (index > questions.length - 1) {
        if ((score / questions.length) * 100) {
            var num = Math.round((score / questions.length < 50) * 100)
            swal({
                title: "Good job!",
                text: `${num}  %`,
                icon: "success",
            })
        }
        else{
                var num = Math.round((score / questions.length) * 100)
                swal({
                    title: "Better Than Next Time!",
                    text: `${num}  %`,
                    icon: "error",
                })
        }
    }
    else {
        if(question && option1 && option2 && option3){

            question.innerHTML = questions[index].question;
            option1.innerText = questions[index].option1;
            option2.innerText = questions[index].option2;
            option3.innerText = questions[index].option3;
            index++;
        }
    }

}
nextQuestion();


function enableBtn() {
    var btn = document.getElementById("btn1");
    btn.disabled = false;
}

var min = 1; 
var sec = 10 ;
var timer = document.getElementById("timer");

// var interval = setInterval(function(){
//     if(timer){

//         timer.innerHTML = `
//         ${min}:${sec}`
//         sec--
        
//         if(sec < 0){
//             if(min < 1){
//                 min =  1;
//                 sec = 10;
                
//             }
//             else{
                
//                 nextQuestion()
//                 min--
//                 sec = 10;
//             }
//         }
//     }
// },1000)

