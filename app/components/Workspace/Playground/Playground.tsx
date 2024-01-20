"use client";
import React, { useState } from "react";
import PreferenceNav from "./PreferenceNav/PreferenceNav";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import { Problem } from "@/app/utils/types/problem";
import { problems } from "@/app/utils/problems";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type PlaygroundProps = {
  problem: Problem;
  pid: any;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
};

const Playground: React.FC<PlaygroundProps> = ({
  problem,
  pid,
  setSuccess,
}) => {
  const localStorageKey = `userCode_${pid}`;
  const storedUserCode = localStorage.getItem(localStorageKey);
  const [userCode, setUserCode] = useState<string>(
    storedUserCode || problem.starterCode
  );
  const pId = pid;

  const handleSubmit = async () => {
    try {
      localStorage.setItem(localStorageKey, userCode);
      const cb = new Function(`return ${userCode}`)();
      const handler = problems[pId].handlerFunction;
      if (typeof handler === "function") {
        const success = handler(cb);
        if (success) {
          toast.success("Congrats! All tests passed!", {
            position: "top-center",
            autoClose: 3000,
            theme: "dark",
          });
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 4000);
        }
      }
    } catch (error: any) {
      if (
        error.message.startsWith(
          "AssertionError [ERR_ASSERTION]: Expected values to be strictly deep-equal:"
        )
      ) {
        toast.error("Oops! One or more test cases failed", {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        });
      } else {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        });
      }
    }
  };
  const onChange = (value: string) => {
    setUserCode(value);
  };
  return (
    <div className="flex flex-col bg-black relative overflow-x-hidden h-screen">
      <PreferenceNav handleSubmit={handleSubmit} />
      <div className="w-full overflow-auto">
        <CodeMirror
          value={userCode}
          theme={vscodeDark}
          extensions={[javascript()]}
          style={{ fontSize: 16 }}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Playground;
