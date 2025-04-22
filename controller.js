function handleInputChange() {
    const input = document.getElementById("inputText").value.trim();
    model.setText(input);
    view.renderAnagrams(model.getAnagrams());
  }
  
  window.onload = function () {
    model.loadDictionary(() => {
      console.log("Dictionary loaded.");
    });
  };
  
  