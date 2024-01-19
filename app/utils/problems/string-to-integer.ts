import assert from 'assert';
import { Problem } from '../types/problem';

const starterCodeAtoi = `function myAtoi(s) {
  // Write your code here
};`;

const handlerAtoi = (fn: any) => {
  try {
    const testCases = [
      { s: '42', expected: 42 },
      { s: '   -42', expected: -42 },
      { s: '4193 with words', expected: 4193 },
    ];

    for (let i = 0; i < testCases.length; i++) {
      const { s, expected } = testCases[i];
      const result = fn(s);
      assert.strictEqual(result, expected);
    }

    return true;
  } catch (error: any) {
    console.log('myAtoi handler function error');
    throw new Error(error);
  }
};

export const atoi: Problem = {
  id: 'string-to-integer-atoi',
  title: '7. String to Integer (atoi)',
  type: 'medium',
  problemStatement: `<p>
  Implement the <code>myAtoi(string s)</code> function, which converts a string to a 32-bit signed integer (similar to C/C++'s <code>atoi</code> function).
</p>
<p>
  The algorithm for <code>myAtoi(string s)</code> is as follows:
</p>
<ol>
  <li>Read in and ignore any leading whitespace.</li>
  <li>Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.</li>
  <li>Read in the next characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.</li>
  <li>Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).</li>
  <li>If the integer is out of the 32-bit signed integer range [-2<sup>31</sup>, 2<sup>31</sup> - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -2<sup>31</sup> should be clamped to -2<sup>31</sup>, and integers greater than 2<sup>31</sup> - 1 should be clamped to 2<sup>31</sup> - 1.</li>
  <li>Return the integer as the final result.</li>
</ol>
<p><strong>Note:</strong></p>
<ul>
  <li>Only the space character ' ' is considered a whitespace character.</li>
  <li>Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.</li>
</ul>
<p><strong>Constraints:</strong></p>
<ul>
  <li><code>0 <= s.length <= 200</code></li>
  <li><code>s</code> consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.</li>
</ul>`,
  examples: [
    {
      id: 1,
      inputText: 's = "42"',
      outputText: '42',
      explanation: 'The parsed integer is 42. Since 42 is in the range [-2^31, 2^31 - 1], the final result is 42.',
    },
    {
      id: 2,
      inputText: 's = "   -42"',
      outputText: '-42',
      explanation: 'The parsed integer is -42. Since -42 is in the range [-2^31, 2^31 - 1], the final result is -42.',
    },
    {
      id: 3,
      inputText: 's = "4193 with words"',
      outputText: '4193',
      explanation: 'The parsed integer is 4193. Since 4193 is in the range [-2^31, 2^31 - 1], the final result is 4193.',
    },
  ],
  constraints: `<p>
  <code>0 <= s.length <= 200</code>
</p>
<p>
  <code>s</code> consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.
</p>`,
  handlerFunction: handlerAtoi,
  starterCode: starterCodeAtoi,
  order: 7,
  starterFunctionName: 'function myAtoi(',
};
