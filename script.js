const questions = [
    {
        question: "RBI was established in which year?",
        options: ["1930", "1935", "1947", "1950"],
        answer: 1
    },
    {
        question: "Which of the following is NOT a commercial bank?",
        options: ["SBI", "PNB", "HDFC", "NABARD"],
        answer: 3
    },
    {
        question: "Money laundering has how many stages?",
        options: ["2", "3", "4", "5"],
        answer: 1
    }
];

const quizDiv = document.getElementById("quiz");

questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.className = "question";

    div.innerHTML = `
        <p><b>${index + 1}. ${q.question}</b></p>
        ${q.options.map((opt, i) =>
            `<label>
                <input type="radio" name="q${index}" value="${i}">
                ${opt}
            </label><br>`
        ).join("")}
    `;

    quizDiv.appendChild(div);
});

document.getElementById("quizForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let score = 0;

    questions.forEach((q, index) => {
        const options = document.getElementsByName(`q${index}`);
        let selectedValue = -1;

        options.forEach(option => {
            if (option.checked) {
                selectedValue = Number(option.value);
            }
        });

        options.forEach(option => {
            const label = option.parentElement;

            // correct answer
            if (Number(option.value) === q.answer) {
                label.style.color = "green";
                label.style.fontWeight = "bold";
            }

            // wrong selected answer
            if (option.checked && Number(option.value) !== q.answer) {
                label.style.color = "red";
            }

            option.disabled = true;
        });

        if (selectedValue === q.answer) {
            score++;
        }
    });

    document.getElementById("result").innerHTML =
        `Your Score: ${score} / ${questions.length}`;
});