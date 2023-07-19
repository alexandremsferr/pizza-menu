export function Pizza(props) {
  return (
    <main className='menu'>
      <h2>Nosso Menu</h2>
      <ul className='pizzas'>
        {props.pizzas.map((pizza, index) => (
          <li className='pizza' key={index}>
            <div>
              <img src={pizza.photoName} alt={pizza.name} />
              <h3>{pizza.name}</h3>
              <p>{pizza.ingredients}</p>
              <span>{pizza.price}$</span>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
