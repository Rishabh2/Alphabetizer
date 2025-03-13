function alphabetize() {
  const inputText = document.getElementById("inputs").value;
  //alert(inputText.raw());
  const itemList = inputText.toString().split(String.fromCharCode(10));
  const itemMap = new Map();
  itemList.forEach(alphabetizeWord);
  function alphabetizeWord(item, index, arr) {
  	const letters = arr[index].toUpperCase().split("");
    letters.sort();
    //letters.push("\n");
    const abcString = letters.join("");
    itemMap.set(arr[index], abcString);
  }
  const sortedList = new Map([...itemMap.entries()].sort());
  itemList.sort();
  //alert(itemList[0]);
  const finalList = Array.from(sortedList.values());
  const finalList2 = Array.from(sortedList.keys());
  document.getElementById("output").textContent = finalList.join("\n");
  document.getElementById("output2").textContent = finalList2.join("\n");
}
