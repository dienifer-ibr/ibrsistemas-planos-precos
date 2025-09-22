import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, Check, X } from "lucide-react";

interface PlanFeature {
  name: string;
  cobalto: string | boolean;
  mercurio: string | boolean;
  titanio: string | boolean;
  platina: string | boolean;
  diamante: string | boolean;
  description?: string;
}

interface FeatureCategory {
  name: string;
  features: PlanFeature[];
}

const planData: FeatureCategory[] = [
  {
    name: "Usuários e armazenamento",
    features: [
      {
        name: "Usuários",
        cobalto: "5 usuários",
        mercurio: "10 usuários",
        titanio: "15 usuários",
        platina: "50 usuários",
        diamante: "80 usuários"
      },
      {
        name: "Armazenamento de dados",
        cobalto: "60 MB",
        mercurio: "120 MB",
        titanio: "360 MB",
        platina: "1.2 GB",
        diamante: "1.8 GB",
        description: "Espaço de armazenamento dedicado ao cadastro de produtos, clientes e fornecedores, vendas, contas, ordens de serviço, objetos logísticos, movimentações de estoque, entre outros."
      },
      {
        name: "Armazenamento de arquivos",
        cobalto: "1.2 GB",
        mercurio: "3 GB",
        titanio: "9 GB",
        platina: "30 GB",
        diamante: "45 GB",
        description: "Espaço de armazenamento dedicado a notas fiscais, fotos de produtos, arquivos anexados ao sistema (OFX do extrato bancário, PDF de orçamentos, entre outros)"
      }
    ]
  },
  {
    name: "Atendimento",
    features: [
      {
        name: "Central de ajuda",
        cobalto: true,
        mercurio: true,
        titanio: true,
        platina: true,
        diamante: true,
        description: "Portal com artigos e tutoriais"
      },
      {
        name: "Suporte via telefone",
        cobalto: true,
        mercurio: true,
        titanio: true,
        platina: true,
        diamante: true
      },
      {
        name: "Suporte via chat",
        cobalto: true,
        mercurio: true,
        titanio: true,
        platina: true,
        diamante: true
      },
      {
        name: "Suporte via ticket",
        cobalto: true,
        mercurio: true,
        titanio: true,
        platina: true,
        diamante: true
      },
      {
        name: "Suporte Premium",
        cobalto: "Extensão adicional",
        mercurio: "Extensão adicional",
        titanio: "Extensão adicional",
        platina: "Extensão adicional",
        diamante: true,
        description: "Receba atendimento rápido via Whatsapp em horário estendido (segunda à sexta das 8h às 20h, sábados e feriados nacionais das 8h às 17h). Disponível no Plano Diamante após período de teste grátis."
      }
    ]
  },
  {
    name: "Integrações",
    features: [
      {
        name: "Integração com marketplaces",
        cobalto: true,
        mercurio: true,
        titanio: true,
        platina: true,
        diamante: true
      },
      {
        name: "Importações de pedidos em marketplaces por mês",
        cobalto: "200",
        mercurio: "500",
        titanio: "2.000",
        platina: "5.000",
        diamante: "ilimitado",
        description: "O volume de importações do mês considera a média dos últimos três meses."
      },
      {
        name: "Integração com lojas virtuais",
        cobalto: true,
        mercurio: true,
        titanio: true,
        platina: true,
        diamante: true,
        description: "Plataformas de e-commerce"
      },
      {
        name: "Sincronizações de produtos e preços",
        cobalto: true,
        mercurio: true,
        titanio: true,
        platina: true,
        diamante: true,
        description: "Em múltiplos canais de venda"
      }
    ]
  },
  {
    name: "Gestão de Estoque",
    features: [
      {
        name: "Cadastro de fornecedores",
        cobalto: true,
        mercurio: true,
        titanio: true,
        platina: true,
        diamante: true
      },
      {
        name: "Controle completo do estoque",
        cobalto: true,
        mercurio: true,
        titanio: true,
        platina: true,
        diamante: true
      },
      {
        name: "Cadastro de produtos com variações",
        cobalto: true,
        mercurio: true,
        titanio: true,
        platina: true,
        diamante: true
      },
      {
        name: "Relatórios de estoque",
        cobalto: true,
        mercurio: true,
        titanio: true,
        platina: true,
        diamante: true,
        description: "Incluindo curva ABC"
      }
    ]
  },
  {
    name: "Vendas",
    features: [
      {
        name: "Controle de vendas",
        cobalto: true,
        mercurio: true,
        titanio: true,
        platina: true,
        diamante: true
      },
      {
        name: "Cadastro de vendedores e comissões",
        cobalto: true,
        mercurio: true,
        titanio: true,
        platina: true,
        diamante: true
      },
      {
        name: "Cotação de fretes",
        cobalto: true,
        mercurio: true,
        titanio: true,
        platina: true,
        diamante: true,
        description: "Geração e envio de código de rastreio"
      },
      {
        name: "Relatórios de vendas",
        cobalto: true,
        mercurio: true,
        titanio: true,
        platina: true,
        diamante: true
      }
    ]
  },
  {
    name: "Notas Fiscais",
    features: [
      {
        name: "Emissão de NFC-e",
        cobalto: true,
        mercurio: true,
        titanio: true,
        platina: true,
        diamante: true,
        description: "Necessário certificado digital CNPJ A1 ou A3"
      },
      {
        name: "Emissão de NF-e",
        cobalto: true,
        mercurio: true,
        titanio: true,
        platina: true,
        diamante: true,
        description: "Necessário certificado digital CNPJ A1 ou A3"
      },
      {
        name: "Emissão de NFS-e",
        cobalto: true,
        mercurio: true,
        titanio: true,
        platina: true,
        diamante: true,
        description: "Mais de 700 municípios integrados"
      }
    ]
  },
  {
    name: "Gestão Financeira",
    features: [
      {
        name: "Controle de contas a pagar e receber",
        cobalto: true,
        mercurio: true,
        titanio: true,
        platina: true,
        diamante: true
      },
      {
        name: "Relatórios financeiros",
        cobalto: true,
        mercurio: true,
        titanio: true,
        platina: true,
        diamante: true
      },
      {
        name: "Emissão de boletos",
        cobalto: true,
        mercurio: true,
        titanio: true,
        platina: true,
        diamante: true
      },
      {
        name: "Relatório DRE",
        cobalto: false,
        mercurio: true,
        titanio: true,
        platina: true,
        diamante: true
      }
    ]
  }
];

