function moveWebview(existingWebview, container) {
  const webview = document.createElement('webview');
  const { attributes } = existingWebview;
  const originalGuestInstance = existingWebview.guestinstance;

  console.log('original guestinstance', existingWebview.guestinstance);

  for (let i = 0; i < attributes.length; i += 1) {
    webview.setAttribute(attributes[i].nodeName, attributes[i].nodeValue);
  }

  console.log('copied guestinstance', webview.guestinstance);

  container.appendChild(webview);
  existingWebview.parentNode.removeChild(existingWebview);

  return webview;
}

window.addEventListener("load", () => {
  const button = document.getElementById("button");
  const webviews = document.getElementById("webviews");

  let index = 0;

  button.addEventListener("click", () => {
    index = (index + 1) % 2;
    moveWebview(document.getElementById("webview"), webviews.children[index]);
  });
});
