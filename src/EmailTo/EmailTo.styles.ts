import { css } from "@emotion/core";

export default css`
  .container {
    display: flex;
    .currentEmails {
      display: flex;
      flex-wrap: wrap;
      font-weight: bold;
    }
    .inputContainer {
      flex-grow: 1;
      padding: 0.5rem 1rem;
      input {
        border: none;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        outline: none;
        appearance: none;
        font-size: 2rem;
      }
    }
  }
`;
