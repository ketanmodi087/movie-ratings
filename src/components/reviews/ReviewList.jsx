// ReviewList.jsx
import { useState } from "react";
import styled from "styled-components";
import ReviewItem from "./ReviewItem";

export default function ReviewList({ reviews }) {
  const [visibleCount, setVisibleCount] = useState(3);
  const reversed = reviews ? reviews.slice().reverse() : [];

  if (!reviews || reviews.length === 0) {
    return (
      <div style={{ color: "var(--muted, #666)", marginTop: 8 }}>
        No reviews yet
      </div>
    );
  }

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const visibleReviews = reversed.slice(0, visibleCount);

  return (
    <ListContainer>
      {visibleReviews.map((r, idx) => (
        <ReviewItem key={idx} data={r} />
      ))}

      {visibleCount < reversed.length && (
        <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
      )}
    </ListContainer>
  );
}

const ListContainer = styled.div`
  margin-top: 10px;
`;

const LoadMoreButton = styled.button`
  background: var(--color-primary);
  color: #fff;
  border: none;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-size: var(--font-size-md);

  &:hover {
    background: var(--color-primary-dark);
  }
`;
