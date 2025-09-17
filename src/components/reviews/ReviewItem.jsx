import styled from "styled-components";

export default function ReviewItem({ data }) {
  const { name, date, review } = data;

  // Show first letter as avatar
  const avatarLetter = name ? name[0] : "?";
  const formattedDate = date ? new Date(date).toLocaleDateString() : "";

  return (
    <ReviewCard>
      <Header>
        <Avatar>{avatarLetter}</Avatar>
        <Name>{name}</Name>
        {date && <DateText>{formattedDate}</DateText>}
      </Header>
      <Text>{review}</Text>
    </ReviewCard>
  );
}

/* Review Card */
export const ReviewCard = styled.div`
  background: var(--color-background);
  border-radius: var(--radius-sm);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: var(--shadow-md);
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-sm);
`;

export const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--color-primary);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-right: var(--spacing-md);
  text-transform: uppercase;
`;

export const Name = styled.div`
  font-weight: 600;
  font-size: var(--font-size-md);
`;

export const DateText = styled.div`
  font-size: var(--font-size-sm);
  color: var(--color-muted);
  margin-left: auto;
`;

export const Text = styled.div`
  color: var(--color-subtle);
  font-size: var(--font-size-md);
  line-height: 1.5;
`;
