let x = 0;

(function () {
  function $(id) {
    return document.getElementById(id);
  }

  if (x == 2) {
    let currentUrl = window.location.href;
    let urlParts = currentUrl.split("/");
    urlParts.pop();

    let newLastPart = "flower.html";

    window.location = urlParts.join("/") + "/" + newLastPart;
  }

  console.log(x);

  var card = $("card"),
    openB = $("open"),
    closeB = $("close"),
    timer = null;
  console.log("wat", card);
  openB.addEventListener("click", function () {
    console.log("opening");
    x++;
    console.log(x);
    card.setAttribute("class", "open-half");
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute("class", "open-fully");
      timer = null;
    }, 1000);

    if (x == 3) {
      // let currentUrl = window.location.href;
      //let urlParts = currentUrl.split("/");
      //urlParts.pop();

      //let newLastPart = "flower.html";

      //window.location = urlParts.join("/") + "/" + newLastPart;
      document.querySelector(".wishesFont center").innerHTML =
        "Roses are red, violets are blue,<br>" +
        "I'm so happy, lost in the beauty of you.";

      // Select the div with the class 'img'
      let imgDiv = document.querySelector(".img");

      // Update the background-image URL
      imgDiv.style.backgroundImage = "url('./images/image-two.jpg')";

      // Create the button element
      let button = document.createElement("button");

      // Set the button's text
      button.innerText = "Accept My Digital Flower";

      button.className = "flower-button";

      // Add an event listener to handle the click event
      button.addEventListener("click", function () {
        window.location.href = "flower.html";
      });

      // Create a div to wrap the button
      let buttonWrapper = document.createElement("div");

      // Append the button to the div
      buttonWrapper.appendChild(button);

      // Append the buttonWrapper div to the center element inside .wishesFont
      let centerElement = document.querySelector(".wishesFont center");
      centerElement.appendChild(buttonWrapper);
    }
  });

  closeB.addEventListener("click", function () {
    console.log("closing");
    x++;
    console.log(x);
    card.setAttribute("class", "close-half");
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute("class", "");
      timer = null;
    }, 1000);
  });
})();
