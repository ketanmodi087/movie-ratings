import styled from "styled-components";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <Overlay isOpen={isOpen} onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
export const Overlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: var(--color-background);
  border-radius: var(--radius-sm);
  max-width: 500px;
  width: 100%;
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  background: none;
  border: none;
  font-size: var(--font-size-xl);
  cursor: pointer;
`;
