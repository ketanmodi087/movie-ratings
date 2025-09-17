import React from "react";
import styled from "styled-components";
import CircleButton from "./CircleButton";

export default function WatchlistTable({ movies, onRemove }) {
  const formatDuration = (minutes) => {
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hrs}h ${mins.toString().padStart(2, "0")}min`;
  };

  if (!movies || movies.length === 0) {
    return (
      <Card>
        <Title>Watchlist</Title>No movies in your watchlist.
      </Card>
    );
  }

  return (
    <Card>
      <Title>Watchlist</Title>
      <Grid>
        {movies.map((m) => (
          <MovieItem key={m.id}>
            <Thumb src={m.thumbnailUrl} alt={m.title} />
            <FlexWrapGapColumn>
              <Title>{m.title}</Title>
              <Details>{formatDuration(m.duration)}</Details>
            </FlexWrapGapColumn>
            <RemoveButton onClick={() => onRemove(m.id)}>×</RemoveButton>
          </MovieItem>
        ))}
      </Grid>
    </Card>
  );
}

// ----- Styled Components -----
const Card = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-height: 200px;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 12px;
`;

const MovieItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 10px;
  background: #f6f7fb;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-2px);
    background: #eaeaea;
  }
`;

const Thumb = styled.img`
  width: 80px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;

const FlexWrapGap = styled.div`
  display: flex;
  gap: 30px;
`;

const FlexWrapGapColumn = styled(FlexWrapGap)`
  flex-direction: column;
  flex: 1;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 14px;
`;

const Details = styled.div`
  font-size: 14px;
  color: #555;
`;

const RemoveButton = styled(CircleButton)`
  width: 28px;
  height: 28px;
  font-size: 18px;
  border: none;
  color: #fff;
  background: #ff4d4f;
  &:hover {
    background: #d9363e;
  }
`;
