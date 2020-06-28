import * as React from "react";
import EmailItem from "../EmailItem";
import styles from "./EmailTo.styles";
const { useState } = React;

interface Props {
  name?: string;
  className?: string;
}
const EmailTo = ({ name = "emails", className }: Props) => {
  // List of addded emails
  const [emails, setEmails] = useState<Array<string>>([]);
  // Current email that the user is adding
  const [currentEmail, setCurrentEmail] = useState("");

  return (
    <div className={className} css={styles}>
      <div className="container">
        <div className="currentEmails">
          {emails.map((email) => {
            return (
              <EmailItem
                key={email}
                email={email}
                className="emailItem"
                onDelete={() => removeEmail(email)}
              />
            );
          })}
        </div>
        <div className="inputContainer">
          <input
            type="text"
            value={currentEmail}
            onChange={(e) => {
              setCurrentEmail(e.target.value);
            }}
            onKeyDown={(e) => {
              // Enter / Tab
              if (e.which === 13 || e.which === 9) {
                addEmail(e);
              }
            }}
          />
        </div>
      </div>
      <input
        hidden
        type="email"
        multiple
        name={name}
        value={emails.join(",")}
        readOnly
      />
    </div>
  );

  function removeEmail(email: string) {
    setEmails(emails.filter((mail) => mail !== email));
  }

  function addEmail(e: React.KeyboardEvent<HTMLInputElement>) {
    e.preventDefault();
    // Check if we already have this email in the list
    if (emails.indexOf(currentEmail) >= 0) {
      // Do not add this email, is already in the list
      return;
    }
    // Check if the email is valid
    // Found this regex in: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email
    const expression = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const isValid = expression.test(currentEmail);
    // Only add the email if it is valid
    // @TODO: show a warning?
    if (isValid) {
      setEmails([...emails, currentEmail]);
      setCurrentEmail("");
    }
  }
};

export default EmailTo;
