
const workingHours = () => {
  const hour = new Date().getHours();
  const openHour = 17;
  const closeHour = 23;
  return hour >= closeHour ? <p>Estamos Off! 😴</p> : hour >= openHour ? <p>Estamos On 😎 Confira nosso cardápio</p> : <p>Abriremos às {openHour}h</p>;
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="order">
        {workingHours()}
        <button className="btn">Fale conosco</button>
      </div>
    </footer>
  );
}