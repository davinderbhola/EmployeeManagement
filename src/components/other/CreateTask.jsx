import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

function CreateTask(props) {

  const [userData, setUserData] = useContext(AuthContext);

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [assigneTo, setAssigneTo] = useState('');

  // const [newTask, setNewTask] = useState({});
  // const submitHandler = (e)=>{
  //     e.preventDefault();
  //     // console.log(title,description,category,date,assigneTo);
  //     setNewTask({title,date,description,category,active:false,newTask:true,failed:false,completed:false});
  //     const data = JSON.parse(localStorage.getItem('employees'));
  //     data.forEach((elem)=>{
  //       if(assigneTo == elem.firstName){
  //         elem.tasks.push(newTask);
  //         console.log(elem)
  //       }
  //     })
  //   }


  const submitHandler = (e) => {
  e.preventDefault();

  const taskToAdd = {
    title,
    date,
    description,
    category,
    active: false,
    newTask: true,
    failed: false,
    completed: false
  };

  const data = userData; 
  
  data.forEach((elem) => {
    if (assigneTo === elem.firstName) {
      elem.tasks.push(taskToAdd);
      elem.taskCount.newTask = elem.taskCount.newTask + 1;
      console.log(elem)
    }
  });
  setUserData(data)
  console.log(data);
  
    localStorage.setItem('employees', JSON.stringify(data));

    setTitle('');
    setDate('');
    setDescription('');
    setCategory('');
    setAssigneTo('');

};

  return (
    <div className="bg-[#1C1C1C] p-5 mt-7 rounded-md">
      <form onSubmit={submitHandler} className="flex flex-wrap w-full items-start justify-between">
        <div className="w-1/2">
          <div>
            <h3 className="text-md text-gray-300 mb-1">Taks Tital</h3>
            <input
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              className="text-md py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="make a designe"
            />
          </div>
          <div>
            <h3 className="text-md text-gray-300 mb-1">Date</h3>
            <input
              value={date}
              onChange={(e)=>setDate(e.target.value)}
              className="text-md py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-md text-gray-300 mb-1">Asigne To</h3>
            <input
              value={assigneTo}
              onChange={(e)=>setAssigneTo(e.target.value)}
              className="text-md py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="asigne name"
            />
          </div>
          <div>
            <h3 className="text-md text-gray-300 mb-1">Category</h3>
            <input
               value={category}
              onChange={(e)=>setCategory(e.target.value)}
              className="text-md py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="designe, dev, etc"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-md text-gray-300 mb-1">Description</h3>
          <textarea
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            className="w-full h-44 text-md py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 "
            name=""
            id=""
          ></textarea>
          <button className="bg-green-500 hover:bg-green-600 px-5 py-3 rounded text-md mt-4 w-full">
            Create Taks
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
