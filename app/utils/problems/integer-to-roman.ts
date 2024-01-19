import assert from 'assert';
import { Problem } from '../types/problem';

const starterCodeIntegerToRoman = `function intToRoman(num) {
  // Write your code here
};`;

const handlerIntegerToRoman = (fn: any) => {
  try {
    const testCases = [
      { num: 3, expected: 'III' },
      { num: 58, expected: 'LVIII' },
      { num: 1994, expected: 'MCMXCIV' },
    ];

    for (let i = 0; i < testCases.length; i++) {
      const { num, expected } = testCases[i];
      const result = fn(num);
      assert.strictEqual(result, expected);
    }

    return true;
  } catch (error: any) {
    console.log('intToRoman handler function error');
    throw new Error(error);
  }
};

export const integerToRoman: Problem = {
  id: 'integer-to-roman',
  title: '8. Integer to Roman',
  type: 'medium',
  problemStatement: `<p>
  Roman numerals are represented by seven different symbols: I, V, X, L, C, D, and M.
</p>
<style>
  table {
    border-collapse: collapse;
  }

  th, td {
    border: 1px solid #000;
    padding: 4px;
    text-align: center;
  }
</style>

<table>
  <tr>
    <th>Symbol</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>I</td>
    <td>1</td>
  </tr>
  <tr>
    <td>V</td>
    <td>5</td>
  </tr>
  <tr>
    <td>X</td>
    <td>10</td>
  </tr>
  <tr>
    <td>L</td>
    <td>50</td>
  </tr>
  <tr>
    <td>C</td>
    <td>100</td>
  </tr>
  <tr>
    <td>D</td>
    <td>500</td>
  </tr>
  <tr>
    <td>M</td>
    <td>1000</td>
  </tr>
</table>

<p>
  For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
</p>
<p>
  Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
</p>
<p>
  I can be placed before V (5) and X (10) to make 4 and 9.
</p>
<p>
  X can be placed before L (50) and C (100) to make 40 and 90.
</p>
<p>
  C can be placed before D (500) and M (1000) to make 400 and 900.
</p>
<p>
  Given an integer, convert it to a Roman numeral.
</p>`,
  examples: [
    {
      id: 1,
      inputText: 'num = 3',
      outputText: '"III"',
      explanation: '3 is represented as 3 ones.',
    },
    {
      id: 2,
      inputText: 'num = 58',
      outputText: '"LVIII"',
      explanation: 'L = 50, V = 5, III = 3.',
    },
    {
      id: 3,
      inputText: 'num = 1994',
      outputText: '"MCMXCIV"',
      explanation: 'M = 1000, CM = 900, XC = 90, and IV = 4.',
    },
  ],
  constraints: `<p>
  <code>1 <= num <= 3999</code>
</p>`,
  handlerFunction: handlerIntegerToRoman,
  starterCode: starterCodeIntegerToRoman,
  order: 8,
  starterFunctionName: 'function intToRoman(',
};
