const rate = document.querySelectorAll(".rate");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".container");
const errorMsg = document.getElementById("error-msg");

let selectedValue = "";

rate.forEach((e) => {
  e.addEventListener("click", () => {
    rate.forEach((el) => {
      el.classList.remove("bg-selected");
      el.classList.add("bg-normal");
    });

    e.classList.remove("bg-normal");
    e.classList.add("bg-selected");

    selectedValue = e.textContent;

    const existingError = document.querySelector(".error-msg");
    if (existingError) {
      existingError.remove();
    }

    rate.forEach((e) => {
      e.style.border = "none";
    });
  });
});

submitBtn.addEventListener("click", () => {
  if (!selectedValue) {
    rate.forEach((e) => {
      e.style.border = "2px solid hsl(25, 97%, 53%)";
    });

    const errorMsg = document.createElement("p");
    const ratings = document.querySelector(".ratings");

    errorMsg.textContent = "Please select a rating before submitting";
    errorMsg.classList.add("error-msg");

    ratings.insertAdjacentElement("afterend", errorMsg);
  } else {
    container.innerHTML = `
    <figure>
      <img src='./images/illustration-thank-you.svg'>
    </figure>

    <p id='rate-highlight'>You selected <span id='user-rating'></span> out of 5</p>

    <h2>Thank you!</h2>

    <p id='text'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
  `;

    const userRating = document.getElementById("user-rating");
    const rateHighlight = document.getElementById("rate-highlight");
    const text = document.getElementById("text");

    userRating.textContent = selectedValue;

    rateHighlight.classList.add("highlight");

    container.style.alignItems = "center";

    text.classList.add("text");
  }
});
