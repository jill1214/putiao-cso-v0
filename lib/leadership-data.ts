export type Leader = {
  role: string
  name: string
  image?: string
  imagePosition?: string
  shortBio: string
  fullBio?: string[]
}

const defaultBio = 'Gateway between Albay and Sorsogon. Putiao is a community worth discovering.'

export const leaderData: Leader[] = [
  {
    role: 'President',
    name: 'Architect Levy O. Espinas',
    image: '/images/leadership/pres-levy.png',
    imagePosition: 'center 20%',
    shortBio:
      'Founding President of PMPMH, CSO, Inc., and a licensed Environmental/Urban Planner and Architect with over three decades of experience in planning, architecture, and community development.',
    fullBio: [
      "LEVY O. ESPINAS, the founding CSO President, is a homegrown and spent his formative years in his hometown, Putiao Pilar. He is a licensed Environmental/Urban Planner, Architect and a Certified Berde Professional. He earned his BS Architecture at AUL/UST, holds Diploma in Urban & Regional Planning from UP SURP, Diploma in Real Estate Management from LaSalle CSB, and Diploma in Urban Infrastructure Planning and Management from Human Settlements Management Institute - New Delhi as a government scholar. His specialization covers Land Use Planning, Local Tourism Development Planning, Master Planning and Architecture.",
      'He has over three decades of practicing his profession both in private and in government, as Architect III of the Provincial Planning of Sorsogon and as Planning and Development Head of Daraga Town. He conducted Urban Development and Tourism Observation Tour in the Asian Megacities of Seoul, Kuala Lumpur, Putrajaya Garden City, Singapore, New Delhi, Mumbai, Hyderabad and Hongkong. His involvement in major proposals covering Urban and Regional Planning is recognized both by the Local and National Government.',
      'Levy O. Espinas was elevated to the College of Fellows (CoF) by the Philippine Institute of Environmental Planners (PIEP) in 2023, for his significant contribution to the planning profession. He is the founding president of PIEP Sorsogon Chapter 2018. Levy O. Espinas was likewise nominated as Member Emeritus of the United Architects of the Philippines (UAP) 2026 for his 35 years of service to the professional organization. He is the founding president of UAP Sorsogon Chapter 2000.',
      "In 2024, two years after his early retirement in government in 2022 and while actively practicing in private, he initiated the formation of the civil society organization together with the 'kabababayans'. The goals: Environmental Stewardship, Community Eco-tourism, Local Livelihood, and Urban Development.",
    ],
  },
  { role: 'VP, Philippine Affairs', name: 'Arch. Rodel Jay Lleva', shortBio: defaultBio },
  { role: 'VP, Foreign Affairs', name: 'Ms. Guia Lorin', shortBio: defaultBio },
  { role: 'Secretary', name: 'Ruby L-Mendones Macasinag', shortBio: defaultBio },
  { role: 'Treasurer', name: 'Dra. Phoebes Marifosque', shortBio: defaultBio },
  { role: 'Public Relations Officer', name: 'Angelo Mabini', shortBio: defaultBio },
  { role: 'Director, Religious Affairs', name: 'Ma. Angela Marchan Pesebre', shortBio: defaultBio },
  { role: 'Director, Development & Infrastructure', name: 'Arch. Bea Endaya', shortBio: defaultBio },
  { role: 'Director, Entrepreneurship', name: 'Anthony Cesar Fortuno', shortBio: defaultBio },
  { role: 'Director, Youth Affairs', name: 'Saedne Shane G. Lubiano', shortBio: defaultBio },
  { role: 'Director, Environment, Culture & Tourism', name: 'Dr. Noemi L. Ibo', shortBio: defaultBio },
]
