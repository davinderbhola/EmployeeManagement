import React, { useState } from "react";

function Header(props) {

  // const [userName, setUserName] = useState('');
  // if(!data){
  //   setUserName('admin');
  // }
  // else{
  //   setUserName(data.firstName)
  // }

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','');
    props.changeUser('');
    // window.location.reload();
  }

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br /> <span className="text-3xl font-semibold">userName👋</span>
      </h1>
      <button onClick={logOutUser} className="bg-red-500 px-4 py-1 rounded-md font-medium text-white text-lg">
        Log Out
      </button>
    </div>
  );
}

export default Header;
