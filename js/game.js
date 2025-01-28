class Game {
    constructor(words, totalTime = 30) {
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


    start() {
        this.wordGrid.populate();
        this.inputField.disabled = false;
        this.inputField.focus();
        this.startTimer();
    }

    startTimer() {
        this.timerInterval = setInterval(() => {
            this.timer--;
            this.timerElement.textContent = this.timer;

            if (this.timer <= 0) {
                clearInterval(this.timerInterval);
                this.end();
            }
        }, 1000);
    }

    end() {
        this.inputField.disabled = true;
        // TODO Calculate STATS
    }

    onUserTyping() {
        if (!this.isGameStarted) {
            this.start();
            this.isGameStarted = true;
        }
        this.wordGrid.updateWords(this.inputField.value);
    }
}

class WordGrid {
    constructor(words) {
        this.words = words;
        this.wordGridContainer = document.getElementById("word-grid");
        this.currentIndex = 0;
        this.displayedWords = 25;
        this.lineThreshold = 10;
    }

    populate() {
        this.wordGridContainer.innerHTML = "";

        for (let i = 0; i < this.displayedWords; i++) {
            const randomWord = this.getRandomWord();
            const word = new Word(randomWord);
            this.wordGridContainer.appendChild(word.element)
        }
    }

    updateWords(userInput) {
        const fillWords = this.wordGridContainer.children;
        const typedWords = userInput.trim().split(" ");

        for (let i = 0; i < typedWords.length; i++) {
            if (i < fillWords.length) {
                const wordElement = fillWords[i];
                const wordText = wordElement.textContent;
                const wordInstance = new Word(wordElement.textContent);

                wordInstance.updateLetterFeedback(typedWords[i]);
            }
        }


        const firstLineWords = Array.from(this.wordGridContainer.children).slice(0, this.lineThreshold);
        const incompleteWords = firstLineWords
            .filter((word) => !word.classList.contains("correct")
            );

        if (incompleteWords.length === 0) {
            for (let i = 0; i < this.lineThreshold; i++) {
                const randomWord = this.getRandomWord();
                const word = new Word(randomWord);
                this.wordGridContainer.appendChild(word.element);
            }
        }
    }

    getRandomWord() {
        return this.words[Math.floor(Math.random() * this.words.length)];
    }
}

class Word {
    constructor(text) {
        this.text = text;
        this.isCorrect = false;
        this.element = document.createElement("div");
        this.element.className = "word"
        this.renderLetters();
    }

    renderLetters() {
        this.element.innerHTML = "";
        for (const letter of this.text) {
            const span = document.createElement("span");
            span.textContent = letter;
            this.element.appendChild(span);
        }
    }

    updateLetterFeedback(userInput) {
        const letterElements = this.element.children;

        for (let i = 0; i < letterElements.length; i++) {
            const letterElement = letterElements[i];
            const userLetter = userInput[i] || "";

            if (userLetter === letterElement.textContent) {
                letterElement.className = "letter correct";
            } else if (userLetter) {
                letterElement.className = "letter incorrect";
            } else {
                letterElement.className = "letter";
            }
        }

        if (userInput === this.text) {
            this.element.classList.add("correct");
        } else {
            this.element.classList.remove("correct");
        }
    }
}