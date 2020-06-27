import React from "react";
import EmailTo from "./EmailTo";
import styles from "./App.styles";

function App() {
  return (
    <div css={styles}>
      <h3>Send email</h3>
      <form method="GET">
        <label>To: </label> <EmailTo className="emailsInput" />
        <div className='submitButton'>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}

export default App;
