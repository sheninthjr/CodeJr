
import React from "react";
import { Problem } from "../../utils/types/problem";
import Workspace from "../../components/Workspace/Workspace";

type ProblemPageProps = {
  problem: Problem;
  pid:String
};

const Page = ({params}:{params:{pid:string}}) => {
  const pId = params.pid
  return <>
    <>
    <Workspace pid={pId}/>
    </>
  </>;
};

export default Page;
