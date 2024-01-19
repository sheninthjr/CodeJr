import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeMedianOfTwoSortedArrays = `function findMedianSortedArrays(nums1, nums2) {
  // Write your code here
};`;

const handlerMedianOfTwoSortedArrays = (fn: any) => {
  try {
    const testCases = [
      { nums1: [1, 3], nums2: [2], expected: 2.0 },
      { nums1: [1, 2], nums2: [3, 4], expected: 2.5 },
    ];

    for (let i = 0; i < testCases.length; i++) {
      const { nums1, nums2, expected } = testCases[i];
      const result = fn(nums1, nums2);
      assert.strictEqual(result, expected);
    }

    return true;
  } catch (error: any) {
    console.log("findMedianSortedArrays handler function error");
    throw new Error(error);
  }
};

export const medianOfTwoSortedArrays: Problem = {
  id: "median-of-two-sorted-arrays",
  title: "3. Median of Two Sorted Arrays",
  type: "hard",
  problemStatement: `<p>
  Given two sorted arrays <code>nums1</code> and <code>nums2</code> of size <code>m</code> and <code>n</code> respectively,
  return <em>the median of the two sorted arrays</em>.
</p>
<p class='mt-3'>
  The overall run time complexity should be <code>O(log(min(m, n)))</code>.
</p>`,
  examples: [
    {
      id: 1,
      inputText: "nums1 = [1,3], nums2 = [2]",
      outputText: "2.00000",
      explanation: "Merged array = [1,2,3] and median is 2.",
    },
    {
      id: 2,
      inputText: "nums1 = [1,2], nums2 = [3,4]",
      outputText: "2.50000",
      explanation: "Merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.",
    },
  ],
  constraints: `<p>
  <code>nums1.length == m</code>
</p>
<p>
  <code>nums2.length == n</code>
</p>
<p>
  <code>0 <= m <= 1000</code>
</p>
<p>
  <code>0 <= n <= 1000</code>
</p>
<p>
  <code>1 <= m + n <= 2000</code>
</p>
<p>
  <code>-10^6 <= nums1[i], nums2[i] <= 10^6</code>
</p>`,
  handlerFunction: handlerMedianOfTwoSortedArrays,
  starterCode: starterCodeMedianOfTwoSortedArrays,
  order: 3,
  starterFunctionName: "function findMedianSortedArrays(",
};
