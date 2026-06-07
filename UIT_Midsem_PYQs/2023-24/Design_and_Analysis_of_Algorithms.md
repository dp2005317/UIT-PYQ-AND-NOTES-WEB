# B.E. Even Semester Midterm Examination, 2023-24(Even)
**Subject:** Design and Analysis of Algorithm | **Paper Code:** PCC-IT 404

### Q1. Solve the recurrences (4+3+3)
**i) $T(n)=3T(n/4)+\Theta(n)$ -- Recursion Tree**
Root cost is $cn$. Level 1 cost is $3(c(n/4)) = (3/4)cn$. Sum over levels is a geometric series $cn \sum (3/4)^i$. Since ratio < 1, it converges to a constant. Complexity is **$\Theta(n)$**.
**ii) $T(n)=3T(n/4)+n \log n$ -- Master's Theorem**
$a=3, b=4$. $n^{\log_4 3} \approx n^{0.793}$. $f(n) = n \log n$ grows polynomially faster than $n^{0.793}$ (Case 3). Condition $3(n/4)\log(n/4) \le k(n \log n)$ holds. Complexity: **$\Theta(n \log n)$**.
**iii) $T(n)=T(n-1)+1$ -- Iteration Method**
$T(n) = T(n-2) + 2 = T(n-k) + k$. Base case $k=n \Rightarrow T(n) = T(0) + n$. Complexity: **$\Theta(n)$**.

### Q2. Explain three basic asymptotic notations. (6)
**Answer:**
1. **Big O ($O$):** Upper Bound (Worst-case). $f(n) \le c \cdot g(n)$.
2. **Big Omega ($\Omega$):** Lower Bound (Best-case). $f(n) \ge c \cdot g(n)$.
3. **Theta ($\Theta$):** Tight Bound. $c_1 \cdot g(n) \le f(n) \le c_2 \cdot g(n)$.

### Q3. Worst-case time complexity of Quick Sort? Explain with recurrence. (4)
**Answer:**
Worst-case is **$O(n^2)$**. Occurs when the array is already sorted and the pivot is the smallest/largest element, partitioning into sizes $0$ and $n-1$.
Recurrence: $T(n) = T(n-1) + T(0) + \Theta(n) \approx T(n-1) + cn$. 
Expanding yields $cn + c(n-1) + ... = c \cdot n(n+1)/2 = \Theta(n^2)$.