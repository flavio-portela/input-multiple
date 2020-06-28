import * as React from "react";
import styles from "./EmailItem.styles";

interface Props {
  email: string,
  className?: string,
  onDelete: (event: React.MouseEvent<HTMLElement>) => void
}

const EmailItem = ({ email, className, onDelete }: Props) => {
  return (
    <div css={styles} className={className}>
      <span>{email}</span> <i onClick={onDelete} />
    </div>
  );
};

export default EmailItem;
