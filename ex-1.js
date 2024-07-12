function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return `${true} by ${numbers[i]} + ${numbers[j]} = ${
          numbers[i] + numbers[j]
        }`;
      }
    }
  }
  return [];
}

const numbers = [2, 7, 11, 15];
const target = 9;
const target2 = 23;

console.log(twoSum(numbers, target));
console.log(twoSum(numbers, target2));
