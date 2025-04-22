const model = {
    inputText: "",
    anagrams: [],
    dictionary: new Set(),
  
    getText() {
      return this.inputText;
    },
  
    setText(newText) {
      this.inputText = newText.toLowerCase();
      this.setAnagrams(generateAnagrams(this.inputText));
    },
  
    getAnagrams() {
      return this.anagrams;
    },
  
    setAnagrams(list) {
      this.anagrams = list;
    },
  
    loadDictionary(callback) {
      fetch("words.txt")
        .then((res) => res.text())
        .then((text) => {
          this.dictionary = new Set(text.split("\n").map(word => word.trim().toLowerCase()));
          callback();
        });
    }
  };
  
  function generateAnagrams(str) {
    const results = new Set();
    const seen = new Set();
  
    function permute(prefix, remaining) {
      if (remaining.length === 0 && model.dictionary.has(prefix) && !seen.has(prefix)) {
        results.add(prefix);
        seen.add(prefix);
      }
  
      for (let i = 0; i < remaining.length; i++) {
        permute(prefix + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1));
      }
    }
  
    permute("", str.toLowerCase());
    return Array.from(results).sort();
  }
  
  