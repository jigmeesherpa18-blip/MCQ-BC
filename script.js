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
  timerEl.innerText = `Time Left: ${m}:${s < 10 ? "0" : ""}${s}`;

  if (totalTime <= 0) {
    clearInterval(timerInterval);
    alert("Time is up! Test will be submitted automatically.");
    document.getElementById("quizForm").dispatchEvent(new Event("submit"));
  }
  totalTime--;
}, 1000);

/************** ALL 100 QUESTIONS **************/
const questions = [
// Q1–Q25
{q:"Who were managing commercial banks till 1955?",o:["Government","RBI","Private owners","Public sector"],a:2},
{q:"Financial literacy and consultation are included in?",o:["Credit control","Financial inclusion","Monetary policy","Banking regulation"],a:1},
{q:"Who provides banking services in unbanked areas?",o:["NBFC","Post Office","Business Correspondent","SHG"],a:2},
{q:"What type of institution is a bank?",o:["Commercial","Social","Financial","Government"],a:2},
{q:"Services provided by banks include?",o:["Insurance","Deposits and loans","Share trading","Tax collection"],a:1},
{q:"Indian banks are classified into how many categories?",o:["Three","Four","Five","Six"],a:2},
{q:"Which is a Public Sector Bank?",o:["HDFC Bank","ICICI Bank","Axis Bank","IDBI Bank"],a:3},
{q:"Biggest bank in India is?",o:["PNB","Bank of Baroda","HDFC Bank","State Bank of India"],a:3},
{q:"Main aim of Regional Rural Banks is?",o:["Urban development","Industrial finance","Rural development","Foreign trade"],a:2},
{q:"Minimum government investment in PSBs is?",o:["49%","50%","51%","75%"],a:2},

{q:"Cooperative banks are registered with?",o:["RBI","SEBI","Registrar of Cooperative Societies","Finance Ministry"],a:2},
{q:"Traditional functions of banks are?",o:["Insurance services","Accepting deposits and lending","Stock trading","Advisory services"],a:1},
{q:"RBI was founded on?",o:["1 Jan 1934","1 April 1935","15 Aug 1947","26 Jan 1950"],a:1},
{q:"Who issues currency in India?",o:["Ministry of Finance","State Bank of India","Reserve Bank of India","SEBI"],a:2},
{q:"Banker’s Bank is?",o:["State Bank of India","Reserve Bank of India","NABARD","EXIM Bank"],a:1},
{q:"NABARD was formed in which year?",o:["1975","1980","1982","1991"],a:2},
{q:"NABARD functions are classified into?",o:["Monitoring only","Credit control","Financial, Development and Supervision","Inspection only"],a:2},
{q:"Meaning of Financial Inclusion is?",o:["Loan distribution","Subsidy schemes","Affordable banking","Credit expansion"],a:2},
{q:"Mobile banking valet services were introduced in?",o:["2010","2011","2012","2013"],a:2},
{q:"Who supervises banks in India?",o:["RBI only","NABARD only","RBI and NABARD","Finance Ministry"],a:2},

{q:"Types of deposits are?",o:["Savings and current","Demand and term","Fixed and recurring","Personal and business"],a:1},
{q:"Cheque book facility is given to?",o:["Savings account","Fixed deposit","Current account","Loan account"],a:2},
{q:"Types of savings accounts are?",o:["One","Two","Three","Four"],a:1},
{q:"Self-service banking refers to?",o:["Branch banking","Doorstep banking","Electronic banking","Manual banking"],a:2},
{q:"Minimum period of fixed deposit is?",o:["15 days","30 days","7 days","1 year"],a:2},

// Q26–Q50
{q:"Maximum period of fixed deposit is?",o:["5 years","7 years","10 years","15 years"],a:2},
{q:"Branch-to-branch payment instrument is?",o:["Cheque","Pay order","Demand Draft","NEFT"],a:2},
{q:"Validity of a demand draft is?",o:["1 month","2 months","3 months","6 months"],a:2},
{q:"Interbank fund transfer process is called?",o:["NEFT","IMPS","RTGS","UPI"],a:2},
{q:"Instant payment facility was introduced on?",o:["2009","22 Nov 2010","2011","2012"],a:1},

{q:"Benefit of cheque truncation is?",o:["Lower cost","Faster cheque clearing","Higher interest","More branches"],a:1},
{q:"Current accounts earn?",o:["High interest","Low interest","No interest","Variable interest"],a:2},
{q:"Identity verification process is known as?",o:["AML","KYC","RTGS","IMPS"],a:1},
{q:"Documents proving identity and address are called?",o:["Income proof","KYC documents","Loan documents","PAN only"],a:1},
{q:"Identity proof documents include?",o:["Electricity bill","Voter ID","Rent receipt","Phone bill"],a:1},

{q:"Which of the following is NOT an address proof?",o:["Passport","Electricity bill","Aadhaar","Voter ID"],a:1},
{q:"Intimation before deposit maturity is given?",o:["7 days","10 days","15 days","30 days"],a:2},
{q:"No TDS is deducted when?",o:["Interest is high","PAN not submitted","Form 15G/15H submitted","Savings account"],a:2},
{q:"Main aim of banks is to?",o:["Earn profit only","Accept deposits and lend","Collect taxes","Trade shares"],a:1},
{q:"Old or sick customers operate accounts by?",o:["Signature","Thumb impression","ATM card","Cheque"],a:1},

{q:"Speciality of a cheque is that it is?",o:["Printed","Written, signed and dated","Stamped","Typed"],a:1},
{q:"Crossing of cheque means?",o:["Cheque cancelled","Two parallel lines","Cheque endorsed","Cheque post-dated"],a:1},
{q:"Validity period of a cheque is?",o:["6 months","1 year","3 months","2 months"],a:2},
{q:"A banker pays cheque when there is?",o:["Customer request","Adequate balance and validity","Old cheque","Joint account"],a:1},
{q:"Customer can close bank account due to?",o:["Low interest","Dissatisfaction or transfer","Bank holiday","Inactivity"],a:1},

{q:"Account is closed on the event of?",o:["Transfer","Illness","Death of customer","Low balance"],a:2},
{q:"Who can open a bank account?",o:["Individuals","Firms","Companies","All of these"],a:3},
{q:"Objective of KYC is to?",o:["Increase profit","Ascertain customer identity","Recover loans","Collect tax"],a:1},
{q:"Money laundering means?",o:["Saving money","Converting black money to legal","Tax planning","Investment"],a:1},
{q:"Objective of bookkeeping is to?",o:["Hide records","Record transactions","Avoid tax","Increase loans"],a:1},

// Q51–Q75
{q:"Speciality of accounting is?",o:["Random recording","Orderly record of transactions","No documentation","Verbal records"],a:1},
{q:"Two-way bookkeeping system is called?",o:["Single entry","Debit and Credit","Cash system","Assets system"],a:1},
{q:"Types of years used in accounting are?",o:["Monthly and yearly","Calendar and financial","Business and tax","Assessment only"],a:1},
{q:"Elements of dual entry system are?",o:["Assets only","Income and expenditure","Two parties and two entries","Debit only"],a:2},
{q:"Dual bookkeeping system ensures?",o:["Speed","Accuracy and accountability","Less work","Fewer records"],a:1},

{q:"Types of accounts are?",o:["Real, Personal, Fictitious","Debit, Credit, Cash","Assets and liabilities","Savings types"],a:0},
{q:"Examples of accounts include?",o:["Cash, individuals, P&L","Sales only","Assets only","Income only"],a:0},
{q:"Rules of accounts deal with?",o:["Profit calculation","Debit and Credit rules","Tax computation","Loan sanction"],a:1},
{q:"Day-to-day transactions are recorded in?",o:["Ledger","Cash book","Petty cash book","Journal"],a:2},
{q:"Account details of all transactions are found in?",o:["Journal","Trial balance","General ledger","Petty book"],a:2},

{q:"Cash transactions are recorded in?",o:["Ledger","Cash register","Journal","Balance sheet"],a:1},
{q:"Statement showing assets and liabilities is called?",o:["Profit and Loss account","Balance Sheet","Trial balance","Cash flow"],a:1},
{q:"Statement showing income and expenditure is?",o:["Balance Sheet","Cash book","Profit and Loss account","Ledger"],a:2},
{q:"Income earned on money saved is called?",o:["Dividend","Interest","Profit","Commission"],a:1},
{q:"Simple interest formula is?",o:["P+R+T","P×T×R/100","P×R","P/T"],a:1},

{q:"Interest on ₹1 lakh at 12% is?",o:["₹10,000","₹11,000","₹12,000","₹15,000"],a:2},
{q:"Formula P(1+r/100)^n is used to calculate?",o:["Simple interest","Discount","Compound interest","Profit"],a:2},
{q:"Types of ledger books include?",o:["Cash, day, petty, sundry","Savings accounts","Assets only","Income only"],a:0},
{q:"Categories of loans include?",o:["MSME, agriculture, education, vehicle","Savings accounts","Personal only","FD loans"],a:0},
{q:"Types of bank lending are?",o:["Savings and current","CC, OD, demand and term loans","Retail only","Priority only"],a:1},

{q:"Loans without guarantee are called?",o:["Secured loans","Priority loans","Unsecured loans","Term loans"],a:2},
{q:"Objective of retail banking is to?",o:["Serve individual customers","Finance industries","Promote exports","Control inflation"],a:0},
{q:"Retail banking schemes include?",o:["Housing, auto, education, cards","Industrial finance","Export finance","Interbank lending"],a:0},
{q:"Retail loan amount generally ranges between?",o:["₹5,000–50,000","₹20,000–₹1 crore","₹1–10 crore","Above ₹10 crore"],a:1},
{q:"Eligibility for education loan requires?",o:["Graduation only","10th and 12th pass","Employment","Collateral"],a:1},

// Q76–Q100
{q:"Maximum education loan in India is?",o:["₹5 lakh","₹7.5 lakh","₹10 lakh","₹20 lakh"],a:2},
{q:"Housing loan tenure usually ranges from?",o:["1–5 years","3–30 years","5–10 years","10–50 years"],a:1},
{q:"Security for housing loan is?",o:["Gold","FD","Mortgage of house","Guarantee"],a:2},
{q:"EMI is calculated on?",o:["Principal only","Interest only","Principal and interest","Penalty"],a:2},
{q:"Housing loans are generally of?",o:["Short term","Medium or long term","Very short term","Daily basis"],a:1},

{q:"Vehicle loan security is?",o:["Mortgage","Lien","Hypothecation of vehicle","Guarantee"],a:2},
{q:"Security for refrigerator or consumer durable loan is?",o:["Mortgage","Hypothecation of asset","Gold pledge","Personal guarantee"],a:1},
{q:"Personal loans include?",o:["Housing loans","Vehicle loans","Personal loans","All of these"],a:3},
{q:"Personal loans are given to?",o:["Government only","Salaried and business persons","Farmers only","Students only"],a:1},
{q:"Personal loan tenure is generally?",o:["Very long term","Short or medium term","Lifetime","One day"],a:1},

{q:"Largest retail loan segment is?",o:["Education loans","Vehicle loans","Housing loans","Personal loans"],a:2},
{q:"Priority sector lending target is?",o:["30%","35%","40%","50%"],a:2},
{q:"Short-term agricultural loans are meant for?",o:["Land purchase","Crop cultivation","Irrigation","Farm buildings"],a:1},
{q:"Medium-term agricultural loans are for?",o:["Consumption","Irrigation and dairy","Daily expenses","Trading"],a:1},
{q:"Direct finance loans are classified as?",o:["Short, medium and long term","Retail only","Corporate only","Priority only"],a:0},

{q:"Principles of lending include?",o:["Speed only","Safety, liquidity, profitability, risk spread, security","Volume only","Demand only"],a:1},
{q:"Loan repayment depends on?",o:["Income only","Willingness only","Capacity and willingness","Collateral only"],a:2},
{q:"Important lending precaution is?",o:["Speculation","Income-generating purpose","Luxury spending","Personal use"],a:1},
{q:"Banks do not lend for?",o:["Productive purposes","Income generation","Non-productive purposes","Priority sector"],a:2},
{q:"Security aspects include?",o:["Land, building, gold, insurance","Cash only","Shares only","Income proof"],a:0},

{q:"Principles of lending also include?",o:["Speed and volume","Safety and liquidity","Productive purpose","All of these"],a:3},
{q:"Sources of liquidity are?",o:["Cash, surplus and current assets","Buildings","Long-term loans","Capital only"],a:0},
{q:"Purpose of customer profitability analysis is to?",o:["Close accounts","Analyse customer business profit","Reduce deposits","Increase staff"],a:1},
{q:"Money laundering refers to?",o:["Saving money","Converting black money into legal money","Tax saving","Investment planning"],a:1},
{q:"Retail banking mainly focuses on?",o:["Large industries","Foreign trade","Individual customers","Government accounts"],a:2},
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

  document.getElementById("result").innerHTML=
    `<hr><b>Name:</b> ${name}<br>
     <b>Score:</b> ${score}/${questions.length}<br>
     <b>Percentage:</b> ${percent.toFixed(2)}%<br>
     <b>Result:</b> ${result}`;
});