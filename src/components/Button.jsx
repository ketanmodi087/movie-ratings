// components/Container.jsx
import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) =>
    props.remove ? "var(--color-danger)" : "var(--color-primary)"};
  color: #fff;
  border: none;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-size: var(--font-size-md);

  &:hover {
    background: ${(props) =>
      props.remove ? "var(--color-danger-dark)" : "var(--color-primary-dark)"};
  }
`;

export default Button;
