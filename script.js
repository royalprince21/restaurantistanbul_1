/**
 * Restaurant Istanbul — Dreux
 * Interactive JavaScript Engine
 * Language switching (FR/EN), Dynamic 7-category Menu with Order Now Modal,
 * Accessible Reservation System, Photo Gallery Lightbox, Modals, and Navigation interactions.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. Translation Dictionaries (Bilingual Engine)
  // ==========================================================================
  const translations = {
    fr: {
      meta: {
        title: "Restaurant Istanbul Dreux | Cuisine turque, grecque et méditerranéenne",
        description: "Découvrez Restaurant Istanbul à Dreux : kebabs artisanaux, grillades au feu de braise, assiettes complètes, spécialités méditerranéennes au 3 rue Saint-Thibault, 28100 Dreux. Tél : 02 37 55 85 97."
      },
      nav: {
        subtitle: "Cuisine Turque · Dreux",
        home: "Accueil",
        cuisine: "Notre cuisine",
        menu: "Menu",
        heritage: "Saveurs & Héritage",
        gallery: "Galerie",
        reservation: "Réservation",
        contact: "Contact",
        findUs: "Nous trouver",
        bookTable: "Réserver une table",
        phoneCall: "02 37 55 85 97",
        openHoursBadge: "7j/7 · 11:00 – 01:00"
      },
      hero: {
        eyebrow: "DREUX · CUISINE TURQUE, GRECQUE & MÉDITERRANÉENNE",
        heading: "Un voyage de saveurs.<br>Au cœur de Dreux.",
        description: "« Des grillades généreuses aux incontournables de la cuisine turque et méditerranéenne, découvrez une table conviviale inspirée par le goût du partage et l'art des saveurs authentiques. »",
        btnMenu: "Découvrir la carte",
        btnBook: "Réserver une table",
        btnOrder: "Commander maintenant",
        address: "3 rue Saint-Thibault · 28100 Dreux",
        phone: "02 37 55 85 97",
        tag: "Fait maison & Viandes grillées",
        caption: "Ouvert 7j/7 de 11:00 à 01:00 · Sur place & à emporter.",
        hoursPill: "Ouvert 7j/7 : 11h – 01h"
      },
      intro: {
        label: "LE PLAISIR DE PARTAGER GÉNÉREUSEMENT",
        heading: "L'esprit d'Istanbul : Célébrer les saveurs turques, grecques et méditerranéennes.",
        description: "« Au carrefour de l’Orient et de la Méditerranée, Istanbul est depuis toujours le symbole d'une table ouverte, vibrante et généreuse. Chez Restaurant Istanbul à Dreux, nous vous invitons à redécouvrir et célébrer les grands classiques des cuisines turque, grecque et méditerranéenne : viandes marinées avec patience, grillades dorées sur le feu, pains frais pétris avec soin, herbes aromatiques et mezzés parfumés. Ici, chaque plat est pensé pour célébrer l'abondance, le plaisir des saveurs authentiques et par-dessus tout, la joie incomparable de partager un festin chaleureux en famille et entre amis. »",
        badgeText: "Saveurs Méditerranéennes",
        feat1Title: "Saveurs Authentiques",
        feat1Desc: "Marinades équilibrées aux herbes sauvages, huile d'olive vierge et épices nobles d'Anatolie.",
        feat2Title: "Portions Généreuses",
        feat2Desc: "Assiettes abondantes garnies de boulgour parfumé, riz doré, frites croustillantes et crudités fraîches.",
        feat3Title: "Sur Place & À Emporter",
        feat3Desc: "Dégustez dans une atmosphère chaleureuse au centre de Dreux ou commandez au 02 37 55 85 97.",
        btnExplore: "Explorer notre carte"
      },
      values: {
        item1Title: "Authenticité",
        item1Desc: "Les grands classiques de la cuisine turque et méditerranéenne préparés selon le savoir-faire traditionnel depuis 1992.",
        item2Title: "Générosité",
        item2Desc: "Des spécialités gourmandes et des assiettes copieuses pour profiter pleinement de chaque instant partagé.",
        item3Title: "Hospitalité",
        item3Desc: "Une adresse accueillante au centre-ville de Dreux ouverte 7j/7 jusqu'à 01:00 du matin."
      },
      heritage: {
        eyebrow: "SAVEURS & HÉRITAGE",
        title: "Saveurs & Héritage : L'Art Culinaire Méditerranéen",
        subtitle: "Depuis 1992, Restaurant Istanbul perpétue avec passion l'art de recevoir et la transmission des traditions gastronomiques de Turquie et du bassin méditerranéen.",
        pillar1Title: "Traditions Culinaires",
        pillar1Desc: "Cuisson maîtrisée à la flamme, broche artisanale montée chaque jour et respect rigoureux des gestes ancestraux.",
        pillar2Title: "Hospitalité & Convivialité",
        pillar2Desc: "L'art de recevoir méditerranéen où chaque convive est accueilli avec chaleur, respect et générosité.",
        pillar3Title: "Saveurs Authentiques",
        pillar3Desc: "Épices choisies d'Orient, sumac, origan sauvage, huile d'olive parfumée et viandes de première qualité.",
        pillar4Title: "Héritage — Depuis 1992",
        pillar4Desc: "Plus de trois décennies de fidélité au goût vrai et à la satisfaction de nos fidèles clients à Dreux."
      },
      menu: {
        eyebrow: "LA CARTE DU RESTAURANT",
        title: "Notre carte & nos spécialités",
        subtitle: "Retrouvez tous nos plats préparés à la commande. Viandes sélectionnées, pains cuits et garnitures parfumées.",
        noticeTitle: "Formules & Accompagnements :",
        noticeDesc: "Tous nos Sandwichs en Menu sont servis avec Frites et Boisson 33 cl. Nos Assiettes sont servies avec frites, boulgour, riz et crudités.",
        cat1: "Kebabs & Sandwichs",
        cat2: "Grillades & Spécialités",
        cat3: "Assiettes Complètes",
        cat4: "Lahmacun & Pains Turcs",
        cat5: "Végétarien & Accompagnements",
        cat6: "Boissons Fraîches",
        cat7: "Desserts & Douceurs",
        childTitle: "Offre spéciale — Menu Enfant",
        childDesc: "Sandwich + frite + boisson (uniquement le midi)",
        suppTitle: "Suppléments à la demande",
        suppCheese: "Fromage",
        suppFries: "Frites",
        suppMeat: "Viande",
        suppMixte: "Assiette Mixte (viande supp.)",
        bookCta: "Réserver une table",
        orderNow: "Commander",
        orderModalTitle: "Commander votre plat",
        orderCallBtn: "Appeler pour commander : 02 37 55 85 97",
        orderWaBtn: "Commander par WhatsApp",
        orderNotice: "Commande directe sans frais intermédiaire · Retrait au 3 rue Saint-Thibault, 28100 Dreux.",
        solo: "Seul",
        menuLabel: "Menu",
        portion: "Portion"
      },
      gallery: {
        eyebrow: "IMMERSION CULINAIRE",
        title: "Galerie de nos spécialités",
        subtitle: "Un aperçu en images de nos grillades, assiettes et douceurs traditionnelles. Cliquez sur une photo pour l'agrandir.",
        img1Title: "Grillades Mixtes & Spécialités",
        img2Title: "Kebab Artisanal en Pain Frais",
        img3Title: "Lahmacun Croustillant au Citron",
        img4Title: "Côtelettes d'Agneau Grillées",
        img5Title: "Baklawa Feuilleté aux Pistaches",
        img6Title: "Ambiance Conviviale & Chaleureuse",
        clickZoom: "Cliquer pour agrandir",
        disclaimer: "* Les photographies de présentation illustrent le style de cuisine méditerranéenne et l'esprit culinaire de notre établissement."
      },
      res: {
        eyebrow: "TABLE & CONVIVIALITÉ",
        title: "Réservez votre table",
        subtitle: "Effectuez votre demande de réservation directement en ligne. Notre équipe vous répondra dans les meilleurs délais pour confirmer votre table.",
        confirmationNotice: "Demande de réservation en ligne · Ou par téléphone direct au 02 37 55 85 97.",
        nameLabel: "Nom complet",
        emailLabel: "Adresse email",
        phoneLabel: "Numéro de téléphone",
        guestsLabel: "Nombre de convives",
        guestsSelect: "Sélectionnez le nombre de personnes",
        dateLabel: "Date souhaitée",
        timeLabel: "Heure souhaitée",
        timeSelect: "Sélectionnez un horaire",
        optLunch: "Service du midi (dès 11:00)",
        optDinner: "Service du soir & tardif (jusqu'à 01:00)",
        dietLabel: "Régime ou allergies alimentaires (facultatif)",
        notesLabel: "Demandes particulières (facultatif)",
        consentText: "J'accepte que mes coordonnées soient utilisées uniquement par Restaurant Istanbul dans le cadre de cette demande de réservation.",
        btnSubmit: "Envoyer la demande de réservation",
        btnSubmitting: "Transmission en cours...",
        successTitle: "Demande de réservation reçue avec succès !",
        successLead: "Merci pour votre confiance. Votre demande a bien été enregistrée sous la référence ci-dessous :",
        refLabel: "Numéro de demande :",
        successNotice: "Notre équipe à Dreux vérifiera la disponibilité et prendra contact avec vous par téléphone ou SMS pour confirmer définitivement votre table.",
        btnNew: "Faire une autre demande",
        errors: {
          name: "Veuillez indiquer votre nom complet (au moins 2 caractères).",
          email: "Veuillez saisir une adresse email valide (ex. nom@domaine.com).",
          phone: "Veuillez saisir un numéro de téléphone valide.",
          guests: "Veuillez choisir le nombre de convives.",
          date: "Veuillez sélectionner une date.",
          pastDate: "La date de réservation ne peut pas être antérieure à aujourd'hui.",
          time: "Veuillez choisir une heure de réservation.",
          consent: "Veuillez accepter le traitement de vos coordonnées pour la réservation."
        },
        recap: {
          name: "Nom",
          email: "Email",
          phone: "Téléphone",
          date: "Date",
          time: "Heure",
          guests: "Personnes"
        }
      },
      contact: {
        eyebrow: "NOUS TROUVER & COMMANDER",
        title: "Restaurant Istanbul à Dreux",
        desc: "Situé au cœur de Dreux, notre établissement vous accueille 7 jours sur 7 dans un cadre chaleureux et convivial.",
        addressTitle: "Adresse vérifiée",
        hoursTitle: "Horaires d'ouverture",
        hoursOpen: "Ouvert 7 jours sur 7 · Du Lundi au Dimanche",
        hoursTime: "11:00 – 01:00",
        hoursNextDay: "(Fermeture à 01:00 le lendemain)",
        phoneTitle: "Téléphone & Commandes",
        phoneSub: "Appel direct : 02 37 55 85 97",
        waTitle: "WhatsApp Officiel",
        waSub: "Contactez-nous & commandez directement via WhatsApp",
        servicesTitle: "Services",
        servicesDesc: "Restauration sur place, plats à emporter, commandes téléphoniques, WhatsApp et formules midi.",
        btnDirections: "Itinéraire Google Maps",
        btnCall: "Appeler le restaurant"
      },
      footer: {
        cuisine: "Cuisine Turque & Méditerranéenne · Dreux",
        identity: "Istanbul — Turkish, Greek, and Mediterranean Cuisine — Duru.",
        btnBook: "Réserver une table",
        navTitle: "Navigation",
        infoTitle: "Horaires & Informations",
        infoAddress: "Adresse :",
        hoursLabel: "Ouverture 7j/7 :",
        hoursValue: "11:00 – 01:00 (le lendemain)",
        phoneLabel: "Téléphone direct :",
        connectTitle: "Contact & Réseaux",
        itinerary: "Itinéraire Google Maps →",
        legalTitle: "Transparence & Qualité",
        legalDesc: "Restaurant Istanbul vous propose des spécialités turques, grecques et méditerranéennes préparées dans le respect des traditions.",
        mentions: "Mentions Légales",
        privacy: "Politique de Confidentialité",
        allRights: "Tous droits réservés.",
        credit: "Cuisine turque et méditerranéenne au cœur de Dreux."
      },
      floating: {
        whatsapp: "WhatsApp · 02 37 55 85 97"
      },
      modal: {
        mentionsTitle: "Mentions Légales",
        privacyTitle: "Politique de Confidentialité"
      }
    },

    en: {
      meta: {
        title: "Restaurant Istanbul Dreux | Turkish, Greek & Mediterranean Cuisine",
        description: "Discover Restaurant Istanbul in Dreux: artisanal kebabs, charcoal grilled specialties, full platters and Mediterranean dishes at 3 rue Saint-Thibault, 28100 Dreux. Tel: 02 37 55 85 97."
      },
      nav: {
        subtitle: "Turkish Cuisine · Dreux",
        home: "Home",
        cuisine: "Our Cuisine",
        menu: "Menu",
        heritage: "Flavor & Heritage",
        gallery: "Gallery",
        reservation: "Reservation",
        contact: "Contact",
        findUs: "Find Us",
        bookTable: "Reserve a Table",
        phoneCall: "02 37 55 85 97",
        openHoursBadge: "7 Days · 11:00 – 01:00"
      },
      hero: {
        eyebrow: "DREUX · TURKISH, GREEK & MEDITERRANEAN CUISINE",
        heading: "A culinary journey.<br>In the heart of Dreux.",
        description: "« From generous grilled specialties to the essentials of Turkish and Mediterranean gastronomy, discover convivial dining inspired by the art of sharing and authentic flavors. »",
        btnMenu: "Explore the Menu",
        btnBook: "Reserve a Table",
        btnOrder: "Order Now",
        address: "3 rue Saint-Thibault · 28100 Dreux",
        phone: "02 37 55 85 97",
        tag: "Homemade & Charcoal Grilled",
        caption: "Open 7 days a week from 11:00 to 01:00 · Dine-in & Takeaway.",
        hoursPill: "Open 7/7: 11:00 – 01:00"
      },
      intro: {
        label: "THE JOY OF SHARING GENEROUSLY",
        heading: "The spirit of Istanbul: Celebrating Turkish, Greek, and Mediterranean flavors.",
        description: "« At the historic crossroads of the Orient and the Mediterranean, Istanbul has always embodied an open, vibrant, and bountiful table. At Restaurant Istanbul in Dreux, we invite you to rediscover and celebrate the beloved classics of Turkish, Greek, and Mediterranean gastronomy: patiently marinated meats, flame-grilled specialties, oven-baked breads, fragrant herbs, and colorful accompaniments. Here, every dish is crafted to celebrate culinary authenticity, generous portions, and above all, the timeless joy of sharing good food with family and friends. »",
        badgeText: "Mediterranean Flavors",
        feat1Title: "Authentic Flavors",
        feat1Desc: "Balanced marinades with Mediterranean wild herbs, virgin olive oil, and noble Anatolian spices.",
        feat2Title: "Generous Portions",
        feat2Desc: "Abundant platters garnished with fragrant bulgur, golden rice, crisp fries, and fresh salads.",
        feat3Title: "Dine-In & Takeaway",
        feat3Desc: "Enjoy our welcoming dining room in central Dreux or call 02 37 55 85 97 for takeout orders.",
        btnExplore: "Discover Our Menu"
      },
      values: {
        item1Title: "Authenticity",
        item1Desc: "Classic Turkish and Mediterranean recipes prepared according to traditional culinary craft since 1992.",
        item2Title: "Generosity",
        item2Desc: "Hearty specialties and bountiful platters so you can savor every single moment of your meal.",
        item3Title: "Hospitality",
        item3Desc: "A warm and welcoming destination in central Dreux open 7 days a week until 01:00 AM."
      },
      heritage: {
        eyebrow: "FLAVORS & HERITAGE",
        title: "Flavors & Heritage: The Mediterranean Culinary Craft",
        subtitle: "Since 1992, Restaurant Istanbul has passionately upheld the art of hospitality and the culinary traditions of Turkey and the Mediterranean basin.",
        pillar1Title: "Culinary Traditions",
        pillar1Desc: "Mastery of flame and charcoal grilling, daily hand-layered meat spits, and strict devotion to heritage recipes.",
        pillar2Title: "Hospitality & Warmth",
        pillar2Desc: "The true spirit of Mediterranean hospitality where every guest is welcomed with warmth, dignity, and generosity.",
        pillar3Title: "Authentic Flavors",
        pillar3Desc: "Selected Anatolian spices, sumac, wild oregano, virgin olive oil, and premium cuts prepared to order.",
        pillar4Title: "Heritage — Since 1992",
        pillar4Desc: "Over three decades of dedication, consistency, and genuine flavor serving the community of Dreux."
      },
      menu: {
        eyebrow: "RESTAURANT MENU",
        title: "Menu & Signature Dishes",
        subtitle: "All our dishes are prepared to order. Premium meats, freshly baked Turkish breads, and flavorful accompaniments.",
        noticeTitle: "Combos & Sides Included:",
        noticeDesc: "All our Sandwich Menus are served with French Fries and a 33cl Drink. Our Platters come with fries, bulgur, rice, and fresh salads.",
        cat1: "Kebabs & Sandwiches",
        cat2: "Grilled Dishes & Specialties",
        cat3: "Full Platters",
        cat4: "Lahmacun & Turkish Breads",
        cat5: "Vegetarian & Sides",
        cat6: "Chilled Drinks",
        cat7: "Desserts & Sweets",
        childTitle: "Special Offer — Kids Menu",
        childDesc: "Sandwich + fries + drink (lunch only)",
        suppTitle: "Add-ons & Extras",
        suppCheese: "Cheese",
        suppFries: "Fries",
        suppMeat: "Meat",
        suppMixte: "Mixed Platter (extra meat)",
        bookCta: "Reserve a Table",
        orderNow: "Order Now",
        orderModalTitle: "Order Your Dish",
        orderCallBtn: "Call to Order: 02 37 55 85 97",
        orderWaBtn: "Order via WhatsApp",
        orderNotice: "Direct order without intermediaries · Pickup at 3 rue Saint-Thibault, 28100 Dreux.",
        solo: "Single",
        menuLabel: "Menu",
        portion: "Portion"
      },
      gallery: {
        eyebrow: "CULINARY SHOWCASE",
        title: "Gallery of Specialties",
        subtitle: "A visual preview of our grilled meats, generous platters, and traditional delicacies. Click on any photo to enlarge.",
        img1Title: "Mixed Grill Platters",
        img2Title: "Artisanal Kebab in Fresh Bread",
        img3Title: "Crispy Traditional Lahmacun",
        img4Title: "Grilled Tender Lamb Chops",
        img5Title: "Pistachio Honey Baklava",
        img6Title: "Warm & Convivial Dining Room",
        clickZoom: "Click to enlarge",
        disclaimer: "* Visual photography depicts the Mediterranean culinary style and atmosphere of our restaurant."
      },
      res: {
        eyebrow: "RESERVATIONS",
        title: "Reserve Your Table",
        subtitle: "Submit your table reservation request online. Our team will review availability and contact you promptly to confirm.",
        confirmationNotice: "Online reservation request · Or direct phone call at 02 37 55 85 97.",
        nameLabel: "Full Name",
        emailLabel: "Email Address",
        phoneLabel: "Phone Number",
        guestsLabel: "Number of Guests",
        guestsSelect: "Select party size",
        dateLabel: "Preferred Date",
        timeLabel: "Preferred Time",
        timeSelect: "Select time slot",
        optLunch: "Lunch service (from 11:00)",
        optDinner: "Dinner & late service (until 01:00)",
        dietLabel: "Dietary restrictions or allergies (optional)",
        notesLabel: "Special requests (optional)",
        consentText: "I agree that my contact details will only be used by Restaurant Istanbul to process this booking request.",
        btnSubmit: "Send Reservation Request",
        btnSubmitting: "Sending request...",
        successTitle: "Reservation Request Successfully Received!",
        successLead: "Thank you for choosing us. Your request has been recorded under the reference number below:",
        refLabel: "Request Reference:",
        successNotice: "Our team in Dreux will check table availability and contact you by phone or SMS to finalize and confirm your reservation.",
        btnNew: "Make Another Request",
        errors: {
          name: "Please enter your full name (at least 2 characters).",
          email: "Please enter a valid email address (e.g. name@domain.com).",
          phone: "Please enter a valid telephone number.",
          guests: "Please select the number of guests.",
          date: "Please select a date.",
          pastDate: "The reservation date cannot be in the past.",
          time: "Please select a preferred time slot.",
          consent: "Please accept the privacy consent to proceed."
        },
        recap: {
          name: "Name",
          email: "Email",
          phone: "Phone",
          date: "Date",
          time: "Time",
          guests: "Guests"
        }
      },
      contact: {
        eyebrow: "FIND US & ORDER",
        title: "Restaurant Istanbul in Dreux",
        desc: "Located in central Dreux, our restaurant warmly welcomes you 7 days a week in a hospitable and friendly atmosphere.",
        addressTitle: "Verified Address",
        hoursTitle: "Opening Hours",
        hoursOpen: "Open 7 Days a Week · Monday to Sunday",
        hoursTime: "11:00 – 01:00",
        hoursNextDay: "(Closing at 01:00 the following day)",
        phoneTitle: "Phone & Takeout Orders",
        phoneSub: "Direct call: 02 37 55 85 97",
        waTitle: "Official WhatsApp",
        waSub: "Chat & order directly on WhatsApp",
        servicesTitle: "Services",
        servicesDesc: "Dine-in seating, takeaway meals, phone orders, WhatsApp ordering, and lunch specials.",
        btnDirections: "Google Maps Directions",
        btnCall: "Call Restaurant"
      },
      footer: {
        cuisine: "Turkish & Mediterranean Cuisine · Dreux",
        identity: "Istanbul — Turkish, Greek, and Mediterranean Cuisine — Duru.",
        btnBook: "Reserve a Table",
        navTitle: "Navigation",
        infoTitle: "Hours & Information",
        infoAddress: "Address:",
        hoursLabel: "Open 7/7:",
        hoursValue: "11:00 – 01:00 (the next day)",
        phoneLabel: "Direct Phone:",
        connectTitle: "Contact & Social",
        itinerary: "Google Maps Directions →",
        legalTitle: "Quality & Heritage",
        legalDesc: "Restaurant Istanbul serves authentic Turkish, Greek, and Mediterranean cuisine prepared with respect for time-honored traditions.",
        mentions: "Legal Notice",
        privacy: "Privacy Policy",
        allRights: "All rights reserved.",
        credit: "Turkish and Mediterranean cuisine in the heart of Dreux."
      },
      floating: {
        whatsapp: "WhatsApp · 02 37 55 85 97"
      },
      modal: {
        mentionsTitle: "Legal Notice",
        privacyTitle: "Privacy Policy"
      }
    }
  };

  // ==========================================================================
  // 2. Verified Menu Database (Exact Transcription Data + Expanded Categories)
  // ==========================================================================
  const menuDatabase = {
    kebabs: [
      {
        id: "keb-1",
        name: { fr: "Kebab Traditionnel (Pain Maison)", en: "Traditional Kebab (House Bread)" },
        desc: {
          fr: "Broche artisanale marinée, pain turc maison cuit au four, crudités fraîches et sauce au choix.",
          en: "Artisanal seasoned spit-roasted meat in freshly baked house bread with crisp salad and your choice of sauce."
        },
        tag: { fr: "Incontournable", en: "House Classic" },
        pricing: { type: "dual", solo: "8.50 €", menu: "10.00 €" },
        img: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=700&q=80",
        orderable: true
      },
      {
        id: "keb-durum",
        name: { fr: "Dürüm Kebab (Galette Roulée)", en: "Dürüm Kebab (Rolled Flatbread)" },
        desc: {
          fr: "Viande kebab marinée finement tranchée, roulée dans une galette moelleuse avec salade, tomates, oignons et sauce.",
          en: "Tender sliced kebab meat rolled in warm thin flatbread with fresh garden salad, tomatoes, onions, and sauce."
        },
        tag: { fr: "Spécialité Dürüm", en: "Dürüm Roll" },
        pricing: { type: "dual", solo: "8.50 €", menu: "10.00 €" },
        img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=700&q=80",
        orderable: true
      },
      {
        id: "keb-2",
        name: { fr: "Sandwich Américain", en: "American Steak Sandwich" },
        desc: {
          fr: "Steaks de bœuf hachés saisis à point, fromage fondant, oignons grillés et crudités croquantes.",
          en: "Seared ground beef patties, melted cheese, grilled onions, and fresh vegetables in warm crusty bread."
        },
        tag: { fr: "Gourmand", en: "Hearty" },
        pricing: { type: "dual", solo: "8.50 €", menu: "10.00 €" },
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80",
        orderable: true
      },
      {
        id: "keb-3",
        name: { fr: "Sandwich Köfte Fait Maison", en: "Homemade Köfte Meatball Sandwich" },
        desc: {
          fr: "Boulettes artisanales de bœuf assaisonnées au cumin, persil plat et épices douces d'Orient.",
          en: "Spiced Turkish beef meatballs seasoned with cumin, fresh flat parsley, and fragrant Eastern aromas."
        },
        tag: { fr: "Fait Maison", en: "Homemade" },
        pricing: { type: "dual", solo: "8.50 €", menu: "10.00 €" },
        img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=700&q=80",
        orderable: true
      },
      {
        id: "keb-4",
        name: { fr: "Sandwich Poulet Mariné", en: "Marinated Chicken Sandwich" },
        desc: {
          fr: "Émincé de filets de poulet tendres marinés au paprika doux et herbes méditerranéennes.",
          en: "Tender chicken breast fillets marinated with sweet paprika and Mediterranean garden herbs."
        },
        tag: { fr: "Volaille", en: "Poultry" },
        pricing: { type: "dual", solo: "8.50 €", menu: "10.00 €" },
        img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=700&q=80",
        orderable: true
      },
      {
        id: "pan-1",
        name: { fr: "Panini Poulet", en: "Chicken Panini" },
        desc: {
          fr: "Pain croustillant grillé à la presse, émincé de poulet mariné tendre et fromage fondant.",
          en: "Crusty ciabatta toasted golden brown, tender marinated chicken, and rich melted cheese."
        },
        tag: { fr: "Panini Chaud", en: "Toasted Panini" },
        pricing: { type: "dual", solo: "5.00 €", menu: "7.00 €" },
        img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80",
        orderable: true
      },
      {
        id: "pan-2",
        name: { fr: "Panini 4 Fromages", en: "Four Cheese Panini" },
        desc: {
          fr: "Mélange gourmand de quatre fromages fondus sous la presse dorée.",
          en: "A rich melt of four European cheeses toasted between golden crusty bread."
        },
        tag: { fr: "Végétarien", en: "Vegetarian" },
        pricing: { type: "dual", solo: "5.00 €", menu: "7.00 €" },
        img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=700&q=80",
        orderable: true
      },
      {
        id: "pan-3",
        name: { fr: "Panini Sucuk Traditionnel", en: "Turkish Sucuk Panini" },
        desc: {
          fr: "Saucisse de bœuf turque relevée à l'ail et épices douces, avec fromage fondant.",
          en: "Authentic Turkish garlic-and-spice beef sausage (sucuk) paired with melted cheese."
        },
        tag: { fr: "Spécialité Turque", en: "Turkish Specialty" },
        pricing: { type: "dual", solo: "5.00 €", menu: "7.00 €" },
        img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=700&q=80",
        orderable: true
      },
      {
        id: "pan-4",
        name: { fr: "Panini Thon", en: "Tuna Panini" },
        desc: {
          fr: "Émietté de thon assaisonné, fromage fondu et subtile pointe d'aromates.",
          en: "Seasoned tuna flakes, melted cheese, and delicate herb seasonings in pressed bread."
        },
        tag: { fr: "Panini Chaud", en: "Toasted Panini" },
        pricing: { type: "dual", solo: "5.00 €", menu: "7.00 €" },
        img: "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=700&q=80",
        orderable: true
      }
    ],

    grillades: [
      {
        id: "grill-1",
        name: { fr: "Côtelettes d'Agneau Grillées", en: "Flame-Grilled Lamb Chops" },
        desc: {
          fr: "Tendres côtelettes d'agneau fraîches saisies au feu de braise, marinées aux herbes de garrigue et origan sauvage.",
          en: "Fresh, succulent lamb chops flame-grilled over charcoal with wild oregano and fragrant Mediterranean herbs."
        },
        tag: { fr: "Sélection du Boucher", en: "Butcher's Cut" },
        pricing: { type: "single", price: "15.00 €" },
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80",
        orderable: true
      },
      {
        id: "grill-2",
        name: { fr: "Adana Kebab Grillé Traditionnel", en: "Traditional Adana Kebab Skewer" },
        desc: {
          fr: "Brochette traditionnelle d'agneau et bœuf hachés marinés aux piments rouges doux d'Anatolie, cuite à la flamme.",
          en: "Hand-minced lamb and beef mounted on wide skewers, seasoned with red pepper, sumac, and grilled over charcoal."
        },
        tag: { fr: "Spécialité Anatolie", en: "Anatolian Star" },
        pricing: { type: "single", price: "15.00 €" },
        img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=700&q=80",
        orderable: true
      },
      {
        id: "grill-3",
        name: { fr: "Brochette de Bœuf Grillée", en: "Flame-Grilled Beef Brochette" },
        desc: {
          fr: "Morceaux choisis de viande de bœuf tendre marinés aux aromates, enfilés et dorés à la flamme.",
          en: "Select tender beef cubes flame-grilled on skewers until juicy, tender, and intensely aromatic."
        },
        tag: { fr: "Grillade Braise", en: "Charcoal Grilled" },
        pricing: { type: "single", price: "15.00 €" },
        img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80",
        orderable: true
      },
      {
        id: "grill-poulet",
        name: { fr: "Brochette de Poulet Grillé (Tavuk Şiş)", en: "Grilled Chicken Skewer (Tavuk Şiş)" },
        desc: {
          fr: "Filets de poulet fermier marinés au yaourt, ail doux, paprika et thym sauvage, saisis au grill.",
          en: "Tender chicken fillets marinated in yogurt, garlic, sweet paprika, and wild thyme, grilled to juicy perfection."
        },
        tag: { fr: "Tendreté & Saveur", en: "Tender & Flavorful" },
        pricing: { type: "single", price: "15.00 €" },
        img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=700&q=80",
        orderable: true
      },
      {
        id: "grill-4",
        name: { fr: "Grillade Royale Spécialité", en: "Royal Mixed Grill Specialty" },
        desc: {
          fr: "Le grand festin du chef réunissant côtelettes d'agneau, brochette adana, poulet mariné et köfte artisanal.",
          en: "The chef's supreme assortment featuring lamb chops, adana skewer, marinated chicken, and artisanal köfte."
        },
        tag: { fr: "Signature du Chef", en: "Chef Signature" },
        pricing: { type: "single", price: "20.00 €" },
        img: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=700&q=80",
        orderable: true
      }
    ],

    assiettes: [
      {
        id: "ass-1",
        name: { fr: "Assiette Kebab Complète", en: "Full Kebab Platter" },
        desc: {
          fr: "Généreuse portion de viande kebab artisanale servie avec frites dorées, boulgour turc parfumé, riz et salade composée.",
          en: "Abundant spit-roasted kebab meat accompanied by golden fries, traditional bulgur, rice, and fresh Mediterranean salad."
        },
        tag: { fr: "Complet & Généreux", en: "Generous Platter" },
        pricing: { type: "single", price: "15.00 €" },
        img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80",
        orderable: true
      },
      {
        id: "ass-2",
        name: { fr: "Assiette Poulet Mariné Complète", en: "Full Marinated Chicken Platter" },
        desc: {
          fr: "Morceaux de poulet tendrement marinés et grillés à point, avec frites, boulgour parfumé, riz et crudités du jour.",
          en: "Marinated tender chicken fillets grilled to order, served with fries, fragrant Turkish bulgur, rice, and crisp vegetables."
        },
        tag: { fr: "Frites · Boulgour · Riz", en: "Fries · Bulgur · Rice" },
        pricing: { type: "single", price: "15.00 €" },
        img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=700&q=80",
        orderable: true
      },
      {
        id: "ass-3",
        name: { fr: "Assiette Köfte Artisanale", en: "Full Köfte Meatball Platter" },
        desc: {
          fr: "Boulettes de bœuf grillées façon anatolienne, accompagnées de frites, boulgour parfumé, riz et crudités fraîches.",
          en: "Traditional spiced Turkish beef patties grilled to order, served with fries, bulgur, rice, and fresh vegetables."
        },
        tag: { fr: "Frites · Boulgour · Riz", en: "Fries · Bulgur · Rice" },
        pricing: { type: "single", price: "15.00 €" },
        img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=700&q=80",
        orderable: true
      },
      {
        id: "ass-4",
        name: { fr: "Assiette Royale Festin", en: "Royal Grand Feast Platter" },
        desc: {
          fr: "L'expérience complète réunissant nos meilleures viandes grillées (agneau, köfte, adana, poulet), avec frites, boulgour et riz.",
          en: "The ultimate dining experience pairing an assortment of grilled meats with fries, bulgur, rice, and sauces."
        },
        tag: { fr: "Festin Suprême", en: "Grand Feast" },
        pricing: { type: "single", price: "20.00 €" },
        img: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=700&q=80",
        orderable: true
      },
      {
        id: "barq-1",
        name: { fr: "Barquette Viande + Frites", en: "Meat & Fries Box" },
        desc: {
          fr: "Portion pratique et généreuse de viande kebab marinée accompagnée de frites dorées et sauce.",
          en: "A generous box of our seasoned kebab meat layered with golden French fries and your choice of sauce."
        },
        tag: { fr: "À Partager", en: "To Share" },
        pricing: { type: "single", price: "5.00 €" },
        img: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=700&q=80",
        orderable: true
      },
      {
        id: "barq-2",
        name: { fr: "Grande Barquette 100% Viande", en: "Pure Meat Box" },
        desc: {
          fr: "Grande barquette de viande kebab marinée artisanale, idéale pour composer vos repas en famille.",
          en: "Large portion of pure seasoned spit-roasted kebab meat, perfect for sharing and custom family meals."
        },
        tag: { fr: "100% Viande", en: "100% Meat" },
        pricing: { type: "single", price: "10.00 €" },
        img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=700&q=80",
        orderable: true
      }
    ],

    lahmacun: [
      {
        id: "lahm-1",
        name: { fr: "Lahmacun Seul", en: "Traditional Lahmacun" },
        desc: {
          fr: "Fine pâte croustillante cuite à haute température, garnie de viande hachée assaisonnée, tomates, poivrons et persil frais.",
          en: "Ultra-thin crispy Turkish flatbread baked with seasoned minced meat, herbs, tomatoes, and freshly squeezed lemon."
        },
        tag: { fr: "Four Traditionnel", en: "Hearth Baked" },
        pricing: { type: "single", price: "4.00 €" },
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80",
        orderable: true
      },
      {
        id: "lahm-2",
        name: { fr: "Lahmacun + Frites", en: "Lahmacun & Fries" },
        desc: {
          fr: "Le lahmacun traditionnel croustillant servi bien chaud avec une portion de frites dorées.",
          en: "Traditional hot crispy lahmacun served alongside a fresh portion of golden French fries."
        },
        tag: { fr: "Formule Complète", en: "Flatbread & Fries" },
        pricing: { type: "single", price: "5.00 €" },
        img: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=700&q=80",
        orderable: true
      },
      {
        id: "lahm-3",
        name: { fr: "Lahmacun Roulé + Viande + Frites", en: "Loaded Lahmacun with Meat & Fries" },
        desc: {
          fr: "Lahmacun généreusement garni de viande kebab marinée, roulé avec crudités et servi avec frites croustillantes.",
          en: "Crispy lahmacun generously rolled with succulent kebab meat, salad, and served with hot crispy fries."
        },
        tag: { fr: "Spécialité Maison", en: "Loaded Specialty" },
        pricing: { type: "single", price: "10.00 €" },
        img: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=700&q=80",
        orderable: true
      }
    ],

    vegetarien: [
      {
        id: "sal-1",
        name: { fr: "Salade Composée à l'Avocat", en: "Mediterranean Avocado Salad" },
        desc: {
          fr: "Avocat crémeux, mesclun frais, tomates cerises mûres, concombres et vinaigrette douce aux herbes.",
          en: "Fresh ripe avocado, mixed greens, sweet cherry tomatoes, cucumbers, and olive vinaigrette."
        },
        tag: { fr: "Fraîcheur Méditerranée", en: "Fresh & Green" },
        pricing: { type: "single", price: "7.00 €" },
        img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80",
        orderable: true
      },
      {
        id: "sal-2",
        name: { fr: "Salade Composée au Thon", en: "Tuna Niçoise Garden Salad" },
        desc: {
          fr: "Thon de qualité, mesclun croquant, maïs doux, tomates fraîches et assaisonnement maison.",
          en: "Selected tuna flakes, crisp garden greens, sweet corn, fresh tomatoes, and house vinaigrette."
        },
        tag: { fr: "Saveur Marine", en: "Sea Breeze" },
        pricing: { type: "single", price: "7.00 €" },
        img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80",
        orderable: true
      },
      {
        id: "sal-3",
        name: { fr: "Salade Composée au Poulet", en: "Chicken Garden Salad" },
        desc: {
          fr: "Émincé de poulet tendre, salade croquante, tomates et légumes de saison fraîchement coupés.",
          en: "Tender sliced chicken over crisp mixed greens, vine tomatoes, and seasonal crunchy vegetables."
        },
        tag: { fr: "Équilibré", en: "Balanced" },
        pricing: { type: "single", price: "7.00 €" },
        img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80",
        orderable: true
      },
      {
        id: "crud-1",
        name: { fr: "Poulet Crudités", en: "Chicken & Fresh Veggies Sub" },
        desc: {
          fr: "Sandwich équilibré garni d'émincé de poulet et de légumes croquants du jour dans un pain frais.",
          en: "Crisp and fresh sandwich loaded with tender chicken breast and garden salad."
        },
        tag: { fr: "Sandwich Frais", en: "Fresh Sub" },
        pricing: { type: "dual", solo: "5.00 €", menu: "7.00 €" },
        img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=700&q=80",
        orderable: true
      },
      {
        id: "crud-2",
        name: { fr: "Poulet Emmental", en: "Chicken & Emmental Sub" },
        desc: {
          fr: "Poulet mariné tendre, tranches généreuses d'emmental et crudités fraîches.",
          en: "Marinated chicken breast, French Emmental cheese, and fresh garden salad."
        },
        tag: { fr: "Sandwich Frais", en: "Fresh Sub" },
        pricing: { type: "dual", solo: "5.00 €", menu: "7.00 €" },
        img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80",
        orderable: true
      },
      {
        id: "crud-3",
        name: { fr: "Thon Crudités", en: "Tuna & Salad Sub" },
        desc: {
          fr: "Thon délicatement assaisonné, tomates mûres, salade et sauce légère maison.",
          en: "Delicately seasoned tuna salad, vine-ripened tomatoes, and fresh greens."
        },
        tag: { fr: "Sandwich Frais", en: "Fresh Sub" },
        pricing: { type: "dual", solo: "5.00 €", menu: "7.00 €" },
        img: "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=700&q=80",
        orderable: true
      },
      {
        id: "frit-1",
        name: { fr: "Barquette de Frites Croustillantes", en: "Golden Crispy French Fries" },
        desc: {
          fr: "Frites dorées et croustillantes servies bien chaudes avec sauce au choix.",
          en: "Crispy, golden French fries salted to perfection and served piping hot with your choice of dip."
        },
        tag: { fr: "Petite · Moyenne · Grande", en: "Small · Medium · Large" },
        pricing: { type: "sizes", petite: "2.00 €", moyenne: "2.50 €", grande: "3.00 €" },
        img: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=700&q=80",
        orderable: true
      }
    ],

    boissons: [
      {
        id: "boi-coca",
        name: { fr: "Coca-Cola (Canette 33 cl / 50 cl)", en: "Coca-Cola (Can 33 cl / 50 cl)" },
        desc: {
          fr: "Le grand classique rafraîchissant aux arômes inimitables, servi bien frais.",
          en: "The world-famous refreshing cola beverage, perfectly chilled."
        },
        tag: { fr: "Incontournable", en: "Classic Cold" },
        pricing: { type: "single", price: "1.50 €" },
        img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=700&q=80",
        orderable: true
      },
      {
        id: "boi-7up",
        name: { fr: "7 Up (Canette 33 cl)", en: "7 Up (Can 33 cl)" },
        desc: {
          fr: "Boisson gazeuse pétillante et rafraîchissante aux arômes naturels de citron et citron vert.",
          en: "Crisp, sparkling lemon and lime flavored carbonated soft drink served ice-cold."
        },
        tag: { fr: "Citron & Lime", en: "Lemon & Lime" },
        pricing: { type: "single", price: "1.50 €" },
        img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=700&q=80",
        orderable: true
      },
      {
        id: "boi-pepsi",
        name: { fr: "Pepsi (Canette 33 cl)", en: "Pepsi (Can 33 cl)" },
        desc: {
          fr: "Saveur cola intense, pétillante et équilibrée, idéale pour accompagner vos grillades.",
          en: "Bold, refreshing, and deeply flavorful cola beverage served chilled."
        },
        tag: { fr: "Cola Rafraîchissant", en: "Chilled Cola" },
        pricing: { type: "single", price: "1.50 €" },
        img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80",
        orderable: true
      },
      {
        id: "boi-fanta",
        name: { fr: "Fanta Orange (Canette 33 cl)", en: "Fanta Orange (Can 33 cl)" },
        desc: {
          fr: "Boisson pétillante fruitée au goût gourmand d'orange gorgée de soleil.",
          en: "Deliciously vibrant orange fruit-flavored soda with lively bubbles."
        },
        tag: { fr: "Fruité & Pétillant", en: "Fruity Orange" },
        pricing: { type: "single", price: "1.50 €" },
        img: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=700&q=80",
        orderable: true
      },
      {
        id: "boi-the",
        name: { fr: "Thé Traditionnel Turc (Çay)", en: "Authentic Turkish Tea (Çay)" },
        desc: {
          fr: "Thé noir corsé et aromatique infusé selon la tradition et servi bien chaud dans son verre tulipe.",
          en: "Robust, fragrant Turkish black tea brewed fresh and served in a classic curved tulip glass."
        },
        tag: { fr: "Tradition d'Anatolie", en: "Turkish Tradition" },
        pricing: { type: "single", price: "1.50 €" },
        img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=700&q=80",
        orderable: true
      },
      {
        id: "boi-eau",
        name: { fr: "Eau Minérale Cristaline 50 cl", en: "Mineral Water Cristaline 50 cl" },
        desc: {
          fr: "Bouteille d'eau de source Cristaline pure et fraîche.",
          en: "Chilled bottle of pure natural spring water."
        },
        tag: { fr: "Eau Pure", en: "Spring Water" },
        pricing: { type: "single", price: "1.00 €" },
        img: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=700&q=80",
        orderable: true
      },
      {
        id: "boi-redbull",
        name: { fr: "Red Bull Energy Drink 25 cl", en: "Red Bull Energy Drink 25 cl" },
        desc: {
          fr: "Canette fraîche de boisson énergisante Red Bull 25 cl.",
          en: "Chilled can of Red Bull Energy Drink 25 cl."
        },
        tag: { fr: "Énergie", en: "Energy" },
        pricing: { type: "single", price: "3.00 €" },
        img: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=700&q=80",
        orderable: true
      }
    ],

    desserts: [
      {
        id: "des-1",
        name: { fr: "Baklawa aux Pistaches d'Anatolie", en: "Anatolian Pistachio Baklava" },
        desc: {
          fr: "Fine superposition de pâte filo croustillante pur beurre, éclats généreux de pistaches vertes et miel délicat.",
          en: "Crispy layers of flaky filo pastry made with pure butter, crushed green pistachios, and light honey syrup."
        },
        tag: { fr: "Pâtisserie Orientale", en: "Turkish Sweet" },
        pricing: { type: "single", price: "3.00 €" },
        img: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=700&q=80",
        orderable: true
      },
      {
        id: "des-2",
        name: { fr: "Gâteau de Semoule Revani", en: "Traditional Semolina Revani Cake" },
        desc: {
          fr: "Douceur traditionnelle orientale fondante et parfumée à la fleur d'oranger et au sirop doux.",
          en: "Traditional golden semolina cake infused with orange blossom water and light syrup."
        },
        tag: { fr: "Tradition", en: "Traditional" },
        pricing: { type: "single", price: "3.00 €" },
        img: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=700&q=80",
        orderable: true
      },
      {
        id: "des-3",
        name: { fr: "Tiramisu Maison Onctueux", en: "Creamy House Tiramisu" },
        desc: {
          fr: "Crème mascarpone légère et onctueuse sur biscuit imbibé d'un café doux et saupoudré de cacao pur.",
          en: "Velvety mascarpone cream layered over espresso-soaked ladyfingers and pure cocoa dusting."
        },
        tag: { fr: "Fait Maison", en: "Creamy Classic" },
        pricing: { type: "single", price: "3.00 €" },
        img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=700&q=80",
        orderable: true
      },
      {
        id: "des-4",
        name: { fr: "Tarte au Daim Croustillante", en: "Crunchy Daim Caramel Tart" },
        desc: {
          fr: "Base croustillante aux amandes surmontée de crème et de pépites de chocolat au caramel croquant Daim.",
          en: "Almond crust topped with smooth cream and crunchy Swedish Daim milk chocolate caramel bits."
        },
        tag: { fr: "Chocolat & Caramel", en: "Caramel Crunch" },
        pricing: { type: "single", price: "3.00 €" },
        img: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=700&q=80",
        orderable: true
      },
      {
        id: "des-5",
        name: { fr: "Fondant Cœur Coulant au Chocolat", en: "Molten Chocolate Lava Cake" },
        desc: {
          fr: "Moelleux au cœur intensément coulant au chocolat noir pur cacao, servi tiède.",
          en: "Warm chocolate cake with an intensely rich melting dark cocoa center."
        },
        tag: { fr: "Cœur Coulant", en: "Molten Lava" },
        pricing: { type: "single", price: "3.00 €" },
        img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80",
        orderable: true
      }
    ]
  };

  // ==========================================================================
  // 3. Gallery Data
  // ==========================================================================
  const galleryItems = [
    {
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
      caption: {
        fr: "Assortiment de grillades mixtes au feu de braise avec boulgour parfumé et légumes rôtis.",
        en: "Mixed flame-grilled meat platter with fragrant bulgur and roasted vegetables."
      }
    },
    {
      img: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=1200&q=80",
      caption: {
        fr: "Kebab artisanal tranché à la broche, servi dans notre pain frais du jour avec crudités.",
        en: "Artisanal spit-roasted kebab served in fresh bread with crisp vegetables."
      }
    },
    {
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
      caption: {
        fr: "Lahmacun traditionnel croustillant garni de viande, oignons, tomates et persil plat.",
        en: "Traditional crispy lahmacun topped with minced meat, onions, tomatoes, and parsley."
      }
    },
    {
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      caption: {
        fr: "Côtelettes d'agneau marinées aux herbes méditerranéennes saisies à la braise.",
        en: "Flame-grilled tender lamb chops marinated with Mediterranean wild herbs."
      }
    },
    {
      img: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=1200&q=80",
      caption: {
        fr: "Baklawa feuilleté artisanal pur beurre, pistaches d'Anatolie et miel délicat.",
        en: "Artisanal crispy layered baklava made with pure butter, Anatolian pistachios, and honey."
      }
    },
    {
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      caption: {
        fr: "Salle du Restaurant Istanbul : une atmosphère chaleureuse au cœur de Dreux.",
        en: "Restaurant Istanbul dining room: a warm and hospitable setting in central Dreux."
      }
    }
  ];

  // ==========================================================================
  // 4. State Management
  // ==========================================================================
  let currentLang = 'fr';
  let currentCategory = 'kebabs';
  let activeLightboxIndex = 0;

  try {
    const savedLang = localStorage.getItem('restaurant_istanbul_lang');
    if (savedLang === 'en' || savedLang === 'fr') {
      currentLang = savedLang;
    }
  } catch (e) {
    console.warn("localStorage not accessible, defaulting to 'fr'.");
  }

  // ==========================================================================
  // 5. Language Switcher Engine
  // ==========================================================================
  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    try {
      localStorage.setItem('restaurant_istanbul_lang', lang);
    } catch (e) {
      // Ignore storage limitations
    }

    document.documentElement.lang = lang;

    // Update Meta Title & Description
    document.title = translations[lang].meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', translations[lang].meta.description);
    }

    // Update Active Language Switcher Buttons
    const btnFr = document.getElementById('btn-lang-fr');
    const btnEn = document.getElementById('btn-lang-en');
    if (btnFr && btnEn) {
      if (lang === 'fr') {
        btnFr.classList.add('active');
        btnFr.setAttribute('aria-pressed', 'true');
        btnEn.classList.remove('active');
        btnEn.setAttribute('aria-pressed', 'false');
      } else {
        btnEn.classList.add('active');
        btnEn.setAttribute('aria-pressed', 'true');
        btnFr.classList.remove('active');
        btnFr.setAttribute('aria-pressed', 'false');
      }
    }

    // Translate all [data-i18n] elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = resolveKey(translations[lang], key);
      if (val !== undefined) {
        if (typeof val === 'string' && val.includes('<') && val.includes('>')) {
          el.innerHTML = val;
        } else {
          el.textContent = val;
        }
      }
    });

    // Translate [data-i18n-label] for optgroups
    document.querySelectorAll('[data-i18n-label]').forEach(el => {
      const key = el.getAttribute('data-i18n-label');
      const val = resolveKey(translations[lang], key);
      if (val !== undefined) {
        el.label = val;
      }
    });

    // Update Input Placeholders & Select Defaults
    updateFormPlaceholders(lang);

    // Re-render Active Menu Category with updated language
    renderMenu(currentCategory, lang);
  }

  function resolveKey(obj, path) {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  }

  function updateFormPlaceholders(lang) {
    const inputName = document.getElementById('res-name');
    const inputEmail = document.getElementById('res-email');
    const inputPhone = document.getElementById('res-phone');
    const inputDiet = document.getElementById('res-dietary');
    const inputNotes = document.getElementById('res-notes');

    if (lang === 'en') {
      if (inputName) inputName.placeholder = "e.g. John Doe";
      if (inputEmail) inputEmail.placeholder = "e.g. john.doe@email.com";
      if (inputPhone) inputPhone.placeholder = "e.g. 06 12 34 56 78";
      if (inputDiet) inputDiet.placeholder = "e.g. Halal, vegetarian, allergies...";
      if (inputNotes) inputNotes.placeholder = "Birthday, quiet table, baby high chair...";
    } else {
      if (inputName) inputName.placeholder = "ex. Jean Dupont";
      if (inputEmail) inputEmail.placeholder = "ex. jean.dupont@email.com";
      if (inputPhone) inputPhone.placeholder = "ex. 06 12 34 56 78";
      if (inputDiet) inputDiet.placeholder = "ex. Végétarien, sans gluten, sans fruits à coque...";
      if (inputNotes) inputNotes.placeholder = "Anniversaire, table au calme, chaise haute pour enfant...";
    }
  }

  // Language Button Event Handlers
  const btnLangFr = document.getElementById('btn-lang-fr');
  const btnLangEn = document.getElementById('btn-lang-en');

  if (btnLangFr) {
    btnLangFr.addEventListener('click', () => {
      if (currentLang !== 'fr') setLanguage('fr');
    });
  }

  if (btnLangEn) {
    btnLangEn.addEventListener('click', () => {
      if (currentLang !== 'en') setLanguage('en');
    });
  }

  // ==========================================================================
  // 6. Dynamic Menu Rendering & Interactive "Order Now" System
  // ==========================================================================
  const menuGrid = document.getElementById('menu-grid');
  const menuTabs = document.querySelectorAll('.menu-tab-btn');

  function renderMenu(categoryKey, lang) {
    if (!menuGrid) return;
    const items = menuDatabase[categoryKey] || [];
    const t = translations[lang].menu;

    menuGrid.classList.add('fade-out');

    setTimeout(() => {
      let html = '';

      items.forEach(dish => {
        const dishName = dish.name[lang] || dish.name.fr;
        const dishDesc = dish.desc[lang] || dish.desc.fr;
        const dishTag = dish.tag[lang] || dish.tag.fr;

        // Pricing HTML construction
        let priceHtml = '';
        if (dish.pricing.type === 'dual') {
          priceHtml = `
            <div class="price-chips">
              <span class="price-chip">
                <span class="price-label">${t.solo}</span>
                <span class="price-value">${dish.pricing.solo}</span>
              </span>
              <span class="price-chip">
                <span class="price-label">${t.menuLabel}</span>
                <span class="price-value">${dish.pricing.menu}</span>
              </span>
            </div>
          `;
        } else if (dish.pricing.type === 'sizes') {
          priceHtml = `
            <div class="price-chips">
              <span class="price-chip" title="Petite">
                <span class="price-label">S</span>
                <span class="price-value">${dish.pricing.petite}</span>
              </span>
              <span class="price-chip" title="Moyenne">
                <span class="price-label">M</span>
                <span class="price-value">${dish.pricing.moyenne}</span>
              </span>
              <span class="price-chip" title="Grande">
                <span class="price-label">L</span>
                <span class="price-value">${dish.pricing.grande}</span>
              </span>
            </div>
          `;
        } else {
          priceHtml = `
            <span class="price-single">${dish.pricing.price}</span>
          `;
        }

        // Functional "Order Now" Button
        const orderBtnHtml = `
          <button type="button" class="btn btn-order-dish" data-dish-id="${dish.id}" aria-label="${t.orderNow} : ${dishName}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            <span>${t.orderNow}</span>
          </button>
        `;

        html += `
          <article class="dish-card" id="dish-${dish.id}">
            <div class="dish-media">
              <img 
                src="${dish.img}" 
                alt="${dishName} - Restaurant Istanbul Dreux" 
                class="dish-img" 
                loading="lazy"
                width="360"
                height="220"
              >
              <span class="dish-tag">${dishTag}</span>
            </div>
            <div class="dish-content">
              <div class="dish-header">
                <h3 class="dish-name">${dishName}</h3>
              </div>
              <p class="dish-desc">${dishDesc}</p>
              <div class="dish-bottom-bar">
                <div class="dish-pricing-area">
                  ${priceHtml}
                </div>
                ${orderBtnHtml}
              </div>
            </div>
          </article>
        `;
      });

      menuGrid.innerHTML = html;
      menuGrid.classList.remove('fade-out');
    }, 120);
  }

  // Category Tab Click Handlers
  menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetCategory = tab.getAttribute('data-category');
      if (targetCategory === currentCategory) return;

      menuTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      currentCategory = targetCategory;
      renderMenu(currentCategory, currentLang);
    });

    // Keyboard navigation for tabs (Arrow Left / Arrow Right)
    tab.addEventListener('keydown', (e) => {
      const tabsArray = Array.from(menuTabs);
      const currentIndex = tabsArray.indexOf(tab);

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % tabsArray.length;
        tabsArray[nextIndex].focus();
        tabsArray[nextIndex].click();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex = (currentIndex - 1 + tabsArray.length) % tabsArray.length;
        tabsArray[prevIndex].focus();
        tabsArray[prevIndex].click();
      }
    });
  });

  // ==========================================================================
  // 7. Order Now Modal Engine
  // ==========================================================================
  const modalOrder = document.getElementById('modal-order');
  const orderTitleEl = document.getElementById('order-dish-title');
  const orderDescEl = document.getElementById('order-dish-desc');
  const orderImgEl = document.getElementById('order-dish-img');
  const orderPricingEl = document.getElementById('order-pricing-box');
  const orderCallLink = document.getElementById('order-call-link');
  const orderWaLink = document.getElementById('order-wa-link');

  function openOrderModal(dishId) {
    if (!modalOrder) return;

    let targetDish = null;
    for (const cat in menuDatabase) {
      const found = menuDatabase[cat].find(d => d.id === dishId);
      if (found) {
        targetDish = found;
        break;
      }
    }
    if (!targetDish) return;

    const dishName = targetDish.name[currentLang] || targetDish.name.fr;
    const dishDesc = targetDish.desc[currentLang] || targetDish.desc.fr;

    if (orderTitleEl) orderTitleEl.textContent = dishName;
    if (orderDescEl) orderDescEl.textContent = dishDesc;
    if (orderImgEl) {
      orderImgEl.src = targetDish.img;
      orderImgEl.alt = dishName;
    }

    let currentSelectedPrice = '';
    let currentSelectedVariant = '';

    if (targetDish.pricing.type === 'dual') {
      currentSelectedPrice = targetDish.pricing.menu;
      currentSelectedVariant = currentLang === 'en' ? 'Combo Menu' : 'Menu Frites + Boisson';

      if (orderPricingEl) {
        orderPricingEl.innerHTML = `
          <div class="modal-pricing-selector" role="radiogroup" aria-label="Option de commande">
            <label class="modal-pricing-option">
              <input type="radio" name="modal-order-variant" value="solo" data-price="${targetDish.pricing.solo}" data-variant="${currentLang === 'en' ? 'Single' : 'Seul'}">
              <div class="opt-content">
                <span class="opt-name">${currentLang === 'en' ? 'Single' : 'Seul'}</span>
                <span class="opt-price">${targetDish.pricing.solo}</span>
              </div>
            </label>
            <label class="modal-pricing-option selected">
              <input type="radio" name="modal-order-variant" value="menu" data-price="${targetDish.pricing.menu}" data-variant="${currentLang === 'en' ? 'Combo Menu' : 'Menu (+ Frites & Boisson)'}" checked>
              <div class="opt-content">
                <span class="opt-name">${currentLang === 'en' ? 'Combo Menu (+ Fries & Drink)' : 'Formule Menu (+ Frites & Boisson)'}</span>
                <span class="opt-price">${targetDish.pricing.menu}</span>
              </div>
            </label>
          </div>
        `;

        orderPricingEl.querySelectorAll('input[name="modal-order-variant"]').forEach(radio => {
          radio.addEventListener('change', (e) => {
            orderPricingEl.querySelectorAll('.modal-pricing-option').forEach(opt => opt.classList.remove('selected'));
            e.target.closest('.modal-pricing-option').classList.add('selected');

            currentSelectedVariant = e.target.getAttribute('data-variant');
            currentSelectedPrice = e.target.getAttribute('data-price');
            updateOrderLinks(dishName, currentSelectedVariant, currentSelectedPrice);
          });
        });
      }
    } else if (targetDish.pricing.type === 'sizes') {
      currentSelectedPrice = targetDish.pricing.moyenne;
      currentSelectedVariant = currentLang === 'en' ? 'Medium' : 'Moyenne';

      if (orderPricingEl) {
        orderPricingEl.innerHTML = `
          <div class="modal-pricing-selector">
            <span class="modal-price-pill">${targetDish.pricing.petite} (S)</span>
            <span class="modal-price-pill active">${targetDish.pricing.moyenne} (M)</span>
            <span class="modal-price-pill">${targetDish.pricing.grande} (L)</span>
          </div>
        `;
      }
    } else {
      currentSelectedPrice = targetDish.pricing.price;
      currentSelectedVariant = '';

      if (orderPricingEl) {
        orderPricingEl.innerHTML = `
          <div class="modal-price-single">
            <span class="price-val-highlight">${currentSelectedPrice}</span>
          </div>
        `;
      }
    }

    updateOrderLinks(dishName, currentSelectedVariant, currentSelectedPrice);
    modalOrder.showModal();
  }

  function updateOrderLinks(dishName, variant, price) {
    if (orderCallLink) {
      orderCallLink.href = 'tel:+33237558597';
    }
    if (orderWaLink) {
      const priceText = variant ? `${variant} - ${price}` : `${price}`;
      const msg = currentLang === 'en'
        ? `Hello Restaurant Istanbul Dreux, I would like to order: ${dishName} (${priceText}). Thank you!`
        : `Bonjour Restaurant Istanbul Dreux, je souhaite commander : ${dishName} (${priceText}). Merci !`;
      orderWaLink.href = `https://wa.me/33237558597?text=${encodeURIComponent(msg)}`;
    }
  }

  // Event delegation on menuGrid for clicking "Commander"
  if (menuGrid) {
    menuGrid.addEventListener('click', (e) => {
      const orderBtn = e.target.closest('.btn-order-dish');
      if (orderBtn) {
        const dishId = orderBtn.getAttribute('data-dish-id');
        openOrderModal(dishId);
      }
    });
  }

  // ==========================================================================
  // 8. Sticky Header & Active Navigation Highlight
  // ==========================================================================
  const header = document.getElementById('header');
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  if ('IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          desktopNavLinks.forEach(link => {
            const href = link.getAttribute('href').substring(1);
            if (href === currentId) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -70% 0px'
    });

    sections.forEach(sec => navObserver.observe(sec));
  }

  // ==========================================================================
  // 9. Mobile Navigation Drawer
  // ==========================================================================
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-cta-btn');

  function openMobileMenu() {
    mobileToggle.setAttribute('aria-expanded', 'true');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    mobileDrawer.classList.add('open');
  }

  function closeMobileMenu() {
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    mobileDrawer.classList.remove('open');
  }

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    document.addEventListener('click', (e) => {
      if (!header.contains(e.target) && mobileDrawer.classList.contains('open')) {
        closeMobileMenu();
      }
    });
  }

  // ==========================================================================
  // 10. Interactive Reservation Form (Validation & Confirmation)
  // ==========================================================================
  const resForm = document.getElementById('reservation-form');
  const resDateInput = document.getElementById('res-date');
  const resSuccessBox = document.getElementById('reservation-success');
  const successRefNum = document.getElementById('success-ref-num');
  const successRecapDetails = document.getElementById('success-recap-details');
  const btnNewRes = document.getElementById('btn-new-reservation');
  const submitBtn = document.getElementById('res-submit-btn');

  if (resDateInput) {
    const today = new Date().toISOString().split('T')[0];
    resDateInput.min = today;
  }

  function clearErrors() {
    document.querySelectorAll('.form-error-msg').forEach(msg => msg.textContent = '');
    document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePhone(phone) {
    const cleaned = phone.replace(/[\s\.\-\(\)]/g, '');
    return cleaned.length >= 8 && /^[\+]?[0-9]{8,15}$/.test(cleaned);
  }

  if (resForm) {
    resForm.addEventListener('submit', (e) => {
      e.preventDefault();
      clearErrors();

      const tErrors = translations[currentLang].res.errors;
      let isValid = true;
      let firstInvalidInput = null;

      // 1. Name Validation
      const nameInput = document.getElementById('res-name');
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        isValid = false;
        nameInput.classList.add('is-invalid');
        document.getElementById('err-name').textContent = tErrors.name;
        if (!firstInvalidInput) firstInvalidInput = nameInput;
      }

      // 2. Email Validation
      const emailInput = document.getElementById('res-email');
      if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
        isValid = false;
        emailInput.classList.add('is-invalid');
        document.getElementById('err-email').textContent = tErrors.email;
        if (!firstInvalidInput) firstInvalidInput = emailInput;
      }

      // 3. Phone Validation
      const phoneInput = document.getElementById('res-phone');
      if (!phoneInput.value.trim() || !validatePhone(phoneInput.value.trim())) {
        isValid = false;
        phoneInput.classList.add('is-invalid');
        document.getElementById('err-phone').textContent = tErrors.phone;
        if (!firstInvalidInput) firstInvalidInput = phoneInput;
      }

      // 4. Guests Validation
      const guestsInput = document.getElementById('res-guests');
      if (!guestsInput.value) {
        isValid = false;
        guestsInput.classList.add('is-invalid');
        document.getElementById('err-guests').textContent = tErrors.guests;
        if (!firstInvalidInput) firstInvalidInput = guestsInput;
      }

      // 5. Date Validation
      const dateInput = document.getElementById('res-date');
      if (!dateInput.value) {
        isValid = false;
        dateInput.classList.add('is-invalid');
        document.getElementById('err-date').textContent = tErrors.date;
        if (!firstInvalidInput) firstInvalidInput = dateInput;
      } else {
        const selectedDate = new Date(dateInput.value);
        const todayDate = new Date();
        todayDate.setHours(0, 0, 0, 0);
        if (selectedDate < todayDate) {
          isValid = false;
          dateInput.classList.add('is-invalid');
          document.getElementById('err-date').textContent = tErrors.pastDate;
          if (!firstInvalidInput) firstInvalidInput = dateInput;
        }
      }

      // 6. Time Validation
      const timeInput = document.getElementById('res-time');
      if (!timeInput.value) {
        isValid = false;
        timeInput.classList.add('is-invalid');
        document.getElementById('err-time').textContent = tErrors.time;
        if (!firstInvalidInput) firstInvalidInput = timeInput;
      }

      // 7. Privacy Consent
      const consentInput = document.getElementById('res-consent');
      if (!consentInput.checked) {
        isValid = false;
        document.getElementById('err-consent').textContent = tErrors.consent;
        if (!firstInvalidInput) firstInvalidInput = consentInput;
      }

      if (!isValid) {
        if (firstInvalidInput) {
          firstInvalidInput.focus();
        }
        return;
      }

      submitBtn.disabled = true;
      submitBtn.classList.add('loading');
      const submitTextEl = submitBtn.querySelector('.btn-text');
      const origText = submitTextEl.textContent;
      submitTextEl.textContent = translations[currentLang].res.btnSubmitting;

      setTimeout(() => {
        const randomNum = Math.floor(1000 + Math.random() * 9000);
        const refId = `IST-2026-${randomNum}`;
        successRefNum.textContent = refId;

        const tRecap = translations[currentLang].res.recap;
        successRecapDetails.innerHTML = `
          <div class="recap-row"><span class="recap-label">${tRecap.name} :</span><span class="recap-val">${nameInput.value.trim()}</span></div>
          <div class="recap-row"><span class="recap-label">${tRecap.email} :</span><span class="recap-val">${emailInput.value.trim()}</span></div>
          <div class="recap-row"><span class="recap-label">${tRecap.phone} :</span><span class="recap-val">${phoneInput.value.trim()}</span></div>
          <div class="recap-row"><span class="recap-label">${tRecap.date} :</span><span class="recap-val">${dateInput.value}</span></div>
          <div class="recap-row"><span class="recap-label">${tRecap.time} :</span><span class="recap-val">${timeInput.value}</span></div>
          <div class="recap-row"><span class="recap-label">${tRecap.guests} :</span><span class="recap-val">${guestsInput.value}</span></div>
        `;

        resForm.style.display = 'none';
        resSuccessBox.hidden = false;
        resSuccessBox.focus();

        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
        submitTextEl.textContent = origText;
      }, 650);
    });
  }

  if (btnNewRes) {
    btnNewRes.addEventListener('click', () => {
      resForm.reset();
      clearErrors();
      resSuccessBox.hidden = true;
      resForm.style.display = 'block';
      const nameInput = document.getElementById('res-name');
      if (nameInput) nameInput.focus();
    });
  }

  // ==========================================================================
  // 11. Photo Gallery & Lightbox Modal
  // ==========================================================================
  const galleryThumbnails = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  function openLightbox(index) {
    if (!lightboxModal) return;
    activeLightboxIndex = index;
    updateLightboxContent();
    lightboxModal.showModal();
    lightboxClose.focus();
  }

  function updateLightboxContent() {
    const item = galleryItems[activeLightboxIndex];
    if (!item) return;

    lightboxImg.src = item.img;
    lightboxImg.alt = item.caption[currentLang] || item.caption.fr;
    lightboxCaption.textContent = item.caption[currentLang] || item.caption.fr;
    lightboxCounter.textContent = `${activeLightboxIndex + 1} / ${galleryItems.length}`;
  }

  function nextLightbox() {
    activeLightboxIndex = (activeLightboxIndex + 1) % galleryItems.length;
    updateLightboxContent();
  }

  function prevLightbox() {
    activeLightboxIndex = (activeLightboxIndex - 1 + galleryItems.length) % galleryItems.length;
    updateLightboxContent();
  }

  function closeLightbox() {
    if (lightboxModal && lightboxModal.open) {
      lightboxModal.close();
    }
  }

  galleryThumbnails.forEach(item => {
    item.addEventListener('click', () => {
      const index = parseInt(item.getAttribute('data-index'), 10) || 0;
      openLightbox(index);
    });

    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const index = parseInt(item.getAttribute('data-index'), 10) || 0;
        openLightbox(index);
      }
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', nextLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevLightbox);

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });

    lightboxModal.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextLightbox();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevLightbox();
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    });
  }

  // ==========================================================================
  // 12. Modals (Legal, Privacy & Order Modals)
  // ==========================================================================
  const modalMentions = document.getElementById('modal-mentions');
  const modalPrivacy = document.getElementById('modal-privacy');
  const btnOpenMentions = document.getElementById('btn-open-mentions');
  const btnOpenPrivacy = document.getElementById('btn-open-privacy');

  if (btnOpenMentions && modalMentions) {
    btnOpenMentions.addEventListener('click', () => modalMentions.showModal());
  }

  if (btnOpenPrivacy && modalPrivacy) {
    btnOpenPrivacy.addEventListener('click', () => modalPrivacy.showModal());
  }

  document.querySelectorAll('.info-modal').forEach(modal => {
    const closeBtn = modal.querySelector('.modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => modal.close());
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.close();
      }
    });
  });

  // ==========================================================================
  // 13. Dynamic Copyright Year
  // ==========================================================================
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ==========================================================================
  // 14. Initial Language Setup
  // ==========================================================================
  setLanguage(currentLang);

});
