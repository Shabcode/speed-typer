class WordManager {
  constructor(wordList) {
      this.wordList = wordList.split(" ");
      this.wordCount = this.wordList.length;
      this.wordsContainer = document.getElementById("words");
  }

  generateRandomWord() {
      const randomIndex = Math.floor(Math.random() * this.wordCount);
      return this.wordList[randomIndex];
  }

  formatWord(word) {
      return `<div class="word"><span class="letter">${word.split('').join('</span><span class="letter">')}</span></div>`;
  }

  populateWords(count = 200) {
      this.wordsContainer.innerHTML = "";
      for (let i = 0; i < count; i++) {
          this.wordsContainer.innerHTML += this.formatWord(this.generateRandomWord());
      }
      document.querySelector(".word").classList.add("current");
      document.querySelector(".letter").classList.add("current");
  }
}

class Stats {
  static calculateWPM(startTime, endTime, correctWords) {
      const elapsedTime = (endTime - startTime) / 1000; // in seconds
      return (correctWords / elapsedTime) * 60;
  }
}

class InputHandler {
  constructor(game) {
      this.game = game;
      this.initListeners();
  }

  initListeners() {
      document.getElementById("game").addEventListener("keyup", (e) => this.handleKeyup(e));
      document.getElementById("newGameBtn").addEventListener("click", () => this.game.newGame());
  }

  handleKeyup(event) {
      if (!this.game.timer && event.key.length === 1) {
          this.game.startTimer();
      }
      this.processInput(event.key);
  }

  processInput(key) {
      const currentWord = document.querySelector(".word.current");
      const currentLetter = document.querySelector(".letter.current");
      const expected = currentLetter?.innerText || " ";

      if (key.length === 1 && key !== " ") {
          if (currentLetter) {
              currentLetter.classList.add(key === expected ? "correct" : "incorrect");
              currentLetter.classList.remove("current");
              if (currentLetter.nextSibling) {
                  currentLetter.nextSibling.classList.add("current");
              }
          }
      } else if (key === " ") {
          if (expected !== " ") {
              document.querySelectorAll(".word.current .letter:not(.correct)")
                  .forEach(letter => letter.classList.add("incorrect"));
          }
          this.moveToNextWord();
      } else if (key === "Backspace") {
          this.handleBackspace();
      }
  }

  moveToNextWord() {
      const currentWord = document.querySelector(".word.current");
      currentWord.classList.remove("current");
      currentWord.nextSibling.classList.add("current");
      const firstLetter = currentWord.nextSibling.firstChild;
      if (firstLetter) firstLetter.classList.add("current");
  }

  handleBackspace() {
      const currentLetter = document.querySelector(".letter.current");
      if (currentLetter && currentLetter.previousSibling) {
          currentLetter.classList.remove("current");
          currentLetter.previousSibling.classList.add("current");
          currentLetter.previousSibling.classList.remove("incorrect", "correct");
      }
  }
}

