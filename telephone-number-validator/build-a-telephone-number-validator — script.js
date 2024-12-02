
** start of undefined **

function validatePhoneNumber(input) {
  const validPattern = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;
  return validPattern.test(input);
}

// Event listeners for buttons
document.getElementById('check-btn').addEventListener('click', () => {
  const userInput = document.getElementById('user-input').value.trim();
  const resultsDiv = document.getElementById('results-div');

  if (!userInput) {
    alert("Please provide a phone number");
    return;
  }

  if (validatePhoneNumber(userInput)) {
    resultsDiv.textContent = `Valid US number: ${userInput}`;
  } else {
    resultsDiv.textContent = `Invalid US number: ${userInput}`;
  }
});

document.getElementById('clear-btn').addEventListener('click', () => {
  document.getElementById('results-div').textContent = '';
  document.getElementById('user-input').value = '';
});

** end of undefined **

