const birthday = new Date("2005-10-27");

function timePassedSinceBirthday(birthday) {
  const now = new Date();
  const diffMs = now - birthday;
  const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365.25);
  return diffYears.toFixed(9); // always 9 decimal digits
}

function updateDisplay() {
  const el = document.getElementById("number");
  if (!el) return;

  el.innerText = timePassedSinceBirthday(birthday);

  requestAnimationFrame(updateDisplay);
}

updateDisplay();

function getAverageBackgroundColor(element, callback) {
  const img = new Image();
  const bg = element.style.backgroundImage.match(/url\(["']?(.+?)["']?\)/);
  if (!bg) return callback("rgb(0,0,0)");
  img.crossOrigin = "Anonymous";
  img.src = bg[1];
  img.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, 1, 1);
    const p = ctx.getImageData(0, 0, 1, 1).data;
    callback(`rgb(${p[0]},${p[1]},${p[2]})`);
  };
}
