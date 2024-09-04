"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export function Navbar() {
  const [expanded, setExpanded] = useState(false);

  const variants = {
    closed: {
      x: "100%",
      transition: {
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 0.6,
      },
    },
    open: {
      x: "0%",
      transition: {
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 0.6,
      },
    },
  };

  const pcVariant = {
    hidden: {
      opacity: 0,
      y: -200,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <>
      {/* PC  */}
      <motion.header
        className="w-full hidden md:block fixed left-0 top-0 bg-[#FFF] z-[100]"
        variants={pcVariant}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="max-w-[1024px] mx-auto flex items-center justify-between px-10 lg:px-2 py-2">
          <a href="#hero">
            <img src="/newLogo.png" alt="Logo" className="max-w-20 h-auto" />
          </a>
          <div className="space-x-[65px]">
            <a href="/#hero" className="hover:font-bold">
              Home
            </a>
            <a href="/product" className="hover:font-bold">
              Produtos
            </a>
            <a href="/#solution" className="hover:font-bold">
              Solução
            </a>
          </div>
          <button className="w-fit border-2 border-quentao text-quentao hover:bg-quentao hover:text-white font-bold text-p2 px-4 py-2 transition-colors">
            <a href="https://wa.me/5544998353117">Entre em contato</a>
          </button>
        </div>
      </motion.header>

      {/* MOBILE */}
      <header className="w-full block md:hidden fixed top-0 left-0 z-[100]">
        <div className="p-4 flex justify-end">
          <button onClick={() => setExpanded(!expanded)} className="text-2xl">
            <img src="/menu.svg" alt="Menu Toggle" className="w-8 h-8" />
          </button>
        </div>
        <motion.nav
          initial="closed"
          animate={expanded ? "open" : "closed"}
          variants={variants}
          className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center space-y-10 text-2xl"
        >
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-2xl absolute right-4 top-4"
          >
            <img src="/add.svg" alt="Menu Toggle" className="w-6 h-6" />
          </button>
          <a href="/#hero" onClick={() => setExpanded(false)}>
            Home
          </a>
          <a href="/product" onClick={() => setExpanded(false)}>
            Produtos
          </a>
          <a href="/#solution" onClick={() => setExpanded(false)}>
            Solução
          </a>
          <a
            href="https://wa.me/5544998353117"
            onClick={() => setExpanded(false)}
          >
            Entre em contato
          </a>
        </motion.nav>
      </header>
    </>
  );
}
