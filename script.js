document.addEventListener('DOMContentLoaded', () => {

    // =============================================
    //  TRANSLATIONS
    // =============================================
    const translations = {
        en: {
            features_link: "Features",
            screenshots_link: "Screenshots",
            devices_link: "Devices",
            main_title: "Project Lain",
            subtitle_phrases: [
                "Optimal experience and performance for S20FE Qualcomm",
                "Project Lain Sakana — Lain 6.1 (Android 14)",
                "Project Lain Velvet — Lain 7 (Android 15)",
                "Project Lain Aquiles/Retriever — Lain 8 (Android 16)",
                "Raw performance. Disabled Samsung bloat."
            ],
            hero_badge: "Project Lain — Built for S20FE Qualcomm",
            stat_vip: "Donators",
            stat_devices: "Supported Devices",
            stat_features: "Active Features",
            stat_base: "One UI Base",
            vip_promo_title: "Become a <span class='gold'>Donator</span> — Support Development",
            vip_promo_desc: "Support the project and help maintain development, unlocking early testing builds and direct feedback channels.",
            vip_pill_1: "🚀 Beta Builds",
            vip_pill_2: "⚡ Instant Updates",
            vip_pill_3: "💬 Priority Support",
            vip_pill_4: "🗳️ Vote on Features",
            vip_pill_5: "🏆 Donator Rank",
            vip_plans_btn: "See Donator Tiers — from $2",
            join_community_btn: "Join Community",
            download_button: "View Devices",
            telegram_button: "Telegram",
            donations_button: "Donations",
            about_title: "What is Project Lain?",
            what_is_custom_rom: "A custom ROM based on Samsung One UI is a modified version of the official software. It retains the core look and feel of One UI but strips out the unnecessary system bloat while adding performance enhancements that aren't available on the standard firmware.",
            what_is_elite_ui: "Project Lain is a work in progress custom firmware for Galaxy devices focused on raw performance and everything with disabled Samsung shit.",
            features_title: "Changelog & Features",
            // --- DETAILED FEATURES ---
            feature1_title: "S23+ Port Base",
            feature1_desc: "Rebuilt entirely on the latest Galaxy S23+ firmware port for ultimate efficiency and modern system stability.",
            feature2_title: "Visuals & Display",
            feature2_desc: "Includes stock Galaxy S25 system wallpapers, native extra brightness support, and completely enabled adaptive refresh rate control.",
            feature3_title: "Hardware & Kernel Tuning",
            feature3_desc: "Updated vendor blobs directly from a73xqxx, fixed system overheating loops, and upgraded core underpinnings to the latest Ryzen LTS kernel.",
            feature4_title: "Surgical Debloat & AI Slop Removal",
            feature4_desc: "Lain's aggressive surgical debloat process applied. Nuked Galaxy AI slop and disabled heavy background framework features entirely.",
            feature5_title: "Advanced Media & Pro Camera",
            feature5_desc: "Full Samsung stock Camera app implementation coupled with the completely unlocked Photo Editor AI full package suite.",
            feature6_title: "Security, Frameworks & Patches",
            feature6_desc: "Fixed SELinux, VNDK compliance, and FBE v1 file encryption support. Knox Patch, secure flag override, Bluetooth Library Patcher, and Multi-user modes are fully implemented, while ASKS has been completely disabled.",
            screenshots_title: "Screenshots",
            devices_title: "Supported Devices",
            credits: "Lain Contributors: @salvogiangri for UN1CA patches, @ata_kaner for base kernel, @pascua14 for some patches.",
            install_steps_title: "Flashing Guide",
            disclaimer_title: "Disclaimer",
            disclaimer_1: "Your warranty is now void.",
            disclaimer_2: "We are not responsible for bricked devices, dead SD cards, thermonuclear war, or you getting fired because the alarm app failed.",
            disclaimer_3: "Please do some research if you have any concerns about flashing this ROM before flashing it!",
            disclaimer_4: "YOU are choosing to make these modifications, and if you point the finger at us for messing up your device, we will laugh at you. HARD!",
            bootloader_title: "Unlocking the Bootloader",
            bootloader_step1: "Navigate to Settings and switch on Developer Options.",
            bootloader_step2: "Establish a wired connection between your phone and PC.",
            bootloader_step3: "Press down and hold both Volume Up and Volume Down keys simultaneously.",
            bootloader_step4: "Long-press the Volume Up key to redirect into the official Bootloader Unlock Environment.",
            bootloader_step5: "Confirm your selection with Volume Up to complete the unlock cycle.",
            rom_install_title: "ROM Flashing Procedure",
            rom_install_step1: "Verify that your phone is matching the absolute latest Stock firmware iteration via SamFW.",
            rom_install_step2: "Double-check that OEM Bootloader Unlock status is confirmed active.",
            rom_install_step3: "Grab the correct matching OFOX/TWRP custom recovery container along with VBmeta.img.",
            rom_install_step4: "Boot the target Samsung device cleanly into Download Mode.",
            rom_install_step5: "Drop the recovery TAR file directly into the AP slot in Odin, making sure to disable 'Auto Reboot' under options.",
            rom_install_step6: "Trigger a manual system hard reset by holding down Power + Volume Down together.",
            rom_install_step7: "Jump straight into recovery mode, navigate to the Wipe menu, select Advanced Wipe, and clear out the active system partitions.",
            rom_install_step8: "Initialize custom ADB Sideload status from within the recovery interface.",
            rom_install_step9: "Push the main ROM image package directly over from your computer command prompt line:",
            rom_install_step10: "Crucial step: execute a complete Format Data task to handle file system encryption cleanups before boot.",
            rom_install_step11: "Fire up the system reboot task and experience the clean environment!",
            changelog_title: "Changelog",
            view_changelog_button: "View Full Changelog →",
            join_vip_button: "⭐ Support Project",
            vip_link: "Donators",
            vip_exclusive: "S20FE — Donator Exclusive",
            get_vip_access: "Become a Supporter",
            // --- DONATOR PAGE ---
            vip_hero_badge: "Project Support Structure",
            vip_hero_title: "Join the <span class='gold'>Donator</span> Community",
            vip_hero_desc: "Support Project Lain development and get access to early experimental testing builds, priority issue analysis, and a voice in feature priorities.",
            vip_hero_btn: "⭐ See Tiers from $2",
            vip_benefits_title: "What You Get",
            vip_benefit1_title: "Experimental Builds",
            vip_benefit1_desc: "Access early test builds and cutting-edge performance configurations before the public release.",
            vip_benefit2_title: "Instant Updates",
            vip_benefit2_desc: "Get the latest ROM revisions and hotfixes the moment they compile.",
            vip_benefit3_title: "Priority Feedback",
            vip_benefit3_desc: "Direct communication channels. Your device logs and issues are evaluated first.",
            vip_benefit4_title: "Development Polls",
            vip_benefit4_desc: "A direct vote in the future direction and feature integrations of Project Lain.",
            vip_benefit5_title: "Telegram Donator Rank",
            vip_benefit5_desc: "Exclusive donor status badge displayed in the official Telegram support channels.",
            vip_benefit6_title: "Keep Development Alive",
            vip_benefit6_desc: "This is a voluntary contribution that directly ensures Project Lain stays active and updated.",
            vip_disc1: "This is a voluntary contribution to support open-source development. Refunds are not applicable.",
            vip_disc2: "Access is managed via a private Telegram structure. You must provide your handle.",
            vip_disc3: "We reserve the right to restrict access for disruptive behavior or redistribution of closed test builds.",
            vip_plans_section_title: "Choose a Contribution Tier",
            vip_plans_section_desc: "Select a level that matches how much you want to support our infrastructure. ($2 USD worldwide / 8 BRL for Brazil)",
            vip_plan1_name: "1 Month Tier",
            vip_plan1_desc: "Great for testing out early infrastructure perks.",
            vip_plan2_badge: "🔥 Best Support",
            vip_plan2_name: "Full Term",
            vip_plan2_desc: "The ultimate way to back Project Lain and secure long-term updates.",
            vip_plan3_name: "3 Month Tier",
            vip_plan3_desc: "Extended support duration with continuous build access.",
            vip_plan4_name: "Lifetime Supporter",
            vip_plan4_desc: "Contribute once, back us forever. Your status as a key supporter never expires.",
            vip_payment_title: "Choose your donation method:",
            vip_payment_note: "<strong>IMPORTANT:</strong> After donating, send verification proof + your selected tier details on Telegram to be registered as an active project supporter."
        },
        es: {
            features_link: "Características",
            screenshots_link: "Capturas",
            devices_link: "Dispositivos",
            main_title: "Project Lain",
            subtitle_phrases: [
                "Experiencia y rendimiento óptimos para S20FE Qualcomm",
                "Project Lain Sakana — Lain 6.1 (Android 14)",
                "Project Lain Velvet — Lain 7 (Android 15)",
                "Project Lain Aquiles/Retriever — Lain 8 (Android 16)",
                "Rendimiento puro. Sin basura de Samsung."
            ],
            hero_badge: "Project Lain — Creado para S20FE Qualcomm",
            stat_vip: "Donadores",
            stat_devices: "Dispositivos Soportados",
            stat_features: "Funciones Activas",
            stat_base: "Base One UI",
            vip_promo_title: "Hazte <span class='gold'>Donador</span> — Apoya el Desarrollo",
            vip_promo_desc: "Apoya el proyecto para mantener el desarrollo activo y desbloquea versiones de prueba anticipadas.",
            vip_pill_1: "🚀 Builds Beta",
            vip_pill_2: "⚡ Actualizaciones Rápidas",
            vip_pill_3: "💬 Soporte Prioritario",
            vip_pill_4: "🗳️ Votar Funciones",
            vip_pill_5: "🏆 Rango Donador",
            vip_plans_btn: "Ver Niveles de Donación — desde $2",
            join_community_btn: "Unirse a la Comunidad",
            download_button: "Ver Dispositivos",
            telegram_button: "Telegram",
            donations_button: "Donaciones",
            about_title: "¿Qué es Project Lain?",
            what_is_custom_rom: "Una ROM personalizada basada en Samsung One UI es una versión modificada del software oficial. Conserva el aspecto central de One UI pero elimina la basura del sistema agregando mejoras de rendimiento.",
            what_is_elite_ui: "Project Lain es un firmware personalizado en desarrollo para dispositivos Galaxy, enfocado en rendimiento puro y con toda la basura de Samsung desactivada.",
            features_title: "Registro de Cambios y Funciones",
            feature1_title: "Base Port S23+",
            feature1_desc: "Reconstruído por completo sobre la base del firmware port del Galaxy S23+ para máxima eficiencia y estabilidad moderna.",
            feature2_title: "Visuales y Pantalla",
            feature2_desc: "Incluye fondos de pantalla del Galaxy S25, soporte nativo de brillo extra y tasa de refresco adaptativa habilitada.",
            feature3_title: "Optimización de Kernel y Hardware",
            feature3_desc: "Blobs de vendor actualizados desde a73xqxx, bucles de sobrecalentamiento solucionados y base del sistema actualizada al último kernel Ryzen LTS.",
            feature4_title: "Debloat Quirúrgico y Sin Basura de IA",
            feature4_desc: "Debloat quirúrgico agresivo de Lain. Se eliminó toda la basura de Galaxy AI y se desactivaron por completo las funciones pesadas en segundo plano.",
            feature5_title: "Multimedia y Cámara Pro",
            feature5_desc: "Cámara stock completa de Samsung emparejada con la suite completa desbloqueada de Photo Editor AI.",
            feature6_title: "Seguridad, Frameworks y Parches",
            feature6_desc: "Solucionado SELinux, VNDK y soporte FBE v1. Knox Patch, bypass de secure flag, BT Library Patcher y Multi-usuario incluidos, con ASKS totalmente desactivado.",
            screenshots_title: "Capturas de Pantalla",
            devices_title: "Dispositivos Soportados",
            credits: "Lain Contributors: @salvogiangri por parches UN1CA, @ata_kaner por kernel base, @pascua14 por algunos parches.",
            install_steps_title: "Guía de Instalación",
            disclaimer_title: "Descargo de Responsabilidad",
            disclaimer_1: "Tu garantía queda anulada.",
            disclaimer_2: "No nos hacemos responsables por dispositivos brickeados, tarjetas SD dañadas o si te despiden porque la alarma falló.",
            disclaimer_3: "¡Por favor investiga antes de flashear esta ROM!",
            disclaimer_4: "TÚ estás eligiendo hacer estas modificaciones. Si nos culpas, nos reiremos. ¡MUY FUERTE!",
            bootloader_title: "Desbloquear el Bootloader",
            bootloader_step1: "Ve a Configuración y activa las Opciones de Desarrollador.",
            bootloader_step2: "Conecta firmemente el teléfono a la PC mediante cable USB.",
            bootloader_step3: "Mantén presionados los botones de Subir Volumen y Bajar Volumen al mismo tiempo.",
            bootloader_step4: "Mantén presionado Subir Volumen para entrar al Modo de Desbloqueo oficial.",
            bootloader_step5: "Confirma el desbloqueo presionando una vez el botón de Subir Volumen.",
            rom_install_title: "Procedimiento de Flasheo de la ROM",
            rom_install_step1: "Verifica que el firmware de stock de tu teléfono sea el más reciente en SamFW.",
            rom_install_step2: "Asegúrate de que el estado de desbloqueo de OEM esté confirmado en el sistema.",
            rom_install_step3: "Descarga la versión correcta de OFOX/TWRP junto con VBmeta.img.",
            rom_install_step4: "Reinicia el dispositivo Samsung directamente en Modo Download.",
            rom_install_step5: "Carga el archivo TAR de la recovery en la casilla AP de Odin, y desmarca la opción 'Auto Reboot'.",
            rom_install_step6: "Fuerza un reinicio manual manteniendo presionados los botones de Encendido + Bajar Volumen.",
            rom_install_step7: "Entra a recovery, ve al menú Wipe, selecciona Advanced Wipe y limpia las particiones del sistema.",
            rom_install_step8: "Activa la función ADB Sideload dentro de la interfaz de la recovery.",
            rom_install_step9: "Envía el paquete de la ROM desde la terminal de comandos de tu computadora:",
            rom_install_step10: "Paso crucial: realiza un 'Format Data' completo para limpiar los sistemas de archivos cifrados antes del inicio.",
            rom_install_step11: "Reinicia el dispositivo para disfrutar de un sistema limpio y veloz.",
            changelog_title: "Lista de Cambios",
            view_changelog_button: "Ver Lista de Cambios Completa →",
            join_vip_button: "⭐ Apoyar Proyecto",
            vip_link: "Donadores",
            vip_exclusive: "S20FE — Exclusivo Donadores",
            get_vip_access: "Hacerse Colaborador",
            vip_hero_badge: "Estructura de Apoyo",
            vip_hero_title: "Únete a la Comunidad de <span class='gold'>Donadores</span>",
            vip_hero_desc: "Apoya el desarrollo de Project Lain y obtén acceso exclusivo a compilaciones de prueba, soporte prioritario y voto en el proyecto.",
            vip_hero_btn: "⭐ Ver Niveles desde $2",
            vip_benefits_title: "Lo que Obtienes",
            vip_benefit1_title: "Builds de Prueba Exclusivas",
            vip_benefit1_desc: "Accede a builds experimentales y funciones de vanguardia antes del lanzamiento público.",
            vip_benefit2_title: "Actualizaciones Instantáneas",
            vip_benefit2_desc: "Obtén las últimas versiones de la ROM en el momento en que se compilan.",
            vip_benefit3_title: "Soporte Prioritario",
            vip_benefit3_desc: "Atención directa de los desarrolladores. Tus logs se revisan primero.",
            vip_benefit4_title: "Votación de Funciones",
            vip_benefit4_desc: "Voz y voto en la dirección futura de las funciones de Project Lain.",
            vip_benefit5_title: "Rango Donador en Telegram",
            vip_benefit5_desc: "Rango exclusivo de donador mostrado en los canales de soporte de Telegram.",
            vip_benefit6_title: "Mantén el Desarrollo Vivo",
            vip_benefit6_desc: "Esta es una contribución voluntaria que mantiene a Project Lain activo y creciendo.",
            vip_disc1: "Esta es una contribución voluntaria para apoyar el desarrollo de código abierto. No hay reembolsos.",
            vip_disc2: "El acceso se gestiona mediante Telegram. Debes proporcionar tu usuario.",
            vip_disc3: "Nos reservamos el derecho de revocar el acceso por mal comportamiento o filtración de archivos de prueba.",
            vip_plans_section_title: "Elige tu Nivel de Contribución",
            vip_plans_section_desc: "Selecciona el nivel que mejor se adapte a cómo deseas apoyar nuestra infraestructura. ($2 USD internacional / 8 BRL para Brasil)",
            vip_plan1_name: "Nivel 1 Mes",
            vip_plan1_desc: "Perfecto para probar las funciones anticipadas.",
            vip_plan2_badge: "🔥 Mejor Soporte",
            vip_plan2_name: "Soporte Completo",
            vip_plan2_desc: "La mejor manera de respaldar Project Lain a largo plazo.",
            vip_plan3_name: "Nivel 3 Meses",
            vip_plan3_desc: "Gran valor para un acceso continuo a builds experimentales.",
            vip_plan4_name: "Donador Vitalicio",
            vip_plan4_desc: "Paga una vez, apoya siempre. Tu estado de colaborador nunca vence.",
            vip_payment_title: "Elige tu método de donación:",
            vip_payment_note: "<strong>IMPORTANTE:</strong> Después de donar, envía el comprobante en Telegram para ser registrado como colaborador activo."
        },
        hi: {
            features_link: "विशेषताएँ",
            screenshots_link: "स्क्रीनशॉट",
            devices_link: "डिवाइस",
            main_title: "Project Lain",
            subtitle_phrases: [
                "S20FE Qualcomm के लिए अनुकूलित अनुभव और प्रदर्शन",
                "Project Lain Sakana — Lain 6.1 (Android 14)",
                "Project Lain Velvet — Lain 7 (Android 15)",
                "Project Lain Aquiles/Retriever — Lain 8 (Android 16)",
                "बेहतरीन परफॉर्मेंस। फालतू सैमसंग ब्लोटवेयर बंद।"
            ],
            hero_badge: "Project Lain — S20FE Qualcomm के लिए निर्मित",
            stat_vip: "दानकर्ता (Donators)",
            stat_devices: "समर्थित डिवाइस",
            stat_features: "सक्रिय विशेषताएँ",
            stat_base: "One UI बेस",
            vip_promo_title: "<span class='gold'>दानकर्ता</span> बनें — विकास का समर्थन करें",
            vip_promo_desc: "प्रोजेक्ट का समर्थन करें ताकि डेवलपमेंट जारी रहे और आपको परीक्षण बिल्ड और डायरेक्ट फीडबैक चैनल मिल सकें।",
            vip_pill_1: "🚀 बीटा बिल्ड",
            vip_pill_2: "⚡ त्वरित अपडेट",
            vip_pill_3: "💬 प्राथमिकता समर्थन",
            vip_pill_4: "🗳️ सुविधाओं पर वोट करें",
            vip_pill_5: "🏆 डोनर रैंक",
            vip_plans_btn: "डोनर टियर देखें — $2 से शुरू",
            join_community_btn: "समुदाय से जुड़ें",
            download_button: "डिवाइस देखें",
            telegram_button: "टेलीग्राम",
            donations_button: "दान",
            about_title: "Project Lain क्या है?",
            what_is_custom_rom: "सैमसंग वन यूआई पर आधारित कस्टम रोम आधिकारिक सॉफ़्टवेयर का एक संशोधित संस्करण है। यह वन यूआई के मुख्य रूप को बरकरार रखता है लेकिन सिस्टम के फालतू ब्लोट को हटाकर प्रदर्शन को बढ़ाता है।",
            what_is_elite_ui: "Project Lain गैलेक्सी उपकरणों के लिए एक निर्माणाधीन (work in progress) कस्टम फ़र्मवेयर है जो शुद्ध परफॉर्मेंस पर केंद्रित है और जिसमें सारा फालतू सैमसंग कचरा डिसेबल कर दिया गया है।",
            features_title: "चेंजलॉग और विशेषताएँ",
            feature1_title: "S23+ पोर्ट बेस",
            feature1_desc: "बेहतरीन दक्षता और मॉडर्न सिस्टम स्थिरता के लिए पूरी तरह से नवीनतम गैलेक्सी S23+ फ़र्मवेयर पोर्ट पर निर्मित।",
            feature2_title: "विजुअल्स और डिस्प्ले",
            feature2_desc: "स्टॉक गैलेक्सी S25 सिस्टम वॉलपेपर, नेटिव एक्स्ट्रा ब्राइटनेस सपोर्ट और एडाप्टिव रिफ्रेश रेट कंट्रोल पूरी तरह से सक्षम।",
            feature3_title: "हार्डवेयर और कर्नेल ट्यूनिंग",
            feature3_desc: "a73xqxx से अपडेटेड वेंडर ब्लॉब्स, सिस्टम ओवरहीटिंग की समस्या का पूर्ण समाधान और कोर आर्किटेक्चर नवीनतम Ryzen LTS कर्नेल पर अपग्रेड।",
            feature4_title: "सर्जिकल डिब्लोट और AI स्लोप रिमूवल",
            feature4_desc: "Lain का आक्रामक सर्जिकल डिब्लोट। गैलेक्सी AI स्लोप को पूरी तरह हटा दिया गया है और बैकग्राउंड की भारी हैवी सुविधाओं को पूरी तरह से बंद कर दिया गया है।",
            feature5_title: "मल्टीमीडिया और प्रो कैमरा",
            feature5_desc: "पूरी तरह से अनलॉक किए गए Photo Editor AI फुल पैकेज सुइट के साथ पूर्ण सैमसंग स्टॉक कैमरा ऐप इम्प्लीमेंटेशन।",
            feature6_title: "सुरक्षा, फ्रेमवर्क और पैच",
            feature6_desc: "SELinux, VNDK और FBE v1 फ़ाइल एन्क्रिप्शन फिक्स। Knox Patch, secure flag बाईपास, BT Library Patcher और मल्टी-यूज़र शामिल, तथा ASKS पूरी तरह से डिसेबल।",
            screenshots_title: "स्क्रीनशॉट",
            devices_title: "समर्थित डिवाइस",
            credits: "Lain Contributors: UN1CA पैच के लिए @salvogiangri, बेस कर्नेल के लिए @ata_kaner, कुछ पैच के लिए @pascua14।",
            install_steps_title: "फ्लैशिंग गाइड",
            disclaimer_title: "अस्वीकरण (Disclaimer)",
            disclaimer_1: "आपकी वारंटी अब शून्य हो गई है।",
            disclaimer_2: "हम ईंट (bricked) हुए उपकरणों, डेड एसडी कार्ड, या अलार्म ऐप के विफल होने के कारण आपकी नौकरी जाने के लिए ज़िम्मेदार नहीं हैं।",
            disclaimer_3: "कृपया इस रोम को फ्लैश करने से पहले शोध करें यदि आपको कोई चिंता है!",
            disclaimer_4: "आप इन संशोधनों को करने का विकल्प चुन रहे हैं, और यदि आप अपने डिवाइस को खराब करने के लिए हम पर उंगली उठाते हैं, तो हम हंसेंगे। बहुत ज़ोर से!",
            bootloader_title: "बूटलोडर अनलॉक करना",
            bootloader_step1: "सेटिंग्स में जाएं और डेवलपर विकल्प (Developer Options) को इनेबल करें।",
            bootloader_step2: "यूएसबी केबल के जरिए फोन को पीसी से मजबूती से कनेक्ट करें।",
            bootloader_step3: "वॉल्यूम अप (Volume Up) और वॉल्यूम डाउन (Volume Down) दोनों बटनों को एक साथ दबाकर रखें।",
            bootloader_step4: "ऑफिशियल बूटलोडर अनलॉक एनवायरनमेंट में जाने के लिए वॉल्यूम अप बटन को देर तक दबाएं।",
            bootloader_step5: "अनलॉक प्रक्रिया को पूरा करने के लिए वॉल्यूम अप बटन दबाकर कन्फर्म करें।",
            rom_install_title: "रोम फ्लैश करने की विधि",
            rom_install_step1: "सुनिश्चित करें कि आपका फोन SamFW के जरिए नवीनतम स्टॉक फर्मवेयर वर्जन से मैच कर रहा है।",
            rom_install_step2: "कन्फर्म करें कि आपका OEM बूटलोडर अनलॉक स्टेटस एक्टिव है।",
            rom_install_step3: "सही मैचिंग OFOX/TWRP कस्टम रिकवरी और VBmeta.img डाउनलोड करें।",
            rom_install_step4: "सैमसंग डिवाइस को क्लीन तरीके से डाउनलोड मोड (Download Mode) में बूट करें।",
            rom_install_step5: "रिकवरी TAR फ़ाइल को Odin के AP स्लॉट में लोड करें, और ऑप्शन्स में 'Auto Reboot' को अनटिक करना न भूलें।",
            rom_install_step6: "पावर + वॉल्यूम डाउन बटन को एक साथ दबाकर मैन्युअल रूप से हार्ड रीसेट ट्रिगर करें।",
            rom_install_step7: "सीधे रिकवरी मोड में जाएं, वाइप मेनू चुनें, एडवांस वाइप पर क्लिक करें और सिस्टम पार्टीशन्स को क्लीन करें।",
            rom_install_step8: "रिकवरी इंटरफेस के भीतर कस्टम ADB Sideload मोड को चालू करें।",
            rom_install_step9: "कंप्यूटर के कमांड प्रॉम्प्ट से सीधे रोम पैकेज को पुश (Sideload) करें:",
            rom_install_step10: "महत्वपूर्ण चरण: बूट करने से पहले एन्क्रिप्टेड फ़ाइल सिस्टम को साफ करने के लिए 'Format Data' टास्क को रन करें।",
            rom_install_step11: "सिस्टम रीबूट प्रक्रिया शुरू करें और बिल्कुल क्लीन एनवायरनमेंट का आनंद लें!",
            changelog_title: "चेंजलॉग",
            view_changelog_button: "पूरा चेंजलॉग देखें →",
            join_vip_button: "⭐ प्रोजेक्ट का समर्थन करें",
            vip_link: "दानकर्ता",
            vip_exclusive: "S20FE — डोनर एक्सक्लूसिव",
            get_vip_access: "प्रोजेक्ट समर्थक बनें",
            vip_hero_badge: "प्रोजेक्ट सपोर्ट स्ट्रक्चर",
            vip_hero_title: "<span class='gold'>दानकर्ता</span> समुदाय से जुड़ें",
            vip_hero_desc: "Project Lain के विकास का समर्थन करें और नए प्रयोगात्मक परीक्षण बिल्ड, प्राथमिकता सहायता और प्रोजेक्ट निर्णयों में वोट प्राप्त करें।",
            vip_hero_btn: "⭐ $2 से शुरू होने वाले टियर देखें",
            vip_benefits_title: "आपको क्या मिलता है",
            vip_benefit1_title: "प्रायोगिक टेस्ट बिल्ड",
            vip_benefit1_desc: "सार्वजनिक रिलीज से पहले नए टेस्ट बिल्ड और अत्याधुनिक सुविधाओं तक पहुंचें।",
            vip_benefit2_title: "त्वरित अपडेट",
            vip_benefit2_desc: "बिना किसी प्रतीक्षा के, कंपाइल होते ही नए रोम संस्करण प्राप्त करें।",
            vip_benefit3_title: "प्राथमिकता प्रतिक्रिया",
            vip_benefit3_desc: "डेवलपर्स से सीधा संपर्क। आपके डिवाइस लॉग्स पहले जांचे जाते हैं।",
            vip_benefit4_title: "विकास पर मतदान",
            vip_benefit4_desc: "Project Lain की सुविधाओं की भविष्य की दिशा में एक आवाज और वोट।",
            vip_benefit5_title: "टेलीग्राम डोनर रैंक",
            vip_benefit5_desc: "आधिकारिक टेलीग्राम चैनलों में विशेष डोनर रैंक बैज प्रदर्शित।",
            vip_benefit6_title: "विकास जारी रखें",
            vip_benefit6_desc: "यह एक स्वैच्छिक योगदान है जो Project Lain को जीवित और सक्रिय रखता है।",
            vip_disc1: "यह ओपन-सोर्स विकास का समर्थन करने के लिए एक स्वैच्छिक योगदान है। रिफंड लागू नहीं हैं।",
            vip_disc2: "एक्सेस टेलीग्राम के माध्यम से प्रबंधित किया जाता है। आपको अपना यूजरनेम देना होगा।",
            vip_disc3: "गलत व्यवहार या टेस्ट फ़ाइलों को लीक करने पर हम एक्सेस हटाने का अधिकार सुरक्षित रखते हैं।",
            vip_plans_section_title: "अपना योगदान स्तर चुनें",
            vip_plans_section_desc: "वह स्तर चुनें जो हमारे इंफ्रास्ट्रक्चर का समर्थन करने के लिए आपके अनुकूल हो। (पूरी दुनिया के लिए $2 USD / ब्राजील के लिए 8 BRL)",
            vip_plan1_name: "1 महीना टियर",
            vip_plan1_desc: "शुरुआती फीचर्स को आजमाने के लिए बिल्कुल सही।",
            vip_plan2_badge: "🔥 सर्वश्रेष्ठ समर्थन",
            vip_plan2_name: "पूर्ण अवधि",
            vip_plan2_desc: "दीर्घकालिक रूप से Project Lain का समर्थन करने का सबसे अच्छा तरीका।",
            vip_plan3_name: "3 महीने टियर",
            vip_plan3_desc: "प्रायोगिक बिल्ड तक निरंतर पहुंच के लिए बढ़िया मूल्य।",
            vip_plan4_name: "आजीवन समर्थक",
            vip_plan4_desc: "एक बार योगदान करें, हमेशा समर्थन करें। आपकी समर्थक स्थिति कभी समाप्त नहीं होती।",
            vip_payment_title: "अपनी दान विधि चुनें:",
            vip_payment_note: "<strong>महत्वपूर्ण:</strong> दान के बाद, सक्रिय समर्थक के रूप में जुड़ने के लिए टेलीग्राम पर प्रमाण भेजें।"
        },
        pt: {
            features_link: "Recursos",
            screenshots_link: "Capturas",
            devices_link: "Dispositivos",
            main_title: "Project Lain",
            subtitle_phrases: [
                "Experiência e desempenho ideais para o S20FE Qualcomm",
                "Project Lain Sakana — Lain 6.1 (Android 14)",
                "Project Lain Velvet — Lain 7 (Android 15)",
                "Project Lain Aquiles/Retriever — Lain 8 (Android 16)",
                "Desempenho bruto. Sem lixo da Samsung."
            ],
            hero_badge: "Project Lain — Feito para S20FE Qualcomm",
            stat_vip: "Doadores",
            stat_devices: "Dispositivos Suportados",
            stat_features: "Recursos Ativos",
            stat_base: "Base One UI",
            vip_promo_title: "Seja um <span class='gold'>Doador</span> — Apoie o Desenvolvimento",
            vip_promo_desc: "Apoie o projeto para manter o desenvolvimento ativo e tenha acesso a builds experimentais de teste e canais de feedback.",
            vip_pill_1: "🚀 Builds Beta",
            vip_pill_2: "⚡ Atualizações Rápidas",
            vip_pill_3: "💬 Suporte Prioritário",
            vip_pill_4: "🗳️ Votar em Recursos",
            vip_pill_5: "🏆 Rank de Doador",
            vip_plans_btn: "Ver Níveis de Doação — a partir de R$ 8",
            join_community_btn: "Entrar na Comunidade",
            download_button: "Ver Dispositivos",
            telegram_button: "Telegram",
            donations_button: "Doações",
            about_title: "O que é o Project Lain?",
            what_is_custom_rom: "Uma ROM customizada baseada na Samsung One UI é uma versão modificada do software oficial. Ela mantém o visual principal da One UI, mas remove o lixo do sistema adicionando melhorias de performance.",
            what_is_elite_ui: "O Project Lain é um firmware customizado atualmente em desenvolvimento para dispositivos Galaxy, focado em desempenho bruto e com toda a porcaria da Samsung desativada.",
            features_title: "Registro de Alterações e Recursos",
            feature1_title: "Base Port S23+",
            feature1_desc: "Reconstruído inteiramente com base no port de firmware mais recente do Galaxy S23+ para máxima eficiência e estabilidade moderna.",
            feature2_title: "Visuais e Tela",
            feature2_desc: "Inclui papéis de parede originais do Galaxy S25, suporte nativo a brilho extra e taxa de atualização adaptativa totalmente ativada.",
            feature3_title: "Ajustes de Kernel e Hardware",
            feature3_desc: "Blobs de vendor atualizados a partir do a73xqxx, loops de superaquecimento do sistema corrigidos e base atualizada para o kernel Ryzen LTS mais recente.",
            feature4_title: "Debloat Cirúrgico e Sem Lixo de IA",
            feature4_desc: "Processo de debloat cirúrgico agressivo do Lain aplicado. Removeu todo o lixo do Galaxy AI e desativou recursos pesados de segundo plano.",
            feature5_title: "Multimídia e Câmera Pro",
            feature5_desc: "Aplicativo de câmera stock completo da Samsung pareado com a suíte Photo Editor AI completa desbloqueada.",
            feature6_title: "Segurança, Frameworks e Patches",
            feature6_desc: "SELinux, VNDK e suporte FBE v1 corrigidos. Knox Patch, bypass de secure flag, BT Library Patcher e Multi-usuário inclusos, com ASKS totalmente desativado.",
            screenshots_title: "Capturas de Tela",
            devices_title: "Dispositivos Suportados",
            credits: "Lain Contributors: @salvogiangri por patches UN1CA, @ata_kaner por kernel base, @pascua14 por alguns patches.",
            install_steps_title: "Guia de Instalação",
            disclaimer_title: "Aviso Legal",
            disclaimer_1: "Sua garantia agora é nula.",
            disclaimer_2: "Não nos responsabilizamos por dispositivos brickados, cartões SD mortos ou se você for demitido porque o alarme falhou.",
            disclaimer_3: "Por favor, pesquise antes se tiver alguma dúvida sobre como instalar esta ROM!",
            disclaimer_4: "VOCÊ está escolhendo fazer essas modificações e, se apontar o dedo para nós por bagunçar seu dispositivo, nós vamos rir de você. MUITO!",
            bootloader_title: "Desbloqueando o Bootloader",
            bootloader_step1: "Abra as Configurações e ative as Opções de Desenvolvedor.",
            bootloader_step2: "Conecte o smartphone firmemente ao computador via cabo USB.",
            bootloader_step3: "Pressione e segure os botões de Aumentar Volume e Diminuir Volume juntos.",
            bootloader_step4: "Pressione e segure o botão de Aumentar Volume para entrar no ambiente oficial de Desbloqueio.",
            bootloader_step5: "Confirme o desbloqueio pressionando o botão de Aumentar Volume uma vez.",
            rom_install_title: "Procedimento de Instalação da ROM",
            rom_install_step1: "Certifique-se de que seu telefone possui o firmware Stock mais recente através do SamFW.",
            rom_install_step2: "Confirme se o status de desbloqueio do OEM está ativo no sistema.",
            rom_install_step3: "Baixe a versão correta do OFOX/TWRP e o arquivo VBmeta.img.",
            rom_install_step4: "Inicie o dispositivo Samsung diretamente no Modo Download.",
            rom_install_step5: "Carregue o arquivo TAR da recovery no slot AP do Odin, certificando-se de desmarcar 'Auto Reboot' nas opções.",
            rom_install_step6: "Force uma reinicialização manual segurando os botões de Liga/Desliga + Diminuir Volume.",
            rom_install_step7: "Entre na recovery, vá até o menu Wipe, selecionando Advanced Wipe e limpe as partições do sistema.",
            rom_install_step8: "Ative a função ADB Sideload dentro della interface da custom recovery.",
            rom_install_step9: "Envie o pacote da ROM a partir do prompt de comando do seu computador:",
            rom_install_step10: "Passo vital: execute a tarefa 'Format Data' para limpar os sistemas de arquivos criptografados antes de iniciar.",
            rom_install_step11: "Reinicie o dispositivo e aproveite um sistema totalmente limpo e otimizado!",
            changelog_title: "Registro de Alterações",
            view_changelog_button: "Ver Registro Completo →",
            join_vip_button: "⭐ Apoiar Projeto",
            vip_link: "Doadores",
            vip_exclusive: "S20FE — Exclusivo Doadores",
            get_vip_access: "Tornar-se Apoiador",
            vip_hero_badge: "Estrutura de Apoio",
            vip_hero_title: "Junte-se à Comunidade de <span class='gold'>Doadores</span>",
            vip_hero_desc: "Apoie o desenvolvimento do Project Lain e tenha acesso exclusivo a builds experimentais de teste, suporte a problemas e votos no projeto.",
            vip_hero_btn: "⭐ Ver Níveis a partir de R$ 8",
            vip_benefits_title: "O que Você Ganha",
            vip_benefit1_title: "Builds de Teste Exclusivas",
            vip_benefit1_desc: "Acesse builds experimentais e recursos de ponta antes do lançamento público.",
            vip_benefit2_title: "Atualizações Rápidas",
            vip_benefit2_desc: "Obtenha as últimas versões da ROM no momento exato em que são compiladas.",
            vip_benefit3_title: "Suporte Prioritário",
            vip_benefit3_desc: "Atenção direta dos desenvolvedores. Seus logs de erro são analisados primeiro.",
            vip_benefit4_title: "Votação de Recursos",
            vip_benefit4_desc: "Voz e voto no direcionamento futuro dos recursos do Project Lain.",
            vip_benefit5_title: "Rank de Doador no Telegram",
            vip_benefit5_desc: "Rank exclusivo de doador exibido nos canais de suporte do Telegram.",
            vip_benefit6_title: "Apoio ao Desenvolvimento",
            vip_benefit6_desc: "Esta é uma contribuição voluntária que mantém o Project Lain vivo e crescendo.",
            vip_disc1: "Esta é uma contribuição voluntária para apoiar o desenvolvimento open-source. Não há reembolsos.",
            vip_disc2: "O acesso é gerenciado via Telegram. Você deve fornecer seu nome de usuário.",
            vip_disc3: "Reservamo-nos o direito de revogar o acesso por comportamento inadequado ou vazamento de arquivos experimentais.",
            vip_plans_section_title: "Escolha seu Nível de Contribuição",
            vip_plans_section_desc: "Selecione o nível de assinatura que melhor se adapta a como você quer apoiar nossa infraestrutura. (R$ 8 BRL para brasileiros / $2 USD internacional)",
            vip_plan1_name: "Nível 1 Mês",
            vip_plan1_desc: "Perfeito para experimentar os benefícios de acesso antecipado.",
            vip_plan2_badge: "🔥 Melhor Suporte",
            vip_plan2_name: "Suporte Total",
            vip_plan2_desc: "A experiência definitiva de apoiar o Project Lain com o melhor valor a longo prazo.",
            vip_plan3_name: "Nível 3 Meses",
            vip_plan3_desc: "Ótimo custo-benefício para acesso contínuo a builds de teste.",
            vip_plan4_name: "Doador Vitalício",
            vip_plan4_desc: "Contribua uma vez, apoie para sempre. Seu status de apoiador chave nunca expira.",
            vip_payment_title: "Escolha sua forma de pagamento:",
            vip_payment_note: "<strong>IMPORTANTE:</strong> Após doar, envie o comprovante no Telegram para ser adicionado como apoiador ativo."
        }
    };

    let currentLanguage = 'en';
    let typewriterTimeout; 

    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[lang]?.[key]) {
                el.innerHTML = translations[lang][key]; 
            }
        });
        initTypewriter();
    };

    // =============================================
    //  CUSTOM LANGUAGE DROPDOWN LOGIC
    // =============================================
    const langMenuBtn = document.getElementById('lang-menu-btn');
    const langDropdown = document.getElementById('lang-dropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    const currentLangText = document.querySelector('.current-lang');

    if (langMenuBtn && langDropdown) {
        langMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('show');
            langMenuBtn.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!langDropdown.contains(e.target) && e.target !== langMenuBtn) {
                langDropdown.classList.remove('show');
                langMenuBtn.classList.remove('active');
            }
        });

        langOptions.forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.getAttribute('data-value');
                
                langOptions.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                
                if(currentLangText) currentLangText.textContent = lang.toUpperCase();
                
                langDropdown.classList.remove('show');
                langMenuBtn.classList.remove('active');
                
                currentLanguage = lang;
                setLanguage(currentLanguage);
            });
        });
    }

    // =============================================
    //  TYPEWRITER ANIMATION
    // =============================================
    const initTypewriter = () => {
        const subtitleEl = document.getElementById('hero-subtitle');
        if (!subtitleEl) return;
        
        clearTimeout(typewriterTimeout); 
        
        const phrases = translations[currentLanguage].subtitle_phrases;
        let phraseIdx = 0;
        let charIdx = 0;
        let deleting = false;

        subtitleEl.innerHTML = '<span class="typed-cursor"></span>';

        const type = () => {
            const currentPhrase = phrases[phraseIdx];
            const cursor = '<span class="typed-cursor"></span>';

            if (!deleting) {
                charIdx++;
                subtitleEl.innerHTML = currentPhrase.substring(0, charIdx) + cursor;
                if (charIdx === currentPhrase.length) {
                    deleting = true;
                    typewriterTimeout = setTimeout(type, 2200);
                    return;
                }
                typewriterTimeout = setTimeout(type, 42);
            } else {
                charIdx--;
                subtitleEl.innerHTML = currentPhrase.substring(0, charIdx) + cursor;
                if (charIdx === 0) {
                    deleting = false;
                    phraseIdx = (phraseIdx + 1) % phrases.length;
                    typewriterTimeout = setTimeout(type, 400);
                    return;
                }
                typewriterTimeout = setTimeout(type, 20);
            }
        };

        typewriterTimeout = setTimeout(type, 800);
    };

    setLanguage(currentLanguage);

    // =============================================
    //  HAMBURGER MENU LOGIC
    // =============================================
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileOverlay = document.getElementById('mobile-overlay');

    const closeMobileMenu = () => {
        hamburgerBtn && hamburgerBtn.classList.remove('open');
        mobileMenu && mobileMenu.classList.remove('active');
        mobileOverlay && mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.contains('active');
            if (isOpen) {
                closeMobileMenu();
            } else {
                hamburgerBtn.classList.add('open');
                mobileMenu.classList.add('active');
                mobileOverlay && mobileOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
            if (langDropdown && langDropdown.classList.contains('show')) {
                langDropdown.classList.remove('show');
                langMenuBtn.classList.remove('active');
            }
        });

        if (mobileOverlay) {
            mobileOverlay.addEventListener('click', closeMobileMenu);
        }

        document.querySelectorAll('#mobile-menu a').forEach(item => {
            item.addEventListener('click', () => {
                if (window.innerWidth <= 768) closeMobileMenu();
            });
        });
    }

    // =============================================
    //  BACK TO TOP
    // =============================================
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            backToTopBtn.classList.toggle('visible', window.scrollY > 400);
        }, { passive: true });
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // =============================================
    //  SMART STICKY HEADER (SCROLL-UP REVEAL)
    // =============================================
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;

    if (navbar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            navbar.classList.toggle('scrolled', scrollTop > 50);

            if (scrollTop > lastScrollTop && scrollTop > navbar.offsetHeight + 20) {
                navbar.classList.add('nav-hidden');
                if (window.innerWidth <= 768 && mobileMenu && mobileMenu.classList.contains('active')) {
                    hamburgerBtn.classList.remove('open');
                    mobileMenu.classList.remove('active');
                }
                if (langDropdown && langDropdown.classList.contains('show')) {
                    langDropdown.classList.remove('show');
                    langMenuBtn.classList.remove('active');
                }
            } else if (scrollTop < lastScrollTop) {
                navbar.classList.remove('nav-hidden');
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }, { passive: true });
    }

    // =============================================
    //  SCROLL PROGRESS
    // =============================================
    const progressBar = document.getElementById('scroll-progress');
    if (progressBar) {
        let isTicking = false;
        const updateProgress = () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) : 0;
            progressBar.style.transform = `scaleX(${pct})`;
            isTicking = false;
        };

        window.addEventListener('scroll', () => {
            if (!isTicking) {
                window.requestAnimationFrame(updateProgress);
                isTicking = true;
            }
        }, { passive: true });
    }

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // =============================================
    //  STATS COUNTER
    // =============================================
    const counters = document.querySelectorAll('.stat-number');
    if (counters.length > 0) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const duration = 2100;
                    if (el.hasAttribute('data-versions')) {
                        const versions = el.getAttribute('data-versions').split(',');
                        let startTime = null;

                        const updateVersions = (timestamp) => {
                            if (!startTime) startTime = timestamp;
                            const progress = timestamp - startTime;
                            const percentage = Math.min(progress / duration, 1);
                            const index = Math.floor(percentage * (versions.length - 1));
                            el.textContent = versions[index];

                            if (progress < duration) {
                                requestAnimationFrame(updateVersions);
                            } else {
                                el.textContent = versions[versions.length - 1];
                            }
                        };
                        requestAnimationFrame(updateVersions);
                        counterObserver.unobserve(el);
                    }
                    else if (el.hasAttribute('data-count')) {
                        const suffix = el.getAttribute('data-suffix') || '';
                        el._statSuffix = suffix;
                        el._statObserved = true;

                        if (el._statRaf) { cancelAnimationFrame(el._statRaf); el._statRaf = null; }

                        const startTime = performance.now();

                        const tick = (now) => {
                            const progress = Math.min((now - startTime) / duration, 1);
                            const ease = 1 - Math.pow(1 - progress, 3);
                            const liveTarget = parseInt(el.getAttribute('data-count'), 10) || 0;
                            el.textContent = Math.round(liveTarget * ease) + suffix;
                            if (progress < 1) {
                                el._statRaf = requestAnimationFrame(tick);
                            } else {
                                el.textContent = liveTarget + suffix;
                                el._statRaf = null;
                            }
                        };
                        el._statRaf = requestAnimationFrame(tick);
                        counterObserver.unobserve(el);
                    }
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(c => counterObserver.observe(c));
    }

    // =============================================
    //  CAROUSEL LOGIC
    // =============================================
    function setupCarousel(carouselContainer) {
        const grid = carouselContainer.querySelector('.features-grid, .screenshots-grid, .screenshots-grid-desktop');
        const prevBtn = carouselContainer.querySelector('.prev, .features-prev, .desktop-prev');
        const nextBtn = carouselContainer.querySelector('.next, .features-next, .desktop-next');
        const items = grid ? grid.querySelectorAll('.feature-card, .screenshot-item') : [];

        if (!grid || !prevBtn || !nextBtn || items.length === 0) return;

        let currentIndex = 0;
        let itemsInView = 1;

        function updateItemsInView() {
            if (window.innerWidth > 768) {
                itemsInView = carouselContainer.matches('.carousel-container-desktop, .carousel-container-features') ? 3 : 1;
            } else {
                itemsInView = 1;
            }
        }

        function updateCarousel() {
            const totalItems = items.length;
            if (currentIndex > (totalItems - itemsInView)) currentIndex = 0;
            if (currentIndex < 0) currentIndex = totalItems - itemsInView;

            let itemWidthPercentage = 100 / itemsInView;
            if (window.innerWidth <= 768 && carouselContainer.matches('.carousel-container-features')) {
                itemWidthPercentage = 100;
            }

            grid.style.transform = `translateX(${-currentIndex * itemWidthPercentage}%)`;
        }

        nextBtn.addEventListener('click', () => { currentIndex++; updateCarousel(); });
        prevBtn.addEventListener('click', () => { currentIndex--; updateCarousel(); });
        window.addEventListener('resize', () => { updateItemsInView(); updateCarousel(); });

        updateItemsInView();
        updateCarousel();
    }

    document.querySelectorAll('.carousel-container-features, .carousel-container-desktop, .carousel-container').forEach(c => {
        if (c) setupCarousel(c);
    });

    // =============================================
    //  TOUCH SWIPE FOR CAROUSELS
    // =============================================
    document.querySelectorAll('.carousel-container-features, .carousel-container-desktop, .carousel-container').forEach(container => {
        let touchStartX = 0;
        let touchEndX = 0;
        const MIN_SWIPE = 40;

        container.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].clientX;
        }, { passive: true });

        container.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].clientX;
            const delta = touchStartX - touchEndX;
            if (Math.abs(delta) < MIN_SWIPE) return;
            const nextBtn = container.querySelector('.next, .features-next, .desktop-next');
            const prevBtn = container.querySelector('.prev, .features-prev, .desktop-prev');
            if (delta > 0) nextBtn && nextBtn.click();
            else prevBtn && prevBtn.click();
        }, { passive: true });
    });

});

