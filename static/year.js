function timePassedSinceBirthday(birthDate) {
  let currentTime = new Date();
  let elapsedTime = currentTime - birthDate;
  let years = elapsedTime / (365.25 * 24 * 60 * 60 * 1000);
  return years.toFixed(10);
}

let birthday = new Date(2005, 9, 27, 2, 35, 0);

function updateDisplay() {
  let timePassed = timePassedSinceBirthday(birthday);
  let ageContainer = document.getElementById("number");
  ageContainer.style.width = 150 + "px";
  document.getElementById("number").innerHTML = timePassed;
  requestAnimationFrame(updateDisplay);
}

updateDisplay();