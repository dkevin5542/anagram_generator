const view = {
  renderAnagrams(anagrams) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = anagrams.length
      ? anagrams.join(", ")
      : "No valid English anagrams found.";
  }
};

  