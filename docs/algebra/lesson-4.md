---
title: Lesson 4 正交性
createTime: 2025/12/07 14:32:39
permalink: /algebra/lesson-4/
---

这是一个关于正交（90°）的章节

先来看正交向量 $\mathbf{v} \cdot \mathbf{w}=\mathbf{v}^{T}\mathbf{w}=0$ ,在直角三角形里会有这样的式子 $||\mathbf{v}||^2 + ||\mathbf{w}||^2 =||\mathbf{v}+\mathbf{w}||^2$

## 正交子空间

接下来我们要推广到正交子空间，我们这样描述：$V$ 中任意向量 $\mathbf{v}$ 与 $W$ 中任意向量 $\mathbf{w}$ 垂直

一个显然的例子是：墙面和地板不能满足这样的条件

> 行空间垂直于零空间
>
> 列空间垂直于 $A^T$ 的零空间

怎么来说明上面这两条呢，对于零空间我们所知的  $Ax=0$ ,十分明显地，零空间中每一个向量 $\mathbf{x}$ 垂直于 $A$ 的每一行

$A$ 的转置性质也相同

借助简单的矩阵表达方式也可以得到 $\mathbf{x}^{T}(A^{T}\mathbf{y})=(A\mathbf{x})^{T} \mathbf{y} = 0^T \mathbf{y} =0$ ( $A^T \mathbf{y}$ 为行空间里A的各行向量的线性组合)

---

## 正交补

在上面的情况下我们要补充一点：两个子空间的维数等于整个空间的维数

这是n维空间里面的 **正交补** ：垂直于 $V$ 的全体向量构成的子空间，记作 $V^{\perp}$ ,读作 $V$ 垂

故零空间包含 **所有（ALL！）** 垂直于行空间的向量

> 线性代数基本定理第二部分：
>
> - 零空间 $N(A)$ 是行空间 $C(A^T)$ 的正交补（在 $\mathbb{R}^n$ 中）
> - 左零空间 $N(A^T)$ 是列空间 $C(A)$ 的正交补（在 $\mathbb{R}^m$ 中）

---

 $Ax=b$ 解不出怎么办，这是一个更常见的问题，那么我们找最优在哪里

比如一个长方形矩阵(m>n) $A$ ,把它变成 $A^T A$ (一个方阵)是更”好“的

 $A^T A$ 也是一个对称阵  $(A^T A)^T = A^T A$ ,它不一定是可逆的

>  $N(A^T A)=N(A)$
>
>  $A^T A$ 的秩等于 $A$ 的秩
>
>  $A^T A$ 可逆 **当且仅当** $A$ 的各列线性无关（零空间里只有零向量）

那么我们要拿到更”好“的方程组，给 $x$ 一顶帽子: $A^{T}A\hat{x}=A^{T}b$ 

## 投影

把 $\mathbf{b}$ 投影到 $\mathbf{a}$ 上，在一维里显而易见的，作一条垂线，这一个误差（error） $\mathbf{e}=\mathbf{b}-\mathbf{p},\mathbf{p}=x\mathbf{a}$

这一个垂直关系我们可以得到 $\mathbf{a}^{T}(\mathbf{b}-x\mathbf{a})=0$，化简一下就可以得到 $x = \dfrac{\mathbf{a}^{T} \mathbf{b}}{\mathbf{a}^T \mathbf{a}},\mathbf{p}=\mathbf{a}x$

用线性代数怎么说？

$\mathbf{p}=P\mathbf{b}$ : $P$ 称为投影矩阵，

已知 $\mathbf{p}=\mathbf{a}\dfrac{\mathbf{a}^{T} \mathbf{b}}{\mathbf{a}^T \mathbf{a}}$ ，可得 $P=\dfrac{\mathbf{a} \mathbf{a}^T}{\mathbf{a}^T \mathbf{a}}$

> P是一个秩一矩阵，P的转置是它自己（对称矩阵）

$\mathbf{p}=P\mathbf{b}$ 这意味着一次投影，那么我再用投影矩阵投影一次呢？显而易见没有变化， 故 $P^2=P$

我们接着扩展下去，why project？因为 $Ax=b$ 有可能无解，我们微调 $b$ ,得到了有解的 $A\hat{x}=p$

$p$ 是投影，而 $\hat{x}$ 不是原来的 $x$ 了，所以我们给它一顶帽子

