const findSum = function(array) {
 let sum = 0;
  for (let i = 0; i < array.length; i++){
    sum += array[i];
    }
   return sum
 };

const findFrequency = function(array) {
   let mostFrequent = array[0]
  let leastFrequent = array[0]
  const counted = array.reduce((acc, item) => { 
    if (!acc[item]) {
      acc[item] = 1
    } else {
      acc[item]++
    }

    if(acc[item] > acc[mostFrequent]) {
      mostFrequent = item
    } else if(acc[item] < acc[leastFrequent]) {
      leastFrequent = item
    }

    return acc;
  }, {});
  let obj = {mostFrequent, leastFrequent}
  return obj
};

const isPalindrome = function(str) {
          var i = 0;
        var j = str.length -1;
        while(i < j){
            if(str[i] != str[j]){
                return false;
            }
            i++;
            j--;
        }
    return true;

};

const largestPair = function(array) {
    var x = 0;
  var y = 0;
  var p = Number.MIN_SAFE_INTEGER;
  for (var i = 0; i < array.length; i++) {
    x = array[i];
    y = array[i + 1];
    if (x * y > p) {
      p = x * y;
    };
  };
  return p;
};

const removeParenth = function(str) {
     str = str.replace(/ *\([^)]*\) */g, '');
    return str
};

const scoreScrabble = function(str) {
    let scores = [1,3,3,2,1,4,2,4,1,8,5,1,3,1,1,3,10,1,1,1,1,4,4,8,4,10];
  let score = 0;
 str = str.toUpperCase();
  for (let i=0; i < str.length; i++) {
    let n = str.charCodeAt(i) - 65;
    if (n < 0 || n > 25) continue;
    score += scores[n];
  }
  return score;
};
