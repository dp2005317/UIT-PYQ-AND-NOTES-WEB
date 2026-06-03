export interface Topic {
  title: string;
  topics: string[];
}

export interface Note {
  title: string;
  content: string;
}

export interface Flashcard {
  question: string;
  answer: string;
}

export interface PYQ {
  year: number;
  type: string;
  duration: string;
  questions: number;
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  semester: string;
  description: string;
  modules: Topic[];
  notes: Note[];
  flashcards: Flashcard[];
  pyqs: PYQ[];
}

export type SyllabusData = Record<number, Subject[]>;

export const SYLLABUS_DATA: SyllabusData = {
  1: [
    {
      id: 'math1',
      name: 'Mathematics - I (Calculus and Linear Algebra)',
      code: 'BSC-M 102',
      semester: 'I & II',
      description: 'Calculus, Evolutes, Matrices, Vector Spaces and transformations.',
      modules: [
        { title: 'Module 1 & 2: Calculus', topics: ['Evolutes, involutes', 'definite/improper integrals', 'Beta/Gamma functions', 'applications (surface areas/volumes)', 'Rolle\'s theorem', 'Mean value theorems', 'Taylor\'s/Maclaurin theorems', 'Indeterminate forms', 'Maxima and minima'] },
        { title: 'Module 3: Matrices', topics: ['Vectors: addition/scalar multiplication', 'Linear systems', 'linear Independence', 'rank', 'determinants', 'Cramer\'s Rule', 'inverse', 'Gauss/Gauss-Jordan elimination'] },
        { title: 'Module 4 & 5: Vector Spaces', topics: ['Linear dependence, basis, dimension', 'Linear transformations, range/kernel, rank/nullity', 'Eigenvalues, eigenvectors, symmetric/skew-symmetric/orthogonal matrices, diagonalisation', 'Inner product spaces, Gram-Schmidt'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'math2',
      name: 'Mathematics - II (Probability and Statistics)',
      code: 'BSC-M 202',
      semester: 'I & II',
      description: 'Probability spaces, distributions, statistics, and curve fitting.',
      modules: [
        { title: 'Module 1 & 2: Basic & Continuous Probability', topics: ['Probability spaces, conditional probability, independence', 'Discrete random variables, multinomial/Poisson/binomial distributions', 'Continuous variables, normal, exponential, gamma densities'] },
        { title: 'Module 3: Bivariate Distributions', topics: ['Properties', 'distribution of sums and quotients', 'conditional densities', 'Bayes\' rule'] },
        { title: 'Module 4 & 5: Basic & Applied Statistics', topics: ['Measures of Central tendency (Moments, skewness, Kurtosis)', 'Curve fitting (least squares)', 'Test of significance (Large sample test for proportions, means, etc.)'] },
        { title: 'Module 6: Small Samples', topics: ['Test for single mean, difference of means, correlation coefficients', 'Chi-square test for goodness of fit'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'prog101',
      name: 'Programming for Problem Solving',
      code: 'ESC-CSE 101/201',
      semester: 'I & II',
      description: 'Introduction to programming, algorithms, branching, loops, and basic data structures.',
      modules: [
        { title: 'Unit 1: Introduction to Programming', topics: ['Computer systems', 'Idea of Algorithm', 'Variables, memory', 'Syntax/Logical Errors'] },
        { title: 'Unit 2 & 3: Branching, Loops & Arrays', topics: ['Conditional Branching (if-then-else)', 'Iteration (while, for)', '1-D and 2-D Arrays', 'Character arrays/Strings'] },
        { title: 'Unit 4 & 5: Algorithms & Functions', topics: ['Searching, Sorting (Bubble, Insertion, Selection)', 'Functions, Parameter passing, call by value/reference'] },
        { title: 'Unit 6-8: Recursion, Structures & Pointers', topics: ['Recursion (Factorial, Fibonacci)', 'Defining structures', 'Pointers, Use in self-referential structures', 'linked list notion', 'File Handling'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'ee101',
      name: 'Basic Electrical Engineering',
      code: 'ESC-EE 101/201',
      semester: 'I & II',
      description: 'DC & AC Circuits, Transformers, Electrical Machines and Power Converters.',
      modules: [
        { title: 'Module 1 & 2: DC & AC Circuits', topics: ['R, L, C elements, Kirchoff laws, Superposition, Thevenin/Norton Theorems', 'Sinusoidal waveforms, peak/rms values, real/reactive power', 'Three-phase balanced circuits'] },
        { title: 'Module 3 & 4: Transformers & Electrical Machines', topics: ['Magnetic materials, ideal/practical transformers, losses', 'Three-phase induction motors, DC motors, Synchronous generators'] },
        { title: 'Module 5 & 6: Power Converters & Installations', topics: ['DC-DC buck/boost, Inverters', 'Switchgear (MCB, ELCB, MCCB), Earthing, Batteries'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'chem101',
      name: 'Chemistry-I',
      code: 'BSC-CH 101/202',
      semester: 'I & II',
      description: 'Atomic structure, spectroscopic techniques, periodic properties, and stereochemistry.',
      modules: [
        { title: 'Modules 1-4: Atomic/molecular structure', topics: ['Schrodinger, Molecular orbitals', 'Spectroscopic techniques (Electronic, Vibrational, Rotational, NMR)', 'Intermolecular forces', 'Free energy in chemical equilibria'] },
        { title: 'Modules 5-7: Periodic properties', topics: ['effective nuclear charge, ionization energies', 'Stereochemistry (isomers, chirality)', 'Organic reactions and synthesis of a drug molecule'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'phys101',
      name: 'Physics',
      code: 'BSC-PH 101-105/201-205',
      semester: 'I & II',
      description: 'Electromagnetic theory, mechanics, quantum mechanics, oscillations, and semiconductors.',
      modules: [
        { title: 'Electromagnetic Theory', topics: ['Electrostatics, Magnetostatics', 'Faraday\'s law, Maxwell\'s equations, EM waves'] },
        { title: 'Mechanics', topics: ['Newton\'s laws, Central forces, Non-inertial frames', 'Harmonic oscillators, Rigid body motion'] },
        { title: 'Quantum Mechanics', topics: ['Wave nature of particles, Schrodinger equation', 'Molecular bonding, Free electron theory'] },
        { title: 'Oscillations, Waves and Optics', topics: ['Simple harmonic motion, Transverse/longitudinal waves', 'Geometric/Wave optics, Lasers'] },
        { title: 'Semiconductor Physics', topics: ['Intrinsic/extrinsic semiconductors, Carrier transport', 'p-n junction', 'Engineered materials'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'engg_graphics',
      name: 'Engineering Graphics & Design',
      code: 'ESC-ME 102/202',
      semester: 'I & II',
      description: 'Orthographic Projections, Regular Solids, Computer Graphics.',
      modules: [
        { title: 'Engineering Graphics & Design', topics: ['Orthographic Projections', 'Regular Solids', 'Sections, Isometric Projections', 'Computer Graphics (CAD, 2D/3D modeling)'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'workshop',
      name: 'Workshop/Manufacturing Practices',
      code: 'ESC-ME 101/201',
      semester: 'I & II',
      description: 'Casting, forming, machining, joining, CNC machining, Carpentry.',
      modules: [
        { title: 'Workshop/Manufacturing Practices', topics: ['Casting, forming, machining, joining', 'CNC machining, Fitting, Carpentry, Welding'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'english101',
      name: 'English',
      code: 'HSM-HU 101/201',
      semester: 'I & II',
      description: 'Vocabulary Building, Basic Writing Skills, Précis/Essay Writing.',
      modules: [
        { title: 'English', topics: ['Vocabulary', 'Basic Writing Skills, Common Errors', 'Précis/Essay Writing', 'Oral Communication'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    }
  ],
  2: [
    {
      id: 'aec301',
      name: 'Analog Electronic Circuits',
      code: 'ESC-EC 301',
      semester: 'III',
      description: 'Diode Circuits, BJT & FET, Operational Amplifiers, Oscillators.',
      modules: [
        { title: 'Module 1: Diode Circuits', topics: ['Ideal models, Clipper/Clamper, Zener Diodes, SMPS'] },
        { title: 'Module 2: BJT & FET', topics: ['BJT characteristics, Ebers-Moll', 'JFET/MOSFET operation', 'Small signal analysis'] },
        { title: 'Module 3: Power & Operational Amplifiers', topics: ['Class A/B/AB/C/D', 'Ideal OP-AMP parameters', 'Inverting/Non-inverting, Integrators, Differentiators, Schmitt triggers, Active RC filters'] },
        { title: 'Module 4: Feedback and Oscillators', topics: ['Series-shunt/series-series topologies', 'Barkhausen criterion, Wien Bridge, Crystal Oscillators', '555 timer'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'dsa301',
      name: 'Data Structure & Algorithms',
      code: 'PCC-CSE 301',
      semester: 'III',
      description: 'Searching, Stacks, Queues, Linked Lists, Trees, Sorting, and Graphs.',
      modules: [
        { title: 'Module 1: Intro & Searching', topics: ['Data Structure Operations', 'Asymptotic Notations', 'Linear/Binary Search'] },
        { title: 'Module 2: Stacks and Queues', topics: ['ADT Stack operations, Expression Evaluation', 'Simple, Circular, and Priority Queues'] },
        { title: 'Module 3: Linked Lists & Trees', topics: ['Singly/Doubly/Circular Linked Lists', 'Types of Trees: Binary Tree, BST, AVL Tree, B Tree, B+ Tree'] },
        { title: 'Module 4: Sorting, Hashing & Graphs', topics: ['Selection, Bubble, Insertion, Quick, Merge, Heap Sort', 'Hashing', 'Graph traversal (DFS, BFS)'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'itw302',
      name: 'IT Workshop (Sci Lab/MATLAB)',
      code: 'PCC-CSE 302',
      semester: 'III',
      description: 'MATLAB basics, Data Types, Plots and Graphics.',
      modules: [
        { title: 'Modules', topics: ['Intro to MATLAB, Data Types, Operators', 'Scripting and Functions', 'Matrix/Array Manipulations', '2-D Plots and Graphics', 'File Handling, Debugging'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'dl302',
      name: 'Digital Logic',
      code: 'ESC-CSE 302',
      semester: 'III',
      description: 'Number Systems, Logic Gates, Combinational/Sequential Logic, PLDs.',
      modules: [
        { title: 'Module 1: Number System and Codes', topics: ['Decimal, binary, octal, hex', '1\'s/2\'s complement', 'BCD, Excess-3, Gray codes'] },
        { title: 'Module 2 & 3: Logic Gates & Simplification', topics: ['AND, OR, NAND, NOR, XOR', 'Universal gates, De Morgan\'s, SOP/POS', 'K-maps, Quinn Mc-Clusky'] },
        { title: 'Module 4: Combinational Logic', topics: ['Adders, Subtractors, Multiplexers, Decoders, Encoders, Comparators'] },
        { title: 'Module 5 & 6: Sequential Logic & PLDs', topics: ['Latches, Flip-flops (R-S, J-K, D, T)', 'Registers, Counters, Finite State Machines', 'PAL, PLA'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'dc302',
      name: 'Differential Calculus',
      code: 'BSC-M 302',
      semester: 'III',
      description: 'Successive Derivatives, Multivariable Functions, Functional Analysis.',
      modules: [
        { title: 'Module 1 & 2: Successive Derivatives', topics: ['Leibnitz\'s Theorem, Concavity/Convexity, Curvature, Asymptotes', 'Limit, Continuity, Differentiability of multivariable functions', 'Partial Derivatives, Jacobian, Taylor\'s/Maclaurin\'s, Lagrange\'s multipliers'] },
        { title: 'Module 3: Functional Analysis', topics: ['Metric space, Normed Space, Banach Space, Inner Product Space, Hilbert Space'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'eb301',
      name: 'Engineering Biology',
      code: 'BSC-BS 301',
      semester: 'III',
      description: 'Classification, Genetics, Biomolecules, Information Transfer.',
      modules: [
        { title: 'Modules', topics: ['Introduction to Biology, Classification (cellularity, molecular taxonomy)', 'Genetics (Mendel\'s laws, mapping)', 'Biomolecules, Enzymes', 'Information Transfer (DNA/RNA, genetic code)', 'Macromolecular analysis, Metabolism, Microbiology'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'loc381',
      name: 'Linguistics & Oral Communication',
      code: 'HSM-HU 381',
      semester: 'III',
      description: 'Phonetics, Conversation Strategies, Presentation Skills.',
      modules: [
        { title: 'Modules', topics: ['Indian English Literature Evolution', 'Phonetics (Speech organs, vowels/consonants)', 'Conversation & GD Strategies, Presentation Skills'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'dm401',
      name: 'Discrete Mathematics',
      code: 'PCC-CSE 401',
      semester: 'IV',
      description: 'Sets, Relations, Functions, Propositional Logic, Algebraic Structures.',
      modules: [
        { title: 'Module 1: Sets, Relations, Functions', topics: ['Cartesian Products, Equivalence Relation, Bijective functions', 'Mathematical Induction'] },
        { title: 'Module 2: Counting Techniques', topics: ['Inclusion/exclusion, pigeon-hole principle, permutation/combination'] },
        { title: 'Module 3: Propositional Logic', topics: ['Validity, Basic Connectives, Truth Tables, Logical Equivalence, Quantifiers', 'Proofs by Contradiction'] },
        { title: 'Module 4: Algebraic Structures', topics: ['Semi Groups, Monoids, Groups, Rings, Fields', 'Boolean Algebra'] },
        { title: 'Module 5: Graphs and Trees', topics: ['Connectivity, Path, Cycle, Isomorphism', 'Eulerian/Hamiltonian Walks, Graph Colouring, Planar Graphs'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'coa402',
      name: 'Computer Organization & Architecture',
      code: 'PCC-CSE 402',
      semester: 'IV',
      description: 'CPU, Memory, Data Representation, Pipelining.',
      modules: [
        { title: 'Module 1: Functional Blocks & Data Representation', topics: ['CPU, memory, I/O', 'Instruction execution', 'Fixed/floating-point, Computer arithmetic'] },
        { title: 'Module 2: CPU Control Unit & Memory', topics: ['Hardwired/micro-programmed approaches', 'I/O transfers (Program controlled, interrupt-driven, DMA)'] },
        { title: 'Module 3: Pipelining & Parallel Processors', topics: ['Pipelining concepts, pipeline hazards', 'Concurrent access, cache coherency'] },
        { title: 'Module 4: Memory Organization', topics: ['Memory interleaving, hierarchical memory, cache mapping, replacement algorithms'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'os403',
      name: 'Operating Systems',
      code: 'PCC-CSE 403',
      semester: 'IV',
      description: 'Processes, Threads, Scheduling, IPC, Deadlocks, Memory Management.',
      modules: [
        { title: 'Module 1: Processes & Threads', topics: ['OS Services, System Calls', 'Process States, PCB, Context switching, Multithreading'] },
        { title: 'Module 2: Process Scheduling', topics: ['FCFS, SJF, RR, Real-Time scheduling'] },
        { title: 'Module 3: Inter-process Communication', topics: ['Critical Section, Mutual Exclusion, Semaphores, Monitors', 'Classical Problems'] },
        { title: 'Module 4: Deadlocks', topics: ['Necessary conditions, Prevention', 'Banker\'s algorithm', 'Detection/Recovery'] },
        { title: 'Module 5: Memory Management', topics: ['Contiguous allocation, Paging, Virtual Memory', 'Demand paging, Page Replacement (FIFO, LRU)'] },
        { title: 'Module 6 & 7: I/O & File Management', topics: ['Device controllers, DMA', 'File Access methods', 'Disk scheduling (FCFS, SSTF, SCAN, C-SCAN)'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'daa404',
      name: 'Design & Analysis of Algorithms',
      code: 'PCC-CSE 404',
      semester: 'IV',
      description: 'Asymptotic analysis, Algorithmic Strategies, NP-Completeness.',
      modules: [
        { title: 'Module 1: Introduction', topics: ['Asymptotic analysis', 'Recurrence relations (Substitution, Recursion tree, Master\'s theorem)'] },
        { title: 'Module 2: Algorithmic Strategies', topics: ['Brute-Force, Greedy, Dynamic Programming, Branch & Bound, Backtracking'] },
        { title: 'Module 3: Graph and Tree Algorithms', topics: ['DFS, BFS, Shortest path', 'Minimum Spanning Tree, Network Flow'] },
        { title: 'Module 4 & 5: Complexity & Advanced', topics: ['P, NP, NP-complete, NP-hard', 'Approximation algorithms, Randomized algorithms'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'ea401',
      name: 'Economics & Accountancy',
      code: 'HSM-HU 401',
      semester: 'IV',
      description: 'Micro/Macro theory, Demand/Supply, Basic Financial Accounting.',
      modules: [
        { title: 'Modules', topics: ['Micro/Macro theory basics, Marshallian theory', 'Demand/Supply, Production (Isoquant, AP, MP, AC, MC)', 'Monopoly/Oligopoly pricing', 'National Income (GDP, GNP), Inflation, Banking', 'Basic Financial Accounting (Double entry, Ledger, Trial Balance, Ratio Analysis, NPV, IRR)'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'es402',
      name: 'Environmental Sciences',
      code: 'MC-HU 402',
      semester: 'IV',
      description: 'Ecosystems, Global Warming, Waste Management.',
      modules: [
        { title: 'Modules', topics: ['Ecosystems, Greenhouse gases/global warming', 'Environmental chemistry (BOD, COD)', 'Air pollution modelling, Environmental Biology (Bioaccumulation)', 'Waste Management, Disaster management, EIA'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'bc481',
      name: 'Business Communication',
      code: 'HSM-HU 481',
      semester: 'IV',
      description: 'Role of Comm, Style, Personality development, Business writings.',
      modules: [
        { title: 'Modules', topics: ['Role of Comm in Information Age, Style/organization', 'Personality development (psychological aspects, etiquette)', 'Business writings (Letters, reports, memos)'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    }
  ],
  3: [
    {
      id: 'ss501',
      name: 'Signals & Systems',
      code: 'ESC-EC 501',
      semester: 'V',
      description: 'Fourier series, Fourier Transform, Z-Transform.',
      modules: [
        { title: 'Modules', topics: ['Continuous/Discrete time signals', 'Fourier series, Fourier Transform, Convolution', 'Parseval\'s Theorem. Sampling theorem', 'Continuous/discrete time LTI systems', 'Z-Transform and Inverse Z-Transform'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'dbms501',
      name: 'Database Management Systems',
      code: 'PCC-CSE 501',
      semester: 'V',
      description: 'Data Models, Relational Algebra, SQL, Normalization, Transactions.',
      modules: [
        { title: 'Module 1: Architecture & Data Models', topics: ['DDL, DML', 'Entity-Relationship, Relational/Object-Oriented Models'] },
        { title: 'Module 2: Relational Query Languages', topics: ['Relational Algebra, SQL3', 'Normalization, Dependency Preservation, Query Optimization'] },
        { title: 'Module 3: Storage Strategies', topics: ['Indices, B-trees, Hashing'] },
        { title: 'Module 4: Transaction Processing', topics: ['Concurrency Control, ACID', 'Serializability, Locking, Timestamping, Recovery'] },
        { title: 'Module 5 & 6: Security & Advanced Topics', topics: ['Authentication, Access Control, SQL Injection', 'Distributed Databases, Data Warehousing, Data Mining'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'flat502',
      name: 'Formal Language & Automata Theory',
      code: 'PCC-CSE 502',
      semester: 'V',
      description: 'Regular Languages, CFG, Pushdown Automata, Turing Machines.',
      modules: [
        { title: 'Module 1 & 2: Intro & Regular Languages', topics: ['Chomsky hierarchy', 'Deterministic (DFA) and Nondeterministic (NFA) automata', 'Regular expressions, Pumping lemma'] },
        { title: 'Module 3 & 4: Context-Free & Context-Sensitive', topics: ['Context-free grammars (CFG), Pushdown Automata (PDA)', 'Chomsky/Greibach normal forms', 'Linear bounded automata'] },
        { title: 'Module 5 & 6: Turing Machines & Undecidability', topics: ['Turing Machine models', 'Church-Turing thesis, Halting problem, Rice\'s theorem'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'oop503',
      name: 'Object Oriented Programming',
      code: 'PCC-CSE 503',
      semester: 'V',
      description: 'ADT, Encapsulation, Polymorphism, Inheritance, GUIs.',
      modules: [
        { title: 'Modules', topics: ['Abstract Data Types (ADT), Encapsulation, Polymorphism, Inheritance', 'Memory management, Generic types and collections', 'Graphical User Interfaces (GUIs) with Scala/Swing', 'Design patterns (Iterator, MVC), Unified Modeling Language (UML)'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'coi501',
      name: 'Constitution of India',
      code: 'MC-HU 501',
      semester: 'V',
      description: 'Indian Constitution, Fundamental Rights, Union/State Government.',
      modules: [
        { title: 'Modules', topics: ['Indian Constitution history, Fundamental Rights/Duties, DPSP', 'Union Government (President, PM, Parliament, Supreme Court)', 'State Government. Local Administration, Panchayati Raj', 'Election Commission, Emergency Provisions, Constitutional Amendments'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'gpd581',
      name: 'Grooming & Personality Development',
      code: 'HSM-HU 581',
      semester: 'V',
      description: 'Self-Esteem, Goal-Setting, Public Speaking.',
      modules: [
        { title: 'Modules', topics: ['Self-Esteem, Goal-Setting', 'Public Speaking, Oral presentation/body language', 'Career Communication (Resume building), Job Interview skills'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'pe511a',
      name: 'Software Engineering (Elective-I)',
      code: 'PEC-CSE 511a',
      semester: 'V',
      description: 'SDLC Models, System Design, Testing, Maintenance.',
      modules: [
        { title: 'Modules', topics: ['SDLC Models (Waterfall, Spiral, Agile)', 'SRS Gathering, System Design (DFD, Coupling/Cohesion)', 'Testing (Alpha/Beta, Black/White box), Maintenance'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'pe511b',
      name: 'Advanced Algorithms (Elective-I)',
      code: 'PEC-CSE 511b',
      semester: 'V',
      description: 'Randomized Algorithms, Parallel Algorithms, NP-Completeness Proofs.',
      modules: [
        { title: 'Modules', topics: ['Randomized Algorithms (Monte Carlo/Las Vegas)', 'Parallel Algorithms, NP-Completeness Proofs', 'Approximation Algorithms, Online Algorithms, Linear Programming'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'pe511c',
      name: 'Advanced Computer Architecture (Elective-I)',
      code: 'PEC-CSE 511c',
      semester: 'V',
      description: 'Parallelism, RISC/CISC, Pipelining hazards, Vector Processing.',
      modules: [
        { title: 'Modules', topics: ['Parallelism, RISC/CISC, Pipelining hazards', 'Vector Processing, Array Processors', 'Loosely/Tightly Coupled Multiprocessors, Memory Interleaving'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'pe511d',
      name: 'Real Time Systems (Elective-I)',
      code: 'PEC-CSE 511d',
      semester: 'V',
      description: 'Timing constraints, Scheduling, Resource Sharing.',
      modules: [
        { title: 'Modules', topics: ['Timing constraints, Clock Driven/Priority Driven Scheduling (EDF, RMS)', 'Resource Sharing (Priority-Ceiling Protocols)', 'Real Time Communication & Databases'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'cd601',
      name: 'Compiler Design',
      code: 'PCC-CSE 601',
      semester: 'VI',
      description: 'Lexical Analysis, Syntax & Semantic Analysis, Code Optimization.',
      modules: [
        { title: 'Module 1: Introduction & Lexical Analysis', topics: ['Phases of a Compiler, Specification/Recognition of Tokens', 'Finite Automata, LEX'] },
        { title: 'Module 2: Syntax & Semantic Analysis', topics: ['Top-down parsing (LL), Bottom-up parsing (LR, SLR, LALR)', 'Attribute grammars, syntax-directed translation'] },
        { title: 'Module 3: Symbol Table & Run-time', topics: ['Memory allocation, parameter passing, Intermediate Code Generation'] },
        { title: 'Module 4: Code Improvement', topics: ['Control-flow analysis, local/global optimization', 'loop optimization, register allocation'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'cn602',
      name: 'Computer Networks',
      code: 'PCC-CSE 602',
      semester: 'VI',
      description: 'OSI Model, MAC layer, IP Routing, TCP/UDP, Application Layer.',
      modules: [
        { title: 'Module 1: Data Comm & Physical Layer', topics: ['OSI model, Multiplexing (FDM, TDM, WDM), Spread Spectrum'] },
        { title: 'Module 2: Data Link & MAC', topics: ['Error Detection (Hamming, CRC), Flow Control (Stop and Wait, Go back N)', 'Multiple access (ALOHA, CSMA/CD)'] },
        { title: 'Module 3: Network Layer', topics: ['IPv4, IPv6, ARP, DHCP', 'Forwarding and Unicast Routing protocols'] },
        { title: 'Module 4: Transport Layer', topics: ['UDP, TCP, Congestion Control, QoS (Leaky/Token Bucket)'] },
        { title: 'Module 5: Application Layer', topics: ['DNS, FTP, HTTP, SNMP, Firewalls, Basic Cryptography'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'ppl653',
      name: 'Python Programming Laboratory',
      code: 'PCC-CSE 653',
      semester: 'VI',
      description: 'Python basics, Strings, Functions, OOP Concepts.',
      modules: [
        { title: 'Modules', topics: ['Python basics, Conditional/Loop Statements, String Operations', 'Functions/Recursion, Exception Handling, File I/O', 'OOP Concepts, GUI Design, Packages'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'gdpi681',
      name: 'Group Discussion & Personal Interview',
      code: 'HSM-HU 681',
      semester: 'VI',
      description: 'Advanced Tech Comm, Presentation, Interview Etiquettes.',
      modules: [
        { title: 'Modules', topics: ['Advanced Tech Comm (Emails), Presentation using audio-visual aids', 'Interview Etiquettes (Mock interviews, telephone/video)', 'Group Discussion Models'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'pe611a',
      name: 'Artificial Intelligence (Elective-II)',
      code: 'PEC-CSE 611a',
      semester: 'VI',
      description: 'Search Techniques, Game Playing, Knowledge & Reasoning, Learning.',
      modules: [
        { title: 'Modules', topics: ['Search Techniques (A*, Heuristics), Game Playing (Minimax, alpha-beta)', 'Knowledge & Reasoning (First-order logic)', 'Planning, Learning, Prolog'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'pe611b',
      name: 'Computer Graphics (Elective-II)',
      code: 'PEC-CSE 611b',
      semester: 'VI',
      description: 'Raster Scan, Line/Circle Drawing, Polygon Filling.',
      modules: [
        { title: 'Modules', topics: ['Raster Scan, Line/Circle Drawing (Bresenham\'s, DDA)', 'Polygon Filling, 2D/3D Transformations, Viewing & Clipping', 'Curve Generation, Hidden Surfaces, Color & Shading'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'pe611c',
      name: 'Distributed Systems (Elective-II)',
      code: 'PEC-CSE 611c',
      semester: 'VI',
      description: 'Architectures, Middleware, Code Migration, Fault Tolerance.',
      modules: [
        { title: 'Modules', topics: ['Architectures, Middleware, Clock Synchronization, Code Migration', 'Fault Tolerance, Distributed Commit, Java RMI, Coordination-based systems'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'pe611d',
      name: 'Embedded Systems (Elective-II)',
      code: 'PEC-CSE 611d',
      semester: 'VI',
      description: 'Hardware, Embedded OS & Middleware, HW/SW Co-Design.',
      modules: [
        { title: 'Modules', topics: ['Hardware (Sensors, ASICs, Memories)', 'Embedded OS & Middleware (WCET, RTOS)', 'HW/SW Co-Design, Validation, Applications'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'pe612a',
      name: 'Advanced Operating Systems (Elective-III)',
      code: 'PEC-CSE 612a',
      semester: 'VI',
      description: 'Network/Distributed OS concepts, Synchronization, Global state.',
      modules: [
        { title: 'Modules', topics: ['Network/Distributed OS concepts', 'Synchronization (Clock, Mutual exclusion)', 'Global state, Distributed Deadlock, Failure Recovery, Fault tolerance'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'pe612b',
      name: 'Soft Computing (Elective-III)',
      code: 'PEC-CSE 612b',
      semester: 'VI',
      description: 'Artificial Neural Networks, Fuzzy Sets & Logic, Genetic Algorithms.',
      modules: [
        { title: 'Modules', topics: ['Artificial Neural Networks (Perceptron, Back Propagation, Kohonen SOM)', 'Fuzzy Sets & Logic (Mamdani/Sugeno)', 'Genetic Algorithms'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'pe612c',
      name: 'Digital Signal Processing (Elective-III)',
      code: 'PEC-CSE 612c',
      semester: 'VI',
      description: 'Discrete-time signals, DFT, FFT, Digital Filters.',
      modules: [
        { title: 'Modules', topics: ['Discrete-time signals, Z-transform', 'Discrete Fourier Transform (DFT, FFT)', 'Design of FIR/IIR Digital Filters'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'pe612d',
      name: 'Data Mining (Elective-III)',
      code: 'PEC-CSE 612d',
      semester: 'VI',
      description: 'KDD Process, Association Rule Mining, Classification, Clustering.',
      modules: [
        { title: 'Modules', topics: ['KDD Process, Data Pre-processing', 'Association Rule Mining (Apriori, FP-Tree)', 'Classification (Decision trees, Bayes), Clustering (K-means, Hierarchical)', 'Web/Spatial Mining'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    }
  ],
  4: [
    {
      id: 've702',
      name: 'Values and Ethics',
      code: 'HSM-HU 702',
      semester: 'VII',
      description: 'Professional ethics, Engineering Ethics, CSR.',
      modules: [
        { title: 'Modules', topics: ['Professional ethics, Engineering Ethics (Kohlberg/Gilligan theories)', 'Effects of technological growth (Pollution, Automation)', 'Ethical decision making, Code of Ethics', 'Whistleblowing, CSR, Ethics in HR/Finance'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'pe711a',
      name: 'Computational Geometry (Elective-IV)',
      code: 'PEC-CSE 711a',
      semester: 'VII',
      description: 'Convex Hulls, Segment Intersection, Polygon Triangulation.',
      modules: [
        { title: 'Modules', topics: ['Convex Hulls (Graham\'s scan, Jarvis\' March)', 'Segment Intersection, Polygon Triangulation', 'Orthogonal Search (Quad/Kd-Trees), Voronoi Diagrams', 'Delaunay Triangulation, Motion Planning'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'pe711b',
      name: 'Multi-agent Intelligent Systems (Elective-IV)',
      code: 'PEC-CSE 711b',
      semester: 'VII',
      description: 'Agent Architectures, Reactive/Hybrid architectures, Negotiation.',
      modules: [
        { title: 'Modules', topics: ['Agent Architectures, Deductive/Practical Reasoning', 'Reactive/Hybrid architectures, Multi-agent Interactions (Nash Equilibrium)', 'Negotiation, Communication (Ontologies), Cooperative Problem Solving'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'pe711c',
      name: 'Image Processing (Elective-IV)',
      code: 'PEC-CSE 711c',
      semester: 'VII',
      description: 'Digital Image Formation, Spatial/Frequency Domain Enhancement.',
      modules: [
        { title: 'Modules', topics: ['Digital Image Formation, Spatial/Frequency Domain Enhancement', 'Image Restoration, Image Segmentation (Edge detection, Thresholding)', 'Morphological Processing, Image Compression'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'pe711d',
      name: 'Web and Internet Technology (Elective-IV)',
      code: 'PEC-CSE 711d',
      semester: 'VII',
      description: 'Internet/Mobile IP, HTML/CSS, JavaScript/DHTML.',
      modules: [
        { title: 'Modules', topics: ['Internet/Mobile IP, HTML/CSS, JavaScript/DHTML', 'Applets, CGI, Servlets', 'Java Server Pages (JSP), JDBC connectivity'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'pe712a',
      name: 'VLSI System Design (Elective-V)',
      code: 'PEC-CSE 712a',
      semester: 'VII',
      description: 'MOSFETs, Static/Dynamic Logic Design, Fabrication steps.',
      modules: [
        { title: 'Modules', topics: ['MOSFETs, Static/Dynamic Logic Design, Fabrication steps', 'Design Rules/Stick Diagrams, Power Consumption (Static/Dynamic)', 'VLSI Design Cycle, Partitioning, Placement, Routing'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'pe712b',
      name: 'Data Analytics (Elective-V)',
      code: 'PEC-CSE 712b',
      semester: 'VII',
      description: 'Descriptive/Predictive Analytics, Regression, Classification.',
      modules: [
        { title: 'Modules', topics: ['Descriptive/Diagnostic/Predictive Analytics', 'Fundamentals of Statistics, Regression (Linear, Ridge, Lasso)', 'Classification (Logistic, Decision Trees, Random Forest)', 'Big Data basics (MapReduce)'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'pe712c',
      name: 'Optimization Techniques (Elective-V)',
      code: 'PEC-CSE 712c',
      semester: 'VII',
      description: 'Linear Programming, Dynamic Programming, Integer Programming.',
      modules: [
        { title: 'Modules', topics: ['Calculus-based optimization, Linear Programming (Simplex)', 'Dynamic Programming, Integer Programming, Non-Linear Programming', 'GA/PSO/Differential Evolution'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'pe712d',
      name: 'Cloud Computing (Elective-V)',
      code: 'PEC-CSE 712d',
      semester: 'VII',
      description: 'Cloud Models, Deployment Models, Virtualization.',
      modules: [
        { title: 'Modules', topics: ['Cloud Models (IaaS, PaaS, SaaS)', 'Deployment Models (Public, Private, Hybrid)', 'Virtualization/Data Center Technology', 'Cloud Security Threats/Risk Management, CloudSim'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'pe811a',
      name: 'Low Power Circuits and Systems (Elective-VI)',
      code: 'PEC-CSE 811a',
      semester: 'VIII',
      description: 'Sources of Power Dissipation, Supply Voltage Scaling.',
      modules: [
        { title: 'Modules', topics: ['Basics of MOS, Sources of Power Dissipation', 'Supply Voltage Scaling, Switching Activity Optimization', 'Switched Capacitance Minimization, Leakage Power Control, Adiabatic switching'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'pe811b',
      name: 'Internet of Things (Elective-VI)',
      code: 'PEC-CSE 811b',
      semester: 'VIII',
      description: 'IoT Architecture, Protocols, IoT Application Development.',
      modules: [
        { title: 'Modules', topics: ['IoT Architecture, Elements of IoT (Arduino, Raspberry Pi, Sensors)', 'Protocols (MQTT, ZigBee, CoAP)', 'IoT Application Development (Cloud Storage, APIs)', 'Case Studies (Smart Home, Healthcare)'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'pe811c',
      name: 'Cyber Security (Elective-VI)',
      code: 'PEC-CSE 811c',
      semester: 'VIII',
      description: 'Threats/Attacks, Cryptography, Network Security.',
      modules: [
        { title: 'Modules', topics: ['Threats/Attacks, Cryptography (Symmetric/Asymmetric, Hashing)', 'Network Security (Firewalls, VPN, IPSec, Sniffing)', 'OS Hardening, Malware Analysis', 'OWASP, Biometrics, Cyber Laws and Forensics'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    },
    {
      id: 'pe811d',
      name: 'Pattern Recognition (Elective-VI)',
      code: 'PEC-CSE 811d',
      semester: 'VIII',
      description: 'Bayesian Decision Theory, HMM, Dimensional Reduction.',
      modules: [
        { title: 'Modules', topics: ['Bayesian Decision Theory, Hidden Markov Models', 'Parametric/Non-Parametric Estimation (MLE, K-Nearest Neighbor)', 'Dimensional Reduction (PCA)', 'Data Clustering (Expectation Maximization), Support Vector Machines (SVM)'] }
      ],
      notes: [
        { title: 'Module 1 Quick Revision', content: 'Review the fundamental concepts, definitions, and basic principles covered in the first module. Pay attention to the core terminology.' },
        { title: 'Exam Cheat Sheet', content: 'Focus on the most frequently asked questions and key formulas. Practice deriving the main equations.' }
      ], flashcards: [], pyqs: []
    }
  ]
};
