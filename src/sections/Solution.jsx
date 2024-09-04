"use client";
import { useState, useEffect } from "react";

export function Solution() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const padding = Math.floor((width - 1024) / 2) + 10;

  return (
    <section
      id="solution"
      className="flex flex-col lg:flex-row items-center justify-start lg:justify-end gap-8 py-20 lg:max-w-[100%] mx-auto"
    >
      <div
        className={`block lg:absolute bg-sepia py-20 px-5 md:p-10 w-screen md:w-full lg:w-[50%] left-0`}
        style={width >= 1024 ? { paddingLeft: `${padding}px` } : {}}
      >
        <h2 className="font-black text-h3 md:text-h2 lg:text-h1 text-white">
          A solução inteligente para o seu negócio!
        </h2>
      </div>
      <p className="text-h4 lg:max-w-[40%]">
        A Ecoar Soluções em Distribuição de Alimentos é uma empresa dedicada a
        fornecer soluções inovadoras e eficientes no ramo alimentício. Buscamos
        constantemente resolver problemas complexos e otimizar processos,
        mantendo um equilíbrio entre custo baixo e preço justo.
      </p>
    </section>
  );
}
