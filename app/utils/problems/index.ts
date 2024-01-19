import { Problem } from "../types/problem";
import { addTwoNumbersProblem } from "./add-two-numbers";
import { integerToRoman } from "./integer-to-roman";
import { longestPalindromicSubstring } from "./longest-palindromic-substring";
import { medianOfTwoSortedArrays } from "./median-of-two-sorted-arrays";
import { reverseInteger } from "./reverse-integer";
import { atoi } from "./string-to-integer";
import { twoSum } from "./two-sum";
import { zigzagConversion } from "./zigzag-conversion";

interface ProblemMap {
	[key: string]: Problem;
}

export const problems: ProblemMap = {
	"two-sum": twoSum,
	"add-two-numbers": addTwoNumbersProblem,
	"median-of-two-sorted-arrays":medianOfTwoSortedArrays,
	"longest-palindromic-substring": longestPalindromicSubstring,
	"zigzag-conversion": zigzagConversion,
	"reverse-integer": reverseInteger,
	"string-to-integer": atoi,
	"integer-to-roman": integerToRoman
};