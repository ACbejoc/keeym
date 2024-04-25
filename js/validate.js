document.getElementById("my_form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Check if 'YES' is checked
  var yesCheckbox = document.getElementById("answer_yes");
  var noCheckbox = document.getElementById("answer_no");
  if (yesCheckbox.checked) {
    document.querySelector('.results').innerText = 'Ayyeeeeiiiihhh i love you very much babbiii';
  } else if (noCheckbox.checked) {
    document.querySelector('.results').innerText = 'Di mo ako lab?? huhuhuhuhur';
  }else {
    document.querySelector('.results').innerText = 'Pamili ug usa sa choices, or ako imong pilion ohohohoyy';
  }
});
