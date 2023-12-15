interface ISearchProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  onClickBtn: () => void;
}

const Search = ({ inputValue, setInputValue, onClickBtn }: ISearchProps) => {
  return (
    <div className="flex">
      <input
        type="text"
        className="border rounded"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="py-2 px-5 rounded bg-blue-300" onClick={onClickBtn}>
        검색
      </button>
    </div>
  );
};
export default Search;
