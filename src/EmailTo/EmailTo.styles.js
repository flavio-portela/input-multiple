import { css } from "@emotion/core";

export default css`
  .emailsInputContainer {
    border: 1px solid #ccc;
    display: flex;
  }

  .currentEmails {
    display: flex;
    flex-wrap: wrap;
    margin-right: 5px;
    font-weight: bold;
  }

  .inputContainer {
    flex-grow: 1;
  }

  .inputContainer input {
    border: none;
    width: 100%;
    padding: 0;
    outline: none;
    padding: 6px 0;
  }

  .emailItem {
    padding: 5px 10px;
    position: relative;
    border-radius: 3px;
  }
  .emailItem span {
    padding-right: 10px;
  }

  .emailItem i {
    display: none;
    cursor: pointer;
  }
  .emailItem:hover i {
    display: inline;
  }

  .emailItem i::before,
  .emailItem i::after {
    position: absolute;
    content: "";
    height: 0.6em;
    width: 1px;
    background-color: #1a1818;
    bottom: 0.5em;
  }

  .emailItem i::before {
    transform: rotate(45deg);
  }
  .emailItem i::after {
    transform: rotate(-45deg);
  }
  .emailItem:hover {
    background-color: #ededed;
  }
`;
