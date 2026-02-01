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
const questionsBlock1 ="
        },
        answer: "D"
    },
    {
        question: "13 The dispute between the bank and the customer that can be brought before the Ombudsman, can be (Select the most appropriate option from among the following.",
        options: {
            A: "Not more than the value of Rs 5 lakhs.",
            B: "Not more than the value of Rs 1 Lakh.",
            C: "Not more than the value of Rs 50,000.",
            D: "Of any amount."
        },
        answer: "D"
    },
    {
        question: "14 Reserve Bank of India is (Select the most appropriate option from among the following.",
        options: {
            A: "A Development Bank.",
            B: "A Public Sector Bank.",
            C: "The Central Bank of the country.",
            D: "A separate wing of Finance Ministry of the Central Government."
        },
        answer: "C"
    },
    {
        question: "15 RBI has prescribed that (i) no branch counter should remain un-attended during business hours (ii) employees should reach branch at least 15 minutes before the commencement of working hours (iii) all the customers entering the banking hall before the close of business hours should be attended to (Select the most appropriate option from among the following.)",
        options: {
            A: "(i), (ii) and (iii)",
            B: "(i) and (ii) only",
            C: "(ii) only",
            D: "(i) and (iii) only"
        },
        answer: "D"
    },
    {
        question: "16 Financial Action Task Force (FATF) is (Select the most appropriate option from among the following.)",
        options: {
            A: "A wing of Enforcement Directorate (ED) who handles money laundering cases.",
            B: "Formed by the Union Finance Ministry.",
            C: "An International Inter-government body.",
            D: "Formed by RBI to handle money laundering cases."
        },
        answer: "C"
    },
    {
        question: "17 Which of the following statements is incorrect in respect of Self Help Groups (SHGs)?",
        options: {
            A: "These are small formal groups.",
            B: "Its members join the group voluntarily and they should be homogenous with respect to social and economic background.",
            C: "Each group consists of 10-12 invididuals.",
            D: "The main aim of the group is to promote savings habit among members and manage resources for the benefit of the group members."
        },
        answer: "A"
    },
    {
        question: "18 \"Bulk Deposits\" of Scheduled Commercial banks (excluding Regional Rural Banks) and Small Finance Banks means (Select the most appropriate option from among the following.)",
        options: {
            A: "Single term deposit of Rs 15 lakhs or more.",
            B: "Single term deposit of Rs 2 crore and above.",
            C: "Single term deposit of Rs 1 crore or more.",
            D: "Single term deposit of Rs 50 lakhs or more."
        },
        answer: "B"
    },
    {
        question: "19 The National Centre for Financial Education has been set up by (Select the most appropriate option from among the following.)",
        options: {
            A: "All Public Sector Banks",
            B: "All Scheduled Banks",
            C: "Govt. of India",
            D: "All the financial sector Regulators."
        },
        answer: "D"
    },
    {
        question: "20 Prime Minister Jeevan Jyoti Bima Yojana is a/an (Select the most appropriate option from among the following.)",
        options: {
            A: "Term Life Insurance Policy",
            B: "Endowment Insurance Policy",
            C: "Whole Life Insurance Policy.",
            D: "Unit Linked Insurance Policy"
        },
        answer: "A"
    },
    {
        question: "21 Jan Samarth Portal is an online platform for (Select the most appropriate option from among the following.)",
        options: {
            A: "Opening new deposit account",
            B: "Making payments of utility bills.",
            C: "Opening new PPF account",
            D: "Directly connecting Lenders with beneficiaries."
        },
        answer: "D"
    },
    {
        question: "22 If an account holder uses ATM card to withdraw cash, but the system has not dispensed cash but his account is debited. The debit to be reversed by the bank. (Select the most appropriate option from among the following.)",
        options: {
            A: "",
            B: "",
            C: "",
            D: ""
        },
        answer: "A" // Answer is actually an action not an option from the PDF
    },
    {
        question: "23 Mobile wallet (Select the most appropriate option from among the following.)",
        options: {
            A: "Works on the line of Credit card.",
            B: "Can be used on ATMs also.",
            C: "Works on the line of Debit card.",
            D: "Is a way to carry cash in digital format."
        },
        answer: "D"
    },
    {
        question: "24 If a bank refuses to accept cash over the counter and asks the customer to deposit it in ATM / Cash deposit machine (Select the most appropriate option from among the following.)",
        options: {
            A: "No banking law prohibits or permits the bank to do so.",
            B: "It is lawful.",
            C: "It is irregular for the bank.",
            D: "The bank can do so only citing reasons of non-space in cash storages."
        },
        answer: "C"
    },
    {
        question: "25 Deposit Insurance and Credit Guarantee Corporation (DICGC) provides deposit insurance to depositors (Select the most appropriate option from among the following.)",
        options: {
            A: "Of all banks excepting cooperative banks and regional rural banks.",
            B: "Which is voluntary for banks to take it or not.",
            C: "Of all banks excepting Cooperative banks.",
            D: "Of all the banks regulated by RBI"
        },
        answer: "D"
    }
];
const questionsBlock2 = [
    {
        question: "26 The cardinal principles of lending include --------(i) safety of funds (ii) liquidity (iii) diversification of risk (iv) security",
        options: {
            A: "(i), (ii), (iii) and (iv) only.",
            B: "(i) and (ii) only",
            C: "(ii) and (iii) only.",
            D: "(iii) and (iv) only."
        },
        answer: "A"
    },
    {
        question: "27 Development Financial Institutions (DFIs) provide (Select the most appropriate option from among the following.)",
        options: {
            A: "Guidance to the banks in its lending operations.",
            B: "Refinance to banks for its lending operations",
            C: "Credit guarantee to the banks for its lending operations",
            D: "Technology system support to banks."
        },
        answer: "B"
    },
    {
        question: "28 If an account holder gets enrolled voluntarily through electronic means, then (Select the most appropriate option from among the following.)",
        options: {
            A: "The commission payable to the Business Correspondents will be reduced from the total premium and thus the account holder saves this amount.",
            B: "The Business Correspondent will get half of the prescribed commission.",
            C: "The commission payable to Business Correspondent would not change.",
            D: "The commission payable to Business Correspondents will be passed on to the branch."
        },
        answer: "A"
    },
    {
        question: "29 Pink label ATMs (Select the most appropriate option from among the following.)",
        options: {
            A: "Are used for online purchase.",
            B: "Are dedicated to promote agriculture banking transactions.",
            C: "Are provided for share transactions.",
            D: "Are dedicated to promote banking transactions by women."
        },
        answer: "D"
    },
    {
        question: "30 Which one of the following is not a main cause for Customer Complaints? (Select the most appropriate option from among the following.)",
        options: {
            A: "Lack of customer comfort facilities like sitting arrangement, filtered drinking water, cooling, etc.",
            B: "Attitudinal aspects while dealing with the customers.",
            C: "Gap standards.",
            D: "Inadequate arrangements made to handle the volume of work."
        },
        answer: "C"
    },
    {
        question: "31 The definition of \"Person\" for the purpose of KYC norms includes (i) an individual (ii) Company (iii) a firm (iv) a Hindu Undivided Family (Select the most appropriate option from among the following.)",
        options: {
            A: "(i) only",
            B: "(i) (ii) and (iv) only",
            C: "(i) (ii) (iii) and (iv)",
            D: "(i) and (iv) only"
        },
        answer: "C"
    },
    {
        question: "32 In accounting terms a \"journal\" means (Select the most appropriate option from among the following.)",
        options: {
            A: "A book of final entry.",
            B: "A reconciliation statement.",
            C: "A monthly statement of all accounts balances.",
            D: "A daily record of all business transactions."
        },
        answer: "D"
    },
    {
        question: "33 All domestic commercial banks are mandated to achieve target of Priority Sector lending as prescribed by RBI. (Select the most appropriate option from among the following.)",
        options: {
            A: "25%",
            B: "20%",
            C: "40%",
            D: "30%"
        },
        answer: "C"
    },
    {
        question: "34 Persuasive skill in recovery of loan is built on (Select the most appropriate option from among the following.)",
        options: {
            A: "Establishing a good rapport and winning the trust of the defaulting borrower.",
            B: "Putting heavy pressure on the defaulting borrower through his relatives and known persons.",
            C: "The principle of creating a scene of artificial threating.",
            D: "Visiting the residence of defaulting borrower continuously after a gap of two or three days."
        },
        answer: "A"
    },
    {
        question: "35 The repayment of term loan component under Kisan Credit Card Scheme may be done depending upon the type of activity/investment.. (Select the most appropriate option from among the following.)",
        options: {
            A: "Maximum 10 years.",
            B: "Maximum 3 years.",
            C: "Normally within 5 years.",
            D: "Maximum 5 years."
        },
        answer: "D"
    },
    {
        question: "36 If principal or interest payment is not overdue between 61-90 days, it should be categorized (Select the most appropriate option from among the following.)",
        options: {
            A: "SMA-0",
            B: "SMA-1",
            C: "None of the above.",
            D: "SMA-2"
        },
        answer: "D"
    },
    {
        question: "37 Banks act as financial intermediaries between the (Select the most appropriate option from among the following.)",
        options: {
            A: "Savers and Central/State governments.",
            B: "Rich and poor people.",
            C: "Money lenders and farmers.",
            D: "Savers or investors of funds and the users of funds"
        },
        answer: "D"
    },
    {
        question: "38 Banking services under 'Doorstep Banking' include (i) Pick up of cash and instruments against receipt (ii) Delivery of cash against withdrawal from bank (iii) Delivery of demand Drafts (iv) Submission of Life certificate / KYC documents (Select the most appropriate option from among the following.)",
        options: {
            A: "(i), (ii), (iii) and (iv) only.",
            B: "(i) and (ii) only",
            C: "(ii) and (iii) only",
            D: "(i), (ii) and (iii) only"
        },
        answer: "A"
    },
    {
        question: "39 Pradhan Mantri Jan Dhan Yojana (PMJDY) has in built Accidental Insurance cover of Rs 2.00 lakhs linked. (Select the most appropriate option from among the following.)",
        options: {
            A: "Through United India Insurance Co. payment of Rs 12 per annum",
            B: "With Rupay card manager by NPCI",
            C: "With the age of depositor and he/she should be above 21 years.",
            D: "With any debit card issued by a bank"
        },
        answer: "B"
    },
    {
        question: "40 Which one of the following statements is incorrect in respect of Stored Value card?",
        options: {
            A: "It is issued by a bank.",
            B: "The monetary value is stored on the card itself.",
            C: "No charges are levied on adding value to the card.",
            D: "The card issuer is a service provider."
        },
        answer: "C"
    },
    {
        question: "41 General Purpose Card is used for (Select the most appropriate option from among the following.)",
        options: {
            A: "Personal Identification",
            B: "Office Address Proof",
            C: "Home Address proof.",
            D: "Paying for goods and Services."
        },
        answer: "D"
    },
    {
        question: "42 The operational area of Local Area Bank may be (Select the most appropriate option from among the following.)",
        options: {
            A: "The districts approved by the Concerned State Governments.",
            B: "Maximum any three districts of the concerned State.",
            C: "Maximum of three geographically contiguous districts.",
            D: "The whole State in which it has its Head Quarter."
        },
        answer: "C"
    },
    {
        question: "43 There are several benefits of Central Bank Digital Currency (CBDC) including (i) Less currency circulation (ii) Financial Inclusion (iii) Authorized digital payment system (iv) Efficient System. (Select the most appropriate option from among the following.)",
        options: {
            A: "(ii), (iii) and (iv) only",
            B: "(i) and (iv) only",
            C: "(i), (ii), (iii) and (iv).",
            D: "(i), (iii) and (iv) only"
        },
        answer: "C"
    },
    {
        question: "44 What is the form of security that banks obtain when they extend vehicle loans for taxis? (Select the most appropriate option from among the following.)",
        options: {
            A: "Hypothecation of vehicle purchased in favour of the bank and third party guarantee.",
            B: "Third Party Guarantee",
            C: "Mortgage of immovable property",
            D: "Only Hypothecation of vehicle purchased in favour of the bank."
        },
        answer: "D"
    },
    {
        question: "45 The features of good communication do not include (Select the most appropriate option from among the following.)",
        options: {
            A: "Positivity",
            B: "Spontaneous reply.",
            C: "Empathy",
            D: "Active listening"
        },
        answer: "B"
    },
    {
        question: "46 RBI has stipulated a charter of customer rights which does not include (Select the most appropriate option from among the following.)",
        options: {
            A: "Right to fair treatment",
            B: "Right to suitability",
            C: "Right to Privacy",
            D: "Right to meet executive personally."
        },
        answer: "D"
    },
    {
        question: "47 Registering with an Account Aggregator (AA) is for consumers (Select the most appropriate option from among the following.)",
        options: {
            A: "Mandatory",
            B: "Statutory",
            C: "fully voluntary",
            D: "Irrevocable"
        },
        answer: "C"
    },
    {
        question: "48 Escalation Matrix is used in complaints. It is (Select the most appropriate option from among the following.)",
        options: {
            A: "A procedure to segregate the complaints subject wise at the receiving level.",
            B: "Used when the complaint is of a serious nature.",
            C: "A tool used by regulated entities to manage the escalation process.",
            D: "Used at Dy. Ombudsman level when he is unable to solve the issue of complainant."
        },
        answer: "C"
    },
    {
        question: "49 Periodic updation of KYC is done at least once in from the date of opening/last updation in case of low-risk customer. (Select the most appropriate option from among the following.)",
        options: {
            A: "8 years",
            B: "5 years",
            C: "3 years",
            D: "10 years."
        },
        answer: "D"
    },
    {
        question: "50 The Primary function of a bank is (Select the most appropriate option from among the following.)",
        options: {
            A: "To provide remittance and payment facilities to individuals / business enterprise / Governments",
            B: "Accept deposits and lending money.",
            C: "To provide loans to the weaker sections of the society.",
            D: "Facilitate currency circulation in the country."
        },
        answer: "B"
    }
];
const questionsBlock1 = [
  {
    question: "51. The Depositor Education and Awareness Fund can be utilized by RBI",
    options: {
      A: "For Promotion of depositors interest.",
      B: "Deposit Insurance",
      C: "Financial Inclusion",
      D: "None of the above."
    },
    answer: "A"
  },
  {
    question: "52. RBI has stipulated 'Officially Valid Documents' for the purpose of",
    options: {
      A: "Branch licencing",
      B: "Small loans",
      C: "Verifying identity and residential address of a customer",
      D: "taking refinance from RBI."
    },
    answer: "C"
  },
  {
    question: "53. For the purpose of classifying an account as inoperative",
    options: {
      A: "Only credit transactions are taken into consideration",
      B: "Both the types of transactions i.e. debit as well as credit transactions induced at the instance of customer are taken into consideration.",
      C: "Transactions on account of standing instructions are not considered.",
      D: "Transactions in regard to the service charges or interest debited to the account are taken into consideration."
    },
    answer: "B"
  },
  {
    question: "54. If a Business Correspondent does not comply with confidentiality aspects and related privacy laws, it is termed as",
    options: {
      A: "Operations risk",
      B: "Strategic Risk",
      C: "Compliance Risk",
      D: "Reputational Risk"
    },
    answer: "C"
  },
  {
    question: "55. When NFC technology is included in a mobile phone",
    options: {
      A: "It's storing capacity is enhanced.",
      B: "It can be embedded within SIM Card",
      C: "It's RAM is enhanced drastically",
      D: "It can enable remittance to any customer of any bank."
    },
    answer: "B"
  },
  {
    question: "56. In cash credit account in the name of XYZ, the interest has been debited regularly for 8 months but not paid, although the account is within the limit and drawing power. The account will be classified as",
    options: {
      A: "Sub Standard",
      B: "Doubtful",
      C: "Loss.",
      D: "Standard"
    },
    answer: "D"
  },
  {
    question: "57. USSD (Unstructured Supplementary Service Data) based mobile banking does not offer",
    options: {
      A: "Money Transfer",
      B: "Bill Payments",
      C: "Merchant Payments",
      D: "On boarding of new accounts."
    },
    answer: "D"
  },
  {
    question: "58. Kisan Credit Cards Scheme aims at",
    options: {
      A: "Providing need based and timely credit support to farmers.",
      B: "Providing credit to non farm activities.",
      C: "Providing credit at flexible and cost effective manner.",
      D: "All of the above."
    },
    answer: "A"
  },
  {
    question: "59. It is not expected that the Business Correspondent / Business Facilitators will perform to the people residing in its operational area",
    options: {
      A: "Companion",
      B: "Guide",
      C: "Philosopher",
      D: "Government representative."
    },
    answer: "D"
  },
  {
    question: "60. The delivery of Financial Education comprises of (i) building skills (ii) increasing knowledge (iii) developing understanding (iv) building confidence",
    options: {
      A: "(i) and (ii) only",
      B: "(i), (ii) and (iii) only",
      C: "(i), (ii) and (iv) only",
      D: "(i), (ii), (iii) and (iv)."
    },
    answer: "D"
  },
  {
    question: "61. The annual premium for obtaining cover under Prime Minister Jeevan Jyoti Bima Yojana (PMJJBY) is area",
    options: {
      A: "Rs 114",
      B: "Rs 436",
      C: "Rs 228",
      D: "Rs 342"
    },
    answer: "B"
  },
  {
    question: "62. Soft skills are nothing but",
    options: {
      A: "Relationship building towards the customer",
      B: "Knowing financial analysis.",
      C: "knowing tools & techniques",
      D: "Knowing computer programming."
    },
    answer: "A"
  },
  {
    question: "63. If the out sourcing bank fails to implement appropriate oversight with regard to the activities outsourced to the Business Correspondent and it's sub-agents, it is termed as",
    options: {
      A: "Operational Risk",
      B: "Strategic Risk",
      C: "Compliance Risk",
      D: "Reputational Risk"
    },
    answer: "A"
  },
  {
    question: "64. Bharat Interface for Money is",
    options: {
      A: "Meant only for making direct bank to bank payments instantly.",
      B: "Meant only for making payment of utility bills and recharge of mobile phones",
      C: "For sending and collecting money to any person, paying bills, recharging mobile phone etc.",
      D: "Used by banks for sending 'alert messages'."
    },
    answer: "C"
  },
  {
    question: "65. An account will be treated as Non Performing Asset (NPA), if it remained irregular for",
    options: {
      A: "90 days in all types of agricultural loans.",
      B: "Two crop seasons in all types of agricultural loans.",
      C: "Two crop seasons in agricultural loans which have been extended for short duration crops.",
      D: "90 days in all types of indirect agricultural loan accounts."
    },
    answer: "D"
  },
  {
    question: "66. RBI has stipulated that banks should offer their savings bank customers free transactions at Bank's own ATMs in a Metro City (Mumbai, New Delhi, Chennai, Kolkata, Bengaluru and Hyderabad in a month.",
    options: {
      A: "Minimum of 3 transactions.",
      B: "Minimum of 4 transactions.",
      C: "Minimum of 5 transactions.",
      D: "Minimum of 7 transactions."
    },
    answer: "A"
  },
  {
    question: "67. An FDR has been issued in the name of 'A' and 'B' with the operating instructions of 'Former and Survivor'. 'A' has died. Now, 'B' wants its pre-mature payment. The bank will",
    options: {
      A: "Refuse its payment to 'B'",
      B: "Make payment to 'B'",
      C: "Make payment to 'B' with the concurrence of legal heirs of 'A'",
      D: "Make payment to 'B' and legal heirs of 'A' jointly if the legal heirs of 'A' submit the legal heir certificate."
    },
    answer: "B"
  },
  {
    question: "68. The credit score given by a Credit Information Company which is a 'snapshot' of a consumer's credit report calculated through advanced analytics, turns the information into a three digit number ranging from",
    options: {
      A: "100 to 700",
      B: "200 to 800",
      C: "300 to 900",
      D: "400 to 900."
    },
    answer: "C"
  },
  {
    question: "69. Borrower Profile Technique",
    options: {
      A: "Helps in recovery of overdues.",
      B: "Helps in post disbursement follow up.",
      C: "Helps in determining the suitability of the activities chosen by a prospective borrower.",
      D: "Helps in complying with KYC requirements."
    },
    answer: "C"
  },
  {
    question: "70. Soft skills do not include",
    options: {
      A: "Technical Knowledge",
      B: "Communication",
      C: "Self-motivation",
      D: "Responsibility."
    },
    answer: "A"
  },
  {
    question: "71. What is the cost of money borrowed from a bank known as ?",
    options: {
      A: "Commission",
      B: "Interest",
      C: "Charges",
      D: "premium"
    },
    answer: "B"
  },
  {
    question: "72. Now-a-days banking services are",
    options: {
      A: "Costly and luxurious",
      B: "Necessary of life for everyone.",
      C: "used only by economically middle/lower middle class persons",
      D: "used by rick people only."
    },
    answer: "B"
  },
  {
    question: "73. The features of 'Civil Society Organisations (CSO) in the context of Financial Inclusion is",
    options: {
      A: "NGOs",
      B: "Non State, not-for-profit, voluntary entities formed by people.",
      C: "SHGs",
      D: "State owned, not-for-profit entities."
    },
    answer: "B"
  },
  {
    question: "74. Who among the following customers is not eligible for availing the benefits of Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)?",
    options: {
      A: "NRI Customers",
      B: "Customers attaining the age of 49 years.",
      C: "Customer at the age of 16 years",
      D: "Customers who enrolled at the age of 45 years and paying regularly but now his age is 51 years."
    },
    answer: "C"
  },
  {
    question: "75. Which one of the following statements is incorrect in respect of Bharat QR Code?",
    options: {
      A: "It can be used to P2M digital payments.",
      B: "The payment mode in QR is only through UPI.",
      C: "It is as secure as making a payment via UPI.",
      D: "One can use any of apps that supports the Bharat QR."
    },
    answer: "B"
  }
];
const questionsBlock2 = [
  {
    question: "76. A gift card is a type of",
    options: {
      A: "Debit card",
      B: "Credit card",
      C: "Prepaid Card",
      D: "Charge card."
    },
    answer: "C"
  },
  {
    question: "77. Financial statements include (i) Balance Sheet (ii) Profit and Loss Account (iii) Account Policies (iv) Notes to the account",
    options: {
      A: "(i) only",
      B: "(i) and (ii) only",
      C: "(i), (ii) and (iii) only",
      D: "(i), (ii) and (iv) only."
    },
    answer: "D"
  },
  {
    question: "78. Which one of the following is incorrect in the case of Near Field Communications (NFC) mobile contact-less card technology.",
    options: {
      A: "Full traceability and audit trail of the transaction is maintained.",
      B: "Deposit and withdrawal transactions are instantly settled between the customer account and Business Correspondents account as both accounts are in the same system.",
      C: "Debit/Credit card can not be used for transaction.",
      D: "Customer account and Business Correspondent's working capital account is centrally held with the bank."
    },
    answer: "C"
  },
  {
    question: "79. Which one of the following is incorrect regarding Radio Frequency Identification (RFI)?",
    options: {
      A: "It is a method of listening songs and music.",
      B: "It is used for tracking goods by means of tags which transmit a radio signal.",
      C: "It is a method which is used for contactless smart cards.",
      D: "It is a method which has high-end security features."
    },
    answer: "A"
  },
  {
    question: "80. In case of charge card, payment is made by the user",
    options: {
      A: "Instantly",
      B: "at one go",
      C: "in instalments",
      D: "in instalments after a grace period."
    },
    answer: "B"
  },
  {
    question: "81. The Kisan Credit Card beneficiaries can be issued compatible for use in ATMs / hand held machines.",
    options: {
      A: "Smart card",
      B: "Debit card",
      C: "General Credit Card",
      D: "Any of (A) and (B) or both."
    },
    answer: "D"
  },
  {
    question: "82. Banks ensure that demand drafts of Rs and above are issued invariably, with 'Account Payee' crossing.",
    options: {
      A: "10,000",
      B: "20,000",
      C: "25,000",
      D: "50,000"
    },
    answer: "B"
  },
  {
    question: "83. '*99#' service of banks can be availed by a customer",
    options: {
      A: "With USSD solution through any mobile on GSM network.",
      B: "With USSD solution through smart mobile phone on GSM network.",
      C: "With USSD solution through smart mobile phone having Android system on GSM network.",
      D: "With USSD solution through smart mobile phone having IOS on GSM network."
    },
    answer: "A"
  },
  {
    question: "84. Digital Rupee (eRupee-R) may play a big role in (i) providing a safe and reliable means of payment for direct transfer programs of government welfare programmes (ii) promoting inclusive and innovative payments (iii) reducing cost of cash management (iv) reducing inflation significantly.",
    options: {
      A: "(i) and (ii) only",
      B: "(i), (ii), (iii) and (iv).",
      C: "(i) and (iv) only",
      D: "(i), (ii) and (iii) only"
    },
    answer: "B"
  },
  {
    question: "85. Which one of the following statements is incorrect in respect of virtual cards.?",
    options: {
      A: "Virtual debit/Credit/Prepaid card is a randomly generated cad number associated with the user's actual card for use online.",
      B: "It eliminates the risk of physical theft, counterfeiting, skimming, phishing etc.",
      C: "No limit of spending is fixed in virtual card.",
      D: "Its use is convenient, flexible and secure."
    },
    answer: "C"
  },
  {
    question: "86. Accrual concept of accounting denotes that",
    options: {
      A: "Income is recorded as per accrual value whereas expenses is shown as per the actual payment.",
      B: "Income is recorded as per the actual receipt where as expense is shown as per accrual date.",
      C: "Income and expenses are recorded as and when they become due, and not when there are actually received or paid.",
      D: "The unrecoverable charges on advances should not be written off because they were taken into income in the previous balance sheets as and when accrued."
    },
    answer: "C"
  },
  {
    question: "87. A student has been sanctioned education loan of Rs 8 lakh for studies in India. What type of securities can bank demand to secure the loan?",
    options: {
      A: "No collateral is needed.",
      B: "Only Co-obligation of parents.",
      C: "Co-obligation of parents and tangible collateral security/third party guarantee.",
      D: "Only Collateral security/third party guarantee."
    },
    answer: "B"
  },
  {
    question: "88. Cash Reserve Ratio (CRR) indicates the percentage of cash reserve that banks are required to keep with Reserve Bank of India as a proportion of their",
    options: {
      A: "Net demand and time liabilities.",
      B: "Gross demand and time liabilities.",
      C: "Total advances minus non-performing assets.",
      D: "Total demand deposits."
    },
    answer: "A"
  },
  {
    question: "89. The concept of ethics may include (i) it is a set of moral standards and values accepted society guides human behaviour (ii) it holds people from taking decisions that may be harmful other or the society (iii) its principles may differ according to the circumstances",
    options: {
      A: "(i) only",
      B: "(i) and (iii) only",
      C: "(ii) and (iii) only",
      D: "(i) and (ii) only."
    },
    answer: "D"
  },
  {
    question: "90. In the case of White Label ATMs",
    options: {
      A: "They are those which are set up, owned and operated by non-banks.",
      B: "The dispute resolution is done through the agency which handles ATM switch.",
      C: "Cash management is done by the banking system.",
      D: "User is required to pay a nominal charge on every hit."
    },
    answer: "A"
  },
  {
    question: "91. Aadhaar enabled Payment System (AePS) enables (i) Cash withdrawal (ii) Cash deposit (iii) Aadhaar to Aadhaar Funds Transfer (iv) Enquiry",
    options: {
      A: "(i), (iii) and (iv) only",
      B: "(ii) and (iii) only",
      C: "(i), (iii) and (iv) only",
      D: "(i), (ii), (iii) and (iv)."
    },
    answer: "D"
  },
  {
    question: "92. Atal Pension Yojana (APY) is mainly focused on the workers of",
    options: {
      A: "Unorganized sector",
      B: "Quasi-Government companies",
      C: "Central Government Corporations",
      D: "State Government Corporations."
    },
    answer: "A"
  },
  {
    question: "93. The activities of banking sector are supervised, controlled and regulated by",
    options: {
      A: "Govt. of India",
      B: "NABARD.",
      C: "RBI",
      D: "Banking Ombudsmen."
    },
    answer: "C"
  },
  {
    question: "94. The Reserve Bank of India in its annual policy statement of April 2005 recognized the problem on financial exclusion and initiated several steps aimed at promotion of financial inclusion, which however did not include",
    options: {
      A: "Service Area Approach",
      B: "General Credit Card",
      C: "Simplified KYC norms",
      D: "Basic Savings Bank Deposit Account."
    },
    answer: "A"
  },
  {
    question: "95. Corporate Governance includes (i) the structure through which objectives of a company are set and means of attaining the objectives (ii) monitoring performance of the company (iii) defines the way authority as well as responsibilities are allocated (iv) setting pricing policy of products and services to ensure company's growth.",
    options: {
      A: "(i) and (ii) only",
      B: "(ii) and (iv) only",
      C: "(iii) and (iv) only",
      D: "(i), (ii), (iii) and (iv)"
    },
    answer: "D"
  },
  {
    question: "96. Banks will grant loans under MUDRA Scheme",
    options: {
      A: "After obtaining third party guarantee only.",
      B: "After obtaining group guarantee",
      C: "After obtaining mortgage of immovable property if the amount of loan is above Rs 5 lakh",
      D: "Without insisting for collateral security if the loan amount is less than Rs 10 lakhs."
    },
    answer: "D"
  },
  {
    question: "97. 'A' and 'B', joint account holders wish to nominate 'X' and 'Y' in their deposit account.",
    options: {
      A: "It can be accepted",
      B: "Only one can be appointed as nominee.",
      C: "Both 'X' and 'Y' should agree to this.",
      D: "None of the above."
    },
    answer: "A"
  },
  {
    question: "98. A schedule bank enjoys certain special status which include (i) availing refinance facilities from RBI (ii) becoming member of the Clearing House (iii) having currency chest facility.",
    options: {
      A: "(i) and (ii) only",
      B: "(ii) and (iii) only",
      C: "(i) and (iii) only",
      D: "(i), (ii) and (iii)."
    },
    answer: "D"
  },
  {
    question: "99. A Business Facilitator can not do which of the following?",
    options: {
      A: "Handling of cash on behalf of bank.",
      B: "Identification of borrowers and fitment of activities.",
      C: "Preliminary verification of primary information about the loan applicant.",
      D: "Post sanction monitoring."
    },
    answer: "A"
  },
  {
    question: "100. The area of operations of a Regional Rural Bank",
    options: {
      A: "Is restricted to a few districts.",
      B: "Is unrestricted.",
      C: "Depends upon the wishes of the respective State Governments.",
      D: "Depends upon the business viability and consent of the respective sponsor bank."
    },
    answer: "A"
  }
];
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












