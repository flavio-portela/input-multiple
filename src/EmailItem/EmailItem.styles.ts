import { css } from "@emotion/core";

export default css`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  position: relative;
  border-radius: 3px;
  &:hover {
    background-color: #ededed;
  }
  /* Hide remove icon */
  i {
    display: none;
  }
  span {
    padding-right: 2rem;
  }
  /* Show remove icon when hovering over the item */
  &:hover i {
    cursor: pointer;
    display: inline;
  }

  i::before,
  i::after {
    position: absolute;
    content: " ";
    height: 0.6em;
    width: 0.01em;
    background-color: #1a1818;
    top: calc(50% - 0.2em);
    right: 0.7em;
  }

  i::before {
    transform: rotate(45deg);
  }
  i::after {
    transform: rotate(-45deg);
  }
`;
