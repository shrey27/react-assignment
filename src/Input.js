import React, { useState } from 'react';
import { useStore } from './context';

export default function Input() {
  const { setFormInput } = useStore();
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormInput(input);
  };

  return (
    <div className="input">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
