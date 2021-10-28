const ButtonUpdate = ({ passedOnClick, id, name }) => {
  const handleClick = () => {
    passedOnClick(id);
  };
  return <button onClick={handleClick}>{name}</button>;
};

export default ButtonUpdate;
