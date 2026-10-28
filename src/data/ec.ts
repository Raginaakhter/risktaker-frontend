export type ECMember = {
  name: string;
  role: string;
  org?: string;
  photo?: string;
};

export type ECTerm = {
  slug: string;
  term: string;
  heading: string;
  current: boolean;
  members: ECMember[];
};

export const ecTerms: ECTerm[] = [
  {
    slug: '2025-2027',
    term: '2025 — 2027',
    heading: 'Risk Taker EC 2025 — 2027',
    current: true,
    members: [
      {
        name: 'Andalib',
        role: 'President',
        org: 'Director, Bee Global',
        photo: '/ec/andalib.jpg'
      },
      {
        name: 'Dt. Minni',
        role: 'Director — Training & Development',
        org: 'Founder & CEO, BNWA · Senior Dietitian, FitBack Reset · Nutrition & Diet Consultant, Marine Health Caret',
        photo: '/ec/dt-minni.jpg'
      },
      {
        name: 'Imran',
        role: 'Director — Community Development',
        org: 'Sr. Editor (Promotional), Deepto Television',
        photo: '/ec/imran.jpg'
      },
      {
        name: 'Shapna',
        role: 'Director — Policy Development',
        org: 'Advocate, Supreme Court of Bangladesh',
        photo: '/ec/shapna.jpg'
      },
      {
        name: 'Rono',
        role: 'Director — Coordination & Operation',
        org: 'DMD, LeadTime Bangladesh Ltd',
        photo: '/ec/rono.jpg'
      },
      {
        name: 'Faria',
        role: 'Director — Communication',
        org: 'Country Representative, Zhejiang Chouzhou Bank',
        photo: '/ec/faria.jpg'
      },
      {
        name: 'Nobel',
        role: 'Director — Creative Planning',
        org: 'Principal Architect, Hyder Associates',
        photo: '/ec/nobel.jpg'
      },
      {
        name: 'Happy',
        role: 'Director — Finance',
        org: 'Senior Assistant Architect, Dept. of Architecture, Ministry of Housing & Public Works',
        photo: '/ec/happy.jpg'
      },
      {
        name: 'Roni',
        role: 'Director — Program & Event',
        org: 'AGM, Sales & Marketing, Global Brand PLC',
        photo: '/ec/roni.jpg'
      }
    ]
  },
  {
    slug: '2023-2025',
    term: '2023 — 2025',
    heading: 'Risk Taker EC 2023 — 2025',
    current: false,
    members: [
      { name: 'Md Jabed Hasan', role: 'President', photo: '/ec/jabed-hasan.jpg' },
      { name: 'Md. Ruhul Amin Khan', role: 'Vice President', photo: '/ec/ruhul-amin-khan.jpg' },
      { name: 'Md. Sakil Hossain', role: 'Vice President', photo: '/ec/sakil-hossain.jpg' },
      { name: 'Sultana Jannat', role: 'Vice President', photo: '/ec/sultana-jannat.jpg' },
      { name: 'Nizamul Huda Khan', role: 'General Secretary', photo: '/ec/nizamul-huda-khan.jpg' },
      { name: 'Md Shahed Hasan', role: 'Organizing Secretary', photo: '/ec/shahed-hasan.jpg' },
      { name: 'Nusrat Islam Ritu', role: 'Finance Secretary', photo: '/ec/nusrat-islam-ritu.jpg' },
      { name: 'Samira Haque', role: 'Assistant General Secretary', photo: '/ec/samira-haque.jpg' },
      { name: 'Tanzeena Meher', role: 'Assistant Organizing Secretary', photo: '/ec/tanzeena-meher.jpg' },
      { name: 'Md. Habib Ullah', role: 'Sports Secretary', photo: '/ec/habib-ullah.jpg' },
      { name: 'Md. Munjurul Hossain Shoeb', role: 'Office Secretary', photo: '/ec/munjurul-shoeb.jpg' },
      { name: 'Mili Ahmed Shoma', role: 'Environment Secretary', photo: '/ec/mili-shoma.jpg' },
      { name: 'Khandker Raqibul Islam Rajon', role: 'Media Secretary', photo: '/ec/raqibul-rajon.jpg' },
      { name: 'Nahid Mahmud Hossain', role: 'Publication Secretary', photo: '/ec/nahid-mahmud.jpg' },
      { name: 'Niger Sultana', role: 'Cultural Secretary', photo: '/ec/niger-sultana.jpg' },
      { name: 'MD. Ashraf Rahman', role: 'IT Secretary', photo: '/ec/ashraf-rahman.jpg' },
      { name: 'Abu Zafar Khan Taposh', role: 'Legal Secretary', photo: '/ec/zafar-taposh.jpg' },
      { name: 'Bob Ahmed', role: 'Event Secretary', photo: '/ec/bob-ahmed.jpg' },
      { name: 'Salafin Rafi', role: 'Event Secretary', photo: '/ec/salafin-rafi.jpg' },
      { name: 'Md. Mehadi Hasan', role: 'Convener, Chottogram Unit', photo: '/ec/mehadi-hasan.jpg' },
      { name: 'Raish Uddin', role: 'Convener, Sylhet Unit', photo: '/ec/raish-uddin.jpg' },
      { name: 'Mosaddak Mahmud', role: 'Convener, Keranigonj Unit', photo: '/ec/mosaddak-mahmud.jpg' },
      { name: 'MD Shah Jalal', role: 'Assistant Convener, Keranigonj Unit', photo: '/ec/shah-jalal.jpg' },
      { name: 'Farhana Islam', role: 'Assistant Finance Secretary', photo: '/ec/farhana-islam.jpg' },
      { name: 'Morsheda Nahar', role: 'Assistant Environment Secretary', photo: '/ec/morsheda-nahar.jpg' },
      { name: 'Rafayet Hossain Mozumder', role: 'Member', photo: '/ec/rafayet-mozumder.jpg' },
      { name: 'Safin Yara', role: 'Member', photo: '/ec/safin-yara.jpg' },
      { name: 'Mahbubur Rahman', role: 'Member', photo: '/ec/mahbubur-rahman.jpg' },
      { name: 'Jamir Uddin', role: 'Member', photo: '/ec/jamir-uddin.jpg' },
      { name: 'C. G. Noor-A-Sunny', role: 'Member', photo: '/ec/cg-sunny.jpg' },
      { name: 'Andalib Mahmood', role: 'Member', photo: '/ec/andalib-mahmood.jpg' },
      { name: 'Nusrat Jahan', role: 'Member', photo: '/ec/nusrat-jahan.jpg' }
    ]
  }
];

export function initialsOf(name: string): string {
  const parts = name
    .replace(/[.,]/g, ' ')
    .split(/\s+/)
    .filter((p) => p && !/^(md|dt|c|g)$/i.test(p));
  const picks = parts.slice(0, 2);
  if (picks.length === 0) return name.slice(0, 2).toUpperCase();
  return picks.map((p) => p[0]?.toUpperCase() ?? '').join('');
}
