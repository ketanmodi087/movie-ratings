import React, { useState } from "react";
import styled from "styled-components";
import StarRating from "./StarRating";
import Modal from "./Modal";
import AddReviewForm from "./reviews/ReviewForm";
import ReviewList from "./reviews/ReviewList";
import Button from "./Button";

// ----- Component -----
const MovieDetailsCard = ({
  movie,
  onRatingChange,
  onAddWatchlist,
  onRemoveWatchlist,
  isInWatchlist,
  onBack,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  if (!movie) return <>No movie selected</>;

  const handleReviewSubmit = (data) => {
    setModalOpen(false);
    if (movie.addReview) movie.addReview(data);
  };

  return (
    <>
      <PosterWrapper>
        <Poster src={movie.thumbnailUrl} alt={movie.title} />
      </PosterWrapper>
      <DetailsWrapper>
        <Title>{movie.title}</Title>
        <Year>Released: {movie.releaseYear}</Year>
        <Description>
          {movie.description || "No description available."}
        </Description>

        {/* Rating + Watchlist */}
        <RatingSection>
          <StarRating value={movie.rating} onChange={onRatingChange} />

          {isInWatchlist ? (
            <Button remove onClick={onRemoveWatchlist}>
              – Remove from Watchlist
            </Button>
          ) : (
            <Button onClick={onAddWatchlist}>+ Add to Watchlist</Button>
          )}
        </RatingSection>

        {/* Reviews */}
        <ReviewSection>
          <ReviewHeader>
            <h4>Reviews</h4>
            <Button onClick={() => setModalOpen(true)}>+ Add Review</Button>
          </ReviewHeader>
          <ReviewList reviews={movie.reviews} />

          <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
            <h2>Add Your Review</h2>
            <AddReviewForm onSubmit={handleReviewSubmit} />
          </Modal>
        </ReviewSection>

        <BackLink onClick={onBack}>← Back to Movies</BackLink>
      </DetailsWrapper>
    </>
  );
};

export default MovieDetailsCard;

export const PosterWrapper = styled.div`
  position: sticky;
  top: var(--spacing-md);
  flex: 0 0 350px; /* fixed width */
  align-self: flex-start;

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    flex: unset;
    margin-bottom: var(--spacing-md);
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: auto;
  border-radius: var(--radius-lg);
  object-fit: cover;
  box-shadow: var(--shadow-lg);
`;

export const DetailsWrapper = styled.div`
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

export const Title = styled.h2`
  margin: 0;
  font-size: var(--font-size-xl);
  color: var(--color-text);
`;

export const Description = styled.p`
  font-size: var(--font-size-md);
  color: var(--color-text);
  line-height: 1.4;
`;

export const Year = styled.div`
  color: var(--color-subtle);
`;

export const RatingSection = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  flex-wrap: wrap;
`;

export const ReviewSection = styled.div`
  margin-top: var(--spacing-lg);
  border-top: 1px solid var(--color-border);
  padding: var(--spacing-md);
`;

export const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BackLink = styled.div`
  margin-top: var(--spacing-lg);
  cursor: pointer;
  color: var(--color-subtle);
  &:hover {
    text-decoration: underline;
  }
`;
