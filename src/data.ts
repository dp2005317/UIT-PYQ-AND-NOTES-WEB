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
        { title: 'Module 1 & 2: Calculus', topics: ['Evolutes and involutes', 'Evaluation of definite and improper integrals', 'Beta and Gamma functions', 'Applications of definite integrals', 'Rolle\'s theorem', 'Mean value theorems', 'Taylor\'s and Maclaurin theorems', 'Indeterminate forms', 'L\'Hospital\'s rule', 'Maxima and minima'] },
        { title: 'Module 3: Matrices', topics: ['Vectors: addition and scalar multiplication', 'matrix multiplication', 'Linear systems of equations', 'linear Independence', 'rank of a matrix', 'determinants', 'Cramer\'s Rule', 'inverse of a matrix', 'Gauss/Gauss-Jordan elimination'] },
        { title: 'Module 4 & 5: Vector Spaces', topics: ['Linear dependence, basis, dimension', 'Linear transformations, range/kernel, rank/nullity', 'Matrix associated with a linear map', 'Eigenvalues, eigenvectors, symmetric, skew-symmetric, and orthogonal Matrices', 'diagonalisation', 'Inner product spaces, Gram-Schmidt orthogonalization'] }
      ],
      notes: [],
      flashcards: [],
      pyqs: []
    },
    {
      id: 'math2',
      name: 'Mathematics - II (Probability and Statistics)',
      code: 'BSC-M 202',
      semester: 'I & II',
      description: 'Probability spaces, distributions, statistics, and curve fitting.',
      modules: [
        { title: 'Module 1 & 2: Basic & Continuous Probability', topics: ['Probability spaces, conditional probability, independence', 'Discrete random variables, multinomial/Poisson/binomial distributions', 'Continuous random variables, normal, exponential and gamma densities'] },
        { title: 'Module 3: Bivariate Distributions', topics: ['Properties', 'distribution of sums and quotients', 'conditional densities', 'Bayes\' rule'] },
        { title: 'Module 4 & 5: Basic & Applied Statistics', topics: ['Measures of Central tendency (Moments, skewness, Kurtosis)', 'Curve fitting (least squares)', 'Test of significance (Large sample test for single proportion, difference of proportions, means, etc.)'] },
        { title: 'Module 6: Small Samples', topics: ['Test for single mean, difference of means and correlation coefficients', 'Chi-square test for goodness of fit'] }
      ],
      notes: [],
      flashcards: [],
      pyqs: []
    },
    {
      id: 'prog101',
      name: 'Programming for Problem Solving',
      code: 'ESC-CSE 101/201',
      semester: 'I & II',
      description: 'Introduction to programming, algorithms, branching, loops, and basic data structures in C.',
      modules: [
        { title: 'Unit 1: Introduction to Programming', topics: ['Components of a computer system', 'Idea of Algorithm (Flowchart/Pseudocode)', 'Variables, memory locations', 'Syntax/Logical Errors'] },
        { title: 'Unit 2 & 3: Branching, Loops & Arrays', topics: ['Conditional Branching (if-then-else)', 'Iteration and loops (while, for)', '1-D and 2-D Arrays', 'Character arrays and Strings'] },
        { title: 'Unit 4 & 5: Basic Algorithms & Functions', topics: ['Searching', 'Basic Sorting Algorithms (Bubble, Insertion, Selection)', 'Functions, Parameter passing, call by value, call by reference'] },
        { title: 'Unit 6, 7 & 8: Recursion, Structures & Pointers', topics: ['Finding Factorial, Fibonacci series', 'Defining structures and Array of Structures', 'Idea of pointers, Use of Pointers in self-referential structures', 'notion of linked list', 'File Handling'] }
      ],
      notes: [],
      flashcards: [],
      pyqs: []
    },
    {
      id: 'ee101',
      name: 'Basic Electrical Engineering',
      code: 'ESC-EE 101/201',
      semester: 'I & II',
      description: 'DC & AC Circuits, Transformers, Electrical Machines and Power Converters.',
      modules: [
        { title: 'Module 1 & 2: DC & AC Circuits', topics: ['R, L, C elements, Kirchoff laws', 'Superposition, Thevenin and Norton Theorems', 'Time-domain analysis', 'Sinusoidal waveforms, peak/rms values, real/reactive power', 'Three-phase balanced circuits (star/delta)'] },
        { title: 'Module 3 & 4: Transformers & Electrical Machines', topics: ['Magnetic materials, ideal/practical transformers, losses, efficiency', 'Three-phase induction motors, DC motors, Synchronous generators'] },
        { title: 'Module 5 & 6: Power Converters & Installations', topics: ['DC-DC buck/boost converters, Inverters', 'Switchgear (MCB, ELCB, MCCB)', 'Earthing, Battery characteristics'] }
      ],
      notes: [],
      flashcards: [],
      pyqs: []
    },
    {
      id: 'chem101',
      name: 'Chemistry-I',
      code: 'BSC-CH 101/202',
      semester: 'I & II',
      description: 'Atomic structure, spectroscopic techniques, periodic properties, and stereochemistry.',
      modules: [
        { title: 'Modules 1-4: Atomic and molecular structure', topics: ['Schrodinger equation, Molecular orbitals', 'Spectroscopic techniques (Electronic, Vibrational, Rotational, NMR)', 'Intermolecular forces and potential energy surfaces', 'Use of free energy in chemical equilibria (Thermodynamic functions, Nernst equation)'] },
        { title: 'Modules 5-7: Periodic properties', topics: ['effective nuclear charge, ionization energies', 'Stereochemistry (isomers, enantiomers, chirality)', 'Organic reactions and synthesis of a drug molecule'] }
      ],
      notes: [],
      flashcards: [],
      pyqs: []
    },
    {
      id: 'phys101',
      name: 'Physics',
      code: 'BSC-PH 101-105/201-205',
      semester: 'I & II',
      description: 'Electromagnetic theory, mechanics, quantum mechanics, oscillations, and semiconductors.',
      modules: [
        { title: 'Introduction to Electromagnetic Theory', topics: ['Electrostatics in vacuum/dielectrics', 'Magnetostatics, Faraday\'s law', 'Maxwell\'s equations, Electromagnetic waves'] },
        { title: 'Introduction to Mechanics', topics: ['Newton\'s laws', 'Central forces, Non-inertial frames', 'Harmonic oscillators, Rigid body motion'] },
        { title: 'Quantum Mechanics for Engineers', topics: ['Wave nature of particles', 'Schrodinger equation, Mathematical Preliminaries', 'Molecular bonding, Free electron theory'] },
        { title: 'Oscillations, Waves and Optics', topics: ['Simple harmonic motion', 'Transverse/longitudinal waves', 'Geometric/Wave optics, Lasers'] },
        { title: 'Semiconductor Physics', topics: ['Electronic materials', 'Intrinsic/extrinsic semiconductors', 'Carrier transport (diffusion/drift)', 'p-n junction', 'Light-semiconductor interaction', 'Engineered semiconductor materials'] }
      ],
      notes: [],
      flashcards: [],
      pyqs: []
    },
    {
      id: 'engg_graphics',
      name: 'Engineering Graphics & Design',
      code: 'ESC-ME 102/202',
      semester: 'I & II',
      description: 'Orthographic Projections, Regular Solids, Computer Graphics.',
      modules: [
        { title: 'Engineering Graphics & Design', topics: ['Orthographic Projections', 'Regular Solids', 'Sections, Isometric Projections', 'Computer Graphics (CAD setup, Annotations, 2D/3D modeling)'] }
      ],
      notes: [],
      flashcards: [],
      pyqs: []
    },
    {
      id: 'workshop',
      name: 'Workshop/Manufacturing Practices',
      code: 'ESC-ME 101/201',
      semester: 'I & II',
      description: 'Casting, forming, machining, joining, CNC machining, Carpentry.',
      modules: [
        { title: 'Workshop/Manufacturing Practices', topics: ['Casting, forming, machining, joining', 'CNC machining, Fitting, Carpentry', 'Welding, Smithy, Plastic moulding'] }
      ],
      notes: [],
      flashcards: [],
      pyqs: []
    },
    {
      id: 'english101',
      name: 'English',
      code: 'HSM-HU 101/201',
      semester: 'I & II',
      description: 'Vocabulary Building, Basic Writing Skills, Précis/Essay Writing.',
      modules: [
        { title: 'English', topics: ['Vocabulary Building', 'Basic Writing Skills (Sentence structures, clauses)', 'Identifying Common Errors', 'Précis/Essay Writing', 'Oral Communication (Listening, Pronunciation, Interviews)'] }
      ],
      notes: [],
      flashcards: [],
      pyqs: []
    }
  ],
  2: [
    {
      id: 'dsa301',
      name: 'Data Structure & Algorithms',
      code: 'PCC-CSE 301',
      semester: 'III',
      description: 'Searching, Stacks, Queues, Linked Lists, Trees, Sorting, and Graphs.',
      modules: [
        { title: 'Module 1: Introduction & Searching', topics: ['Basic terminologies, Data Structure Operations', 'Asymptotic Notations, Time-Space trade-off', 'Linear Search and Binary Search Techniques and complexity analysis'] },
        { title: 'Module 2: Stacks and Queues', topics: ['ADT Stack and its operations', 'Applications: Expression Conversion and evaluation', 'Types of Queue: Simple, Circular, and Priority Queue'] },
        { title: 'Module 3: Linked Lists & Trees', topics: ['Singly linked lists, Doubly linked list, Circular Linked Lists', 'Basic Tree Terminologies', 'Types of Trees: Binary Tree, Threaded Binary Tree, Binary Search Tree, AVL Tree, B Tree, B+ Tree'] },
        { title: 'Module 4: Sorting, Hashing & Graphs', topics: ['Selection Sort, Bubble Sort, Insertion Sort, Quick Sort, Merge Sort, Heap Sort', 'Hashing', 'Graph search and traversal algorithms (DFS, BFS)'] }
      ],
      notes: [],
      flashcards: [],
      pyqs: []
    },
    {
      id: 'dl302',
      name: 'Digital Logic',
      code: 'ESC-CSE 302',
      semester: 'III',
      description: 'Number Systems, Logic Gates, Combinational/Sequential Logic, PLDs.',
      modules: [
        { title: 'Module 1: Number System and Codes', topics: ['Decimal, binary, octal, hexadecimal', '1\'s and 2\'s complement', 'BCD, Excess-3, Gray codes'] },
        { title: 'Module 2: Logic Gates and Boolean Algebra', topics: ['NOT, AND, OR, NAND, NOR, XOR, XNOR', 'Universal gates', 'De Morgan\'s theorem, SOP and POS forms'] },
        { title: 'Module 3: Simplification', topics: ['K-maps and Quinn Mc-Clusky methods'] },
        { title: 'Module 4: Combinational Logic', topics: ['Half/Full adder, Subtractor', 'Multiplexers, De-multiplexers', 'Decoders, Encoders', 'Parity Generators, Comparators'] },
        { title: 'Module 5: Sequential Logic', topics: ['Clock Signals, Setup/Hold time', 'Latches (R-S, D)', 'Flip-flops (R-S, J-K, D, T)', 'Registers (Left, Right, Serial, Parallel)', 'Counters (Synchronous/Asynchronous, Ring, Johnson)', 'Finite State Machines'] },
        { title: 'Module 6: Programmable Logic Devices', topics: ['PAL, PLA'] }
      ],
      notes: [],
      flashcards: [],
      pyqs: []
    },
    {
      id: 'aec301',
      name: 'Analog Electronic Circuits',
      code: 'ESC-EC 301',
      semester: 'III',
      description: 'Diode Circuits, BJT & FET, Operational Amplifiers, Oscillators.',
      modules: [
        { title: 'Module 1: Diode Circuits', topics: ['Ideal models', 'Clipper/Clamper circuits', 'Zener Diodes, SMPS'] },
        { title: 'Module 2: BJT & FET', topics: ['Characteristics of BJT, Ebers-Moll equations', 'JFET and MOSFET structure and operation', 'Small signal analysis'] },
        { title: 'Module 3: Power & Operational Amplifiers', topics: ['Class A, B, AB, C, D amplifiers', 'Ideal OP-AMP parameters', 'Inverting/Non-inverting amplifiers', 'Integrators, Differentiators, Schmitt triggers, Active RC filters'] },
        { title: 'Module 4: Feedback and Oscillators', topics: ['Series-shunt, series-series topologies', 'Barkhausen criterion', 'Wien Bridge, Phase-Shift, Crystal Oscillators', '555 timer'] }
      ],
      notes: [],
      flashcards: [],
      pyqs: []
    },
    {
      id: 'itw302',
      name: 'IT Workshop (Sci Lab/MATLAB)',
      code: 'PCC-CSE 302',
      semester: 'III',
      description: 'MATLAB basics, Data Types, Plots and Graphics.',
      modules: [
        { title: 'Modules', topics: ['Introduction to MATLAB', 'Data Types, Operators (Arithmetic, Relational, Logical)', 'Scripting and Functions', 'Matrix/Array Manipulations', '2-D Plots and Graphics', 'File Handling, and Debugging'] }
      ],
      notes: [],
      flashcards: [],
      pyqs: []
    },
    {
      id: 'dm401',
      name: 'Discrete Mathematics',
      code: 'PCC-CSE 401',
      semester: 'IV',
      description: 'Sets, Relations, Functions, Propositional Logic, Algebraic Structures.',
      modules: [
        { title: 'Module 1: Sets, Relations, Functions & Induction', topics: ['Operations on sets, Cartesian Products', 'Equivalence Relation, Bijective functions', 'Countable/Uncountable sets', 'Principle of Mathematical Induction, Euclidean Algorithm'] },
        { title: 'Module 2: Counting Techniques', topics: ['Inclusion and exclusion', 'pigeon-hole principle', 'permutation and combination'] },
        { title: 'Module 3: Propositional Logic & Proofs', topics: ['Syntax, Semantics, Validity', 'Basic Connectives, Truth Tables, Logical Equivalence', 'Quantifiers', 'Proof by Contradiction, Contraposition'] },
        { title: 'Module 4: Algebraic Structures', topics: ['Semi Groups, Monoids, Groups, Rings, Integral Domain, Fields', 'Boolean Algebra'] },
        { title: 'Module 5: Graphs and Trees', topics: ['Connectivity, Path, Cycle, Isomorphism', 'Eulerian and Hamiltonian Walks, Graph Colouring, Planar Graphs', 'Rooted trees, prefix codes'] }
      ],
      notes: [],
      flashcards: [],
      pyqs: []
    },
    {
      id: 'coa402',
      name: 'Computer Organization & Architecture',
      code: 'PCC-CSE 402',
      semester: 'IV',
      description: 'CPU, Memory, Data Representation, Pipelining.',
      modules: [
        { title: 'Module 1: Functional Blocks & Data Representation', topics: ['CPU, memory, I/O', 'Instruction execution cycle, addressing modes', 'Fixed/floating-point representation', 'Computer arithmetic (Carry look-ahead adder, Booth multiplier, Restoring/Non-restoring division)'] },
        { title: 'Module 2: CPU Control Unit & Memory', topics: ['Hardwired and micro-programmed approaches', 'Semiconductor memory', 'I/O transfers (Program controlled, interrupt-driven, DMA)'] },
        { title: 'Module 3: Pipelining & Parallel Processors', topics: ['Pipelining concepts, pipeline hazards', 'Concurrent access to memory, cache coherency'] },
        { title: 'Module 4: Memory Organization', topics: ['Memory interleaving', 'hierarchical memory', 'cache mapping functions', 'replacement algorithms'] }
      ],
      notes: [],
      flashcards: [],
      pyqs: []
    },
    {
      id: 'os403',
      name: 'Operating Systems',
      code: 'PCC-CSE 403',
      semester: 'IV',
      description: 'Processes, Threads, Scheduling, IPC, Deadlocks, Memory Management.',
      modules: [
        { title: 'Module 1: Intro, Processes & Threads', topics: ['OS Services, System Calls', 'Process State transitions, PCB, Context switching', 'Types of threads, Multithreading'] },
        { title: 'Module 2: Process Scheduling', topics: ['CPU utilization, Throughput, Turnaround Time', 'Algorithms: FCFS, SJF, RR', 'Real-Time scheduling'] },
        { title: 'Module 3: Inter-process Communication', topics: ['Critical Section, Mutual Exclusion, Semaphores, Monitors', 'Classical Problems (Producer-Consumer, Dining Philosopher)'] },
        { title: 'Module 4: Deadlocks', topics: ['Necessary conditions, Prevention', 'Banker\'s algorithm', 'Detection and Recovery'] },
        { title: 'Module 5: Memory Management', topics: ['Contiguous allocation, Paging', 'Virtual Memory, Demand paging', 'Page Replacement algorithms (FIFO, LRU, Optimal)'] },
        { title: 'Module 6 & 7: I/O & File/Disk Management', topics: ['Device controllers, DMA', 'File Access methods, Directory structure', 'Disk scheduling algorithms (FCFS, SSTF, SCAN, C-SCAN)'] }
      ],
      notes: [],
      flashcards: [],
      pyqs: []
    },
    {
      id: 'daa404',
      name: 'Design & Analysis of Algorithms',
      code: 'PCC-CSE 404',
      semester: 'IV',
      description: 'Asymptotic analysis, Algorithmic Strategies, NP-Completeness.',
      modules: [
        { title: 'Module 1: Introduction', topics: ['Asymptotic analysis (best, average, worst-case)', 'Solving recurrence relations (Substitution, Recursion tree, Master\'s theorem)'] },
        { title: 'Module 2: Algorithmic Strategies', topics: ['Brute-Force, Greedy, Dynamic Programming, Branch and Bound, Backtracking', '(Examples: Knapsack, TSP)'] },
        { title: 'Module 3: Graph and Tree Algorithms', topics: ['DFS, BFS, Shortest path', 'Minimum Spanning Tree, Network Flow'] },
        { title: 'Module 4: Tractable and Intractable Problems', topics: ['P, NP, NP-complete, NP-hard classes', 'Cook\'s theorem, Reduction techniques'] },
        { title: 'Module 5: Advanced Topics', topics: ['Approximation algorithms', 'Randomized algorithms'] }
      ],
      notes: [],
      flashcards: [],
      pyqs: []
    }
  ],
  3: [
    {
      id: 'dbms501',
      name: 'Database Management Systems',
      code: 'PCC-CSE 501',
      semester: 'V',
      description: 'Data Models, Relational Algebra, SQL, Normalization, Transactions.',
      modules: [
        { title: 'Module 1: Architecture & Data Models', topics: ['DDL, DML', 'Entity-Relationship Model', 'Relational and Object-Oriented Models'] },
        { title: 'Module 2: Relational Query Languages & Design', topics: ['Relational Algebra, SQL3', 'Normalization, Dependency Preservation, Lossless Design', 'Query Optimization'] },
        { title: 'Module 3: Storage Strategies', topics: ['Indices, B-trees, Hashing'] },
        { title: 'Module 4: Transaction Processing', topics: ['Concurrency Control, ACID Properties', 'Serializability, Locking', 'Timestamp Based Schedulers, Database Recovery'] },
        { title: 'Module 5 & 6: Security & Advanced Topics', topics: ['Authentication, Access Control, SQL Injection', 'Distributed Databases, Data Warehousing, Data Mining'] }
      ],
      notes: [],
      flashcards: [],
      pyqs: []
    },
    {
      id: 'flat502',
      name: 'Formal Language & Automata Theory',
      code: 'PCC-CSE 502',
      semester: 'V',
      description: 'Regular Languages, CFG, Pushdown Automata, Turing Machines.',
      modules: [
        { title: 'Module 1 & 2: Intro & Regular Languages', topics: ['Chomsky hierarchy', 'Deterministic (DFA) and Nondeterministic (NFA) finite automata', 'Regular expressions, Pumping lemma, minimization of FA'] },
        { title: 'Module 3 & 4: Context-Free & Context-Sensitive Languages', topics: ['Context-free grammars (CFG), Pushdown Automata (PDA)', 'Chomsky and Greibach normal forms', 'Linear bounded automata'] },
        { title: 'Module 5 & 6: Turing Machines & Undecidability', topics: ['Turing Machine models, Recursively enumerable languages', 'Church-Turing thesis, Universal Turing machine', 'Halting problem, Rice\'s theorem'] }
      ],
      notes: [],
      flashcards: [],
      pyqs: []
    },
    {
      id: 'oop503',
      name: 'Object Oriented Programming',
      code: 'PCC-CSE 503',
      semester: 'V',
      description: 'ADT, Encapsulation, Polymorphism, Inheritance, GUIs.',
      modules: [
        { title: 'Modules', topics: ['Abstract Data Types (ADT), Encapsulation, Polymorphism, Inheritance', 'Memory management', 'Generic types and collections', 'Graphical User Interfaces (GUIs) with Scala/Swing', 'Design patterns (Iterator, MVC)', 'Unified Modeling Language (UML)'] }
      ],
      notes: [],
      flashcards: [],
      pyqs: []
    },
    {
      id: 'cd601',
      name: 'Compiler Design',
      code: 'PCC-CSE 601',
      semester: 'VI',
      description: 'Lexical Analysis, Syntax & Semantic Analysis, Code Optimization.',
      modules: [
        { title: 'Module 1: Introduction & Lexical Analysis', topics: ['Overview of compilation, Input Buffering', 'Specification and Recognition of Tokens', 'Finite Automata'] },
        { title: 'Module 2: Syntax & Semantic Analysis', topics: ['Top-down parsing (LL)', 'Bottom-up parsing (LR, SLR, LALR)', 'Attribute grammars, syntax-directed definition'] },
        { title: 'Module 3: Symbol Table & Run-time', topics: ['Memory allocation, parameter passing', 'Intermediate Code Generation'] },
        { title: 'Module 4: Code Improvement (Optimization)', topics: ['Control-flow analysis, local/global optimization', 'loop optimization, register allocation'] }
      ],
      notes: [],
      flashcards: [],
      pyqs: []
    },
    {
      id: 'cn602',
      name: 'Computer Networks',
      code: 'PCC-CSE 602',
      semester: 'VI',
      description: 'OSI Model, MAC layer, IP Routing, TCP/UDP, Application Layer.',
      modules: [
        { title: 'Module 1: Data Comm & Physical Layer', topics: ['Topologies, OSI model', 'Transmission Media, Multiplexing (FDM, TDM, WDM)'] },
        { title: 'Module 2: Data Link & MAC', topics: ['Error Detection (Hamming, CRC)', 'Flow Control (Stop and Wait, Go back N, Selective Repeat)', 'Multiple access (ALOHA, CSMA/CD)'] },
        { title: 'Module 3: Network Layer', topics: ['IPv4, IPv6, ARP, DHCP', 'Forwarding and Unicast Routing protocols'] },
        { title: 'Module 4: Transport Layer', topics: ['UDP, TCP, Congestion Control', 'QoS (Leaky Bucket, Token Bucket)'] },
        { title: 'Module 5: Application Layer', topics: ['DNS, TELNET, FTP, HTTP, SNMP', 'Firewalls, Basic Cryptography'] }
      ],
      notes: [],
      flashcards: [],
      pyqs: []
    }
  ],
  4: [
    {
      id: 'ai611a',
      name: 'Artificial Intelligence',
      code: 'PEC-CSE 611a',
      semester: 'VII & VIII',
      description: 'Search Techniques, Game Playing, Knowledge & Reasoning, Learning.',
      modules: [
        { title: 'Search Techniques', topics: ['Breadth-first, depth-first, A* search, heuristic search'] },
        { title: 'Game Playing', topics: ['Minimax search, alpha-beta pruning'] },
        { title: 'Knowledge & Reasoning', topics: ['First-order logic, forward/backward chaining, resolution', 'Probabilistic reasoning'] },
        { title: 'Learning', topics: ['Explanation-based learning, learning by taking advice', 'Prolog logic programming'] }
      ],
      notes: [],
      flashcards: [],
      pyqs: []
    },
    {
      id: 'cc712d',
      name: 'Cloud Computing',
      code: 'PEC-CSE 712d',
      semester: 'VII & VIII',
      description: 'Cloud Models, Virtualization, Cloud Security & Tools.',
      modules: [
        { title: 'Cloud Delivery Models', topics: ['IaaS, PaaS, SaaS'] },
        { title: 'Deployment Models', topics: ['Public, Private, Hybrid, Community Clouds'] },
        { title: 'Virtualization', topics: ['Types of virtualization', 'Multitenant Technology', 'Data Center Technology'] },
        { title: 'Security & Tools', topics: ['Cloud security threats, Risk Management', 'Tools like CloudSim, OpenNebula, AWS, Google Cloud Apps'] }
      ],
      notes: [],
      flashcards: [],
      pyqs: []
    },
    {
      id: 'cs811c',
      name: 'Cyber Security',
      code: 'PEC-CSE 811c',
      semester: 'VII & VIII',
      description: 'Cryptography, Network Security, Malware & Forensics.',
      modules: [
        { title: 'Concepts & Cryptography', topics: ['Threats, Attacks, Exploits', 'Symmetric/Asymmetric cryptography', 'MD5, SHA, Digital Signatures'] },
        { title: 'Network Security', topics: ['Firewalls, VPN, IPSec, Packet Sniffing', 'DOS/DDOS attacks, Intrusion Detection Systems (IDS)'] },
        { title: 'Malware & Forensics', topics: ['Viruses, Trojans, Ransomware', 'OS Hardening', 'Cyber Forensics, Evidence management, Cyber Laws (INDIAN Cyberspace, IT Act)'] }
      ],
      notes: [],
      flashcards: [],
      pyqs: []
    }
  ]
};
