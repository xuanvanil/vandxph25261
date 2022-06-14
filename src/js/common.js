export function render(element, content) {
  const elementID = document.getElementById(element);
  if (!elementID) return;
  elementID.innerHTML = content;
}
