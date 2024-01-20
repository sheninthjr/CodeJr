"use client";
import { useRouter } from "next/navigation";
import React from "react";
import NavBar from "../NavBar";
import Intro from "./Intro";

const ProblemTab = () => {
  const router = useRouter();

  const handleSolve = (problemid: string) => {
    router.push(problemid);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <div className="flex flex-col md:flex-col lg:flex-row items-center justify-evenly">
        <Intro />
        <div className="max-w-xl w-full md:w-1/2 md:pt-16 lg:pt-16 xl:pt-16 pl-4 pr-4 ">
          <h2 className="text-4xl font-bold mb-4 text-center">Problems</h2>
          {problems.map((problem) => (
            <div
              key={problem.id}
              className="bg-dark-layer-1 text-white p-6 rounded-lg shadow-md mb-6 flex justify-between items-start hover:shadow-lg transition duration-300"
            >
              <a
                href={problem.link}
                className="text-white text-2xl font-semibold mb-2 hover:underline text-start"
              >
                {problem.id}.{problem.name}
              </a>
              <p className="text-gray-300 leading-relaxed"></p>
              <button
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
                onClick={() => handleSolve(problem.link)}
              >
                Solve
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const problems = [
  { id: 1, name: "Two Sum", link: "/problems/two-sum" },
  { id: 2, name: "Add Two Numbers", link: "/problems/add-two-numbers" },
  {
    id: 3,
    name: "Median of Two Sorted Arrays",
    link: "/problems/median-of-two-sorted-arrays",
  },
  {
    id: 4,
    name: "Longest Palindromic Substring",
    link: "/problems/longest-palindromic-substring",
  },
  { id: 5, name: "Zigzag Conversion", link: "/problems/zigzag-conversion" },
  { id: 6, name: "Reverse Integer", link: "/problems/reverse-integer" },
  {
    id: 7,
    name: "String to Integer(atoi)",
    link: "/problems/string-to-integer",
  },
  { id: 8, name: "Integer to Roman", link: "/problems/integer-to-roman" },
];

export default ProblemTab;
