import sys, re

with open('web-draft/code.html', 'r', encoding='utf-8') as f:
    html = f.read()

replacements = [
    (r'<span[^>]*>\s*Transforma tu.*?\s*</span>', r'<span data-i18n="hero_tag">Transforma tu relación con el móvil</span>'),
    (r'Recupera tu tiempo,\s*<span', r'<span data-i18n="hero_title_1">Recupera tu tiempo, </span> <span'),
    (r'sin castigos\.\s*</span>', r'<span data-i18n="hero_title_2">sin castigos.</span>'),
    (r'Kairos no te prohíbe.*?\.\s*', r'<span data-i18n="hero_desc">Kairos no te prohíbe usar tu celular, le devuelve su valor. Cada vez que abras una app distractora, deberás "pagar" con un crédito. Una micro-fricción para que dejes de hacer scroll automático y empieces a elegir conscientemente.</span> '),
    (r'Descubre cómo funciona\s*</span>', r'<span data-i18n="hero_btn_how">Descubre cómo funciona</span>'),
    (r'<h2 class="text-4xl font-extrabold text-primary mb-4">\s*Diseñado para tu bienestar\s*</h2>', r'<h2 class="text-4xl font-extrabold text-primary mb-4" data-i18n="feat_title">Diseñado para tu bienestar</h2>'),
    (r'<p class="text-xl text-dark-navy/60 font-medium max-w-2xl mx-auto">\s*Herramientas premium que no se sienten como una restricción, sino como un aliado\.\s*</p>', r'<p class="text-xl text-dark-navy/60 font-medium max-w-2xl mx-auto" data-i18n="feat_subtitle">Herramientas premium que no se sienten como una restricción, sino como un aliado.</p>'),
    (r'<h3 class="text-2xl font-bold text-primary mb-4">\s*Fricción Consciente\s*</h3>', r'<h3 class="text-2xl font-bold text-primary mb-4" data-i18n="feat_1_title">Fricción Consciente</h3>'),
    (r'<p class="text-dark-navy/70 leading-relaxed">\s*Interrupciones estratégicas que te hacen pensar antes de actuar\. Rompe el ciclo del scroll\s*automático\.\s*</p>', r'<p class="text-dark-navy/70 leading-relaxed" data-i18n="feat_1_desc">Interrupciones estratégicas que te hacen pensar antes de actuar. Rompe el ciclo del scroll automático.</p>'),
    (r'<h3 class="text-2xl font-bold text-primary mb-4">\s*Presupuesto de Ocio\s*</h3>', r'<h3 class="text-2xl font-bold text-primary mb-4" data-i18n="feat_2_title">Presupuesto de Ocio</h3>'),
    (r'<p class="text-dark-navy/70 leading-relaxed">\s*Recibes 2 créditos gratis al día\. Si.*?\.\s*</p>', r'<p class="text-dark-navy/70 leading-relaxed" data-i18n="feat_2_desc">Recibes 2 créditos gratis al día. Perder el tiempo pasa a ser un lujo, no un acto reflejo.</p>'),
    (r'<h3 class="text-2xl font-bold text-primary mb-4">\s*Autocontrol\s*</h3>', r'<h3 class="text-2xl font-bold text-primary mb-4" data-i18n="feat_3_title">Autocontrol</h3>'),
    (r'<p class="text-dark-navy/70 leading-relaxed">\s*Define tus propios límites sin sentirte castigado\. La tecnología debe servirte a ti, no al\s*revés\.\s*</p>', r'<p class="text-dark-navy/70 leading-relaxed" data-i18n="feat_3_desc">Define tus propios límites sin sentirte castigado. La tecnología debe servirte a ti.</p>'),
    (r'<h2 class="text-4xl font-extrabold text-primary">\s*¿Por qué recreos de 15 minutos\?\s*</h2>', r'<h2 class="text-4xl font-extrabold text-primary" data-i18n="sci_title">¿Por qué recreos de 15 minutos?</h2>'),
    (r'No es un número al azar\. Está diseñado según cómo funciona tu cerebro, basándonos en los\s*<span', r'<span data-i18n="sci_subtitle">No es un número al azar. Está diseñado según cómo funciona tu cerebro, basándonos en los </span><span'),
    (r'<span\s*class="text-accent-orange font-bold px-1 bg-accent-orange/10 rounded">\s*Ritmos Ultradianos\s*</span>', r'<span class="text-accent-orange font-bold px-1 bg-accent-orange/10 rounded" data-i18n="sci_highlight">Ritmos Ultradianos</span>'),
    (r'<p class="font-extrabold text-primary">\s*Respeta tu biología\s*</p>', r'<p class="font-extrabold text-primary" data-i18n="sci_1_title">Respeta tu biología</p>'),
    (r'<p class="font-extrabold text-primary">\s*Restaura la atención\s*</p>', r'<p class="font-extrabold text-primary" data-i18n="sci_2_title">Restaura la atención</p>'),
    (r'<p class="font-extrabold text-primary">\s*Límite al Scroll Infinito\s*</p>', r'<p class="font-extrabold text-primary" data-i18n="sci_3_title">Límite al Scroll Infinito</p>'),
    (r'El cerebro funciona en ciclos de energía de aprox\. 90\s*minutos y exige un descanso vital para recargar neurotransmisores\.', r'<span data-i18n="sci_1_desc">El cerebro funciona en ciclos de energía de aprox. 90 minutos y exige un descanso vital para recargar neurotransmisores.</span>'),
    (r'Las [\"\']micro-pausas[\"\'] cronometradas previenen la fatiga de\s*decisión, manteniendo tu rendimiento alto todo el día\.', r'<span data-i18n="sci_2_desc">Las "micro-pausas" cronometradas previenen la fatiga de decisión, manteniendo tu rendimiento alto todo el día.</span>'),
    (r'15 minutos es el [\"\']punto dulce[\"\']: suficiente para\s*revisar, pero corto para no caer en el agujero pasivo de la dopamina\.', r'<span data-i18n="sci_3_desc">15 minutos es el "punto dulce": suficiente para revisar, pero corto para no caer en el agujero pasivo de la dopamina.</span>'),
    (r'<h2 class="text-4xl font-extrabold text-primary">\s*Lo que dicen nuestros usuarios\s*</h2>', r'<h2 class="text-4xl font-extrabold text-primary" data-i18n="tst_title">Lo que dicen nuestros usuarios</h2>'),
    (r'<p class="text-dark-navy/60 font-medium max-w-2xl mx-auto">\s*Experiencias reales de personas que\s*recuperaron el control de su tiempo\.\s*</p>', r'<p class="text-dark-navy/60 font-medium max-w-2xl mx-auto" data-i18n="tst_subtitle">Experiencias reales de personas que recuperaron el control de su tiempo.</p>'),
    (r'“Mi productividad se fue para arriba\. Venía jugando un juego varias horas\s*por día y con Kairos perdí el interés\. Ahora estoy concentrado en mis próximos\s*pasos y trabajando en lo que realmente importa\.”', r'<span data-i18n="tst_1">“Mi productividad se fue para arriba. Venía jugando un juego varias horas por día y con Kairos perdí el interés. Ahora estoy concentrado en mis próximos pasos.”</span>'),
    (r'<p class="text-dark-navy/50 text-xs">\s*Emprendedor tech\s*</p>', r'<p class="text-dark-navy/50 text-xs" data-i18n="tst_1_role">Emprendedor tech</p>'),
    (r'“Recuperé horas para practicar bajo y estudiar teoría musical\. Con el\s*tiempo que me sobra estuve a full con videos de teoría para realmente dominar\s*el instrumento\. Kairos me devolvió mis hobbies\.”', r'<span data-i18n="tst_2">“Recuperé horas para practicar bajo y estudiar teoría musical. Con el tiempo que me sobra estuve a full. Kairos me devolvió mis hobbies.”</span>'),
    (r'<p class="text-dark-navy/50 text-xs">\s*Músico &amp; freelancer\s*</p>', r'<p class="text-dark-navy/50 text-xs" data-i18n="tst_2_role">Músico &amp; freelancer</p>'),
    (r'“La duración de los recreos es excelente\. Una muy buena dosis de redes\s*bien aprovechada\. Calculo estar viendo una hora al día, bastante menos que\s*antes\. Y no extraño para nada\. Punto extra para la batería de mi\s*teléfono\.”', r'<span data-i18n="tst_3">“La duración de los recreos es excelente. Una muy buena dosis de redes bien aprovechada. Y no extraño para nada. Punto extra para la batería de mi teléfono.”</span>'),
    (r'<p class="text-dark-navy/50 text-xs\">\s*Profesional independiente\s*</p>', r'<p class="text-dark-navy/50 text-xs" data-i18n="tst_3_role">Profesional independiente</p>'),
    (r'<h2 class="text-4xl font-extrabold mb-6 relative z-10\">\s*¿Listo para recuperar tu vida\?\s*</h2>', r'<h2 class="text-4xl font-extrabold mb-6 relative z-10" data-i18n="cta_title">¿Listo para recuperar tu vida?</h2>'),
    (r'<p class="text-xl text-white/80 mb-10 max-w-xl mx-auto relative z-10\">\s*Descarga la app y da el primer paso\s*hacia una relación saludable con tu tecnología\.\s*</p>', r'<p class="text-xl text-white/80 mb-10 max-w-xl mx-auto relative z-10" data-i18n="cta_subtitle">Descarga la app y da el primer paso hacia una relación saludable con tu tecnología.</p>'),
    (r'Instalar Kairos \(Gratis\)', r'<span data-i18n="cta_btn">Instalar Kairos (Gratis)</span>'),
    (r'Rediseñamos el futuro del bienestar digital a través de la psicología aplicada y el diseño\s*consciente\.', r'<span data-i18n="ft_desc">Rediseñamos el futuro del bienestar digital a través de la psicología aplicada y el diseño consciente.</span>'),
    (r'<h4 class="font-bold text-lg mb-6\">\s*Contacto\s*</h4>', r'<h4 class="font-bold text-lg mb-6" data-i18n="ft_contact">Contacto</h4>'),
    (r'<h4 class="font-bold text-lg mb-6\">\s*Empresa\s*</h4>', r'<h4 class="font-bold text-lg mb-6" data-i18n="ft_company">Empresa</h4>'),
    (r'<a class="hover:text-white transition-colors" href="#">\s*Privacidad\s*</a>', r'<a class="hover:text-white transition-colors" href="#" data-i18n="ft_privacy">Privacidad</a>'),
    (r'<a class="hover:text-white transition-colors" href="#">\s*Términos\s*</a>', r'<a class="hover:text-white transition-colors" href="#" data-i18n="ft_terms">Términos</a>'),
    (r'<p>\s*© 2026 Kairos App\. Todos los derechos reservados\.\s*</p>', r'<p data-i18n="ft_rights">© 2026 Kairos App. Todos los derechos reservados.</p>'),
    (r'</body>', r'<script src="translate.js"></script>\n</body>')
]

count = 0
for pattern, replacement in replacements:
    old_html = html
    html = re.sub(pattern, replacement, html)
    if html != old_html:
        count += 1
    else:
        print(f"Failed to match: {pattern[:50]}...")

with open('web-draft/code.html', 'w', encoding='utf-8') as f:
    f.write(html)

print(f"Replaced {count} instances.")
