import { Navbar } from "../sections/Navbar";
import { Footer } from "../sections/Footer";
import { useEffect, useState } from "react";
import { products } from "../assets/products";
import { terms } from "../assets/terms";

export function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cards] = useState(products);
  const [activeFilters, setActiveFilters] = useState([]);

  const handleFilterClick = (filter) => {
    setActiveFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter]
    );
  };

  const normalizeText = (text) => {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  useEffect(() => {
    setSearchTerm(activeFilters.join(" "));
  }, [activeFilters]);

  const filteredCards = cards.filter((card) =>
    normalizeText(card.description).includes(normalizeText(searchTerm))
  );

  return (
    <div className="min-h-screen font-montserrat text-black bg-[url('/background.svg')] bg-defaultSize bg-no-repeat relative">
      <Navbar />
      <div className="max-w-[1200px] mx-auto p-10 pt-[150px] space-y-10">
        <h2 className="text-h2 font-playfair font-bold text-center">
          Conheça nossos produtos
        </h2>
        <main className="w-full border-t border-sepia">
          <div>
            <input
              type="text"
              placeholder="Pesquisar:"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-[50%] bg-white border border-black/50 p-2 my-5"
            />
          </div>
          <div className="flex gap-2 my-4">
            {terms.map((filter) => (
              <button
                key={filter.id}
                onClick={() => handleFilterClick(filter.alias)}
                className={`px-4 py-2 border border-sepia text-sepia ${
                  activeFilters.includes(filter.alias)
                    ? "bg-sepia text-white"
                    : "bg-white text-black"
                }`}
              >
                {filter.title}
              </button>
            ))}
          </div>
          <div className="w-full flex justify-center flex-wrap gap-10 pt-10 items-stretch">
            {filteredCards.map((card) => (
              <div
                key={card.id}
                className="flex flex-col flex-1 items-center justify-between gap-5 p-[25px] card border border-[#DEDEDE] bg-white"
              >
                <img
                  src={card.image}
                  alt=""
                  className="w-[300px] max-w-[300px] px-[25px]"
                />
                <div className="w-full flex flex-col items-start justify-end gap-4 text-start">
                  <p className="font-montserrat text-p2">{card.description}</p>
                  <p className="text-h5 font-bold text-sepia">{card.price}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
