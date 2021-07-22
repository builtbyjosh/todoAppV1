import React from 'react';

const AddTask = () => {
  return (
    <form className="ui form">
      <div className="field">
        <label htmlFor="">New Todo</label>
        <input type="text" name="text" />
      </div>
      <button type="submit" className="ui button fluid">Add Todo</button>
    </form>
  );
}

export default AddTask;
