import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.css';

const components = [
  { name: 'Бобовка', image: `${process.env.PUBLIC_URL}/images/bobovka.jpg` },
  { name: 'Гексоген', image: `${process.env.PUBLIC_URL}/images/hexogen.jpg` },
  { name: 'С4', image: `${process.env.PUBLIC_URL}/images/c4.jpg` },
];

function MainMenu() {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (name, value) => {
    setQuantities({ ...quantities, [name]: value });
  };

  const incrementQuantity = (name) => {
    setQuantities({ ...quantities, [name]: (quantities[name] || 0) + 1 });
  };

  const decrementQuantity = (name) => {
    setQuantities({ ...quantities, [name]: Math.max((quantities[name] || 0) - 1, 0) });
  };

  return (
    <div className="MainMenu">
      <h1>Пробуждения талантов</h1>
      <div className="components">
        {components.map((component) => (
          <div key={component.name} className="component">
            <img src={component.image} alt={component.name} />
            <h2>{component.name}</h2>
            <div className="quantity-controls">
              <button onClick={() => decrementQuantity(component.name)}>-</button>
              <input
                type="number"
                min="0"
                value={quantities[component.name] || ''}
                onChange={(e) => handleQuantityChange(component.name, parseInt(e.target.value, 10))}
                placeholder="Количество"
              />
              <button onClick={() => incrementQuantity(component.name)}>+</button>
            </div>
            <Link to={`/results?name=${component.name}&quantity=${quantities[component.name] || 0}`}>
              <button>Выбрать</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainMenu;

