# B.E. Even Semester Midterm Examination, 2024-25
**Subject:** Discrete Mathematics | **Paper Code:** PCC-IT401 | **Full Marks:** 15 | **Time:** 1 Hr.

### Q1. Define a bipartite graph. Draw $K_{3,3}$.
**Answer:** A **bipartite graph** is a graph whose vertices can be divided into two disjoint and independent sets $U$ and $V$ such that every edge connects a vertex in $U$ to one in $V$. There are no edges connecting vertices within the same set.
$K_{3,3}$ has two sets of vertices, $U = \{u_1, u_2, u_3\}$ and $V = \{v_1, v_2, v_3\}$. Every vertex in $U$ is connected to every vertex in $V$.

### Q2. Show that $(\mathbb{R},+)$ forms a group but $(\mathbb{R},\cdot)$ does not form a group.
**Answer:**
**1. $(\mathbb{R},+)$ is a group:** Satisfies Closure, Associativity, Identity (0), and Inverse (-a).
**2. $(\mathbb{R},\cdot)$ is NOT a group:** It fails the **Inverse property**. For the element $0 \in \mathbb{R}$, the inverse $1/0$ is undefined.

### Q3. Define a group with an example. Give an example of a monoid which is not a group with reason.
**Answer:**
**Definition:** A group $(G, *)$ is a set $G$ combined with a binary operation $*$ satisfying Closure, Associativity, Identity, and Inverse. Example: $(\mathbb{Z}, +)$.
**Monoid not a group:** $(\mathbb{N}, +)$ where $\mathbb{N} = \{0, 1, 2, ...\}$ is a monoid. Identity is $0$. It's not a group because elements (like $5$) lack an additive inverse ($-5$) in $\mathbb{N}$.

### Q4. Draw a complete graph with five vertices. Verify Handshaking theorem for the graph.
**Answer:**
A complete graph $K_5$ has 5 vertices connected to every other vertex once.
* Vertices ($|V|$) = 5. Edges ($|E|$) = $5(4)/2 = 10$. Degree of each = 4.
* **Handshaking Theorem:** Sum of degrees = $2|E|$. LHS: $5 \times 4 = 20$. RHS: $2 \times 10 = 20$. Verified.

### Q5. Draw a graph G with six vertices. Find four subgraphs of this graph G with at least four vertices.
**Answer:**
Let graph $G$ be a cycle graph $C_6$ defined by vertices $V = \{1, 2, 3, 4, 5, 6\}$.
Four subgraphs:
1. Path of 5 vertices: Remove vertex 6.
2. Path of 4 vertices: Remove vertices 5 and 6.
3. Disconnected 4 vertices: Remove vertices 1 and 4.
4. $G$ without one edge (Spanning subgraph with 6 vertices).