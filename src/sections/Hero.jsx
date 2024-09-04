import { motion } from "framer-motion";

export function Hero() {
  const textVariant = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 1.6,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      id="hero"
      className="max-w-[500px] flex flex-col gap-6 px-10 lg:px-0 text-start py-20 md:pt-[200px] lg:pt-[400px]"
      variants={textVariant}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1 className="font-playfair text-quentao text-title font-bold">eCoar</h1>
      <p className="text-p2">
        Na Ecoar estamos comprometidos em construir um futuro próspero e
        sustentável para nossos clientes, colaboradores e comunidades onde
        atuamos.
      </p>
      <a href="https://wa.me/5544998353117" className="button_quentao">
        Entrar em contato
      </a>
    </motion.div>
  );
}
