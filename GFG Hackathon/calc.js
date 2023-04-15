


function calculate_emi() {
    const loanAmount = parseFloat(document.getElementById("loan-amount").value);
    const interestRate = parseFloat(document.getElementById("interest-rate").value);
    const loanTerm = parseInt(document.getElementById("loan-term").value);
    
    const monthlyInterestRate = interestRate / (12 * 100);
    const denominator = Math.pow(1 + monthlyInterestRate, loanTerm) - 1;
    const emi = (loanAmount * monthlyInterestRate) / denominator * (1 + monthlyInterestRate);
    
    document.getElementById("result").innerText = `Your monthly EMI is Rs. ${emi.toFixed(2)}`;
  }
  

  function calculate_cagr() {
    var startValue = parseFloat(document.getElementById("startValue").value);
    var endValue = parseFloat(document.getElementById("endValue").value);
    var years = parseFloat(document.getElementById("years").value);
  
    var cagr = Math.pow((endValue / startValue), (1 / years)) - 1;
    var result = "The CAGR is " + (cagr * 100).toFixed(2) + "%.";
  
    document.getElementById("result").innerHTML = result;
  }


  function calculate_goal() {
    var currentAmount = parseFloat(document.getElementById("currentAmount").value);
    var goalAmount = parseFloat(document.getElementById("goalAmount").value);
    var timeframe = parseFloat(document.getElementById("timeframe").value);
  
    var annualRate = (goalAmount / currentAmount) ** (1/timeframe) - 1;
    var monthlyRate = (1 + annualRate) ** (1/12) - 1;
    var result = "You need to save " + ((goalAmount - currentAmount) / timeframe).toFixed(2) + " per year, " +
      ((goalAmount - currentAmount) / (timeframe * 12)).toFixed(2) + " per month, or " + 
      (monthlyRate * 100).toFixed(2) + "% of your current amount each month to reach your goal.";
  
    document.getElementById("result").innerHTML = result;
  }


  function calculate_lumpsum() {
    var investmentAmount = parseFloat(document.getElementById("investmentAmount").value);
    var interestRate = parseFloat(document.getElementById("interestRate").value);
    var investmentTimeframe = parseFloat(document.getElementById("investmentTimeframe").value);
  
    var futureValue = investmentAmount * (1 + interestRate / 100) ** investmentTimeframe;
  
    var result = "Your investment will be worth " + futureValue.toFixed(2) + " after " + investmentTimeframe + " years.";
  
    document.getElementById("result").innerHTML = result;
  }


  
function calculatePositionSize() {
  const capital = parseFloat(document.getElementById("capital").value);
  const buyingPrice = parseFloat(document.getElementById("buyingPrice").value);
  const stoplossPrice = parseFloat(document.getElementById("stoplossPrice").value);
  const riskPercentage = parseFloat(document.getElementById("riskPercentage").value);

  const riskAmount = capital * (riskPercentage / 100);
  const riskPerShare = buyingPrice - stoplossPrice;
  const positionSize = riskAmount / riskPerShare;

  const result = document.getElementById("result");
  result.innerText = `Position Size: ${positionSize.toFixed(2)} shares`;
}



function calculate_sip() {
  const investment = parseInt(document.getElementById("investment").value);
  const currentAge = parseInt(document.getElementById("current-age").value);
  const retirementAge = parseInt(document.getElementById("retirement-age").value);
  const interestRate = parseInt(document.getElementById("interest-rate").value);

  const months = (retirementAge - currentAge) * 12;
  const monthlyInterestRate = (interestRate / 100) / 12;

  const futureValue = investment * ((1 + monthlyInterestRate) ** months - 1) / monthlyInterestRate;

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `Total Investment: ${investment * months} Rupees<br>Future Value: ${futureValue.toFixed(2)} Rupees`;
}


function calculate_roi() {
  let investment = parseFloat(document.getElementById("investment").value);
  let returns = parseFloat(document.getElementById("return").value);
  let roi = ((returns - investment) / investment) * 100;
  document.getElementById("result").innerHTML = "ROI: " + roi.toFixed(2) + "%";
}

function calculate_breakEven() {
  let fixedCosts = parseFloat(document.getElementById("fixedCosts").value);
  let variableCosts = parseFloat(document.getElementById("variableCosts").value);
  let price = parseFloat(document.getElementById("price").value);
  let breakEven = fixedCosts / (price - variableCosts);
  if (isNaN(breakEven) || breakEven < 0) {
    document.getElementById("result").innerHTML = "Please enter valid inputs";
  } else {
    document.getElementById("result").innerHTML = "Break-Even Point: " + breakEven.toFixed(2) + " units";
  }
}


