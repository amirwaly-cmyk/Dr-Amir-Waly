// =====================================================================
// Site configuration — edit the PLACEHOLDER values below.
// All copy that references the doctor, clinic, or contact details
// reads from this file so updates only need to happen in one place.
// =====================================================================

export const site = {
  // Domain (no trailing slash)
  url: 'https://dramirwaly.com.au',

  // Doctor
  doctorName: 'Dr Amir Waly',
  doctorShortName: 'Dr Waly',
  qualifications: 'BPharm, MBBS, FRACGP',
  qualificationsLong: 'Bachelor of Pharmacy · Bachelor of Medicine, Bachelor of Surgery · Fellow of the Royal Australian College of General Practitioners',
  role: 'Independent Specialist Consultant General Practitioner',
  practiceDescriptor: 'Independent specialist general practice',
  // Registered business identifiers (shown in the footer + JSON-LD schema)
  abn: '40 630 049 599',
  ahpraNumber: 'MED0002079575',
  // Registered business entity (ABN-holding company). This is the legal
  // vehicle through which the practice operates — NOT a patient-visit location.
  // Patient consulting venues are listed separately (see `address` below).
  business: {
    name: 'Draw Group Pty Ltd',
    address: {
      line1: 'Suite 413',
      line2: '85 Whatley Crescent',
      suburb: 'Bayswater',
      state: 'WA',
      postcode: '6053',
      country: 'Australia',
    },
  },

  // Clinic
  clinicName: 'Rudloc Road Medical & Dental Centre',
  address: {
    line1: '40 Rudloc Road',
    line2: '',
    suburb: 'Morley',
    state: 'WA',
    postcode: '6062',
    country: 'Australia',
  },

  // Contact (clinic reception)
  phone: '(08) 6188 5555',
  phoneHref: 'tel:+61861885555',
  fax: '(08) 6188 5556',
  faxHref: 'tel:+61861885556',
  email: '[reception@dramirwaly.com.au]', // clinic does not publish a public email — confirm before launch
  emailHref: 'mailto:reception@dramirwaly.com.au',

  // Dr Waly's personal consulting sessions at the centre
  hours: [
    { day: 'Monday', time: '8:00am – 3:00pm' },
    { day: 'Tuesday', time: '8:00am – 3:00pm' },
    { day: 'Wednesday – Sunday', time: 'Not consulting' },
  ],

  // Booking / referrals
  bookingUrl: 'https://www.hotdoc.com.au/medical-centres/morley-WA-6062/rudloc-road-medical-dental-centre-morley/doctors/dr-amir-waly-10',
  referralEmail: '[referrals@dramirwaly.com.au]',
  referralEmailHref: 'mailto:referrals@dramirwaly.com.au',

  // Branding
  shortBrand: 'dramirwaly.com.au',

  // Geo (approximate — used in JSON-LD for local SEO)
  geo: {
    latitude: -31.8973,
    longitude: 115.9120,
  },

  // External profiles (used as `sameAs` in JSON-LD)
  sameAs: [
    'https://www.hotdoc.com.au/medical-centres/morley-WA-6062/rudloc-road-medical-dental-centre-morley/doctors/dr-amir-waly-10',
  ],

  // Education (used in Physician alumniOf schema)
  education: [
    { name: 'Curtin University', degree: 'Bachelor of Pharmacy (BPharm)' },
    { name: 'The University of Sydney', degree: 'Bachelor of Medicine, Bachelor of Surgery (MBBS)' },
    { name: 'Royal Australian College of General Practitioners', degree: 'Fellowship (FRACGP)' },
  ],

  // Default OG image (1200×630) used across pages
  ogImage: '/og-image.png',
} as const;

export type SiteConfig = typeof site;
