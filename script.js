const textareaEl = document.querySelector(".textarea");

const charactersNumberEl = document.querySelector(".stat__number--characters");
const wordsNumberEl = document.querySelector(".stat__number--words");
const twitterNumberEl = document.querySelector(".stat__number--twitter");
const facebookNumberEl = document.querySelector(".stat__number--facebook");

const TWITTER_LIMIT = 280;
const FACEBOOK_LIMIT = 2200;

const inputHandler = () => {
  if (textareaEl.value.includes("<script>")) {
    alert("You can't use <script> in your text.");
    textareaEl.value = textareaEl.value.replace("<script>", "");
  }
  // Determine new numbers
  const numberOfCharacters = textareaEl.value.length;

  // Words
  const wordsStr = textareaEl.value.trim();
  const wordsArr = wordsStr.split(" ").filter((word) => word.length > 0);
  const numberOfWords = wordsArr.length;

  // Twitter
  const twitterCharsLeft = TWITTER_LIMIT - numberOfCharacters;

  // Add visual indicator if limit is exceeded
  if (twitterCharsLeft < 0) {
    twitterNumberEl.classList.add("stat__number--limit");
  } else {
    twitterNumberEl.classList.remove("stat__number--limit");
  }

  // Facebook
  const facebookCharsLeft = FACEBOOK_LIMIT - numberOfCharacters;

  // Add visual indicator if limit is exceeded
  if (facebookCharsLeft < 0) {
    facebookNumberEl.classList.add("stat__number--limit");
  } else {
    facebookNumberEl.classList.remove("stat__number--limit");
  }

  // set new numbers
  charactersNumberEl.textContent = numberOfCharacters;
  wordsNumberEl.textContent = numberOfWords;
  twitterNumberEl.textContent = twitterCharsLeft;
  facebookNumberEl.textContent = facebookCharsLeft;
};

textareaEl.addEventListener("input", inputHandler);
