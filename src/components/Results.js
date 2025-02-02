import React from 'react';
import { useLocation } from 'react-router-dom';
import './Results.css';

function Results() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get('name');
  const quantity = parseInt(params.get('quantity'), 10);

  const getComponentDetails = (name) => {
    switch (name) {
      case 'Бобовка':
        return { порох: quantity * 10, сера: quantity * 5, уголь: quantity * 2 };
      case 'Гексоген':
        return { порох: quantity * 15, сера: quantity * 10, уголь: quantity * 5 };
      case 'С4':
        return { порох: quantity * 20, сера: quantity * 15, уголь: quantity * 10 };
      default:
        return { порох: 0, сера: 0, уголь: 0 };
    }
  };

  const details = getComponentDetails(name);

  return (
    <div className="Results">
      <h1>Результаты</h1>
      <h2>{name}</h2>
      <p>Количество пороха: {details.порох}</p>
      <p>Количество серы: {details.сера}</p>
      <p>Количество угля: {details.уголь}</p>
    </div>
  );
}

export default Results;
