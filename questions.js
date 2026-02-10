// questions.js
console.log("questions.js loaded");

window.questions = [
{
    q: "Entrepreneurship means",
    o: [
      "Working in govt office",
      "Starting business with risk and innovation",
      "Only farming",
      "Only banking"
    ],
    a: 1
  },
  {
    q: "Full form of RSETI is",
    o: [
      "Rural Self Employment Training Institute",
      "Rural Skill Education Training Institute",
      "Rural Social Employment Training Institute",
      "Rural Society Education Training Institute"
    ],
    a: 0
  },
  {
    q: "NABARD stands for",
    o: [
      "National Bank for Agriculture and Rural Development",
      "National Association of Banking and Rural Development",
      "National Agricultural Board of Rural Deposit",
      "National Bank and RBI Department"
    ],
    a: 0
  },
  {
    q: "RBI is responsible for",
    o: [
      "Running Panchayat",
      "Controlling monetary policy",
      "Running elections",
      "Selling khadi"
    ],
    a: 1
  },
  {
    q: "KVIC is related to",
    o: [
      "IT industry",
      "Khadi and Village Industries",
      "Railways",
      "Tourism"
    ],
    a: 1
  },
  {
    q: "Fixed cost example is",
    o: ["Raw material", "Packaging", "Rent", "Commission"],
    a: 2
  },
  {
    q: "Variable cost example is",
    o: ["Shop rent", "Salary of manager", "Raw material", "Insurance"],
    a: 2
  },
  {
    q: "Cost Price (CP) means",
    o: [
      "Selling price",
      "Total cost incurred",
      "Profit earned",
      "Discount"
    ],
    a: 1
  },
  {
    q: "Selling Price (SP) =",
    o: [
      "CP + Profit",
      "CP – Profit",
      "CP × Profit",
      "Profit / CP"
    ],
    a: 0
  },
  {
    q: "Profit =",
    o: [
      "CP – SP",
      "SP – CP",
      "SP × CP",
      "SP / CP"
    ],
    a: 1
  },
  {
    q: "If CP = ₹200 and SP = ₹250, profit is",
    o: ["₹30", "₹40", "₹50", "₹60"],
    a: 2
  },
  {
    q: "If CP = ₹500 and SP = ₹450, result is",
    o: [
      "Profit ₹50",
      "Loss ₹50",
      "Profit ₹100",
      "Loss ₹100"
    ],
    a: 1
  },
  {
    q: "Profit % formula is",
    o: [
      "Profit/CP ×100",
      "Profit/SP ×100",
      "CP/Profit ×100",
      "SP/Profit ×100"
    ],
    a: 0
  },
  {
    q: "If CP = ₹100, SP = ₹120, profit % is",
    o: ["10%", "15%", "20%", "25%"],
    a: 2
  },
  {
    q: "If profit is 25% on CP ₹400, SP is",
    o: ["₹450", "₹500", "₹520", "₹480"],
    a: 1
  },
  {
    q: "Contribution =",
    o: [
      "Sales – Fixed cost",
      "Sales – Variable cost",
      "Fixed cost – Sales",
      "Profit – Fixed cost"
    ],
    a: 1
  },
  {
    q: "Break-even point is",
    o: [
      "Maximum profit point",
      "No profit no loss point",
      "Maximum loss point",
      "Sales peak point"
    ],
    a: 1
  },
  {
    q: "Fixed cost = ₹40,000, SP/unit=₹200, VC/unit=₹150. BEP (units) is",
    o: ["600", "700", "800", "900"],
    a: 2
  },
  {
    q: "If contribution per unit increases, BEP will",
    o: ["Increase", "Decrease", "Remain same", "Become negative"],
    a: 1
  },
  {
    q: "Fixed cost = ₹60,000, contribution ratio = 40%. BEP sales is",
    o: ["₹1,50,000", "₹2,00,000", "₹1,00,000", "₹3,00,000"],
    a: 0
  },
  {
    q: "Margin of safety means",
    o: ["Total profit", "Sales above BEP", "Total cost", "Loss margin"],
    a: 1
  },
  {
    q: "Working capital is used for",
    o: [
      "Buying land",
      "Buying machinery",
      "Daily business expenses",
      "Buying gold"
    ],
    a: 2
  },
  {
    q: "Fixed capital is used for",
    o: [
      "Daily raw material",
      "Wages",
      "Machinery purchase",
      "Electricity bill"
    ],
    a: 2
  },
  {
    q: "Depreciation means",
    o: [
      "Increase in asset value",
      "Decrease in asset value over time",
      "Loan repayment",
      "Profit"
    ],
    a: 1
  },
  {
    q: "Balance sheet shows",
    o: [
      "Profit only",
      "Assets and liabilities",
      "Advertisement cost",
      "Sales report"
    ],
    a: 1
  },

  // REPLACED Q26
  {
    q: "Which of the following is an example of liability?",
    o: ["Cash", "Stock", "Loan taken from bank", "Machinery"],
    a: 2
  },

  {
    q: "Repo rate is",
    o: [
      "Bank lending to public rate",
      "RBI lending to banks rate",
      "NABARD loan rate",
      "Insurance rate"
    ],
    a: 1
  },
  {
    q: "CRR stands for",
    o: [
      "Credit Reserve Ratio",
      "Cash Reserve Ratio",
      "Capital Reserve Ratio",
      "Cash Return Ratio"
    ],
    a: 1
  },
  {
    q: "Higher CRR means",
    o: [
      "Banks can lend more",
      "Banks can lend less",
      "More money in market",
      "No effect"
    ],
    a: 1
  },
  {
    q: "Priority sector includes",
    o: [
      "Luxury hotels",
      "Agriculture and MSMEs",
      "Cinema halls only",
      "Casinos"
    ],
    a: 1
  },
  {
    q: "CIBIL score is used to",
    o: [
      "Check GST",
      "Check credit history",
      "Check marketing",
      "Check sales"
    ],
    a: 1
  },
  {
    q: "Collateral means",
    o: ["Free gift", "Loan security", "Profit margin", "Discount"],
    a: 1
  },
  {
    q: "EMI stands for",
    o: [
      "Equal Monthly Installment",
      "Easy Money Income",
      "Extra Money Installment",
      "Equal Market Investment"
    ],
    a: 0
  },
  {
    q: "Loan appraisal checks",
    o: [
      "Repayment capacity",
      "Business feasibility",
      "Borrower character",
      "All of the above"
    ],
    a: 3
  },
  {
    q: "Opportunity seeking means",
    o: [
      "Waiting for customers",
      "Identifying business chances",
      "Avoiding risks",
      "Avoiding competition"
    ],
    a: 1
  },
  {
    q: "Persistence means",
    o: [
      "Giving up quickly",
      "Continuous effort despite failure",
      "Laziness",
      "Avoiding problems"
    ],
    a: 1
  },
  {
    q: "Risk taking should be",
    o: ["Blind", "Illegal", "Calculated", "None"],
    a: 2
  },
  {
    q: "Goal setting should be",
    o: ["Vague", "Clear and measurable", "Impossible", "Secret"],
    a: 1
  },
  {
    q: "Networking helps in",
    o: [
      "Increasing enemies",
      "Building business contacts",
      "Increasing GST",
      "Reducing sales"
    ],
    a: 1
  },
  {
    q: "Self-confidence means",
    o: [
      "Fear of failure",
      "Belief in own ability",
      "Laziness",
      "Avoiding customers"
    ],
    a: 1
  },
  {
    q: "Communication is",
    o: [
      "Sending and receiving information",
      "Selling product",
      "Making profit",
      "Loan repayment"
    ],
    a: 0
  },
  {
    q: "Feedback means",
    o: ["Silence", "Response from receiver", "Advertisement", "Complaint"],
    a: 1
  },
  {
    q: "Non-verbal communication includes",
    o: ["Email", "Body language", "SMS", "Report"],
    a: 1
  },
  {
    q: "Barrier in communication can be",
    o: ["Noise", "Poor listening", "Language issue", "All of the above"],
    a: 3
  },
  {
    q: "Marketing means",
    o: [
      "Producing goods",
      "Selling and promoting product",
      "Only accounting",
      "Loan processing"
    ],
    a: 1
  },
  {
    q: "4Ps of marketing are",
    o: [
      "Product, Price, Place, Promotion",
      "Profit, People, Plan, Price",
      "Purchase, Price, Profit, Place",
      "Promotion, Profit, Policy, People"
    ],
    a: 0
  },

  // REPLACED Q48
  {
    q: "Advertising is mainly done to",
    o: [
      "Increase confusion",
      "Increase sales and awareness",
      "Increase loss",
      "Reduce customers"
    ],
    a: 1
  },

  {
    q: "USP means",
    o: [
      "Unique Selling Proposition",
      "Universal Selling Price",
      "Uniform Sales Plan",
      "Unit Sales Profit"
    ],
    a: 0
  },
  {
    q: "Market segmentation means",
    o: [
      "Selling only one product",
      "Dividing market into groups",
      "Increasing loan",
      "Decreasing price"
    ],
    a: 1
  },
  {
    q: "DPR means",
    o: [
      "Daily Profit Report",
      "Detailed Project Report",
      "Direct Payment Report",
      "Deposit Profit Ratio"
    ],
    a: 1
  },
  {
    q: "A project report is prepared to",
    o: [
      "Study business feasibility",
      "Show business idea to bank",
      "Plan finance and profit",
      "All of the above"
    ],
    a: 3
  },
  {
    q: "SWOT stands for",
    o: [
      "Strength Weakness Opportunity Threat",
      "Sales Work Output Target",
      "Stock Work Operation Trade",
      "System Work Office Target"
    ],
    a: 0
  },
  {
    q: "Strength and weakness are",
    o: ["External factors", "Internal factors", "Government factors", "Bank factors"],
    a: 1
  },
  {
    q: "Opportunity and threat are",
    o: ["Internal factors", "External factors", "Fixed factors", "None"],
    a: 1
  },
  {
    q: "Business risk can be reduced by",
    o: ["Market survey", "Planning", "Financial control", "All of the above"],
    a: 3
  },
  {
    q: "A calculated risk means",
    o: ["Risk taken after analysis", "Risk taken blindly", "No risk", "Illegal risk"],
    a: 0
  },
  {
    q: "Opportunity cost means",
    o: [
      "Free cost",
      "Value of next best alternative sacrificed",
      "Cost of raw material",
      "Labour cost"
    ],
    a: 1
  },
  {
    q: "If SP=₹800 and profit=₹200, CP is",
    o: ["₹500", "₹600", "₹700", "₹1000"],
    a: 1
  },
  {
    q: "A trader buys for ₹150 and sells for ₹180. Profit % is",
    o: ["15%", "20%", "25%", "30%"],
    a: 1
  },

  // REPLACED Q61
  {
    q: "If CP = ₹500 and profit = ₹100, SP is",
    o: ["₹400", "₹500", "₹600", "₹700"],
    a: 2
  },

  // REPLACED Q62
  {
    q: "Which of the following is a source of business finance?",
    o: ["Bank loan", "Savings", "Borrowing from friends", "All of the above"],
    a: 3
  },

  // REPLACED Q63
  {
    q: "Simple Interest is calculated on",
    o: ["Only principal amount", "Only interest", "Principal + interest", "Profit only"],
    a: 0
  },

  // EXTENDED Q64
  {
    q: "A person borrows ₹10,000 at 10% simple interest for 2 years. Interest will be",
    o: ["₹1000", "₹1500", "₹2000", "₹2500"],
    a: 2
  },

  {
    q: "MSME classification depends on",
    o: [
      "Business name",
      "Investment and turnover",
      "Number of workers only",
      "Shop location"
    ],
    a: 1
  },
  {
    q: "Udyam registration is for",
    o: ["Large industries only", "MSMEs", "Only banks", "Only farmers"],
    a: 1
  },
  {
    q: "KVIC mainly supports",
    o: ["Khadi and village industries", "IT companies", "Airlines", "Stock market"],
    a: 0
  },
  {
    q: "SHG stands for",
    o: ["Self Help Group", "Social Help Group", "State Help Group", "Small House Group"],
    a: 0
  },
  {
    q: "SHG-Bank linkage programme is promoted mainly by",
    o: ["RBI", "NABARD", "SEBI", "LIC"],
    a: 1
  },
  {
    q: "SHG is formed mainly to",
    o: [
      "Watch movies",
      "Promote savings and credit among members",
      "Create political parties",
      "Sell foreign goods"
    ],
    a: 1
  },
  {
    q: "Feasibility study checks",
    o: [
      "Whether project is profitable and possible",
      "Customer gossip",
      "Bank mood",
      "None"
    ],
    a: 0
  },
  {
    q: "Payback period refers to",
    o: ["Loan interest", "Time to recover investment", "GST filing date", "Salary date"],
    a: 1
  },
  {
    q: "Cash flow is important because",
    o: [
      "Profit is enough always",
      "Cash is required for daily expenses",
      "Bank does not need it",
      "It reduces sales"
    ],
    a: 1
  },
  {
    q: "Business ethics means",
    o: ["Cheating customers", "Honest business practices", "Avoiding tax always", "Selling fake goods"],
    a: 1
  },
  {
    q: "Inventory means",
    o: ["Cash in bank", "Stock of goods/material", "Land", "Loan amount"],
    a: 1
  },
  {
    q: "Fixed cost ₹30,000, SP/unit ₹150, VC/unit ₹100. BEP units?",
    o: ["500", "600", "700", "800"],
    a: 1
  },

  // REPLACED Q77
  {
    q: "Contribution means",
    o: ["Total profit", "Sales minus variable cost", "Fixed cost minus sales", "Loss minus sales"],
    a: 1
  },

  {
    q: "A project cost is ₹5 lakh. Bank loan ₹4 lakh. Margin money is",
    o: ["₹50,000", "₹1,00,000", "₹1,50,000", "₹2,00,000"],
    a: 1
  },
  {
    q: "Self-dependency syndrome means",
    o: ["Strong confidence", "Dependence on others for decisions", "Innovation", "Leadership"],
    a: 1
  },
  {
    q: "An entrepreneur should overcome self dependency syndrome by",
    o: ["Avoiding work", "Taking responsibility", "Taking more loans", "Complaining"],
    a: 1
  },
  {
    q: "Leadership means",
    o: ["Controlling others always", "Guiding team towards goals", "Fighting employees", "Avoiding staff"],
    a: 1
  },
  {
    q: "Motivation means",
    o: ["Desire to achieve goal", "Laziness", "Fear", "Delay"],
    a: 0
  },

  // REPLACED Q79
  {
    q: "Break-even point means",
    o: ["Maximum profit", "No profit no loss", "Maximum loss", "Maximum sales"],
    a: 1
  },

  // REPLACED Q85
  {
    q: "DSCR is related to",
    o: ["Marketing strategy", "Loan repayment capacity", "Packaging design", "Employee attendance"],
    a: 1
  },

  {
    q: "A loan becomes NPA after overdue of",
    o: ["30 days", "60 days", "90 days", "180 days"],
    a: 2
  },
  {
    q: "Term loan is for",
    o: ["Raw material purchase", "Machinery and fixed assets", "Daily wages", "Electricity bill"],
    a: 1
  },
  {
    q: "Persuasion skill helps in",
    o: ["Fighting customers", "Convincing customers and banks", "Ignoring market", "Avoiding marketing"],
    a: 1
  },
  {
    q: "Negotiation is useful for",
    o: [
      "Buying raw material cheaper",
      "Selling at better price",
      "Contracting suppliers",
      "All of the above"
    ],
    a: 3
  },

  // REPLACED Q90
  {
    q: "Digital marketing includes",
    o: ["WhatsApp and Facebook promotion", "TV only", "Newspaper only", "Wall posters only"],
    a: 0
  },

  {
    q: "Retention means",
    o: ["Losing customers", "Keeping customers loyal", "Avoiding sales", "No marketing"],
    a: 1
  },
  {
    q: "GST registration is mandatory if turnover exceeds",
    o: ["₹5 lakh", "₹10 lakh", "₹20 lakh (general)", "₹1 crore"],
    a: 2
  },
  {
    q: "Sole proprietorship means",
    o: ["Business owned by one person", "Business owned by govt", "Business owned by partners", "Business owned by bank"],
    a: 0
  },

  // REPLACED Q94
  {
    q: "A project report is useful because",
    o: [
      "It helps in planning business",
      "It helps in getting bank loan",
      "It helps in understanding profit and cost",
      "All of the above"
    ],
    a: 3
  },

  {
    q: "If profit is 20% on SP ₹600, profit is",
    o: ["₹100", "₹120", "₹150", "₹200"],
    a: 1
  },
  {
    q: "If profit is 20% on SP ₹600, CP is",
    o: ["₹480", "₹500", "₹520", "₹540"],
    a: 0
  },
  {
    q: "If variable cost per unit is ₹70 and SP is ₹100, contribution per unit is",
    o: ["₹20", "₹25", "₹30", "₹35"],
    a: 2
  },
  {
    q: "Fixed cost ₹21,000, contribution per unit ₹30. BEP units",
    o: ["600", "700", "800", "900"],
    a: 1
  },
  {
    q: "If sales = ₹2,00,000 and net profit margin = 10%, net profit is",
    o: ["₹10,000", "₹15,000", "₹20,000", "₹25,000"],
    a: 2
  }
];

