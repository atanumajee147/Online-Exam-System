
// we are add all question 
var Question_Set = [{
    "question": "Which is the Biggest Ocean?",
    "option1": "Atlantic",
    "option2": "Indian",
    "option3": "Prashanta",
    "option4": "none of the above ",
    "answer": "option3"
  },
  {
    "question": "Father of Histry?",
    "option1": "Eratosthenis ",
    "option2": "Herodotus",
    "option3": "Newton",
    "option4": "None of the above",
    "answer": "option2"
  },
  {
    "question": "Father of computer?",
    "option1": "Harry Poter",
    "option2": "Shakespeare",
    "option3": "Charlse Babbage",
    "option4": "None of them",
    "answer": "option3"
  },
  {
    "question": "Which is the output device?",
    "option1": "cpu",
    "option2": "monitor",
    "option3": "mouse",
    "option4": "keyboard",
    "answer": "option2"
  },
  {
    "question": "Which is vowel?",
    "option1": "Z",
    "option2": "E",
    "option3": "Y",
    "option4": "P",
    "answer": "option2"
  },
  {
    "question": "Which unit measure computer's speed?",
    "option1": "mega Hertz",
    "option2": "liter ",
    "option3": "kg",
    "option4": "Gigahertz",
    "answer": "option4"
  }];
 
var student_choose_list = ["", "", "", "", ""];

var qno = document.getElementById("qno");
var question = document.getElementById("question");
var option_no1 = document.getElementById("option_no1");
var option_no2 = document.getElementById("option_no2");
var option_no3 = document.getElementById("option_no3");
var option_no4 = document.getElementById("option_no4");

//buttons
var nextButton = document.getElementById("nextButton");
var previousButton = document.getElementById("previousButton");
var finalButton = document.getElementById("finalButton");

//student_choose radio button
var student_choose1 = document.getElementById("student_choose1");
var student_choose2 = document.getElementById("student_choose2");
var student_choose3 = document.getElementById("student_choose3");
var student_choose4 = document.getElementById("student_choose4");

  
var index = 0;

function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // alert(regno + " " + password);

    var flag = 0;

    if (localStorage.getItem("student_data") === null) {
      this_data = this_data + "<tr>";
      this_data = this_data + "<th colspan='6'>No Record Founds</th>";

      this_data = this_data + "</tr>";
    } else {
        var student_data_store_Array = JSON.parse(localStorage.getItem("student_data"));
        for (i = 0; i < student_data_store_Array.length; i++) {
            if (student_data_store_Array[i].username == username && student_data_store_Array[i].password == password) {
                //Store Data in localeStorage
                localStorage.setItem("name", student_data_store_Array[i].name);
                flag = 1;
                break;
            }
        }

        if (flag == 1) {
            //Redirect to the home page
            window.location.href = "index.html";
        } else {
            document.getElementById("rongPassword").innerHTML = "Sorry Invalid Reg. No. or Password, Try again...!!";
        }
    }


}

  let startExamBtn= document.getElementById("startExamBtn");
  startExamBtn.addEventListener("click",()=>{
    if(confirm(" Ready to Start your Exam !")){  window.location.href = "./questionPage.html"}

  });
  /*
  function exam() {
    window.location.href = 'questionPage.html';
}
*/
  
function getName() {
  let name = localStorage.getItem("name");
  document.getElementById("name").innerHTML = name;
} 
  
  // display the Questions 
  function displayQuestion() {

    //Reset all Radio Buttons

    student_choose1.checked = false;
    student_choose2.checked = false;
    student_choose3.checked = false;
    student_choose4.checked = false;

    //check user answer list
    if (student_choose_list[index] != "") {
        if (student_choose_list[index] == 'option1') {
            student_choose1.checked = true;
        } else if (student_choose_list[index] == 'option2') {
            student_choose2.checked = true;
        } else if (student_choose_list[index] == 'option3') {
            student_choose3.checked = true;
        } else if (student_choose_list[index] == 'option4') {
            student_choose4.checked = true;

            
      }/* else {
            student_choose4.checked = true;
        }*/
    }
  
 
    //Button Visibility
    if (index == 0) {
      previousButton.style.display = "none";
  } else {
      previousButton.style.display = "block";
  }

  if (index == Question_Set.length - 1) {
    nextButton.style.display = "none";
      finalButton.style.display = "block";
  } else {
    nextButton.style.display = "block";
      finalButton.style.display = "none";
  }

  qno.innerHTML = index + 1;
  question.innerHTML = Question_Set[index].question;
  option_no1.innerHTML = Question_Set[index].option1;
  option_no2.innerHTML = Question_Set[index].option2;
  option_no3.innerHTML = Question_Set[index].option3;
  option_no4.innerHTML = Question_Set[index].option4;
}

function nextButtonFun() {
  checkAnswer();
  index++;
  displayQuestion();
}

function previousButtonFun() {
  checkAnswer();
  index--;
  
  displayQuestion();
}

function finalButtonFun() {
  var total_marks = 0;

  for (i = 0; i < student_choose_list.length; i++) {
      if (student_choose_list[i] == Question_Set[i].answer) {
          total_marks++;
      }
  }
  localStorage.setItem("total_marks", total_marks);
  window.location.href = 'submit.html';
}

function checkAnswer() {
  var user_selected_answer = '';

  if (student_choose1.checked) {
      user_selected_answer = 'option1';
  } else if (student_choose2.checked) {
      user_selected_answer = 'option2';
  } else if (student_choose3.checked) {
      user_selected_answer = 'option3';
  } else if (student_choose4.checked) {
      user_selected_answer = 'option4';
  }

  student_choose_list[index] = user_selected_answer;

  //alert(user_selected_answer);
}
