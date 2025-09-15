import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiWhatsapp } from "react-icons/si";

export const FAQ = () => {
    const [openQuestion, setOpenQuestion] = useState<number | null>(null);

    const questions = [
        {
            question: "Posso testar o iBRsistemas ERP gratuitamente?",
            answer: "Sim! Você pode testar os recursos do iBRsistemas ERP por tempo indeterminado, sem inserir dados de pagamento."
        },
        {
            question: "Como funciona a migração de dados?",
            answer: "Para migração de dados é necessária a avaliação da nossa equipe especializada, sendo isenta de custo a migração inicial."
        },
        {
            question: "Terei que pagar pelas atualizações do iBRsistemas ERP?",
            answer: "Não. Você contrata e paga mensalmente apenas o valor correspondente ao plano que utiliza e as atualizações são entregues periodicamente e não há custos adicionais."
        },
        {
            question: "Onde os dados da minha empresa ficarão armazenados?",
            answer: "O iBRsistemas é hospedado em um dos melhores e mais seguro Data Center do mundo na Amazon (AWS) em São Paulo e também em servidores próprios em nosso Data Center no Rio Grande do Sul, onde o banco de dados está em Cluster e os backups automáticos são frequentes e diários."
        },
        {
            question: "Tenho várias empresas, matriz e filiais, posso utilizar o iBRsistemas ERP para controlar todas as empresas de forma integrada?",
            answer: "Sim. Com o iBRsistemas ERP você pode cadastrar várias empresas e compartilhar informações entre elas como: Produtos, Clientes, Fornecedores, etc.. Ter a gestão de todas as empresas em uma única plataforma, porém com a gerencia de acesso individual, cada uma com seus usuários e permissões."
        },
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

                <button
                    onClick={() =>
                        window.open(
                            "https://api.whatsapp.com/send/?phone=555197790473&text=Olá, gostaria de tirar algumas dúvidas.",
                            "_blank"
                        )
                    }
                    className="inline-flex items-center space-x-2 px-6 py-2 text-sm border border-white rounded-md text-white bg-transparent hover:bg-white/10 transition"
                    type="button"
                >
                    <SiWhatsapp className="w-5 h-5" />
                    <span>Outras dúvidas!</span>
                </button>
            </div>
        </section>
    );
};