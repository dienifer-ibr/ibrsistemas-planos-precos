import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Depoimentos() {
  const stats = [
    { number: "400+", label: "Empresas ativas" },
    { number: "4.7", label: "Avaliação média", icon: <Star className="h-5 w-5 text-yellow-500 fill-current" /> },
    { number: "100%", label: "Satisfação dos clientes" },
    { number: "7/7", label: "Suporte disponível" }
  ];

  const depoimentos = [
    {
      text: "Solução completa pra empresa, indico muito",
      author: "Maikel Castro",
      company: "5 anos atrás",
      rating: 5
    },
    {
      text: "Sistema completo, ótimo atendimento, preço excelente. Acho que não existe outro com melhor custo benefício.",
      author: "Franciane Führ Hoelscher",
      company: "8 anos atrás",
      rating: 5
    },
    {
      text: "Melhor sistema ERP da região",
      author: "Raphael Leick",
      company: "8 anos atrás",
      rating: 5
    }
  ];

  return (
    <section className="py-16 px-4 bg-blue-400">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Ajudamos milhares de empreendedores<br />
            a simplificar seus negócios.
          </h2>
          <p className="text-xl text-white/80">
            Veja o que nossos clientes dizem sobre o iBRsistemas
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-secondary/30 border-0">
              <div className="flex items-center justify-center mb-2">
                <span className="text-3xl font-bold text-white">{stat.number}</span>
                {stat.icon && <div className="ml-2">{stat.icon}</div>}
              </div>
              <p className="text-sm text-white/80">{stat.label}</p>
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
