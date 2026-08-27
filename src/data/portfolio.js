/**
 * ============================================================
 *  SEMUA KONTEN WEBSITE ADA DI FILE INI.
 *  Edit di sini saja — komponen tidak perlu disentuh.
 * ============================================================
 */

export const profile = {
  name: 'Denni Afredo',
  firstName: 'Denni',
  lastName: 'Afredo',
  logo: 'DENNI_AFREDO',
  badge: 'SYSTEM_READY: PORTFOLIO_V2.0',
  role: 'Software Engineer',
  bio: 'Passionate about building scalable, reliable, and user-focused applications. Turning complex business requirements into simple, maintainable, and impactful software solutions.',
  email: 'denniafredo@gmail.com',
  location: 'Indonesia',
  availability: 'Open for freelance & full-time',
  resumeUrl: '', // contoh: '/denni-afredo-cv.pdf' — kosongkan untuk menyembunyikan tombol
};

export const navLinks = [
  { id: 'hero', label: './about' },
  { id: 'experience', label: './experience' },
  { id: 'projects', label: './projects' },
  { id: 'contact', label: './contact' },
];

/* ---------------------------------------------------------------
 *  SECTION: ABOUT
 *  Angka di `stats` diturunkan dari isi file ini sendiri, jadi kalau
 *  nambah project / pengalaman / stack, sesuaikan juga angkanya.
 * --------------------------------------------------------------- */
export const about = {
  cover: '/images/about-cover.jpg',
  scrollHint: ['SCROLL DOWN TO SEE', 'MY JOURNEY'],
  scrollTarget: 'experience',
};

export const stats = [
  { value: '07+', label: 'Years of Experience' },  // Apr 2019 -> sekarang
  { value: '12+', label: 'Projects Delivered' },   // 7 di portfolio + MTFA, absence scheduler, Salesforce integration, Commit Order, migrasi backoffice, dashboard QlikView
  { value: '03', label: 'Companies' },             // InterAktiv, IFG Life, Indomaret Group
  { value: '04', label: 'Roles Held' },            // Full Stack Dev, Software Engineer, Fullstack Dev, BI Developer
  { value: '02', label: 'Countries' },             // Singapore, Indonesia
  { value: '15', label: 'Technologies' },          // panjang array `stack` di bawah
];

/**
 * Struktur experience: satu objek = satu perusahaan, `roles` = jabatan
 * di perusahaan itu (bisa lebih dari satu kalau pernah naik jabatan).
 * TODO: `points` & `skills` di bawah baru ambil yang kelihatan di LinkedIn —
 * lengkapi bullet yang masih ke-truncate ("...more") dan skill tersembunyi.
 */
export const experiences = [
  {
    id: 'interaktiv',
    company: 'InterAktiv Technology Pte Ltd',
    type: 'Full-time',
    location: 'Singapore · Remote',
    period: 'JUN 2023 - PRESENT',
    current: true,
    roles: [
      {
        id: 'interaktiv-fullstack',
        role: 'Full Stack Developer',
        period: 'JUN 2023 - PRESENT',
        points: [
          'Built a data ingestion car part using AI.',
          'Built a charity portal for temple.',
          'Built a scheduled system for daily absence tracking using Express.js and Sequelize.',
          'Developed a case management system for ex-convict workers in Singapore.',
          'Manage Salesforce CRM and integrated it with the company’s internal systems.',
        ],
        skills: ['Express.js', 'Sequelize.js', 'Node.js', 'Salesforce', 'Apex', 'Visualforce'],
      },
    ],
  },
  {
    id: 'ifg-life',
    company: 'IFG Life',
    type: 'Contract',
    location: 'South Jakarta, Indonesia',
    period: 'SEP 2022 - MAY 2023',
    roles: [
      {
        id: 'ifg-life-software-engineer',
        role: 'Software Engineer',
        period: 'SEP 2022 - MAY 2023',
        points: [
          'Developed and deployed new releases for the core insurance platform.',
          'Managed project scope before, during, and post-delivery.',
        ],
        skills: ['CodeIgniter', 'Git', 'MySQL', 'PostgreSQL', 'Docker', 'Linux'],
      },
    ],
  },
  {
    id: 'indomaret',
    company: 'Indomaret Group',
    type: 'Full-time',
    location: 'Jakarta, Indonesia',
    period: 'APR 2019 - SEP 2022',
    roles: [
      {
        id: 'indomaret-fullstack',
        role: 'Fullstack Developer',
        period: 'AUG 2020 - SEP 2022',
        points: [
          'Built and maintained the Commit Order application.',
          'Lead the migration of the back office application.',
        ],
        skills: ['PostgreSQL', 'Oracle Database', 'Laravel', 'CodeIgniter', 'Node.js', 'React', 'Vue.js', 'Docker'],
      },
      {
        id: 'indomaret-bi',
        role: 'Business Intelligence Developer',
        period: 'APR 2019 - AUG 2020',
        points: [
          'Handled data processing for operational reporting.',
          'Built and maintained business dashboards with QlikView BI.',
        ],
        skills: ['QlikView', 'Oracle Database'],
      },
    ],
  },
];

