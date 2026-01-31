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
// Q101–Q125
{q:"Risk in lending is reduced by?",o:["High interest","Liquidity & repayment assessment","Collateral only","Frequent renewal"],a:1},
{q:"Risk involved in lending is?",o:["Low profit","Default in repayment","Delay in sanction","Documentation"],a:1},
{q:"Working capital is required for?",o:["Asset purchase","Day-to-day transactions","Expansion","Tax payment"],a:1},
{q:"Purpose of term loans?",o:["Daily expenses","Instalment-based loans","Cash credit","Overdraft"],a:1},
{q:"Assessment of working capital is based on?",o:["Turnover","Working capital cycle","Profit","Collateral"],a:1},

{q:"Securities are classified into?",o:["Primary & collateral","Movable & immovable","Cash & credit","Short & long"],a:1},
{q:"Immovable securities include?",o:["Gold & shares","Land & buildings","Vehicles","Finished goods"],a:1},
{q:"Finished goods and gold are?",o:["Immovable","Movable securities","Intangible","Non-assets"],a:1},
{q:"Private security means?",o:["Cash security","Personal/third-party guarantee","Mortgage","Pledge"],a:1},
{q:"Tangible assets are?",o:["Virtual","Saleable assets","Liabilities","Intangible"],a:1},

{q:"Immovable property accepted as?",o:["Cash","Primary or collateral security","Deposit","Guarantee"],a:1},
{q:"Mortgage by deposit of title deeds is?",o:["Simple mortgage","Equitable mortgage","Registered mortgage","Usufructuary"],a:1},
{q:"Limitation period of mortgage loan is?",o:["6 years","9 years","12 years","15 years"],a:2},
{q:"Title deeds verify?",o:["Property tax","Ownership & right to sell","Market value","Location"],a:1},
{q:"Main documents from mortgager?",o:["Sale deed & link docs","PAN & Aadhaar","Loan agreement","Insurance"],a:0},

{q:"Basis of property valuation?",o:["Market gossip","Valuer report & sale value","Broker advice","Owner demand"],a:1},
{q:"Valuation depends on?",o:["Age & location","Tax only","Owner income","Loan size"],a:0},
{q:"Loans on standing crops are?",o:["Term loans","OCC & warehouse loans","Housing loans","Personal loans"],a:1},
{q:"Hypothecation means?",o:["Transfer of ownership","Charge without possession","Sale of asset","Pledge"],a:1},
{q:"Charge without possession is?",o:["Pledge","Mortgage or hypothecation","Assignment","Lien"],a:1},

{q:"Precaution in stock financing?",o:["Hoarding","Saleable stock","Obsolete stock","Speculation"],a:1},
{q:"Loans on LIC policies are?",o:["Unsecured","Primary/collateral security","Illegal","Personal"],a:1},
{q:"Condition for LIC policy loan?",o:["Expired policy","Premium unpaid","Policy in force","Nominee consent"],a:2},
{q:"Policy not accepted as security?",o:["Endowment","Children policies","Money-back","Term"],a:1},
{q:"Assignment of policy means?",o:["Policy cancellation","Policy in lender’s favour","Policy maturity","Policy renewal"],a:1},
// Q126–Q150
{q:"Do banks finance deposits?",o:["No","Yes, RD & term deposits","Only FD","Only savings"],a:1},
{q:"Extent of finance on deposits?",o:["70%","80%","90%","100%"],a:2},
{q:"Loans on minor’s deposit?",o:["Allowed","Not allowed","Always allowed","Optional"],a:1},
{q:"Loans on gold ornaments are given by?",o:["Mortgage","Pledge of gold","Assignment","Hypothecation"],a:1},
{q:"Gold loan depends on?",o:["Weight only","Purity & market value","Owner income","Bank policy"],a:1},

{q:"Bank can retain gold after repayment if?",o:["Interest unpaid","Other dues exist","Customer asks","Policy ends"],a:1},
{q:"Minor’s deposit loan given to?",o:["Minor","Guardian","Bank","Nominee"],a:1},
{q:"PSL sub-targets are for?",o:["Urban loans","Agri, MSME, weaker sections","Exports","Corporate"],a:1},
{q:"PSL targets mandatory for?",o:["NBFCs","All commercial banks","Only PSU banks","RRBs only"],a:1},
{q:"PSL classifications include?",o:["Retail only","Agri, MSME, housing","Corporate","Trade"],a:1},

