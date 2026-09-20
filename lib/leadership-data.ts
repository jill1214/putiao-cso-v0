export type Leader = {
  role: string
  name: string
  image?: string
  imagePosition?: string
  shortBio: string
  fullBio?: string[]
  quote?: string
}

const comingSoonBio = 'Photo and bio coming soon.'
const bioComingSoon = 'Bio coming soon.'

export const leaderData: Leader[] = [
  {
    role: 'President',
    name: 'Architect Levy O. Espinas',
    image: '/images/leadership/pres-levy.png',
    imagePosition: 'center 20%',
    quote: "If you plan, someone will build. And if it's build, they will come.",
    shortBio:
      'Founding President of PMPMH, CSO, Inc., and a licensed Environmental/Urban Planner and Architect with over three decades of experience in planning, architecture, and community development.',
    fullBio: [
      "LEVY O. ESPINAS, the founding CSO President, is a homegrown and spent his formative years in his hometown, Putiao Pilar. He is a licensed Environmental/Urban Planner, Architect and a Certified Berde Professional. He earned his BS Architecture at AUL/UST, holds Diploma in Urban & Regional Planning from UP SURP, Diploma in Real Estate Management from LaSalle CSB, and Diploma in Urban Infrastructure Planning and Management from Human Settlements Management Institute - New Delhi as a government scholar. His specialization covers Land Use Planning, Local Tourism Development Planning, Master Planning and Architecture.",
      'He has over three decades of practicing his profession both in private and in government, as Architect III of the Provincial Planning of Sorsogon and as Planning and Development Head of Daraga Town. He conducted Urban Development and Tourism Observation Tour in the Asian Megacities of Seoul, Kuala Lumpur, Putrajaya Garden City, Singapore, New Delhi, Mumbai, Hyderabad and Hongkong. His involvement in major proposals covering Urban and Regional Planning is recognized both by the Local and National Government.',
      'Levy O. Espinas was elevated to the College of Fellows (CoF) by the Philippine Institute of Environmental Planners (PIEP) in 2023, for his significant contribution to the planning profession. He is the founding president of PIEP Sorsogon Chapter 2018. Levy O. Espinas was likewise nominated as Member Emeritus of the United Architects of the Philippines (UAP) 2026 for his 35 years of service to the professional organization. He is the founding president of UAP Sorsogon Chapter 2000.',
      "In 2024, two years after his early retirement in government in 2022 and while actively practicing in private, he initiated the formation of the civil society organization together with the 'kabababayans'. The goals: Environmental Stewardship, Community Eco-tourism, Local Livelihood, and Urban Development.",
    ],
  },
  { role: 'VP, Philippine Affairs', name: 'Arch. Rodel Jay Lleva', shortBio: comingSoonBio },
  {
    role: 'VP, Foreign Affairs',
    name: 'Ms. Guia Lorin',
    image: '/images/leadership/guia-lorin.png',
    imagePosition: 'center 20%',
    shortBio: bioComingSoon,
  },
  {
    role: 'Secretary',
    name: 'Ruby L-Mendones Macasinag',
    shortBio:
      'Ruby L-Mendones Macasinag is an Associate Professor at Bicol University with extensive experience in development communication, public affairs, environmental research, and government service. She previously served the Department of Environment and Natural Resources in various research and public affairs roles and has co-authored publications on sustainable livelihood and environmental development. Her academic background includes Development Communication from UPLB, Public Management from DAP, and Communication from the University of Texas at El Paso. She also has deep personal roots in Putiao, where she spent much of her youth and was active in the Youth Association of Putiao and the church choir.',
    fullBio: [
      'Ruby L-Mendones Macasinag has deep personal ties to Putiao, having spent a significant part of her youth in the community from Grade 5 through her high school years while studying at BU Pilot Elementary School and BU High School. During this period, she served as secretary of the Youth Association of Putiao and was also a member of the church choir. Even after pursuing her college education at the University of the Philippines Los Baños, she continued to spend her vacations with family and friends in Putiao.',
      'Professionally, she has built a long career in development communication, environmental research, public affairs, and education. She joined the Department of Environment and Natural Resources in 1993 and served in several capacities, including Science Research Specialist in DENR Region IVA, Specialist II and Senior Science Research Specialist in Region V, and Chief of the Regional Public Affairs Office. In 2018, she transferred to Bicol University, where she currently serves as an Associate Professor.',
      'Her academic background includes a Bachelor of Science in Development Communication from the University of the Philippines Los Baños, a Master in Public Management from the Development Academy of the Philippines, and a Master of Arts in Communication from the University of Texas at El Paso, USA. She is also pursuing a PhD in Development Management at Bicol University, with her final defense scheduled soon.',
      'Ruby has also contributed to research and publications, including co-authoring Sustainable Livelihood Options for the Philippines in 1998, which covered forest, urban, and coastal ecosystems. Her professional journey reflects long-standing involvement in communication, public service, environmental development, education, and community engagement.',
    ],
  },
  { role: 'Treasurer', name: 'Dra. Phoebes Marifosque', shortBio: comingSoonBio },
  {
    role: 'Public Relations Officer',
    name: 'Angelo Mabini',
    image: '/images/leadership/angelo-mabini.jpeg',
    imagePosition: 'center 20%',
    shortBio:
      'Angelo Mabini is a digital marketing professional specializing in Google Ads, SEO, analytics, and paid media. With more than three years of experience managing search campaigns and digital marketing strategies for businesses in the United States, North America, and Australia, he brings a data-driven approach to communications, online visibility, and audience engagement.',
    fullBio: [
      'Angelo Mabini is a digital marketing professional with more than three years of experience specializing in Google Ads, search engine optimization, analytics, and performance marketing. He has managed search campaigns and SEO strategies for service-based businesses in the United States and North America, as well as an Australian ecommerce business, with a focus on improving online visibility, generating qualified leads, and supporting measurable business growth.',
      'His experience includes Google Ads campaign management, keyword research, search-term analysis, on-page and technical SEO, campaign troubleshooting, policy compliance, and performance recovery. He is also experienced in digital reporting and performance analysis using tools such as Google Analytics, Google Search Console, Google Sheets, and Asana.',
      'In addition to search marketing, Angelo has hands-on experience with Meta Ads, including campaign management, creative testing, performance monitoring, Events Manager, Meta Pixel, and Conversions API tracking. His work combines analytical decision-making with practical execution across paid advertising, search visibility, conversion tracking, and digital communications.',
    ],
  },
  { role: 'Director, Religious Affairs', name: 'Ma. Angela Marchan Pesebre', shortBio: comingSoonBio },
  { role: 'Director, Development & Infrastructure', name: 'Arch. Bea Endaya', shortBio: comingSoonBio },
  { role: 'Director, Entrepreneurship', name: 'Anthony Cesar Fortuno', shortBio: comingSoonBio },
  { role: 'Director, Youth Affairs', name: 'Saedne Shane G. Lubiano', shortBio: comingSoonBio },
  { role: 'Director, Environment, Culture & Tourism', name: 'Dr. Noemi L. Ibo', shortBio: comingSoonBio },
  {
    role: 'Director, Business Development',
    name: 'Antonio Tan',
    image: '/images/leadership/antonio-tan.png',
    imagePosition: 'center 20%',
    shortBio:
      'Antonio Tan is a seasoned industry professional with decades of leadership experience in quality assurance, research and development, manufacturing, and technology management across major food and beverage companies. His career includes senior roles at Del Monte Philippines, Universal Robina Corporation, Unilever Philippines, Splash Corporation, Quench Plus Corporation, and Tan Hiep Phat.',
    fullBio: [
      'Antonio Tan is an accomplished professional with extensive experience in quality assurance, research and development, manufacturing, and technology management in the food and beverage industry. Over the course of several decades, he has held key leadership roles in respected companies, contributing his expertise to product quality, process improvement, innovation, and operational development.',
      'His professional journey includes serving as Mfg Business Devt Manager at Del Monte Philippines from 2013 to 2021, AVP SRI at Splash Corporation, Valenzuela Plant from 2011 to 2013, and QA Director at Tan Hiep Phat, Binh Duong from 2010 to 2011. He also served as VP for R&D and QA at Quench Plus Corporation from 2009 to 2010, Group Technology Manager at Universal Robina Corporation from 1995 to 2009, QA Manager at Unilever Philippines from 1981 to 1993, and began his career in QA at Del Monte Philippines Inc. in 1981.',
      'In addition to his professional achievements, Antonio Tan studied at the Ateneo de Manila University, Ateneo-Regis Program, and at the University of the Philippines Los Baños. He also attended Holy Family Academy. His long-standing career reflects deep technical knowledge, leadership capability, and a strong commitment to excellence in the industry.',
    ],
  },
]