/**
 * Gambar galeri tiap project ditaruh di:
 *   public/images/projects/<id-project>/<nama-file>
 * Cukup daftarkan NAMA FILE-nya saja di array `gallery` di bawah -
 * jumlahnya bebas, grid-nya menyesuaikan sendiri. Nama file juga
 * dipakai sebagai caption di bawah setiap gambar.
 *
 * `projects`      -> tampil sebagai kartu besar (project unggulan)
 * `moreProjects`  -> tampil sebagai accordion di bawahnya
 * Mau menukar posisi? Cukup pindahkan objeknya antar dua array ini.
 */
export const galleryBase = '/images/projects';

// ---------------------------------------------------------------- KARTU
export const projects = [
  {
    id: 'captiv8',
    title: 'Captiv8',
    subtitle: 'Automotive Parts Inventory System',
    description:
      'Warehouse inventory system for automotive parts, with AI-assisted data capture from part photos.',
    overview:
      'Warehouse inventory system for automotive parts. Staff photograph a part, the system extracts its attributes automatically, and a reviewer verifies the record before it is assigned to a bin location. Batch processing keeps large intake runs organised, so stock data stays accurate across the warehouse.',
    tags: ['Node.js', 'Express.js', 'Sequelize', 'AI Extraction'],
    image: '/images/project-captiv8.jpg',
    cover: '/images/project-captiv8.jpg',
    details: [
      { key: 'ROLE', value: 'Fullstack Developer' },
      { key: 'DURATION', value: 'Running', note: '-' },
    ],
    gallery: [
      'inventory-view.png',
      'photo-capture.png',
      'product-record.png',
      'batch-detail.png',
    ],
    liveUrl: 'https://ivms.captiv8.ch/login',
    repoUrl: '',
  },
  {
    id: 'pes',
    title: 'PES',
    subtitle: 'Temple POS & Donation System',
    description:
      'Bilingual point-of-sale and donation system for a Buddhist temple in Singapore.',
    overview:
      'Bilingual (English / 中文) point-of-sale and donation system for Poh Ern Shih Temple, Singapore. Staff take orders for offerings and prayer services from a catalogue, settle them via PayNow, cash, or card, and devotees can donate through a separate flow with their own receipt and record.',
    tags: ['Node.js', 'Express.js', 'Sequelize', 'PayNow', 'Bilingual UI'],
    image: '/images/project-pes.jpg',
    cover: '/images/project-pes.jpg',
    details: [
      { key: 'ROLE', value: 'Fullstack Developer' },
      { key: 'DURATION', value: '6 months', note: '-' },
    ],
    gallery: [
      'login.png',
      'staff-profile.png',
      'product-catalogue.png',
      'order-checkout.png',
      'donation-form.png',
    ],
    liveUrl: '',
    repoUrl: '',
  },
  {
    id: 'jhh',
    title: 'JHH',
    subtitle: 'CRM System (Ex-prisoner)',
    description:
      'CRM system for handling case records and rehabilitation programs for ex-prisoners.',
    overview:
      'CRM system for handling case records and rehabilitation programs for ex-prisoners. Centralises client history, program progress, and follow-up scheduling so case workers can track outcomes over time.',
    tags: ['Node.js', 'Express.js', 'Sequelize', 'Dashboard Analytics'],
    image: '/images/project-jhh.jpg',
    cover: '/images/project-jhh.jpg',
    details: [
      { key: 'ROLE', value: 'Fullstack Developer' },
      { key: 'DURATION', value: '12 months', note: '-' },
    ],
    gallery: ['intake-list.png', 'visitor-log.png', 'dashboard.png'],
    liveUrl: '',
    repoUrl: '',
  },
  {
    id: 'phm',
    title: 'PHM',
    subtitle: 'Field Sales Mobile App',
    description:
      'Mobile app for field sales teams: GPS visit check-in, sales orders, invoices, and receivables tracking.',
    overview:
      'Mobile app used by salesmen in the field. Each store visit is checked in with GPS so supervisors can verify coverage, while sales orders and invoices are handled on the same device. Supervisors get receivables broken down by ageing bucket and a target-vs-achievement leaderboard per salesman.',
    tags: ['Flutter', 'Dart', 'REST API', 'GPS Tracking'],
    image: '/images/project-phm.jpg',
    cover: '/images/project-phm.jpg',
    details: [
      { key: 'ROLE', value: 'Fullstack Developer' },
      { key: 'DURATION', value: '3 months', note: '-' },
    ],
    // Aplikasi mobile -> screenshot potrait, jangan di-crop.
    galleryFit: 'contain',
    gallery: [
      'home-dashboard.jpeg',
      'sales-order.jpeg',
      'invoice-list.jpeg',
      'salesman-performance.jpeg',
      'visit-checkin.jpeg',
      'profile.jpeg',
    ],
    liveUrl: '',
    repoUrl: '',
  },
];

