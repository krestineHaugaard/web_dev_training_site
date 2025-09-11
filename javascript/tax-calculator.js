document.querySelector("#tax_form").addEventListener("submit", (e) => {
  e.preventDefault();

  const moneytaryAmount = document.querySelector("#txtMonetaryAmount").value;
  const taxPercentage = document.querySelector("#txtTaxPercentage").value;

  const usableTax = taxPercentage / 100;

  const taxAmount = moneytaryAmount * usableTax;
  const finalAmount = moneytaryAmount - taxAmount;

  document.querySelector("#finalTaxAmount").innerText = taxAmount;
  document.querySelector("#finalMoneyAmount").innerText = finalAmount;
});
