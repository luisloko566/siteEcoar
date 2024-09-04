import { motion } from "framer-motion";

export function Principles() {
  const cardVariant1 = {
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
        delay: 0.05,
      },
    },
    exit: { opacity: 0, y: -200 },
  };
  const cardVariant2 = {
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
        delay: 0.1,
      },
    },
    exit: { opacity: 0, y: -200 },
  };
  const cardVariant3 = {
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
        delay: 0.15,
      },
    },
    exit: { opacity: 0, y: -200 },
  };

  return (
    <section className="wrapper flex items-start gap-10 flex-wrap py-20 px-10 lg:px-0">
      <motion.div
        className="card"
        variants={cardVariant1}
        initial="hidden"
        whileInView="show"
        exit="exit"
      >
        <img src="/global-search.svg" alt="Icon" className="max-w-8" />
        <h3 className="text-terracota font-bold text-h5">Missão</h3>
        <p>
          Nossa empresa busca oferecer soluções que atendam às necessidades do
          mercado com compromisso ético, responsabilidade social e
          transparência. Queremos superar as expectativas de clientes,
          fornecedores e colaboradores, promovendo o desenvolvimento sustentável
          em todas as nossas operações.
        </p>
      </motion.div>
      <motion.div
        className="card"
        variants={cardVariant2}
        initial="hidden"
        whileInView="show"
        exit="exit"
      >
        <img src="/gift.svg" alt="Icon" className="max-w-8" />
        <h3 className="text-terracota font-bold text-h5">Visão</h3>
        <p>
          Como empresa, almejamos alcançar patamares elevados, estabelecendo
          grandes negociações e parcerias estratégicas. Nossa visão é nos
          tornarmos uma corporação extremamente competitiva e valiosa,
          reconhecida pela excelência em nossos produtos, serviços e
          relacionamentos comerciais.
        </p>
      </motion.div>
      <motion.div
        className="card"
        variants={cardVariant3}
        initial="hidden"
        whileInView="show"
        exit="exit"
      >
        <img src="/medal-star.svg" alt="Icon" className="max-w-8" />
        <h3 className="text-terracota font-bold text-h5">Valores</h3>
        <p>
          Na Ecoar, nossos valores são fundamentais. Operamos com base na ética
          empresarial, responsabilidade social e transparência comercial. Temos
          como alicerce o respeito mútuo entre concorrentes, clientes, parceiros
          e colaboradores, garantindo relações sólidas e duradouras.
        </p>
      </motion.div>
    </section>
  );
}
