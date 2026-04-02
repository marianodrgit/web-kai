const fs = require('fs');

let html = fs.readFileSync('web-draft/code.html', 'utf8');

const replacements = [
    [/<span[^>]*>\s*Transforma tu.*?\s*<\/span>/, '<span data-i18n="hero_tag">Transforma tu relación con el móvil</span>'],
    [/Recupera tu tiempo,\s*<span/, '<span data-i18n="hero_title_1">Recupera tu tiempo, </span><span'],
    [/sin castigos\.\s*<\/span>/, '<span data-i18n="hero_title_2">sin castigos.</span>'],
    [/Kairos no te prohíbe[\s\S]*?\.\s*/, '<span data-i18n="hero_desc">Kairos no te prohíbe usar tu celular, le devuelve su valor. Cada vez que abras una app distractora, deberás "pagar" con un crédito. Una micro-fricción para que dejes de hacer scroll automático y empieces a elegir conscientemente.</span> '],
    [/Descubre cómo funciona\s*<\/button>/, '<span data-i18n="hero_btn_how">Descubre cómo funciona</span></button>'],
    [/<h2 class="text-4xl font-extrabold text-primary mb-4">\s*Diseñado para tu bienestar\s*<\/h2>/, '<h2 class="text-4xl font-extrabold text-primary mb-4" data-i18n="feat_title">Diseñado para tu bienestar</h2>'],
    [/<p class="text-xl text-dark-navy\/60 font-medium max-w-2xl mx-auto">\s*Herramientas premium que no se sienten como una restricción, sino como un aliado\.\s*<\/p>/, '<p class="text-xl text-dark-navy/60 font-medium max-w-2xl mx-auto" data-i18n="feat_subtitle">Herramientas premium que no se sienten como una restricción, sino como un aliado.</p>'],
    [/<h3 class="text-2xl font-bold text-primary mb-4">\s*Fricción Consciente\s*<\/h3>/, '<h3 class="text-2xl font-bold text-primary mb-4" data-i18n="feat_1_title">Fricción Consciente</h3>'],
    [/<p class="text-dark-navy\/70 leading-relaxed\">\s*Interrupciones estratégicas que te hacen pensar antes de actuar\. Rompe el ciclo del scroll\s*automático\.\s*<\/p>/, '<p class="text-dark-navy/70 leading-relaxed" data-i18n="feat_1_desc">Interrupciones estratégicas que te hacen pensar antes de actuar. Rompe el ciclo del scroll automático.</p>'],
    [/<h3 class="text-2xl font-bold text-primary mb-4\">\s*Presupuesto de Ocio\s*<\/h3>/, '<h3 class="text-2xl font-bold text-primary mb-4" data-i18n="feat_2_title">Presupuesto de Ocio</h3>'],
    [/<p class="text-dark-navy\/70 leading-relaxed\">\s*Recibes 2 créditos gratis al día\. Si[\s\S]*?\.\s*<\/p>/, '<p class="text-dark-navy/70 leading-relaxed" data-i18n="feat_2_desc">Recibes 2 créditos gratis al día. Perder el tiempo pasa a ser un lujo, no un acto reflejo.</p>'],
    [/<h3 class="text-2xl font-bold text-primary mb-4\">\s*Autocontrol\s*<\/h3>/, '<h3 class="text-2xl font-bold text-primary mb-4" data-i18n="feat_3_title">Autocontrol</h3>'],
    [/<p class="text-dark-navy\/70 leading-relaxed\">\s*Define tus propios límites sin sentirte castigado\. La tecnología debe servirte a ti, no al\s*revés\.\s*<\/p>/, '<p class="text-dark-navy/70 leading-relaxed" data-i18n="feat_3_desc">Define tus propios límites sin sentirte castigado. La tecnología debe servirte a ti.</p>'],
    [/<h2 class="text-4xl font-extrabold text-primary\">\s*¿Por qué recreos de 15 minutos\?\s*<\/h2>/, '<h2 class="text-4xl font-extrabold text-primary" data-i18n="sci_title">¿Por qué recreos de 15 minutos?</h2>'],
    [/No es un número al azar\. Está diseñado según cómo funciona tu cerebro, basándonos en los\s*<span/, '<span data-i18n="sci_subtitle">No es un número al azar. Está diseñado según cómo funciona tu cerebro, basándonos en los </span><span'],
    [/<span\s*class="text-accent-orange font-bold px-1 bg-accent-orange\/10 rounded\">\s*Ritmos Ultradianos\s*<\/span>/, '<span class="text-accent-orange font-bold px-1 bg-accent-orange/10 rounded" data-i18n="sci_highlight">Ritmos Ultradianos</span>'],
    [/<p class="font-extrabold text-primary\">\s*Respeta tu biología\s*<\/p>/, '<p class="font-extrabold text-primary" data-i18n="sci_1_title">Respeta tu biología</p>'],
    [/<p class="font-extrabold text-primary\">\s*Restaura la atención\s*<\/p>/, '<p class="font-extrabold text-primary" data-i18n="sci_2_title">Restaura la atención</p>'],
    [/<p class="font-extrabold text-primary\">\s*Límite al Scroll Infinito\s*<\/p>/, '<p class="font-extrabold text-primary" data-i18n="sci_3_title">Límite al Scroll Infinito</p>'],
    [/El cerebro funciona en ciclos de energía de aprox\. 90\s*minutos y exige un descanso vital para recargar neurotransmisores\./, '<span data-i18n="sci_1_desc">El cerebro funciona en ciclos de energía de aprox. 90 minutos y exige un descanso vital para recargar neurotransmisores.</span>'],
    [/Las ["']micro-pausas["'] cronometradas previenen la fatiga de\s*decisión, manteniendo tu rendimiento alto todo el día\./, '<span data-i18n="sci_2_desc">Las "micro-pausas" cronometradas previenen la fatiga de decisión, manteniendo tu rendimiento alto todo el día.</span>'],
    [/15 minutos es el ["']punto dulce["']: suficiente para\s*revisar, pero corto para no caer en el agujero pasivo de la dopamina\./, '<span data-i18n="sci_3_desc">15 minutos es el "punto dulce": suficiente para revisar, pero corto para no caer en el agujero pasivo de la dopamina.</span>'],
    [/<h2 class="text-4xl font-extrabold text-primary\">\s*Lo que dicen nuestros usuarios\s*<\/h2>/, '<h2 class="text-4xl font-extrabold text-primary" data-i18n="tst_title">Lo que dicen nuestros usuarios</h2>'],
    [/<p class="text-dark-navy\/60 font-medium max-w-2xl mx-auto">\s*Experiencias reales de personas que\s*recuperaron el control de su tiempo\.\s*<\/p>/, '<p class="text-dark-navy/60 font-medium max-w-2xl mx-auto" data-i18n="tst_subtitle">Experiencias reales de personas que recuperaron el control de su tiempo.</p>'],
    [/“Mi productividad se fue para arriba\. Venía jugando un juego varias horas\s*por día y con Kairos perdí el interés\. Ahora estoy concentrado en mis próximos\s*pasos y trabajando en lo que realmente importa\.”/, '<span data-i18n="tst_1">“Mi productividad se fue para arriba. Venía jugando un juego varias horas por día y con Kairos perdí el interés. Ahora estoy concentrado en mis próximos pasos.”</span>'],
    [/<p class="text-dark-navy\/50 text-xs">\s*Emprendedor tech\s*<\/p>/, '<p class="text-dark-navy/50 text-xs" data-i18n="tst_1_role">Emprendedor tech</p>'],
    [/“Recuperé horas para practicar bajo y estudiar teoría musical\. Con el\s*tiempo que me sobra estuve a full con videos de teoría para realmente dominar\s*el instrumento\. Kairos me devolvió mis hobbies\.”/, '<span data-i18n="tst_2">“Recuperé horas para practicar bajo y estudiar teoría musical. Con el tiempo que me sobra estuve a full. Kairos me devolvió mis hobbies.”</span>'],
    [/<p class="text-dark-navy\/50 text-xs">\s*Músico &amp; freelancer\s*<\/p>/, '<p class="text-dark-navy/50 text-xs" data-i18n="tst_2_role">Músico &amp; freelancer</p>'],
    [/“La duración de los recreos es excelente\. Una muy buena dosis de redes\s*bien aprovechada\. Calculo estar viendo una hora al día, bastante menos que\s*antes\. Y no extraño para nada\. Punto extra para la batería de mi\s*teléfono\.”/, '<span data-i18n="tst_3">“La duración de los recreos es excelente. Una muy buena dosis de redes bien aprovechada. Y no extraño para nada. Punto extra para la batería de mi teléfono.”</span>'],
    [/<p class="text-dark-navy\/50 text-xs\">\s*Profesional independiente\s*<\/p>/, '<p class="text-dark-navy/50 text-xs" data-i18n="tst_3_role">Profesional independiente</p>'],
    [/<h2 class="text-4xl font-extrabold mb-6 relative z-10\">\s*¿Listo para recuperar tu vida\?\s*<\/h2>/, '<h2 class="text-4xl font-extrabold mb-6 relative z-10" data-i18n="cta_title">¿Listo para recuperar tu vida?</h2>'],
    [/<p class="text-xl text-white\/80 mb-10 max-w-xl mx-auto relative z-10\">\s*Descarga la app y da el primer paso\s*hacia una relación saludable con tu tecnología\.\s*<\/p>/, '<p class="text-xl text-white/80 mb-10 max-w-xl mx-auto relative z-10" data-i18n="cta_subtitle">Descarga la app y da el primer paso hacia una relación saludable con tu tecnología.</p>'],
    [/Instalar Kairos \(Gratis\)/, '<span data-i18n="cta_btn">Instalar Kairos (Gratis)</span>'],
    [/Rediseñamos el futuro del bienestar digital a través de la psicología aplicada y el diseño\s*consciente\./, '<span data-i18n="ft_desc">Rediseñamos el futuro del bienestar digital a través de la psicología aplicada y el diseño consciente.</span>'],
    [/<h4 class="font-bold text-lg mb-6\">\s*Contacto\s*<\/h4>/, '<h4 class="font-bold text-lg mb-6" data-i18n="ft_contact">Contacto</h4>'],
    [/<h4 class="font-bold text-lg mb-6\">\s*Empresa\s*<\/h4>/, '<h4 class="font-bold text-lg mb-6" data-i18n="ft_company">Empresa</h4>'],
    [/<a class="hover:text-white transition-colors" href="#">\s*Privacidad\s*<\/a>/, '<a class="hover:text-white transition-colors" href="#" data-i18n="ft_privacy">Privacidad</a>'],
    [/<a class="hover:text-white transition-colors" href="#">\s*Términos\s*<\/a>/, '<a class="hover:text-white transition-colors" href="#" data-i18n="ft_terms">Términos</a>'],
    [/<p>\s*© 2026 Kairos App\. Todos los derechos reservados\.\s*<\/p>/, '<p data-i18n="ft_rights">© 2026 Kairos App. Todos los derechos reservados.</p>'],
    [/<\/body>/, '<script src="translate.js"></script>\n</body>']
];

let count = 0;
for (const [pattern, replacement] of replacements) {
    if (pattern.test(html)) {
        html = html.replace(pattern, replacement);
        count++;
    } else {
        console.log("Failed to match: " + pattern.toString());
    }
}

fs.writeFileSync('web-draft/code.html', html, 'utf8');
console.log(`Replaced ${count} instances.`);
