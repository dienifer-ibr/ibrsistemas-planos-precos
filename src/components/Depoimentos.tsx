import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Depoimentos() {
  const stats = [
    { number: "500.000+", label: "Empresas ativas" },
    { number: "4.8", label: "Avaliação média", icon: <Star className="h-5 w-5 text-yellow-500 fill-current" /> },
    { number: "98%", label: "Satisfação dos clientes" },
    { number: "24/7", label: "Suporte disponível" }
  ];

  const depoimentos = [
    {
      text: "O iBRsistemas revolucionou nossa operação. Conseguimos reduzir 80% do tempo gasto com processos manuais.",
      author: "Maria Silva",
      company: "Loja Fashion Store",
      rating: 5
    },
    {
      text: "A integração com os marketplaces é fantástica. Nunca foi tão fácil gerenciar vendas em múltiplos canais.",
      author: "João Santos",
      company: "Tech Solutions",
      rating: 5
    },
    {
      text: "O suporte é excepcional e a plataforma é muito intuitiva. Recomendo para qualquer empreendedor.",
      author: "Ana Costa",
      company: "Boutique Elegance",
      rating: 5
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">
            Ajudamos milhares de empreendedores<br />
            a simplificar seus negócios.
          </h2>
          <p className="text-xl text-text-gray">
            Veja o que nossos clientes dizem sobre o iBRsistemas
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-secondary/30 border-0">
              <div className="flex items-center justify-center mb-2">
                <span className="text-3xl font-bold text-primary">{stat.number}</span>
                {stat.icon && <div className="ml-2">{stat.icon}</div>}
              </div>
              <p className="text-sm text-text-gray">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 =">
          {depoimentos.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-blue-100">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-text-gray mb-4 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-text-light">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
