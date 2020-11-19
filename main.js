const main = function ( ) {
  alignWelcomeMessage();
  equipWindow();
}

function alignWelcomeMessage() {
  const wmd = $(".welcomeMessage")[0]; //wmd == welcome message div
  const html = $("html")[0];
  const htmlH = html.clientHeight; //H for clientHeight
  const wmdH = wmd.clientHeight;
  const spaceAbove = (htmlH - wmdH) / 2;
  console.log(spaceAbove);
  wmd.style.marginTop = spaceAbove+"px";
}
function equipWindow() {
  window.addEventListener("resize", alignWelcomeMessage);
}
function $(aString) {
  return document.querySelectorAll(aString);
}
window.onload = main;
