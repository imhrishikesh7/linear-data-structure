console.clear()

//Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

console.log("Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?")
function count(arr, n, sum, pair)
{
    let count = 0;
    for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++)
            if (arr[i] + arr[j] == sum){
              count++;
              var pair = [arr[i], arr[j]]
              // document.write(pair)
              console.log(pair)
            }
                
 
    return count;
}
let arr = [1, 2, 4, 5, 2, 6, 8, 8, 10, 10, 10, 2];
let n = arr.length;
let sum = 7;
console.log("Count of pairs is " + count(arr, n, sum,))


//Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.

console.log("Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.")
var arr2 = [13, 11, 8, 4, 19, 22, 25, 1, 97]

var rev = []

for (i=arr2.length-1; i>=0; i--){
  rev.push(arr2[i])
}

console.log(arr2)
console.log(rev)


//Q3. Write a program to check if two strings are a rotation of each other?

console.log("Q3. Write a program to check if two strings are a rotation of each other?")
function rot (str1, str2) {
    if (str1 === str2) return true;
    if (str1.length !== str2.length) return false;
    
    var start2 = str2.indexOf(str1[0]);
    if (start2 === -1) return false;

    return str1 === str2.slice(start2) + str2.slice(0, start2)
}

console.log(rot("abcd", "abcd"));


//Q4. Write a program to print the first non-repeated character from a string?

console.log("Q4. Write a program to print the first non-repeated character from a string?")
function nonRepeat(s){
   for(let i = 0; i < s.length; i++)
   {
       if (s.indexOf(s.charAt(i),s.indexOf(s.charAt(i))+1) == -1)
       {
           console.log(s[i])
           break
       }
   }
   return
}
let s = 'virender'
nonRepeat(s)


//Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.

console.log("Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.")
function hanoi(n, from_rod,  to_rod,  aux_rod)
{
    if (n == 0)
    {
        return;
    }
    hanoi(n - 1, from_rod, aux_rod, to_rod);
    console.log("Move disk " + n + " from rod " + from_rod + " to rod " + to_rod);
    hanoi(n - 1, aux_rod, to_rod, from_rod);
}
var N = 3;
hanoi(N, 'A', 'C', 'B');


//Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.

console.log("Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.")
function isOperator(x) {
    switch (x) {
        case '+':
        case '-':
        case '/':
        case '*':
            return true;
    }
    return false;
}

function postToPre(post_exp) {
    var s = [];
    var length = post_exp.length;

    for (i = 0; i < length; i++) {

        if (isOperator(post_exp[i])) {

            var op1 = s[s.length - 1];
            s.pop();
            var op2 = s[s.length - 1];
            s.pop();

            var temp = post_exp[i] + op2 + op1;

            s.push(temp);
        }
        else {
            s.push(post_exp[i] + "");
        }
    }

    var ans = "";
    while (s.length > 0)
        ans += s.pop();
    return ans;
}

var post_exp = "ABC/-AK/L-*";
console.log("Prefix : " + postToPre(post_exp));



//Q7. Write a program to convert prefix expression to infix expression.

console.log("Q7. Write a program to convert prefix expression to infix expression.")
function isOperator(x) {
    switch (x) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '^':
        case '%':
            return true;
    }
    return false;
}

function convert(str) {
    let stack = [];

    let l = str.length;

    for (let i = l - 1; i >= 0; i--) {
        let c = str[i];

        if (isOperator(c)) {
            let op1 = stack[stack.length - 1];
            stack.pop()
            let op2 = stack[stack.length - 1];
            stack.pop()

            let temp = "(" + op1 + c + op2 + ")";
            stack.push(temp);
        }
        else {
            stack.push(c + "");
        }
    }
    return stack[stack.length - 1];
}

let exp = "*-A/BC-/AKL";

console.log("Infix : " + convert(exp));


//Q8. Write a program to check if all the brackets are closed in a given code snippet.

console.log("Q8. Write a program to check if all the brackets are closed in a given code snippet.")
class Stacks{
  constructor(){
    this.items = []
    this.size = 0
    this.push = function(val){
      this.items.push(val)
      this.size += 1
    }
    this.pop = function(){
      if(this.size == 0){
        return "Stack is empty"
      }
      this.size -= 1
      return this.items.pop()
    }
    this.peek = function(){
      if(this.size == 0){
        return "Stack is empty"
      }
      return this.items[this.size - 1]
    }
  }
}

var ex = "{{{{][}}}}"
var exStack = new Stacks()
function isBalanced(exp){
  for(var i=0;i<exp.length;i++){
    var b = exp[i]
    if(b =='(' || b =='{' || b == '['){
      exStack.push(b)
      continue
    }
    if(exStack.size == 0){
      return false
    }
    var bracket = exStack.pop()
    switch(b){
      case ')' : 
        if(bracket == '[' || bracket == '{'){
          return false
        }
        break
      case '}' :
        if(bracket == '[' || bracket == '('){
          return false
        }
        break
      case ']' :
        if(bracket == '(' || bracket == '{'){
          return false
        }
        break
    }
  }
  return exStack.size == 0 ? true : false
}

var res = isBalanced(exp)
if(res == true){
  console.log('Balanced')
}
else{
  console.log('Not Balanced')
}


//Q9. Write a program to reverse a stack.
console.log("Q9. Write a program to reverse a stack")
let st = [];

function insert_at_bottom(x) {
    if (st.length == 0)
        st.push(x);
    else {
        let a = st.pop();
        insert_at_bottom(x);

        st.push(a);
    }


}

function reverse() {
    if (st.length > 0) {
        let x = st.pop();
        reverse();

        insert_at_bottom(x);
    }
}
st.push('1');
st.push('2');
st.push('3');
st.push('4');

console.log("Original Stack");

console.log(st.join(" "));

reverse();

console.log("Reversed Stack");

console.log(st.join(" "));



//Q10. Write a program to find the smallest number using a stack.

console.log("Q10. Write a program to find the smallest number using a stack.")
class Stacks{
  constructor(){
    this.items = []
    this.size = 0
    this.push = function(val){
      this.items.push(val)
      this.size += 1
    }
    this.pop = function(){
      if(this.size == 0){
        return "Stack is empty"
      }
      this.size -= 1
      return this.items.pop()
    }
    this.peek = function(){
      if(this.size == 0){
        return "Stack is empty"
      }
      return this.items[this.size - 1]
    }
  }
}


var s = new Stacks()
s.push(50)
s.push(67)
s.push(100)
s.push(3)
s.push(20)
console.log(s.items)

var i = s.items.length-1
var m = s.items[i]
var min = []
s.pop()

for(j=s.items.length-1; j>0; j--){
  min = s.items[j]
  if(m>min){
    m=min
    s.pop()
  }
  else{
    s.pop()
  }
}
console.log(m)
