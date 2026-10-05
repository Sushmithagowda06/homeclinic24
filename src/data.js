// ===== Edit content here =====
export const CONTACT = { phone: '+91 98765 43210', email: 'care@homeclinic24.in', whatsapp: '+91 98765 43210', location: 'Mysuru, Karnataka, India' }
export const SERVICES = [
  { id: 'doctor', title: 'Doctor Home Consultation', desc: 'Get professional medical consultation from qualified doctors in the comfort and privacy of your home.', features: ['Doctor home visit', 'Medical consultation', 'Health assessment', 'Treatment guidance', 'Follow-up care'], cta: 'Book Consultation', to: '/doctor-consultation', price: 599 },
  { id: 'physio', title: 'Physiotherapy at Home', desc: 'Receive personalized physiotherapy sessions at home to improve mobility, manage pain and support recovery.', features: ['Personalized assessment', 'One-on-one sessions', 'Pain management', 'Mobility improvement', 'Recovery support'], cta: 'Book Physiotherapy', to: '/physiotherapy', price: 899 },
]
export const PRICING = [
  { id: 'single', name: 'Single Session', price: 899, features: ['One home session', 'Initial assessment', 'Personalized guidance'], cta: 'Book Session' },
  { id: 'p5', name: '5 Session Package', price: 4250, features: ['5 home sessions', 'Personalized treatment plan', 'Progress monitoring'], cta: 'Choose Package', popular: true },
  { id: 'p10', name: '10 Session Package', price: 7999, features: ['10 home sessions', 'Personalized treatment', 'Progress monitoring'], cta: 'Choose Package' },
]
export const DOCTORS = [
  { name: 'Dr. Ananya Rao', qual: 'MBBS, MD', spec: 'General Physician', exp: '8+ Years Experience', rating: 4.9 },
  { name: 'Dr. Rohan Mehta', qual: 'MBBS, DNB', spec: 'Internal Medicine', exp: '10+ Years Experience', rating: 4.8 },
  { name: 'Dr. Kavya Nair', qual: 'MBBS, DGO', spec: 'Family Medicine', exp: '6+ Years Experience', rating: 4.9 },
]
export const DOCTOR_CONDITIONS = [['Fever & Infections', 'Prompt assessment and guidance.'], ['Cold & Cough', 'Relief and recovery advice.'], ['General Health Concerns', 'Check-ups and clear answers.'], ['Blood Pressure', 'Monitoring and lifestyle guidance.'], ['Diabetes Management', 'Ongoing review and support.'], ['Digestive Problems', 'Care for common stomach issues.'], ['General Medical Advice', 'Trusted second opinions at home.'], ['Follow-up Consultations', 'Continued care after treatment.']]
export const PHYSIO_CONDITIONS = [['Back Pain', 'Ease stiffness and strengthen your back.'], ['Neck Pain', 'Relieve tension and improve posture.'], ['Knee Pain', 'Restore movement and stability.'], ['Shoulder Pain', 'Regain comfortable range of motion.'], ['Sciatica', 'Reduce nerve pain and discomfort.'], ['Arthritis', 'Gentle exercise to keep joints active.'], ['Sports Injuries', 'Safe, structured return to activity.'], ['Post-Surgery Recovery', 'Guided rehabilitation at home.']]
export const WHY = [['home', 'Care at Home', 'Receive professional healthcare without unnecessary travel.'], ['shield', 'Qualified Professionals', 'Connect with trained and experienced healthcare professionals.'], ['heart', 'Personalized Attention', 'Get care designed around your individual needs.'], ['calendar', 'Convenient Booking', 'Choose a convenient date and time for your home visit.']]
export const STEPS = ['Choose Your Service', 'Select Date & Time', 'Professional Visits Your Home', 'Receive Personalized Care']
export const STATS = [['4.9/5', 'Patient Rating'], ['1,000+', 'Patients Served'], ['500+', 'Home Consultations'], ['Professional', 'Healthcare Team']]
export const TESTIMONIALS = [
  { text: 'The doctor consultation at home was extremely convenient. The doctor was professional and explained everything clearly.', name: 'Anjali R.', loc: 'Mysuru' },
  { text: 'My father’s physiotherapy sessions at home made recovery so much easier for the whole family.', name: 'Suresh K.', loc: 'Mysuru' },
  { text: 'Easy booking, on-time visit and very caring approach. Highly recommended.', name: 'Meera S.', loc: 'Mysuru' },
  { text: 'The physiotherapist built a plan around my knee pain and tracked my progress every week.', name: 'Rahul P.', loc: 'Mysuru' },
]
export const FAQS = [
  ['How do I book a home consultation?', 'Tap “Book Now”, choose a service, share your details, address, date and time, then confirm.'],
  ['Can I choose the date and time?', 'Yes. Pick any available date and a Morning, Afternoon or Evening slot.'],
  ['How does home physiotherapy work?', 'A physiotherapist assesses you, creates a personalized plan and delivers one-on-one sessions at home.'],
  ['How long does a physiotherapy session last?', 'Sessions typically last around 45–60 minutes.'],
  ['Can I book multiple physiotherapy sessions?', 'Yes. Choose a 5 or 10 session package for continuous, progress-focused care.'],
  ['Do I need to visit a clinic?', 'No. Our professionals come to your home.'],
  ['Which locations do you serve?', 'We currently serve Mysuru and nearby areas. Contact us to confirm your location.'],
  ['How can I contact Home Clinic 24?', 'Call, email or WhatsApp us using the details on our Contact page.'],
]
export const SLOTS = ['Morning', 'Afternoon', 'Evening']
export const SERVICE_CHARGES = [
  { category: 'Doctor & Visit Charges', services: [
    { name: 'Doctor Consultation at Home', price: 499 },
    { name: 'Brother Visit', price: 199 },
    { name: 'IP Admission – Doctor Visit', price: 349 },
  ]},
  { category: 'Injections & Procedures', services: [
    { name: 'IM Injection', price: 249 },
    { name: 'IV Injection', price: 399 },
    { name: 'Catheter Application', price: 499, note: '+ Consumables MRP + Brother/Sister Visit' },
    { name: 'Ryles Tube Application', price: 499, note: '+ Consumables + Brother Visit' },
    { name: 'Tracheostomy Care', price: 299, note: '+ Brother Visit' },
  ]},
  { category: 'Dressing', services: [
    { name: 'Small', price: 199 },
    { name: 'Medium', price: 299 },
    { name: 'Large', price: 499 },
  ]},
  { category: 'IP Admission Cases', services: [
    { name: 'AFI', conditions: true },
    { name: 'Pneumonia', conditions: true },
    { name: 'UTI', conditions: true },
    { name: 'Acute GE', conditions: true },
    { name: 'Diabetic Wound Care', conditions: true },
  ]},
  { category: 'Other Nursing & Care Services', services: [
    { name: 'Colostomy Care', price: 499 },
    { name: 'Stoma Care', price: 299 },
    { name: 'Surgical Site Care', price: 299 },
    { name: 'Suture Removal', price: 399 },
    { name: 'Abscess Drainage', price: 299 },
    { name: 'Debridement of Wounds', price: 299 },
    { name: 'Other Cases / Post-operative', price: 299 },
    { name: 'Insulin Administration', note: 'Brother Visit Charges' },
    { name: 'Enema', price: 299 },
    { name: 'Bed Sore Care', price: 299 },
    { name: 'Cancer Care', note: 'Consumables MRP' },
    { name: 'Drain Care', price: 299 },
    { name: 'Nebulization', price: 99 },
  ]},
  { category: 'Additional Services', services: [
    { name: 'Diagnostic Support', note: 'Tie-up Company Prices' },
    { name: 'Physiotherapy', note: 'Tie-up Doctor Charges' },
  ]},
]
