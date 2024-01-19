import assert from 'assert';
import { Problem } from '../types/problem';

const starterCodeZigzagConversion = `function convert(s, numRows) {
  // Write your code here
};`;

const handlerZigzagConversion = (fn: any) => {
  try {
    const testCases = [
      { s: 'PAYPALISHIRING', numRows: 3, expected: 'PAHNAPLSIIGYIR' },
      { s: 'PAYPALISHIRING', numRows: 4, expected: 'PINALSIGYAHRPI' },
      { s: 'A', numRows: 1, expected: 'A' },
      // Add more test cases as needed
    ];

    for (let i = 0; i < testCases.length; i++) {
      const { s, numRows, expected } = testCases[i];
      const result = fn(s, numRows);
      assert.strictEqual(result, expected);
    }

    return true;
  } catch (error: any) {
    console.log('convert handler function error');
    throw new Error(error);
  }
};

export const zigzagConversion: Problem = {
  id: 'zigzag-conversion',
  title: '5. Zigzag Conversion',
  type: 'medium',
  problemStatement: `<p>
  The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
</p>
<pre>
P   A   H   N
A P L S I I G
Y   I   R
</pre>
<p>
  And then read line by line: "PAHNAPLSIIGYIR"
</p>
<p>
  Write the code that will take a string and make this conversion given a number of rows:
</p>
<pre>
string convert(string s, int numRows);
</pre>
`,
  examples: [
    {
      id: 1,
      inputText: 's = "PAYPALISHIRING", numRows = 3',
      outputText: '"PAHNAPLSIIGYIR"',
    },
    {
      id: 2,
      inputText: 's = "PAYPALISHIRING", numRows = 4',
      outputText: '"PINALSIGYAHRPI"',
      explanation: 'P     I    N\nA   L S  I G\nY A   H R\nP     I',
    },
    {
      id: 3,
      inputText: 's = "A", numRows = 1',
      outputText: '"A"',
    },
    // Add more examples as needed
  ],
  constraints: `<p>
  <code>1 <= s.length <= 1000</code>
</p>
<p>
  <code>s</code> consists of English letters (lower-case and upper-case), ',' and '.'.
</p>
<p>
  <code>1 <= numRows <= 1000</code>
</p>`,
  handlerFunction: handlerZigzagConversion,
  starterCode: starterCodeZigzagConversion,
  order: 5,
  starterFunctionName: 'function convert(',
};
