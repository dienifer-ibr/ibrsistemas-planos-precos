// JavaScript para funcionalidades da página de planos - VERSÃO COM SETAS E SCROLL

document.addEventListener('DOMContentLoaded', function () {
    console.log('iBRsistemas - Página de planos carregada com sucesso!');

    const plansContainer = document.querySelector('.plans-container');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const planCards = document.querySelectorAll('.plan-card');
    const cardWidth = 320; // Largura aproximada de um card + gap
    let currentIndex = 0;

    // Função para atualizar estado dos botões
    function updateButtons() {
        const maxScroll = plansContainer.scrollWidth - plansContainer.clientWidth;

        if (plansContainer.scrollLeft <= 0) {
            prevBtn.disabled = true;
        } else {
            prevBtn.disabled = false;
        }

        if (plansContainer.scrollLeft >= maxScroll - 10) {
            nextBtn.disabled = true;
        } else {
            nextBtn.disabled = false;
        }
    }

    // Função para navegar para o próximo plano
    function scrollNext() {
        const maxScroll = plansContainer.scrollWidth - plansContainer.clientWidth;
        const nextScroll = Math.min(plansContainer.scrollLeft + cardWidth, maxScroll);

        plansContainer.scrollTo({
            left: nextScroll,
            behavior: 'smooth'
        });
    }

    // Função para navegar para o plano anterior
    function scrollPrev() {
        const prevScroll = Math.max(plansContainer.scrollLeft - cardWidth, 0);

        plansContainer.scrollTo({
            left: prevScroll,
            behavior: 'smooth'
        });
    }

    // Event listeners para as setas
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', scrollNext);
        prevBtn.addEventListener('click', scrollPrev);
    }

    // Atualizar botões quando o scroll mudar
    if (plansContainer) {
        plansContainer.addEventListener('scroll', updateButtons);

        // Habilitar scroll com mouse drag
        let isDown = false;
        let startX;
        let scrollLeft;

        plansContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            plansContainer.classList.add('active');
            startX = e.pageX - plansContainer.offsetLeft;
            scrollLeft = plansContainer.scrollLeft;
            // Prevenir seleção de texto durante o drag
            e.preventDefault();
        });

        plansContainer.addEventListener('mouseleave', () => {
            isDown = false;
            plansContainer.classList.remove('active');
        });

        plansContainer.addEventListener('mouseup', () => {
            isDown = false;
            plansContainer.classList.remove('active');
        });

        plansContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - plansContainer.offsetLeft;
            const walk = (x - startX) * 2; // Velocidade do scroll
            plansContainer.scrollLeft = scrollLeft - walk;
        });
    }

    // Scroll automático para o plano Ouro (Mais Popular)
    // setTimeout(() => {
    //     const popularPlan = document.querySelector('.plan-card.popular');
    //     if (popularPlan) {
    //         popularPlan.scrollIntoView({
    //             behavior: 'smooth',
    //             block: 'center',
    //             inline: 'center'
    //         });
    //         // Atualizar botões após o scroll automático
    //         setTimeout(() => {
    //             if (plansContainer) updateButtons();
    //         }, 1000);
    //     }
    // }, 500);

    // Inicializar estado dos botões
    setTimeout(() => {
        if (plansContainer) updateButtons();
    }, 100);

    // Controle dos cards fixos no topo
    const fixedSummary = document.getElementById('fixedPlansSummary');
    const plansSection = document.querySelector('.plans-section');

    if (fixedSummary && plansSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    // Se a seção de planos saiu da tela, mostra os cards fixos
                    fixedSummary.classList.add('visible');
                } else {
                    // Se a seção de planos está visível, esconde os cards fixos
                    fixedSummary.classList.remove('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '-50px 0px 0px 0px'
        });

        observer.observe(plansSection);
    }

    // Navegação do sumário da tabela de recursos
    const summaryLinks = document.querySelectorAll('.summary-link');

    summaryLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const yOffset = -120;
                const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;

                window.scrollTo({
                    top: y,
                    behavior: 'smooth'
                });

                // Atualizar link ativo
                summaryLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Detectar categoria ativa durante o scroll
    const categoryHeaders = document.querySelectorAll('[id^="usuarios"], [id^="atendimento"], [id^="interface"], [id^="vendas"], [id^="notas"], [id^="gestao"], [id^="servicos"], [id^="sistema"]');

    const categoryObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const categoryId = entry.target.id;
                const correspondingLink = document.querySelector(`.summary-link[href="#${categoryId}"]`);

                if (correspondingLink) {
                    summaryLinks.forEach(l => l.classList.remove('active'));
                    correspondingLink.classList.add('active');
                }
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '-100px 0px -50% 0px'
    });

    categoryHeaders.forEach(header => {
        categoryObserver.observe(header);
    });

    // // Smooth scroll para links internos
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         const target = document.querySelector(this.getAttribute('href'));
    //         if (target) {
    //             target.scrollIntoView({
    //                 behavior: 'smooth',
    //                 block: 'start'
    //             });
    //         }
    //     });
    // });

    // Modal removido - links do WhatsApp funcionam diretamente

    // Links do WhatsApp já estão funcionando diretamente no HTML
    // Removido o modal para permitir que os links funcionem normalmente

    // Habilitar scroll horizontal com mouse para a tabela de recursos
    const featuresTableContainer = document.querySelector('.features-table-container');
    if (featuresTableContainer) {
        let isDown = false;
        let startX;
        let scrollLeft;

        featuresTableContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            featuresTableContainer.classList.add('active');
            startX = e.pageX - featuresTableContainer.offsetLeft;
            scrollLeft = featuresTableContainer.scrollLeft;
            e.preventDefault();
        });

        featuresTableContainer.addEventListener('mouseleave', () => {
            isDown = false;
            featuresTableContainer.classList.remove('active');
        });

        featuresTableContainer.addEventListener('mouseup', () => {
            isDown = false;
            featuresTableContainer.classList.remove('active');
        });

        featuresTableContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - featuresTableContainer.offsetLeft;
            const walk = (x - startX) * 2;
            featuresTableContainer.scrollLeft = scrollLeft - walk;
        });
    }

    // Habilitar scroll horizontal com mouse para os cards fixos
    const summaryCardsGrid = document.querySelector('.summary-cards-grid');
    if (summaryCardsGrid) {
        let isDown = false;
        let startX;
        let scrollLeft;

        summaryCardsGrid.addEventListener('mousedown', (e) => {
            isDown = true;
            summaryCardsGrid.classList.add('active');
            startX = e.pageX - summaryCardsGrid.offsetLeft;
            scrollLeft = summaryCardsGrid.scrollLeft;
            e.preventDefault();
        });

        summaryCardsGrid.addEventListener('mouseleave', () => {
            isDown = false;
            summaryCardsGrid.classList.remove('active');
        });

        summaryCardsGrid.addEventListener('mouseup', () => {
            isDown = false;
            summaryCardsGrid.classList.remove('active');
        });

        summaryCardsGrid.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - summaryCardsGrid.offsetLeft;
            const walk = (x - startX) * 2;
            summaryCardsGrid.scrollLeft = scrollLeft - walk;
        });
    }

    // Habilitar scroll vertical com mouse para o menu lateral de recursos
    const featuresSummary = document.querySelector('.features-summary');
    if (featuresSummary) {
        let isDown = false;
        let startY;
        let scrollTop;

        featuresSummary.addEventListener('mousedown', (e) => {
            isDown = true;
            featuresSummary.classList.add('active');
            startY = e.pageY - featuresSummary.offsetTop;
            scrollTop = featuresSummary.scrollTop;
            e.preventDefault(); // evita seleção de texto
        });

        featuresSummary.addEventListener('mouseleave', () => {
            isDown = false;
            featuresSummary.classList.remove('active');
        });

        featuresSummary.addEventListener('mouseup', () => {
            isDown = false;
            featuresSummary.classList.remove('active');
        });

        featuresSummary.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const y = e.pageY - featuresSummary.offsetTop;
            const walk = (y - startY) * 2; // velocidade do scroll
            featuresSummary.scrollTop = scrollTop - walk;
        });
    }



    // Adicionar CSS apenas para funcionalidades necessárias
    const style = document.createElement('style');
    style.textContent = `
        .plans-container.active,
        .features-table-container.active,
        .summary-cards-grid.active,
        .features-summary.active {
            cursor: grabbing;
        }
        
        .plans-container,
        .features-table-container,
        .summary-cards-grid,
        .features-summary {
            cursor: grab;
        }
    `;
    document.head.appendChild(style);

    console.log('JavaScript carregado com sucesso - COM setas e scroll drag!');
});

const button = document.getElementById('toggleButton');
const chevron = document.getElementById('chevron');
const section = document.getElementById('comparisonSection');
let isOpen = false;

button.addEventListener('click', () => {
    isOpen = !isOpen;
    section.style.display = isOpen ? 'block' : 'none';
    chevron.textContent = isOpen ? '▲' : '▼';
});

