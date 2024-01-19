"use client";
import { useRouter } from "next/navigation";
import React from "react";
import NavBar from "../NavBar";

const ProblemTab = () => {
  const router = useRouter();
  const handleSolve = (problemid: string) => {
    router.push(problemid);
  };
  return (
    <div className="">
      <NavBar />
      <div className="flex flex-col justify-center items-center h-screen bg-dark-layer-1 text-white p-4">
        <div className="w-1/2">
          <div className="flex justify-between border p-2 border-slate-700">
            <a href="/problems/two-sum">1.Two Sum</a>
            <button
              className="bg-green-500 p-1 rounded-lg h-fit"
              onClick={() => handleSolve("/problems/two-sum")}
            >
              Solve
            </button>
          </div>
          <div className="flex justify-between border p-2 border-slate-700">
            <a href="/problems/add-two-numbers">2.Add Two Numbers</a>
            <button
              className="bg-green-500 p-1 rounded-lg h-fit"
              onClick={() => handleSolve("/problems/add-two-numbers")}
            >
              Solve
            </button>
          </div>
          <div className="flex justify-between border p-2 border-slate-700">
            <a href="/problems/median-of-two-sorted-arrays">
              3.Median of Two Sorted Arrays
            </a>
            <button
              className="bg-green-500 p-1 rounded-lg h-fit"
              onClick={() =>
                handleSolve("/problems/median-of-two-sorted-arrays")
              }
            >
              Solve
            </button>
          </div>
          <div className="flex justify-between border p-2 border-slate-700">
            <a href="/problems/longest-palindromic-substring">
              4.Longest Palindromic Substring
            </a>
            <button
              className="bg-green-500 p-1 rounded-lg h-fit"
              onClick={() =>
                handleSolve("/problems/longest-palindromic-substring")
              }
            >
              Solve
            </button>
          </div>
          <div className="flex justify-between border p-2 border-slate-700">
            <a href="/problems/zigzag-conversion">5.Zigzag Conversion</a>
            <button
              className="bg-green-500 p-1 rounded-lg h-fit"
              onClick={() => handleSolve("/problems/zigzag-conversion")}
            >
              Solve
            </button>
          </div>
          <div className="flex justify-between border p-2 border-slate-700">
            <a href="/problems/reverse-integer">6.Reverse Integer</a>
            <button
              className="bg-green-500 p-1 rounded-lg h-fit"
              onClick={() => handleSolve("/problems/reverse-integer")}
            >
              Solve
            </button>
          </div>
          <div className="flex justify-between border p-2 border-slate-700">
            <a href="/problems/string-to-integer">7.String to Integer(atoi)</a>

            <button
              className="bg-green-500 p-1 rounded-lg h-fit"
              onClick={() => handleSolve("/problems/string-to-integer")}
            >
              Solve
            </button>
          </div>
          <div className="flex justify-between border p-2 border-slate-700">
            <a href="/problems/integer-to-roman">8.Integer to Roman</a>
            <button
              className="bg-green-500 p-1 rounded-lg h-fit"
              onClick={() => handleSolve("/problems/integer-to-roman")}
            >
              Solve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemTab;
