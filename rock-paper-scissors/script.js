const container = document.querySelector(".container");
const userResult = document.querySelector(".user-result img");
const computerResult = document.querySelector(".cmp-result img ");
const result = document.querySelector(".result");
const optionImage = document.querySelectorAll(".option-image");

optionImage.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    optionImage.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("active");
    });

    container.classList.add("start");

    let time = setTimeout(() => {
      container.classList.remove("start");

      let imageSrc = e.target.src;
      userResult.src = imageSrc;

      let RandomNumber = Math.floor(Math.random() * 3);

      let cmpImages = [
        "images/rock.png",
        "images/paper.png",
        "images/scissors.png",
      ];
      computerResult.src = cmpImages[RandomNumber];

      let cmpValue = ["R", "P", "S"][RandomNumber];

      let userValue = ["R", "P", "S"][index];

      const outcomes = {
        RR: "Draw",
        PP: "Draw",
        SS: "Draw",
        RP: "Cmp",
        RS: "User",
        PR: "User",
        PS: "Cmp",
        SR: "Cmp",
        SP: "User",
      };

      const OutcomeValue = outcomes[userValue + cmpValue];

      result.textContent =
        userValue === cmpValue ? "Match Draw" : `${OutcomeValue} Won !!`;
    }, 2500);
  });
});
