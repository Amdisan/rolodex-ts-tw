import { useEffect, useState, ChangeEvent } from 'react';

import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';

import { getData } from './utils/data.utils';

export type Monster = {
  id: string;
  name: string;
  email: string;
};

function App() {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const filtered = monsters.filter((m) =>
      m.name.toLowerCase().includes(searchField)
    );
    setFilteredMonsters(filtered);
  }, [searchField, monsters]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="text-center">
      <h1 className="mt-20 mb-12 text-9xl text-teal-400 font-bigelow">
        Monster Search App
      </h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="type monster name"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
