# B.E. Even Sem Midterm & Theoretical Examination, 2022-2023
**Subject:** Design and Analysis of Algorithm | **Paper Code:** PCC-IT 404

### Q1. Solve the recurrences
**i) $T(n)=3T(n/4)+\Theta(n)$ - using Recursion Tree**
Geometric series: $\sum (3/4)^i cn$. Since ratio < 1, bounded by a constant multiple of n. Complexity is **$\Theta(n)$**.
**ii) $T(n)=3T(n/4)+n \log n$ - using Master's Theorem**
$n^{\log_4 3} \approx n^{0.793}$. $f(n) = n \log n$ is polynomially larger (Case 3). Regularity holds. Complexity: **$\Theta(n \log n)$**.

### Q2. Worst-case time complexity of Quick Sort? Explain with recurrence.
**Answer:** Worst-case is **$O(n^2)$** when array is sorted, pivot is extreme, leading to $n-1$ and $0$ partitions. Recurrence: $T(n) = T(n-1) + T(0) + \Theta(n) \implies O(n^2)$.

### Q3. Strassen's vs Conventional Matrix multiplication.
**Answer:** Conventional needs 8 multiplications $T(n) = 8T(n/2) + O(n^2) = O(n^3)$. 
Strassen uses 7 multiplications $T(n) = 7T(n/2) + O(n^2) = O(n^{2.81})$. Faster asymptotically.

### PART B (Theory Highlights)
* **Greedy Strategy:** Makes locally optimal choices hoping for a global optimum. Kruskal's always picks the cheapest available edge (greedy).
* **Stable Sort:** Retains the relative order of equal keys.
* **Radix Sort:** Complexity is $O(d(n+k))$.
* **Dynamic Programming Elements:** Optimal Substructure and Overlapping Subproblems.
* **NP-Hard vs Complete:** NP-Hard are at least as hard as hardest NP problems. NP-Complete are both NP and NP-Hard.