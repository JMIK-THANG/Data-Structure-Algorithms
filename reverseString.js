 
 // Reverse String
 // Write a function that reverses a string.
 //  The input string is given as an array of character
 // You must do this by modifying the input array
let s =['w','e','l','c','o','m','e']
function reverseString(s) {
  let len = s.length; 
  let halfLen = Math.floor(len / 2);

  for (let i = 0; i < halfLen; i++){
    let temp = s[i];
     console.log(s[i])
    s[i] = s[len - 1 - i];
   
    s[len - 1 - i] = temp;
  }
  // return s;
}
 reverseString(s);
 console.log(s)
