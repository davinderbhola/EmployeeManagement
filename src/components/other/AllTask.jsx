import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

function AllTask(props) {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div id="Alltaskcomp" className="bg-[#1C1C1C] p-5 mt-5 rounded">
      <div className="bg-emerald-500 py-2.5 px-4 mb-2 flex justify-between rounded uppercase text-md font-semibold">
        <h2 className="text-lg w-1/5">Name</h2>
        <h3 className="text-lg w-1/5">Task</h3>
        <h3 className="text-lg w-1/5">New Task</h3>
        <h3 className="text-lg w-1/5">Completed </h3>
        <h3 className="text-lg w-1/5">Failed </h3>
      </div>
     <div id="Alltaskcomp">
       {userData.map((elem , idx)=>{
        return <div key={idx} className="bg-transparent border-1 border-green-400 py-2.5 px-4 mb-2 flex justify-between rounded">
                  <h2 className="text-lg w-1/5 text-white text-md font-semibold  "> {elem.firstName}</h2>
                  <h3 className="text-lg w-1/5 text-red-500 text-md font-semibold ">{elem.taskCount.active}</h3>
                  <h3 className="text-lg w-1/5 text-green-500 text-md font-semibold ">{elem.taskCount.newTask}</h3>
                  <h3 className="text-lg w-1/5 text-blue-500 text-md font-semibold  ">{elem.taskCount.completed}</h3>
                  <h3 className="text-lg w-1/5 text-yellow-500 text-md font-semibold ">{elem.taskCount.failed}</h3>
                </div>
        })}
     </div>
    </div>
  );
}

export default AllTask;
