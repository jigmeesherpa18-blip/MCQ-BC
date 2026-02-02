console.log("SCRIPT LOADED");

document.addEventListener("DOMContentLoaded", () => {

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  function shuffleQuestion(q) {
    const correct = q.o[q.a];
    shuffle(q.o);
    q.a = q.o.indexOf(correct);
  }

  const quizForm = document.getElementById("quizForm");
  const nameInput = document.getElementById("studentName");
  const resultDiv = document.getElementById("result");
  const quizDiv = document.getElementById("quiz");

 /* timer */ 
  const timerInterval = setInterval(() => {
  if (testSubmitted) return;

  const m = Math.floor(totalTime / 60);
  const s = totalTime % 60;
  timerSpan.textContent = `Time Left: ${m}:${s < 10 ? "0" : ""}${s}`;

  if (totalTime <= 0) {
    testSubmitted = true;
    clearInterval(timerInterval);
    quizForm.requestSubmit();
  }
  totalTime--;
}, 1000);


  if (!Array.isArray(questions) || questions.length === 0) {
    quizDiv.innerHTML = "<b>Questions failed to load</b>";
    return;
  }

  shuffle(questions);
  questions.forEach(shuffleQuestion);

/* ========= RENDER ========= */
 questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.innerHTML =
      `<p><b>${i + 1}. ${q.q}</b></p>` +
      q.o.map((opt, idx) =>
        `<label><input type="radio" name="q${i}" value="${idx}"> ${opt}</label><br>`
      ).join("");
    quizDiv.appendChild(div);
  });

  /* ========= SUBMIT ========= */
 quizForm.addEventListener("submit", e => {
  e.preventDefault();
  if (testSubmitted) return;
  testSubmitted = true;

  clearInterval(timerInterval);

  const name = nameInput.value.trim();
  if (!name) {
    alert("Enter student name");
    testSubmitted = false;
    return;
  }

  let score = 0;

  questions.forEach((q, i) => {
    document.getElementsByName(`q${i}`).forEach(o => {
      const v = +o.value;

      if (v === q.a) o.parentElement.style.color = "green";
      if (o.checked && v !== q.a) o.parentElement.style.color = "red";
      if (o.checked && v === q.a) score++;

      o.disabled = true;
    });
  });

  const percent = ((score / questions.length) * 100).toFixed(2);
  const result = percent >= 50 ? "PASS" : "FAIL";

  fetch("https://script.google.com/macros/s/AKfycbx5WvgrMPtU9jMH_XTkeQjtyIIArjYd9d9t2nAIMYWE0Ds4k3c98fzrqO0fp2aQLgEgGg/exec", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      score,
      percent,
      result
    })
  });

  resultDiv.style.display = "block";
  resultDiv.innerHTML = `
    <hr>
    <b>Name:</b> ${name}<br>
    <b>Score:</b> ${score}/${questions.length}<br>
    <b>Percentage:</b> ${percent}%<br>
    <b>Result:</b> ${result}
  `;
});




