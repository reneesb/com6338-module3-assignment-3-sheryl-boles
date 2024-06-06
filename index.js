// Your code here

var questionsArr = [
    {
        id: 1,
        question: "The Tampa Bay Bucs are going to win the NFC South in 2024",
        answer: true
    },
    {
        id: 2,
        question: "Baker Mayfield will throw for 3000 yards",
        answer: true
    },
    {
        id: 3,
        question: "The Saints will sweep the Bucs in 2024",
        answer: false
    },
    {
        id: 4,
        question: "Tom Brady will come out of retirement again",
        answer: false
    },
    {
        id: 5,
        question: "Mike Evans will have greater than 1000 yards in 2024",
        answer: true
    }
]

function runQuiz(questionsArr) {

    for (let i = 0; i < questionsArr.length; i++) {
        const questionObj = questionsArr[i];
        const userResponse = confirm(questionObj.question);
        let userScore= 0;

    if (userResponse === questionObj.answer) {
        alert("Correct!") 
        userScore += 1
    } else {
        alert("Sorry, that is not correct")
    }
        
    }

    function showScore() {
        const scorePercentage = Math.round((userScore / questionsArr.length) * 100);
    
        alert(scorePercentage);
    }
   
}


runQuiz(questionsArr);
 showScore(scorePercentage);
