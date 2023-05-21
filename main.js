//Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

console.log("--------------------Answer1-------------------");
function givenSum(arr1, sum) {
    let pairs = [];
    let arr = {};
    for (let i = 0; i < arr1.length; i++) {
      let number = sum - arr1[i];
      if (arr[number] !== undefined) {
        pairs.push([arr1[i], number]);
      }
      arr[arr1[i]] = i;
    }
    return pairs;
  }
let arr1 = [0,1,2,3,4,5,6,7,8,9,10];
let sum = 6;
let pairs = givenSum(arr1, sum);
console.log(`Pairs with sum ${sum}:`, pairs);

//Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.
console.log("--------------------Answer2-------------------");
function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      [arr[left], arr[right]] =[arr[right], arr[left]];
      left++;
      right--;
    }
    return arr;
  }
let arr = [0,1,2,3,4,5];
console.log("Original array:", arr);
let reversedArray = reverseArray(arr);
console.log("Reversed array:", reversedArray);

//Q3. Write a program to check if two strings are a rotation of each other?
console.log("--------------------Answer3-------------------");
function checkString(s1, s2, indexFound, Size)
{
    for(let i = 0; i < Size; i++)
    {
      if(s1[i] != s2[(indexFound + i) % Size])return false;
        }
 
    return true;
}
 
let s1 = "edyoda";
let s2 = "yodaed";
 
if(s1.length != s2.length)
{
    document.write("s2 is not a rotation on s1");
}
else
{    let indexes = []; 
    let Size = s1.length;
    let firstChar = s1[0];
    for(let i = 0; i < Size; i++)
    {
        if(s2[i] == firstChar)
        {
            indexes.push(i);
        }
    }
    let isRotation = false;
     for(let idx of indexes)
    {
        isRotation = checkString(s1, s2, idx, Size);
 
        if(isRotation)
            break;
    }
 
    if(isRotation)console.log("s2 is rotation of s1")
    else console.log("s2 is not a rotation of s1")
}
 

//Q4. Write a program to print the first non-repeated character from a string?
console.log("--------------------Answer4-------------------");
const string = "thangellasaiteja";
let index = -1;
let fnc = ' ';
for (let i of string) {
    if (string.split(i).length - 1 === 1) {
        fnc = i;
        break;
    } else {
        index += 1;
    }
}
if (index === 1) {
    console.log("Either all characters are repeating or string is empty");
} else {
    console.log(`First non-repeating character is ${fnc}`);
}

//Q5  Read about the Tower of Hanoi algorithm. Write a program to implement it.
console.log("--------------------Answer5-------------------");
function towerOfHanoi(n, from, to, aux) {
    if (n === 1) {
      console.log(`Move disk 1 from ${from} to ${to}`);
      return;
    }
    towerOfHanoi(n - 1, from, aux, to);
    console.log(`Move disk ${n} from ${from} to ${to}`);
    towerOfHanoi(n - 1, aux, to, from);
  }
  let n = 2;
  towerOfHanoi(n, 'S', 'A', 'L');

//Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.
console.log("--------------------Answer6-------------------");	
function isOperator(x)
	{

		switch (x) {
		case '+':
		case '-':
		case '/':
		case '*':
			return true;
		}
		return false;
	}
	function postToPre(post_exp)
	{
		let s = [];
		let length = post_exp.length;
		for (let i = 0; i < length; i++) {
			if (isOperator(post_exp[i])) {
				let op1 = s[s.length - 1];
				s.pop();
				let op2 = s[s.length - 1];
				s.pop();
				let temp = post_exp[i] + op2 + op1;
				s.push(temp);
			}
			else {
				s.push(post_exp[i] + "");
			}
		}
		let ans = "";
		while (s.length > 0)
			ans += s.pop();
		return ans;
	}
	let post_exp = "ABC+*D/";
  console.log("Taken Postfix", post_exp)
	console.log("Prefix : " + postToPre(post_exp));

//Q7 Write a program to convert prefix expression to infix expression.
console.log("--------------------Answer7-------------------");  
 function isOperator(x)
	{
		switch(x)
		{
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
	function convert(str)
	{
		let stack = [];
		let l = str.length;
		for(let i = l - 1; i >= 0; i--)
		{
			let c = str[i];
			if (isOperator(c))
			{
				let op1 = stack[stack.length - 1];
				stack.pop()
				let op2 = stack[stack.length - 1];
				stack.pop()
				let temp = "(" + op1 + c + op2 + ")";
				stack.push(temp);
			}
			else
			{
				stack.push(c + "");
			}
		}
		return stack[stack.length - 1];
	}
	let exp = "/*-+edyoda";
	console.log("Taken prefix=",exp)
	console.log("Infix : ",convert(exp));

//Q8. Write a program to check if all the brackets are closed in a given code snippet.
console.log("--------------------Answer8-------------------");
function areBracketsClosed(pgm) {
    let stack = [];   
    for (let i = 0; i < pgm.length; i++) {
      let char = pgm[i];
      if (char === '(' || char === '{' || char === '[') {
        stack.push(char);
      } else if (char === ')' || char === '}' || char === ']') {
        if (stack.length === 0) return true;
        let top = stack.pop();
        if ((char === ')' && top !== '(') ||
            (char === '}' && top !== '{') ||
            (char === ']' && top !== '[')) {
          return true;
        }
      }
    }
    return stack.length === 0;
  }
  let pgm = "{ [ ( ] ) }";
  console.log("Code:", pgm);
  let result = areBracketsClosed(pgm);
 console.log("All brackets are closed : ", result);

//Q9. Write a program to reverse a stack.
console.log("--------------------Answer9-------------------"); 
   function reverseStack(stack) {
    if (stack.length === 0) return stack;
    var item = stack.pop();
    reverseStack(stack);
    stack.unshift(item);
    return stack;
    }
  var stack = [9,8,7,6,5,4,3,2,1];
  console.log("original stack=",stack);
  stack = reverseStack(stack);
  console.log("reverse stack=",stack);

//Q10 Write a program to find the smallest number using a stack.
 console.log("--------------------Answer10-------------------");
    function findSmallest(stack1) {
    let min = 10;
    while (stack1.length > 0) {
      let item = stack1.pop();
      if (item < min) {
        min = item;
}
}
    return min;
    } 
  let stack1 = [12,2,5,2,4,6,8,0];
console.log("Stack:", stack1);
  let smallest = findSmallest(stack1);
  console.log("Smallest Number:", smallest);