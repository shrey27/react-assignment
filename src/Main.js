import React, { useState, useEffect } from 'react';
import { useStore } from './context';

export default function Main() {
  const {
    maxValue: { a, b },
  } = useStore();
  return (
    <div className="main">
      {a && b && (
        <p>{`Maximum sum of two numbers (${a}, ${b}) is ${
          Number(a) + Number(b)
        }`}</p>
      )}
    </div>
  );
}
