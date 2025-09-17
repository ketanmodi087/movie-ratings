import styled from "styled-components";
import StarRating from "./StarRating";
import CircleButton from "./CircleButton";

const MovieCard = ({
  movie,
  onRatingChange,
  onAddWatchlist,
  onRemoveWatchlist,
  onInfoClick,
  isInWatchlist,
}) => {
  return (
    <Card>
      <Thumb src={movie.thumbnailUrl} alt={movie.title} />
      <Info>
        <div>
          <TitleRow>
            <Title>{movie.title}</Title>
            <InfoIcon onClick={onInfoClick}>i</InfoIcon>
          </TitleRow>
          <div style={{ display: "flex", gap: "20px", marginTop: "8px" }}>
            <Details>{movie.releaseYear}</Details>
            <Details>
              {Math.floor(movie.duration / 60)}h{" "}
              {String(movie.duration % 60).padStart(2, "0")}min
            </Details>
          </div>
        </div>
        <ActionContainer>
          <StarRating value={movie.rating} onChange={onRatingChange} />
          {isInWatchlist ? (
            <CircleButton onClick={onRemoveWatchlist}>–</CircleButton>
          ) : (
            <CircleButton onClick={onAddWatchlist}>+</CircleButton>
          )}
        </ActionContainer>
      </Info>
    </Card>
  );
};

export default MovieCard;

export const Card = styled.div`
  display: flex;
  gap: var(--spacing-lg);
  padding: var(--spacing-lg);
  border-bottom: 1px solid var(--color-border, #ddd);
  background: var(--color-background);
  border-radius: var(--radius-md);
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-lg);
  }
`;

export const Thumb = styled.img`
  width: 120px;
  height: 140px;
  object-fit: cover;
  border-radius: var(--radius-md);
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h4`
  margin: 0;
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--color-text);
`;

export const InfoIcon = styled.button`
  background: var(--color-primary);
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  color: #fff;
  cursor: pointer;
  font-size: var(--font-size-sm);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Details = styled.div`
  font-size: var(--font-size-md);
  color: var(--color-subtle);
`;

export const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
