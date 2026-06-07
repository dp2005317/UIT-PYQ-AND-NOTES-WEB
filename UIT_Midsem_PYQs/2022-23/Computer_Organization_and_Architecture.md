# B.E. 4th Semester Theoretical Examination, 2022-2023
**Subject:** Computer Organization & Architecture | **Course:** PCC-IT 402

### Q1. Address Space & Basics
* **Size of address space:** Address length $n$ bits $\Rightarrow 2^n$ memory locations.
* **Hex representation:** 67 = 43H, 142 = 8EH.
* **IPC:** 35,000 instructions / 17,000 cycles = 2.05.

### Q2. Memory Design (2048 Bytes)
* 2048 bytes total. Max ROM = 512 bytes (requires two 256B chips).
* RAM remaining = 1536 bytes (requires six 256B chips).

### Q3. Cache Design
* **Write-through vs back:** Through writes to main memory immediately; Back delays write until block eviction.
* **Hit ratio factors:** Cache size, associativity, replacement policy.

### Q4. Pipelining Hazards
* **RAW (Read After Write):** Instr 2 reads data produced by Instr 1.
* **WAR (Write After Read):** Instr 2 writes over data before Instr 1 reads it.
* **WAW (Write After Write):** Both write to same register.

### Q5. Addressing Modes
* **Immediate:** Operand in instruction. **Direct:** Absolute memory address given. **Indirect:** Address points to pointer.

### Q7. DMA Controller
* DMA accesses memory directly bypassing CPU. 
* Bus Request (BR) asks CPU for control. Bus Grant (BG) is CPU's acknowledgement.