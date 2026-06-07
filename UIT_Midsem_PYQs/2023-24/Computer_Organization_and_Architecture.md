# B.E. Even Semester Midterm Examination, 2023-24(Even)
**Subject:** Computer Organization & Architecture | **Paper Code:** PCC-IT 402

### Q1. 8k memory, start 0000. Find ending address. Calculate RAM chips (128 bytes).
**Answer:**
* 8k = $8192$ bytes. Decimal range $0$ to $8191$. 
* $8191$ in Hex is 13 bits of '1': `0001 1111 1111 1111` = **1FFFH**.
* Number of chips = $8192 / 128$ = **64 chips**.

### Q2. Disadvantage of direct mapping and how to overcome?
**Answer:**
**Disadvantage:** Conflict Misses (Thrashing). Multiple active memory blocks mapping to the exact same cache line repeatedly evict each other, even if other cache lines are empty.
**Overcome:** Use Associative Mapping or Set-Associative Mapping, which allows blocks to map to multiple/any lines.

### Q3. OPCODE ADD, operand 206, AC 500, Direct Addressing.
**Answer:**
a) Direct mode means 206 is the actual memory address. AC becomes $500 + M[206]$.
b) RTL Specification: $AC \leftarrow AC + M[206]$.

### Q4. $X=A+(C^{*}D)$ using zero address instructions.
**Answer:**
Uses a Stack:
`PUSH C`
`PUSH D`
`MUL`   (Pops C, D, pushes C*D)
`PUSH A`
`ADD`   (Pops A, C*D, pushes sum)
`POP X`

### Q5. What are write through and write back policies?
**Answer:**
* **Write-Through:** Every cache write also writes synchronously to main memory. (High memory traffic, but consistent).
* **Write-Back:** Modifies only the cache (sets a dirty bit). Writes to main memory only when the block is evicted. (Fast, but temporarily inconsistent).