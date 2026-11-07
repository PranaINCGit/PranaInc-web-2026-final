import type { Dictionary } from "./es"

const en: Dictionary = {
  meta: {
    siteName: "PRANA · Incubator for Cultural and Creative Businesses",
    homeTitle: "PRANA · Business incubator for the cultural and creative economy in Bogotá",
    homeDescription:
      "Business incubator for the cultural and creative economy in Bogotá, Colombia, since 2003. Business plan training program, advisory, seed funding and institutional partnerships.",
    locale: "en_US",
  },
  a11y: {
    skip: "Skip to content",
    menu: "Open menu",
    closeMenu: "Close menu",
    mainNav: "Main navigation",
    language: "Change language",
    home: "PRANA, home",
    photoPending: "Reserved space for a photograph",
    comingSoon: "coming soon",
    newTab: "(opens in a new tab)",
    video: "Video testimonial from",
  },
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    course: "Training program",
    partners: "Partnerships",
    contact: "Contact",
    enroll: "Enroll",
    otherLang: "ES",
    otherLangName: "Español",
  },
  wa: {
    course: "Hi PRANA, I'd like to enroll in the Training program.",
    general: "Hi PRANA, I'd like to talk to you about my project.",
    partner: "Hi PRANA, I'm writing on behalf of an institution and we'd like to explore a partnership.",
  },
  common: {
    whatsapp: "Message us on WhatsApp",
    email: "Send us an email",
    seeCourse: "See the program",
    seeServices: "See services",
    seePartners: "Let's partner up",
    seeHistory: "See our full track record",
    dataNote:
      "Figures from 2016 to 2026, the last ten years recorded in our database. PRANA has worked with entrepreneurs since 2003.",
  },
  home: {
    eyebrow: "Business incubator for the cultural and creative economy · Bogotá, since 2003",
    title: ["Your creative craft", "can also be", "your business."],
    lead: "We train and mentor entrepreneurs in arts and heritage, cultural industries and functional creations. If you've tried before, you're not starting from zero: we structure your business model, your finances and your access to seed funding.",
    photoAlt:
      "Juan Carlos Gaitán and another PRANA advisor review a project with three entrepreneurs around a work table.",
    paths: {
      label: "Where would you like to start?",
      founder: {
        kicker: "I'm an entrepreneur",
        title: "I want to turn my idea into a business",
        cta: "Explore the training program",
      },
      institution: {
        kicker: "I represent an institution",
        title: "We need someone to train and mentor our beneficiaries",
        cta: "Explore partnerships",
      },
    },
    stats: {
      title: "PRANA in numbers",
      items: [
        { value: "23", unit: "years", label: "incubating businesses in the cultural and creative economy", scoped: false },
        { value: "90+", unit: "projects", label: "delivered with public and private organizations since 2004", scoped: false },
        { value: "12", unit: "winners", label: "of Fondo Emprender, Colombia's national seed fund, among our entrepreneurs", scoped: true },
        { value: "COP 1.2", unit: "billion", label: "raised by those winning projects", scoped: true },
      ],
    },
    how: {
      kicker: "How we work",
      title: "We don't hand you a formula. We help you find yours.",
      body: "Every venture arrives at a different stage. We start with a diagnosis and set the route: the full Training program, advisory by topic, or support to apply for funding calls such as Fondo Emprender.",
    },
    course: {
      kicker: "Training program",
      title: "Your business plan in six modules",
      body: "Six modules validated by SENA, Colombia's national training service. Each one develops a chapter of the business plan, and in the end they fit together like a puzzle: you finish with a complete document, ready to present to investors and funding calls.",
      facts: [
        { label: "Length", value: "3 months" },
        { label: "Schedule", value: "Tuesdays, Wednesdays and Thursdays" },
        { label: "Commitment", value: "At least 2 hours a week" },
        { label: "Tuition", value: "COP 2,500,000, with financing" },
      ],
      cta: "I want to enroll",
    },
    history: {
      kicker: "Track record",
      title: "23 years, four stages and the same question: how do we make this project last?",
    },
    testimonials: {
      kicker: "PRANA entrepreneurs",
      title: "People who've been here before you",
      body: "Some won seed funding from Fondo Emprender. Others consolidated their business without it. Here they tell it themselves, along with artists and collaborators who've worked with PRANA. Videos in Spanish.",
    },
    partners: {
      kicker: "Partners",
      title: "We work with",
    },
    bdf: {
      kicker: "Partner event",
      title: "Bogotá Design Festival",
      body: "A platform for discovering and experiencing Bogotá's creative industries through meetups, city tours and a packed design agenda. We've been part of the festival since 2019, and it's one of the doors we open for our entrepreneurs to reach new audiences.",
      imageAlt: "A woman walks down a Bogotá street past a shutter painted with the Bogotá Design Festival logo.",
    },
    closing: {
      title: "Got an idea and don't know where to start?",
      body: "Write to us. We'll set up an interview, in person or online, and walk you through the program, the commitments and the payment terms before you decide.",
    },
  },
  economy: {
    kicker: "Sectors",
    title: "Cultural and creative economy",
    lead: "We work with ventures in the three areas defined by Bogotá's Satellite Account for the Cultural and Creative Economy, produced by DANE (Colombia's national statistics office) and the city's Department of Culture, Recreation and Sport.",
    source: "Classification: Satellite Account for the Cultural and Creative Economy of Bogotá (DANE – SCRD).",
    areas: [
      {
        name: "Arts and heritage",
        segments: ["Visual arts", "Performing arts and live shows", "Tangible and intangible cultural heritage", "Cultural and creative education"],
      },
      {
        name: "Cultural industries",
        segments: ["Publishing", "Music recording", "Audiovisual: film, television and radio", "News agencies and other information services"],
      },
      {
        name: "Functional creations",
        segments: ["Design", "Advertising", "Digital media and content software"],
      },
    ],
  },
  services: {
    kicker: "Services",
    title: "Six ways we can work with you",
    lead: "Incubation services for ventures in the cultural and creative economy. Take one or follow the full route; it always starts with a diagnosis of your project.",
    forWhom: "Who it's for",
    includes: "What's included",
    items: [
      {
        id: "diagnostico",
        name: "Diagnosis",
        summary: "We assess your project and tell you honestly what stage it's at.",
        body: "We review your idea or running business: value proposition, customer segments, cost structure and revenue model. You leave with a priorities report.",
        forWhom: "Entrepreneurs who feel something isn't working but can't tell what.",
        includes: ["Initial interview", "Business model review", "Report with priorities and next steps"],
      },
      {
        id: "asesorias",
        name: "Advisory",
        summary: "Sessions on a specific topic: pricing, costs, branding, contracts or rights.",
        body: "When you already know what needs fixing, we work on it with you: marketing, management, accounting, strategic planning, copyright and industrial property.",
        forWhom: "Running projects with a specific need.",
        includes: ["One-on-one sessions", "Working materials", "Follow-up between sessions"],
      },
      {
        id: "formacion",
        name: "Training workshops",
        summary: "The Training program and workshops for groups.",
        body: "Our core offer is the six-module Training program. We also design workshops for groups of artists, cultural managers, teachers or students.",
        forWhom: "People who want to learn to manage their business from start to finish.",
        includes: ["Training program", "Tailored workshops", "Train-the-trainer programs"],
      },
      {
        id: "capital-semilla",
        name: "Seed funding search",
        summary: "We identify the right call and structure your application.",
        body: "Since 2016 we have been an External Unit authorized by SENA for Fondo Emprender. We know the evaluation criteria and prepare your project for that and other grant and funding calls.",
        forWhom: "Entrepreneurs with a business plan that's finished or in its final stage.",
        includes: ["Map of open calls", "Project structuring", "Pitch preparation"],
      },
      {
        id: "ejecucion",
        name: "Implementation support",
        summary: "Winning the funds is half the job. We help you deliver.",
        body: "Once the project starts, we stay with you: milestones, purchases, hiring and the reports the funding body requires.",
        forWhom: "Projects that have received funding or have an approved award.",
        includes: ["Implementation plan", "Follow-up meetings", "Help with reports"],
      },
      {
        id: "mercados",
        name: "New opportunities and markets",
        summary: "Connections with partners, fairs and markets in Colombia and abroad.",
        body: "We connect you with our network: Bogotá Design Festival, organizations in the cultural sector and, from 2026, partners in Southern Europe.",
        forWhom: "Operating businesses that want to expand their market.",
        includes: ["Introductions to partners", "Fairs and events", "Preparation for new markets"],
      },
    ],
    courseBand: {
      title: "Want the full route?",
      body: "The Training program brings diagnosis, advisory and the business plan together in six modules.",
    },
    closing: {
      title: "Not sure which one is for you?",
      body: "Tell us what stage your project is at and we'll tell you where to start.",
    },
  },
  course: {
    kicker: "Training program",
    title: "Six modules. One complete business plan.",
    lead: "Business management training for entrepreneurs in the cultural and creative economy. In 3 months you build your business plan: business model, organization, marketing, intellectual property and financial projections.",
    photoAlt: "Four participants talk and take notes during a working session.",
    forWhom: {
      title: "This program is for you if…",
      items: [
        "You have a venture in the cultural and creative economy, up and running or still an idea.",
        "You've tried to get it off the ground and it didn't go as planned.",
        "You're going to apply to Fondo Emprender or another seed funding call.",
        "You need support on your own case, not a generic class.",
      ],
    },
    modules: {
      title: "Curriculum",
      lead: "Six modules. Each one is a chapter of your business plan.",
      step: "Module",
      items: [
        {
          name: "Personal development plan",
          topics: ["Creativity and business", "Get to know yourself", "Build your business idea"],
        },
        {
          name: "Ideas in action",
          topics: [
            "The people who make it happen",
            "Staying in good company",
            "Organizational structures",
            "Activity planning",
            "Leadership and management",
            "Sales forecasting",
          ],
        },
        {
          name: "Business radar",
          topics: ["The magic of marketing", "Handling competition online"],
        },
        {
          name: "Build an innovative company",
          topics: [
            "Design and innovation awareness",
            "Corporate identity and communication strategy",
            "Value creation and trends",
          ],
        },
        {
          name: "Protecting your creativity",
          topics: [
            "Copyright, designs, trademarks and patents",
            "Industrial property",
            "Alternative ways to protect creative work",
          ],
        },
        {
          name: "Your accounts and your money",
          topics: [
            "Three ways to count your money: income and expenses, balance sheet and cash flow",
            "Economic activity and financial indicators",
            "Business viability",
          ],
        },
      ],
    },
    details: {
      title: "Terms",
      items: [
        { label: "Length", value: "3 months" },
        { label: "Schedule", value: "Tuesdays, Wednesdays and Thursdays" },
        { label: "Commitment", value: "At least 2 hours a week of independent work" },
        { label: "Tuition", value: "COP 2,500,000 per person" },
        { label: "Payment", value: "Installment plan, set during the interview" },
        { label: "Outcome", value: "A complete business plan" },
      ],
    },
    process: {
      title: "Enrollment",
      steps: [
        { title: "Write to us", body: "On WhatsApp or by email, with a short description of your project." },
        { title: "Interview", body: "In person or by video call, with the program director." },
        { title: "Terms", body: "We go over commitments, schedule and payment plan before enrollment." },
        { title: "Enrollment", body: "You formalize your place and start module 1 with the next cohort." },
      ],
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          q: "Do I need a registered company?",
          a: "No. You can come with an idea, an informal project or a business that already has sales. The business plan is built from where you are.",
        },
        {
          q: "What if I can't pay it all at once?",
          a: "We offer installment plans. The terms are set during the interview, before enrollment.",
        },
        {
          q: "Will you help me apply to Fondo Emprender?",
          a: "Yes. You finish with your business plan and, if you decide to apply, we support you in structuring the project.",
        },
        {
          q: "Can someone else or an organization pay the tuition?",
          a: "Yes. We accept tuition paid by relatives, foundations or international cooperation agencies. Write to us and we'll send you the invoicing details.",
        },
      ],
    },
    closing: {
      title: "The next step is a conversation.",
      body: "Write to us and we'll schedule your interview. The interview is free of charge.",
    },
  },
  about: {
    kicker: "About us",
    title: "We're a guide. The idea is still yours.",
    lead: "We are PRANA, a business incubator for the cultural and creative economy in Bogotá, Colombia. Since 2003 we have helped entrepreneurs in arts and heritage, cultural industries and functional creations turn their ideas into sustainable businesses.",
    story: {
      title: "Our story",
      photoAlt: "A PRANA working meeting with entrepreneurs around a round table, on a terrace full of plants.",
      paragraphs: [
        "PRANA started in 2003 with a very specific concern: many cultural and creative projects had talent to spare but didn't survive. They lacked training in marketing, management, accounting and planning. And almost always, they lacked seed money to get going.",
        "The early years were trial and error. We tested, got things wrong and learned more from the entrepreneurs than they did from us. Then came Colombia's Ministry of Culture, the large foundations and SENA, which chose us as one of its five External Units in Bogotá for Fondo Emprender.",
        "Today we work with people who have already tried, maybe failed, and know they'll keep building. We give them what was missing: someone who understands them and guides them without rushing.",
      ],
    },
    timeline: {
      title: "Our track record",
      lead: "More than 90 contracts, agreements and projects delivered since 2004, in seven stages.",
    },
    mission: {
      title: "Mission",
      body: "To guide entrepreneurs in the cultural and creative economy so their ideas become sustainable businesses, through training, advisory and access to funding.",
    },
    vision: {
      title: "Vision",
      body: "To take a model tested for more than twenty years in Bogotá to other cities in the Americas and Europe, while Bogotá remains our headquarters.",
    },
    values: {
      title: "What we don't compromise on",
      items: [
        { name: "Listen first", body: "Before we suggest anything, we understand the project and the person behind it." },
        { name: "Respect the idea", body: "We guide. We don't rewrite anyone's dream." },
        { name: "No rush", body: "Each process takes the time the entrepreneur needs." },
        { name: "Open to change", body: "We have experience, and that's exactly why we keep learning." },
      ],
    },
    team: {
      title: "Team",
      name: "Juan Carlos Gaitán",
      role: "Executive Director",
      bio: "He leads PRANA and personally conducts the admission interviews for the Training program. He has taken the incubator's experience to conferences in Argentina, Chile and Honduras, and is now preparing its arrival in Southern Europe.",
      photoAlt: "Portrait of Juan Carlos Gaitán, PRANA's executive director.",
    },
    gallery: {
      kicker: "Archive",
      title: "Two decades in photos",
      lead: "Workshops, trips to the regions, forums and festivals. A few images of what we've done since 2003.",
      items: [
        { src: "/images/archivo/encuentro-internacional.webp", alt: "Participants of the International Meeting on Tourism, Historical Heritage and Cultural Industries, in the courtyard of a colonial house.", caption: "International Meeting on Tourism, Historical Heritage and Cultural Industries" },
        { src: "/images/archivo/heroes-fest.webp", alt: "Three people pose in front of the Heroes Fest sponsor wall.", caption: "Heroes Fest" },
        { src: "/images/archivo/textiles.webp", alt: "Four people pose with a textile piece at an event." },
        { src: "/images/archivo/funcion-teatro.webp", alt: "Children watch a performing arts show." },
        { src: "/images/archivo/foro-pioneros.webp", alt: "Foro Pioneros participants pose in front of the stage.", caption: "Foro Pioneros" },
        { src: "/images/archivo/entrega-certificado.webp", alt: "An entrepreneur holds her certificate next to two people, in a garden." },
        { src: "/images/archivo/grupo-viaje.webp", alt: "A large group poses next to an airplane on a runway." },
        { src: "/images/archivo/conferencia.webp", alt: "A full auditorium during a conference, facing the projection screens." },
        { src: "/images/archivo/entrevista-radio.webp", alt: "Two people in a radio booth during an interview." },
        { src: "/images/archivo/encuentro-salon.webp", alt: "A group of attendees gathered in a hall during an event." },
        { src: "/images/archivo/entrevista-tv.webp", alt: "A woman is interviewed in front of a TV camera in a hall." },
      ],
    },
    partners: { title: "Partners" },
    closing: {
      title: "Want to build your venture with us?",
      body: "Explore our services or write to us directly.",
    },
  },
  timeline: [
    {
      period: "2003",
      image: "/images/trayectoria/2003.webp",
      imageAlt: "A group of people gathered around a work table with documents.",
      title: "PRANA is born",
      body: "We started with a simple idea: a cultural project also needs marketing, accounting and planning to last.",
    },
    {
      period: "2004–2008",
      image: "/images/trayectoria/2004-2008.webp",
      imageAlt: "Six people pose in a hall during an event.",
      title: "Trial and error",
      body: "First contracts with Bogotá's District Institute of Culture and Tourism and UNDP. Agreements with SENA and technical papers on arts education for the Ministry of Education.",
    },
    {
      period: "2009–2012",
      image: "/images/trayectoria/2009-2012.webp",
      imageAlt: "Two people pose next to a painted chiva bus in a rural area.",
      title: "Training in the regions",
      body: "With the Ministry of Culture and SENA we trained entrepreneurs and trainers on Colombia's Pacific and Caribbean coasts. Talks in Buenos Aires and Valparaíso, and technical assistance in Honduras with the United Nations.",
    },
    {
      period: "2012–2015",
      image: "/images/trayectoria/2012-2015.webp",
      imageAlt: "A man stands in a classroom with seated participants.",
      title: "Foundations and seed funding",
      body: "17 projects with Colciencias and 3 with iNNpulsa in video games, digital animation, design and music. Work with the Corona, Bavaria, Bolívar Davivienda and Social foundations. UBI Global recognizes our incubation program.",
    },
    {
      period: "2016–2023",
      image: "/images/trayectoria/2016-2023.webp",
      imageAlt: "Attendees at a SENA Fondo Emprender event.",
      title: "SENA External Unit",
      body: "SENA authorizes us as an External Unit for Fondo Emprender. With AECID and Factoría Cultural Madrid we trained 200 women in Bogotá in digital tools. Since 2019 we have organized Bogotá Design Festival.",
    },
    {
      period: "2024–2025",
      image: "/images/trayectoria/2024-2025.webp",
      imageAlt: "A group of participants gathered in a room with large windows.",
      title: "New partnerships",
      body: "Joint work with Corporación Manos Visibles and Pontificia Universidad Javeriana. We signed the Diseño Iberoamérica framework agreement and backed a new Fondo Emprender winner: Baula.",
    },
    {
      period: "2026",
      image: "/images/alianzas/certificado-analitica-datos.webp",
      imageAlt: "Certificate of completion awarded to PRANA for the program Activa tu negocio con mentoría en Analítica de datos.",
      contain: true,
      title: "Expansion",
      body: "With a proven model, we begin taking PRANA to Southern Europe. Bogotá remains our headquarters. We also completed Activa tu negocio con mentoría en Analítica de datos, a program from Bogotá's Secretariat of Economic Development.",
    },
  ],
  bdf: {
    name: "Bogotá Design Festival",
    cta: "Bogotá Design Festival, Plataforma Creativa",
    url: "https://www.bogotadesignfestival.co/",
  },
  testimonials: [
    { id: "liliana-silva", name: "Liliana Silva", role: "First Fondo Emprender winner with PRANA", duration: "0:59" },
    { id: "mario-montenegro", name: "Mario Montenegro", role: "Fondo Emprender winner", duration: "0:19" },
    { id: "alonso-restrepo", name: "Alonso Restrepo", role: "Entrepreneur", duration: "2:02" },
    { id: "angel-acevedo", name: "Ángel Acevedo", role: "Visual artist", duration: "0:28" },
    { id: "magda-galeano", name: "Magda Galeano", role: "PRANA collaborator", duration: "0:48" },
  ],
  partners: {
    kicker: "Partnerships",
    title: "Your funding, in the hands of people who turn it into businesses.",
    lead: "For 23 years, ministries, foundations, universities and cooperation agencies have trusted us to train and mentor entrepreneurs in the cultural and creative economy. We manage their funds with targets, follow-up and reporting.",
    photoAlt: "A group poses on stage at Bogotá Design Festival 2020.",
    certificate: {
      kicker: "Certification 2026",
      title: "Data analytics for better decisions",
      body: "PRANA completed Activa tu negocio con mentoría en Analítica de datos, a 45-hour capacity-building program from Bogotá's Secretariat of Economic Development. The program covered collecting, analyzing and interpreting data for strategic decisions.",
      imageAlt: "Certificate of completion awarded to PRANA Incubadora de Empresas for the 45-hour program Activa tu negocio con mentoría en Analítica de datos.",
    },
    bdf: {
      kicker: "Partner event",
      title: "Bogotá Design Festival",
      body: "We've been part of the Bogotá Design Festival since 2019. It brings together designers, companies and institutions around the city's creative industries.",
      body2: "For partner institutions it's a showcase: the projects we support together can meet audiences, buyers and other companies in the sector there.",
      photos: [
        { src: "/images/bdf/bdf-2019-auditorio.webp", alt: "A full auditorium at the opening of Bogotá Design Festival 2019." },
        { src: "/images/bdf/bdf-2019-conversatorio.webp", alt: "A panel talk on stage at Bogotá Design Festival 2019." },
      ],
    },
    proof: {
      title: "What backs our work",
      items: [
        { value: "9.5", label: "pesos raised by winning projects for every peso billed in training", scoped: true },
        { value: "8 of 12", label: "Fondo Emprender winners are women", scoped: true },
        { value: "90+", label: "contracts and agreements delivered since 2004", scoped: false },
        { value: "3", label: "countries outside Colombia where we've given talks or technical assistance", scoped: false },
      ],
    },
    offer: {
      title: "How we work with institutions",
      items: [
        {
          name: "Partner cohorts",
          body: "We train a group of your beneficiaries, students or alumni through the Training program, at an institutional rate.",
        },
        {
          name: "Train the trainers",
          body: "We prepare your teams to teach cultural and creative entrepreneurship in their region, as we did with the Ministry of Culture and SENA.",
        },
        {
          name: "Project and grant evaluation",
          body: "We assess and select cultural projects against technical criteria. In 2023 we evaluated 94 projects for the Department of Culture of Marinilla.",
        },
        {
          name: "Application support",
          body: "We structure projects for seed funds and support them through implementation, with follow-up and reporting.",
        },
      ],
    },
    trackRecord: {
      title: "Who we've worked with",
      groups: [
        {
          name: "Public sector",
          items: ["Ministry of Culture", "Ministry of National Education", "Ministry of ICT", "SENA", "Colciencias", "iNNpulsa", "Bogotá Department of Culture, Recreation and Sport", "Atenea"],
        },
        {
          name: "International cooperation",
          items: ["AECID", "UNDP", "IOM", "British Council", "Andrés Bello Agreement"],
        },
        {
          name: "Foundations and companies",
          items: ["Fundación Social", "Fundación Bolívar Davivienda", "Fundación Gilberto Alzate Avendaño", "Corporación Manos Visibles", "Bogotá Chamber of Commerce"],
        },
        {
          name: "Academia",
          items: ["Pontificia Universidad Javeriana", "Universidad Jorge Tadeo Lozano"],
        },
      ],
    },
    europe: {
      kicker: "From 2026",
      title: "From Bogotá to Southern Europe",
      body: "Spain, Italy, Portugal, France and Greece have a lot in common with us. That's where our expansion begins, with a main office in Spain and local partners in each country. Our headquarters stay in Bogotá.",
    },
    closing: {
      title: "Let's talk about what your institution needs.",
      body: "Write to us and we'll set up a meeting to review goals, target population and budget.",
    },
  },
  contactPage: {
    kicker: "Contact",
    title: "Write to us. A person will answer, not a bot.",
    lead: "WhatsApp is the fastest way. You can also visit our office in Chapinero, Bogotá.",
    channels: {
      whatsapp: "WhatsApp",
      phone: "Phone",
      email: "Email",
      address: "Address",
      hours: "Opening hours",
    },
    hours: ["Monday to Friday, 9:00 a.m. – 5:00 p.m.", "Saturday, 9:00 a.m. – 1:00 p.m."],
    openMap: "Open in Google Maps",
    mapTitle: "Map of PRANA's office in Chapinero, Bogotá",
  },
  footer: {
    tagline: "Incubator for Cultural and Creative Businesses. Bogotá, since 2003.",
    explore: "Explore",
    visit: "Visit us",
    talk: "Get in touch",
    social: "Social",
    rights: "All rights reserved.",
  },
}

export default en
