import { Card, CardBlock } from './ContactCard.Styled';

export const ContactCard = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <CardBlock>
      <Card key={id}>
        <span>{name}</span>
        <span>{number}</span>
        <button onClick={() => onDelete(id)}>Delete</button>
      </Card>
    </CardBlock>
  );
};
