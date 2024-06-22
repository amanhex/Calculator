const Buttons = ({ buttonNames, handleOnClick }) => {
  const handleClick = (buttonName) => {
    handleOnClick(buttonName);
  };
  return (
    <>
      {buttonNames.map((buttonName, index) => (
        <button
          className="button"
          key={index}
          onClick={() => handleClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </>
  );
};

export default Buttons;
