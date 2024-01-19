import { problems } from "@/app/utils/problems";
import { Problem } from "@/app/utils/types/problem";
import React from "react";

type ProblemDescriptionProps = {
  problem: Problem;
  pid: any;
};

const ProblemDescription = ({ pid, problem }: ProblemDescriptionProps) => {
  const problemData = problems[pid];
  const { title, type, problemStatement, examples, constraints } = problemData;
  return (
    <div className="bg-black h-screen">
      <div className="flex h-11 w-full items-center pt-2 bg-dark-layer-2 text-white overflow-x-hidden">
        <a
          href="/"
          className={
            "bg-black rounded-t-[5px] px-5 py-[10px] text-lg cursor-pointer"
          }
        >
          Code Jr
        </a>
      </div>
      <div className="flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto">
        <div className="px-5">
          <div className="w-full">
            <div className="flex space-x-4">
              <div className="flex-1 mr-2 text-lg text-white font-medium">
                <div className="font-bold text-xl">Description</div>
                {title}
              </div>
            </div>
            <div className="flex items-center mt-3">
              <div
                className={`inline-block rounded-[21px] px-2.5 py-1 text-xs font-medium capitalize ${
                  type === "easy"
                    ? "text-olive bg-olive bg-opacity-[.15]"
                    : type === "medium"
                    ? "text-brand-orange bg-brand-orange bg-opacity-[.15]"
                    : type === "hard"
                    ? "text-dark-pink bg-dark-pink bg-opacity-[.15]"
                    : ""
                }`}
              >
                {type}
              </div>
            </div>
            <div
              className="text-white text-lg mt-2"
              dangerouslySetInnerHTML={{ __html: problemStatement }}
            />
            <div className="mt-4">
              {examples.map((example) => (
                <div key={example.id}>
                  <p className="font-medium text-white ">
                    Example {example.id}:{" "}
                  </p>
                  <div className="example-card">
                    <pre>
                      <strong className="text-white">Input: </strong>{" "}
                      {example.inputText} <br />
                      <strong>Output:</strong> {example.outputText} <br />
                      {example.explanation && (
                        <span>
                          <strong>Explanation:</strong> {example.explanation}
                        </span>
                      )}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
            <div className="my-5">
              <div className="text-white text-sm font-medium">Constraints:</div>
              <ul
                className="text-white ml-5 list-disc flex flex-col space-y-4 mt-4"
                dangerouslySetInnerHTML={{ __html: constraints }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDescription;
