import styled from "styled-components";

const SearchBar = ({ value, onChange, placeholder }) => (
  <Input value={value} onChange={onChange} placeholder={placeholder} />
);

export default SearchBar;

const Input = styled.input`
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  font-size: var(--font-size-md);
  width: 250px;
  transition: all 0.2s;

  &:focus {
    border-color: var(--color-primary);
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.4); /* optional, can make dynamic later */
  }
`;
