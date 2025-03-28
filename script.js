function alphabetize() {
  const inputText = document.getElementById("inputs").value;
  const itemList = inputText.toString().split(String.fromCharCode(10));
  const itemMap = new Map();
  itemList.forEach(sortWords)
  function sortWords(item, index, arr) {
  	const upperCasedWord = arr[index].toUpperCase();
    const upperCaseLetters = upperCasedWord.split("");
    const spaceLessUpperCaseLetters = upperCaseLetters.filter((letter) => letter != " ");
    const spacelessWord = spaceLessUpperCaseLetters.join("");
    itemMap.set(spacelessWord, arr[index]);
  }
  const sortedList = new Map([...itemMap.entries()].sort());
  const sortedUpperCase = Array.from(sortedList.keys());
  const sortedOriginal = Array.from(sortedList.values());
  sortedUpperCase.forEach(alphabetizeWord);
  function alphabetizeWord(item, index, arr) {
  	const letters = arr[index].split("");
    const spaceLessLetters = letters.filter((letter) => letter != " ");
    spaceLessLetters.sort();
    const abcString = spaceLessLetters.join("");
    sortedUpperCase[index] = abcString;
  }
  document.getElementById("output").textContent = sortedUpperCase.join("\n");
  document.getElementById("output2").textContent = sortedOriginal.join("\n");
}

function copyText() {
  const sorted = document.getElementById("output");
  navigator.clipboard.writeText(sorted.textContent);
}