// ------------------------------------------------------------ ACCORDION
export const moreProjects = [
  {
    id: 'buana-motor',
    title: 'Buana Motor',
    subtitle: 'Bearing Supplier Company Profile',
    description:
      'Company profile site for a bearing supplier, with a product catalogue and inquiry flow.',
    overview:
      'Company profile site for a bearing supplier, with a product catalogue and inquiry flow. Focused on making the product range easy to browse and getting enquiries to the sales team quickly.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/project-buana-motor.jpg',
    cover: '/images/project-buana-motor.jpg',
    details: [
      { key: 'ROLE', value: 'Fullstack Developer' },
      { key: 'DURATION', value: '1 month', note: '-' },
    ],
    gallery: ['home.png', 'product-catalogue.png'],
    liveUrl: 'https://buanamotorbearing.com/en',
    repoUrl: '',
  },
  {
    id: 'klh',
    title: 'Kementerian Lingkungan Hidup',
    subtitle: 'Fauna Map',
    description:
      'Interactive fauna distribution map for browsing species data by region.',
    overview:
      'Interactive fauna distribution map for browsing species data by region. Presents survey data on a map so the public and staff can explore where each species has been recorded.',
    tags: ['Laravel', 'PHP', 'Google Maps'],
    image: '/images/project-klh.jpg',
    cover: '/images/project-klh.jpg',
    details: [
      { key: 'ROLE', value: 'Fullstack Developer' },
      { key: 'DURATION', value: '2 months', note: '-' },
    ],
    gallery: ['region-map.png', 'photo-gallery.png', 'map-view.png'],
    liveUrl: '',
    repoUrl: '',
  },
  {
    id: 'wakatobi',
    title: 'Wakatobi',
    subtitle: 'Feedback Form',
    description:
      'Feedback form application for collecting and reviewing visitor responses.',
    overview:
      'Feedback form application for collecting and reviewing visitor responses. Keeps submissions organised and easy to summarise for follow-up.',
    tags: ['React', 'Node.js', 'Express.js'],
    image: '/images/project-wakatobi.jpg',
    cover: '/images/project-wakatobi.jpg',
    details: [
      { key: 'ROLE', value: 'Fullstack Developer' },
      { key: 'DURATION', value: '1 month', note: '-' },
    ],
    gallery: ['feedback-form.png', 'thank-you.png'],
    liveUrl: 'https://www.wakatobi.com/about-us/testimonials/',
    repoUrl: '',
  },
];

/** Dipakai halaman detail & navigasi "next project". */
export const allProjects = [...projects, ...moreProjects];

export const stack = [
  'REACT',
  'FLUTTER',
  'VUE.JS',
  'NODE.JS',
  'EXPRESS.JS',
  'SEQUELIZE',
  'LARAVEL',
  'CODEIGNITER',
  'SALESFORCE',
  'POSTGRESQL',
  'ORACLE',
  'MYSQL',
  'DOCKER',
  'GIT',
  'QLIKVIEW',
];

export const socials = [
  { label: 'GITHUB', url: 'https://github.com/denniafredo' },
  { label: 'LINKEDIN', url: 'https://www.linkedin.com/in/denni-afredo/' },
  { label: 'INSTAGRAM', url: 'https://instagram.com/denniafredo' },
];

export const footer = {
  text: 'DESIGNED & BUILT BY DENNI AFREDO',
  year: new Date().getFullYear(),
};
