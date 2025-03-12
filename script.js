function alphabetize() {
  const inputText = document.getElementById("inputs").value;
  const itemList = inputText.toString().split(" ");
  alert(itemList.length);
  document.getElementById("output").textContent = inputText;
}
