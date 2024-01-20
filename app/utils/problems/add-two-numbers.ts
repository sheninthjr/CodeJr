import assert from "assert";
import { Problem } from "../types/problem";

const starterTwo = `function addTwoNumbers(l1, l2) {
    // Write your code here
};
`;

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let dummyHead = new ListNode();
  let current = dummyHead;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
    let x = l1 ? l1.val : 0;
    let y = l2 ? l2.val : 0;

    let sum = x + y + carry;
    carry = Math.floor(sum / 10);

    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummyHead.next;
}

const createLinkedList = (values: number[]): ListNode | null => {
  if (values.length === 0) {
    return null;
  }

  const head = new ListNode(values[0]);
  let current = head;

  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i]);
    current = current.next;
  }

  return head;
};

const handlerAddTwoNumbers = (fn: any) => {
  try {
    const testCases = [
      { l1: [2, 4, 3], l2: [5, 6, 4], expected: [7, 0, 8] },
      { l1: [0], l2: [0], expected: [0] },
      {
        l1: [9, 9, 9, 9, 9, 9, 9],
        l2: [9, 9, 9, 9],
        expected: [8, 9, 9, 9, 0, 0, 0, 1],
      },
    ];

    for (let i = 0; i < testCases.length; i++) {
      const { l1, l2, expected } = testCases[i];
      const l1Node = createLinkedList(l1);
      const l2Node = createLinkedList(l2);
      const expectedResult = createLinkedList(expected);
      const result = fn(l1Node, l2Node);
      const resultArray = linkedListToArray(result);
      const expectedArray = linkedListToArray(expectedResult);
      assert.deepStrictEqual(resultArray, expectedArray);
    }
    return true;
  } catch (error: any) {
    console.log("addTwoNumbers handler function error");
    throw new Error(error);
  }
};

const linkedListToArray = (head: any) => {
  const result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
};

handlerAddTwoNumbers(addTwoNumbers);

export const addTwoNumbersProblem: Problem = {
  id: "add-two-numbers",
  title: "2.Add Two Numbers",
  type: "medium",
  problemStatement: `<p>Given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.</p>`,
  examples: [
    {
      id: 1,
      inputText: "l1 = [2,4,3], l2 = [5,6,4]",
      outputText: "[7,0,8]",
      explanation: "342 + 465 = 807",
    },
    {
      id: 2,
      inputText: "l1 = [0], l2 = [0]",
      outputText: "[0]",
      explanation: "0 + 0 = 0",
    },
    {
      id: 3,
      inputText: "l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]",
      outputText: "[8,9,9,9,0,0,0,1]",
      explanation: "9999999 + 9999 = 10009998",
    },
  ],
  constraints: `<li>The number of nodes in each linked list is in the range [1, 100].</li>
  <li><code>0 <= Node.val <= 9</code></li>
  <li>It is guaranteed that the list represents a number that does not have leading zeros.</li>`,
  handlerFunction: handlerAddTwoNumbers,
  starterCode: starterTwo,
  order: 2,
  starterFunctionName: "function addTwoNumbers(",
};
