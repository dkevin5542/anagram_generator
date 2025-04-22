function handleInputChange() {
  const input = document.getElementById("inputText").value.trim();
  model.setText(input);
  view.renderAnagrams(model.getAnagrams());
}

function showSection(section) {
    document.getElementById("generatorSection").style.display = section === "generator" ? "block" : "none";
    document.getElementById("dictionarySection").style.display = section === "dictionary" ? "block" : "none";
  
    if (section === "dictionary") {
      model.dictionaryPage = 0; // reset
      view.renderDictionary();
    }
  }
  

window.onload = function () {
  model.loadDictionary(() => {
    console.log("Dictionary loaded.");
    showSection("generator"); // Show generator by default
  });
};

function loadMoreWords() {
    model.loadNextPage();
    view.renderDictionary();
  }
  


  
  