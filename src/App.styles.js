import { css } from "@emotion/core";

export default css`
  font-size: 2rem;
  width: 50%;
  margin: 0 auto;
  .emailsInput {
    border: 1px solid;
  }

  .submitButton {
    display: flex;
    justify-content: flex-end;
    button[type="submit"] {
      background: linear-gradient(0deg, #3996e0, #3996e0);
      border: none;
      color: white;
      padding: 1rem 2rem;
      margin-top: 1rem;
      font-size: 1.5rem;
      border-radius: 10rem;
      letter-spacing: -0.04rem;
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 960px) {
    width: 100%;
  }
`;
