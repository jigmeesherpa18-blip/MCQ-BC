/************** SHUFFLE FUNCTION **************/
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

/************** TIMER (50 MIN) **************/
let totalTime = 50 * 60;
const timerEl = document.getElementById("timer");

const timerInterval = setInterval(() => {
  // timer countdown
  let m = Math.floor(totalTime / 60);
  let s = totalTime % 60;
  if (timerEl) {
  timerEl.innerText = `Time Left: ${m}:${s < 10 ? "0" : ""}${s}`;
}

  if (totalTime <= 0) {
    clearInterval(timerInterval);
    alert("Time is up! Test will be submitted automatically.");
    document.getElementById("quizForm").dispatchEvent(new Event("submit"));
  }
  totalTime--;
}, 1000);

/************** QUESTIONS 1–50 **************/
const questions = [

{q:"Which is NOT a feature of financial inclusion?",o:["Informal & formal system","Affordable cost","Low-income groups","Savings, credit & insurance"],a:0},

{q:"Provisioning for standard assets in CRE sector is?",o:["0.25%","0.40%","1.00%","Nil"],a:0},

{q:"Central Government stake in PSBs is?",o:["25%","50%","More than 50%","90%"],a:2},

{q:"Customer Day is observed on?",o:["1st of month","10th of month","15th of month","Last day"],a:2},

{q:"Which was NOT part of early financial liberalisation?",o:["Jan Dhan Yojana","Aadhaar","Mobile","Microfinance"],a:0},

{q:"ONDC is a?",o:["Section 8 company","Govt company","Private bank JV","PPP"],a:0},

{q:"NEFT through internet banking is available?",o:["7am–5pm","7am–8pm","Bank working hours","24×7"],a:3},

{q:"Effective financial counselling requires?",o:["Structuring only","Structuring & rapport","Rapport & conflict","All of these"],a:3},

{q:"Early stress in loan accounts is tracked using?",o:["Bad account","Irregular","Special Mention Account","Watch list"],a:2},

{q:"Bank will NOT disclose customer info when?",o:["Required by law","Customer consent","Govt official directs","Public interest"],a:2},

{q:"Ombudsman under Integrated Ombudsman Scheme is appointed by?",o:["Govt of India","RBI","Banks","Finance Ministry"],a:1},

{q:"Which statement about MSMEs is incorrect?",o:["Udyam registration mandatory","PSL eligible loans","10% micro sub-target","Regulated by RBI"],a:3},

{q:"Bank-customer dispute amount before Ombudsman can be?",o:["₹50,000","₹1 lakh","₹5 lakhs","Any amount"],a:3},

{q:"Reserve Bank of India is?",o:["Central Bank","Development Bank","Finance Ministry wing","PSB"],a:0},

{q:"RBI customer service instructions include?",o:["Unattended counters allowed","Late staff arrival","All customers attended","Selective service"],a:2},

{q:"FATF is a?",o:["Finance Ministry body","RBI body","International body","ED wing"],a:2},

{q:"Which is incorrect about SHGs?",o:["Small formal groups","10–12 members","Homogeneous group","Promote savings"],a:0},

{q:"Sub-exposures begin at deposits of?",o:["₹15 lakh","₹50 lakh","₹1 crore","₹2 crore"],a:0},

{q:"NCFE was set up by?",o:["Govt of India","All banks","PSBs","Financial regulators"],a:3},

{q:"PM Jeevan Jyoti Bima Yojana is a?",o:["Term insurance","Endowment","ULIP","Whole life"],a:0},

{q:"Jan Samarth Portal connects?",o:["Deposits","PPF","Lenders & beneficiaries","Bill payments"],a:2},

{q:"ATM failed cash withdrawal reversal time?",o:["Immediate","7 days","5 working days","10 days"],a:2},

{q:"Mobile wallet is?",o:["Credit based","Debit based","Digital cash","ATM usable"],a:2},

{q:"Bank asking customer to use CDM instead of counter is?",o:["Irregular","Lawful","Not permitted","Only for cash shortage"],a:1},

{q:"DICGC covers deposits of?",o:["All RBI banks","Except cooperatives","Except RRBs","Optional"],a:0},

{q:"Cardinal principles of lending include?",o:["Safety & liquidity","Liquidity & risk","Risk & security","Safety, liquidity & security"],a:3},

{q:"DFIs mainly provide?",o:["Guidance","Guarantee","Refinance","Tech support"],a:2},

{q:"BC commission changes on voluntary e-enrolment?",o:["No change","Passed to branch","Reduced","Half"],a:0},

{q:"Pink Label ATMs are for?",o:["Shares","Agriculture","Online shopping","Women"],a:3},

{q:"Which is NOT a cause of customer complaints?",o:["Poor facilities","Bad attitude","Workload","Non-standard procedures"],a:3},

{q:"RBI’s Deposit Education Fund is used for?",o:["Interest promotion","Deposit insurance","Financial inclusion","None"],a:2},

{q:"OVDs are for?",o:["Branch licensing","Small loans","KYC","Refinance"],a:2},

{q:"Inoperative account classification considers?",o:["Credits only","Customer debit & credit","Standing instructions","Charges only"],a:1},

{q:"BC violating privacy laws causes?",o:["Operational risk","Strategic risk","Compliance risk","Reputation risk"],a:2},

{q:"NFC in mobile can be embedded in?",o:["Storage","RAM","Remittance","SIM"],a:3},

{q:"Interest debited but not overdue for 8 months account is?",o:["Standard","Sub-standard","Doubtful","Loss"],a:0},

{q:"USSD banking does NOT offer?",o:["Money transfer","Bill pay","Merchant pay","Account opening"],a:3},

{q:"Kisan Credit Card aims to provide?",o:["Farm credit","Non-farm credit","Flexible credit","All of these"],a:3},

{q:"BC/BF is NOT expected to act as?",o:["Guide","Philosopher","Govt representative","Channel"],a:2},

{q:"Financial education includes?",o:["Skills only","Knowledge only","Understanding only","All of these"],a:3},

{q:"PMJJBY annual premium is?",o:["₹114","₹228","₹342","₹436"],a:0},

{q:"Soft skills relate to?",o:["Customer relations","Financial analysis","Tools","Programming"],a:0},

{q:"Lack of BC oversight causes?",o:["Operational risk","Strategic risk","Compliance risk","Reputation risk"],a:0},

{q:"BHIM is used for?",o:["Bank payments only","Send & collect money","Bill alerts","SMS alerts"],a:1},

{q:"Short-duration crop loans become NPA after?",o:["90 days","One season","Two seasons","Three seasons"],a:2},

{q:"Free ATM transactions in metro cities?",o:["3","4","5","7"],a:2},

{q:"Former-survivor FD after death allows payment to?",o:["No one","Survivor","Heirs","Jointly"],a:1},

{q:"Credit score range is?",o:["100–700","200–800","300–900","400–1000"],a:2},
 {q:"Deposit Education & Awareness Fund is used for?",o:["Interest promotion","Deposit insurance","Financial inclusion","None"],a:2},

{q:"Officially Valid Documents are used for?",o:["Branch licence","Small loans","KYC verification","RBI refinance"],a:2},

{q:"Inoperative account classification considers?",o:["Credits only","Customer debit & credit","Standing instructions","Charges only"],a:1},

{q:"BC violating confidentiality causes?",o:["Operational risk","Strategic risk","Compliance risk","Reputation risk"],a:2},

{q:"NFC technology can be embedded in?",o:["Phone memory","RAM","Bank server","SIM card"],a:3},

{q:"Interest debited but not overdue account is?",o:["Standard","Sub-standard","Doubtful","Loss"],a:0},

{q:"USSD banking does NOT allow?",o:["Money transfer","Bill payment","Merchant payment","Account opening"],a:3},

{q:"Kisan Credit Card aims to?",o:["Farm credit","Non-farm credit","Flexible credit","All"],a:3},

{q:"BC is NOT expected to act as?",o:["Guide","Philosopher","Govt representative","Channel"],a:2},

{q:"Financial education includes?",o:["Skills","Knowledge","Confidence","All"],a:3},

{q:"PMJJBY annual premium is?",o:["₹114","₹228","₹342","₹436"],a:0},

{q:"Soft skills relate to?",o:["Customer relations","Financial analysis","Tools","Programming"],a:0},

{q:"Lack of BC oversight leads to?",o:["Operational risk","Strategic risk","Compliance risk","Reputation risk"],a:0},

{q:"BHIM app is used for?",o:["Bank alerts","Digital payments","ATM withdrawals","Loan tracking"],a:1},

{q:"Short-duration crop loan becomes NPA after?",o:["90 days","One season","Two seasons","Three seasons"],a:2},

{q:"Free ATM transactions in metro cities?",o:["3","4","5","7"],a:2},

{q:"Former-survivor FD paid to?",o:["Heirs","Survivor","Jointly","None"],a:1},

{q:"Credit score range is?",o:["100–700","200–800","300–900","400–1000"],a:2},

{q:"Borrower profiling helps in?",o:["Recovery","Follow-up","Activity suitability","KYC"],a:2},

{q:"Soft skills do NOT include?",o:["Communication","Motivation","Responsibility","Technical knowledge"],a:3},

{q:"Cost of borrowing money is?",o:["Commission","Interest","Charge","Premium"],a:1},

{q:"Non-advisory banking services are?",o:["Luxury","Essential","Elite","Advisory-based"],a:1},

{q:"Civil Society Organisations are?",o:["NGOs","Voluntary non-profit bodies","SHGs","State bodies"],a:1},

{q:"Who is NOT eligible for PMJJBY?",o:["NRI","49 years age","16 years age","51 yrs continuing"],a:2},

{q:"Incorrect statement about Bharat QR?",o:["P2M payments","UPI secure","Any supported app","Only UPI"],a:3},

{q:"Gift card is a?",o:["Debit card","Credit card","Prepaid card","Charge card"],a:2},

{q:"Financial statements include?",o:["Balance sheet","P&L","Notes","All"],a:3},

{q:"Incorrect about NFC contactless tech?",o:["Audit trail","Instant settlement","Stored value","Central accounts"],a:1},

{q:"Incorrect about RFID?",o:["Music listening","Goods tracking","Smart cards","Secure"],a:0},

{q:"Charge card payment is made?",o:["Instant","One-time","Installments","Grace period"],a:1},

{q:"KCC beneficiaries may get?",o:["Smart card","Debit card","GCC","A or B"],a:3},

{q:"DDs above ₹10,000 must be?",o:["Bearer","Crossed","Account payee","Cash"],a:2},

{q:"99% banking services via USSD?",o:["Any GSM phone","Smartphone","Android only","iOS only"],a:0},

{q:"Digital Rupee helps reduce?",o:["Currency use","Cash cost","Inflation","Physical cash"],a:1},

{q:"Incorrect about virtual cards?",o:["Random number","Prevents fraud","No spend limit","Secure"],a:2},

{q:"Accrual accounting records?",o:["Cash basis","When earned","When paid","Advance only"],a:1},

{q:"Education loan ₹8 lakh requires?",o:["No security","Parents only","Parents + collateral","Collateral only"],a:2},

{q:"CRR is calculated on?",o:["NDTL","GDTL","Advances","Deposits"],a:0},

{q:"Ethics include?",o:["Values","Guidance","Social protection","All"],a:3},

{q:"White Label ATMs are owned by?",o:["Banks","NBFCs","Non-banks","RBI"],a:2},

{q:"AePS enables?",o:["Withdrawal","Deposit","Transfer","All"],a:3},

{q:"APY targets workers of?",o:["Organised sector","Unorganised sector","Govt sector","PSUs"],a:1},

{q:"Banking sector regulator is?",o:["Govt","NABARD","RBI","Ombudsman"],a:2},

{q:"Financial inclusion steps did NOT include?",o:["Service area","GCC","Simplified KYC","BSBDA"],a:0},

{q:"Corporate governance includes?",o:["Objectives","Monitoring","Authority","All except pricing"],a:3},

{q:"MUDRA loans are given?",o:["With guarantee","With mortgage","Above ₹5 lakh","Without collateral <₹10L"],a:3},

{q:"Joint account can have nominees?",o:["Two","One only","With consent","None"],a:1},

{q:"Scheduled banks enjoy?",o:["Refinance","Clearing","Currency chest","All"],a:3},

{q:"Business Facilitator cannot?",o:["Handle cash","Verify borrower","Identify activity","Monitor loans"],a:0},

{q:"RRB area of operation is?",o:["Few districts","Unlimited","State decided","Sponsor bank decided"],a:0}

];


