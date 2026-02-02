document.addEventListener("DOMContentLoaded", () => {

  function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
  function shuffleQuestion(q) {
  const correctOptionText = q.o[q.a];
  shuffle(q.o);
  q.a = q.o.indexOf(correctOptionText);
}  
  const quizForm = document.getElementById("quizForm");
  const nameInput = document.getElementById("studentName");
  const resultDiv = document.getElementById("result");
  const quizDiv = document.getElementById("quiz");

  /* ========= TIMER ========= */
  let totalTime = 50 * 60;
  const timerSpan = document.getElementById("timer");

  const timerInterval = setInterval(() => {
    const m = Math.floor(totalTime / 60);
    const s = totalTime % 60;
    timerSpan.textContent = `Time Left: ${m}:${s < 10 ? "0" : ""}${s}`;

    if (totalTime <= 0) {
      clearInterval(timerInterval);
      quizForm.requestSubmit();
    }
    totalTime--;
  }, 1000);

  /************** QUESTIONS 1–50 **************/
const questions = [
  {
    "q": "The definition of financial inclusion currently in use includes delivery of financial services. Which one of the following is not a feature of delivery of financial services? (Select the most appropriate option from among the following:)",
    "o": [
      "By the informal as well as formal financial system.",
      "At an affordable cost.",
      "To vast sections of disadvantaged and low-income groups.",
      "The services include the provision of savings, credit, insurance and remittance facilities."
    ],
    "a": 0
  },
  {
    "q": "Provisioning for Standard Assets under IRAC norms in the case of loans to Commercial Real Estate (CRE) - 1 Sector should be made by banks at the rate of _____ (Select the most appropriate option from among the following.",
    "o": [
      "0.25%",
      "0.40%",
      "1.00%",
      "No provisioning is required for Standard Assets."
    ],
    "a": 0
  },
  {
    "q": "In the case of Public Sector Bank _____ (Select the most appropriate option from among the following.)",
    "o": [
      "At least 25% stake of the bank is held by the Central Government.",
      "At least 50% stake of the bank is held by the Central Government.",
      "More than 50% stake of the bank is held by the Central Government.",
      "More than 50% stake of the bank is held by RBI."
    ],
    "a": 2
  },
  {
    "q": "A customer's day should be observed at every bank. In this connection, select the correct statement from the following in respect of Customer's day.",
    "o": [
      "It is observed on 15th of every month.",
      "The Branch Manager should be available for customers in his office on that day between 2.00 PM to 4.00PM.",
      "Customers Service Committee at the branch has the responsibility of noting down all the complaints.",
      "A customer can meet the Managing Director of the Bank on Customer's Day with prior appointment."
    ],
    "a": 1
  },
  {
    "q": "The Uberization of financial services in India was triggered by JAM trinity, which did not comprise (Select the most appropriate option from among the following.)",
    "o": [
      "Jan Dhan Yojana",
      "Aadhaar Database",
      "Mobile",
      "Micro Finance."
    ],
    "a": 3
  },
  {
    "q": "Open Network for Digital Commerce (ONDC) is _____ (Select the most appropriate option from among the following.)",
    "o": [
      "A private non profit Section 8 company",
      "A Government Company",
      "A joint venture of select private banks.",
      "A public-private partnership infrastructure."
    ],
    "a": 0
  },
  {
    "q": "Remittance under National Electronic Fund Transfer (NEFT) scheme through internet baking can be made _____ (Select the most appropriate option from among the following.)",
    "o": [
      "From 7.00 AM to 5.00 PM only.",
      "From 7.00 AM to 8.00 PM only.",
      "At any time during bank working day.",
      "At any time and on any day."
    ],
    "a": 3
  },
  {
    "q": "while effective communication is important for financial counselling, it requires which of the following? (i) Structuring the counselling relationship (ii) establishing rapport (iii) dealing with conflict",
    "o": [
      "(i) only",
      "(i) and (ii) only",
      "(ii) and (iii) only",
      "(i), (ii), and (iii) only."
    ],
    "a": 3
  },
  {
    "q": "Before a loan account turns into an NPA, banks are required to identify incipient stress in the account by creating _____ (Select the most appropriate option from among the following.",
    "o": [
      "\"look after\" category.",
      "\"bad account\" category",
      "\"Irregular category\"",
      "\"Special Mention account\" category."
    ],
    "a": 3
  },
  {
    "q": "A bank will not disclose the affairs of the customer in the which one of the following circumstances.? (Select the most appropriate option from among the following.",
    "o": [
      "When the information is called under law.",
      "When there is express or implied consent of the customer.",
      "When the Central / State Govt. official directs the bank in writing to do so.",
      "When a bank is bound to disclose in public interest."
    ],
    "a": 2
  },
  {
    "q": "The Ombudsman under the Integrated Ombudsman Scheme is _____ (Select the most appropriate option from among the following.",
    "o": [
      "Appointed by Govt. of India.",
      "A Quasi Judicial Authority.",
      "Appointed for a period not exceeding two years at a time.",
      "Empowered to pass an Award directing payment by way of compensation an amount which is not more than consequential loss suffered by the complainant or Rupees 10 lakhs whichever is lower."
    ],
    "a": 1
  },
  {
    "q": "The dispute between the bank and the customer that can be brought before the Ombudsman, can be _____ (Select the most appropriate option from among the following.",
    "o": [
      "Not more than the value of Rs 50,000.",
      "Not more than the value of Rs 1 Lakh.",
      "Not more than the value of Rs 5 lakhs.",
      "Of any amount."
    ],
    "a": 3
  },
  {
    "q": "Reserve Bank of India is _____ (Select the most appropriate option from among the following.",
    "o": [
      "The Central Bank of the country.",
      "A Development Bank.",
      "A separate wing of Finance Ministry of the Central Government.",
      "A Public Sector Bank."
    ],
    "a": 0
  },
  {
    "q": "RBI has prescribed that _____ (i) no branch counter should remain un-attended during business hours (ii) employees should reach branch at least 15 minutes before the commencement of working hours (iii) all the customers entering the banking hall before the close of business hours should be attended to _____ (Select the most appropriate option from among the following.)",
    "o": [
      "(ii) only",
      "(i) and (ii) only",
      "(i) and (iii) only",
      "(i), (ii) and (iii)"
    ],
    "a": 2
  },
  {
    "q": "Financial Action Task Force (FATF) is _____ (Select the most appropriate option from among the following.)",
    "o": [
      "Formed by the Union Finance Ministry.",
      "Formed by RBI to handle money laundering cases.",
      "An International Inter-government body.",
      "A wing of Enforcement Directorate (ED) who handles money laundering cases."
    ],
    "a": 2
  },
  {
    "q": "Which of the following statements is incorrect in respect of Self Help Groups (SHGs)?",
    "o": [
      "These are small formal groups.",
      "Each group consists of 10-12 invididuals.",
      "Its members join the group voluntarily and they should be homogenous with respect to social and economic background.",
      "The main aim of the group is to promote savings habit among members and manage resources for the benefit of the group members."
    ],
    "a": 0
  },
  {
    "q": "\"Bulk Deposits\" of Scheduled Commercial banks (excluding Regional Rural Banks) and Small Finance Banks means _____ (Select the most appropriate option from among the following.)",
    "o": [
      "Single deposit of Rs 15 lakhs or more.",
      "Single term deposit of Rs 50 lakhs or more.",
      "Single term deposit of Rs 1 crore or more.",
      "Single term deposit of Rs 2 crore and above."
    ],
    "a": 1
  },
  {
    "q": "The National Centre for Financial Education has been set up by _____ (Select the most appropriate option from among the following.)",
    "o": [
      "Govt. of India",
      "All Scheduled Banks",
      "All Public Sector Banks",
      "All the financial sector Regulators."
    ],
    "a": 3
  },
  {
    "q": "Prime Minister Jeevan Jyoti Bima Yojana is a/an _____ (Select the most appropriate option from among the following.)",
    "o": [
      "Term Life Insurance Policy",
      "Endowment Insurance Policy",
      "Unit Linked Insurance Policy",
      "Whole Life Insurance Policy."
    ],
    "a": 0
  },
  {
    "q": "Jan Samarth Portal is an online platform for _____ (Select the most appropriate option from among the following.)",
    "o": [
      "Opening new deposit account",
      "Opening new PPF account",
      "Directly connecting Lenders with beneficiaries.",
      "Making payments of utility bills."
    ],
    "a": 2
  },
  {
  "q": "If an account holder uses ATM card to withdraw cash but cash is not dispensed and account is debited, the debit should be reversed by the bank within:",
  "o": ["Immediately", "Within 7 days", "Within 5 working days", "Within 10 working days"],
  "a": 2
},
{
    "q": "Mobile wallet _____ (Select the most appropriate option from among the following.)",
    "o": [
      "Works on the line of Credit card.",
      "Works on the line of Debit card.",
      "Is a way to carry cash in digital format.",
      "Can be used on ATMs also."
    ],
    "a": 2
  },
  {
    "q": "If a bank refuses to accept cash over the counter and asks the customer to deposit it in ATM / Cash deposit machine _____ (Select the most appropriate option from among the following.)",
    "o": [
      "It is irregular for the bank.",
      "It is lawful.",
      "No banking law prohibits or permits the bank to do so.",
      "The bank can do so only citing reasons of non-space in cash storages."
    ],
    "a": 0
  },
  {
    "q": "Deposit Insurance and Credit Guarantee Corporation (DICGC) provides deposit insurance to depositors _____ (Select the most appropriate option from among the following.)",
    "o": [
      "Of all the banks regulated by RBI",
      "Of all banks excepting Cooperative banks.",
      "Of all banks excepting cooperative banks and regional rural banks.",
      "Which is voluntary for banks to take it or not."
    ],
    "a": 0
  },
  {
    "q": "The cardinal principles of lending include --------(i) safety of funds (ii) liquidity (iii) diversification of risk (iv) security",
    "o": [
      "(i) and (ii) only",
      "(ii) and (iii) only.",
      "(iii) and (iv) only.",
      "(i), (ii), (iii) and (iv) only."
    ],
    "a": 3
  },
  {
    "q": "Development Financial Institutions (DFIs) provide _____ (Select the most appropriate option from among the following.)",
    "o": [
      "Guidance to the banks in its lending operations.",
      "Credit guarantee to the banks for its lending operations",
      "Refinance to banks for its lending operations.",
      "Technology system support to banks."
    ],
    "a": 2
  },
  {
    "q": "If an account holder gets enrolled voluntarily through electronic means, then _____ (Select the most appropriate option from among the following.)",
    "o": [
      "The commission payable to Business Correspondent would not change.",
      "The commission payable to Business Correspondents will be passed on to the branch.",
      "The commission payable to the Business Correspondents will be reduced from the total premium and thus the account holder saves this amount.",
      "The Business Correspondent will get half of the prescribed commission."
    ],
    "a": 2
  },
  {
    "q": "Pink label ATMs _____ (Select the most appropriate option from among the following.)",
    "o": [
      "Are provided for share transactions.",
      "Are dedicated to promote agriculture banking transactions.",
      "Are used for online purchase.",
      "Are dedicated to promote banking transactions by women."
    ],
    "a": 3
  },
  {
    "q": "Which one of the following is not a main cause for Customer Complaints? (Select the most appropriate option from among the following.)",
    "o": [
      "Lack of customer comfort facilities like sitting arrangement, filtered drinking water, cooling, etc.",
      "Attitudinal aspects while dealing with the customers.",
      "Inadequate arrangements made to handle the volume of work.",
      "Gap standards."
    ],
    "a": 3
  },
  {
    "q": "The definition of \"Person\" for the purpose of KYC norms includes _____ (i) an individual (ii) Company (iii) a firm (iv) a Hindu Undivided Family _____ (Select the most appropriate option from among the following.)",
    "o": [
      "(i) only",
      "(i) and (iv) only",
      "(i) (ii) and (iv) only",
      "(i) (ii) (iii) and (iv)"
    ],
    "a": 3
  },
  {
    "q": "In accounting terms a \"journal\" means _____ (Select the most appropriate option from among the following.)",
    "o": [
      "A monthly statement of all accounts balances.",
      "A book of final entry.",
      "A daily record of all business transactions.",
      "A reconciliation statement."
    ],
    "a": 2
  },
  {
    "q": "All domestic commercial banks are mandated to achieve _____ target of Priority Sector lending as prescribed by RBI. _____ (Select the most appropriate option from among the following.)",
    "o": [
      "20%",
      "25%",
      "30%",
      "40%"
    ],
    "a": 3
  },
  {
    "q": "Persuasive skill in recovery of loan is built on _____ (Select the most appropriate option from among the following.)",
    "o": [
      "Putting heavy pressure on the defaulting borrower through his relatives and known persons.",
      "Establishing a good rapport and winning the trust of the defaulting borrower.",
      "The principle of creating a scene of artificial threating.",
      "Visiting the residence of defaulting borrower continuously after a gap of two or three days."
    ],
    "a": 1
  },
  {
    "q": "The repayment of term loan component under Kisan Credit Card Scheme may be done depending upon the type of activity/investment.. _____ (Select the most appropriate option from among the following.)",
    "o": [
      "Normally within 5 years.",
      "Maximum 3 years.",
      "Maximum 5 years.",
      "Maximum 10 years."
    ],
    "a": 2
  },
  {
    "q": "If principal or interest payment is not overdue between 61 – 90 days, it should be categorized _____ (Select the most appropriate option from among the following.)",
    "o": [
      "SMA-0",
      "SMA-1",
      "SMA-2",
      "None of the above."
    ],
    "a": 2
  },
  {
    "q": "Banks act as financial intermediaries between the _____ (Select the most appropriate option from among the following.)",
    "o": [
      "Savers or investors of funds and the users of funds",
      "Rich and poor people.",
      "Savers and Central/State governments.",
      "Money lenders and farmers."
    ],
    "a": 0
  },
  {
    "q": "Banking services under 'Doorstep Banking' include _____ (i) Pick up of cash and instruments against receipt (ii) Delivery of cash against withdrawal from bank (iii) Delivery of demand Drafts (iv) Submission of Life certificate / KYC documents _____ (Select the most appropriate option from among the following.)",
    "o": [
      "(i) and (ii) only",
      "(i), (ii) and (iii) only",
      "(ii) and (iii) only",
      "(i), (ii), (iii) and (iv) only."
    ],
    "a": 3
  },
  {
    "q": "Pradhan Mantri Jan Dhan Yojana (PMJDY) has in built Accidental Insurance cover of Rs 2.00 lakhs linked. _____ (Select the most appropriate option from among the following.)",
    "o": [
      "With Rupay card manager by NPCI",
      "Through United India Insurance Co. payment of Rs 12 per annum",
      "With any debit card issued by a bank",
      "With the age of depositor and he/she should be above 21 years."
    ],
    "a": 0
  },
  {
    "q": "Which one of the following statements is incorrect in respect of Stored Value card?",
    "o": [
      "The monetary value is stored on the card itself.",
      "The card issuer is a service provider.",
      "It is issued by a bank.",
      "No charges are levied on adding value to the card."
    ],
    "a": 3
  },
  {
    "q": "General Purpose Card is used for _____ (Select the most appropriate option from among the following.)",
    "o": [
      "Personal Identification",
      "Home Address proof.",
      "Office Address Proof",
      "Paying for goods and Services."
    ],
    "a": 3
  },
  {
    "q": "The operational area of Local Area Bank may be _____ (Select the most appropriate option from among the following.)",
    "o": [
      "The whole State in which it has its Head Quarter.",
      "Maximum of three geographically contiguous districts.",
      "Maximum any three districts of the concerned State.",
      "The districts approved by the Concerned State Governments."
    ],
    "a": 1
  },
  {
    "q": "There are several benefits of Central Bank Digital Currency (CBDC) including (i) Less currency circulation (ii) Financial Inclusion (iii) Authorized digital payment system (iv) Efficient System. (Select the most appropriate option from among the following.)",
    "o": [
      "(iii) and (iv) only",
      "(ii), (iii) and (iv) only",
      "(i), (iii) and (iv) only",
      "(i), (ii), (iii) and (iv)."
    ],
    "a": 3
  },
  {
    "q": "What is the form of security that banks obtain when they extend vehicle loans for taxis? (Select the most appropriate option from among the following.)",
    "o": [
      "Mortgage of immovable property",
      "Third Party Guarantee",
      "Only Hypothecation of vehicle purchased in favour of the bank.",
      "Hypothecation of vehicle purchased in favour of the bank and third party guarantee."
    ],
    "a": 2
  },
  {
    "q": "The features of good communication do not include _____ (Select the most appropriate option from among the following.)",
    "o": [
      "Active listening",
      "Positivity",
      "Empathy",
      "Spontaneous reply."
    ],
    "a": 3
  },
  {
    "q": "RBI has stipulated a charter of customer rights which does not include _____ (Select the most appropriate option from among the following.)",
    "o": [
      "Right to fair treatment",
      "Right to Privacy",
      "Right to suitability",
      "Right to meet executive personally."
    ],
    "a": 3
  },
  {
    "q": "Registering with an Account Aggregator (AA) is _____ for consumers _____ (Select the most appropriate option from among the following.)",
    "o": [
      "Mandatory",
      "fully voluntary",
      "Irrevocable",
      "Statutory"
    ],
    "a": 1
  },
  {
    "q": "Escalation Matrix is used in complaints. It is _____ (Select the most appropriate option from among the following.)",
    "o": [
      "A procedure to segregate the complaints subject wise at the receiving level.",
      "A tool used by regulated entities to manage the escalation process.",
      "Used when the complaint is of a serious nature.",
      "Used at Dy. Ombudsman level when he is unable to solve the issue of complainant."
    ],
    "a": 1
  },
  {
    "q": "Periodic updation of KYC is done at least once in _____ from the date of opening / last updation in case of low-risk customer. _____ (Select the most appropriate option from among the following.)",
    "o": [
      "3 years",
      "5 years",
      "8 years",
      "10 years."
    ],
    "a": 3
  },
  {
    "q": "The Primary function of a bank is _____ (Select the most appropriate option from among the following.)",
    "o": [
      "To provide loans to the weaker sections of the society.",
      "To provide remittance and payment facilities to individuals / business enterprise / Governments",
      "Facilitate currency circulation in the country.",
      "Accept deposits and lending money."
    ],
    "a": 3
  },
  {
    "q": "The Depositor Education and Awareness Fund can be utilized by RBI (Select the most appropriate option from among the following.)",
    "o": [
      "For Promotion of depositors interest.",
      "Deposit Insurance",
      "Financial Inclusion",
      "None of the above."
    ],
    "a": 0
  },
  {
    "q": "RBI has stipulated \"Officially Valid Documents\" for the purpose of (Select the most appropriate option from among the following.)",
    "o": [
      "Branch licencing",
      "Small loans",
      "Verifying identity and residential address of a customer",
      "taking refinance from RBI."
    ],
    "a": 2
  },
  {
    "q": "For the purpose of classifying an account as inoperative (Select the most appropriate option from among the following.)",
    "o": [
      "Only credit transactions are taken into consideration",
      "Both the types of transactions i.e. debit as well as credit transactions induced at the instance of customer are taken into consideration.",
      "Transactions on account of standing instructions are not considered.",
      "Transactions in regard to the service charges or interest debited to the account are taken into consideration."
    ],
    "a": 0
  },
  {
    "q": "If a Business Correspondent does not comply with confidentiality aspects and related privacy laws, it is termed as (Select the most appropriate option from among the following.)",
    "o": [
      "Operations risk",
      "Strategic Risk",
      "Compliance Risk",
      "Reputational Risk"
    ],
    "a": 2
  },
  {
    "q": "When NFC technology is included in a mobile phone (Select the most appropriate option from among the following.)",
    "o": [
      "It's storing capacity is enhanced.",
      "It's RAM is enhanced drastically",
      "It can enable remittance to any customer of any bank.",
      "It can be embedded within SIM Card"
    ],
    "a": 3
  },
  {
    "q": "In cash credit account in the name of XYZ, the interest has been debited regularly for 8 months but not paid, although the account is within the limit and drawing power. The account will be classified as (Select the most appropriate option from among the following.)",
    "o": [
      "Standard",
      "Sub Standard",
      "Doubtful",
      "Loss."
    ],
    "a": 1
  },
  {
    "q": "USSD (Unstructured Supplementary Service Data) based mobile banking does not offer (Select the most appropriate option from among the following.)",
    "o": [
      "Money Transfer",
      "Bill Payments",
      "Merchant Payments",
      "On boarding of new accounts."
    ],
    "a": 3
  },
  {
    "q": "Kisan Credit Cards Scheme aims at (Select the most appropriate option from among the following.)",
    "o": [
      "Providing need based and timely credit support to farmers.",
      "Providing credit to non farm activities.",
      "Providing credit at flexible and cost effective manner.",
      "All of the above."
    ],
    "a": 0
  },
  {
    "q": "It is not expected that the Business Correspondent / Business Facilitators will perform what to the people residing in its operational area (Select the most appropriate option from among the following.)",
    "o": [
      "Companion",
      "Philosopher",
      "Guide",
      "Government representative."
    ],
    "a": 3
  },
  {
    "q": "The delivery of Financial Education comprises of (i) building skills (ii) increasing knowledge (iii) developing understanding (iv) building confidence (Select the most appropriate option from among the following.)",
    "o": [
      "(i) and (ii) only",
      "(i), (ii) and (iii) only",
      "(i), (ii) and (iv) only",
      "(i), (ii), (iii) and (iv)."
    ],
    "a": 3
  },
  {
    "q": "The annual premium for obtaining cover under Prime Minister Jeevan Jyoti Bima Yojana (PMJJBY) is area (Select the most appropriate option from among the following.)",
    "o": [
      "Rs 114",
      "Rs 228",
      "Rs 342",
      "Rs 436"
    ],
    "a": 3
  },
  {
    "q": "Soft skills are nothing but (Select the most appropriate option from among the following.)",
    "o": [
      "Relationship building towards the customer",
      "Knowing financial analysis.",
      "knowing tools & techniques",
      "Knowing computer programming."
    ],
    "a": 0
  },
  {
    "q": "If the out sourcing bank fails to implement appropriate oversight with regard to the activities outsourced to the Business Correspondent and it's sub-agents, it is termed as (Select the most appropriate option from among the following.)",
    "o": [
      "Operational Risk",
      "Strategic Risk",
      "Compliance Risk",
      "Reputational Risk"
    ],
    "a": 1
  },
  {
    "q": "Bharat Interface for Money is (Select the most appropriate option from among the following.)",
    "o": [
      "Meant only for making direct bank to bank payments instantly.",
      "For sending and collecting money to any person, paying bills, recharging mobile phone etc.",
      "Meant only for making payment of utility bills and recharge of mobile phones",
      "Used by banks for sending \"alert messages\"."
    ],
    "a": 1
  },
  {
    "q": "An account will be treated as Non Performing Asset (NPA), if it remained irregular for (Select the most appropriate option from among the following.)",
    "o": [
      "90 days in all types of agricultural loans.",
      "Two crop seasons in all types of agricultural loans.",
      "Two crop seasons in agricultural loans which have been extended for short duration crops.",
      "90 days in all types of indirect agricultural loan accounts."
    ],
    "a": 2
  },
  {
    "q": "RBI has stipulated that banks should offer their savings bank customers free transactions at Bank's own ATMs in a Metro City (Mumbai, New Delhi, Chennai, Kolkata, Bengaluru and Hyderabad in a month. (Select the most appropriate option from among the following.)",
    "o": [
      "Minimum of 3 transactions.",
      "Minimum of 4 transactions.",
      "Minimum of 5 transactions.",
      "Minimum of 7 transactions."
    ],
    "a": 2
  },
   {
    "q": "RBI has stipulated that banks should offer their savings bank customers free transactions at other Bank's ATMs in a Metro City (Mumbai, New Delhi, Chennai, Kolkata, Bengaluru and Hyderabad in a month. (Select the most appropriate option from among the following.)",
    "o": [
      "Minimum of 3 transactions.",
      "Minimum of 4 transactions.",
      "Minimum of 5 transactions.",
      "Minimum of 7 transactions."
    ],
    "a": 0
  },
  {
    "q": "An FDR has been issued in the name of 'A' and 'B' with the operating instructions of 'Former and Survivor'. 'A' has died. Now, 'B' wants its pre-mature payment. The bank will (Select the most appropriate option from among the following.)",
    "o": [
      "Refuse its payment to 'B'",
      "Make payment to 'B'",
      "Make payment to 'B' with the concurrence of legal heirs of 'A'",
      "Make payment to 'B' and legal heirs of 'A' jointly if the legal heirs of 'A' submit the legal heir certificate."
    ],
    "a": 2
  },
  {
    "q": "The credit score given by a Credit Information Company which is a 'snapshot' of a consumer's credit report calculated through advanced analytics, turns the information into a three digit number ranging from (Select the most appropriate option from among the following.)",
    "o": [
      "100 to 700",
      "200 to 800",
      "300 to 900",
      "400 to 900."
    ],
    "a": 2
  },
  {
    "q": "Borrower Profile Technique (Select the most appropriate option from among the following.)",
    "o": [
      "Helps in recovery of overdues.",
      "Helps in post disbursement follow up.",
      "Helps in determining the suitability of the activities chosen by a prospective borrower.",
      "Helps in complying with KYC requirements."
    ],
    "a": 2
  },
  {
    "q": "Soft skills do not include (Select the most appropriate option from among the following.)",
    "o": [
      "Technical Knowledge",
      "Communication",
      "Self-motivation",
      "Responsibility."
    ],
    "a": 0
  },
  {
    "q": "What is the cost of money borrowed from a bank known as ? (Select the most appropriate option from among the following.)",
    "o": [
      "Commission",
      "Interest",
      "Charges",
      "premium"
    ],
    "a": 1
  },
  {
    "q": "Now-a-days banking services are (Select the most appropriate option from among the following.)",
    "o": [
      "Costly and luxurious",
      "Necessary of life for everyone.",
      "used only by economically middle/lower middle class persons",
      "used by rick people only."
    ],
    "a": 1
  },
  {
    "q": "The features of Civil Society Organisations (CSO) in the context of Financial Inclusion is (Select the most appropriate option from among the following.)",
    "o": [
      "NGOs",
      "Non State,, not-for-profit, voluntary entities formed by people.",
      "SHGs",
      "State owned, not-for-profit entities."
    ],
    "a": 1
  },
  {
    "q": "Who among the following customers is not eligible for availing the benefits of Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)? (Select the most appropriate option from among the following.)",
    "o": [
      "NRI Customers",
      "Customers attaining the age of 49 years.",
      "Customer at the age of 16 years",
      "Customers who enrolled at the age of 45 years and paying regularly but now his age is 51 years."
    ],
    "a": 3
  },
  {
    "q": "Which one of the following statements is incorrect in respect of Bharat QR Code?",
    "o": [
      "It can be used to P2M digital payments.",
      "It is as secure as making a payment via UPI.",
      "One can use any of apps that supports the Bharat QR.",
      "The payment mode in QR is only through UPI."
    ],
    "a": 3
  },
  {
    "q": "A gift card is a type of (Select the most appropriate option from among the following.)",
    "o": [
      "Debit card",
      "Credit card",
      "Prepaid Card",
      "Charge card."
    ],
    "a": 2
  },
  {
    "q": "Financial statements include (i) Balance Sheet (ii) Profit and Loss Account (iii) Account Policies (iv) Notes to the account (Select the most appropriate option from among the following.)",
    "o": [
      "(i) only",
      "(i) and (ii) only",
      "(i), (ii) and (iii) only",
      "(i), (ii) and (iv) only."
    ],
    "a": 3
  },
  {
    "q": "Which one of the following is incorrect in the case of Near Field Communications (NFC) mobile contact-less card technology.",
    "o": [
      "Full traceability and audit trail of the transaction is maintained.",
      "Deposit and withdrawal transactions are instantly settled between the customer account and Business Correspondents account as both accounts are in the same system.",
      "Debit/Credit card can not be used for transaction.",
      "Customer account and Business Correspondent's working capital account is centrally held with the bank."
    ],
    "a": 2
  },
  {
    "q": "Which one of the following is incorrect regarding Radio Frequency Identification (RFI)?",
    "o": [
      "It is a method of listening songs and music.",
      "It is used for tracking goods by means of tags which transmit a radio signal.",
      "It is a method which is used for contactless smart cards.",
      "It is a method which has high-end security features."
    ],
    "a": 0
  },
  {
    "q": "In case of charge card, payment is made by the user (Select the most appropriate option from among the following.)",
    "o": [
      "Instantly",
      "at one go",
      "in instalments",
      "in instalments after a grace period."
    ],
    "a": 1
  },
  {
    "q": "The Kisan Credit Card beneficiaries can be issued _____ compatible for use in ATMs / hand held machines. (Select the most appropriate option from among the following.)",
    "o": [
      "Smart card",
      "Debit card",
      "General Credit Card",
      "Any of (A) and (B) or both."
    ],
    "a": 3
  },
  {
    "q": "Banks ensure that demand drafts of Rs _____ and above are issued invariably, with \"Account Payee\" crossing. (Select the most appropriate option from among the following.)",
    "o": [
      "10,000",
      "20,000",
      "25,000",
      "50,000"
    ],
    "a": 1
  },
  {
    "q": "'*99#' service of banks can be availed by a customer (Select the most appropriate option from among the following.)",
    "o": [
      "With USSD solution through any mobile on GSM network.",
      "With USSD solution through smart mobile phone on GSM network.",
      "With USSD solution through smart mobile phone having Android system on GSM network.",
      "With USSD solution through smart mobile phone having IOS on GSM network."
    ],
    "a": 0
  },
  {
    "q": "Digital Rupee (eRupee-R) may play a big role in (i) providing a safe and reliable means of payment for direct transfer programs of government welfare programmes (ii) promoting inclusive and innovative payments (iii) reducing cost of cash management (iv) reducing inflation significantly.",
    "o": [
      "(i) and (ii) only",
      "(i), (ii) and (iii) only",
      "(i) and (iv) only",
      "(i), (ii), (iii) and (iv)."
    ],
    "a": 1
  },
  {
    "q": "Which one of the following statements is incorrect in respect of virtual cards.?",
    "o": [
      "Virtual debit/Credit/Prepaid card is a randomly generated cad number associated with the user's actual card for use online.",
      "It eliminates the risk of physical theft, counterfeiting, skimming, phishing etc.",
      "No limit of spending is fixed in virtual card.",
      "Its use is convenient, flexible and secure."
    ],
    "a": 2
  },
  {
    "q": "Accrual concept of accounting denotes that (Select the most appropriate option from among the following.)",
    "o": [
      "Income is recorded as per accrual value whereas expenses is shown as per the actual payment.",
      "Income is recorded as per the actual receipt where as expense is shown as per accrual date.",
      "Income and expenses are recorded as and when they become due, and not when there are actually received or paid.",
      "The unrecoverable charges on advances should not be written off because they were taken into income in the previous balance sheets as and when accrued."
    ],
    "a": 2
  },
  {
    "q": "A student has been sanctioned education loan of Rs 8 lakh for studies in India. What type of securities can bank demand to secure the loan? (Select the most appropriate option from among the following.)",
    "o": [
      "No collateral is needed.",
      "Only Co-obligation of parents.",
      "Co-obligation of parents and tangible collateral security/third party guarantee.",
      "Only Collateral security/third party guarantee."
    ],
    "a": 2
  },
  {
    "q": "Cash Reserve Ratio (CRR) indicates the percentage of cash reserve that banks are required to keep with Reserve Bank of India as a proportion of their (Select the most appropriate option from among the following.)",
    "o": [
      "Net demand and time liabilities.",
      "Gross demand and time liabilities.",
      "Total advances minus non-performing assets.",
      "Total demand deposits."
    ],
    "a": 0
  },
  {
    "q": "The concept of ethics may include (i) it is a set of moral standards and values accepted society guides human behaviour (ii) it holds people from taking decisions that may be harmful other or the society (iii) its principles may differ according to the circumstances (Select the most appropriate option from among the following.)",
    "o": [
      "(i) only",
      "(i) and (iii) only",
      "(ii) and (iii) only",
      "(i) and (ii) only."
    ],
    "a": 3
  },
  {
    "q": "In the case of White Label ATMs (Select the most appropriate option from among the following.)",
    "o": [
      "They are those which are set up, owned and operated by non-banks.",
      "The dispute resolution is done through the agency which handles ATM switch.",
      "Cash management is done by the banking system.",
      "User is required to pay a nominal charge on every hit."
    ],
    "a": 0
  },
  {
    "q": "Aadhaar enabled Payment System (AePS) enables (i) Cash withdrawal (ii) Cash deposit (iii) Aadhaar to Aadhaar Funds Transfer (iv) Enquiry (Select the most appropriate option from among the following.)",
    "o": [
      "(i), (iii) and (iv) only",
      "(ii) and (iii) only",
      "(i), (iii) and (iv) only",
      "(i), (ii), (iii) and (iv)."
    ],
    "a": 3
  },
  {
    "q": "Atal Pension Yojana (APY) is mainly focused on the workers of (Select the most appropriate option from among the following.)",
    "o": [
      "Unorganized sector",
      "Quasi-Government companies",
      "Central Government Corporations",
      "State Government Corporations."
    ],
    "a": 0
  },
  {
    "q": "The activities of banking sector are supervised, controlled and regulated by (Select the most appropriate option from among the following.)",
    "o": [
      "Govt. of India",
      "NABARD.",
      "RBI",
      "Banking Ombudsmen."
    ],
    "a": 2
  },
  {
    "q": "The Reserve Bank of India in its annual policy statement of April 2005 recognized the problem on financial exclusion and initiated several steps aimed at promotion of financial inclusion, which however did not include (Select the most appropriate option from among the following.)",
    "o": [
      "Service Area Approach",
      "General Credit Card",
      "Simplified KYC norms",
      "Basic Savings Bank Deposit Account."
    ],
    "a": 0
  },
  {
    "q": "Corporate Governance includes (i) the structure through which objectives of a company are set and means of attaining the objectives (ii) monitoring performance of the company (iii) defines the way authority as well as responsibilities are allocated (iv) setting pricing policy of products and services to ensure company's growth. (Select the most appropriate option from among the following.)",
    "o": [
      "(i) and (ii) only",
      "(ii) and (iv) only",
      "(iii) and (iv) only",
      "(i), (ii), (iii) and (iv)"
    ],
    "a": 3
  },
  {
    "q": "Banks will grant loans under MUDRA Scheme (Select the most appropriate option from among the following.)",
    "o": [
      "After obtaining third party guarantee only.",
      "After obtaining group guarantee",
      "After obtaining mortgage of immovable property if the amount of loan is above Rs 5 lakh",
      "Without insisting for collateral security if the loan amount is less than Rs 10 lakhs."
    ],
    "a": 3
  },
  {
    "q": "'A' and 'B', joint account holders wish to nominate \"X\" and \"Y\" in their deposit account. (Select the most appropriate option from among the following.)",
    "o": [
      "It can be accepted",
      "Only one can be appointed as nominee.",
      "Both \"X\" and \"Y\" should agree to this.",
      "None of the above."
    ],
    "a": 2
  },
  {
    "q": "A schedule bank enjoys certain special status which include (i) availing refinance facilities from RBI (ii) becoming member of the Clearing House (iii) having currency chest facility. (Select the most appropriate option from among the following.)",
    "o": [
      "(i) and (ii) only",
      "(ii) and (iii) only",
      "(i) and (iii) only",
      "(i), (ii) and (iii)."
    ],
    "a": 3
  },
  {
    "q": "A Business Facilitator can not do which of the following? (Select the most appropriate option from among the following.)",
    "o": [
      "Handling of cash on behalf of bank.",
      "Identification of borrowers and fitment of activities.",
      "Preliminary verification of primary information about the loan applicant.",
      "Post sanction monitoring."
    ],
    "a": 0
  },
  {
    "q": "The area of operations of a Regional Rural Bank (Select the most appropriate option from among the following.)",
    "o": [
      "Is restricted to a few districts.",
      "Is unrestricted.",
      "Depends upon the wishes of the respective State Governments.",
      "Depends upon the business viability and consent of the respective sponsor bank."
    ],
    "a": 0
  }
];

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

  /* ========= SUBMIT ========= */
  quizForm.addEventListener("submit", e => {
    e.preventDefault();
    clearInterval(timerInterval);

    const name = nameInput.value.trim();
    if (!name) {
      alert("Enter student name");
      return;
    }

    let score = 0;

    questions.forEach((item, i) => {
      document.getElementsByName(`q${i}`).forEach(o => {
        const val = Number(o.value);

if (val === item.a) {
  o.parentElement.style.color = "green";
  o.parentElement.style.fontWeight = "bold";
}

if (o.checked && val !== item.a) {
  o.parentElement.style.color = "red";
}

if (o.checked && val === item.a) score++;

o.disabled = true;
      });
    });

    const percent = ((score / questions.length) * 100).toFixed(2);
    const result = percent >= 50 ? "PASS" : "FAIL";

 
fetch("https://script.google.com/macros/s/AKfycbxdGfQCCd-e3_tq9qN1_NiVqWFtCBKELGu-MLsyK2xkdmETKKTF7Jgy-GXYVLROajgtyg/exec", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
 body: JSON.stringify({
    name: name,
    score: score,
    percent: percent,
    result: result
  })
});
   
 resultDiv.innerHTML = `
  <hr>
  <b>Name:</b> ${name}<br>
  <b>Score:</b> ${score}/${questions.length}<br>
  <b>Percentage:</b> ${percent}%<br>
  <b>Result:</b> ${result}
`;

  });

});
































