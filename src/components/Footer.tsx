import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import '..//App.css';

export const Footer = () => {
    const footerSections = [
        {
            title: "Plataforma",
            links: [
                { label: "iBRsistemas ERP", href: "http://erp.ibrsistemas.com.br/#/login" },
                { label: "iPDV", href: "https://youtu.be/_YBG6VDZlHs?si=D9Tdy_78g_mLjniN" },
                { label: "Minhas Vendas App", href: "https://www.ibrsistemas.com.br/minhasvendas/" },
                // { label: "E-commerce", href: "/" }
            ]
        },
        {
            title: "Serviços",
            links: [
                { label: "Implantação", href: "https://api.whatsapp.com/send?phone=5551980293556&text=Olá, gostaria de mais informações sobre implantação do sistema!" },
                { label: "Curso de Treinamentos", href: "https://ibrsistemas.com.br/treinamentos/erp/" },
                { label: "Suporte", href: "https://ibrsistemas.com.br/treinamentos/erp/" },
                { label: "Treinamentos Interativos", href: "https://api.whatsapp.com/send?phone=5551980293556&text=Olá, gostaria de mais informações sobre funcionamento dos treinamentos interativos!" }
            ]
        },
        {
            title: "Integrações",
            links: [
                { label: "iBR Tef", href: "https://api.whatsapp.com/send?phone=5551980293556&text=Olá, gostaria de mais informações sobre o iBR Tef!" },
                { label: "Boletos", href: "https://api.whatsapp.com/send?phone=5551980293556&text=Olá, gostaria de mais informações sobre Emissões de Boletos pelo sistema!" },
                { label: "WhatsApp", href: "https://api.whatsapp.com/send?phone=5551980293556&text=Olá, gostaria de mais informações sobre a Integração do WhatsApp com o sistema!" },
                { label: "E-commerce", href: "https://api.whatsapp.com/send?phone=5551980293556&text=Olá, gostaria de mais informações sobre E-commerce!" }
            ]
        },
        {
            title: "Empresa",
            links: [
                { label: "Contato", href: "https://api.whatsapp.com/send?phone=5551980293556&text=Olá, gostaria de mais informações sobre o iBRsistemas ERP!" },
                { label: "Planos e Preços", href: "#planos-precos" },
                { label: "Sobre a iBRsistemas", href: "https://euquero.ibrsistemas.com.br/" },
                { label: "Dúvidas Frequentes", href: "#faq" }
            ]
        }
    ];

    const socialIcons = [
        { icon: <Facebook className="h-5 w-5" />, href: "https://www.facebook.com/IBRsistemas" },
        { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/ibrsistemas/" },
        { icon: <Linkedin className="h-5 w-5" />, href: "https://br.linkedin.com/company/ibrsistemas-sistema-completo-gil-e-f-cil-" },
        { icon: <Youtube className="h-5 w-5" />, href: "https://www.youtube.com/@ibrsistemassoftwareerp1717" },
        { icon: <SiTiktok className="h-5 w-5" />, href: "http://tiktok.com/@ibrsistemas" }
    ];

    return (
        <footer className="bg-blue-500 text-white">
            <div id="footer" className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Logo + Redes sociais */}
                    <div className="lg:col-span-1">
                        <img src="/images/logo.png" alt="logo" className="w-[75%] mb-4" />
                        <p className="text-base mb-6 leading-relaxed">
                            ERP Completo, Ágil e Fácil.
                        </p>
                        <div className="flex space-x-4">
                            {socialIcons.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/70 hover:text-white transition-colors"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Seções */}
                    {footerSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold mb-4">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-white/70 hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Rodapé inferior */}
                <div className="border-t border-white/20 pt-8">
                    <div className="flex justify-center items-center">
                        <div className="text-sm text-white/70 text-center">
                            © 2025 iBRsistemas. Todos os direitos reservados.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
