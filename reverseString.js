 
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
    s[i] = s[len - 1 - i];
   
    s[len - 1 - i] = temp;
  }
  // return s;
}
 reverseString(s);
 console.log(JSON.stringify(s))
 
// Using while loop
 let c = ['h','e','l','l','o'];

let left = 0;
let right = c.length - 1;

while (left < right) {
  let temp = c[left];
  c[left] = c[right];
  c[right] = temp;
  left++;
  right--;
}
console.log(c)
