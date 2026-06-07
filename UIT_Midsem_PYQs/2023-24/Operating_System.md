# B.E. Even Semester Midterm Examination, 2023-2024
**Subject:** Operating System | **Paper Code:** PCC-IT 403 | **Full Marks:** 20

### Q1. Explain, in brief, the life cycle of a process.
**Answer:**
1. **New:** Process is being created, PCB initialized.
2. **Ready:** Loaded into memory, waiting to be assigned to CPU.
3. **Running:** CPU is allocated, instructions are executing.
4. **Blocked/Waiting:** Process cannot proceed until an event occurs (I/O completion).
5. **Terminated:** Process has finished, OS reclaims resources.

### Q2. How load balancing is performed by long-term scheduler?
**Answer:** The long-term scheduler maintains load balancing by carefully controlling the Degree of Multiprogramming. It selects a balanced mix of CPU-bound processes (compute-heavy) and I/O-bound processes (I/O-heavy) from the job pool. This ensures neither the CPU nor the I/O devices sit idle.

### Q3. Discuss FIFO CPU scheduling algorithm and its limitation.
**Answer:** FIFO (First-Come-First-Serve) allocates the CPU to processes strictly in their arrival order. It is non-preemptive.
**Limitation:** The **Convoy Effect**. A very long process arriving first will force all subsequent shorter processes to wait, drastically increasing the average waiting time and degrading responsiveness.

### Q4. What is the disadvantage of static-partitioning scheme? Explain with suitable diagram.
**Answer:** The major disadvantage is **Internal Fragmentation**. If a process is smaller than its assigned fixed-size partition, the remaining space inside the partition is completely wasted.
```text
| Partition 1: 100 KB | <-- Process A (70 KB) loaded. [30 KB is WASTED]
| Partition 2: 100 KB | <-- Process B (90 KB) loaded. [10 KB is WASTED]
```

### Q5. Explain, in brief, how memory is allocated for a process in paging memory management scheme.
**Answer:** Physical memory is divided into fixed-size **frames**, and logical memory into same-sized **pages**. When a process executes, its pages are loaded into any available non-contiguous free frames. The OS maintains a **Page Table** that maps the logical page numbers to their actual physical frame numbers, avoiding external fragmentation.