import assert from 'assert';
import { Problem } from '../types/problem';

const starterCodeReverseInteger = `function reverse(x) {
  // Write your code here
};`;

const handlerReverseInteger = (fn: any) => {
  try {
    const testCases = [
      { x: 123, expected: 321 },
      { x: -123, expected: -321 },
      { x: 120, expected: 21 },
      // Add more test cases as needed
    ];

    for (let i = 0; i < testCases.length; i++) {
      const { x, expected } = testCases[i];
      const result = fn(x);
      assert.strictEqual(result, expected);
    }

    return true;
  } catch (error: any) {
    console.log('reverse handler function error');
    throw new Error(error);
  }
};

export const reverseInteger: Problem = {
  id: 'reverse-integer',
  title: '6. Reverse Integer',
  type: 'medium',
  problemStatement: `<p>
  Given a signed 32-bit integer <code>x</code>, return <code>x</code> with its digits reversed. If reversing <code>x</code> causes the value to go outside the signed 32-bit integer range [-2<sup>31</sup>, 2<sup>31</sup> - 1], then return 0.
</p>
<p>
  Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
</p>`,
  examples: [
    {
      id: 1,
      inputText: 'x = 123',
      outputText: '321',
      explanation: 'Reversing the digits of 123 gives 321.',
    },
    {
      id: 2,
      inputText: 'x = -123',
      outputText: '-321',
      explanation: 'Reversing the digits of -123 gives -321.',
    },
    {
      id: 3,
      inputText: 'x = 120',
      outputText: '21',
      explanation: 'Reversing the digits of 120 gives 21.',
    },
  ],
  constraints: `<li>
  <code>-2<sup>31</sup> <= x <= 2<sup>31</sup> - 1</code>
</li>`,
  handlerFunction: handlerReverseInteger,
  starterCode: starterCodeReverseInteger,
  order: 6,
  starterFunctionName: 'function reverse(',
};
