---
title: chapter 1 行列式
createTime: 2025/10/18 10:29:39
permalink: /algebra/chapter-1/
---

# 第一章 行列式

第一章我们来研究未定元与线性方程个数相同的情况，如下（第一个数字表示行数，第二个数字表示列数）
$$
\begin{cases}
a_{11}x_1 + a_{12}x_2 = b_1 \\
a_{21}x_1 + a_{22}x_2 = b_2
\end{cases}
$$
我们都会用消元法解这样的方程， $(a_{11}a_{22} - a_{12}a_{21})x_1 = b_1a_{22} - b_2a_{12}$ 但是表达结果非常麻烦，那么我们接下来定义

### 二阶行列式(表值)

$$
\begin{vmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} 
\end{vmatrix} = a_{11}a_{22} - a_{12}a_{21}
$$

​																		ps：这是一个类似交叉相乘过程的东西

我们已经把 $x_1$ 的分母表示出来了，那么同理可得 
$$
x_1 = \frac{\begin{vmatrix} b_1 & a_{12} \\ b_2 & a_{22} \end{vmatrix}}{\begin{vmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{vmatrix}}
$$

---

三元线性方程组时，使用待定系数法
$$
\begin{equation*}
\begin{cases}
a_{11} x_1 + a_{12} x_2 + a_{13} x_3 = b_1 \\
a_{21} x_1 + a_{22} x_2 + a_{23} x_3 = b_2 \\
a_{31} x_1 + a_{32} x_2 + a_{33} x_3 = b_3
\end{cases}
\end{equation*}
$$
$(1) \times U + (2) \times V + (3) \times W$ ，看它们的系数，我们可以规定
$$
\begin{equation*}
\begin{cases}
(a_{11}U + a_{21}V + a_{31}W)x_1 = b_1U + b_2V + b_3W  \\
a_{12}U + a_{22}V + a_{32}W = 0 \\
a_{13}U + a_{23}V + a_{33}W = 0
\end{cases}
\end{equation*}
$$
化简为二元线性方程组
$$
\begin{equation*}
\begin{cases}
a_{12} \frac{U}{W} + a_{22} \frac{V}{W} = -a_{32} \\
a_{13} \frac{U}{W} + a_{23} \frac{V}{W} = -a_{33}
\end{cases}
\end{equation*}
$$
$$
\Rightarrow \quad
\frac{U}{W} = \frac{
\begin{vmatrix}
-a_{32} & a_{22} \\
-a_{33} & a_{23}
\end{vmatrix}
}{
\begin{vmatrix}
a_{12} & a_{22} \\
a_{13} & a_{23}
\end{vmatrix}
}
=
\frac{
\begin{vmatrix}
a_{22} & a_{23} \\
a_{32} & a_{33}
\end{vmatrix}
}{
\begin{vmatrix}
a_{12} & a_{13} \\
a_{22} & a_{23}
\end{vmatrix}
}
$$

$$
\frac{V}{W} = \frac{
\begin{vmatrix}
a_{12} & -a_{32} \\
a_{13} & -a_{33}
\end{vmatrix}
}{
\begin{vmatrix}
a_{12} & a_{22} \\
a_{13} & a_{23}
\end{vmatrix}
}
=-
\frac{
\begin{vmatrix}
a_{12} & a_{13} \\
a_{32} & a_{33}
\end{vmatrix}
}{
\begin{vmatrix}
a_{12} & a_{13} \\
a_{22} & a_{23}
\end{vmatrix}
}
$$

(可以展开体会一下。且我们希望行列数对齐)

不妨令
$$
U = \left| \begin{array}{cc} a_{22} & a_{23} \\ a_{32} & a_{33} \end{array} \right|,\quad V = -\left| \begin{array}{cc} a_{12} & a_{13} \\ a_{32} & a_{33} \end{array} \right|,\quad W = \left| \begin{array}{cc} a_{12} & a_{13} \\ a_{22} & a_{23} \end{array} \right|
$$


我们要把上面的化成表达式代回第四个式子里依旧麻烦，自然而然得到

### 三阶行列式

递归定义（参照二阶行列式的定义）
$$
\begin{vmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{vmatrix}
\overset{def}{=} a_{11} \begin{vmatrix} a_{22} & a_{23} \\ a_{32} & a_{33} \end{vmatrix} - a_{21} \begin{vmatrix} a_{12} & a_{13} \\ a_{32} & a_{33} \end{vmatrix} + a_{31} \begin{vmatrix} a_{12} & a_{13} \\ a_{22} & a_{23} \end{vmatrix}
$$


组合定义

 =  $a_{11}a_{22}a_{33} + a_{21}a_{32}a_{13} + a_{31}a_{12}a_{23} - a_{13}a_{22}a_{31} - a_{11}a_{32}a_{23} - a_{31}a_{21}a_{12}$

（可以在上面3*3矩阵里画线体会一下，像“蝴蝶的翅膀”）




$$
x_1 = \frac{\begin{vmatrix} b_{1} & a_{12} & a_{13} \\ b_{2} & a_{22} & a_{23} \\ b_{3} & a_{32} & a_{33} \end{vmatrix}}{\begin{vmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\  a_{31} & a_{32} & a_{33} \end{vmatrix}}\quad\quad 
x_2 = \frac{\begin{vmatrix} a_{11} & b_{1} & a_{13} \\ a_{21} & b_2 & a_{23} \\ a_{31} & b_3 & a_{33} \end{vmatrix}}{\begin{vmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{vmatrix}}\quad \quad
x_3 = \frac{\begin{vmatrix} a_{11} & a_{12} & b_1 \\ a_{21} & a_{22} & b_2 \\ a_{31} & a_{32} & b_3 \end{vmatrix}}{\begin{vmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{vmatrix}}
$$
分母是三元线性方程组按照原来的系数的次序，分子用 $b_1 ,b_2,b_3$ 替换第一（二、三）列