const plans = [
  {
    id: "cobalto",
    name: "Cobalto",
    price: "R$ 55",
    period: "/mês",
    action: "Comece grátis",
    popular: false
  },
  {
    id: "mercurio",
    name: "Mercúrio",
    price: "R$ 110",
    period: "/mês",
    action: "Comece grátis",
    popular: false
  },
  {
    id: "titanio",
    name: "Titânio",
    price: "R$ 99",
    period: "/mês",
    action: "Comece grátis",
    popular: true
  },
  {
    id: "platina",
    name: "Platina",
    price: "R$ 450",
    period: "/mês",
    action: "Fale com vendas",
    popular: false
  },
  {
    id: "diamante",
    name: "Diamante",
    price: "R$ 650",
    period: "/mês",
    action: "Fale com vendas",
    popular: false
  }
];

const FeatureValue = ({ value }: { value: string | boolean }) => {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="h-5 w-5 text-plan-check mx-auto" />
    ) : (
      <X className="h-5 w-5 text-muted-foreground mx-auto" />
    );
  }

  if (value === "Extensão adicional") {
    return (
      <span className="text-sm bg-plan-extension text-white px-2 py-1 rounded-md">
        Extensão adicional
      </span>
    );
  }

  return <span className="text-sm text-center">{value}</span>;
};

