export function Footer() {
  return (
    <section className="border-t border-sepia px-10">
      <div className="max-w-[1024px] mx-auto py-5 space-y-10 lg:space-y-5">
        <div className="flex items-start justify-start md:justify-around gap-10 flex-wrap">
          <a href="#hero">
            <img
              src="/logoEcoar.png"
              alt="Logo Ecoar"
              className="mix-blend-darken"
            />
          </a>
          <ul className="space-y-2">
            <p className="font-bold">Links</p>
            <li>
              <a href="/#hero">Home</a>
            </li>
            <li>
              <a href="/product">Produtos</a>
            </li>
            <li>
              <a href="/#solution">Nossa solução</a>
            </li>
          </ul>
          <ul className="space-y-2">
            <p className="font-bold">Redes sociais</p>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
          </ul>
        </div>
        <p className="text-center">
          Copyright © 2024. Ecoar LTDA | CNPJ: 06.876.763/0001-87 | Todos os
          direitos reservados.
        </p>
      </div>
    </section>
  );
}
