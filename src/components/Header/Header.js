import React from 'react';
import './Header.css';

export default function Header({ title }) {
  return (
    <>
      <h1 className="header" data-testId="header-1">
        {title}
      </h1>
    </>
  );
}
