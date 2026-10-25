export type MemberCategory =
  | 'Doctor'
  | 'Banker'
  | 'Business'
  | 'Engineer'
  | 'Lawyer'
  | 'Educator'
  | 'Other';

export type Member = {
  id: string;
  name: string;
  nameBn?: string;
  category: MemberCategory;
  specialty: string;
  organization: string;
  location?: string;
  bloodGroup?: string;
  phone: string;
  photo?: string;
  initials: string;
  bio?: string;
};

const initialsOf = (name: string) =>
  name
    .replace(/^(Dr\.?|Mr\.?|Mrs\.?|Ms\.?|Md\.?)\s+/i, '')
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? '')
    .join('');

const m = (data: Omit<Member, 'initials'>): Member => ({
  ...data,
  initials: initialsOf(data.name)
});

export const members: Member[] = [
  // Doctors - Medicine / Internal
  m({ id: 'd-mahbubul', name: 'Dr. Md. Mahbubul Alam', nameBn: 'ডাঃ মাহবুবুল আলম', category: 'Doctor', specialty: 'Medicine & Haematology', organization: 'Gastro Specialist', phone: '01717164816' }),
  m({ id: 'd-rayhan-med', name: 'Dr. Rayhan', category: 'Doctor', specialty: 'Medicine', organization: 'General Practice', phone: '01728086804' }),
  m({ id: 'd-anjon', name: 'Dr. Anjon Deb', category: 'Doctor', specialty: 'Medicine', organization: 'Internal Medicine', phone: '01715223326' }),
  m({ id: 'd-ferdous', name: 'Dr. Ferdous', category: 'Doctor', specialty: 'Medicine', organization: 'General Practice', phone: '01717841384' }),
  m({ id: 'd-bodiul', name: 'Dr. Bodiul', category: 'Doctor', specialty: 'Medicine', organization: 'General Practice', phone: '01716844961' }),
  m({ id: 'd-tuhin', name: 'Dr. Tuhin', category: 'Doctor', specialty: 'Medicine', organization: 'Azgor Ali Hospital, Gendaria', phone: '01714116282' }),
  m({ id: 'd-faridahmed', name: 'Dr. Farid Uddin Ahmed', nameBn: 'ডাঃ ফরিদ উদ্দিন আহমেদ', category: 'Doctor', specialty: 'Medicine', organization: 'General Practice', phone: '01717254788' }),
  m({ id: 'd-amil', name: 'Dr. Amil', category: 'Doctor', specialty: 'Medicine', organization: 'General Practice', phone: '01678138338' }),

  // Doctors - Pediatrics
  m({ id: 'd-morshed', name: 'Dr. Morshed Mymen', nameBn: 'ডাঃ মোর্শেদ মাঈন', category: 'Doctor', specialty: 'Pediatric Specialist', organization: 'Pediatrics', phone: '01819156899' }),
  m({ id: 'd-kaderul', name: 'Dr. Kaderul Gani Tanim', category: 'Doctor', specialty: 'Medicine & Pediatrics', organization: 'Dual Specialty', phone: '01779218082' }),
  m({ id: 'd-nazmul', name: 'Dr. Nazmul Islam', category: 'Doctor', specialty: 'Pediatrics', organization: 'Child Care', phone: '01712221068' }),
  m({ id: 'd-rasel-paed', name: 'Dr. Rasel', category: 'Doctor', specialty: 'Pediatrics', organization: 'Child Care', phone: '01812898313' }),
  m({ id: 'd-amir', name: 'Dr. Amir', category: 'Doctor', specialty: 'Pediatrics', organization: 'Matuail Medical', phone: '01717223950' }),
  m({ id: 'd-kishor', name: 'Dr. Kishor Kumar', category: 'Doctor', specialty: 'Pediatrics', organization: 'Child Care', phone: '01817721233' }),

  // Gastro
  m({ id: 'd-shahidur', name: 'Dr. Shahidur Rahman Milon', category: 'Doctor', specialty: 'Gastroenterology', organization: 'Gastro Registrar', phone: '01712516837' }),
  m({ id: 'd-tanmoy', name: 'Dr. Tanmoy Saha', category: 'Doctor', specialty: 'Gastroenterology', organization: 'Gastro', phone: '01712894136' }),
  m({ id: 'd-tipu', name: 'Dr. Mahmudur Rahman Tipu', category: 'Doctor', specialty: 'Gastroenterology', organization: 'Gastro', phone: '01716633272' }),

  // ENT
  m({ id: 'd-reza', name: 'Dr. Reza Haq', category: 'Doctor', specialty: 'ENT (Nose, Ear & Throat)', organization: 'Delta Hospital', phone: '01720529713' }),
  m({ id: 'd-liton', name: 'Dr. Liton', category: 'Doctor', specialty: 'ENT', organization: 'ENT Specialist', phone: '01748975226' }),
  m({ id: 'd-barkatullah', name: 'Dr. Barkatullah Milon', category: 'Doctor', specialty: 'ENT', organization: 'Tejgaon', phone: '01717070573' }),

  // Orthopedics
  m({ id: 'd-jony', name: 'Dr. Md. Mesh-ke Alam Jony', category: 'Doctor', specialty: 'Orthopedics', organization: 'Orthopedic Surgery', phone: '01717547768' }),
  m({ id: 'd-faisal', name: 'Dr. Faisal', category: 'Doctor', specialty: 'Orthopedics', organization: 'Orthopedic Surgery', phone: '01716834511' }),
  m({ id: 'd-jillur', name: 'Dr. Jillur Hasan Rony', category: 'Doctor', specialty: 'Orthopedics', organization: 'Orthopedic Surgery', phone: '01712089789' }),
  m({ id: 'd-minhaj', name: 'Dr. Minhaj Uddin', category: 'Doctor', specialty: 'Orthopedics', organization: 'Orthopedic Surgery', phone: '01716852086' }),
  m({ id: 'd-monirul', name: 'Dr. Monirul Islam', category: 'Doctor', specialty: 'Orthopedics (MBBS)', organization: 'Jhenaidah Medical Hospital', phone: '01717250254' }),

  // Dentists
  m({ id: 'd-harry', name: 'Dr. Harry Chokroborty', category: 'Doctor', specialty: 'Dentistry', organization: 'Kumudini Hospital, Mirzapur, Tangail', phone: '01717524546' }),
  m({ id: 'd-muaz', name: 'Dr. Muaz', category: 'Doctor', specialty: 'Dentistry', organization: 'Dental Surgery', phone: '01717385927' }),
  m({ id: 'd-marium', name: 'Dr. Marium', category: 'Doctor', specialty: 'Dentistry', organization: 'Dental Surgery', phone: '01718331211' }),
  m({ id: 'd-shafi', name: 'Dr. Shafi', category: 'Doctor', specialty: 'Dentistry', organization: 'Dental Surgery', phone: '01716310437' }),
  m({ id: 'd-santu', name: 'Dr. Salek Mahmud Santu', category: 'Doctor', specialty: 'Dentistry', organization: 'Meherpur', phone: '01923260394' }),
  m({ id: 'd-bokul', name: 'Dr. Bokul', category: 'Doctor', specialty: 'Dentistry', organization: 'Chapainawabganj', phone: '017168044610' }),

  // Neuro
  m({ id: 'd-mahbub-neuro', name: 'Dr. Mahbub', category: 'Doctor', specialty: 'Neurology', organization: 'Neuro Specialist', phone: '01799676846' }),
  m({ id: 'd-rasel-neuro', name: 'Dr. Rasel', category: 'Doctor', specialty: 'Neurology', organization: 'Neuro Specialist', phone: '01712272787' }),
  m({ id: 'd-biplob', name: 'Dr. Biplob Hossain', category: 'Doctor', specialty: 'Neurology', organization: 'Neuro Specialist', phone: '01748904329' }),
  m({ id: 'd-hasanat', name: 'Dr. Hasanat Zia', category: 'Doctor', specialty: 'Neurology', organization: 'Neuro Specialist', phone: '01770646915' }),
  m({ id: 'd-zahid', name: 'Dr. Zahid Kamal', category: 'Doctor', specialty: 'Neurology', organization: 'Neuro Specialist', phone: '01723355385' }),
  m({ id: 'd-tapash', name: 'Dr. Tapash Sarkar', category: 'Doctor', specialty: 'Neurology', organization: 'Neuro Hospital', phone: '01711056870' }),

  // Cardiac
  m({ id: 'd-mehedi', name: 'Dr. Mehedi', category: 'Doctor', specialty: 'Cardiology', organization: 'Cardiac Specialist', phone: '01646444687' }),
  m({ id: 'd-atik', name: 'Dr. Atik', category: 'Doctor', specialty: 'Cardiology', organization: 'Cardiologist', phone: '01815121520' }),
  m({ id: 'd-riyad', name: 'Dr. Riyad Mahmud', category: 'Doctor', specialty: 'Cardiac Surgery', organization: 'Cardiac Surgeon', phone: '01611107070' }),
  m({ id: 'd-rubel', name: 'Dr. Rubel', category: 'Doctor', specialty: 'Cardiology', organization: 'Comilla', phone: '01917025328' }),

  // Eye
  m({ id: 'd-jacky', name: 'Dr. Jacky', category: 'Doctor', specialty: 'Ophthalmology', organization: 'Eye Specialist', phone: '01777767390' }),
  m({ id: 'd-afrin', name: 'Dr. Afrin Shams', category: 'Doctor', specialty: 'Ophthalmology', organization: 'Eye Specialist', phone: '01911688183' }),
  m({ id: 'd-tushar', name: 'Dr. Abdullah Tushar', category: 'Doctor', specialty: 'Ophthalmology', organization: 'Eye Specialist', phone: '01716017895' }),

  // Dermatology / Skin
  m({ id: 'd-ismail', name: 'Dr. Ismail Abu Saleh', category: 'Doctor', specialty: 'Dermatology & Sexual Medicine', organization: 'Skin Specialist', phone: '01755007090' }),

  // Gynae
  m({ id: 'd-salsabil', name: 'Dr. Salsabil Ferdous', category: 'Doctor', specialty: 'Gynaecology & Obstetrics', organization: 'Gynae & Obs', phone: '01922176877' }),
  m({ id: 'd-indrani', name: 'Dr. Indrani Kar', category: 'Doctor', specialty: 'Gynaecology & Obstetrics', organization: 'Gynae & Obs', phone: '01722717183' }),

  // Others
  m({ id: 'd-shoaib', name: 'Dr. Shoaib Hasan Mohammad', category: 'Doctor', specialty: 'Pathology & Lab', organization: 'Laboratory Medicine', phone: '01717241514' }),
  m({ id: 'd-sumon', name: 'Dr. Sumon', category: 'Doctor', specialty: 'Nephrology', organization: 'Kidney Specialist', phone: '01789991519' }),
  m({ id: 'd-rasel-anes', name: 'Dr. Rasel', nameBn: 'ডাঃ রাসেল', category: 'Doctor', specialty: 'Anaesthesiology', organization: 'Anaesthesia', phone: '01911201955' }),
  m({ id: 'd-sajid', name: 'Dr. Sajid Mondal', category: 'Doctor', specialty: 'Respiratory Medicine', organization: 'Pulmonology', phone: '01746561646' }),
  m({ id: 'd-masud', name: 'Dr. Masud', category: 'Doctor', specialty: 'Urology', organization: 'Urologist', phone: '01841257567' }),
  m({ id: 'd-mominul', name: 'Dr. Mominul Hoque', category: 'Doctor', specialty: 'Pathology (In-Charge)', organization: 'Sher-E-Bangla Medical College, Agargaon, Dhaka', phone: '01741713264' }),
  m({ id: 'd-mustafiz', name: 'Dr. Mustafiz M Janab Ali', category: 'Doctor', specialty: 'General Medicine', organization: 'Upazila Health Complex, Rajshahi', bloodGroup: 'A+', phone: '01717142918' }),
  m({ id: 'd-rana', name: 'Dr. Rana', category: 'Doctor', specialty: 'General Practitioner', organization: 'GP', phone: '01713210557' }),
  m({ id: 'd-niyamul', name: 'Dr. Niyamul Zaman', category: 'Doctor', specialty: 'General Medicine', organization: 'Rupganj Upazila Health Complex, Narayanganj', phone: '01740634011' }),

  // Bankers
  m({ id: 'b-wahid', name: 'Wahid', category: 'Banker', specialty: 'Banking', organization: 'Sonali Bank', location: 'Natore', bloodGroup: 'O+', phone: '01712303069' }),
  m({ id: 'b-mahmodul', name: 'Md. Mahmodul Hasan', category: 'Banker', specialty: 'Banking', organization: 'Commerce Bank', phone: '01817666255' }),
  m({ id: 'b-estesham', name: 'Estesham Sohel', category: 'Banker', specialty: 'Banking', organization: 'Agrani Bank', location: 'Rajshahi', bloodGroup: 'O+', phone: '01717011452' }),
  m({ id: 'b-ashik', name: 'Ashik Ahmed', category: 'Banker', specialty: 'Banking', organization: 'NCC Bank', location: 'Gulshan', phone: '01717685508' }),
  m({ id: 'b-polash', name: 'Shahzada Siddiqui Polash', nameBn: 'শাহজাদা সিদ্দিকী পলাশ', category: 'Banker', specialty: 'Banking', organization: 'National Bank Ltd', phone: '01836900009' }),
  m({ id: 'b-tarikul', name: 'Md. Tarikul Hakim', category: 'Banker', specialty: 'Banking', organization: 'Trust Bank Ltd', location: 'Kabirhat Branch, Noakhali', phone: '01670347878' }),
  m({ id: 'b-shahin-reza', name: 'Shahin Reza', nameBn: 'শাহিন রেজা', category: 'Banker', specialty: 'Banking', organization: 'Agrani Bank', phone: '01721656755' }),
  m({ id: 'b-tania', name: 'Tania', category: 'Banker', specialty: 'Banking', organization: 'Southeast Bank', location: 'Iskaton Branch', phone: '01674115073' }),
  m({ id: 'b-bipul', name: 'Bipul Datta', category: 'Banker', specialty: 'Banking', organization: 'Rupali Bank', phone: '01712181800' }),
  m({ id: 'b-majedul', name: 'Majedul', nameBn: 'মাজেদুল', category: 'Banker', specialty: 'Banking', organization: 'Agrani Bank', phone: '01925183602' }),
  m({ id: 'b-hafiz', name: 'Hafiz', nameBn: 'হাফিজ', category: 'Banker', specialty: 'Banking', organization: 'Meghna Bank', phone: '01675679100' }),
  m({ id: 'b-gopal', name: 'Gopal Chandra Ghosh', category: 'Banker', specialty: 'Banking', organization: 'Prime Bank', location: 'Tongi Branch', phone: '01710662030' }),
  m({ id: 'b-karmoker', name: 'Karmoker Deb', category: 'Banker', specialty: 'Banking', organization: 'Dutch Bangla Bank', phone: '01742304535' }),
  m({ id: 'b-shahin-shaik', name: 'Shahin Shaik', category: 'Banker', specialty: 'Banking', organization: 'Palli Bank', phone: '01740885464' })
];

export const categoryStats = () => {
  const stats = members.reduce<Record<string, number>>((acc, member) => {
    acc[member.category] = (acc[member.category] ?? 0) + 1;
    return acc;
  }, {});
  return stats;
};

export const specialtyList = () => {
  const set = new Set(members.map((m) => m.specialty));
  return Array.from(set).sort();
};

export const categories: MemberCategory[] = [
  'Doctor',
  'Banker',
  'Business',
  'Engineer',
  'Lawyer',
  'Educator',
  'Other'
];
