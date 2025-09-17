// AddReviewForm.tsx
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button";

const AddReviewForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, review });
    setName("");
    setReview("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextArea
        placeholder="Write your review..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
        required
        rows={4}
      />
      <Button type="submit">Submit Review</Button>
    </Form>
  );
};

export default AddReviewForm;

/* Form */
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

export const Input = styled.input`
  padding: var(--spacing-sm);
  font-size: var(--font-size-lg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  &:focus {
    border-color: var(--color-primary);
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.4);
  }
`;

export const TextArea = styled.textarea`
  padding: var(--spacing-sm);
  font-size: var(--font-size-lg);
  resize: vertical;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
`;