export default function PlanComparison() {
  const [isOpen, setIsOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const toggleCategory = (categoryName: string) => {
    setOpenCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <div className="relative flex items-center justify-center">
            <div className="absolute w-full border-t border-gray-200"></div>

            <Button
              variant="outline"
              className="relative z-10 w-[33%] flex items-center justify-between p-6 text-lg font-semibold border-2 border-primary hover:bg-primary/5 rounded-[50px] text-primary"
            >
              <span className="flex-1 text-center">
                Compare todos os recursos dos planos
              </span>
              {isOpen ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </Button>
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent className="mt-6">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              {/* Header da tabela */}
              <div className="grid grid-cols-6 gap-0 border-b border-border">
                <div className="p-4 bg-muted border-r border-border"></div>
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`p-4 text-center border-r border-border last:border-r-0 ${plan.popular
                      ? "bg-plan-popular text-plan-popular-foreground"
                      : "bg-plan-header text-plan-header-foreground"
                      }`}
                  >
                    <div className="font-bold text-lg">{plan.name}</div>
                    <div className="text-2xl font-bold mt-1">
                      {plan.price}
                      <span className="text-sm font-normal">{plan.period}</span>
                    </div>
                    <Button
                      variant={plan.popular ? "secondary" : "outline"}
                      size="sm"
                      className="text-white w-full bg-blue-600 flex items-center justify-between p-4 text-lg font-semibold border-2 rounded-[50px] hover:bg-blue-500/80"
                    >
                      {plan.action}
                    </Button>
                  </div>
                ))}
              </div>

              {/* Categorias e recursos */}
              <div className="divide-y divide-border">
                {planData.map((category, categoryIndex) => (
                  <div key={category.name}>
                    <Collapsible
                      open={openCategories.includes(category.name)}
                      onOpenChange={() => toggleCategory(category.name)}
                    >
                      <CollapsibleTrigger asChild>
                        <div className="grid grid-cols-6 gap-0 cursor-pointer hover:bg-muted/50 transition-colors">
                          <div className="p-4 bg-secondary font-semibold flex items-center justify-between border-r border-border">
                            <span>{category.name}</span>
                            {openCategories.includes(category.name) ? (
                              <ChevronUp className="h-4 w-4" />
                            ) : (
                              <ChevronDown className="h-4 w-4" />
                            )}
                          </div>
                          <div className="p-4 bg-secondary border-r border-border"></div>
                          <div className="p-4 bg-secondary border-r border-border"></div>
                          <div className="p-4 bg-secondary border-r border-border"></div>
                          <div className="p-4 bg-secondary border-r border-border"></div>
                          <div className="p-4 bg-secondary"></div>
                        </div>
                      </CollapsibleTrigger>

                      <CollapsibleContent>
                        {category.features.map((feature, featureIndex) => (
                          <div
                            key={feature.name}
                            className={`grid grid-cols-6 gap-0 ${featureIndex % 2 === 0 ? "bg-plan-row-even" : "bg-plan-row-odd"
                              }`}
                          >
                            <div className="p-4 border-r border-border">
                              <div className="font-medium">{feature.name}</div>
                              {feature.description && (
                                <div className="text-xs text-muted-foreground mt-1">
                                  {feature.description}
                                </div>
                              )}
                            </div>
                            <div className="p-4 flex items-center justify-center border-r border-border">
                              <FeatureValue value={feature.cobalto} />
                            </div>
                            <div className="p-4 flex items-center justify-center border-r border-border">
                              <FeatureValue value={feature.mercurio} />
                            </div>
                            <div className="p-4 flex items-center justify-center border-r border-border">
                              <FeatureValue value={feature.titanio} />
                            </div>
                            <div className="p-4 flex items-center justify-center border-r border-border">
                              <FeatureValue value={feature.platina} />
                            </div>
                            <div className="p-4 flex items-center justify-center">
                              <FeatureValue value={feature.diamante} />
                            </div>
                          </div>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}