class Game {
  constructor() {
      this.words = "in one good real one not school set they state high life consider on and not come what also for set point can want as while with of order child about school thing never hold find order each too between program work end you home place around while place problem end begin interest while public or where see time those increase interest be give end think seem small as both another a child same eye you between way do who into again good fact than under very head become real possible some write know however late each that with because that place nation only for each change form consider we would interest with world so order or run more open that large write turn never over open each over change still old take hold need give by consider line only leave while what set up number part form want against great problem can because head so first this here would course become help year first end want both fact public long word down also long for without new turn against the because write seem line interest call not if line thing what work people way may old consider leave hold want life between most place may if go who need fact such program where which end off child down change to from people high during people find to however into small new general it do that could old for last get another hand much eye great no work and with but good there last think can around use like number never since world need what we around part show new come seem while some and since still small these you general which seem will place come order form how about just also they with state late use both early too lead general seem there point take general seem few out like might under if ask while such interest feel word right again how about system such between late want fact up problem stand new say move a lead small however large public out by eye here over so be way use way use like say people work for since interest so face order school good not most run problem group run she late other problem real form what just high no man do under would to each too end point give number child through so this large see get form also all those course to work during about he plan still so like down he look down where course at who plan way so since come against he all who at world because while so few last these mean take house who old way large no first too now off would in this course present order home public school back own little about he develop of do over help day house stand present another by few come that down last or use say take would each even govern play around back under some line think she even when from do real problem between long long as school do as mean to all on other good may from might call world thing life turn of he look last problem after get show want need thing old other during be again develop come from consider the now number say life interest to system only group world same state school one problem between for turn run at very against eye must go both still all a as so after play eye little be those should out after which these both much house become both school this he real and may mean time by real number other as feel at end ask plan come turn by all head increase he present increase use stand after see order lead than system here ask in of look point little too without each for both but right we come world much own set we right off long those stand go both but under now must real general then before with much those at no of we only back these person plan from run new as own take early just increase only look open follow get that on system the mean plan man over it possible if most late line would first without real hand say turn point small set at in system however to be home show new again come come under because about show face child know person large program how over could thing from out world while nation stand part run have look what many system order some one program you great could write day do he any also where child late face eye run still again on by as call high the must by late little mean never another seem to leave because for day against public long number word about after much need open change also bold italic underline exclamation question mark period comma semicolon colon hyphen dash parentheses brackets curly braces exclamation point end begin start stop go come run jump fly swim walk talk listen hear see look touch feel taste smell think know understand believe hope wish dream imagine create design build make do have get give take find lose keep hold put leave stay go come run jump fly swim walk talk listen hear see look touch feel taste smell think know understand believe hope wish dream imagine create design build make do have get give take find lose keep hold put leave stay go come run jump fly swim walk talk listen hear see look touch feel taste smell think know understand believe hope wish dream imagine create design build make do have get give take find lose keep hold put leave stay go come run jump fly swim walk talk listen hear see look touch feel taste smell think know understand believe hope wish dream imagine create design build make do have get give take find lose keep hold put leave stay go come run jump fly swim walk talk listen hear see look touch feel taste smell think know understand believe hope wish dream imagine create design build make do have get give take find lose keep hold put leave stay go come run jump fly swim walk talk listen hear see look touch feel taste smell think know understand believe hope wish dream imagine create design build make do have get give take find lose keep hold put leave stay go come run jump fly swim walk talk listen hear see look touch feel taste smell think know understand believe hope wish dream imagine create design build make do have get give take find lose keep hold put leave stay go come run jump fly swim walk talk listen hear see look touch feel taste smell think know understand believe hope wish dream imagine create design build make do have get give take find lose keep hold put leave stay go come run jump fly swim walk talk listen hear see look touch feel taste smell think know understand believe hope wish dream imagine create design build make do have get give take find lose keep hold put leave stay go come run jump fly swim walk talk listen hear see look touch feel taste smell think know understand believe hope";
      this.wordManager = new WordManager(this.words);
      this.inputHandler = new InputHandler(this);
      this.gameTime = 30 * 1000;
      this.timer = null;
      this.startTime = null;
      this.init();
  }

  init() {
      this.newGame();
  }

  newGame() {
      this.wordManager.populateWords();
      document.getElementById("info").innerText = this.gameTime / 1000;
      this.timer = null;
  }

  startTimer() {
      this.startTime = Date.now();
      this.timer = setInterval(() => {
          const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
          const timeLeft = Math.max(0, this.gameTime / 1000 - elapsed);
          document.getElementById("info").innerText = timeLeft;
          if (timeLeft <= 0) {
              this.gameOver();
          }
      }, 1000);
  }

  gameOver() {
      clearInterval(this.timer);
      document.getElementById("game").classList.add("over");
      document.getElementById("info").innerText = `WPM: ${Stats.calculateWPM(this.startTime, Date.now(), 50)}`; // Placeholder for correct word count
  }
}

const speedTyper = new Game();
