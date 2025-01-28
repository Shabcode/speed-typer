class Game {
    constructor(words,totalTime=30) {
        this.words = words;
        this.totalTime = totalTime;
        this.timer = totalTime;
        this.timerIntervall = null;
        this.wordGrid = new WordGrid(this.words);
        this.inputField = document.getElementById("input-field");
        this.timerElement = document.getElementById("timer");
        this.stats = {
            wpm: 0,
            accuracy: 0
        };
        this.isGameStarted = false;
    }
    // TODO
    start() { 
    }

    startTimer () {

    }

    end() {

    }

    onUserTyping() {

    }
}

class WordGrid {
    constructor(words) {
        this.words = words;
        this.wordGridContainer = document.getElementById("word-grid");
        this.currentIndex = 0;
        this.displayedWords = 25;
    }

    populate() {
        this.wordGridContainer.innerHTML = "";

        for (let i = 0; i < this.displayedWords; i++) {
        }
    }
}

class Word {
    constructor(text) {
        this.text = text;
        this.isCorrect = false;
        this.element = document.createElement("div");
        this.element.className = "word"
        this.element.textContent = this.text;
    }

    
    markCorrect() {
        this.element.style.color = "red";
        this.isCorrect = false;
    }
}