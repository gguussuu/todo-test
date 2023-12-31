interface IFilterProps {
  filterComplete: boolean;
  filterIncomplete: boolean;
  onFilterHandler: () => void;
  setFilterComplete: React.Dispatch<React.SetStateAction<boolean>>;
  setFilterIncomplete: React.Dispatch<React.SetStateAction<boolean>>;
}

const Filter = ({
  filterComplete,
  filterIncomplete,
  onFilterHandler,
  setFilterComplete,
  setFilterIncomplete,
}: IFilterProps) => {
  return (
    <div className="flex">
      <div className="flex">
        <input
          type="checkbox"
          id="all"
          checked={filterComplete && filterIncomplete}
          onChange={onFilterHandler}
          className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
        />
        <label htmlFor="all">모두</label>
      </div>
      <div className="flex">
        <input
          type="checkbox"
          id="unComplete"
          checked={filterComplete}
          onChange={() => setFilterComplete(!filterComplete)}
          className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
        />
        <label htmlFor="unComplete">완료</label>
      </div>
      <div className="flex">
        <input
          type="checkbox"
          id="complete"
          checked={filterIncomplete}
          onChange={() => setFilterIncomplete(!filterIncomplete)}
          className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
        />
        <label htmlFor="complete">미완료</label>
      </div>
    </div>
  );
};
export default Filter;
