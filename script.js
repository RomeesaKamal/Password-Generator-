let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyBtn = document.getElementById("copyBtn");  // Copy button

// Showing input slider value and updating it
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
  sliderValue.textContent = inputSlider.value;
});



copyBtn.addEventListener('click', () => {
  passBox.select();
  document.execCommand("copy");

  // Change button color and icon color when clicked
  copyBtn.style.fill = "green";  // Change icon color to green (or your choice)
  copyBtn.style.stroke = "#ffffff";  // Change stroke to white (or your choice)
  setTimeout(() => {
  copyBtn.style.fill = "white";  // Change icon color to green (or your choice)
  }, 1000);
});


// Generate password button click event
genBtn.addEventListener('click', () => {
  let length = inputSlider.value;
  passBox.value = generatePassword(length);
});

// Function to generate password
function generatePassword(length) {
  let charset = "";
  
  if (lowercase.checked) charset += "abcdefghijklmnopqrstuvwxyz";
  if (uppercase.checked) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numbers.checked) charset += "0123456789";
  if (symbols.checked) charset += "!@#$%^&*()_+[]{}|;:,.<>?";

  if (charset.length === 0) {
    alert("Please select at least one character type.");
    return "";
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
  return password;
}
