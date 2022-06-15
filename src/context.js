import React, { createContext, useState, useContext, useEffect } from 'react';

const StoreContext = createContext(null);

const StoreProivder = ({ children }) => {
  const [formInput, setFormInput] = useState('');
  const [maxValue, setMaxValue] = useState({ a: 0, b: 0 });
  const [arr, setArr] = useState([]);

  useEffect(() => {
    let finalArray = formInput.split(',');
    let temp = [...finalArray];

    let a = temp.sort((a, b) => a - b).pop();
    let b = temp.sort((a, b) => a - b).pop();

    setMaxValue({ a, b });

    setArr(finalArray);
  }, [formInput]);

  return (
    <StoreContext.Provider
      value={{ formInput, setFormInput, maxValue, setMaxValue, arr, setArr }}
    >
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => useContext(StoreContext);

export { useStore, StoreProivder };
