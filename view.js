const view = {
  renderAnagrams(anagrams) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = anagrams.length
      ? anagrams.join(", ")
      : "No valid English anagrams found.";
  }
};

view.renderDictionary = function () {
  const outputDiv = document.getElementById("dictionaryList");
  const words = model.getPagedWords();

  const wordHTML = `<div class="dictionary-grid">${words.map(w => `<span>${w}</span>`).join("")}</div>`;
  const showMoreBtn = model.hasMoreWords()
    ? `<button class="load-more-btn" onclick="loadMoreWords()">Load More</button>`
    : "";

  outputDiv.innerHTML = wordHTML + showMoreBtn;
};



  