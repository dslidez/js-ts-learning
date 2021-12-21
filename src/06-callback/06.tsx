import React from 'react'

window.setTimeout( () => {} , 1000);

// const callback = (): void => {
//     alert('hey')
// }
// window.setTimeout( callback , 1000);



export const User = () => {
  const deleteUser = () => {
    alert("user has been deleted");
  };
  const saveUser = () => {
    alert("user has been saved");
  };

  const onNameChanged = () => {
      console.log("name changed")
  }
  

  return (
    <div>
    
      <textarea onChange={onNameChanged}>Dimych</textarea>
      <button onClick={deleteUser}>DELETE</button>
      <button onClick={saveUser}>ADD</button>
      <div onClick={saveUser}>DIVka</div>
    </div>
  );
};