# B.E. Even Semester Midterm & Theoretical Examination, 2022-2023
**Subject:** Operating System | **Paper Code:** PCC-IT 403

## PART A: MIDTERM EXAMINATION (20 Marks)

### Q1. Explain, in brief, the role of system calls in executing a user process.
**Answer:** A system call provides the interface between a running user process and the Operating System. Since user processes are restricted from directly accessing hardware or executing privileged instructions, they must invoke a system call. This triggers a software interrupt (trap), switching the CPU from user mode to kernel mode, allowing the OS to perform the requested service (e.g., File I/O, memory allocation) safely.

### Q2. Discuss the limitation of priority-based CPU scheduling algorithm. Propose a possible solution.
**Answer:**
* **Limitation:** The major limitation is **Starvation** (or indefinite blocking). A steady stream of high-priority processes can prevent a low-priority process from ever getting the CPU.
* **Solution:** **Aging**. This involves gradually increasing the priority of processes that wait in the system for a long time, ensuring they eventually execute.

### Q3. What is the job of base register and limit register in memory management?
**Answer:** They are hardware registers used for memory protection. The **base register** holds the smallest legal physical memory address allocated to a process, and the **limit register** specifies the size of the range. The CPU checks every logical address generated against these registers to ensure the process does not access memory outside its allocated space.

### Q4. What information is stored in Process Control Block?
**Answer:** The PCB stores vital process information, including: Process State (ready, running, etc.), Program Counter, CPU Registers, CPU Scheduling Info (priorities), Memory-Management Info (base/limit registers, page tables), Accounting Info, and I/O Status Info (list of open files).

### Q5. Explain in brief, how address translation is done in paging memory management scheme.
**Answer:** The CPU generates a logical address divided into a **Page Number (p)** and a **Page Offset (d)**. The Page Number is used as an index into the process's **Page Table**, which contains the corresponding base physical **Frame Number (f)** where the page is stored in main memory. The Frame Number is then combined with the original Offset (d) to form the actual physical address.

## PART B: THEORETICAL EXAMINATION (70 Marks) - Key Concepts

**1. (a) OS Services:** *User Interface:* Provides CLI/GUI for interaction. *Resource Allocation:* Manages CPU cycles, memory, and I/O for multiple concurrent tasks. **(c) Context Switch:** Saving the state (registers, PC) of the currently running process into its PCB and loading the saved state of the newly scheduled process.

**2. (a) Long-term Scheduler:** Selects processes from the disk pool and loads them into memory, controlling the degree of multiprogramming. **(b) Preemptive vs Non-preemptive:** Preemptive allows the OS to forcefully interrupt a running process; non-preemptive requires the process to voluntarily yield. **(c) FCFS Calculation:** P1(3), P2(2), P3(9), P4(5). WT: P1=0, P2=3, P3=5, P4=14 (Avg WT = 5.5). TAT: P1=3, P2=5, P3=14, P4=19 (Avg TAT = 10.25).

**3. (a) Thread Relationships:** Many-to-One, One-to-One, Many-to-Many models. **(b) Reader-Writer:** Multiple readers can read simultaneously, but a writer must have exclusive access to modify data. **(c) Critical Section Requirements:** Mutual Exclusion, Progress, and Bounded Waiting.

**4. (a) Banker's Algorithm:** Uses `Available`, `Max`, `Allocation`, and `Need` matrices to simulate allocation and ensure the system remains in a safe state. **(b) Cycle in RAG:** A cycle implies deadlock *only* if each resource type has exactly one instance. If multiple instances exist, a cycle is a necessary but not sufficient condition. **(c) Memory Wastages:** Fixed-partitioning suffers from Internal Fragmentation. Dynamic-partitioning suffers from External Fragmentation.

**5. (a) Segmentation:** Memory is divided into logical segments of varying sizes (functions, arrays) instead of fixed pages, accessed via a Segment Table (Base + Limit). **(b) Hardware Solutions:** TestAndSet, CompareAndSwap instructions. **(c) Semaphore:** `wait()` decrements the value (blocks if $\le 0$). `signal()` increments the value (wakes up a blocked process).

**6. (a) Paging Hardware:** Uses TLB (Translation Lookaside Buffer) for fast lookups and PTBR (Page Table Base Register). **(b) EMAT Calculation:** $EMAT = h(c+m) + (1-h)(c+2m) = 0.95(30+100) + 0.05(30+200) = 0.95(130) + 0.05(230) = 123.5 + 11.5 = 135\text{ ns}$. **(c) LRU Page Faults:** For string 1, 2, 3, 3, 2, 4, 5, 6, 2, 1... with 3 frames, LRU replaces the least recently used page. (Perform trace to find exact fault count).

**7. (b) Soft vs Hard Link:** Hard links point directly to the inode of the file (file persists until all hard links are deleted). Soft links are shortcuts pointing to the path name (breaks if original is deleted). **(c) fork():** In C, `pid_t pid = fork();` creates a child. If `pid == 0`, it's the child; if `pid > 0`, it's the parent.

**8. (a) Sequential Allocation:** Contiguous blocks. Adv: Fast read. Disadv: External fragmentation, file growth is hard. **(b) Thrashing:** When a system spends more time paging (swapping pages in/out) than executing instructions due to high multiprogramming. **(c) FCFS Disk distance:** 50 $\rightarrow$ 28 $\rightarrow$ 85 $\rightarrow$ 57 $\rightarrow$ 140 $\rightarrow$ 30 $\rightarrow$ 12 $\rightarrow$ 65 $\rightarrow$ 120. Total movement = 22 + 57 + 28 + 83 + 110 + 18 + 53 + 55 = 426 cylinders.