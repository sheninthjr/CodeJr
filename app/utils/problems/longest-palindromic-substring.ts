import assert from 'assert';
import { Problem } from '../types/problem';

const starterCodeLongestPalindromicSubstring = `function longestPalindrome(s) {
  // Write your code here
};`;

const handlerLongestPalindromicSubstring = (fn: any) => {
  try {
    const testCases = [
      { s: 'babad', expected: 'bab' }, 
      { s: 'cbbd', expected: 'bb' },
    ];

    for (let i = 0; i < testCases.length; i++) {
      const { s, expected } = testCases[i];
      const result = fn(s);
      assert.strictEqual(result, expected);
    }

    return true;
  } catch (error: any) {
    console.log('longestPalindrome handler function error');
    throw new Error(error);
  }
};

export const longestPalindromicSubstring: Problem = {
  id: 'longest-palindromic-substring',
  title: '4. Longest Palindromic Substring',
  type: 'medium',
  problemStatement: `<p>
  Given a string <code>s</code>, return the longest palindromic substring in <code>s</code>.
</p>`,
  examples: [
    {
      id: 1,
      inputText: 's = "babad"',
      outputText: '"bab"',
      explanation: '"aba" is also a valid answer.',
    },
    {
      id: 2,
      inputText: 's = "cbbd"',
      outputText: '"bb"',
    },
  ],
  constraints: `<p>
  <code>1 <= s.length <= 1000</code>
</p>
<p>
  <code>s</code> consists of only digits and English letters.
</p>`,
  handlerFunction: handlerLongestPalindromicSubstring,
  starterCode: starterCodeLongestPalindromicSubstring,
  order: 4,
  starterFunctionName: 'function longestPalindrome(',
};
