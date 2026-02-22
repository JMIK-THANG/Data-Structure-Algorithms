// Separate even and odd numbers

const arr = [1,2,3,4,5,6];

const result = {even: [], odd:[]}; 

function evenOdd(){

      for (let i = 0; i< arr.length; i++){
      
            if(i%2 === 0 ){ 
                  result.even.push(i); 
            }
            else { 
                  result.odd.push(i);
            }
      }
      return result; 
}

const output = evenOdd(); 
console.log(output)