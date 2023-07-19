import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}