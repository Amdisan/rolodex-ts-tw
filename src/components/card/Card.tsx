import { Monster } from '../../App';

type CardProps = {
  monster: Monster;
};

function Card({ monster }: CardProps) {
  const { id, name, email } = monster;
  return (
    <div
      className="flex flex-col bg-teal-200 border border-solid border-gray-400 rounded-md p-6 cursor-pointer hover:scale-105 ease-out duration-300"
      key={id}
    >
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2`}
      />
      <h2 className="text-2xl font-bold p-4">{name}</h2>
      <p className="p-4">{email}</p>
    </div>
  );
}

export default Card;
