//Kata Expressions Matter
//https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/javascript


function expressionMatter(a, b, c) {

    var result1 = a * (b + c);
    var result2 = a * b * c;
    var result3 = a + b * c;
    var result4 = (a + b) * c;
    var result5 = a + b + c;

    //The ugly method: Using if else statements to compare which number is highest;
    //if else statements code below is working;
    //   if (result1 >= result2 && result1 >= result3 && result1 >= result4 && result1 >= result5) {
    //     return result1;
    //     } else if (result2 >= result1 && result2 >= result3 && result2 >= result4 && result2 >= result5 ) {
    //     return result2;
    //       } else if (result3 >= result1 && result3 >= result2 && result3 >= result4 && result3 >= result5 ) {
    //     return result3;
    //       }else if (result4 >= result1 && result4 >= result2 && result4 >= result3 && result4 >= result5) {
    //     return result4;
    //       } else if (result5 >= result1 && result5 >= result2 && result5 >= result3 && result5 >= result4 ) {
    //     return result5;
    //   } 
    // }

    // A cleaner method: Using Math.max to sort hightest numbers;

    var result = Math.max(result1, result2, result3, result4, result5);

    return result;

}

console.log(expressionMatter(1, 1, 1))