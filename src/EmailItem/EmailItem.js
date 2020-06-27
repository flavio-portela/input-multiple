import React from "react";
import styles from "./EmailItem.styles";
const EmailItem = ({ email, className, onDelete }) => {
  return (
    <div css={styles}>
      <span>{email}</span> <i onClick={onDelete} />
    </div>
  );
};

export default EmailItem;
