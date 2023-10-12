function isPalindrome(word) {
  // Write your algorithm here
  const normalWord = word.toLowerCase();
  const wordInReverse = normalWord.split('').reverse().join('');

  if (normalWord===wordInReverse){
    return true;
  }else{
  return false ;
  }
}

/* 
  Add your pseudocode here
convert the word to have similar casing ie .toLowerCase() or .toUpperCase()
if (word[0]===word[-1]{
  return True
}else{
  return False
}
}
  */

/*
  Add written explanation of your solution here
create 2 normalWord and wordInReverse variables to store the word at function level scope
the split method creates a new array without altering the original array(normalWord) then
reverses the order of the elements in the array wordInReverse then joins the elemnts

The if block check for similarity using the strict equality operator and returns false if 
the words are  similar it returns true and false if they are not similar
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
