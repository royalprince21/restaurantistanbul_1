/**
 * Restaurant Istanbul — Dreux
 * Interactive JavaScript Engine
 * Language switching (FR/EN), Dynamic 6-category Menu, Accessible Reservation System,
 * Photo Gallery Lightbox, Modals, and Navigation interactions.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. Translation Dictionaries (Bilingual Engine)
  // ==========================================================================
  const translations = {
    fr: {
      meta: {
        title: "Restaurant Istanbul Dreux | Cuisine turque et méditerranéenne",
        description: "Découvrez Istanbul à Dreux : kebabs, lahmacuns, grillades et spécialités turques au 3 rue Saint-Thibault, 28100 Dreux."
      },
      nav: {
        subtitle: "Cuisine Turque · Dreux",
        home: "Accueil",
        cuisine: "Notre cuisine",
        menu: "Menu",
        gallery: "Galerie",
        reservation: "Réservation",
        contact: "Contact",
        findUs: "Nous trouver",
        bookTable: "Réserver une table"
      },
      hero: {
        eyebrow: "DREUX · CUISINE TURQUE & MÉDITERRANÉENNE",
        heading: "Un voyage de saveurs.<br>Au cœur de Dreux.",
        description: "« Des grillades généreuses aux incontournables de la cuisine turque, découvrez une cuisine conviviale inspirée par le goût du partage et les traditions méditerranéennes. »",
        btnMenu: "Découvrir la carte",
        btnBook: "Réserver une table",
        address: "3 rue Saint-Thibault · 28100 Dreux",
        tag: "Fait maison & Viandes grillées",
        caption: "Spécialités de grillades au feu & cuisine artisanale au quotidien."
      },
      intro: {
        label: "L'ESPRIT ISTANBUL",
        heading: "Le goût du partage, la générosité en plus.",
        description: "« Chez Istanbul, retrouvez les grands classiques de la cuisine turque et méditerranéenne dans un cadre chaleureux. Kebabs, lahmacun et grillades composent une cuisine généreuse, idéale pour un repas en famille ou entre amis. »",
        badgeText: "Saveurs Méditerranéennes",
        feat1Title: "Recettes Authentiques",
        feat1Desc: "Des marinades équilibrées aux herbes fraîches et épices d'Anatolie.",
        feat2Title: "Sur Place & À Emporter",
        feat2Desc: "Dégustez dans une ambiance conviviale ou commandez pour chez vous.",
        btnExplore: "Explorer notre carte"
      },
      values: {
        item1Title: "Authenticité",
        item1Desc: "Les grands classiques de la cuisine turque et méditerranéenne préparés selon le savoir-faire traditionnel.",
        item2Title: "Générosité",
        item2Desc: "Des spécialités gourmandes et des assiettes copieuses pour profiter pleinement de chaque repas.",
        item3Title: "Convivialité",
        item3Desc: "Une adresse accueillante au centre de Dreux pour se retrouver en famille ou entre amis."
      },
      menu: {
        eyebrow: "LA CARTE DU RESTAURANT",
        title: "Notre carte & nos spécialités",
        subtitle: "Retrouvez tous nos plats préparés à la commande. Des viandes sélectionnées, des pains cuits et des garnitures parfumées.",
        noticeTitle: "Formules & Accompagnements :",
        noticeDesc: "Tous nos Sandwichs en Menu sont servis avec Frites et Boisson 33 cl. Nos Assiettes sont servies avec frites, boulgour et riz.",
        cat1: "Kebabs & Sandwichs",
        cat2: "Grillades",
        cat3: "Assiettes Complètes",
        cat4: "Lahmacun & Pains Turcs",
        cat5: "Végétarien & Accompagnements",
        cat6: "Desserts & Boissons",
        childTitle: "Offre spéciale — Menu Enfant",
        childDesc: "Sandwich + frite + boisson (uniquement le midi)",
        suppTitle: "Suppléments à la demande",
        suppCheese: "Fromage",
        suppFries: "Frites",
        suppMeat: "Viande",
        suppMixte: "Assiette Mixte (viande supp.)",
        bookCta: "Réserver une table",
        solo: "Seul",
        menuLabel: "Menu",
        portion: "Portion"
      },
      showcase: {
        eyebrow: "SAVEURS & TRADITIONS",
        title: "De belles assiettes. Des saveurs généreuses.",
        quote: "« Le plaisir d'une cuisine inspirée des traditions turques, à partager au cœur de Dreux. »",
        badge1: "Viandes Marinées",
        badge2: "Boulgour & Riz Parfumés",
        badge3: "Pains & Lahmacun Minute"
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
        confirmationNotice: "Demande de réservation en ligne · Soumise à la validation de l'équipe du restaurant.",
        nameLabel: "Nom complet",
        emailLabel: "Adresse email",
        phoneLabel: "Numéro de téléphone",
        guestsLabel: "Nombre de convives",
        guestsSelect: "Sélectionnez le nombre de personnes",
        dateLabel: "Date souhaitée",
        timeLabel: "Heure souhaitée",
        timeSelect: "Sélectionnez un horaire",
        optLunch: "Service du midi",
        optDinner: "Service du soir",
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
        eyebrow: "NOUS TROUVER",
        title: "Restaurant Istanbul à Dreux",
        desc: "Situé au cœur de Dreux, notre établissement vous accueille chaleureusement pour un moment gourmand et convivial.",
        addressTitle: "Adresse",
        hoursTitle: "Horaires d'ouverture",
        hoursDesc: "Ouvert 7j/7 pour les services du midi et du soir. Commandes à emporter et service sur place.",
        servicesTitle: "Services",
        servicesDesc: "Restauration sur place, plats à emporter, formules midi et menus enfants.",
        btnMap: "Ouvrir dans Google Maps"
      },
      footer: {
        cuisine: "Cuisine Turque & Méditerranéenne · Dreux",
        btnBook: "Réserver une table",
        navTitle: "Navigation",
        infoTitle: "Informations",
        infoAddress: "Adresse :",
        infoFormula: "Formules :",
        infoService: "Options :",
        itinerary: "Itinéraire Google Maps →",
        legalTitle: "Transparence",
        legalDesc: "Restaurant Istanbul vous propose des spécialités turques faites dans le respect des traditions.",
        mentions: "Mentions Légales",
        privacy: "Politique de Confidentialité",
        allRights: "Tous droits réservés.",
        credit: "Cuisine turque et méditerranéenne au cœur de Dreux."
      },
      modal: {
        mentionsTitle: "Mentions Légales",
        privacyTitle: "Politique de Confidentialité"
      }
    },

    en: {
      meta: {
        title: "Restaurant Istanbul Dreux | Turkish & Mediterranean Cuisine",
        description: "Discover Istanbul in Dreux: kebabs, lahmacun, grilled specialties and authentic Turkish dishes at 3 rue Saint-Thibault, 28100 Dreux."
      },
      nav: {
        subtitle: "Turkish Cuisine · Dreux",
        home: "Home",
        cuisine: "Our Cuisine",
        menu: "Menu",
        gallery: "Gallery",
        reservation: "Reservation",
        contact: "Contact",
        findUs: "Find Us",
        bookTable: "Reserve a Table"
      },
      hero: {
        eyebrow: "DREUX · TURKISH & MEDITERRANEAN CUISINE",
        heading: "A culinary journey.<br>In the heart of Dreux.",
        description: "« From generous grilled specialties to the essentials of Turkish gastronomy, discover convivial dining inspired by the art of sharing and Mediterranean traditions. »",
        btnMenu: "Explore the Menu",
        btnBook: "Reserve a Table",
        address: "3 rue Saint-Thibault · 28100 Dreux",
        tag: "Homemade & Charcoal Grilled",
        caption: "Charcoal grill specialties & daily artisanal cooking."
      },
      intro: {
        label: "THE ISTANBUL SPIRIT",
        heading: "The joy of sharing, generosity included.",
        description: "« At Istanbul, rediscover the celebrated classics of Turkish and Mediterranean dining in a warm, welcoming atmosphere. Kebabs, lahmacun, and sizzling grill platters form a generous feast ideal for families and friends. »",
        badgeText: "Mediterranean Flavors",
        feat1Title: "Authentic Recipes",
        feat1Desc: "Balanced marinades infused with fresh herbs and Anatolian spices.",
        feat2Title: "Dine-In & Takeaway",
        feat2Desc: "Enjoy our welcoming dining room or take your favorites home.",
        btnExplore: "Discover Our Menu"
      },
      values: {
        item1Title: "Authenticity",
        item1Desc: "Classic Turkish and Mediterranean dishes prepared according to traditional culinary craft.",
        item2Title: "Generosity",
        item2Desc: "Abundant platters and rich specialties so you can savor every single moment of your meal.",
        item3Title: "Hospitality",
        item3Desc: "A warm and welcoming destination in central Dreux to gather with loved ones."
      },
      menu: {
        eyebrow: "RESTAURANT MENU",
        title: "Menu & Signature Dishes",
        subtitle: "All our dishes are prepared to order. Premium meats, freshly baked Turkish breads, and flavorful accompaniments.",
        noticeTitle: "Combos & Sides Included:",
        noticeDesc: "All our Sandwich Menus are served with French Fries and a 33cl Drink. Our Platters come with fries, bulgur, and rice.",
        cat1: "Kebabs & Sandwiches",
        cat2: "Grilled Specialties",
        cat3: "Full Platters",
        cat4: "Lahmacun & Turkish Breads",
        cat5: "Vegetarian & Sides",
        cat6: "Desserts & Drinks",
        childTitle: "Special Offer — Kids Menu",
        childDesc: "Sandwich + fries + drink (lunch only)",
        suppTitle: "Add-ons & Extras",
        suppCheese: "Cheese",
        suppFries: "Fries",
        suppMeat: "Meat",
        suppMixte: "Mixed Platter (extra meat)",
        bookCta: "Reserve a Table",
        solo: "Single",
        menuLabel: "Menu",
        portion: "Portion"
      },
      showcase: {
        eyebrow: "FLAVORS & HERITAGE",
        title: "Generous plates. Unforgettable flavors.",
        quote: "« The delight of dining inspired by Turkish traditions, crafted to be shared in the heart of Dreux. »",
        badge1: "Marinated Meats",
        badge2: "Fragrant Bulgur & Rice",
        badge3: "Freshly Baked Bread & Lahmacun"
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
        confirmationNotice: "Online reservation request · Subject to direct confirmation by the restaurant staff.",
        nameLabel: "Full Name",
        emailLabel: "Email Address",
        phoneLabel: "Phone Number",
        guestsLabel: "Number of Guests",
        guestsSelect: "Select party size",
        dateLabel: "Preferred Date",
        timeLabel: "Preferred Time",
        timeSelect: "Select time slot",
        optLunch: "Lunch service",
        optDinner: "Dinner service",
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
        eyebrow: "FIND US",
        title: "Restaurant Istanbul in Dreux",
        desc: "Located in central Dreux, our restaurant warmly welcomes you for a memorable, flavor-rich Mediterranean meal.",
        addressTitle: "Address",
        hoursTitle: "Opening Hours",
        hoursDesc: "Open 7 days a week for lunch and dinner. Takeaway orders and dine-in service available.",
        servicesTitle: "Services",
        servicesDesc: "Dine-in seating, takeaway meals, lunch specials, and children's menu.",
        btnMap: "Open in Google Maps"
      },
      footer: {
        cuisine: "Turkish & Mediterranean Cuisine · Dreux",
        btnBook: "Reserve a Table",
        navTitle: "Navigation",
        infoTitle: "Information",
        infoAddress: "Address:",
        infoFormula: "Options:",
        infoService: "Service:",
        itinerary: "Google Maps Directions →",
        legalTitle: "Transparency",
        legalDesc: "Restaurant Istanbul serves authentic Turkish specialties prepared with passion and tradition.",
        mentions: "Legal Notice",
        privacy: "Privacy Policy",
        allRights: "All rights reserved.",
        credit: "Turkish and Mediterranean cuisine in the heart of Dreux."
      },
      modal: {
        mentionsTitle: "Legal Notice",
        privacyTitle: "Privacy Policy"
      }
    }
  };

  // ==========================================================================
  // 2. Verified Menu Database (Exact Transcription Data)
  // ==========================================================================
  const menuDatabase = {
    kebabs: [
      {
        id: "keb-1",
        name: { fr: "Kebab Traditionnel", en: "Traditional Kebab" },
        desc: {
          fr: "Broche artisanale marinée, pain turc maison ou galette, crudités fraîches et sauce au choix.",
          en: "Seasoned spit-roasted meat in house bread or flatbread with crisp salad and your choice of sauce."
        },
        tag: { fr: "Incontournable", en: "House Classic" },
        pricing: { type: "dual", solo: "8.50 €", menu: "10.00 €" },
        img: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "keb-2",
        name: { fr: "Sandwich Américain", en: "American Steak Sandwich" },
        desc: {
          fr: "Steaks de bœuf hachés saisis, fromage fondant, oignons grillés et crudités croquantes.",
          en: "Seared ground beef patties, melted cheese, grilled onions, and fresh vegetables in crusty bread."
        },
        tag: { fr: "Gourmand", en: "Hearty" },
        pricing: { type: "dual", solo: "8.50 €", menu: "10.00 €" },
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "keb-3",
        name: { fr: "Sandwich Köfte", en: "Köfte Meatball Sandwich" },
        desc: {
          fr: "Boulettes artisanales de bœuf assaisonnées au cumin, persil plat et épices d'Orient.",
          en: "Spiced Turkish beef meatballs seasoned with cumin, fresh herbs, and Eastern aromas."
        },
        tag: { fr: "Fait Maison", en: "Homemade" },
        pricing: { type: "dual", solo: "8.50 €", menu: "10.00 €" },
        img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "keb-4",
        name: { fr: "Sandwich Poulet", en: "Marinated Chicken Sandwich" },
        desc: {
          fr: "Émincé de filets de poulet tendres marinés au paprika doux et herbes méditerranéennes.",
          en: "Tender chicken breast fillets marinated with sweet paprika and Mediterranean garden herbs."
        },
        tag: { fr: "Volaille", en: "Poultry" },
        pricing: { type: "dual", solo: "8.50 €", menu: "10.00 €" },
        img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "pan-1",
        name: { fr: "Panini Poulet", en: "Chicken Panini" },
        desc: {
          fr: "Pain croustillant grillé à cœur, poulet mariné tendre et fromage fondant.",
          en: "Toasted crusty ciabatta bread, tender marinated chicken, and melted cheese."
        },
        tag: { fr: "Panini Chaud", en: "Toasted Panini" },
        pricing: { type: "dual", solo: "5.00 €", menu: "7.00 €" },
        img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80"
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
        img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "pan-3",
        name: { fr: "Panini Sucuk", en: "Turkish Sucuk Panini" },
        desc: {
          fr: "Saucisse de bœuf turque relevée à l'ail et épices douces, avec fromage fondant.",
          en: "Authentic Turkish garlic-and-spice beef sausage (sucuk) paired with melted cheese."
        },
        tag: { fr: "Spécialité", en: "Specialty" },
        pricing: { type: "dual", solo: "5.00 €", menu: "7.00 €" },
        img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=700&q=80"
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
        img: "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=700&q=80"
      }
    ],

    grillades: [
      {
        id: "grill-1",
        name: { fr: "Côtelettes d'Agneau", en: "Grilled Lamb Chops" },
        desc: {
          fr: "Tendres côtelettes d'agneau fraîches saisies sur le grill, marinées aux herbes de garrigue.",
          en: "Fresh, succulent lamb chops flame-grilled with fragrant Mediterranean herbs."
        },
        tag: { fr: "Sélection du Boucher", en: "Butcher's Cut" },
        pricing: { type: "single", price: "15.00 €" },
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "grill-2",
        name: { fr: "Adana Kebab Grillé", en: "Adana Kebab Skewer" },
        desc: {
          fr: "Brochette traditionnelle d'agneau et bœuf hachés aux piments rouges doux d'Anatolie.",
          en: "Hand-minced lamb and beef mounted on wide skewers, seasoned with red pepper and sumac."
        },
        tag: { fr: "Spécialité Anatolie", en: "Anatolian Star" },
        pricing: { type: "single", price: "15.00 €" },
        img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "grill-3",
        name: { fr: "Brochette Grillée", en: "Flame-Grilled Brochette" },
        desc: {
          fr: "Morceaux choisis de viande tendre enfilés et dorés à la flamme, tendres et parfumés.",
          en: "Selected tender meat cubes flame-grilled on skewers until juicy and aromatic."
        },
        tag: { fr: "Grillade Feu", en: "Flame Grilled" },
        pricing: { type: "single", price: "15.00 €" },
        img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "grill-4",
        name: { fr: "Grillade Royale", en: "Royal Mixed Grill" },
        desc: {
          fr: "Le festin du chef réunissant côtelettes d'agneau, adana, poulet et viandes marinées.",
          en: "The chef's supreme assortment featuring lamb chops, adana skewer, chicken, and marinated meats."
        },
        tag: { fr: "Signature du Chef", en: "Chef Signature" },
        pricing: { type: "single", price: "20.00 €" },
        img: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=700&q=80"
      }
    ],

    assiettes: [
      {
        id: "ass-1",
        name: { fr: "Assiette Kebab", en: "Kebab Platter" },
        desc: {
          fr: "Généreuse portion de viande kebab dorée servie avec frites croustillantes, boulgour et riz.",
          en: "Abundant spit-roasted kebab meat accompanied by golden fries, traditional bulgur, and rice."
        },
        tag: { fr: "Complet & Généreux", en: "Generous Platter" },
        pricing: { type: "single", price: "15.00 €" },
        img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "ass-2",
        name: { fr: "Assiette Poulet", en: "Chicken Platter" },
        desc: {
          fr: "Morceaux de poulet tendrement marinés et grillés, avec frites, boulgour parfumé et riz.",
          en: "Marinated tender chicken fillets served with fries, fragrant Turkish bulgur, and rice."
        },
        tag: { fr: "Frites · Boulgour · Riz", en: "Fries · Bulgur · Rice" },
        pricing: { type: "single", price: "15.00 €" },
        img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "ass-3",
        name: { fr: "Assiette Köfte", en: "Köfte Platter" },
        desc: {
          fr: "Boulettes de bœuf grillées façon anatolienne, accompagnées de frites, boulgour et riz.",
          en: "Traditional spiced Turkish beef patties grilled to order, served with fries, bulgur, and rice."
        },
        tag: { fr: "Frites · Boulgour · Riz", en: "Fries · Bulgur · Rice" },
        pricing: { type: "single", price: "15.00 €" },
        img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "ass-4",
        name: { fr: "Assiette Royale", en: "Royal Platter" },
        desc: {
          fr: "L'expérience complète réunissant nos meilleures viandes, servies avec frites, boulgour et riz.",
          en: "The ultimate dining experience pairing an assortment of meats with fries, bulgur, and rice."
        },
        tag: { fr: "Festin Suprême", en: "Grand Feast" },
        pricing: { type: "single", price: "20.00 €" },
        img: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "barq-1",
        name: { fr: "Barquette Viande + Frites", en: "Meat & Fries Box" },
        desc: {
          fr: "Portion pratique de viande savoureuse accompagnée de frites dorées.",
          en: "A generous box of our seasoned kebab meat layered with golden French fries."
        },
        tag: { fr: "À Partager", en: "To Share" },
        pricing: { type: "single", price: "5.00 €" },
        img: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "barq-2",
        name: { fr: "Barquette Viande Seule", en: "Pure Meat Box" },
        desc: {
          fr: "Grande barquette de viande kebab marinée, idéale pour composer votre repas sur mesure.",
          en: "Large portion of seasoned spit-roasted meat, perfect for sharing or custom meals."
        },
        tag: { fr: "100% Viande", en: "100% Meat" },
        pricing: { type: "single", price: "10.00 €" },
        img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=700&q=80"
      }
    ],

    lahmacun: [
      {
        id: "lahm-1",
        name: { fr: "Lahmacun Seul", en: "Traditional Lahmacun" },
        desc: {
          fr: "Fine pâte croustillante cuite à haute température, garnie de viande hachée, tomates, poivrons et persil.",
          en: "Ultra-thin crispy Turkish flatbread baked with seasoned minced meat, herbs, tomatoes, and lemon."
        },
        tag: { fr: "Four Traditionnel", en: "Hearth Baked" },
        pricing: { type: "single", price: "4.00 €" },
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "lahm-2",
        name: { fr: "Lahmacun + Frites", en: "Lahmacun & Fries" },
        desc: {
          fr: "Le lahmacun traditionnel croustillant servi avec une portion de frites dorées.",
          en: "Traditional hot crispy lahmacun served alongside a fresh portion of golden French fries."
        },
        tag: { fr: "Formule Complète", en: "Flatbread & Fries" },
        pricing: { type: "single", price: "5.00 €" },
        img: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "lahm-3",
        name: { fr: "Lahmacun + Viande + Frites", en: "Loaded Lahmacun with Meat & Fries" },
        desc: {
          fr: "Lahmacun généreusement garni de viande kebab marinée et accompagné de frites croustillantes.",
          en: "Crispy lahmacun generously rolled with succulent kebab meat and served with hot fries."
        },
        tag: { fr: "Spécialité Maison", en: "Loaded Specialty" },
        pricing: { type: "single", price: "10.00 €" },
        img: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=700&q=80"
      }
    ],

    vegetarien: [
      {
        id: "sal-1",
        name: { fr: "Salade Composée à l'Avocat", en: "Mediterranean Avocado Salad" },
        desc: {
          fr: "Avocat crémeux, mesclun frais, tomates cerises, concombres et vinaigrette aux herbes.",
          en: "Fresh ripe avocado, mixed greens, sweet cherry tomatoes, cucumbers, and olive vinaigrette."
        },
        tag: { fr: "Fraîcheur & Bio", en: "Fresh & Green" },
        pricing: { type: "single", price: "7.00 €" },
        img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "sal-2",
        name: { fr: "Salade Composée au Thon", en: "Tuna Niçoise Salad" },
        desc: {
          fr: "Thon de qualité, mesclun croquant, maïs doux, tomates fraîches et assaisonnement maison.",
          en: "Selected tuna flakes, crisp garden greens, sweet corn, fresh tomatoes, and house dressing."
        },
        tag: { fr: "Fraîcheur Marine", en: "Sea Breeze" },
        pricing: { type: "single", price: "7.00 €" },
        img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80"
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
        img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "crud-1",
        name: { fr: "Poulet Crudités", en: "Chicken & Raw Veggies Sandwich" },
        desc: {
          fr: "Sandwich équilibré garni d'émincé de poulet et de légumes croquants du jour.",
          en: "Crisp and fresh sandwich loaded with tender chicken breast and garden salad."
        },
        tag: { fr: "Sandwich Frais", en: "Fresh Sub" },
        pricing: { type: "dual", solo: "5.00 €", menu: "7.00 €" },
        img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "crud-2",
        name: { fr: "Poulet Emmental", en: "Chicken & Emmental Sandwich" },
        desc: {
          fr: "Poulet mariné, tranches généreuses d'emmental et crudités fraîches.",
          en: "Marinated chicken breast, French Emmental cheese, and fresh garden salad."
        },
        tag: { fr: "Sandwich Frais", en: "Fresh Sub" },
        pricing: { type: "dual", solo: "5.00 €", menu: "7.00 €" },
        img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "crud-3",
        name: { fr: "Thon Crudités", en: "Tuna & Fresh Salad Sandwich" },
        desc: {
          fr: "Thon délicatement assaisonné, tomates mûres, salade et sauce légère.",
          en: "Delicately seasoned tuna salad, vine-ripened tomatoes, and fresh greens."
        },
        tag: { fr: "Sandwich Frais", en: "Fresh Sub" },
        pricing: { type: "dual", solo: "5.00 €", menu: "7.00 €" },
        img: "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "frit-1",
        name: { fr: "Barquette de Frites", en: "Golden French Fries" },
        desc: {
          fr: "Frites croustillantes et dorées à point, servies bien chaudes.",
          en: "Crispy, golden French fries salted to perfection and served piping hot."
        },
        tag: { fr: "Petite · Moyenne · Grande", en: "Small · Medium · Large" },
        pricing: { type: "sizes", petite: "2.00 €", moyenne: "2.50 €", grande: "3.00 €" },
        img: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=700&q=80"
      }
    ],

    desserts: [
      {
        id: "des-1",
        name: { fr: "Baklawa aux Pistaches", en: "Pistachio Honey Baklava" },
        desc: {
          fr: "Fine superposition de feuilles de pâte filo croustillantes, éclats de pistaches vertes et sirop délicat.",
          en: "Layered crispy filo pastry packed with crushed green pistachios and golden honey syrup."
        },
        tag: { fr: "Pâtisserie Orientale", en: "Turkish Sweet" },
        pricing: { type: "single", price: "3.00 €" },
        img: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "des-2",
        name: { fr: "Gâteau de Semoule", en: "Semolina Revani Cake" },
        desc: {
          fr: "Douceur traditionnelle orientale fondante et parfumée à la fleur d'oranger.",
          en: "Traditional golden semolina cake infused with orange blossom and light syrup."
        },
        tag: { fr: "Tradition", en: "Traditional" },
        pricing: { type: "single", price: "3.00 €" },
        img: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "des-3",
        name: { fr: "Tiramisu Maison", en: "Creamy Tiramisu" },
        desc: {
          fr: "Crème mascarpone légère et onctueuse sur biscuit imbibé d'un café doux.",
          en: "Velvety mascarpone cream layered over espresso-soaked ladyfingers and cocoa."
        },
        tag: { fr: "Onctueux", en: "Creamy" },
        pricing: { type: "single", price: "3.00 €" },
        img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "des-4",
        name: { fr: "Tarte au Daim", en: "Crunchy Daim Caramel Tart" },
        desc: {
          fr: "Base croustillante aux amandes surmontée de crème et de pépites de chocolat au caramel croquant.",
          en: "Almond crust topped with smooth cream and crunchy Swedish Daim milk chocolate caramel bits."
        },
        tag: { fr: "Chocolat & Caramel", en: "Caramel Crunch" },
        pricing: { type: "single", price: "3.00 €" },
        img: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "des-5",
        name: { fr: "Fondant au Chocolat", en: "Molten Chocolate Lava Cake" },
        desc: {
          fr: "Moelleux au cœur intensément coulant au chocolat noir pur cacao.",
          en: "Warm individual chocolate cake with an intensely rich melting dark cocoa center."
        },
        tag: { fr: "Cœur Coulant", en: "Molten Lava" },
        pricing: { type: "single", price: "3.00 €" },
        img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "boi-1",
        name: { fr: "Thé Traditionnel Turc", en: "Authentic Turkish Tea (Çay)" },
        desc: {
          fr: "Thé noir corsé et aromatique servi bien chaud dans un verre tulipe traditionnel.",
          en: "Robust, fragrant Turkish black tea brewed fresh and served in a classic curved glass."
        },
        tag: { fr: "Boisson Chaude", en: "Hot Tea" },
        pricing: { type: "single", price: "1.50 €" },
        img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "boi-2",
        name: { fr: "Canette 33 cl", en: "Soda Can 33 cl" },
        desc: {
          fr: "Sélection fraîche : Coca-Cola, Coca Zero, Fanta Orange, Orangina, Sprite.",
          en: "Chilled canned sodas: Coca-Cola, Coke Zero, Fanta, Orangina, Sprite."
        },
        tag: { fr: "Boisson Fraîche", en: "Cold Soda" },
        pricing: { type: "single", price: "1.50 €" },
        img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "boi-3",
        name: { fr: "Eau Minérale 50 cl (Cristaline)", en: "Mineral Water 50 cl (Cristaline)" },
        desc: {
          fr: "Bouteille d'eau de source Cristaline fraîche.",
          en: "Freshly chilled bottle of spring water."
        },
        tag: { fr: "Eau Pure", en: "Spring Water" },
        pricing: { type: "single", price: "1.00 €" },
        img: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "boi-4",
        name: { fr: "Bouteille Soda 50 cl", en: "Soda Bottle 50 cl" },
        desc: {
          fr: "Bouteille individuelle refermable de soda au choix.",
          en: "Resealable individual 50 cl soda bottle of your choice."
        },
        tag: { fr: "Boisson Fraîche", en: "Cold Soda" },
        pricing: { type: "single", price: "2.50 €" },
        img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "boi-5",
        name: { fr: "Boisson Énergisante Red Bull", en: "Red Bull Energy Drink" },
        desc: {
          fr: "Canette fraîche de Red Bull Energy Drink 25 cl.",
          en: "Chilled can of Red Bull Energy Drink 25 cl."
        },
        tag: { fr: "Énergie", en: "Energy" },
        pricing: { type: "single", price: "3.00 €" },
        img: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=700&q=80"
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
        fr: "Assortiment de grillades mixtes au feu de bois avec boulgour et légumes rôtis.",
        en: "Mixed flame-grilled meat platter with fragrant bulgur and roasted vegetables."
      }
    },
    {
      img: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=1200&q=80",
      caption: {
        fr: "Kebab artisanal tranché à la broche, servi dans notre pain frais et crudités.",
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
        fr: "Salle du restaurant Istanbul : une atmosphère chaleureuse au cœur de Dreux.",
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

  // Retrieve saved language from localStorage (or default to 'fr')
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

    // Persist in localStorage
    try {
      localStorage.setItem('restaurant_istanbul_lang', lang);
    } catch (e) {
      // Storage unavailable, ignore
    }

    // Update html lang attribute
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
        if (val.includes('<') && val.includes('>')) {
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
      if (inputPhone) inputPhone.placeholder = "e.g. +33 6 12 34 56 78";
      if (inputDiet) inputDiet.placeholder = "e.g. Halal, vegetarian, gluten-free...";
      if (inputNotes) inputNotes.placeholder = "Birthday, quiet table, high chair for infant...";
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
  // 6. Dynamic Menu Rendering & Category Tabs
  // ==========================================================================
  const menuGrid = document.getElementById('menu-grid');
  const menuTabs = document.querySelectorAll('.menu-tab-btn');

  function renderMenu(categoryKey, lang) {
    if (!menuGrid) return;
    const items = menuDatabase[categoryKey] || [];
    const t = translations[lang].menu;

    // Fade out transition
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

        html += `
          <article class="dish-card" id="dish-${dish.id}">
            <div class="dish-media">
              <img 
                src="${dish.img}" 
                alt="${dishName} - Restaurant Istanbul Dreux" 
                class="dish-img" 
                loading="lazy"
                width="360"
                height="200"
              >
              <span class="dish-tag">${dishTag}</span>
            </div>
            <div class="dish-content">
              <div class="dish-header">
                <h3 class="dish-name">${dishName}</h3>
              </div>
              <p class="dish-desc">${dishDesc}</p>
              <div class="dish-pricing-area">
                ${priceHtml}
              </div>
            </div>
          </article>
        `;
      });

      menuGrid.innerHTML = html;
      menuGrid.classList.remove('fade-out');
    }, 150);
  }

  // Category Tab Click Handlers
  menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetCategory = tab.getAttribute('data-category');
      if (targetCategory === currentCategory) return;

      // Update Tab Styles & ARIA
      menuTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      currentCategory = targetCategory;
      renderMenu(currentCategory, currentLang);
    });

    // Keyboard support for tabs (Arrow Left / Arrow Right)
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
  // 7. Sticky Header & Active Navigation Highlight
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

  // IntersectionObserver for active section highlight in navbar
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
  // 8. Mobile Navigation Drawer
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

    // Close when clicking any nav link
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!header.contains(e.target) && mobileDrawer.classList.contains('open')) {
        closeMobileMenu();
      }
    });
  }

  // ==========================================================================
  // 9. Interactive Reservation Form (Validation & Confirmation)
  // ==========================================================================
  const resForm = document.getElementById('reservation-form');
  const resDateInput = document.getElementById('res-date');
  const resSuccessBox = document.getElementById('reservation-success');
  const successRefNum = document.getElementById('success-ref-num');
  const successRecapDetails = document.getElementById('success-recap-details');
  const btnNewRes = document.getElementById('btn-new-reservation');
  const submitBtn = document.getElementById('res-submit-btn');

  // Prevent past dates in datepicker
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
    // Basic phone validation accepting French formats and international notation
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

      // Duplicate submission prevention & simulated submission state
      submitBtn.disabled = true;
      submitBtn.classList.add('loading');
      const submitTextEl = submitBtn.querySelector('.btn-text');
      const origText = submitTextEl.textContent;
      submitTextEl.textContent = translations[currentLang].res.btnSubmitting;

      setTimeout(() => {
        // Generate Realistic Request Reference
        const randomNum = Math.floor(1000 + Math.random() * 9000);
        const refId = `IST-2026-${randomNum}`;
        successRefNum.textContent = refId;

        // Render Summary Recap in Current Language
        const tRecap = translations[currentLang].res.recap;
        successRecapDetails.innerHTML = `
          <div class="recap-row"><span class="recap-label">${tRecap.name} :</span><span class="recap-val">${nameInput.value.trim()}</span></div>
          <div class="recap-row"><span class="recap-label">${tRecap.email} :</span><span class="recap-val">${emailInput.value.trim()}</span></div>
          <div class="recap-row"><span class="recap-label">${tRecap.phone} :</span><span class="recap-val">${phoneInput.value.trim()}</span></div>
          <div class="recap-row"><span class="recap-label">${tRecap.date} :</span><span class="recap-val">${dateInput.value}</span></div>
          <div class="recap-row"><span class="recap-label">${tRecap.time} :</span><span class="recap-val">${timeInput.value}</span></div>
          <div class="recap-row"><span class="recap-label">${tRecap.guests} :</span><span class="recap-val">${guestsInput.value}</span></div>
        `;

        // Switch to Confirmation View
        resForm.style.display = 'none';
        resSuccessBox.hidden = false;
        resSuccessBox.focus();

        // Reset submit button
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
        submitTextEl.textContent = origText;
      }, 700);
    });
  }

  // Handle "Make Another Request" Button
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
  // 10. Photo Gallery & Lightbox Modal
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

  // Close lightbox on backdrop click
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });

    // Keyboard navigation inside lightbox
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
  // 11. Legal Mentions & Privacy Policy Modals
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
    // Close button
    const closeBtn = modal.querySelector('.modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => modal.close());
    }

    // Close on backdrop click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.close();
      }
    });
  });

  // ==========================================================================
  // 12. Dynamic Copyright Year
  // ==========================================================================
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ==========================================================================
  // 13. Initial Setup Call
  // ==========================================================================
  setLanguage(currentLang);

});
