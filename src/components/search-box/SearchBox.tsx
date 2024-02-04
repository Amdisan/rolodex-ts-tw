import { ChangeEvent } from 'react';

type SearchBoxProps = {
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

function SearchBox({ placeholder, onChangeHandler }: SearchBoxProps) {
  return (
    <input
      className="border-none outline-none p-3 w-44 leading-7 mb-8 "
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
}

export default SearchBox;
