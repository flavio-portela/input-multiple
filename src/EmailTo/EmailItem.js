import React from "react";

const EmailItem = ({ email, className, onDelete }) => {
  return (
    <>
      <div className={className}>
        <span>{email}</span> <i onClick={onDelete}/>
      </div>
    </>
  );
};

export default EmailItem;
