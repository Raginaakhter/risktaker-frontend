export type ECMember = {
  name: string;
  role: string;
  org?: string;
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
        org: 'Director, Bee Global'
      },
      {
        name: 'Dt. Minni',
        role: 'Director — Training & Development',
        org: 'Founder & CEO, BNWA · Senior Dietitian, FitBack Reset · Nutrition & Diet Consultant, Marine Health Caret'
      },
      {
        name: 'Imran',
        role: 'Director — Community Development',
        org: 'Sr. Editor (Promotional), Deepto Television'
      },
      {
        name: 'Shapna',
        role: 'Director — Policy Development',
        org: 'Advocate, Supreme Court of Bangladesh'
      },
      {
        name: 'Rono',
        role: 'Director — Coordination & Operation',
        org: 'DMD, LeadTime Bangladesh Ltd'
      },
      {
        name: 'Faria',
        role: 'Director — Communication',
        org: 'Country Representative, Zhejiang Chouzhou Bank'
      },
      {
        name: 'Nobel',
        role: 'Director — Creative Planning',
        org: 'Principal Architect, Hyder Associates'
      },
      {
        name: 'Happy',
        role: 'Director — Finance',
        org: 'Senior Assistant Architect, Dept. of Architecture, Ministry of Housing & Public Works'
      },
      {
        name: 'Roni',
        role: 'Director — Program & Event',
        org: 'AGM, Sales & Marketing, Global Brand PLC'
      }
    ]
  },
  {
    slug: '2023-2025',
    term: '2023 — 2025',
    heading: 'Risk Taker EC 2023 — 2025',
    current: false,
    members: [
      { name: 'Md Jabed Hasan', role: 'President' },
      { name: 'Md. Ruhul Amin Khan', role: 'Vice President' },
      { name: 'Md. Sakil Hossain', role: 'Vice President' },
      { name: 'Sultana Jannat', role: 'Vice President' },
      { name: 'Nizamul Huda Khan', role: 'General Secretary' },
      { name: 'Md Shahed Hasan', role: 'Organizing Secretary' },
      { name: 'Nusrat Islam Ritu', role: 'Finance Secretary' },
      { name: 'Samira Haque', role: 'Assistant General Secretary' },
      { name: 'Tanzeena Meher', role: 'Assistant Organizing Secretary' },
      { name: 'Md. Habib Ullah', role: 'Sports Secretary' },
      { name: 'Md. Munjurul Hossain Shoeb', role: 'Office Secretary' },
      { name: 'Mili Ahmed Shoma', role: 'Environment Secretary' },
      { name: 'Khandker Raqibul Islam Rajon', role: 'Media Secretary' },
      { name: 'Nahid Mahmud Hossain', role: 'Publication Secretary' },
      { name: 'Niger Sultana', role: 'Cultural Secretary' },
      { name: 'MD. Ashraf Rahman', role: 'IT Secretary' },
      { name: 'Abu Zafar Khan Taposh', role: 'Legal Secretary' },
      { name: 'Bob Ahmed', role: 'Event Secretary' },
      { name: 'Salafin Rafi', role: 'Event Secretary' },
      { name: 'Md. Mehadi Hasan', role: 'Convener, Chottogram Unit' },
      { name: 'Raish Uddin', role: 'Convener, Sylhet Unit' },
      { name: 'Mosaddak Mahmud', role: 'Convener, Keranigonj Unit' },
      { name: 'MD Shah Jalal', role: 'Assistant Convener, Keranigonj Unit' },
      { name: 'Farhana Islam', role: 'Assistant Finance Secretary' },
      { name: 'Morsheda Nahar', role: 'Assistant Environment Secretary' },
      { name: 'Rafayet Hossain Mozumder', role: 'Member' },
      { name: 'Safin Yara', role: 'Member' },
      { name: 'Mahbubur Rahman', role: 'Member' },
      { name: 'Jamir Uddin', role: 'Member' },
      { name: 'C. G. Noor-A-Sunny', role: 'Member' },
      { name: 'Andalib Mahmood', role: 'Member' },
      { name: 'Nusrat Jahan', role: 'Member' }
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