/************** SHUFFLE QUESTIONS **************/
shuffle(questions);

/************** RENDER **************/
const quizDiv = document.getElementById("quiz");
questions.forEach((item,i)=>{
  const d=document.createElement("div");
  d.className="question";
  d.innerHTML=`<p><b>${i+1}. ${item.q}</b></p>`+
    item.o.map((op,j)=>`<label><input type="radio" name="q${i}" value="${j}"> ${op}</label><br>`).join("");
  quizDiv.appendChild(d);
});

/************** SUBMIT **************/
document.getElementById("quizForm").addEventListener("submit",function(e){
  e.preventDefault();
  clearInterval(timerInterval);

  const name=document.getElementById("studentName").value.trim();
  if(!name){alert("Enter student name");return;}

  let score=0;
  questions.forEach((item,i)=>{
    document.getElementsByName(`q${i}`).forEach(o=>{
      if(Number(o.value)===item.a){o.parentElement.style.color="green";o.parentElement.style.fontWeight="bold";}
      if(o.checked && Number(o.value)!==item.a){o.parentElement.style.color="red";}
      if(o.checked && Number(o.value)===item.a) score++;
      o.disabled=true;
    });
  });

  const percent=(score/questions.length)*100;
  const result=percent>50?"PASS ✅":"FAIL ❌";
// ===== SEND RESULT TO GOOGLE SHEETS =====
const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSeqcnSME6H5EFdv16cnKlCRhry5YxcSO0bEpIgcr17fKcAtyA/formResponse";

const formData = new FormData();
formData.append("entry.846732875", name);                 // Student Name
formData.append("entry.1048864389", score);               // Score
formData.append("entry.821591012", percent.toFixed(2));   // Percentage
formData.append("entry.827534288", result);               // PASS / FAIL

fetch(formURL, {
  method: "POST",
  mode: "no-cors",
  body: formData
});

  document.getElementById("result").innerHTML=
    `<hr><b>Name:</b> ${name}<br>
     <b>Score:</b> ${score}/${questions.length}<br>
     <b>Percentage:</b> ${percent.toFixed(2)}%<br>
     <b>Result:</b> ${result}`;

});






