import { Monster } from '../../App';

import Card from '../card/Card';

type CardListProps = {
  monsters: Monster[];
};

function CardList({ monsters }: CardListProps) {
  return (
    <div className="w-5/6 mx-auto grid grid-cols-4 gap-5">
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
}

export default CardList;
