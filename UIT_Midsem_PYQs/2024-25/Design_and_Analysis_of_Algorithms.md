# B.E. Even Semester Midterm Examination, 2024-25
**Subject:** Data Structures / Design and Analysis of Algorithms

### Q1. Find the MST from the following graph using Kruskal algorithm
*(Graph Edges: AB=1, AC=2, BC=3, CD=4, CE=5, CF=6, DE=7, EF=8)*
**Answer:**
Kruskal's Algorithm finds the Minimum Spanning Tree (MST) by sorting edges and adding them avoiding cycles. (5 edges needed for 6 vertices).
Sorted: AB(1), AC(2), BC(3), CD(4), CE(5), CF(6), DE(7), EF(8).
1. Add AB (1)
2. Add AC (2)
3. Reject BC (creates cycle A-B-C)
4. Add CD (4)
5. Add CE (5)
6. Add CF (6)
**MST Edges:** AB, AC, CD, CE, CF. **Total Weight:** 18.

### Q2. Breadth first traversal of a graph uses representation of graph in which data structure? Find the BFS sequence for the following graph.
**Answer:**
* **Data Structure:** Breadth-First Search utilizes a **Queue** (First-In-First-Out) data structure.
* **BFS Sequence:** Assuming start at M:
  Queue: [M]. Output: M. Enqueue N, Q, R.
  Queue: [N, Q, R]. Dequeue N. Output: N. Enqueue O.
  Queue: [Q, R, O]. Dequeue Q. Output: Q. Enqueue P.
  Queue: [R, O, P]. Dequeue R. Output: R.
  Queue: [O, P]. Dequeue O. Output: O.
  Queue: [P]. Dequeue P. Output: P.
  **Sequence:** `M, N, Q, R, O, P`.

### Q3. Why are all Master's theorems compared with the function $n^{\log_b(a)}$?
**Answer:**
In the recurrence $T(n) = aT(n/b) + f(n)$, expanding it creates a recursion tree. 
$n^{\log_b(a)}$ represents the total amount of work done at the leaf level (base cases) of the tree.
The function $f(n)$ represents the work done at the root node (combining). 
Master's theorem compares $f(n)$ with $n^{\log_b(a)}$ to determine which part of the tree dominates the computational cost (leaves, root, or evenly balanced).