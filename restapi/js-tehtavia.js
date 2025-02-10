// a) Tee ohjelma, joka tulostaa kahdesta annetusta luvusta suuremman.
function printMaxOfTwoNumbers(a, b) {
  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
}

//printMaxOfTwoNumbers(7, 2);

// b) Tee ohjelma, joka tutkii onko annettu sana palindromi.
function isPalindrome(word) {
  let reversedWord = word.split("").reverse();
  if (word === reversedWord) {
    console.log("Annettu sana on palindromi");
  } else {
    console.log("Annettu sana ei ole palindromi");
  }
}

isPalindrome("kayak");
isPalindrome("saippuakauppias");
isPalindrome("hello");