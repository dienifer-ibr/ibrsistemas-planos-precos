import { Card } from "@/components/ui/card";
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

export const Footer = () => {
    const footerSections = [
        {
            title: "Plataforma",
            links: ["ERP", "Vendas", "Estoque", "Financeiro", "Relatórios", "Integrações"]
        },
        {
            title: "Soluções",
            links: ["E-commerce", "Marketplace", "Varejo", "Atacado", "Prestadores de Serviço", "Indústria"]
        },
        {
            title: "Recursos",
            links: ["Blog", "Central de Ajuda", "Webinars", "Ebooks", "Ferramentas Gratuitas", "Status da Plataforma"]
        },
        {
            title: "Empresa",
            links: ["Sobre o Bling", "Carreiras", "Imprensa", "Parceiros", "Afiliados", "Contato"]
        }
    ];

    const socialIcons = [
        { icon: <Facebook className="h-5 w-5" />, href: "#" },
        { icon: <Instagram className="h-5 w-5" />, href: "#" },
        { icon: <Linkedin className="h-5 w-5" />, href: "#" },
        { icon: <Youtube className="h-5 w-5" />, href: "#" },
        { icon: <Twitter className="h-5 w-5" />, href: "#" }
    ];

    return (
        <footer className="bg-blue-500 text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    <div className="lg:col-span-1">
                        <div className="text-2xl font-bold mb-4">bling</div>
                        <p className="text-sm mb-6 leading-relaxed">
                            O ERP mais completo e fácil de usar do Brasil. Gerencie seu negócio de forma inteligente.
                        </p>
                        <div className="flex space-x-4">
                            {socialIcons.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="text-white/70 hover:text-white transition-colors"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {footerSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold mb-4">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href="#"
                                            className="text-sm text-white/70 hover:text-white transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-white/20 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-sm text-white/70 mb-4 md:mb-0">
                            © 2024 Bling. Todos os direitos reservados.
                        </div>
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-white/70 hover:text-white transition-colors">Política de Privacidade</a>
                            <a href="#" className="text-white/70 hover:text-white transition-colors">Termos de Uso</a>
                            <a href="#" className="text-white/70 hover:text-white transition-colors">LGPD</a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};