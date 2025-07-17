import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import PricingCard from "@/components/PricingCard";
import FeatureSection from "@/components/FeatureSection";
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

const Index = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");

  const pricingPlans = [
    {
      name: "Free",
      description: "Para quem precisa controlar a operação de vendas de um jeito descomplicado",
      price: "R$0",
      period: "mês",
      buttonText: "Comece grátis",
      buttonVariant: "blue-outline" as const,
      features: {
        users: "5 usuários",
        storage: "60 MB de dados",
        files: "1.5 GB de arquivos",
        imports: "200 importações de pedidos em marketplaces por mês"
      },
      allFeatures: [
        "Gestão automática de estoque",
        "Gestão de vendas multicanal"
      ]
    },
    {
      name: "Bronze",
      description: "Para quem quer fazer a gestão completa do negócio em uma única plataforma",
      price: "R$110",
      period: "mês",
      buttonText: "Comece grátis",
      buttonVariant: "blue-outline" as const,
      features: {
        users: "10 usuários",
        storage: "120 MB de dados",
        files: "3 GB de arquivos",
        imports: "500 importações de pedidos em marketplaces por mês"
      },
      allFeatures: [
        "Tudo do Plano Cobalto",
        "Gestão financeira completa",
        "Emissão de boletos"
      ]
    },
    {
      name: "Prata",
      description: "Para quem busca otimizar os processos da empresa com automações e dashboards",
      price: "R$249",
      period: "mês",
      buttonText: "Comece grátis",
      buttonVariant: "gradient" as const,
      features: {
        users: "15 usuários",
        storage: "360 MB de dados",
        files: "9 GB de arquivos",
        imports: "2 mil importações de pedidos em marketplaces por mês"
      },
      allFeatures: [
        "Tudo do Plano Mercúrio",
        "Impressão automática da etiqueta logística"
      ],
      isPopular: true
    },
    {
      name: "Ouro",
      description: "Para quem quer crescer o negócio com recursos para uma alta performance",
      price: "R$450",
      period: "mês",
      buttonText: "Fale com especialista",
      buttonVariant: "blue-outline" as const,
      features: {
        users: "50 usuários",
        storage: "1.2 GB de dados",
        files: "30 GB de arquivos",
        imports: "5 mil importações de pedidos em marketplaces por mês"
      },
      allFeatures: [
        "Tudo do Plano Titânio",
        "Dashboards Meu Negócio com dados de vendas em até",
        "Importações ilimitadas de pedidos em marketplaces"
      ]
    },
    {
      name: "Diamante",
      description: "Para quem quer contar com um sistema robusto e alcançar resultados limitados",
      price: "R$650",
      period: "mês",
      buttonText: "Fale com especialista",
      buttonVariant: "blue-outline" as const,
      features: {
        users: "80 usuários",
        storage: "1.8 GB de dados",
        files: "45 GB de arquivos",
        imports: "Importações ilimitadas de pedidos em marketplaces"
      },
      allFeatures: [
        "Tudo do Plano Platina",
        "Dashboards Meu Negócio com dados de vendas em até"
      ]
    }
  ];

  const erpFeatures = [
    {
      icon: ShoppingCart,
      title: "Vendas",
      description: "Gerencie pedidos e documentos fiscais"
    },
    {
      icon: Package,
      title: "Estoque",
      description: "Controle produtos e fornecedores"
    },
    {
      icon: Truck,
      title: "Logística",
      description: "Separe pedidos e envie remessas"
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
      title: "Gestão de Serviços",
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

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O <span className="text-primary">plano ideal</span> para o seu negócio, você encontra aqui na iBRsistemas!
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Comece grátis e sem inserir dados de pagamento.
          </p>

          {/* Billing Period Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-sm ${billingPeriod === 'monthly' ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
              Mensal
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${billingPeriod === 'annual' ? 'bg-primary' : 'bg-muted'
                }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${billingPeriod === 'annual' ? 'translate-x-6' : 'translate-x-1'
                  }`}
              />
            </button>
            <span className={`text-sm ${billingPeriod === 'annual' ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
              Anual <span className="text-xs text-primary">(economize até R$1.300)</span>
            </span>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="py-12 bg-gradient-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-white mb-8">
            Recursos ilimitados em todos os planos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-5 h-5 text-blue-200" />
              <span>Emissão de notas fiscais</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-5 h-5 text-blue-200" />
              <span>Integração com marketplaces, lojas virtuais, loja física, logística, e muito +</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-5 h-5 text-blue-200" />
              <span>Atualização automática de pedidos e estoque</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {pricingPlans.map((plan, index) => (
              <div key={plan.name} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <PricingCard {...plan} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ERP Features */}
      <FeatureSection
        title="iBRsistemas ERP"
        subtitle="Completo, Ágil e Fácil."
        features={erpFeatures}
      />

      {/* Meu Negócio Banner */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-600 px-3 py-1 rounded-full text-sm mb-4">
                <Star className="w-4 h-4" />
                <span>Novo</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Conheça o Seu Negócio!
              </h2>
              <p className="text-lg mb-6 text-blue-100">
                Dashboards inteligentes para análise do negócio e ajuda nas tomadas de decisão
              </p>
              <Button variant="secondary" size="lg">
                Saiba mais
              </Button>
            </div>
            {/* <div className="relative">
              <div className="bg-blue-600/20 rounded-lg p-8 backdrop-blur">
                <BarChart3 className="w-24 h-24 text-blue-200 mx-auto" />
              </div>
            </div> remover */}
            <div className="relative">
              <div className="bg-blue-600/20 rounded-lg p-8 backdrop-blur">
                <img
                  src='/images/teste.png'
                  alt="Dashboard iBR"
                  className="w-24 h-24 mx-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HUB Features */}
      <FeatureSection
        title="HUB"
        subtitle="Loja virtual, física e marketplace"
        features={hubFeatures}
      />

      {/* Footer CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Pronto para começar?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Teste e utilize de forma gratuita.
          </p>
          <Button variant="secondary" size="lg" className="text-lg px-8">
            <a
              href="https://erp.ibrsistemas.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >Comece agora grátis</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