{q:"Agri loans under PSL include?",o:["Personal loans","Farm credit & infra","Housing","Vehicle"],a:1},
{q:"RBI issues PSL targets to?",o:["PSBs only","Banks & RRBs","NBFCs","Co-ops only"],a:1},
{q:"Agriculture PSL target is?",o:["10%","15%","18%","25%"],a:2},
{q:"Micro credit PSL target is?",o:["5%","6.5%","7.5%","10%"],a:2},
{q:"Agriculture loans include?",o:["Short-term only","All terms","Long-term only","Crop only"],a:1},

{q:"Medium/long-term agri loans for?",o:["Consumption","Implements & irrigation","Travel","Trade"],a:1},
{q:"Agri loans >12 months up to?",o:["₹10 lakh","₹25 lakh","₹50 lakh","₹1 crore"],a:2},
{q:"Scheme for farmers’ loans?",o:["SHG","Kisan Credit Card","PMJDY","Crop loan"],a:1},
{q:"Max agri infra loan limit?",o:["₹50 crore","₹75 crore","₹100 crore","₹200 crore"],a:2},
{q:"Agri infra loans include?",o:["Housing","Warehouses & godowns","Education","Vehicles"],a:1},

{q:"Loan limit to cooperatives?",o:["₹1 crore","₹3 crores","₹5 crores","₹10 crores"],a:2},
{q:"Agri clinics loans fall under?",o:["Retail","Allied activities","Housing","Trade"],a:1},
{q:"PACS stands for?",o:["Primary Agri Coop Credit Society","Public Agri Credit Scheme","Primary Asset Credit System","People Agri Coop Society"],a:0},
{q:"Micro industry investment limit?",o:["₹50 lakh","₹1 crore","₹5 crores","₹10 crores"],a:1},
{q:"Small industry investment limit?",o:["₹1 crore","₹3 crores","₹5 crores","₹10 crores"],a:2},
// Q151–Q175
{q:"Medium industry investment limit?",o:["₹10 cr","₹25 cr","₹50 cr","₹100 cr"],a:2},
{q:"Service MSME equipment limit?",o:["₹10 lakh","₹25 lakh","₹50 lakh","₹1 crore"],a:1},
{q:"Education loan PSL limit?",o:["₹10 lakh","₹15 lakh","₹20 lakh","₹25 lakh"],a:2},
{q:"Housing repair loan limit?",o:["₹5L/₹3L","₹10L/₹6L","₹15L/₹10L","₹20L"],a:1},
{q:"Social infra loan limit?",o:["₹1 crore","₹3 crores","₹5 crores","₹10 crores"],a:2},

{q:"PMJDY overdraft limit?",o:["₹5,000","₹7,500","₹10,000","₹15,000"],a:2},
{q:"Weaker section includes?",o:["Corporate","SC/ST, SHGs","Exporters","HNI"],a:1},
{q:"Qualifying asset refers to?",o:["Bank loan","MFI credit","Govt grant","FD"],a:1},
{q:"Micro credit income limit?",o:["₹50k/₹1L","₹1L/₹1.6L","₹2L/₹3L","₹5L"],a:1},
{q:"No service charge up to?",o:["₹10,000","₹15,000","₹25,000","₹50,000"],a:2},

{q:"Short-term loan is repayable within?",o:["12 months","18 months","24 months","36 months"],a:1},
{q:"Medium/long-term loans are beyond?",o:["24 months","30 months","36 months","48 months"],a:2},
{q:"Medium/long-term loans include?",o:["Trade","Irrigation & dairy","Travel","Personal"],a:1},
{q:"Max duration of agri term loans?",o:["1 year","2 years","More than 3 years","5 months"],a:2},
{q:"Purpose of agri term loans?",o:["Consumption","Capital formation","Speculation","Travel"],a:1},

