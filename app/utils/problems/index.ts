import { Problem } from "../types/problem";
import { reverseLinkedList } from "./reverse-linked-list";
import { twoSum } from "./two-sum";

interface ProblemMap {
	[key: string]: Problem;
}

export const problems: ProblemMap = {
	"two-sum": twoSum,
	"reverse-linked-list": reverseLinkedList
};