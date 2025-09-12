import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

export const FAQ = () => {
    const [openQuestion, setOpenQuestion] = useState<number | null>(null);

    const questions = [
        {
            question: "Posso testar o iBRsistemas ERP gratuitamente?",
            answer: "Sim! Você pode testar os recursos do iBRsistemas ERP por tempo indeterminado, sem inserir dados de cartão de crédito."
        },
        {
            question: "Como funciona a migração de dados?",
            answer: "Nossa equipe especializada te auxilia na migração completa dos seus dados. O processo é gratuito e não há risco de perda de informações."
        },
        {
            question: "O Bling funciona offline?",
            answer: "O Bling é uma plataforma online, mas você pode acessar relatórios e dados mesmo quando estiver offline através do nosso app mobile."
        },
        {
            question: "Posso integrar com meu e-commerce atual?",
            answer: "Sim! O Bling se integra com mais de 70 plataformas de e-commerce, marketplaces e sistemas de pagamento."
        },
        {
            question: "Como funciona o suporte técnico?",
            answer: "Oferecemos suporte via chat, email e telefone. Nossos especialistas estão disponíveis para ajudar você a usar melhor a plataforma."
        },
        {
            question: "Posso mudar de plano a qualquer momento?",
            answer: "Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento, e o valor é ajustado proporcionalmente."
        },
        {
            question: "Os dados ficam seguros no Bling?",
            answer: "Sim! Temos certificação ISO 27001 e utilizamos criptografia de ponta para garantir a máxima segurança dos seus dados."
        },
        {
            question: "Como funciona a emissão de notas fiscais?",
            answer: "A emissão é automática e integrada com a Receita Federal. Você pode emitir NFe, NFCe e NFSe diretamente pela plataforma."
        }
    ];

    const toggleQuestion = (index: number) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    return (
        <section className="py-16 px-4 bg-secondary/20">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">
                        Perguntas frequentes
                    </h2>
                    <p className="text-xl text-text-gray">
                        Tire suas dúvidas sobre a iBRsistemas
                    </p>
                </div>

                <div className="space-y-4">
                    {questions.map((item, index) => (
                        <Card key={index} className="overflow-hidden">
                            <button
                                onClick={() => toggleQuestion(index)}
                                className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/30 transition-colors"
                            >
                                <span className="font-semibold text-lg">{item.question}</span>
                                {openQuestion === index ? (
                                    <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                                )}
                            </button>
                            {openQuestion === index && (
                                <div className="px-6 pb-6">
                                    <p className="text-text-gray leading-relaxed">{item.answer}</p>
                                </div>
                            )}
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};