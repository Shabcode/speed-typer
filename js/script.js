const words = [
    "hello", "world", "javascript", "typing", "game", "speed", "test", "fun",
    "challenge", "program", "developer", "keyboard", "coding", "skills", "practice",
    "learning", "focus", "accuracy", "flow", "rhythm", "words", "time", "limit", "fast",
    "slow", "improve", "effort", "success", "failure", "type", "restart", "goal",
    "down", "tell", "in", "open", "own", "all", "more", "house", "head", "see", 
    "interest", "point", "present", "of", "seem", "few", "have", "the", "word", 
    "can", "for", "early", "write", "stand", "good", "next", "time", "year", "soon", 
    "show", "give", "place", "right", "big", "small", "name", "many", "light", "long", 
    "hard", "work", "late", "next", "help", "fast", "slow", "run", "walk", "back", 
    "side", "hold", "start", "finish", "blue", "green", "yellow", "red", "black", 
    "white", "fast", "bright", "clean", "open", "close", "left", "right", "up", "down", 
    "forward", "backward", "good", "bad", "warm", "cold", "happy", "sad", "easy", 
    "tough", "soft", "hard", "soft", "stone", "wood", "steel", "leaf", "tree", 
    "forest", "wind", "rain", "sun", "moon", "star", "day", "night", "light", "dark", 
    "cloud", "shine", "clear", "fog", "snow", "storm", "blow", "wave", "boat", 
    "car", "train", "plane", "bus", "bike", "horse", "ride", "drive", "sit", "stand", 
    "eat", "drink", "sleep", "wake", "talk", "listen", "sing", "dance", "laugh", 
    "cry", "run", "jump", "climb", "sit", "lie", "fall", "catch", "throw", "hit", 
    "kick", "punch", "shake", "wave", "move", "stop", "go", "wait", "think", "know", 
    "feel", "believe", "ask", "tell", "say", "hear", "see", "touch", "smell", "taste"
  ];

  document.addEventListener("DOMContentLoaded", () => {

    const speedTyper = new Game(words);
    const inputField = document.getElementById("input-field");
    inputField.addEventListener("input", () => speedTyper.onUserTyping());
    
  });