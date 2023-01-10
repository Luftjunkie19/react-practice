import { useState } from 'react';

function CalendarPick() {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <>
      <h1>Click it-project:</h1>
      <button onClick={handleClick}>Click it!</button>
      {visible && <h2>Helllllo Mate, you clicked the item~!</h2>}
    </>
  );
}

export default CalendarPick;
