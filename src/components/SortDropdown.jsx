import styled from "styled-components";

const SortDropdown = ({ value, onChange, options }) => (
  <Wrapper>
    <Select value={value} onChange={onChange}>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </Select>
    <DropdownIcon>▼</DropdownIcon>
  </Wrapper>
);

export default SortDropdown;
const Wrapper = styled.div`
  position: relative;
  width: 200px;
`;

const Select = styled.select`
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  font-size: var(--font-size-md);
  appearance: none;
  cursor: pointer;
  background: var(--color-background);
  color: var(--color-text);

  &:focus {
    border-color: var(--color-primary);
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.4); /* You can also make this dynamic if needed */
  }
`;

const DropdownIcon = styled.span`
  position: absolute;
  right: var(--spacing-md);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: var(--font-size-sm);
  color: var(--color-subtle);
`;
