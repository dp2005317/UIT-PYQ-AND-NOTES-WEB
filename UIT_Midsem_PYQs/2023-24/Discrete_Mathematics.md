# B.E Odd/Even 1st/2nd Mid-Semester Examination 2023-24
**Subject:** Discrete Mathematics | **Paper Code:** PCC-IT401

### Q1. Construct truth table for $(\sim(p \land q) \lor r) \Rightarrow \sim p.$ (5)
**Answer:**
For inputs (p=T, q=T, r=T), $p \land q$ = T, $\sim(p \land q)$ = F. $\lor r$ = T. $\sim p$ = F. Result $T \Rightarrow F$ is **F**.
Result Column for all 8 rows (TTT to FFF): **F, T, F, F, T, T, T, T**.

### Q2. (i) Define conjunction? (ii) Form the conjunction... (2+3)
**Answer:**
**(i)** A compound statement formed by joining two statements with the "AND" operator ($\land$), true only when both are true.
**(ii)**
(a) Ram is healthy and he has blue eyes.
(b) It is cold and it is raining.
(c) $5x+6=26$ and $x>3$.

### Q3. (i) Define simple graph and multigraph. (ii) Draw a graph with two pendants.
**Answer:**
**(i)** **Simple Graph:** No loops, no multiple edges between same vertices. **Multigraph:** Allows multiple edges between the same pair of vertices.
**(ii)** A path graph `A --- B --- C` has exactly two pendants (A and C, degree 1).

### Q4. Prove $(A \times B) \cap (C \times D) = (A \cap C) \times (B \cap D)$
**Answer:**
Let $(x, y) \in (A \times B) \cap (C \times D)$
$\Rightarrow (x \in A \land y \in B) \land (x \in C \land y \in D)$
$\Rightarrow (x \in A \land x \in C) \land (y \in B \land y \in D)$
$\Rightarrow x \in (A \cap C) \land y \in (B \cap D) \Rightarrow (x, y) \in (A \cap C) \times (B \cap D)$. Proved.

### Q5. Relation R on Z: $|a-b| \le 5$. Reflexive, symmetric, transitive? (5)
**Answer:**
* **Reflexive:** $|a-a| = 0 \le 5$. Yes.
* **Symmetric:** $|a-b| \le 5 \Rightarrow |b-a| \le 5$. Yes.
* **Transitive:** Let a=1, b=6, c=11. $|1-6|=5 \le 5$. $|6-11|=5 \le 5$. But $|1-11|=10 \not\le 5$. No, not transitive.

### Q6. Show $f(x)=3x+5$ is bijective. Determine $f^{-1}$. (5)
**Answer:**
* **Injective:** $f(x_1) = f(x_2) \Rightarrow 3x_1+5 = 3x_2+5 \Rightarrow x_1=x_2$. Yes.
* **Surjective:** Let $y = 3x+5$. Then $x = (y-5)/3$. For every real y, a real x exists. Yes.
* **Inverse:** $f^{-1}(x) = (x-5)/3$.