import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardData from "./data";

function App() {
  const cards = cardData.map((card) => <Card key={card.id} {...card} />);

  return (
    <div>
      <Header />
      <Hero />
      <section className="overflow">
        <div className="container flex">{cards}</div>
      </section>
    </div>
  );
}

export default App;
