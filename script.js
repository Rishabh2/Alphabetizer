function alphabetize() {
  const inputText = document.getElementById("inputs").value;
  const itemList = inputText.split(/\n?\r/);
  alert(itemList.length);
  document.getElementById("output").textContent = inputText;
}
