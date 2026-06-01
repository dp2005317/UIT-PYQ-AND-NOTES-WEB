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
      name: 'Engineering Mathematics I', 
      code: 'IT101', 
      description: 'Calculus, linear algebra, and differential equations.',
      modules: [
        { title: "Module 1: Single Variable Calculus", topics: ["Taylor's series", "Maclaurin's series", "Indeterminate forms", "L'Hospital's rule", "Rolle's Theorem"] },
        { title: "Module 2: Linear Algebra", topics: ["Matrix rank", "Eigenvalues & Eigenvectors", "Cayley-Hamilton Theorem", "Systems of linear equations"] },
        { title: "Module 3: Integral Calculus", topics: ["Double integrals", "Triple integrals", "Change of variables", "Area and volume computations"] },
        { title: "Module 4: Differential Equations", topics: ["First-order linear equations", "Exact equations", "Higher-order homogeneous equations"] },
        { title: "Module 5: Infinite Series", topics: ["Convergence tests", "Ratio test", "Comparison test", "Alternating series test"] }
      ],
      notes: [
        { title: "Calculus Fundamentals", content: "Understanding Rolle's theorem is key for intermediate values. The theorem guarantees a critical point (where f'(c) = 0) in an interval [a,b] if f(a) = f(b) for a continuous and differentiable function." },
        { title: "Eigenvalue Diagnostics", content: "Eigenvalues are solved by setting det(A - λI) = 0. The sum of eigenvalues equals the trace of the matrix, while their product equals the determinant." }
      ],
      flashcards: [
        { question: "What does the Cayley-Hamilton theorem state?", answer: "Every square matrix satisfies its own characteristic equation." },
        { question: "When is a matrix diagonalizable?", answer: "When it has a complete set of linearly independent eigenvectors." },
        { question: "Define the rank of a matrix.", answer: "The maximum number of linearly independent row or column vectors." }
      ],
      pyqs: [
        { year: 2024, type: "End-Semester", duration: "3 Hours", questions: 7 },
        { year: 2023, type: "End-Semester", duration: "3 Hours", questions: 8 },
        { year: 2024, type: "Mid-Semester", duration: "1.5 Hours", questions: 4 }
      ]
    },
    { 
      id: 'cprog', 
      name: 'Programming in C', 
      code: 'IT102', 
      description: 'Fundamentals of programming, logic building, and basic data structures.',
      modules: [
        { title: "Module 1: C Programming Basics", topics: ["Variables & constants", "Data types", "Operators", "Input/Output operations"] },
        { title: "Module 2: Flow Control", topics: ["If-Else statements", "Switch Case", "For, While, and Do-While loops", "Break & Continue"] },
        { title: "Module 3: Functions and Arrays", topics: ["Function parameters", "Recursion", "1D and 2D Arrays", "String manipulations"] },
        { title: "Module 4: Pointers and Memory", topics: ["Pointer arithmetic", "Dynamic Memory Allocation (malloc, calloc, free)", "Pass-by-value vs reference"] },
        { title: "Module 5: Structures and Files", topics: ["Structures and Unions", "Typedef", "File Open/Read/Write operations", "Standard IO library"] }
      ],
      notes: [
        { title: "Understanding Pointers", content: "A pointer stores the memory address of another variable. Syntax: `int *ptr = &val;` to declare. Dereferencing (`*ptr`) retrieves the value stored at that address." },
        { title: "Dynamic Memory Allocation", content: "`malloc(size)` allocates raw uninitialized memory. `calloc(n, size)` allocates memory and initializes all bits to zero. Always call `free()` to avoid memory leaks." }
      ],
      flashcards: [
        { question: "What is the difference between malloc() and calloc()?", answer: "malloc allocates uninitialized memory; calloc initializes all allocated bytes to zero." },
        { question: "What is a 'null pointer' in C?", answer: "A pointer that points to nothing, typically pointing to address 0 or NULL to prevent illegal access." },
        { question: "What is a structural union?", answer: "A structure allocates individual memory for each member; a union shares the same memory space among all members." }
      ],
      pyqs: [
        { year: 2024, type: "End-Semester", duration: "3 Hours", questions: 6 },
        { year: 2023, type: "End-Semester", duration: "3 Hours", questions: 7 }
      ]
    },
    { 
      id: 'phy', 
      name: 'Engineering Physics', 
      code: 'IT103', 
      description: 'Semiconductors, optics, and quantum mechanics basics.',
      modules: [
        { title: "Module 1: Quantum Physics", topics: ["Planck's theory", "De Broglie hypothesis", "Heisenberg Uncertainty Principle", "Schrodinger wave equation"] },
        { title: "Module 2: Semiconductor Physics", topics: ["Fermi-Dirac distribution", "Carrier transport", "Hall Effect", "P-N junctions"] },
        { title: "Module 3: Wave Optics", topics: ["Interference", "Diffraction", "Polarization of light", "Michelson Interferometer"] },
        { title: "Module 4: Lasers and Fiber Optics", topics: ["Einstein coefficients", "Stimulated emission", "Fiber optic cable modes", "Numerical aperture"] },
        { title: "Module 5: Advanced Materials", topics: ["Superconductivity", "Meissner Effect", "Nanomaterials", "Carbon nanotubes"] }
      ],
      notes: [
        { title: "Quantum Physics Introduction", content: "Heisenberg's uncertainty principle states Δx · Δp ≥ ℏ/2. You cannot simultaneously measure the exact position and momentum of a particle." }
      ],
      flashcards: [
        { question: "What is the Meissner Effect?", answer: "The complete expulsion of magnetic fields from a superconductor as it transitions into the superconducting state." },
        { question: "Define Numerical Aperture.", answer: "A measure of a fiber optic cable's light-gathering ability, calculated as sin(Acceptance Angle)." }
      ],
      pyqs: [
        { year: 2024, type: "End-Semester", duration: "3 Hours", questions: 7 }
      ]
    },
    { 
      id: 'ee', 
      name: 'Basic Electrical Engineering', 
      code: 'IT104', 
      description: 'Circuit analysis, transformers, and AC fundamentals.',
      modules: [
        { title: "Module 1: DC Circuits", topics: ["Kirchhoff's Laws", "Mesh & Nodal analysis", "Thevenin's & Norton's Theorem", "Superposition"] },
        { title: "Module 2: AC Fundamentals", topics: ["RMS & Average values", "Form Factor", "Phasor representations", "RLC series circuits"] },
        { title: "Module 3: Transformers", topics: ["EMF equation", "Equivalent circuits", "Core/Copper losses", "Open & Short circuit tests"] },
        { title: "Module 4: Electrical Machines", topics: ["DC Generators & Motors", "Three-phase Induction Motors", "Torque-slip characteristics"] },
        { title: "Module 5: Electrical Systems", topics: ["Single-phase & Three-phase power", "Tariff structures", "Fuses & Circuit Breakers"] }
      ],
      notes: [
        { title: "Thevenin's Theorem", content: "Any linear two-terminal DC network can be replaced by an equivalent circuit consisting of an equivalent voltage source (Vth) in series with an equivalent resistance (Rth)." }
      ],
      flashcards: [
        { question: "What is Kirchhoff's Current Law (KCL)?", answer: "The algebraic sum of currents entering a node is equal to the sum of currents leaving the node (conservation of charge)." },
        { question: "What are the two types of losses in a transformer?", answer: "Iron (core) losses (constant) and copper (I²R) losses (variable with load)." }
      ],
      pyqs: [
        { year: 2024, type: "End-Semester", duration: "3 Hours", questions: 6 }
      ]
    }
  ],
  2: [
    { 
      id: 'dsa', 
      name: 'Data Structures & Algorithms', 
      code: 'IT201', 
      description: 'Arrays, trees, graphs, and algorithmic complexity.',
      modules: [
        { title: "Module 1: Introduction & Linear Arrays", topics: ["Asymptotic notation (Big-O)", "Stack & Queue operations", "Linked Lists (Singly, Doubly, Circular)", "Array memory representation"] },
        { title: "Module 2: Trees", topics: ["Binary Trees", "Binary Search Trees (BST)", "AVL Trees (Rotations)", "Tree Traversals (Inorder, Preorder, Postorder)"] },
        { title: "Module 3: Graphs", topics: ["Adjacency Matrix & List representation", "Breadth-First Search (BFS)", "Depth-First Search (DFS)", "Dijkstra's Shortest Path"] },
        { title: "Module 4: Searching & Sorting", topics: ["Binary Search", "Quick Sort", "Merge Sort", "Heap Sort", "Hashing collisions"] },
        { title: "Module 5: Advanced Algorithms", topics: ["Dynamic Programming basics", "Greedy algorithms", "Minimum Spanning Tree (Kruskal/Prim)"] }
      ],
      notes: [
        { title: "BST Traversals", content: "Inorder traversal of a Binary Search Tree always yields sorted elements in ascending order. Time complexity is O(N) where N is the number of nodes." },
        { title: "AVL Tree Balancing", content: "AVL trees are self-balancing BSTs where the height difference (Balance Factor = H_left - H_right) is strictly restricted to -1, 0, or +1. Balance is restored using Single (L, R) or Double (LR, RL) rotations." }
      ],
      flashcards: [
        { question: "What is the worst-case time complexity of Quick Sort?", answer: "O(n^2), occurring when the selected pivot is consistently the smallest or largest element." },
        { question: "Name the data structure used in Breadth-First Search (BFS).", answer: "A Queue (First-In, First-Out)." },
        { question: "What is a hash collision?", answer: "When two different keys map to the exact same hash index. Handled via chaining or open addressing." }
      ],
      pyqs: [
        { year: 2025, type: "End-Semester", duration: "3 Hours", questions: 8 },
        { year: 2024, type: "End-Semester", duration: "3 Hours", questions: 7 }
      ]
    },
    { 
      id: 'oop', 
      name: 'Object Oriented Programming (C++/Java)', 
      code: 'IT202', 
      description: 'Classes, inheritance, polymorphism, and design patterns.',
      modules: [
        { title: "Module 1: OOP Principles", topics: ["Classes & Objects", "Encapsulation", "Data Abstraction", "Message Passing"] },
        { title: "Module 2: Constructors and Destructors", topics: ["Constructors", "Destructors", "Memory allocation (`new`, `delete`)"] },
        { title: "Module 3: Inheritance", topics: ["Access Specifiers (Public, Private, Protected)", "Virtual base classes"] },
        { title: "Module 4: Polymorphism", topics: ["Compile-time (Overloading)", "Run-time (Virtual functions)", "Abstract classes", "Pure virtual functions"] },
        { title: "Module 5: Templates & Exceptions", topics: ["Class & function templates", "Try-catch blocks", "Throwing exceptions", "File stream handling"] }
      ],
      notes: [
        { title: "Polymorphism Mechanics", content: "Run-time polymorphism is achieved using virtual functions. When a base class pointer points to a derived class object, calling a virtual function executes the derived class version instead." }
      ],
      flashcards: [
        { question: "What is a pure virtual function?", answer: "A virtual function assigned to 0 in C++ (e.g. `virtual void func() = 0;`), making its class abstract and uninstantiable." },
        { question: "Define Encapsulation.", answer: "The wrapping up of data (attributes) and member functions into a single unit (class) to prevent external tampering." }
      ],
      pyqs: [
        { year: 2024, type: "End-Semester", duration: "3 Hours", questions: 7 }
      ]
    },
    { 
      id: 'dbms', 
      name: 'Database Management Systems', 
      code: 'IT203', 
      description: 'SQL, normalization, transaction processing, and concurrency.',
      modules: [
        { title: "Module 1: Introduction & ER Diagram", topics: ["Database architecture", "ER modeling (Entities, Relationships, Keys)", "Relational algebra"] },
        { title: "Module 2: Structured Query Language (SQL)", topics: ["DDL, DML, DCL commands", "Joins (Inner, Left, Right, Outer)", "Subqueries & Group By"] },
        { title: "Module 3: Normalization", topics: ["1NF, 2NF, 3NF, BCNF rules", "Functional dependencies", "Lossless decomposition"] },
        { title: "Module 4: Transaction & Concurrency", topics: ["ACID Properties", "Schedule serializability", "Two-Phase Locking (2PL)", "Deadlocks in DBMS"] },
        { title: "Module 5: File Org & Indexing", topics: ["B-Trees and B+ Trees", "Dense & Sparse indices", "Hashing in databases"] }
      ],
      notes: [
        { title: "ACID Properties Demystified", content: "A: Atomicity (All or nothing), C: Consistency (Valid states), I: Isolation (Concurrently invisible), D: Durability (Persistent commits)." },
        { title: "Normalization Quick Rules", content: "1NF: Atomic values. 2NF: 1NF + No partial dependencies. 3NF: 2NF + No transitive dependencies. BCNF: For X -> Y, X must be a super key." }
      ],
      flashcards: [
        { question: "What is a primary key?", answer: "A unique, non-null identifier for a record in a relational database table." },
        { question: "Explain the purpose of B+ Trees in indexing.", answer: "They maintain sorted data with highly efficient disk access, storing data records only in leaf nodes for fast range scans." }
      ],
      pyqs: [
        { year: 2024, type: "End-Semester", duration: "3 Hours", questions: 8 }
      ]
    },
    { 
      id: 'os', 
      name: 'Operating Systems', 
      code: 'IT204', 
      description: 'Process management, memory management, and file systems.',
      modules: [
        { title: "Module 1: Process Management", topics: ["Process states", "PCB", "CPU Scheduling (FCFS, SJF, Round Robin)", "Context switching"] },
        { title: "Module 2: Process Synchronization", topics: ["Critical section problem", "Semaphores", "Mutexes", "Producer-Consumer problem"] },
        { title: "Module 3: Deadlocks", topics: ["Banker's Algorithm", "Deadlock detection & recovery", "Resource allocation graph"] },
        { title: "Module 4: Memory Management", topics: ["Paging", "Segmentation", "Virtual Memory", "Page replacement (FIFO, LRU, Optimal)"] },
        { title: "Module 5: Storage & File Systems", topics: ["Disk scheduling (FCFS, SSTF, SCAN)", "Directory structure", "File allocation schemes"] }
      ],
      notes: [
        { title: "CPU Scheduling Principles", content: "Round Robin provides fair sharing via time quantums. Shortest Job First (SJF) gives optimal average waiting times but can lead to starvation for long processes." }
      ],
      flashcards: [
        { question: "What is 'thrashing' in virtual memory?", answer: "A state where the CPU spends more time swapping pages in and out of memory than executing actual instructions." },
        { question: "What are the four necessary conditions for deadlock?", answer: "Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait." }
      ],
      pyqs: [
        { year: 2024, type: "End-Semester", duration: "3 Hours", questions: 7 }
      ]
    }
  ],
  3: [
    { 
      id: 'cn', 
      name: 'Computer Networks', 
      code: 'IT301', 
      description: 'OSI model, TCP/IP, routing protocols, and network security.',
      modules: [
        { title: "Module 1: Reference Models", topics: ["OSI 7-Layer model", "TCP/IP suite", "Transmission media", "Physical layer line coding"] },
        { title: "Module 2: Data Link Layer", topics: ["Framing", "Error control (CRC)", "Sliding Window protocols (Go-Back-N, Selective Repeat)", "CSMA/CD & CSMA/CA"] },
        { title: "Module 3: Network Layer", topics: ["IPv4 & IPv6 addressing", "Subnetting", "Routing protocols (OSPF, RIP, BGP)", "NAT & ICMP"] },
        { title: "Module 4: Transport Layer", topics: ["TCP vs UDP", "Three-way handshake", "TCP congestion control (Slow start, Congestion avoidance)", "Port mapping"] },
        { title: "Module 5: Application Layer", topics: ["DNS", "HTTP & HTTPS", "SMTP/POP3", "Socket programming basics"] }
      ],
      notes: [
        { title: "Subnetting Tricks", content: "To calculate subnets, use the formula 2^n >= needed subnets. The host capacity per subnet is 2^h - 2 (subtracting network and broadcast addresses)." }
      ],
      flashcards: [
        { question: "What is the difference between TCP and UDP?", answer: "TCP is connection-oriented, reliable, and slower; UDP is connectionless, unreliable, but faster (streaming)." },
        { question: "Define Address Resolution Protocol (ARP).", answer: "A protocol used to map an IP address (network layer) to its physical MAC address (data link layer)." }
      ],
      pyqs: [
        { year: 2025, type: "End-Semester", duration: "3 Hours", questions: 8 }
      ]
    },
    { 
      id: 'se', 
      name: 'Software Engineering', 
      code: 'IT302', 
      description: 'SDLC, agile methodologies, and project management.',
      modules: [
        { title: "Module 1: Software Development Life Cycle (SDLC)", topics: ["Waterfall", "Spiral model", "Prototype model", "V-Model"] },
        { title: "Module 2: Agile Methodology", topics: ["Scrum framework", "User stories", "Sprints", "Burndown charts"] },
        { title: "Module 3: Requirements Engineering", topics: ["SRS Document components", "Functional vs Non-functional requirements", "Feasibility studies"] },
        { title: "Module 4: Design and UML", topics: ["Use Case Diagrams", "Class Diagrams", "Sequence Diagrams", "Cohesion and Coupling metrics"] },
        { title: "Module 5: Testing and Maintenance", topics: ["Unit, Integration, System testing", "Black-box vs White-box testing", "Regression testing"] }
      ],
      notes: [
        { title: "Cohesion vs Coupling", content: "High Cohesion (elements inside a module are closely related) and Low Coupling (modules are independent) represent the hallmark of good architectural design." }
      ],
      flashcards: [
        { question: "What is the primary objective of the Spiral Model?", answer: "To systematically identify and mitigate risks in large-scale software engineering projects." },
        { question: "Explain the difference between Black-box and White-box testing.", answer: "Black-box tests functional behavior without looking at internal code; White-box tests internal logic, paths, and loops." }
      ],
      pyqs: [
        { year: 2024, type: "End-Semester", duration: "3 Hours", questions: 6 }
      ]
    },
    { 
      id: 'web', 
      name: 'Web Technologies', 
      code: 'IT303', 
      description: 'HTML, CSS, JavaScript, React, and Node.js.',
      modules: [
        { title: "Module 1: Front-end Basics", topics: ["HTML5 semantic structures", "CSS3 Flexbox and Grid layout", "Responsive web design (media queries)", "CSS variables"] },
        { title: "Module 2: JavaScript ES6+", topics: ["Variables (let, const)", "Arrow functions", "Promises & Async/Await", "DOM Manipulation"] },
        { title: "Module 3: React Framework", topics: ["Functional components", "JSX", "Hooks (useState, useEffect, useRef)", "State management"] },
        { title: "Module 4: Backend Integration", topics: ["Node.js event loop", "Express framework routing", "REST API development", "CORS"] },
        { title: "Module 5: Databases & Deployment", topics: ["NoSQL (MongoDB) connections", "Mongoose schemas", "JWT authentication", "Cloud hosting"] }
      ],
      notes: [
        { title: "Async/Await Mechanics", content: "Async functions return promises. The `await` keyword pauses execution until the promise resolves, yielding clean, synchronous-looking asynchronous code." }
      ],
      flashcards: [
        { question: "What is the Virtual DOM in React?", answer: "An in-memory representation of the real DOM that React diffs to perform fast, batched updates to the UI." },
        { question: "Explain JSON Web Token (JWT) structure.", answer: "Consists of three parts separated by dots: Header, Payload, and Signature." }
      ],
      pyqs: [
        { year: 2024, type: "End-Semester", duration: "3 Hours", questions: 7 }
      ]
    },
    { 
      id: 'ai', 
      name: 'Artificial Intelligence', 
      code: 'IT304', 
      description: 'Search algorithms, machine learning basics, and neural networks.',
      modules: [
        { title: "Module 1: Introduction & State Space Search", topics: ["Uninformed Search (BFS, DFS)", "Informed Search (A* Search, Greedy Best First)", "Adversarial Search (Minimax, Alpha-Beta Pruning)"] },
        { title: "Module 2: Knowledge Representation", topics: ["Propositional Logic", "First-Order Predicate Logic", "Semantic Networks", "Rule-based expert systems"] },
        { title: "Module 3: Machine Learning Foundations", topics: ["Supervised vs Unsupervised learning", "Linear Regression", "Decision Trees", "K-Means Clustering"] },
        { title: "Module 4: Artificial Neural Networks", topics: ["Perceptron model", "Activation Functions (ReLU, Sigmoid)", "Backpropagation algorithm"] },
        { title: "Module 5: NLP & Robotics", topics: ["Tokenization & Lemmatization", "TF-IDF Vectorization", "Kinematics in robotics"] }
      ],
      notes: [
        { title: "A* Search Conditions", content: "A* search guarantees optimality if the heuristic h(n) is admissible (never overestimates the cost to reach the goal) and consistent." }
      ],
      flashcards: [
        { question: "What is Alpha-Beta Pruning?", answer: "An optimization technique for the minimax algorithm that cuts off branches that cannot possibly affect the final decision." },
        { question: "Define Backpropagation.", answer: "The algorithm that calculates parameter gradients in a neural network by passing errors backward from outputs to inputs." }
      ],
      pyqs: [
        { year: 2024, type: "End-Semester", duration: "3 Hours", questions: 6 }
      ]
    }
  ],
  4: [
    { 
      id: 'cc', 
      name: 'Cloud Computing', 
      code: 'IT401', 
      description: 'AWS, Azure, virtualization, and distributed systems.',
      modules: [
        { title: "Module 1: Cloud Basics", topics: ["NIST Definition", "Cloud service models (IaaS, PaaS, SaaS)", "Deployment models (Public, Private, Hybrid)"] },
        { title: "Module 2: Virtualization", topics: ["Hypervisors (Type 1 & Type 2)", "OS-level virtualization (Docker containers)", "VM migration mechanisms"] },
        { title: "Module 3: AWS Architecture", topics: ["EC2 instances", "S3 Storage buckets", "VPC structures", "IAM Roles & Security Groups"] },
        { title: "Module 4: Distributed Computing", topics: ["MapReduce programming model", "Virtual machine autoscaling", "Load balancing algorithms"] },
        { title: "Module 5: Cloud Security & Serverless", topics: ["Shared responsibility model", "FaaS (AWS Lambda)", "Cloud migration strategies"] }
      ],
      notes: [
        { title: "Cloud Service Breakdown", content: "IaaS gives you basic infrastructure (VMs, storage); PaaS gives you runtime environments (Heroku, AWS Elastic Beanstalk); SaaS gives fully managed applications (Google Workspace)." }
      ],
      flashcards: [
        { question: "Difference between Type 1 and Type 2 Hypervisors?", answer: "Type 1 runs bare-metal directly on the host hardware; Type 2 runs on top of an existing host operating system." },
        { question: "What is a Serverless architecture?", answer: "An execution model where the cloud provider dynamically manages machine resources (e.g. AWS Lambda), charging only for execution time." }
      ],
      pyqs: [
        { year: 2024, type: "End-Semester", duration: "3 Hours", questions: 7 }
      ]
    },
    { 
      id: 'cns', 
      name: 'Cryptography & Network Security', 
      code: 'IT402', 
      description: 'Encryption, digital signatures, and security protocols.',
      modules: [
        { title: "Module 1: Classical Cryptography", topics: ["Substitution & Transposition ciphers", "Symmetric key cryptography principles", "Feistel cipher structure"] },
        { title: "Module 2: Modern Symmetric Ciphers", topics: ["Data Encryption Standard (DES)", "Advanced Encryption Standard (AES)", "Block cipher modes (ECB, CBC)"] },
        { title: "Module 3: Asymmetric Cryptography", topics: ["Diffie-Hellman Key Exchange", "RSA Algorithm math", "Elliptic Curve Cryptography"] },
        { title: "Module 4: Data Integrity", topics: ["Cryptographic Hash Functions (SHA-256)", "Message Authentication Codes (MAC)", "Digital Signatures"] },
        { title: "Module 5: Network Security Protocols", topics: ["IPsec architecture", "SSL/TLS handshake", "Firewall filtering", "Intrusion Detection Systems"] }
      ],
      notes: [
        { title: "RSA Cryptosystem Mathematics", content: "Choose two prime numbers p, q. n = p*q. Compute φ(n) = (p-1)*(q-1). Public key e must satisfy gcd(e, φ(n)) = 1. Private key d is the modular multiplicative inverse of e mod φ(n)." }
      ],
      flashcards: [
        { question: "Explain the main vulnerability of Electronic Codebook (ECB) mode.", answer: "Identical plaintext blocks encrypt into identical ciphertext blocks, leaking structural patterns in data." },
        { question: "What security properties do digital signatures guarantee?", answer: "Authentication, Non-repudiation, and Integrity." }
      ],
      pyqs: [
        { year: 2024, type: "End-Semester", duration: "3 Hours", questions: 8 }
      ]
    },
    { 
      id: 'bd', 
      name: 'Big Data Analytics', 
      code: 'IT403', 
      description: 'Hadoop, Spark, and data visualization.',
      modules: [
        { title: "Module 1: Big Data Characteristics", topics: ["The 5 Vs (Volume, Velocity, Variety, Veracity, Value)", "Distributed processing concepts", "Structured vs unstructured data"] },
        { title: "Module 2: Hadoop Ecosystem", topics: ["Hadoop Distributed File System (HDFS)", "NameNode & DataNode architecture", "MapReduce programming model"] },
        { title: "Module 3: Apache Spark", topics: ["Resilient Distributed Datasets (RDDs)", "Spark SQL & Dataframes", "Lazy evaluation mechanisms"] },
        { title: "Module 4: NoSQL Databases", topics: ["Key-Value stores", "Document databases (MongoDB)", "Columnar storage (Cassandra)", "CAP Theorem"] },
        { title: "Module 5: Analytics and Viz", topics: ["Data mining workflows", "Spark Streaming", "BI tools & data visualization dashboards"] }
      ],
      notes: [
        { title: "HDFS Architecture Principles", content: "HDFS uses a master-slave design. The NameNode acts as master, managing metadata and cluster operations, while DataNodes store file block replicas." }
      ],
      flashcards: [
        { question: "What is the CAP Theorem?", answer: "A distributed system can satisfy only two out of three: Consistency, Availability, and Partition Tolerance." },
        { question: "What is Resilient Distributed Dataset (RDD)?", answer: "Spark's primary data abstraction: a read-only, partitioned, fault-tolerant collection of records." }
      ],
      pyqs: [
        { year: 2024, type: "End-Semester", duration: "3 Hours", questions: 7 }
      ]
    },
    { 
      id: 'ml', 
      name: 'Machine Learning', 
      code: 'IT404', 
      description: 'Supervised, unsupervised learning, and deep learning models.',
      modules: [
        { title: "Module 1: Supervised Learning", topics: ["Linear and Logistic Regression", "Support Vector Machines (SVM)", "Decision Trees", "Bias-Variance Trade-off"] },
        { title: "Module 2: Ensemble Methods", topics: ["Random Forest", "Gradient Boosting (XGBoost)", "AdaBoost", "Bagging vs Boosting"] },
        { title: "Module 3: Unsupervised Learning", topics: ["K-Means clustering", "Hierarchical clustering", "Principal Component Analysis (PCA)", "Dimensionality reduction"] },
        { title: "Module 4: Deep Learning Foundations", topics: ["Multi-layer Perceptrons", "Activation functions", "Loss functions & Optimizers (Adam, SGD)"] },
        { title: "Module 5: Model Evaluation", topics: ["Confusion Matrix", "Precision, Recall, & F1 Score", "ROC & AUC curves", "Cross-Validation"] }
      ],
      notes: [
        { title: "Bias vs Variance", content: "High bias corresponds to underfitting (too simplistic model). High variance corresponds to overfitting (model learns training noise). Aim to minimize both." }
      ],
      flashcards: [
        { question: "Explain the difference between Bagging and Boosting.", answer: "Bagging trains parallel independent models (e.g. Random Forest) to reduce variance; Boosting trains sequential dependent models to reduce bias." },
        { question: "What is the purpose of PCA?", answer: "Principal Component Analysis is a dimensionality reduction technique that maps data to orthogonal directions of maximum variance." }
      ],
      pyqs: [
        { year: 2025, type: "End-Semester", duration: "3 Hours", questions: 8 }
      ]
    }
  ]
};
