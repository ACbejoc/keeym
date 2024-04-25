document.getElementById("my_form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Check if 'YES' is checked
  var yesCheckbox = document.getElementById("answer_yes");
  if (yesCheckbox.checked) {
    document.querySelector('.results').innerText = 'Ayyeeeeiiiihhh I Love you babbiii';
  } else {
    document.querySelector('.results').innerText = 'Di mo ako lab?? huhuhuhuhur';
  }
});