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
       [
  {
    "q": "The definition of financial inclusion currently in use includes delivery of financial services. Which one of the following is not a feature of financial services?",
    "o": [
      "The services include the provision of savings, credit, insurance and remittance facilities",
      "At affordable cost",
      "To vast sections of disadvantaged and low-income groups",
      "By the informal as well as formal financial system"
    ],
    "a": 3
  },
  {
    "q": "Provisioning for Standard Assets under IRAC norms in the case of loans to Commercial Real Estate (CRE) – Sector should be made by banks at the rate of _____.",
    "o": [
      "1.00%",
      "0.40%",
      "0.25%",
      "No provisioning is required for Standard Assets"
    ],
    "a": 0
  },
  {
    "q": "The stake of Public Sector Bank held by the Central Government is:",
    "o": [
      "At least 50%",
      "More than 50%",
      "At least 25%",
      "At least 90%"
    ],
    "a": 1
  },
  {
    "q": "A customer’s grievance should be observed at every bank. In this connection, select the correct statement from the following in respect of customer’s day.",
    "o": [
      "The Branch Manager should be available for customers in his office on that day between 2.00 PM to 4.00 PM.",
      "A customer can meet the Managing Director of the Bank on Customer’s Day with prior appointment.",
      "Customers Service Committee at the branch has the responsibility of noting down all the complaints.",
      "It is observed on 15th of every month."
    ],
    "a": 3
  },
  {
    "q": "The liberalization of financial services in India was triggered by J.M. Tinity, which did not comprise of:",
    "o": [
      "Aadhaar Database",
      "Mobile",
      "Micro Finance",
      "Jan Dhan Yojana"
    ],
    "a": 3
  },
  {
    "q": "Open Network for Digital Commerce (ONDC) is:",
    "o": [
      "A joint venture of select private banks",
      "A private non-profit Section 8 company",
      "A public-private partnership infrastructure",
      "A Government Company"
    ],
    "a": 1
  },
  {
    "q": "Remittance under National Electronic Funds Transfer (NEFT) scheme through internet banking can be made:",
    "o": [
      "At any time during bank working day",
      "From 7.00 AM to 5.00 PM only",
      "At any time and on any day",
      "From 7.00 AM to 8.00 PM only"
    ],
    "a": 2
  },
  {
    "q": "While effective communication is important for financial counselling, it requires which of the following? (i) Structuring the counselling relationship (ii) Establishing rapport (iii) Dealing with conflict",
    "o": [
      "(ii) and (iii) only",
      "(i), (ii) and (iii) only",
      "(i) and (ii) only",
      "(i) only"
    ],
    "a": 1
  },
  {
    "q": "Before a loan account turns into an NPA, banks are required to identify incipient stress in the account by creating ______.",
    "o": [
      "“bad account” category",
      "“special mention account”",
      "“look after” category",
      "“irregular category”"
    ],
    "a": 1
  },
  {
    "q": "A bank will not disclose the affairs of the customer in which one of the following circumstances?",
    "o": [
      "When a bank is bound to disclose in public interest",
      "When the information is called under law",
      "When the Central/State Govt. official directs the bank in writing to do so",
      "When there is express or implied consent of the customer"
    ],
    "a": 2
  },
  {
    "q": "The Ombudsman under the Integrated Ombudsman Scheme is _____.",
    "o": [
      "Appointed for a period not exceeding two years at a time",
      "Appointed by Govt. of India",
      "Empowered to pass an award directing payment by way of compensation an amount which is not more than actual loss suffered by the complainant or ₹10 lakhs whichever is lower",
      "Appointed by RBI"
    ],
    "a": 3
  },
  {
    "q": "Which one of the following statements is incorrect in respect of Micro, Small and Medium Enterprises (MSMEs)?",
    "o": [
      "MSMEs are regulated by RBI.",
      "A sub-target of 10% of ANBC or CEOBE whichever is higher towards lending to Micro enterprises under Priority Sector lending has been prescribed for domestic commercial banks.",
      "All MSMEs are required to register online on the Udyam Registration Portal and obtain Udyam Registration Certificate.",
      "All bank loans to MSMEs conforming to the laid down guidelines qualify for classification under priority sector lending."
    ],
    "a": 0
  },
  {
    "q": "The dispute between the bank and the customer that can be brought before the Ombudsman, can be _____?",
    "o": [
      "Any amount",
      "Not more than the value of ₹1 lakh",
      "Not more than the value of ₹50,000",
      "Not more than the value of ₹5 lakhs"
    ],
    "a": 0
  },
  {
    "q": "Reserve Bank of India is:",
    "o": [
      "A Development Bank",
      "The Central Bank of the country",
      "A Public Sector Bank",
      "A separate wing of Finance Ministry of the Central Government"
    ],
    "a": 1
  },
  {
    "q": "RBI has prescribed that _____ (i) no branch counter should remain un-attended during business hours (ii) employees should reach branch at least 15 minutes before commencement of working hours (iii) all the customers entering the banking hall before the close of business hours should be attended.",
    "o": [
      "(i), (ii) and (iii)",
      "(i) only",
      "(i) and (ii) only",
      "(i) and (iii) only"
    ],
    "a": 0
  },
  {
    "q": "Financial Action Task Force (FATF) is:",
    "o": [
      "Formed by the Union Finance Ministry",
      "An international inter-government body",
      "A wing of Enforcement Directorate (ED) who handles money laundering cases",
      "Formed by RBI to handle money laundering cases"
    ],
    "a": 1
  },
  {
    "q": "Which of the following statements is incorrect in respect of Self Help Groups (SHGs)?",
    "o": [
      "Its members join the group voluntarily and they should be homogeneous with respect to social and economic background.",
      "These are small formal groups.",
      "The main aim of the group is to promote savings habit among members and manage small resources of the group members.",
      "Each group consists of 10-12 individuals."
    ],
    "a": 1
  },
  {
    "q": "“Sub-exposures” of scheduled commercial banks (excluding Regional Rural Banks) and Small Finance Banks means:",
    "o": [
      "Single term deposit of ₹50 lakhs or more",
      "Single term deposit of ₹2 crore and above",
      "Single term deposit of ₹1 crore or more",
      "Single deposit of ₹15 lakhs or more"
    ],
    "a": 3
  },
  {
    "q": "The National Centre for Financial Education has been set up by _____.",
    "o": [
      "All Scheduled Banks",
      "All the financial sector Regulators",
      "Govt. of India",
      "All Public Sector Banks"
    ],
    "a": 1
  },
  {
    "q": "Prime Minister Jeevan Jyoti Bima Yojana is a/an:",
    "o": [
      "Endowment Insurance Policy",
      "Unit Linked Insurance Policy",
      "Whole Life Insurance Policy",
      "Term Life Insurance Policy"
    ],
    "a": 3
  },
  {
    "q": "Jan Samarth Portal is an online platform for _____.",
    "o": [
      "Opening new PPF account",
      "Making payments of utility bills",
      "Directly connecting lenders with beneficiaries",
      "Opening new deposit account"
    ],
    "a": 2
  },
  {
    "q": "If an account holder uses ATM card to withdraw cash, but the system has not dispensed cash but his account is debited. The debit to be reversed _____ by the bank.",
    "o": [
      "Within 10 working days",
      "Within 7 days",
      "Immediately",
      "Within 5 working days"
    ],
    "a": 3
  },
  {
    "q": "Mobile wallet _____.",
    "o": [
      "Works on the line of Debit card",
      "Is a way to carry cash in digital format",
      "Can be used on ATMs also",
      "Works on the line of Credit card"
    ],
    "a": 1
  },
  {
    "q": "If a bank refuses to accept cash over the counter and asks the customer to deposit it in ATM/Cash deposit machine:",
    "o": [
      "The bank can do so only citing reasons of non-space in cash storages",
      "It is irregular for the bank",
      "No banking law prohibits or permits the bank to do so",
      "It is lawful"
    ],
    "a": 3
  },
  {
    "q": "Deposit Insurance and Credit Guarantee Corporation (DICGC) provides deposit insurance to depositors:",
    "o": [
      "Which is voluntary for banks to take it or not",
      "Of all banks excepting Cooperative banks",
      "Of all the banks regulated by RBI",
      "Of all banks excepting cooperative banks and regional rural banks"
    ],
    "a": 2
  },
  {
    "q": "The cardinal principles of lending include ____ (i) safety of funds (ii) liquidity (iii) diversification of risk (iv) security",
    "o": [
      "(i) and (ii) only",
      "(ii) and (iii) only",
      "(iii) and (iv) only",
      "(i), (ii) and (iv) only"
    ],
    "a": 3
  },
  {
    "q": "Development Financial Institutions (DFIs) provide _____.",
    "o": [
      "Technology systems support to banks",
      "Credit guarantee to the banks for its lending operations",
      "Guidance to banks in its lending operations",
      "Refinance to banks for its lending operations"
    ],
    "a": 3
  },
  {
    "q": "If an account holder gets enrolled voluntarily through electronic means, then _____.",
    "o": [
      "The commission payable to the Business Correspondents will be reduced from the total premium and thus the account holder saves this amount",
      "The commission payable to Business Correspondent would not change",
      "Business Correspondent will get half of the prescribed commission",
      "The commission payable to Business Correspondents will be passed on to the branch"
    ],
    "a": 1
  },
  {
    "q": "Pink label ATMs _____.",
    "o": [
      "Are provided for share transactions",
      "Are dedicated to promote banking transactions by women",
      "Are used for online purchase",
      "Are dedicated to promote agriculture banking transactions"
    ],
    "a": 1
  },
  {
    "q": "Which one of the following is not a main cause for Customer Complaints?",
    "o": [
      "Non-standard procedures",
      "Indifferent arrangements made to handle the volume of work",
      "Attitudinal aspects while dealing with customers",
      "Lack of customer comfort facilities like sitting arrangement, filtered drinking water, cooling, etc."
    ],
    "a": 0
  },
  {
    "q": "The main objective of the RBI’s Deposit Education and Awareness Fund can be utilized by RBI for:",
    "o": [
      "For Promotion of deposits interest",
      "Financial Inclusion",
      "None of the above",
      "Deposit Insurance"
    ],
    "a": 1
  },
  {
    "q": "RBI has stipulated “Officially Valid Documents” for the purpose of _____.",
    "o": [
      "Branch licensing",
      "Small loans",
      "Taking refinance from RBI",
      "Verifying identity and residential address of a customer"
    ],
    "a": 3
  },
  {
    "q": "For the purpose of classifying an account as inoperative option among the following is:",
    "o": [
      "Only credit transactions are taken into consideration",
      "Transactions on account of standing instructions are not considered",
      "Both the types of transactions i.e. debit as well as credit transactions induced at the instance of customer are taken into consideration",
      "Transactions in regard to service charges or interest debited to the account are taken into consideration"
    ],
    "a": 2
  },
  {
    "q": "If a business correspondent does not comply with confidentiality aspects and related privacy laws, it is termed as _____.",
    "o": [
      "Reputational Risk",
      "Strategic Risk",
      "Operations risk",
      "Compliance Risk"
    ],
    "a": 3
  },
  {
    "q": "When NFC technology is included in a mobile phone _____:",
    "o": [
      "It can be embedded within SIM Card",
      "It’s storing capacity is enhanced",
      "It can enable remittance to any customer of any bank",
      "It’s RAM is enhanced drastically"
    ],
    "a": 0
  },
  {
    "q": "In case credit account in the name of ‘XYZ’ the interest has been debited regularly for 8 months but not paid, although the account is within the limit and drawing power. The account will be classified as _____.",
    "o": [
      "Doubtful",
      "Loss",
      "Standard",
      "Sub-standard"
    ],
    "a": 2
  },
  {
    "q": "USSD (Unstructured Supplementary Service Data) based mobile banking does not offer:",
    "o": [
      "Bill Payments",
      "Money Transfer",
      "On boarding of new accounts",
      "Merchant Payments"
    ],
    "a": 2
  },
  {
    "q": "Kisan Credit Cards scheme aims at _____.",
    "o": [
      "Providing credit to non-farm activities",
      "Providing need based and timely credit support to farmers",
      "Providing credit at flexible and cost effective manner",
      "All of the above"
    ],
    "a": 3
  },
  {
    "q": "It is not expected that the Business Correspondent / Business Facilitators will perform _____ to the people residing in its operational area.",
    "o": [
      "Guide",
      "Channel",
      "Government representative",
      "Companion of Philosopher"
    ],
    "a": 2
  },
  {
    "q": "The delivery of Financial Education comprises of ____ (i) building skills (ii) increasing knowledge (iii) developing understanding (iv) building confidence.",
    "o": [
      "(ii) and (iii) only",
      "(iii) and (iv) only",
      "(i) and (ii) only",
      "(i), (ii), (iii) and (iv)"
    ],
    "a": 3
  },
  {
    "q": "The annual premium for obtaining cover under Prime Minister Jeevan Jyoti Bima Yojana (PMJJBY) is:",
    "o": [
      "Rs 342",
      "Rs 436",
      "Rs 228",
      "Rs 114"
    ],
    "a": 3
  },
  {
    "q": "Soft skills is nothing but _____.",
    "o": [
      "Knowing tools & techniques",
      "Knowing financial analysis",
      "Knowing computer programming",
      "Relationship building towards the customer"
    ],
    "a": 3
  },
  {
    "q": "If the outsourcing bank fails to implement appropriate oversight with regard to the activities outsourced to the Business Correspondent and its sub-agents, it is termed as _____.",
    "o": [
      "Operational Risk",
      "Strategic Risk",
      "Compliance Risk",
      "Reputational Risk"
    ],
    "a": 0
  },
  {
    "q": "Bharat Interface for Money is _____ (select the most appropriate option from among the following).",
    "o": [
      "For sending and collecting money to any person, paying bills, recharging mobile phone etc.",
      "Used by banks for sending alert messages",
      "Meant only for making payment of utility bills and recharge of mobile phones",
      "Meant only for making direct bank to bank payments instantly"
    ],
    "a": 0
  },
  {
    "q": "An account will be treated as Non Performing Asset (NPA), if it remained irregular for _____.",
    "o": [
      "90 days in all types of agricultural loans",
      "Two crop seasons in agricultural loans which have been extended for short duration crops",
      "Two crop seasons in all types of agricultural loans",
      "90 days in all types of indirect agricultural loan accounts"
    ],
    "a": 1
  },
  {
    "q": "RBI has stipulated that banks should offer their savings bank customer free transactions at Bank’s own ATMs in Metro City (Mumbai, New Delhi, Chennai, Kolkata, Bengaluru and Hyderabad) ____ in a month.",
    "o": [
      "Minimum of 7 transactions",
      "Minimum of 4 transactions",
      "Minimum of 5 transactions",
      "Minimum of 3 transactions"
    ],
    "a": 2
  },
  {
    "q": "An FDR has been issued in the name of ‘A’ and ‘B’ with the operating instructions of ‘Former and Survivor’. ‘A’ has died. Now, ‘B’ wants pre-mature payment. The bank will _____.",
    "o": [
      "Refuse to pay",
      "Make payment to ‘B’ and legal heirs of ‘A’ jointly",
      "Make payment to ‘B’ with the concurrence of legal heirs of ‘A’",
      "Make payment to ‘B’"
    ],
    "a": 3
  },
  {
    "q": "The credit score given by a Credit Information Company which is a “snapshot” of a consumer’s credit report calculated through advanced analytics, turns the information into a three digit number ranging from _____ (select the most appropriate option from among the following).",
    "o": [
      "400 to 1000",
      "100 to 700",
      "200 to 800",
      "300 to 900"
    ],
    "a": 3
  },
  {
    "q": "Borrower Profile Technique helps in _____.",
    "o": [
      "Helps in complying with KYC requirements",
      "Helps in recovery of overdues",
      "Helps in determining the suitability of the activities chosen by a prospective borrower",
      "Helps in post disbursement follow up"
    ],
    "a": 2
  },
  {
    "q": "Soft skills do not include _____.",
    "o": [
      "Communication",
      "Self-motivation",
      "Responsibility",
      "Technical Knowledge"
    ],
    "a": 3
  },
  {
    "q": "RBI has stipulated “Officially Valid Documents” for the purpose of _____.",
    "o": [
      "Taking refinance from RBI",
      "Branch licensing",
      "Verifying identity and residential address of a customer",
      "Small loans"
    ],
    "a": 2
  },
  {
    "q": "For the purpose of classifying an account as inoperative option among the following is:",
    "o": [
      "Only credit transactions are taken into consideration",
      "Transactions in regard to service charges or interest debited to the account are taken into consideration",
      "Both the types of transactions i.e. debit as well as credit transactions induced at the instance of customer are taken into consideration",
      "Transactions on account of standing instructions are not considered"
    ],
    "a": 2
  },
  {
    "q": "If a business correspondent does not comply with confidentiality aspects and related privacy laws, it is termed as _____.",
    "o": [
      "Operations risk",
      "Compliance Risk",
      "Reputational Risk",
      "Strategic Risk"
    ],
    "a": 1
  },
  {
    "q": "When NFC technology is included in a mobile phone _____:",
    "o": [
      "It’s RAM is enhanced drastically",
      "It can be embedded within SIM Card",
      "It’s storing capacity is enhanced",
      "It can enable remittance to any customer of any bank"
    ],
    "a": 1
  },
  {
    "q": "In case credit account in the name of ‘XYZ’ the interest has been debited regularly for 8 months but not paid, although the account is within the limit and drawing power. The account will be classified as _____.",
    "o": [
      "Sub-standard",
      "Loss",
      "Doubtful",
      "Standard"
    ],
    "a": 3
  },
  {
    "q": "USSD (Unstructured Supplementary Service Data) based mobile banking does not offer:",
    "o": [
      "Money Transfer",
      "Bill Payments",
      "On boarding of new accounts",
      "Merchant Payments"
    ],
    "a": 2
  },
  {
    "q": "Kisan Credit Cards scheme aims at _____.",
    "o": [
      "Providing need based and timely credit support to farmers",
      "Providing credit at flexible and cost effective manner",
      "All of the above",
      "Providing credit to non-farm activities"
    ],
    "a": 2
  },
  {
    "q": "It is not expected that the Business Correspondent / Business Facilitators will perform _____ to the people residing in its operational area.",
    "o": [
      "Companion of Philosopher",
      "Government representative",
      "Guide",
      "Channel"
    ],
    "a": 1
  },
  {
    "q": "The delivery of Financial Education comprises of ____ (i) building skills (ii) increasing knowledge (iii) developing understanding (iv) building confidence.",
    "o": [
      "(i) and (ii) only",
      "(iii) and (iv) only",
      "(ii) and (iii) only",
      "(i), (ii), (iii) and (iv)"
    ],
    "a": 3
  },
  {
    "q": "The annual premium for obtaining cover under Prime Minister Jeevan Jyoti Bima Yojana (PMJJBY) is:",
    "o": [
      "Rs 114",
      "Rs 342",
      "Rs 228",
      "Rs 436"
    ],
    "a": 3
  },
  {
    "q": "Soft skills is nothing but _____.",
    "o": [
      "Relationship building towards the customer",
      "Knowing tools & techniques",
      "Knowing computer programming",
      "Knowing financial analysis"
    ],
    "a": 0
  },
  {
    "q": "If the outsourcing bank fails to implement appropriate oversight with regard to the activities outsourced to the Business Correspondent and its sub-agents, it is termed as _____.",
    "o": [
      "Strategic Risk",
      "Reputational Risk",
      "Compliance Risk",
      "Operational Risk"
    ],
    "a": 3
  },
  {
    "q": "Bharat Interface for Money is _____ (select the most appropriate option from among the following).",
    "o": [
      "Meant only for making direct bank to bank payments instantly",
      "Used by banks for sending alert messages",
      "For sending and collecting money to any person, paying bills, recharging mobile phone etc.",
      "Meant only for making payment of utility bills and recharge of mobile phones"
    ],
    "a": 2
  },
  {
    "q": "An account will be treated as Non Performing Asset (NPA), if it remained irregular for _____.",
    "o": [
      "Two crop seasons in all types of agricultural loans",
      "90 days in all types of agricultural loans",
      "Two crop seasons in agricultural loans which have been extended for short duration crops",
      "90 days in all types of indirect agricultural loan accounts"
    ],
    "a": 2
  },
  {
    "q": "RBI has stipulated that banks should offer their savings bank customer free transactions at Bank’s own ATMs in Metro City (Mumbai, New Delhi, Chennai, Kolkata, Bengaluru and Hyderabad) ____ in a month.",
    "o": [
      "Minimum of 7 transactions",
      "Minimum of 4 transactions",
      "Minimum of 5 transactions",
      "Minimum of 3 transactions"
    ],
    "a": 3
  },
  {
    "q": "An FDR has been issued in the name of ‘A’ and ‘B’ with the operating instructions of ‘Former and Survivor’. ‘A’ has died. Now, ‘B’ wants pre-mature payment. The bank will _____.",
    "o": [
      "Make payment to ‘B’",
      "Refuse to pay",
      "Make payment to ‘B’ with the concurrence of legal heirs of ‘A’",
      "Make payment to ‘B’ and legal heirs of ‘A’ jointly"
    ],
    "a": 0
  },
  {
    "q": "The credit score given by a Credit Information Company which is a “snapshot” of a consumer’s credit report calculated through advanced analytics, turns the information into a three digit number ranging from _____ (select the most appropriate option from among the following).",
    "o": [
      "400 to 1000",
      "300 to 900",
      "200 to 800",
      "100 to 700"
    ],
    "a": 1
  },
  {
    "q": "Borrower Profile Technique helps in _____.",
    "o": [
      "Helps in complying with KYC requirements",
      "Helps in recovery of overdues",
      "Helps in post disbursement follow up",
      "Helps in determining the suitability of the activities chosen by a prospective borrower"
    ],
    "a": 3
  },
  {
    "q": "Soft skills do not include _____.",
    "o": [
      "Technical Knowledge",
      "Self-motivation",
      "Communication",
      "Responsibility"
    ],
    "a": 0
  },
  {
    "q": "What is the cost of money borrowed from a bank known as?",
    "o": [
      "Commission",
      "Charges",
      "Interest",
      "Premium"
    ],
    "a": 2
  },
  {
    "q": "Non-advisory banking services are _____.",
    "o": [
      "Costly and luxurious",
      "Based on advisory services",
      "Necessary of life for everyone",
      "Judged only by economically affluent persons"
    ],
    "a": 2
  },
  {
    "q": "The features of Civil Society Organisations (CSO) in the context of Financial Inclusion is:",
    "o": [
      "NGOs",
      "Non-state, not-for-profit, voluntary entities formed by people",
      "State owned, not-for-profit entities",
      "SHGs"
    ],
    "a": 1
  },
  {
    "q": "Who among the following customers is not eligible for availing the benefits of Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)?",
    "o": [
      "NRI Customers",
      "Customers attaining the age of 49 years",
      "Customers who enrolled at the age of 45 years and paying regularly but now his age is 51 years",
      "Customer at the age of 16 years"
    ],
    "a": 3
  },
  {
    "q": "Which one of the following statements is incorrect in respect of Bharat QR Code?",
    "o": [
      "It is as secure as making a payment via UPI",
      "The payment mode in QR is only through UPI",
      "It can be used to P2M digital payments",
      "One can use any of apps that supports the Bharat QR"
    ],
    "a": 1
  },
  {
    "q": "A Gift card is a type of _____.",
    "o": [
      "Credit card",
      "Charge card",
      "Debit card",
      "Prepaid Card"
    ],
    "a": 3
  },
  {
    "q": "A Gift card is a type of _____.",
    "o": [
      "Debit card",
      "Credit card",
      "Prepaid Card",
      "Charge card"
    ],
    "a": 2
  },
  {
    "q": "Financial statements include ____ (i) Balance Sheet (ii) Profit and Loss Account (iii) Account Policies (iv) Notes to the account.",
    "o": [
      "(i), (ii), (iii) and (iv)",
      "(i) only",
      "(i) and (ii) only",
      "(ii) and (iii) only"
    ],
    "a": 0
  },
  {
    "q": "Which one of the following is incorrect in the case of Near Field Communications (NFC) mobile contact-less card technology?",
    "o": [
      "Debit / Credit card can be used for stored value transaction",
      "Full traceability and audit trail of the transaction maintained",
      "Deposit and withdrawal transactions are instantly settled between the customer account and Business Correspondents account as both accounts are in the same system",
      "Customer account and business correspondent’s working capital account is centrally held with the bank"
    ],
    "a": 2
  },
  {
    "q": "Which one of the following is incorrect regarding Radio Frequency Identification (RFID)?",
    "o": [
      "It is a method of listening songs and music",
      "It is a method which is used for contactless smart cards",
      "It is used for tracking goods by means of tags which transmit a radio signal",
      "It is a method which has high-end security features"
    ],
    "a": 0
  },
  {
    "q": "In case of charge card, payment is made by the user _____.",
    "o": [
      "In instalments after a grace period",
      "At one go",
      "Instantly",
      "In instalments"
    ],
    "a": 1
  },
  {
    "q": "The Kisan Credit Card beneficiaries can be issued ____ compatible for ATMs / hand held machines.",
    "o": [
      "General Credit Card",
      "Smart card",
      "Debit card",
      "Any of (A) and (B) or both"
    ],
    "a": 3
  },
  {
    "q": "Banks ensure that demand drafts of Rs _____ and above are issued invariably with “Account Payee” crossing.",
    "o": [
      "10,000",
      "25,000",
      "50,000",
      "20,000"
    ],
    "a": 0
  },
  {
    "q": "“99% service of banks can be availed by a customer ____.”",
    "o": [
      "With USSD solution through any mobile or GSM network",
      "With USSD solution through smart mobile phone on GSM network",
      "With USSD solution through smart mobile phone having iOS or GSM network",
      "With USSD solution through smart mobile phone having Android system"
    ],
    "a": 0
  },
  {
    "q": "Digital Rupee (E-Rupee): RBI may play a big role in _____.",
    "o": [
      "reducing currency in circulation",
      "replacing physical currency",
      "reducing cost of cash management",
      "reducing inflation significantly"
    ],
    "a": 2
  },
  {
    "q": "Which one of the following statements is incorrect in respect of virtual cards?",
    "o": [
      "No limit of spending is fixed in virtual card",
      "Virtual debit/credit card is a randomly generated card number associated with the user’s actual card for use online",
      "It eliminates the risk of physical theft, counterfeiting, skimming, phishing etc.",
      "Its use is convenient, flexible and secure"
    ],
    "a": 0
  },
  {
    "q": "Accrual concept of accounting denotes that _____.",
    "o": [
      "Income received or paid in advance should not be written off",
      "Income is recorded as per actual value whereas expenses is shown as per the actual payment",
      "Income and expenses are recorded as and when they are accrued, not when cash is exchanged",
      "Income and expenses are recorded as and when they are received or paid"
    ],
    "a": 2
  },
  {
    "q": "A student has been sanctioned education loan of Rs 8 lakh for studies in India. What type of security can bank demand to secure the loan?",
    "o": [
      "Only collateral security / third party guarantee",
      "Only co-obligation of parents",
      "Co-obligation of parents and tangible collateral security / third party guarantee",
      "No collateral is needed"
    ],
    "a": 2
  },
  {
    "q": "Cash Reserve Ratio (CRR) indicates the percentage of cash reserve that banks are required to keep with Reserve Bank of India as a proportion of their _____.",
    "o": [
      "Gross demand and time liabilities",
      "Net demand and time liabilities",
      "Total advances minus non-performing assets",
      "Total demand deposits"
    ],
    "a": 1
  },
  {
    "q": "The concept of ethics may include ____ (i) a set of moral standards and values accepted by society (ii) guides human behaviour (iii) helps people from taking decisions that may harm other or the society (iv) its principles may differ according to the circumstances.",
    "o": [
      "(i), (ii), (iii) and (iv)",
      "(i) only",
      "(i) and (ii) only",
      "(i), (ii) and (iii) only"
    ],
    "a": 0
  },
  {
    "q": "In the case of White Label ATMs _____.",
    "o": [
      "They are those which are set up, owned and operated by non-banks",
      "User is required to pay a nominal charge on every hit",
      "The dispute resolution is done through the agency which handles ATMs switch",
      "Cash management is done by the banking system"
    ],
    "a": 0
  },
  {
    "q": "Aadhaar enabled Payment System (AePS) enables ____ (i) Cash withdrawal (ii) Cash deposit (iii) Aadhaar to Aadhaar Fund Transfer (iv) Enquiry.",
    "o": [
      "(i), (ii), (iii) and (iv)",
      "(i), (iii) and (iv) only",
      "(i), (iii) and (iv) only",
      "(ii) and (iv) only"
    ],
    "a": 0
  },
  {
    "q": "Atal Pension Yojana (APY) is mainly focused on the workers of _____.",
    "o": [
      "Quasi-Government corporations",
      "Central Government Corporations",
      "State Government Corporations",
      "Unorganised sector"
    ],
    "a": 3
  },
  {
    "q": "The system of banking sector are supervised, controlled and regulated by _____.",
    "o": [
      "Govt. of India",
      "NABARD",
      "RBI",
      "Banking Ombudsman"
    ],
    "a": 2
  },
  {
    "q": "The Reserve Bank of India in its annual policy statement of April 2005 recognized the problem on financial exclusion and initiated several steps aimed at promotion of financial inclusion, which however did not include _____.",
    "o": [
      "Basic Savings Bank Deposit Account",
      "Simplified KYC norms",
      "General Credit Card",
      "Service Area Approach"
    ],
    "a": 3
  },
  {
    "q": "Corporate Governance includes ____ (i) the structure through which objectives of a company are set (ii) means of attaining the objectives (iii) monitoring performance of the company (iv) defines the way authority as well as responsibilities are allocated (v) setting pricing policy of products and services to ensure company’s growth.",
    "o": [
      "(ii) and (iv) only",
      "(i), (ii), (iii) and (iv)",
      "(i) and (ii) only",
      "(ii) and (iv) only"
    ],
    "a": 1
  },
  {
    "q": "Banks will grant loans under MUDRA Scheme _____.",
    "o": [
      "After obtaining group guarantee",
      "After obtaining third party guarantee only",
      "After obtaining mortgage of immovable property if the amount of loan is above Rs 5 lakh",
      "Without insisting for collateral security if the loan amount is less than Rs 10 lakhs"
    ],
    "a": 3
  },
  {
    "q": "‘A’ and ‘B’, joint account holders wish to nominate ‘X’ and ‘Y’ in their deposit account. Select the most appropriate option from among the following.",
    "o": [
      "None of the above",
      "Only one can be appointed as nominee",
      "It can be accepted",
      "Both ‘X’ and ‘Y’ should agree to this"
    ],
    "a": 1
  },
  {
    "q": "A Schedule bank enjoys certain special status which include ____ (i) availing refinance facilities from RBI (ii) becoming member of the Clearing House (iii) having currency chest facility.",
    "o": [
      "(i) and (ii) only",
      "(ii) and (iii) only",
      "(i), (ii) and (iii)",
      "(i) and (iii) only"
    ],
    "a": 2
  },
  {
    "q": "A Business Facilitator can not do which of the following?",
    "o": [
      "Preliminary verification of primary information about the loan applicant",
      "Identification of borrowers and fitness of activities",
      "Handling of cash on behalf of bank",
      "Post sanction monitoring"
    ],
    "a": 2
  },
  {
    "q": "The area of operations of a Regional Rural Bank _____.",
    "o": [
      "Is restricted to a few districts",
      "Is unrestricted",
      "Depends upon the business viability and consent of the respective sponsor bank",
      "Depends upon the wishes of the respective State Governments"
    ],
    "a": 0
  }
];"
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















