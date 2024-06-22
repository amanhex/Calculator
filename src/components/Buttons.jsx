const Buttons = ({ buttonNames, handleOnClick, handleKeyDown }) => {
  return (
    <>
      {buttonNames.map((buttonName, index) => (
        <button
          className="button"
          key={index}
          onClick={() => handleOnClick(buttonName)}
          onKeyDown={handleKeyDown}
        >
          {buttonName}
        </button>
      ))}
    </>
  );
};

export default Buttons;
