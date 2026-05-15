// PaperTrack — Baked Paper Templates
// Format per question:
//   { n: <question number>,
//     topic: '',
//     subtopic: '',
//     parts: [{ l: '<part label a/b/i/ii…>', topic: '', topics: [], subtopic: '', marks: <integer> }] }
//
// To add a paper, paste the DeepSeek output below inside the correct subject/paperKey block.
// Example:
//   BAKED_TEMPLATES['physics']['Paper 1'][2023] = [ ... ];

const BAKED_TEMPLATES = {
  maths: {
    'Paper 1': {},
    'Paper 2': {},
    'Paper 3': {},
  },
  physics: {
    'Paper 1': {BAKED_TEMPLATES['physics']['Paper 1']['2017'] = [
  { n:1, topic:'Gravitational Fields', parts:[{ l:'', topics:['Gravitational Fields'], marks:1 }] },
  { n:2, topic:'Materials', parts:[{ l:'', topics:['Materials'], marks:1 }] },
  { n:3, topic:'Work, Energy & Power', parts:[{ l:'', topics:['Work, Energy & Power'], marks:1 }] },
  { n:4, topic:'Motion (Kinematics)', parts:[{ l:'', topics:['Motion (Kinematics)'], marks:1 }] },
  { n:5, topic:'Practical Skills & Data Analysis', parts:[{ l:'', topics:['Practical Skills & Data Analysis'], marks:1 }] },
  { n:6, topic:'Materials', parts:[{ l:'', topics:['Materials'], marks:1 }] },
  { n:7, topic:'Quantum Physics', parts:[{ l:'', topics:['Quantum Physics'], marks:1 }] },
  { n:8, topic:'Forces in Action', parts:[{ l:'', topics:['Forces in Action'], marks:1 }] },
  { n:9, topic:'Gravitational Fields', parts:[{ l:'', topics:['Gravitational Fields'], marks:1 }] },
  { n:10, topic:'Astrophysics & Cosmology', parts:[{ l:'', topics:['Astrophysics & Cosmology'], marks:1 }] },
  { n:11, topic:'Materials', parts:[{ l:'', topics:['Materials'], marks:1 }] },
  { n:12, topic:'Motion (Kinematics)', parts:[{ l:'', topics:['Motion (Kinematics)'], marks:1 }] },
  { n:13, topic:'Newton\'s Laws & Momentum', parts:[{ l:'', topics:['Newton\'s Laws & Momentum'], marks:1 }] },
  { n:14, topic:'Thermal Physics', parts:[{ l:'', topics:['Thermal Physics'], marks:1 }] },
  { n:15, topic:'Astrophysics & Cosmology', parts:[{ l:'', topics:['Astrophysics & Cosmology'], marks:1 }] },
  { n:16, topic:'Work, Energy & Power', parts:[
    { l:'a', topics:['Work, Energy & Power'], marks:2 },
    { l:'b', topics:['Work, Energy & Power'], marks:2 },
    { l:'c', topics:['Work, Energy & Power'], marks:2 }
  ] },
  { n:17, topic:'Thermal Physics', parts:[
    { l:'a', topics:['Thermal Physics', 'Practical Skills & Data Analysis'], marks:2 },
    { l:'b.i', topics:['Practical Skills & Data Analysis'], marks:1 },
    { l:'b.ii', topics:['Practical Skills & Data Analysis'], marks:2 },
    { l:'c.i', topics:['Practical Skills & Data Analysis'], marks:1 },
    { l:'c.ii', topics:['Thermal Physics', 'Practical Skills & Data Analysis'], marks:6 },
    { l:'d', topics:['Practical Skills & Data Analysis'], marks:2 },
    { l:'e', topics:['Thermal Physics', 'Practical Skills & Data Analysis'], marks:4 }
  ] },
  { n:18, topic:'Forces in Action', parts:[
    { l:'a.i', topics:['Materials'], marks:2 },
    { l:'a.ii', topics:['Forces in Action'], marks:2 },
    { l:'b', topics:['Motion (Kinematics)'], marks:2 },
    { l:'c.i', topics:['Forces in Action'], marks:3 },
    { l:'c.ii', topics:['Forces in Action'], marks:3 },
    { l:'d', topics:['Practical Skills & Data Analysis'], marks:2 }
  ] },
  { n:19, topic:'Oscillations (SHM)', parts:[
    { l:'a.i', topics:['Oscillations (SHM)'], marks:3 },
    { l:'a.ii', topics:['Oscillations (SHM)'], marks:2 },
    { l:'b', topics:['Oscillations (SHM)', 'Practical Skills & Data Analysis'], marks:6 },
    { l:'c.i', topics:['Oscillations (SHM)'], marks:2 },
    { l:'c.ii', topics:['Gravitational Fields', 'Oscillations (SHM)'], marks:2 }
  ] },
  { n:20, topic:'Thermal Physics', parts:[
    { l:'a', topics:['Work, Energy & Power'], marks:2 },
    { l:'b', topics:['Thermal Physics'], marks:4 }
  ] },
  { n:21, topic:'Quantum Physics', parts:[
    { l:'a.i', topics:['Quantum Physics'], marks:1 },
    { l:'a.ii.1', topics:['Quantum Physics'], marks:1 },
    { l:'a.ii.2', topics:['Quantum Physics'], marks:3 },
    { l:'b.i', topics:['Quantum Physics', 'Astrophysics & Cosmology'], marks:1 },
    { l:'b.ii', topics:['Waves'], marks:1 },
    { l:'b.iii', topics:['Astrophysics & Cosmology', 'Waves'], marks:3 },
    { l:'b.iv', topics:['Astrophysics & Cosmology'], marks:1 },
    { l:'c', topics:['Astrophysics & Cosmology'], marks:3 }
  ] },
  { n:22, topic:'Thermal Physics', parts:[
    { l:'a', topics:['Thermal Physics'], marks:1 },
    { l:'b', topics:['Thermal Physics'], marks:4 }
  ] },
  { n:23, topic:'Gravitational Fields', parts:[
    { l:'a', topics:['Gravitational Fields'], marks:1 },
    { l:'b.i', topics:['Gravitational Fields'], marks:2 },
    { l:'b.ii', topics:['Gravitational Fields'], marks:1 },
    { l:'b.iii', topics:['Gravitational Fields', 'Thermal Physics'], marks:3 }
  ] }
];
               
               BAKED_TEMPLATES['physics']['Paper 1']['2018'] = [
  { n:1, topic:'Quantities, Units & Measurements', parts:[{ l:'', topics:['Quantities, Units & Measurements'], marks:1 }] },
  { n:2, topic:'Quantities, Units & Measurements', parts:[{ l:'', topics:['Quantities, Units & Measurements'], marks:1 }] },
  { n:3, topic:'Thermal Physics', parts:[{ l:'', topics:['Thermal Physics'], marks:1 }] },
  { n:4, topic:'Oscillations (SHM)', parts:[{ l:'', topics:['Oscillations (SHM)'], marks:1 }] },
  { n:5, topic:'Forces in Action', parts:[{ l:'', topics:['Forces in Action'], marks:1 }] },
  { n:6, topic:'Thermal Physics', parts:[{ l:'', topics:['Thermal Physics'], marks:1 }] },
  { n:7, topic:'Materials', parts:[{ l:'', topics:['Materials'], marks:1 }] },
  { n:8, topic:'Quantum Physics', parts:[{ l:'', topics:['Quantum Physics'], marks:1 }] },
  { n:9, topic:'Oscillations (SHM)', parts:[{ l:'', topics:['Oscillations (SHM)'], marks:1 }] },
  { n:10, topic:'Newton\'s Laws & Momentum', parts:[{ l:'', topics:['Newton\'s Laws & Momentum'], marks:1 }] },
  { n:11, topic:'Materials', parts:[{ l:'', topics:['Materials'], marks:1 }] },
  { n:12, topic:'Motion (Kinematics)', parts:[{ l:'', topics:['Motion (Kinematics)'], marks:1 }] },
  { n:13, topic:'Gravitational Fields', parts:[{ l:'', topics:['Gravitational Fields'], marks:1 }] },
  { n:14, topic:'Thermal Physics', parts:[{ l:'', topics:['Thermal Physics'], marks:1 }] },
  { n:15, topic:'Oscillations (SHM)', parts:[{ l:'', topics:['Oscillations (SHM)'], marks:1 }] },
  { n:16, topic:'Motion (Kinematics)', parts:[
    { l:'a.i', topics:['Motion (Kinematics)'], marks:1 },
    { l:'a.ii', topics:['Motion (Kinematics)'], marks:2 },
    { l:'a.iii', topics:['Work, Energy & Power'], marks:1 },
    { l:'a.iv', topics:['Work, Energy & Power'], marks:2 },
    { l:'b', topics:['Motion (Kinematics)', 'Practical Skills & Data Analysis'], marks:6 }
  ] },
  { n:17, topic:'Gravitational Fields', parts:[
    { l:'a.i', topics:['Gravitational Fields'], marks:1 },
    { l:'a.ii', topics:['Gravitational Fields', 'Circular Motion'], marks:2 },
    { l:'a.iii', topics:['Gravitational Fields', 'Circular Motion'], marks:3 },
    { l:'b.i', topics:['Gravitational Fields', 'Practical Skills & Data Analysis'], marks:1 },
    { l:'b.ii.1', topics:['Gravitational Fields', 'Practical Skills & Data Analysis'], marks:2 },
    { l:'b.ii.2', topics:['Gravitational Fields'], marks:1 },
    { l:'b.ii.3', topics:['Gravitational Fields'], marks:2 },
    { l:'c.i', topics:['Gravitational Fields'], marks:2 },
    { l:'c.ii', topics:['Gravitational Fields'], marks:2 }
  ] },
  { n:18, topic:'Work, Energy & Power', parts:[
    { l:'a', topics:['Work, Energy & Power'], marks:2 },
    { l:'b.i', topics:['Work, Energy & Power', 'Quantities, Units & Measurements'], marks:3 },
    { l:'b.ii', topics:['Work, Energy & Power'], marks:2 },
    { l:'b.iii', topics:['Work, Energy & Power'], marks:2 }
  ] },
  { n:19, topic:'Astrophysics & Cosmology', parts:[
    { l:'a', topics:['Astrophysics & Cosmology'], marks:1 },
    { l:'b.i', topics:['Quantum Physics', 'Astrophysics & Cosmology'], marks:2 },
    { l:'b.ii', topics:['Astrophysics & Cosmology'], marks:1 }
  ] },
  { n:20, topic:'Work, Energy & Power', parts:[
    { l:'a', topics:['Work, Energy & Power', 'Newton\'s Laws & Momentum'], marks:2 },
    { l:'b.i', topics:['Motion (Kinematics)'], marks:3 },
    { l:'b.ii', topics:['Work, Energy & Power'], marks:2 },
    { l:'b.iii.1', topics:['Motion (Kinematics)'], marks:2 },
    { l:'b.iii.2', topics:['Newton\'s Laws & Momentum'], marks:2 }
  ] },
  { n:21, topic:'Circular Motion', parts:[
    { l:'a', topics:['Newton\'s Laws & Momentum'], marks:2 },
    { l:'b', topics:['Circular Motion', 'Practical Skills & Data Analysis'], marks:3 },
    { l:'c', topics:['Circular Motion'], marks:3 }
  ] },
  { n:22, topic:'Nuclear & Particle Physics', parts:[
    { l:'a.i', topics:['Newton\'s Laws & Momentum', 'Nuclear & Particle Physics'], marks:1 },
    { l:'a.ii', topics:['Newton\'s Laws & Momentum', 'Nuclear & Particle Physics'], marks:3 },
    { l:'b', topics:['Thermal Physics', 'Gravitational Fields', 'Nuclear & Particle Physics', 'Practical Skills & Data Analysis'], marks:6 }
  ] },
  { n:23, topic:'Astrophysics & Cosmology', parts:[
    { l:'a', topics:['Astrophysics & Cosmology'], marks:1 },
    { l:'b.i', topics:['Astrophysics & Cosmology', 'Waves'], marks:3 },
    { l:'b.ii', topics:['Astrophysics & Cosmology'], marks:1 },
    { l:'c', topics:['Astrophysics & Cosmology'], marks:4 }
  ] },
  { n:24, topic:'Waves', parts:[
    { l:'a', topics:['Waves'], marks:1 },
    { l:'b.i', topics:['Waves', 'Practical Skills & Data Analysis'], marks:3 },
    { l:'b.ii', topics:['Practical Skills & Data Analysis'], marks:1 },
    { l:'b.iii', topics:['Practical Skills & Data Analysis'], marks:1 }
  ] }
];
               
               BAKED_TEMPLATES['physics']['Paper 1']['2019'] = [
  { n:1, topic:'Quantities, Units & Measurements', parts:[{ l:'', topics:['Quantities, Units & Measurements'], marks:1 }] },
  { n:2, topic:'Forces in Action', parts:[{ l:'', topics:['Forces in Action'], marks:1 }] },
  { n:3, topic:'Practical Skills & Data Analysis', parts:[{ l:'', topics:['Practical Skills & Data Analysis'], marks:1 }] },
  { n:4, topic:'Oscillations (SHM)', parts:[{ l:'', topics:['Oscillations (SHM)'], marks:1 }] },
  { n:5, topic:'Motion (Kinematics)', parts:[{ l:'', topics:['Motion (Kinematics)'], marks:1 }] },
  { n:6, topic:'Gravitational Fields', parts:[{ l:'', topics:['Gravitational Fields'], marks:1 }] },
  { n:7, topic:'Oscillations (SHM)', parts:[{ l:'', topics:['Oscillations (SHM)'], marks:1 }] },
  { n:8, topic:'Forces in Action', parts:[{ l:'', topics:['Forces in Action'], marks:1 }] },
  { n:9, topic:'Thermal Physics', parts:[{ l:'', topics:['Thermal Physics'], marks:1 }] },
  { n:10, topic:'Quantities, Units & Measurements', parts:[{ l:'', topics:['Quantities, Units & Measurements'], marks:1 }] },
  { n:11, topic:'Gravitational Fields', parts:[{ l:'', topics:['Gravitational Fields'], marks:1 }] },
  { n:12, topic:'Materials', parts:[{ l:'', topics:['Materials'], marks:1 }] },
  { n:13, topic:'Astrophysics & Cosmology', parts:[{ l:'', topics:['Astrophysics & Cosmology'], marks:1 }] },
  { n:14, topic:'Astrophysics & Cosmology', parts:[{ l:'', topics:['Astrophysics & Cosmology'], marks:1 }] },
  { n:15, topic:'Astrophysics & Cosmology', parts:[{ l:'', topics:['Astrophysics & Cosmology'], marks:1 }] },
  { n:16, topic:'Materials', parts:[
    { l:'a', topics:['Materials'], marks:1 },
    { l:'b.i', topics:['Practical Skills & Data Analysis'], marks:2 },
    { l:'b.ii', topics:['Materials'], marks:2 },
    { l:'b.iii', topics:['Materials'], marks:2 },
    { l:'c', topics:['Materials'], marks:2 },
    { l:'d', topics:['Materials', 'Work, Energy & Power'], marks:2 }
  ] },
  { n:17, topic:'Forces in Action', parts:[
    { l:'a', topics:['Motion (Kinematics)', 'Practical Skills & Data Analysis'], marks:3 },
    { l:'b', topics:['Newton\'s Laws & Momentum'], marks:1 },
    { l:'c', topics:['Forces in Action'], marks:3 },
    { l:'d.i', topics:['Forces in Action'], marks:2 },
    { l:'d.ii', topics:['Forces in Action'], marks:2 }
  ] },
  { n:18, topic:'Oscillations (SHM)', parts:[
    { l:'a.i', topics:['Oscillations (SHM)'], marks:3 },
    { l:'a.ii', topics:['Oscillations (SHM)'], marks:2 },
    { l:'b', topics:['Oscillations (SHM)', 'Work, Energy & Power'], marks:4 },
    { l:'c.i', topics:['Oscillations (SHM)'], marks:2 },
    { l:'c.ii', topics:['Oscillations (SHM)'], marks:1 },
    { l:'c.iii', topics:['Oscillations (SHM)'], marks:2 }
  ] },
  { n:19, topic:'Motion (Kinematics)', parts:[
    { l:'a', topics:['Motion (Kinematics)'], marks:3 },
    { l:'b', topics:['Work, Energy & Power', 'Practical Skills & Data Analysis'], marks:6 }
  ] },
  { n:20, topic:'Newton\'s Laws & Momentum', parts:[
    { l:'a', topics:['Newton\'s Laws & Momentum'], marks:2 },
    { l:'b', topics:['Newton\'s Laws & Momentum', 'Motion (Kinematics)'], marks:2 },
    { l:'c', topics:['Motion (Kinematics)'], marks:2 }
  ] },
  { n:21, topic:'Thermal Physics', parts:[
    { l:'a', topics:['Thermal Physics'], marks:4 },
    { l:'b', topics:['Thermal Physics'], marks:2 },
    { l:'c', topics:['Thermal Physics'], marks:1 },
    { l:'d.i', topics:['Thermal Physics'], marks:3 },
    { l:'d.ii', topics:['Thermal Physics'], marks:3 }
  ] },
  { n:22, topic:'Forces in Action', parts:[
    { l:'a', topics:['Forces in Action'], marks:1 },
    { l:'b', topics:['Forces in Action'], marks:3 }
  ] },
  { n:23, topic:'Astrophysics & Cosmology', parts:[
    { l:'a', topics:['Astrophysics & Cosmology', 'Practical Skills & Data Analysis'], marks:6 },
    { l:'b.i', topics:['Gravitational Fields', 'Circular Motion'], marks:1 },
    { l:'b.ii', topics:['Gravitational Fields', 'Circular Motion'], marks:2 }
  ] },
  { n:24, topic:'Astrophysics & Cosmology', parts:[
    { l:'a.i', topics:['Astrophysics & Cosmology'], marks:2 },
    { l:'a.ii', topics:['Astrophysics & Cosmology'], marks:2 },
    { l:'b.i', topics:['Gravitational Fields', 'Astrophysics & Cosmology'], marks:2 },
    { l:'b.ii', topics:['Astrophysics & Cosmology'], marks:1 },
    { l:'b.iii', topics:['Astrophysics & Cosmology'], marks:1 }
  ] }
];
               
               BAKED_TEMPLATES['physics']['Paper 1']['2022'] = [
  { n:1, topic:null, parts:[{ l:'', topics:['Quantities, Units & Measurements'], marks:1 }] },
  { n:2, topic:'Practical Skills & Data Analysis', parts:[{ l:'', topics:['Practical Skills & Data Analysis'], marks:1 }] },
  { n:3, topic:'Motion (Kinematics)', parts:[{ l:'', topics:['Motion (Kinematics)'], marks:1 }] },
  { n:4, topic:'Forces in Action', parts:[{ l:'', topics:['Forces in Action'], marks:1 }] },
  { n:5, topic:'Forces in Action', parts:[{ l:'', topics:['Forces in Action'], marks:1 }] },
  { n:6, topic:'Newton\'s Laws & Momentum', parts:[{ l:'', topics:['Newton\'s Laws & Momentum'], marks:1 }] },
  { n:7, topic:'Thermal Physics', parts:[{ l:'', topics:['Thermal Physics'], marks:1 }] },
  { n:8, topic:'Thermal Physics', parts:[{ l:'', topics:['Thermal Physics'], marks:1 }] },
  { n:9, topic:'Thermal Physics', parts:[{ l:'', topics:['Thermal Physics'], marks:1 }] },
  { n:10, topic:'Oscillations (SHM)', parts:[{ l:'', topics:['Oscillations (SHM)'], marks:1 }] },
  { n:11, topic:'Quantities, Units & Measurements', parts:[{ l:'', topics:['Quantities, Units & Measurements'], marks:1 }] },
  { n:12, topic:'Quantum Physics', parts:[{ l:'', topics:['Quantum Physics'], marks:1 }] },
  { n:13, topic:'Waves', parts:[{ l:'', topics:['Waves'], marks:1 }] },
  { n:14, topic:'Astrophysics & Cosmology', parts:[{ l:'', topics:['Astrophysics & Cosmology'], marks:1 }] },
  { n:15, topic:'Astrophysics & Cosmology', parts:[{ l:'', topics:['Astrophysics & Cosmology'], marks:1 }] },
  { n:16, topic:'Materials', parts:[
    { l:'a', topics:['Materials', 'Practical Skills & Data Analysis'], marks:4 },
    { l:'b.i', topics:['Materials', 'Work, Energy & Power'], marks:3 },
    { l:'b.ii', topics:['Work, Energy & Power'], marks:2 },
    { l:'b.iii', topics:['Motion (Kinematics)'], marks:3 },
    { l:'b.iv', topics:['Practical Skills & Data Analysis'], marks:2 }
  ] },
  { n:17, topic:'Work, Energy & Power', parts:[
    { l:'a', topics:['Work, Energy & Power'], marks:1 },
    { l:'b', topics:['Forces in Action'], marks:3 },
    { l:'c', topics:['Motion (Kinematics)', 'Newton\'s Laws & Momentum'], marks:4 }
  ] },
  { n:18, topic:'Newton\'s Laws & Momentum', parts:[
    { l:'a.i', topics:['Newton\'s Laws & Momentum'], marks:3 },
    { l:'a.ii', topics:['Newton\'s Laws & Momentum'], marks:2 },
    { l:'b', topics:['Forces in Action', 'Practical Skills & Data Analysis'], marks:6 }
  ] },
  { n:19, topic:'Thermal Physics', parts:[
    { l:'a', topics:['Thermal Physics'], marks:2 },
    { l:'b.i', topics:['Thermal Physics'], marks:3 },
    { l:'b.ii', topics:['Thermal Physics'], marks:1 },
    { l:'b.iii', topics:['Thermal Physics'], marks:1 },
    { l:'b.iv', topics:['Thermal Physics'], marks:4 }
  ] },
  { n:20, topic:'Oscillations (SHM)', parts:[
    { l:'a', topics:['Oscillations (SHM)', 'Quantities, Units & Measurements'], marks:2 },
    { l:'b.i', topics:['Oscillations (SHM)'], marks:2 },
    { l:'b.ii.1', topics:['Oscillations (SHM)'], marks:3 },
    { l:'b.ii.2', topics:['Oscillations (SHM)'], marks:3 },
    { l:'b.ii.3', topics:['Oscillations (SHM)'], marks:2 }
  ] },
  { n:21, topic:'Astrophysics & Cosmology', parts:[
    { l:'a', topics:['Astrophysics & Cosmology'], marks:1 },
    { l:'b.i', topics:['Astrophysics & Cosmology'], marks:2 },
    { l:'b.ii', topics:['Astrophysics & Cosmology', 'Thermal Physics'], marks:3 },
    { l:'c.i', topics:['Astrophysics & Cosmology'], marks:2 },
    { l:'c.ii', topics:['Astrophysics & Cosmology'], marks:4 }
  ] },
  { n:22, topic:'Astrophysics & Cosmology', parts:[
    { l:'a', topics:['Astrophysics & Cosmology', 'Practical Skills & Data Analysis'], marks:2 },
    { l:'b', topics:['Astrophysics & Cosmology', 'Nuclear & Particle Physics'], marks:6 }
  ] },
  { n:23, topic:'Gravitational Fields', parts:[
    { l:'a', topics:['Gravitational Fields', 'Circular Motion'], marks:3 },
    { l:'b.i', topics:['Gravitational Fields'], marks:2 },
    { l:'b.ii', topics:['Gravitational Fields', 'Work, Energy & Power'], marks:3 },
    { l:'b.iii', topics:['Gravitational Fields'], marks:1 }
  ] }
];
               
               BAKED_TEMPLATES['physics']['Paper 1']['2023'] = [
  { n:1, topic:'Quantities, Units & Measurements', parts:[{ l:'', topics:['Quantities, Units & Measurements'], marks:1 }] },
  { n:2, topic:'Forces in Action', parts:[{ l:'', topics:['Forces in Action'], marks:1 }] },
  { n:3, topic:'Motion (Kinematics)', parts:[{ l:'', topics:['Motion (Kinematics)'], marks:1 }] },
  { n:4, topic:'Materials', parts:[{ l:'', topics:['Materials'], marks:1 }] },
  { n:5, topic:'Materials', parts:[{ l:'', topics:['Materials'], marks:1 }] },
  { n:6, topic:'Newton\'s Laws & Momentum', parts:[{ l:'', topics:['Newton\'s Laws & Momentum'], marks:1 }] },
  { n:7, topic:'Gravitational Fields', parts:[{ l:'', topics:['Gravitational Fields'], marks:1 }] },
  { n:8, topic:'Newton\'s Laws & Momentum', parts:[{ l:'', topics:['Newton\'s Laws & Momentum'], marks:1 }] },
  { n:9, topic:'Thermal Physics', parts:[{ l:'', topics:['Thermal Physics'], marks:1 }] },
  { n:10, topic:'Thermal Physics', parts:[{ l:'', topics:['Thermal Physics'], marks:1 }] },
  { n:11, topic:'Gravitational Fields', parts:[{ l:'', topics:['Gravitational Fields', 'Circular Motion'], marks:1 }] },
  { n:12, topic:'Oscillations (SHM)', parts:[{ l:'', topics:['Oscillations (SHM)'], marks:1 }] },
  { n:13, topic:'Astrophysics & Cosmology', parts:[{ l:'', topics:['Astrophysics & Cosmology'], marks:1 }] },
  { n:14, topic:'Astrophysics & Cosmology', parts:[{ l:'', topics:['Astrophysics & Cosmology', 'Waves'], marks:1 }] },
  { n:15, topic:'Astrophysics & Cosmology', parts:[{ l:'', topics:['Astrophysics & Cosmology'], marks:1 }] },
  { n:16, topic:'Motion (Kinematics)', parts:[
    { l:'a.i', topics:['Motion (Kinematics)', 'Quantities, Units & Measurements'], marks:2 },
    { l:'a.ii', topics:['Motion (Kinematics)'], marks:1 },
    { l:'a.iii', topics:['Motion (Kinematics)'], marks:3 },
    { l:'b.i', topics:['Newton\'s Laws & Momentum'], marks:2 },
    { l:'b.ii', topics:['Work, Energy & Power', 'Forces in Action'], marks:2 }
  ] },
  { n:17, topic:'Circular Motion', parts:[
    { l:'a.i', topics:['Circular Motion'], marks:1 },
    { l:'a.ii', topics:['Circular Motion'], marks:2 },
    { l:'a.iii', topics:['Circular Motion'], marks:3 },
    { l:'a.iv', topics:['Circular Motion'], marks:2 },
    { l:'b.i', topics:['Motion (Kinematics)'], marks:2 },
    { l:'b.ii', topics:['Circular Motion', 'Motion (Kinematics)'], marks:3 },
    { l:'b.iii', topics:['Forces in Action', 'Practical Skills & Data Analysis'], marks:3 }
  ] },
  { n:18, topic:'Practical Skills & Data Analysis', parts:[{ l:'', topics:['Practical Skills & Data Analysis', 'Motion (Kinematics)'], marks:6 }] },
  { n:19, topic:'Forces in Action', parts:[
    { l:'a', topics:['Forces in Action', 'Practical Skills & Data Analysis'], marks:3 },
    { l:'b.i', topics:['Work, Energy & Power', 'Forces in Action'], marks:2 },
    { l:'b.ii', topics:['Work, Energy & Power'], marks:1 }
  ] },
  { n:20, topic:'Thermal Physics', parts:[
    { l:'a', topics:['Thermal Physics'], marks:3 },
    { l:'b.i', topics:['Thermal Physics'], marks:1 },
    { l:'b.ii', topics:['Forces in Action', 'Thermal Physics'], marks:2 },
    { l:'b.iii', topics:['Forces in Action'], marks:2 },
    { l:'b.iv', topics:['Thermal Physics'], marks:2 },
    { l:'c', topics:['Newton\'s Laws & Momentum'], marks:2 },
    { l:'d', topics:['Forces in Action', 'Work, Energy & Power'], marks:2 }
  ] },
  { n:21, topic:'Oscillations (SHM)', parts:[
    { l:'a.i', topics:['Oscillations (SHM)', 'Quantities, Units & Measurements'], marks:2 },
    { l:'a.ii', topics:['Oscillations (SHM)'], marks:2 },
    { l:'a.iii', topics:['Oscillations (SHM)'], marks:2 },
    { l:'b.i', topics:['Practical Skills & Data Analysis'], marks:2 },
    { l:'b.ii', topics:['Practical Skills & Data Analysis'], marks:2 },
    { l:'b.iii', topics:['Oscillations (SHM)'], marks:3 },
    { l:'c', topics:['Oscillations (SHM)', 'Work, Energy & Power'], marks:4 }
  ] },
  { n:22, topic:'Astrophysics & Cosmology', parts:[{ l:'', topics:['Astrophysics & Cosmology', 'Quantum Physics', 'Practical Skills & Data Analysis'], marks:6 }] },
  { n:23, topic:'Astrophysics & Cosmology', parts:[
    { l:'a.i', topics:['Astrophysics & Cosmology'], marks:1 },
    { l:'a.ii', topics:['Astrophysics & Cosmology', 'Practical Skills & Data Analysis'], marks:2 },
    { l:'b.i', topics:['Thermal Physics', 'Astrophysics & Cosmology'], marks:2 },
    { l:'b.ii', topics:['Gravitational Fields'], marks:1 },
    { l:'b.iii', topics:['Gravitational Fields', 'Work, Energy & Power'], marks:3 },
    { l:'b.iv', topics:['Thermal Physics', 'Gravitational Fields'], marks:1 }
  ] }
];
               
               BAKED_TEMPLATES['physics']['Paper 1']['2024'] = [
  { n:1, topic:'Quantities, Units & Measurements', parts:[{ l:'', topics:['Quantities, Units & Measurements'], marks:1 }] },
  { n:2, topic:'Quantities, Units & Measurements', parts:[{ l:'', topics:['Quantities, Units & Measurements'], marks:1 }] },
  { n:3, topic:'Circular Motion', parts:[{ l:'', topics:['Circular Motion'], marks:1 }] },
  { n:4, topic:'Motion (Kinematics)', parts:[{ l:'', topics:['Motion (Kinematics)'], marks:1 }] },
  { n:5, topic:'Forces in Action', parts:[{ l:'', topics:['Forces in Action'], marks:1 }] },
  { n:6, topic:'Forces in Action', parts:[{ l:'', topics:['Forces in Action'], marks:1 }] },
  { n:7, topic:'Motion (Kinematics)', parts:[{ l:'', topics:['Motion (Kinematics)'], marks:1 }] },
  { n:8, topic:'Forces in Action', parts:[{ l:'', topics:['Forces in Action'], marks:1 }] },
  { n:9, topic:'Oscillations (SHM)', parts:[{ l:'', topics:['Oscillations (SHM)'], marks:1 }] },
  { n:10, topic:'Oscillations (SHM)', parts:[{ l:'', topics:['Oscillations (SHM)'], marks:1 }] },
  { n:11, topic:'Circular Motion', parts:[{ l:'', topics:['Circular Motion'], marks:1 }] },
  { n:12, topic:'Oscillations (SHM)', parts:[{ l:'', topics:['Oscillations (SHM)'], marks:1 }] },
  { n:13, topic:'Newton\'s Laws & Momentum', parts:[{ l:'', topics:['Newton\'s Laws & Momentum'], marks:1 }] },
  { n:14, topic:'Gravitational Fields', parts:[{ l:'', topics:['Gravitational Fields'], marks:1 }] },
  { n:15, topic:'Astrophysics & Cosmology', parts:[{ l:'', topics:['Astrophysics & Cosmology'], marks:1 }] },
  { n:16, topic:'Work, Energy & Power', parts:[
    { l:'a.i', topics:['Motion (Kinematics)'], marks:2 },
    { l:'a.ii', topics:['Forces in Action'], marks:2 },
    { l:'a.iii', topics:['Work, Energy & Power', 'Forces in Action'], marks:3 },
    { l:'b', topics:['Work, Energy & Power'], marks:3 },
    { l:'c', topics:['Work, Energy & Power'], marks:2 }
  ] },
  { n:17, topic:'Newton\'s Laws & Momentum', parts:[
    { l:'a', topics:['Newton\'s Laws & Momentum'], marks:1 },
    { l:'b.i', topics:['Motion (Kinematics)'], marks:2 },
    { l:'b.ii', topics:['Newton\'s Laws & Momentum'], marks:2 },
    { l:'b.iii', topics:['Newton\'s Laws & Momentum'], marks:3 }
  ] },
  { n:18, topic:'Materials', parts:[
    { l:'a.i', topics:['Practical Skills & Data Analysis'], marks:1 },
    { l:'a.ii', topics:['Materials', 'Practical Skills & Data Analysis'], marks:3 },
    { l:'a.iii', topics:['Materials'], marks:2 },
    { l:'a.iv.1', topics:['Work, Energy & Power', 'Quantities, Units & Measurements'], marks:1 },
    { l:'a.iv.2', topics:['Materials', 'Work, Energy & Power'], marks:2 },
    { l:'b', topics:['Practical Skills & Data Analysis'], marks:2 }
  ] },
  { n:19, topic:'Waves', parts:[{ l:'', topics:['Waves', 'Practical Skills & Data Analysis'], marks:6 }] },
  { n:20, topic:'Thermal Physics', parts:[
    { l:'a.i', topics:['Thermal Physics'], marks:1 },
    { l:'a.ii', topics:['Thermal Physics'], marks:2 },
    { l:'b.i', topics:['Thermal Physics'], marks:2 },
    { l:'b.ii', topics:['Thermal Physics'], marks:3 },
    { l:'c.i', topics:['Thermal Physics'], marks:3 },
    { l:'c.ii', topics:['Thermal Physics'], marks:2 }
  ] },
  { n:21, topic:'Astrophysics & Cosmology', parts:[
    { l:'a.i', topics:['Quantum Physics', 'Astrophysics & Cosmology'], marks:2 },
    { l:'a.ii', topics:['Astrophysics & Cosmology'], marks:3 },
    { l:'b.i', topics:['Astrophysics & Cosmology'], marks:2 },
    { l:'b.ii', topics:['Astrophysics & Cosmology'], marks:4 },
    { l:'c', topics:['Astrophysics & Cosmology', 'Practical Skills & Data Analysis'], marks:3 }
  ] },
  { n:22, topic:'Gravitational Fields', parts:[
    { l:'a.i', topics:['Gravitational Fields', 'Circular Motion'], marks:1 },
    { l:'a.ii', topics:['Gravitational Fields', 'Circular Motion'], marks:3 },
    { l:'b.i', topics:['Gravitational Fields', 'Circular Motion', 'Work, Energy & Power'], marks:2 },
    { l:'b.ii', topics:['Gravitational Fields', 'Work, Energy & Power'], marks:2 },
    { l:'c', topics:['Work, Energy & Power', 'Gravitational Fields', 'Practical Skills & Data Analysis'], marks:6 }
  ] },
  { n:23, topic:'Quantum Physics', parts:[
    { l:'a', topics:['Quantum Physics'], marks:2 },
    { l:'b.i', topics:['Quantum Physics', 'Astrophysics & Cosmology'], marks:2 },
    { l:'b.ii', topics:['Astrophysics & Cosmology', 'Waves'], marks:2 },
    { l:'b.iii', topics:['Astrophysics & Cosmology'], marks:1 }
  ] }
];
               
               BAKED_TEMPLATES['physics']['Paper 1']['2020'] = [
  { n:1, topic:'Work, Energy & Power', parts:[{ l:'', topics:['Work, Energy & Power'], marks:1 }] },
  { n:2, topic:'Quantities, Units & Measurements', parts:[{ l:'', topics:['Quantities, Units & Measurements'], marks:1 }] },
  { n:3, topic:'Motion (Kinematics)', parts:[{ l:'', topics:['Motion (Kinematics)'], marks:1 }] },
  { n:4, topic:'Oscillations (SHM)', parts:[{ l:'', topics:['Oscillations (SHM)'], marks:1 }] },
  { n:5, topic:'Gravitational Fields', parts:[{ l:'', topics:['Gravitational Fields'], marks:1 }] },
  { n:6, topic:'Quantum Physics', parts:[{ l:'', topics:['Quantum Physics'], marks:1 }] },
  { n:7, topic:'Astrophysics & Cosmology', parts:[{ l:'', topics:['Astrophysics & Cosmology'], marks:1 }] },
  { n:8, topic:'Forces in Action', parts:[{ l:'', topics:['Forces in Action'], marks:1 }] },
  { n:9, topic:'Waves', parts:[{ l:'', topics:['Waves'], marks:1 }] },
  { n:10, topic:'Materials', parts:[{ l:'', topics:['Materials'], marks:1 }] },
  { n:11, topic:'Astrophysics & Cosmology', parts:[{ l:'', topics:['Astrophysics & Cosmology'], marks:1 }] },
  { n:12, topic:'Oscillations (SHM)', parts:[{ l:'', topics:['Oscillations (SHM)'], marks:1 }] },
  { n:13, topic:'Practical Skills & Data Analysis', parts:[{ l:'', topics:['Practical Skills & Data Analysis', 'Materials'], marks:1 }] },
  { n:14, topic:'Motion (Kinematics)', parts:[{ l:'', topics:['Motion (Kinematics)'], marks:1 }] },
  { n:15, topic:'Thermal Physics', parts:[{ l:'', topics:['Thermal Physics'], marks:1 }] },
  { n:16, topic:'Work, Energy & Power', parts:[
    { l:'a', topics:['Forces in Action'], marks:2 },
    { l:'b', topics:['Forces in Action'], marks:1 },
    { l:'c', topics:['Forces in Action'], marks:1 },
    { l:'d', topics:['Work, Energy & Power'], marks:3 },
    { l:'e', topics:['Materials'], marks:3 }
  ] },
  { n:17, topic:'Thermal Physics', parts:[
    { l:'a.i', topics:['Thermal Physics'], marks:3 },
    { l:'a.ii', topics:['Thermal Physics'], marks:3 },
    { l:'b', topics:['Thermal Physics', 'Practical Skills & Data Analysis'], marks:6 }
  ] },
  { n:18, topic:'Motion (Kinematics)', parts:[
    { l:'a', topics:['Work, Energy & Power'], marks:2 },
    { l:'b', topics:['Motion (Kinematics)'], marks:2 },
    { l:'c', topics:['Motion (Kinematics)'], marks:3 },
    { l:'d.i', topics:['Newton\'s Laws & Momentum'], marks:1 },
    { l:'d.ii', topics:['Newton\'s Laws & Momentum'], marks:2 }
  ] },
  { n:19, topic:'Newton\'s Laws & Momentum', parts:[{ l:'', topics:['Newton\'s Laws & Momentum', 'Practical Skills & Data Analysis'], marks:6 }] },
  { n:20, topic:'Circular Motion', parts:[
    { l:'a', topics:['Circular Motion'], marks:3 },
    { l:'b', topics:['Circular Motion', 'Practical Skills & Data Analysis'], marks:4 }
  ] },
  { n:21, topic:'Thermal Physics', parts:[
    { l:'a.i', topics:['Thermal Physics'], marks:2 },
    { l:'a.ii', topics:['Thermal Physics'], marks:2 },
    { l:'b.i', topics:['Newton\'s Laws & Momentum', 'Thermal Physics'], marks:2 },
    { l:'b.ii.1', topics:['Motion (Kinematics)'], marks:1 },
    { l:'b.ii.2', topics:['Newton\'s Laws & Momentum'], marks:2 },
    { l:'b.iii', topics:['Thermal Physics'], marks:2 }
  ] },
  { n:22, topic:'Forces in Action', parts:[
    { l:'a.i', topics:['Forces in Action'], marks:1 },
    { l:'a.ii', topics:['Forces in Action'], marks:2 },
    { l:'b.i', topics:['Oscillations (SHM)'], marks:3 },
    { l:'b.ii', topics:['Oscillations (SHM)'], marks:2 },
    { l:'b.iii', topics:['Oscillations (SHM)'], marks:2 }
  ] },
  { n:23, topic:'Gravitational Fields', parts:[
    { l:'a.i', topics:['Gravitational Fields', 'Circular Motion'], marks:1 },
    { l:'a.ii', topics:['Gravitational Fields', 'Circular Motion'], marks:2 },
    { l:'b.i', topics:['Gravitational Fields'], marks:1 },
    { l:'b.ii', topics:['Gravitational Fields'], marks:1 },
    { l:'b.iii', topics:['Gravitational Fields'], marks:2 },
    { l:'c', topics:['Gravitational Fields', 'Work, Energy & Power'], marks:3 }
  ] },
  { n:24, topic:'Astrophysics & Cosmology', parts:[
    { l:'a', topics:['Astrophysics & Cosmology'], marks:4 },
    { l:'b.i', topics:['Quantum Physics', 'Astrophysics & Cosmology'], marks:2 },
    { l:'b.ii', topics:['Astrophysics & Cosmology'], marks:2 },
    { l:'c', topics:['Astrophysics & Cosmology'], marks:1 }
  ] }
];
               
               BAKED_TEMPLATES['physics']['Paper 1']['2021'] = [
  { n:1, topic:'Motion (Kinematics)', parts:[{ l:'', topics:['Motion (Kinematics)'], marks:1 }] },
  { n:2, topic:'Quantities, Units & Measurements', parts:[{ l:'', topics:['Quantities, Units & Measurements'], marks:1 }] },
  { n:3, topic:'Motion (Kinematics)', parts:[{ l:'', topics:['Motion (Kinematics)'], marks:1 }] },
  { n:4, topic:'Thermal Physics', parts:[{ l:'', topics:['Thermal Physics'], marks:1 }] },
  { n:5, topic:'Astrophysics & Cosmology', parts:[{ l:'', topics:['Astrophysics & Cosmology'], marks:1 }] },
  { n:6, topic:'Oscillations (SHM)', parts:[{ l:'', topics:['Oscillations (SHM)'], marks:1 }] },
  { n:7, topic:'Gravitational Fields', parts:[{ l:'', topics:['Gravitational Fields'], marks:1 }] },
  { n:8, topic:'Forces in Action', parts:[{ l:'', topics:['Forces in Action'], marks:1 }] },
  { n:9, topic:'Thermal Physics', parts:[{ l:'', topics:['Thermal Physics'], marks:1 }] },
  { n:10, topic:'Work, Energy & Power', parts:[{ l:'', topics:['Work, Energy & Power'], marks:1 }] },
  { n:11, topic:'Gravitational Fields', parts:[{ l:'', topics:['Gravitational Fields', 'Circular Motion'], marks:1 }] },
  { n:12, topic:'Oscillations (SHM)', parts:[{ l:'', topics:['Oscillations (SHM)'], marks:1 }] },
  { n:13, topic:'Materials', parts:[{ l:'', topics:['Materials'], marks:1 }] },
  { n:14, topic:'Newton\'s Laws & Momentum', parts:[{ l:'', topics:['Newton\'s Laws & Momentum'], marks:1 }] },
  { n:15, topic:'Astrophysics & Cosmology', parts:[{ l:'', topics:['Astrophysics & Cosmology'], marks:1 }] },
  { n:16, topic:'Motion (Kinematics)', parts:[
    { l:'a.i', topics:['Quantities, Units & Measurements', 'Motion (Kinematics)'], marks:2 },
    { l:'a.ii', topics:['Practical Skills & Data Analysis'], marks:4 },
    { l:'b.i', topics:['Newton\'s Laws & Momentum'], marks:1 },
    { l:'b.ii', topics:['Newton\'s Laws & Momentum'], marks:3 },
    { l:'b.iii', topics:['Newton\'s Laws & Momentum'], marks:2 }
  ] },
  { n:17, topic:'Materials', parts:[
    { l:'a', topics:['Practical Skills & Data Analysis'], marks:3 },
    { l:'b', topics:['Materials', 'Oscillations (SHM)', 'Practical Skills & Data Analysis'], marks:6 }
  ] },
  { n:18, topic:'Thermal Physics', parts:[
    { l:'a.i', topics:['Thermal Physics'], marks:3 },
    { l:'a.ii', topics:['Thermal Physics'], marks:2 },
    { l:'a.iii', topics:['Thermal Physics'], marks:2 },
    { l:'b.i', topics:['Thermal Physics'], marks:2 },
    { l:'b.ii', topics:['Thermal Physics'], marks:3 },
    { l:'b.iii', topics:['Thermal Physics'], marks:1 }
  ] },
  { n:19, topic:'Forces in Action', parts:[
    { l:'a', topics:['Forces in Action'], marks:1 },
    { l:'b.i', topics:['Forces in Action'], marks:3 },
    { l:'b.ii', topics:['Forces in Action'], marks:2 },
    { l:'c', topics:['Forces in Action'], marks:1 }
  ] },
  { n:20, topic:'Gravitational Fields', parts:[
    { l:'a.i', topics:['Gravitational Fields'], marks:1 },
    { l:'a.ii', topics:['Gravitational Fields'], marks:1 },
    { l:'b', topics:['Gravitational Fields', 'Work, Energy & Power', 'Circular Motion'], marks:6 }
  ] },
  { n:21, topic:'Oscillations (SHM)', parts:[
    { l:'a', topics:['Oscillations (SHM)'], marks:4 },
    { l:'b.i', topics:['Work, Energy & Power'], marks:3 },
    { l:'b.ii.1', topics:['Motion (Kinematics)'], marks:2 },
    { l:'b.ii.2', topics:['Motion (Kinematics)'], marks:2 }
  ] },
  { n:22, topic:'Circular Motion', parts:[
    { l:'a.i', topics:['Circular Motion', 'Quantities, Units & Measurements'], marks:2 },
    { l:'a.ii', topics:['Circular Motion', 'Practical Skills & Data Analysis'], marks:3 },
    { l:'a.iii', topics:['Circular Motion', 'Newton\'s Laws & Momentum'], marks:3 },
    { l:'b', topics:['Circular Motion'], marks:2 }
  ] },
  { n:23, topic:'Astrophysics & Cosmology', parts:[
    { l:'a', topics:['Gravitational Fields', 'Practical Skills & Data Analysis'], marks:4 },
    { l:'b.i', topics:['Astrophysics & Cosmology'], marks:1 },
    { l:'b.ii', topics:['Astrophysics & Cosmology'], marks:2 },
    { l:'b.iii', topics:['Quantum Physics', 'Astrophysics & Cosmology'], marks:2 },
    { l:'b.iv', topics:['Quantum Physics', 'Astrophysics & Cosmology'], marks:1 },
    { l:'b.v', topics:['Quantum Physics', 'Waves'], marks:3 },
    { l:'c', topics:['Astrophysics & Cosmology'], marks:2 }
  ] }
];},
    'Paper 2': {},
    'Paper 3': {},
  },
  cs: {
    'Paper 1': {},
    'Paper 2': {},
  },
};

// ── Maths ────────────────────────────────────────────────────────────────────


// ── Physics ──────────────────────────────────────────────────────────────────


// ── Computer Science ─────────────────────────────────────────────────────────