// =============================================
//  HASH SCROLL FIX
// =============================================
window.addEventListener('load', () => {
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    if (!target) return;
    setTimeout(() => {
        const navbar = document.getElementById('navbar');
        const offset = navbar ? navbar.offsetHeight : 80;
        const y = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: 'instant' });
    }, 50);
});

querySelector('.prev, .features-prev, .desktop-prev');
            if (delta > 0) nextBtn && nextBtn.click();
            else prevBtn && prevBtn.click();
        }, { passive: true });
    });

    // =============================================
    //  VIP FILTERS
    // =============================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.getAttribute('data-filter');
                const cards = document.querySelectorAll('.vip-card');

                cards.forEach(card => {
                    const isVipPlus = card.classList.contains('vip-plus');
                    const isExpired = card.classList.contains('is-expired');

                    let show = false;
                    if (filter === 'all') show = true;
                    else if (filter === 'vip-plus') show = isVipPlus;
                    else if (filter === 'active') show = !isExpired;

                    card.style.display = show ? 'flex' : 'none';
                });
            });
        });
    }

});
// =============================================
//  HASH SCROLL FIX
//  The browser scrolls to the anchor before images load,
//  so the position ends up wrong once the page fully renders.
//  Re-scroll after window.load to land in the right spot.
// =============================================
window.addEventListener('load', () => {
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    if (!target) return;
    setTimeout(() => {
        const navbar = document.getElementById('navbar');
        const offset = navbar ? navbar.offsetHeight : 80;
        const y = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: 'instant' });
    }, 50);
});
