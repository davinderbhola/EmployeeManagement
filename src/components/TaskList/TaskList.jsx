import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTaks from "./CompleteTaks";
import FaildTaks from "./FaildTaks";

function TaskList({data}) {
  
  return (
    <div id="tasklist" className="flex items-center justify-start gap-6 flex-nowrap h-[55%] w-full py-10 mt-10 rounded-lg overflow-x-auto">
     {data.tasks.map((elem, idk)=>{
        if(elem.active){
          return <AcceptTask key={idk} data={elem}/>
        }
        if(elem.newTask){
          console.log(elem.newTask)
          return <NewTask key={idk} data={elem}/>
        }
        if(elem.completed){
          return <CompleteTaks key={idk} data={elem}/>
        }
        if(elem.failed){
          return <FaildTaks key={idk} data={elem}/>
        }
     })}
    </div>
  );
}

export default TaskList;
