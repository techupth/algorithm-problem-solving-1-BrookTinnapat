function twoSum(numbers, target) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let i = 0; i < numbers.length; i++) {
    let sum = numbers[i] + numbers[i - 1];
    if (sum === target) {
      return `${true} by ${numbers[i]} + ${numbers[i - 1]} = ${sum}`;
    }
  }
}

const nums = [2, 7, 11, 15];
const target = 9;
const target2 = 23;
console.log(twoSum(nums, target));
console.log(twoSum(nums, target2));
