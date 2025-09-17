import styled from "styled-components";

/* Circle Button */
export const CircleButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid #000;
  background: ${(props) => props.bg || "transparent"};
  color: ${(props) => props.color || "#000"};
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  &:hover {
    background: var(--color-surface);
  }
`;

export default CircleButton;
