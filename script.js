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

/************** ALL 100 QUESTIONS **************/
const questions = [
{q:"What are those assets which cannot be recovered?",o:["Standard assets","Sub-standard assets","Doubtful assets","Loss assets"],a:3},

{q:"SARFAESI Act is applicable on loans of:",o:["Above ₹50,000","Above ₹1 lakh","Above ₹5 lakhs","All loans"],a:1},

{q:"Loans up to what amount can be settled through Lok Adalat?",o:["₹10 lakhs","₹15 lakhs","₹20 lakhs","₹25 lakhs"],a:2},

{q:"Loans to be referred to Debt Recovery Tribunal (DRT) are:",o:["₹10 lakhs and above","₹15 lakhs and above","₹20 lakhs and above","₹25 lakhs and above"],a:2},

{q:"Does interest applied on NPA affect borrower liability?",o:["Interest stops completely","Interest remains overdue up to 90 days","Interest is waived","Interest is compounded monthly"],a:1},

{q:"What are the main issues of a bank?",o:["Profit and growth","Liquidity and solvency","Customer service and satisfaction","Capital adequacy"],a:2},

{q:"A letter expressing dissatisfaction by a customer is called:",o:["Request","Suggestion","Complaint","Feedback"],a:2},

{q:"Main complaints of small depositors relate to:",o:["ATM charges only","Interest rates only","Service issues like passbook and account opening","Loan sanctions"],a:2},

{q:"Main complaints of small borrowers are related to:",o:["Deposit rates","Delay in loans and collateral demand","ATM availability","Branch location"],a:1},

{q:"Policy adopted by banks to address complaints is called:",o:["Recovery policy","Model Policy","Credit policy","Risk policy"],a:1},

{q:"Rules under Model Policy include:",o:["Strict recovery","Polite dealing and timely redressal","Legal action only","Automation"],a:1},

{q:"Customer complaints mainly arise due to:",o:["High profits","Poor communication and service gaps","Excess staff","Excess automation"],a:1},

{q:"If a customer is not satisfied with bank reply, complaint can be made to:",o:["Civil court","Police","Banking Lokpal","Finance Ministry"],a:2},

{q:"Customers should be informed about:",o:["Loan products only","Interest rates only","Where and how to complain","Branch timings"],a:2},

{q:"Complaint redressal details must be displayed on:",o:["Website only","Branch notice board","Passbook","ATM screen"],a:1},

{q:"Complaints can be lodged through:",o:["Written only","Oral only","Online only","Written, oral or telephone"],a:3},

{q:"Time limit for replying to a written complaint is:",o:["3 days","5 days","7 days","15 days"],a:2},

{q:"Telephone complaints are handled by:",o:["Ignoring","Verbal assurance only","Complaint number and follow-up","Legal notice"],a:2},

{q:"Complaints should generally be resolved within:",o:["7 days","15 days","21 days","30 days"],a:3},

{q:"Who is responsible for complaint redressal at branch level?",o:["Clerk","Cashier","Branch Manager","Security guard"],a:2},

{q:"If branch cannot resolve complaint, it is escalated to:",o:["Customer","Police","Regional/Zonal Office","Court"],a:2},

{q:"If unresolved at Regional Office, complaint goes to:",o:["Branch Manager","Zonal Manager","Bank’s Nodal Officer","RBI Governor"],a:2},

{q:"Customer Day is observed on:",o:["1st of every month","10th of every month","15th of every month","Last day of month"],a:2},

{q:"Customer Service Committee meetings are held at:",o:["Head Office only","Regional Office only","Branches and Regional Offices","RBI offices"],a:2},

{q:"Banks observe Customer Fortnight:",o:["Every month","Every quarter","Once a year","Once in five years"],a:2},

{q:"Complaints at RO level are handled by:",o:["Branch Manager","Clerk","Regional Manager/AGM","RBI"],a:2},

{q:"Customer Service Section at Head Office works under:",o:["Branch Manager","Regional Manager","General Manager","Chairman only"],a:2},

{q:"Branch level complaints should be resolved within:",o:["3 days","5 days","7 days","10 days"],a:2},

{q:"Mandatory display in banks includes:",o:["Interest rates only","Loan schemes only","Nodal officer and Lokpal details","Staff attendance"],a:2},

{q:"General complaints should be resolved within:",o:["7 days","15 days","21 days","30 days"],a:2},

{q:"Time limit for complaints received from PMO is:",o:["3 days","5 days","7 days","10 days"],a:2},

{q:"Banking Lokpal Scheme is implemented by:",o:["Government of India","RBI","SEBI","IRDAI"],a:1},

{q:"Banking Lokpal is appointed from among:",o:["Judges","Chartered Accountants","Senior Bankers","Civil servants"],a:2},

{q:"Main function of Banking Lokpal is to:",o:["Issue licences","Resolve customer complaints","Impose penalties","Conduct audits"],a:1},

{q:"Tenure of Banking Lokpal is:",o:["1 year","2 years","3 years","5 years"],a:2},

{q:"Maximum age limit for Banking Lokpal is:",o:["60 years","62 years","65 years","70 years"],a:2},

{q:"Maximum compensation awarded by Lokpal is:",o:["₹5 lakhs","₹8 lakhs","₹10 lakhs","₹20 lakhs"],a:2},

{q:"Primary responsibility for resolving complaints lies with:",o:["RBI","Zonal Office","Branch","Court"],a:2},

{q:"Appeal against Lokpal order can be made within:",o:["15 days","30 days","45 days","60 days"],a:1},

{q:"Sellers and buyers provide information to:",o:["Banks","Government","Market","Stock exchange"],a:2},

{q:"System that mobilizes surplus capital is:",o:["Banking system","Financial system","Payment system","Insurance system"],a:1},

{q:"Examples of financial intermediaries are:",o:["Banks and mutual funds","Courts and police","Hospitals","Schools"],a:0},

{q:"Two main roles of RBI are:",o:["Profit and growth","Control inflation and supervise banks","Customer service","Loan recovery"],a:1},

{q:"RBI acts as lender of:",o:["First resort","Last resort","Only resort","Temporary resort"],a:1},

{q:"Commercial banks include:",o:["Only public banks","Only private banks","Public, private and foreign banks","Only cooperative banks"],a:2}
{q:"Who provides long-term funds to industry and agriculture?",o:["Commercial Banks","Financial Institutions","Cooperative Banks","Primary Dealers"],a:1},

{q:"Urban Cooperative Banks are controlled by:",o:["RBI only","State Government only","RBI and State Government","Central Government"],a:2},

{q:"CRR stands for:",o:["Cash Reserve Ratio","Credit Reserve Ratio","Central Reserve Ratio","Cash Requirement Ratio"],a:0},

{q:"SLR stands for:",o:["Statutory Lending Ratio","Standard Liquidity Ratio","Statutory Liquidity Ratio","State Liquidity Ratio"],a:2},

{q:"Main purpose of insurance is to:",o:["Earn profit","Secure value of life and assets","Encourage savings","Promote investment"],a:1},

{q:"Insurance is broadly classified into:",o:["Life and Term","General and Health","Life and Non-life","Public and Private"],a:2},

{q:"An insurance intermediary is:",o:["Insurer","Agent or Broker","Policy holder","Regulator"],a:1},

{q:"Till 1999–2000, insurance business in India was handled mainly by:",o:["LIC and GIC","Private insurers","Foreign insurers","Regional insurers"],a:0},

{q:"As per IRDAI data, number of life insurance companies in India is:",o:["20","22","24","30"],a:2},

{q:"Total number of insurance companies in India is:",o:["50","55","57","60"],a:2},

{q:"Insurance sector in India is regulated by:",o:["RBI","SEBI","IRDAI","PFRDA"],a:2},

{q:"Pension Fund Regulatory and Development Authority (PFRDA) was formed in:",o:["2000","2002","2003","2005"],a:2},

{q:"National Pension System (NPS) was introduced in:",o:["2001","2003","2004","2006"],a:2},

{q:"Capital market is divided into:",o:["Money and capital market","Primary and secondary market","Debt and equity market","Domestic and foreign market"],a:1},

{q:"Instruments issued in the primary market include:",o:["Shares, bonds and debentures","Derivatives only","Treasury bills only","Certificates of deposit"],a:0},

{q:"Intermediaries in the primary market are:",o:["Banks and issue managers","Courts and regulators","Depositors","Investors only"],a:0},

{q:"Secondary market deals in:",o:["Issue of new securities","Trading of existing securities","Loan disbursement","Deposit mobilisation"],a:1},

{q:"Approval for trading of securities is given to:",o:["Banks","Companies","Stock exchanges","Mutual funds"],a:2},

{q:"Issuance and advisory services are provided by:",o:["Commercial banks","Investment bankers","Stock brokers","Depositories"],a:1},

{q:"Foreign Institutional Investors are known as:",o:["FDIs","FIIs","NRIs","QFIs"],a:1},

{q:"A mutual fund is a:",o:["Private investment","Pool of investors’ funds","Bank deposit","Government scheme"],a:1},

{q:"IRDAI controls which sector?",o:["Banking","Capital market","Insurance","Pension"],a:2},

{q:"Insurance that protects assets is:",o:["Life insurance","Term insurance","Non-life insurance","Pension insurance"],a:2},

{q:"Securities include:",o:["Shares and bonds","Debentures only","Government notes","Bank deposits"],a:0},

{q:"Percentage of deposits banks keep with RBI is called:",o:["SLR","CRR","Repo rate","Bank rate"],a:1},

{q:"Lack of access to formal banking is known as:",o:["Financial inclusion","Financial instability","Financial exclusion","Financial literacy"],a:2},

{q:"Affordable financial services to poor is called:",o:["Micro banking","Priority lending","Financial inclusion","Subsidised banking"],a:2},

{q:"Total number of bank branches in India as on 31.03.2015 was:",o:["1,00,000","1,15,000","1,25,857","1,40,000"],a:2},

{q:"RBI initiatives under financial inclusion include:",o:["SHGs and simplified KYC","Only SHGs","Only Jan Dhan","Only BC model"],a:0},

{q:"Banking services in unbanked areas are provided through:",o:["ATMs","Mobile vans","BC/BF","Post offices"],a:2},

{q:"BF stands for:",o:["Business Finance","Business Facilitator","Banking Facilitator","Branch Facilitator"],a:1},

{q:"BC stands for:",o:["Business Consultant","Banking Correspondent","Business Correspondent","Branch Coordinator"],a:2},

{q:"BC/BF act as a bridge between:",o:["Bank and RBI","Bank and people","Customer and regulator","Bank and government"],a:1},

{q:"NPCI stands for:",o:["National Payment Council of India","National Payments Corporation of India","National Processing Centre of India","National Public Clearing Institution"],a:1},

{q:"Major banking development in India is:",o:["Branch expansion","Core Banking Solutions","Nationalisation","Privatisation"],a:1},

{q:"CBS stands for:",o:["Central Banking System","Core Banking Solutions","Computerised Banking Software","Central Branch System"],a:1},

{q:"Which schemes are enabled by CBS?",o:["RTGS, NEFT, IMPS","Only NEFT","Only RTGS","Cheque clearing"],a:0},

{q:"Technology helping common man in banking includes:",o:["RTGS and mobile banking","Only ATMs","Only internet banking","Manual registers"],a:0},

{q:"RTGS refers to:",o:["Retail Transfer System","Real Time Gross Settlement","Rapid Transfer Gateway","Reserve Transfer Guarantee System"],a:1},

{q:"NEFT stands for:",o:["National Electronic Funds Transfer","New Electronic Funds Transfer","National Easy Funds Transfer","Net Enabled Funds Transfer"],a:0},

{q:"CTS stands for:",o:["Cheque Truncation System","Central Transfer System","Cheque Transfer Service","Clearing Transaction System"],a:0},

{q:"Formal financial system includes:",o:["Savings, credit, insurance and payments","Only deposits","Only loans","Only insurance"],a:0},

{q:"Banks avoid rural poor mainly due to:",o:["Lack of interest","Low savings","High population","Poor literacy"],a:1},

{q:"Small credit given to individuals is called:",o:["Macro credit","Micro credit","Priority credit","Retail credit"],a:1},

{q:"Micro savings and credit arrangement is known as:",o:["Micro banking","Micro lending","Micro finance","Mini finance"],a:2},

{q:"The concept of microfinance was pioneered by:",o:["Amartya Sen","Raghuram Rajan","Dr. Mohammed Yunus","Muhammad Ali"],a:2}

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


