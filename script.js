console.log("SCRIPT LOADED");

document.addEventListener("DOMContentLoaded", () => {

  /* ========= SAFETY CHECK ========= */
  if (!window.questions || !Array.isArray(questions)) {
    console.error("Questions array not found!");
    return;
  }

  /* ========= HELPERS ========= */
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  function shuffleQuestion(q) {
    const correctText = q.o[q.a];
    shuffle(q.o);
    q.a = q.o.indexOf(correctText);
  }

  /* ========= ELEMENTS ========= */
  const quizForm = document.getElementById("quizForm");
  const quizDiv = document.getElementById("quiz");
  const resultDiv = document.getElementById("result");
  const nameInput = document.getElementById("studentName");
  const timerSpan = document.getElementById("timer");

  /* ========= SHUFFLE ========= */
  shuffle(questions);
  questions.forEach(q => shuffleQuestion(q));

  /* ========= RENDER ========= */
  questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "question";

    div.innerHTML =
      `<p><b>${i + 1}. ${q.q}</b></p>` +
      q.o.map((opt, idx) => `
        <label>
          <input type="radio" name="q${i}" value="${idx}">
          ${opt}
        </label><br>
      `).join("");

    quizDiv.appendChild(div);
  });

  /* ========= TIMER ========= */
  let totalTime = 50 * 60;
  let submitted = false;

  const timerInterval = setInterval(() => {
    if (submitted) return;

    const m = Math.floor(totalTime / 60);
    const s = totalTime % 60;
    timerSpan.textContent = `Time Left: ${m}:${s < 10 ? "0" : ""}${s}`;

    if (totalTime <= 0) {
      clearInterval(timerInterval);
      quizForm.requestSubmit();
    }
    totalTime--;
  }, 1000);

  /* ========= SUBMIT ========= */
  quizForm.addEventListener("submit", e => {
    e.preventDefault();
    if (submitted) return;
    submitted = true;

    clearInterval(timerInterval);

    const name = nameInput.value.trim();
    if (!name) {
      alert("Enter student name");
      submitted = false;
      return;
    }

    let score = 0;

    questions.forEach((q, i) => {
      document.getElementsByName(`q${i}`).forEach(o => {
        const val = Number(o.value);

        if (val === q.a) {
          o.parentElement.style.color = "green";
          o.parentElement.style.fontWeight = "bold";
        }

        if (o.checked && val !== q.a) {
          o.parentElement.style.color = "red";
        }

        if (o.checked && val === q.a) score++;

        o.disabled = true;
      });
    });

    const percent = ((score / questions.length) * 100).toFixed(2);
    const result = percent >= 50 ? "PASS" : "FAIL";

    /* ========= RESULT ========= */
    resultDiv.innerHTML = `
      <hr>
      <b>Name:</b> ${name}<br>
      <b>Score:</b> ${score}/${questions.length}<br>
      <b>Percentage:</b> ${percent}%<br>
      <b>Result:</b> ${result}
    `;

    resultDiv.scrollIntoView({ behavior: "smooth" });
  });

});
