function alphabetize() {
  const inputText = document.getElementById("inputs").value;
  const itemList = inputText.toString().split("b");
  itemList.sort();
  //alert(itemList[0]);
  document.getElementById("output").textContent = itemList;
}
