import React from "react";

const TwitterHandles = ({ handles }) => {
  return (
    <div>
      <h2>Twitter Users</h2>
      <ul>
        {handles.map((handle, index) => (
          <li key={index}>{handle.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default TwitterHandles;