{q:"Eligible for agri term loans?",o:["Farmers only","Farmers & labourers","Only SHGs","Companies"],a:1},
{q:"Documents for agri term loan?",o:["PAN only","Project & land records","ID proof","FD"],a:1},
{q:"Land development loan purpose?",o:["Housing","Levelling & terracing","Vehicle","Trade"],a:1},
{q:"Minor irrigation includes?",o:["Canals only","Surface & underground","Rivers only","Rain"],a:1},
{q:"Farm mechanisation loans include?",o:["Seeds","Tractors & implements","Fertiliser","Storage"],a:1},

{q:"Eligibility for mechanisation loans?",o:["2 acres","5 acres","8 acres irrigated","10 acres"],a:2},
{q:"Documents for horticulture loans?",o:["PAN","Soil & water test","FD","Passport"],a:1},
{q:"Purpose of KCC?",o:["Only crop loans","Crop & consumption","Housing","Trade"],a:1},
{q:"KCC issued for?",o:["Short-term only","Short & term loans","Long-term only","Housing"],a:1},
{q:"Mechanisation loans are for?",o:["Labour","Agri implements","Consumption","Trade"],a:1},
// Q176–Q200
{q:"Scheme for operational credit?",o:["PMFBY","Kisan Credit Card","SHG","Crop loan"],a:1},
{q:"Eligible for KCC?",o:["Big farmers","All farmers & JLGs","Only landowners","Only SHGs"],a:1},
{q:"KCC limit based on?",o:["Income","Scale of finance","Collateral","Credit score"],a:1},
{q:"KCC limit for marginal farmers?",o:["₹5k–₹20k","₹10k–₹50k","₹50k–₹1L","₹1L+"],a:1},
{q:"KCC stands for?",o:["Kisan Cash Credit","Kisan Credit Card","Krishi Card","Kisan Coop Credit"],a:1},

{q:"Income–expenditure flow is?",o:["Profit","Cash flow","Capital","Turnover"],a:1},
{q:"Hypothecation-only accepted up to?",o:["₹50k","₹1 lakh","₹3 lakhs","₹5 lakhs"],a:1},
{q:"KCC limit without collateral?",o:["₹1L","₹2L","₹3L","₹5L"],a:2},
{q:"Collateral insisted up to?",o:["₹50k","₹1L","₹2L","₹5L"],a:1},
{q:"Processing fees decided by?",o:["RBI","Govt","Banks","Customers"],a:2},

{q:"Tenor of KCC is?",o:["1 year","2 years","3 years","5 years"],a:2},
{q:"Small business cash flow depends on?",o:["Luck","Demand & competition","Only capital","Subsidy"],a:1},
{q:"Negative cash flow means?",o:["Profit","Receipts < payments","High sales","Low cost"],a:1},
{q:"Cash flow influenced by?",o:["Inputs & sales","Interest only","Tax only","Luck"],a:0},
{q:"Cash flow analysis affects?",o:["Profit","Loan repayment","Tax","Assets"],a:1},

{q:"Loans & advances shown under?",o:["Liabilities","Assets","Capital","Income"],a:1},
{q:"Assets = Liabilities + ?",o:["Profit","Capital","Income","Reserves"],a:1},
{q:"Income – operating expenses is?",o:["Gross income","Operating income","Net worth","Turnover"],a:1},
{q:"Loans shown on balance sheet?",o:["Liability side","Asset side","Capital","Income"],a:1},
{q:"Defaulted amount is called?",o:["Standard","Overdue","NPA","Loss"],a:1},

{q:"Accounts overdue beyond period are?",o:["Standard","NPA","Sub-standard","Doubtful"],a:1},
{q:"RBI asset classifications?",o:["Good/Bad","Standard to Loss","Short/Long","Cash/Non-cash"],a:1},
{q:"Asset becomes NPA after?",o:["30 days","60 days","90 days","180 days"],a:2},
{q:"Timely repayment accounts are?",o:["NPA","Standard assets","Loss","Doubtful"],a:1},
{q:"Loans overdue >90 days <12 months?",o:["Standard","Sub-standard","Doubtful","Loss"],a:1},

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
