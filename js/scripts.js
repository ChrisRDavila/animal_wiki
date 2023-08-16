window.onload = function() {
  const form = document.querySelector("form");
  // we create an event handler for the form's submission
  form.onsubmit = function(event) {
    event.preventDefault();

    // we access two HTML elements, the drink menu and the message to underaged folks,
    // and add the hidden class to those elements;
    // doing this clears results before displaying new ones, which
    // allows the user to submit the form again and again, and
    // see new results.
    let bear = document.getElementById("bear");
    bear.setAttribute("class", "hidden");
    let trout = document.getElementById("trout");
    trout.setAttribute("class", "hidden");
    let wrong = document.getElementById("wrong");
    wrong.setAttribute("class", "hidden");

    // we gather the age value
    const animal = document.querySelector("input#animal").value;
    document.querySelector(".input").innerText = animal;

    // we check if the age is greater than 21.
    if (animal === "bear") {
      bear.removeAttribute("class");
    } else if (animal === "trout") {
      trout.removeAttribute("class");
    } else {
      wrong.removeAttribute("class");
    }
  };
};