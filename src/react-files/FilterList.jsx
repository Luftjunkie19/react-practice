import { useState } from 'react';

function FilterList() {
  const fruitsAr = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
  ];

  const [filterFruits, setFilterFruits] = useState(fruitsAr);

  const handleSearch = (e) => {
    if (e.target.value === "") {
      setFilterFruits(fruitsAr);
      return;
    }
    const filteredValues = fruitsAr.filter(
      (item) => item.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
    );
    setFilterFruits(filteredValues);
  };
  return (
    <div>
      <h1>FILTERLIST:</h1>
      Search: <input type="text" onInput={handleSearch} />
      {filterFruits.map((item, index) => (
        <ul key={index}>
          <li key={index}>{item}</li>
        </ul>
      ))}
    </div>
  );
}

export default FilterList;
