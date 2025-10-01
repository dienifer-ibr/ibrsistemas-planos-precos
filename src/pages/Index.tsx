import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import PricingCard from "@/components/PricingCard";
import FeatureSection from "@/components/FeatureSection";
import { Footer } from "@/components/Footer";
import PlanComparison from "@/components/PlanComparison";
import Depoimentos from "@/components/Depoimentos";

import {
  ShoppingCart,
  Package,
  Truck,
  DollarSign,
  CreditCard,
  Wallet,
  BarChart3,
  Users,
  Store,
  Zap,
  CheckCircle,
  Star,
  Settings,
  FileBarChart,
  Barcode
} from "lucide-react";
import { FAQ } from "@/components/FAQ";

const Index = () => {
  const erpFeatures = [
    {
      icon: ShoppingCart,
      title: "Vendas",
      description: "Gerencie orpamentos, vendas e documentos fiscais"
    },
    {
      icon: Package,
      title: "Estoque",
      description: "Controle estoque de produtos, compras e fornecedores"
    },
    {
      icon: Truck,
      title: "Logística",
      description: "Separe pedidos e organize entregas"
    },
    {
      icon: DollarSign,
      title: "Gestão financeira",
      description: "Controle contas a receber e contas a pagar"
    },
    {
      icon: CreditCard,
      title: "Meios de pagamento",
      description: "Conheça o iBR Tef"
    },
    {
      icon: Barcode,
      title: "Boleto Bancário",
      description: "Gere boletos diretamente pelo sistema"
    },
    {
      icon: FileBarChart,
      title: "Análises",
      description: "Relatórios personalizáveis"
    },
    {
      icon: Users,
      title: "CRM",
      description: "Gestão de relacionamento com seu cliente"
    },
    {
      icon: Settings,
      title: "Gestão de Serviços / Produção",
      description: "Gerencie ordens de serviço e ordens de produção"
    }
  ];

  const hubFeatures = [
    {
      icon: Store,
      title: "Vendas Multicanal",
      description: "Para vender no Marketplace, Loja Virtual ou Loja Física (PDV), e integrar a gestão dos seus canais de venda"
    },
    {
      icon: Zap,
      title: "Integrações",
      description: "Conecte sistemas e automatize processos"
    },
    {
      icon: BarChart3,
      title: "Relatórios",
      description: "Analise dados e tome decisões estratégicas"
    }
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> */}

      {/* Hero Section */}
      <section className="py-20 bg-gradient-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            O <span className="text-primary">plano ideal</span> para o seu negócio, você encontra aqui na iBRsistemas!
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            ERP 100% online!
            <p>
              Comece grátis e sem inserir dados de pagamento.
            </p>
          </p>
        </div>
      </section>

      <section className="py-12 bg-gradient-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-white mb-8">
            Temos a solução definitiva para a gestão da sua empresa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-5 h-5 text-blue-200" />
              <span>Gestão Financeira Completa</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-5 h-5 text-blue-200" />
              <span>Gestão de Orçamentos e Vendas</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-5 h-5 text-blue-200" />
              <span>Controle de Estoque(s)
              </span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-5 h-5 text-blue-200" />
              <span>Frente de Caixa</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-5 h-5 text-blue-200" />
              <span>App para Vendas Externas</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-5 h-5 text-blue-200" />
              <span>Relatórios Personalizávies</span>
            </div>
          </div>
        </div>
      </section>



      <section>
        <h1 className="text-3xl text-center font-bold mb-4 text-blue-600 pt-[100px]">
          Conheça nossos Planos
        </h1>
        <div className="w-full h-screen flex items-center justify-center pt-[50px]" id="planos-precos">
          <iframe
            src="/Planos.html"
            width="100%"
            height="100%"
            className=""
            title="Planos"
          />
        </div>
      </section>


      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-600 px-3 py-1 rounded-full text-sm mb-4">
                <Star className="w-4 h-4" />
                <span>Favorito</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Conheça o Seu Negócio!
              </h2>
              <p className="text-lg mb-6 text-blue-100">
                Dashboards inteligentes para análise do negócio e ajuda nas tomadas de decisão
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=5551980293556&text=Olá, gostaria de mais informações sobre o iBRsistemas ERP!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="lg">
                  Saiba mais
                </Button>
              </a>
            </div>
            <div className="relative">
              <div className="bg-blue-600/20 rounded-lg p-8 backdrop-blur">
                <img
                  src='/images/dashboard.png'
                  alt="Dashboard iBR"
                  className="w-[100%] h-100 mx-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureSection
        title="iBRsistemas ERP"
        subtitle="Completo, Ágil e Fácil."
        features={erpFeatures}
      />

      <Depoimentos />
      <FAQ />
      <Footer />
    </div >
  );
};

export default Index;
