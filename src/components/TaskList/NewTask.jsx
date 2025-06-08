import React from 'react';

function NewTask({data}) {
  console.log(data.title);
    return (
       <div className="flex-shrink-0 h-full w-[300px] p-3 bg-green-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="px-2 py-1 bg-red-600 rounded text-sm font-medium">
            {data.category}
          </h3>
          <h4 className="text-md">{data.date}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold ">
          {data.title}
        </h2>
        <p className="text-sm mt-3">
          {data.description}
        </p>
         <div className="flex justify-between items-center mt-5 gap-4">
          <button className="bg-purple-500 hover:bg-purple-400 cursor-pointer px-2 py-1 rounded-md font-medium text-white text-sm">Accept Task</button>
          <button className="bg-rose-500 hover:bg-rose-400 cursor-pointer px-2 py-1 rounded-md font-medium text-white text-sm">Reject Task</button>
        </div>
      </div>
    );
}

export default NewTask;