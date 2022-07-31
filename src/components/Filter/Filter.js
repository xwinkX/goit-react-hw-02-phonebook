const Filter = ({ value, onChange }) => {
  return (
    <>
      <h2>Find contacts by name</h2>
      <label>
        <input type="text" value={value} onChange={onChange} />
      </label>
    </>
  );
};
export default Filter;