---

现在我们来到三维空间：想象一个平面与不在平面内的直线，向量为 $\mathbf{b}$ 

平面上两个基向量 $\mathbf{a_1},\mathbf{a_2}$ ,这是一个矩阵的列空间
$$
A=\begin{bmatrix}

a_1 & a_2 \\

\end{bmatrix}
$$
我们会得到误差向量 $\mathbf{e} = \mathbf{b}-\mathbf{p}$ ,这是 $\mathbf{b}$ 垂直于平面的分量；

而投影 $\mathbf{p}$ 是基向量的组合， $\mathbf{p}=A\hat{\mathbf{x}}$ 

 $\mathbf{e} = \mathbf{b}-A\hat{\mathbf{x}}$ 垂直于平面，也垂直于两个基向量：会得到两个方程我们可以写成
$$
\begin{bmatrix}

a_1^T \\

a_2^2 \\

\end{bmatrix}(\mathbf{b}-A\hat{\mathbf{x}})=
\begin{bmatrix}

0 \\

0 \\

\end{bmatrix}
$$
也可以写成 $A^T(\mathbf{b}-A\hat{\mathbf{x}})=0$ 

> 问：$\mathbf{b}-A\hat{\mathbf{x}}$ 在哪个子空间？
>
> $\mathbf{e}$ in $N(A^T)$ ,也就是说 $\mathbf{e}\perp C(A)$ 

回到方程 $A^T A\hat{x} =A^T b$ 

我们给出需要记住的三个公式

> [!important]
> $\hat{\mathbf{x}}=(A^T A)^{-1}A^T b$
>
> $p=A\hat{\mathbf{x}}= A(A^T A)^{-1}A^T b$
>
> 投影矩阵 $P = A(A^T A)^{-1}A^T$

$A(A^T A)^{-1}A^T$ 在一维空间有另一个形式 $\dfrac{a a^T}{a^T a}$

> 当A为可逆方阵时,投影矩阵 $A(A^T A)^{-1}A^T=AA^{-1}(A^T)^{-1}A^T =I$ 
>
> 为什么？A是可逆方阵的时候，列空间覆盖整个n维空间， $\mathbf{b}$ 的投影就是它自己

P有两个性质

> $P^T =P$
>
> $P^2 =P$

我们从几何角度解释这俩性质：第一次投影把向量拍在列空间上，第二次它还在那里

$P^2 = A(A^T A)^{-1}[A^TA(A^T A)^{-1}]A^T=A(A^T A)^{-1}A^T$ 亦可证得

---

自然也可以用最小二乘法拟合直线

比如说一个平面直角坐标系有三个点，我们可以假设线的 $b=C+Dt$ ，带入坐标得到方程组，对这个方程组做处理

考虑竖直方向的差异，得到误差向量 $||Ax-b||=||e||$ ，可以做平方  $||Ax-b|^2|=||e||^2=e_1^2 +e_2^2 +e_3^2$ ,最小二乘解使得误差最小

实际上我们在做线性回归分析

真正在线上的点纵坐标我们记为 $p_1 ,p_2 ,p_3$ ，横坐标与上方三个点相同

线性代数方法：任意向量 $b$ 可以分解为两个部分，在列空间中的 $p$ ,与列空间垂直的 $e$

微积分方法： $||Ax-b|^2|=||e||^2=e_1^2 +e_2^2 +e_3^2$ 有两个自变量，关于这两个自变量有两个偏导数（分别将C和D看作变量求导）

求导之后两个式子的系数矩阵与 $A^T A$ 一致，上述方程组与 $A^T A\hat{x}=A^T b$ 一致；也就是说微积分方法得到的方程组与‘正规方程’一样

> 一个推导链条：只有零解 $\to$ 列向量线性无关 $\to$ 矩阵满秩 $\to$ 矩阵可逆
>
> 背景知识：如果 $A$ 各列线性无关，则 $A^T A$ 是可逆矩阵

即要证明 $A^T Ax=0$ ，x一定是零向量

即 $x^T A^T A x=0=(Ax)^T (Ax)$ 只有零向量与自己正交，所以 $Ax$ 是零向量

A的各列线性无关，x在它的列空间里，x是零向量

---

互相垂直的单位向量一定是线性无关的，单位向量称作标准，互相垂直称为正交，可以找到标准正交向量组

## 正交基与正交矩阵