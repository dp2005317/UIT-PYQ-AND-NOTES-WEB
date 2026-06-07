# B.E. Even Semester Midterm Examination, 2024-2025
**Subject:** Operating System | **Paper Code:** PCC-IT 403 | **Full Marks:** 15

### Q1. What is system call? (2)
**Answer:** A system call provides the programmatic interface between a user-space application and the OS kernel. It allows restricted user programs to request the OS to perform privileged tasks like file I/O or memory allocation safely.

### Q2. What does short-term scheduler do? (2)
**Answer:** The short-term scheduler (CPU scheduler) selects one of the processes from the ready queue (processes loaded in memory) and allocates the CPU to it for execution. It runs very frequently.

### Q3. Calculate the waiting time for process C when three processes A, B and C come in sequence with CPU burst time 10, 20 and 30s. FCFS is followed. (2)
**Answer:** FCFS executes in order. 
Process A waits 0s. (Executes 0 to 10).
Process B waits 10s. (Executes 10 to 30).
Process C must wait for A and B. Waiting time = $10 + 20 = 30$ seconds.

### Q4. State the forms of memory wastage in fixed and dynamic partitioning schemes. (2)
**Answer:**
* **Fixed Partitioning:** Internal Fragmentation (unused space inside an allocated partition).
* **Dynamic Partitioning:** External Fragmentation (free memory is broken into small, non-contiguous blocks that cannot be allocated).

### Q5. Calculate effective memory access time: 90% TLB hit, main memory = 20ns, TLB = 2ns. (2)
**Answer:**
Formula: $\text{EMAT} = h \times (c + m) + (1 - h) \times (c + 2m)$
$\text{EMAT} = 0.90(2 + 20) + 0.10(2 + 2(20)) = 0.90(22) + 0.10(42) = 19.8 + 4.2 = 24$ ns.

### Q6. What is demand segmentation? (2)
**Answer:** Similar to demand paging, only the necessary segments (logical units like functions/arrays) of a process are loaded into memory when they are explicitly requested during execution, saving memory.

### Q7. Explain the role of PMTBR and PMTLR. (3)
**Answer:** * **PMTBR (Page Map Table Base Register):** Points to the base physical address of the page table for the running process in main memory.
* **PMTLR (Page Map Table Limit Register):** Holds the total size of the page table to prevent a process from accessing memory outside its logical address space (segmentation fault).