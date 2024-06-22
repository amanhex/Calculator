const Buttons = ({ buttonNames, handleOnClick }) => {
  return (
    <>
      {buttonNames.map((buttonName, index) => (
        <button
          className="button"
          key={index}
          onClick={() => handleOnClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </>
  );
};

export default Buttons;
