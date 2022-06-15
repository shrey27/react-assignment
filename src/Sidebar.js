import React, { useEffect, useState } from 'react';
import { useStore } from './context';

export default function Sidebar() {
  const { arr } = useStore();

  return (
    <div className="sidebar">
      {arr.map((item, idx) => {
        return <h3 key={item + idx}>{item}</h3>;
      })}
    </div>
  );
}
