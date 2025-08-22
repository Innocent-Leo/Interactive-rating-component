const ratings = document.querySelectorAll(".rate");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".container");

let selectedValue = "";

ratings.forEach((rate) => {
  rate.addEventListener("click", () => {
    ratings.forEach((el) => {
      el.classList.remove("bg-selected");
      el.classList.add("bg-normal");
    });

    rate.classList.remove("bg-normal");
    rate.classList.add("bg-selected");

    selectedValue = rate.textContent;
  });
});

submitBtn.addEventListener("click", (e) => {
  container.innerHTML = `
    <figure>
      <img src='./images/illustration-thank-you.svg'>
      <figcaption>You selected <span id='user-rating'></span> out of 5</figcaption>
    </figure>

    <h2>Thank you!</h2>

    <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
  `;

  const userRating = document.getElementById("user-rating");

  userRating.textContent = selectedValue;
});
