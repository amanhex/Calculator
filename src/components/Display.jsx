const Display = ({ displayValue }) => {
  return (
    <input type="text" className="display" value={displayValue} readOnly />
  );
};

export default Display;
