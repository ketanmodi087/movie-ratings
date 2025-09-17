import React from "react";

import styled from "styled-components";

export default function StarRating({
  value = 0,
  onChange = () => {},
  readOnly = false,
}) {
  return (
    <Stars aria-label={`Rating ${value} of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <StarBtn
          key={n}
          onClick={() => !readOnly && onChange(n)}
          type="button"
          active={n <= value}
          title={`${n} star${n > 1 ? "s" : ""}`}
        >
          {n <= value ? "★" : "☆"}
        </StarBtn>
      ))}
    </Stars>
  );
}

/* Stars */
export const Stars = styled.div`
  display: inline-flex;
  gap: var(--spacing-xs);
  align-items: center;
  font-size: 18px;
  color: var(--color-star);
`;

export const StarBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 30px;
  line-height: 1;
  color: inherit;
  opacity: ${(props) => (props.active ? 1 : 0.4)};
`;
