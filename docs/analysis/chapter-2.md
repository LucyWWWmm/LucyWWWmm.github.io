---
title: Chapter 2 极限
permalink: /analysis/chapter-2/
createTime: 2025/10/12 10:20:03
---

## 2.1 数列极限

### **极限的 $\varepsilon -N$ 语言**

对 ${a_n},a\in R$ ,如果 $\forall \varepsilon >0,\exist N,s.t.$ 当 $n>N$ 时,有 $|a_n-a|<\varepsilon$ ，则数列 $a_n$ 收敛于 $a$ ，记为  $\underset{n\to\infty}{lim}a_n=a$ 

存在极限称为**收敛数列**，无极限称为**发散数列**。

> 注：1.要证  $\underset{n\to \infty}{lim}a_n=a$ ,只要 $n>m$ ，取 $N=[m]+1$ ,则当 $n>N$ , $|a_n-a|<\varepsilon$
>
> ​	2.几何意义： $\forall \varepsilon >0$ ,作开区间 $(a-\varepsilon ,a+\varepsilon)$ 其中有无穷项

1. $a_n\not\to a \Leftrightarrow \exist \varepsilon >0,\forall N,\exist n_N >N,s.t.|a_N|\geqslant \varepsilon$

2. 极限定义不能等效为 $\exist N,\forall \varepsilon >0$ 当 $n>N$ 时, $|a_n -a|<\varepsilon \Rightarrow a_n =a,\forall n>N$

	> 极限定义是说，无论 $\varepsilon$ 多小，都能找到一个N，那之后的项都小于 $\varepsilon$ 
	>
	> 这里是说，存在一个固定的N，那之后的项对所有的 $\varepsilon$ 都满足条件（一直后推无法找到），它的要求更高

   3.使用 $|a_n -a|=m<\varepsilon$ 解出N，或者 $N=[m]+1$

---



## 2.2 收敛数列的性质

### 定理：“唯一性”  设 ${a_n}$ 是收敛的，则极限唯一

>  证：设  $\underset{n\to\infty}{lim}a_n=a$ ， $\underset{n\to\infty}{lim}b_n=b$ ，且 $a\not= b$
>
> 不妨设 $a<b$ ,取 $\varepsilon =\dfrac {b-a}{2}$
>
> $\because \underset{n\to \infty}{lim}a_n=a$  , $\therefore \exist N_1$ ,当  $x>N_1$ 时， $a-\varepsilon <a_n<a+\varepsilon$ ，即为 $\dfrac {a-b}{2} <a_n <\dfrac {a+b}{2}$
>
>  $\because \underset{n\to \infty}{lim}b_n=b$  , $\therefore \exist N_2$ ,当 $x>N_2$ 时 ,  $b-\varepsilon <b_n<b+\varepsilon$  ，即为 $\dfrac {a+b}{2} <b_n <\dfrac {3b-a}{2}$
>
> 取 $N=max \{N_1,N_2 \}$ ,当 $n>N$ 时,同时成立
>
> N不存在，矛盾，证毕



### 定理：收敛数列是有界的

> 证：设  $\underset{n\to\infty}{lim}a_n=a$ 
>
> 对 $\varepsilon =1$ , $\exist N$ 当 $n>N$ 时, $|a_n -a|<1$
>
> 则当 $n>N$ 时, $|a_n|=|a_n -a+a|\leq |a_n -a|+|a|<1+|a|$
>
> 取 $M=max \{|a_1|,|a_2|,|a_3| \cdots |a_N|,1+|a| \}$
>
> 则 $\forall n,|a_n| \leq |M|$

> 小声说 ，把后无穷项限制住，余有限项比较



### 定理：“保号性”

  1.设  $\underset{n\to \infty}{lim}a_n=a$  , $a> \alpha$ ,则 $\exist N_1$ ,当 $n>N_1$ 时, $a_n> \alpha$ ,

​        $\underset{n\to \infty}{lim}b_n=b,b< \beta$  ,则 $\exist N_2$ ,当 $n>N_2$ 时, $b_n < \beta$

2. $\exist N \in \N ,s.t.$ 当 $n>N$ 时, $a_n \leq b_n$ ,则 $a \leq b$

3. $a<b,\exist N \in \N ,s.t.$ 当 $n>N$ 时, 则 $a_n < b_n$ 

	> 例题：设 $\underset{n\to \infty}{lim} a_n =a$ ,则 $\underset{n\to \infty}{lim} |a_n| =|a|$
	>
	> 证明：（思路为反证法，举例 $a_n =(-1)^n$ ）或者
	>
	> $\forall \varepsilon >0,| |a_n|-|a| |\leq |a_n -a|$
	>
	>  $\because \underset{n\to \infty}{lim} a_n =a$ ，设 $\exist N$ 当 $n>N$ 时 $|a_n -a|<\varepsilon$
	>
	> 当 $n>N$ 时 $| |a_n|-|a| |\leq |a_n -a|<\varepsilon$
	>
	> 得证 $\underset{n\to \infty}{lim} |a_n| =|a|$

	

### 定理：极限的四则运算

设 $\underset{n\to\infty}{lim}a_n=a$  ， $\underset{n\to\infty}{lim}b_n=b$  则

（1） $\underset{n\to \infty}{lim}a_n\pm b_n=a\pm b$ 

（2） $\underset{n\to \infty}{lim}a_n b_n=ab$

（3） $ifb\not= 0,\underset{n\to \infty}{lim}\dfrac{a_n}{b_n}=\dfrac{a}{b}$  

> 证明：
>
> （1）$\forall \varepsilon >0,\because \underset{n\to\infin}{lim}a_n =a$
>
> 故 $\exist N_1$ 当 $n>N_1$ 时, $|a_n -a|<\dfrac{\varepsilon}{2}$ ; $\exist N_2$ 当 $n>N_2$ 时, $|b_n -b|<\dfrac {\varepsilon}{2}$ 
>
> 取 $N=max(N_1,N_2)$ ,则当 $n>N$ 时
>
> $|(a_n +b_n)-(a+b)|\leq |a_n -a +b_n -b|\leq |a_n -a|+|b_n-b|<\varepsilon$
>
> 同理可证得“-“的情况
>
> （2）$\because {b_n}$ 是收敛的，故 $\exist M>0,s.t.|b_n|\leq M,\forall n$
>
> $|a_n b_n -ab|=|a_n b_n -ab_n +ab_n -ab|\leq |b_n||a_n -a|+|a||b_n -b|\leq M|a_n -a|+|a||b_n -b|$
>
> $\forall \varepsilon >0,\because \underset{n\to\infin}{lim}a_n =a,\underset{n\to\infin}{lim}b_n =b$
>
> 则 $\exist N$ ,当 $n>N$ 时, $|a_n -a|<\dfrac{\varepsilon}{2M},|b_n -b|<\dfrac{\varepsilon}{2(1+|a|)}$ (为了下一步凑出 $\varepsilon$)
>
> 则当 $n>N$ 时, $|a_n b_n -ab|\leq M|a_n -a|+|a||b_n -b|<M\dfrac{\varepsilon}{2M} +|a|\dfrac{\varepsilon}{2(1+|a|)}<\varepsilon$
>
> （3）下证 $\underset{n\to\infin}{lim}\dfrac{1}{b_n}=\dfrac{1}{b} (b\not= 0)$
>
> $\because b_n\to b,\therefore |b_n|\to |b|(n\to \infin),\therefore \exist N,ifn>N,|b_N|\geq \dfrac{|b|}{2}$
>
> $|\dfrac{1}{b_n}-\dfrac{1}{b}|=\dfrac{b_n -b}{|b_n||b|}\leq \dfrac{2|b_n -b|}{b^2} (n>N)$
>
> $\forall \varepsilon >0,\because\underset{n\to\infin}{lim}b_n =b$ 故 $\exist N_1=N,$ 当 $n>N_1$ 时, $|b_n -b|<\dfrac {b^2}{2}\varepsilon$ (也是为了凑下一步)
>
> 取 $N=max\{N_0 ,N_1\}$ ,则当 $n>N$ 时, $|\dfrac{1}{b_n}-\dfrac{1}{b}|\leq\dfrac{2|b_n -b|}{|b|^2}<\varepsilon$



### 一些举例

定义：设 $\underset{n\to\infin}{lim}a_n =0$ ,则称 $a_n$ 是无穷小数列（注意这里的无穷小并非 $-\infin$ ）

(1) $a_n\Leftrightarrow |a_n|$ 无穷小

(2)两个无穷小数列相加减是无穷小

(3)设 $\{a_n\}$ 无穷小数列，$\{c_n\}$ 有界，则 $\{a_n c_n\}$ 是无穷小数列

> 证： $\exist M>0,s.t.|c_n|\leq M,\forall n$ 则 $|a_n c_n|\leq M|a_n|,\forall n$
>
> $\forall \varepsilon >0,\underset{n\to\infin}{lim}a_n =0$
>
> $\therefore \exist N$ ,当 $n>N$ 时, $|a_n|<\dfrac {\varepsilon}{M}$
>
> 当 $n>N$ 时, $|a_n c_n -0|<\varepsilon$
>
> 得证



例：证 $\underset{n\to\infin}{lim}\dfrac{n^k}{a^n}=0$ ，其中 $k\in N,a>1$

> (1) $k=1$ 时，即证 $\underset{n\to\infin}{lim}\dfrac{n}{a^n}$
>
> 设 $a=1+\eta ,\eta >0,a_n =(1+\eta)^n >\dfrac{n(n-1)}{2}\eta ^2$  $\forall n$
>
> > 这里是二项式定理的推论 $(1+\eta)^n =1+n\eta +\dfrac{n(n-1)}{2}\eta ^2\cdots \dfrac{n(n-1)(n-2)\cdots (n-k+1)}{k!}a^{n-k}b^k <\dfrac{n(n-1)}{2}\eta ^2$
>
> $|\dfrac{n}{a^n}-0|=\dfrac{n}{a^n}<\dfrac{2}{(n-1)\eta ^2}$
>
> $\because \underset{n\to\infin}{lim} \dfrac{2}{(n-1)\eta ^2} =0,\forall \varepsilon >0,\exist N$ 当 $n>N$ 时$\dfrac{2}{(n-1)\eta ^2}<\varepsilon$
>
> 故当 $n>N$ 时， $|\dfrac{n}{a^n} -0|<\varepsilon$
>
> (2) $k\geq 2$ 时，$a^{\frac{1}{k}>1}$ 根据前面的证明得 $\underset{n\to\infin}{lim}\dfrac{n}{(a^{1/k)^n} }$ $=0$
>
> 由“保号性”（2）可证$\underset{n\to\infin}{lim}\dfrac{n^k}{a^n}=0$ 



例2：$\lim\limits_{n\to\infin}\sqrt{n}(\sqrt{n-1}-\sqrt{n})$

$=\lim\limits_{n\to\infin}\dfrac{\sqrt{n}}{\sqrt{n+1}+\sqrt{n}}$

同除之后就>可以处理了

---



## 2.3 数列极限判定方法

1. $\varepsilon$-N
2. 四则运算
3. **夹逼定理**
4. **单调有界收敛定理**

本节来说说也是后面两个

### 夹逼定理（两边夹定理）

假定 $a_n\leq b_n\leq c_n (n\in\N)$ ,如果 $\lim\limits_{n\to\infin}a_n =\lim\limits_{n\to\infin}c_n =a$ ,则 $b_n$ 收敛且 $\lim\limits_{n\to\infin}b_n =a$

> 证明： $\forall \varepsilon >0,\because \lim\limits_{n\to\infin}a_n =0,\lim\limits_{n\to\infin}c_n =a$
>
> 故 $\exist N_1$ 当 $n>N_1$ 时, $a_n>a-\varepsilon$
>
> $\exist N_2$ ,当 $n>N_2$ 时, $c_n <a+\varepsilon$
>
> 取· $N=max\{N_1,N_2\}$ ,当 $n>N$ 时 $a-\varepsilon <b_n <a+\varepsilon$
>
> 故 $\lim\limits_{n\to\infin}b_n =a$

例:设 $a>0$ ,证 $\lim\limits_{n\to\infin}\sqrt[n]{a}=1$

> (1)设 $a>1$ , $1\leq \sqrt[n]{a} \leq \sqrt[n]{n}(n>[a]+1)$
>
> > $a_n=n^{1/n}$ 取自然对数: $\ln{a_n}=\dfrac{\ln n}{n}$
> >
> > $n\to\infin$ 时,洛必达法则  $\ln{a_n}=\dfrac{\ln n}{n} =\lim\limits_{n\to\infin}\dfrac{1/n}{1}=0$
>
> 由夹逼定理可得  $\lim\limits_{n\to\infin}\sqrt[n]{a}=1$
>
> (2) $0<a<1$ 时, $\lim\limits_{n\to\infin}a^{1/n}=\dfrac{1}{\lim\limits_{n\to\infin}(1/a)^{1/n}}=1$



例：利用夹逼定理求数列极限

设 $a_n = \frac{1}{\sqrt{n^2 + 1}} + \frac{1}{\sqrt{n^2 + 2}} + \dots + \frac{1}{\sqrt{n^2 + n}}$，求  $\lim_{n \to \infty} a_n$ 。

{夹逼不等式构造}

对任意正整数  $n$ ，由于 $\frac{1}{\sqrt{n^2 + n}} \leq \frac{1}{\sqrt{n^2 + k}} \leq \frac{1}{\sqrt{n^2 + 1}} ( k = 1,2,\dots,n)$，对这 $ n $ 项求和得：
$\frac{n}{\sqrt{n^2 + n}} \leq a_n \leq \frac{n}{\sqrt{n^2 + 1}}$

{两边极限计算}
- 左侧极限：
$\lim_{n \to \infty} \frac{n}{\sqrt{n^2 + n}} = \lim_{n \to \infty} \frac{1}{\sqrt{1 + \frac{1}{n}}} = 1$
- 右侧极限：
$\lim_{n \to \infty} \frac{n}{\sqrt{n^2 + 1}} = \lim_{n \to \infty} \frac{1}{\sqrt{1 + \frac{1}{n^2}}} = 1$

由夹逼定理，得  $\lim_{n \to \infty} a_n = 1$。



### 单调数列的极限判定定理

1.若数列 $\{a_n\}$ 满足 $a_1 \leq a_2 \leq \dots \leq a_n \leq a_{n+1} \leq \dots$ ，则称  $\{a_n\}$ 为单增数列。

2.定理：
设 $\{a_n\}$是单增数列，且有上界，则 $\{a_n\}$ 收敛。

> 证明（确界原理）
> 记$a = \sup\limits_{n\geq 1} a_n \in \mathbb{R}$（确界原理：非空有上界数集必有上确界）。
> 要证 $\lim_{n \to \infty} a_n = a$，对任意  $\varepsilon > 0$ ：
>      $a - \varepsilon$ 不是 $\{a_n\}$ 的上界，故存在 $N$，使得  $a_N > a - \varepsilon$ 。
>      $n > N$ 时，由数列单增性，$a_n \geq a_N > a - \varepsilon$；
>     由上确界定义，$a_n \leq a < a + \varepsilon$ 。
>
> 因此  $|a_n - a| < \varepsilon$ ，即  $\lim_{n \to \infty} a_n = a$ 。



 例：设 $a > 0$ ，数列定义为 $x_1 = \sqrt{a}$ ，$x_2 = \sqrt{a + x_1}$，…，$x_n = \sqrt{a + x_{n-1}}$ ,求 $\lim\limits_{n\to\infin} x_n$

> (1)证明 $\{x_n\}$ 是单增数列
>
> $x_2 = \sqrt{a + \sqrt{a}} > \sqrt{a} = x_1$，故 $x_2 > x_1$。
>
> 假设 $x_n > x_{n-1}$，则：$x_{n+1} = \sqrt{a + x_n} > \sqrt{a + x_{n-1}} = x_n$ 
>
> (2)证明 $\{x_n\}$ 有上界
>
> $x_n^2 = a + x_{n-1} \le a + x_n \implies x_n \le \frac{a}{x_n} + 1$  
>
> ∴$\{x_n\}$ 有上界  
>
> (3)由单调有界定理$\{x_n\}$ 收敛，记$\lim_{n\to\infty} x_n = x$  
>
> $x_n^2 = a + x_{n-1} \implies x^2 = a + x \implies x^2 - x - a = 0$  
>
> 解得  $x = \frac{1 \pm \sqrt{1+4a}}{2}$  
> $x = \frac{1 - \sqrt{1+4a}}{2} < 0$ 不合题意，故 $\lim_{n\to\infty} x_n = \frac{1 + \sqrt{1+4a}}{2}$  



例：证$\lim_{n\to\infty} \frac{q^n}{n!} = 0 \ (q \in \mathbb{R})$  

> 取$x_n = \frac{|q|^n}{n!}$ 
>
>  (1) 证单调：  
> $\frac{x_{n+1}}{x_n} = \frac{|q|}{n+1}$  
> 当$n > |q| - 1$ 时，$\frac{|q|}{n+1} < 1$，故$\{x_n\}$ 从某项起递减  
>
> (2)$x_n \ge 0$，由单调有界定理知$\lim_{n\to\infty} x_n = x$  
>
> (3)$x_{n+1} = x_n \cdot \frac{|q|}{n+1}$，两边取极限：  
> $x = x \cdot 0 \implies x = 0$  
> ∴$\lim_{n\to\infty} \frac{q^n}{n!} = 0$  



### 单调有界收敛定理

单调增（减）且有上（下）界的数列一定收敛



题目：计算 $lim_{n→∞}(1 + 2/n)^n$  （$(1+1/n)^n \to e$ ）

> 求极限：$\lim_{n \to \infty} \left(1 + \frac{2}{n}\right)^n$ 
> $\lim_{n \to \infty} \left(1 + \frac{2}{n}\right)^n = \lim_{n \to \infty} \left( \frac{n + 2}{n} \right)^n = \lim_{n \to \infty} \left( \frac{n + 2}{n + 1} \right)^n \cdot \left( \frac{n + 1}{n} \right)^n = \lim_{n \to \infty} \left(1 + \frac{1}{n + 1}\right)^{n+1} \cdot \left(1 + \frac{1}{n + 1}\right)^{-1} \cdot \left(1 + \frac{1}{n}\right)^n = e^2$
>
> 类似地凑格式，由数学归纳法，对任意常数 $k$，有 $\lim_{n \to \infty} \left(1 + \frac{k}{n}\right)^n = e^k$



### Cauchy列(基本列)

$$
\begin{aligned}
&\forall \varepsilon > 0, \exists N \in \mathbb{N}, \text{当 } n, m > N \text{ 时，有 } |a_n - a_m| < \varepsilon; \\
&\text{等价表述：} \forall \varepsilon > 0, \exists N, \text{当 } n > N \text{ 时，对 } \forall p \in \mathbb{N} \text{，有 } |a_{n+p} - a_n| < \varepsilon.
\end{aligned}
$$

证明 $(-1)^n$ 不是Cauchy数列

$|a_{2n} - a_{2n-2}| = 2, \, \forall n$
对 $\varepsilon = 1$，找不到这样的 $N$，故不是Cauchy列。

#### 柯西收敛原理

数列 $\{a_n\}$ 是Cauchy列 $\iff$ $\{a_n\}$ 收敛。

---





## 2.5 子列

1.定义：设$\{a_n\}$，若$n_1 < n_2 < \dots < n_k < \dots \ (n_k \in \mathbb{N})$，则$a_{n_1}, a_{n_2}, \dots, a_{n_k}, \dots$ 称为$\{a_n\}$ 的子列，记为$\{a_{n_k}\}$  

2.命题：设$\{a_n\}$ 收敛到$a$，则其任何子列也收敛到$a$  

> 证明：对任意的 $\varepsilon > 0$，存在 $N \in \mathbb{N}$，当 $n > N$ 时，有 $|a_n - a| < \varepsilon$
>
> 任取 $\{a_n\}$ 的一个子列 $\{a_{k_n}\}$。令
> $$b_n = a_{k_n}.$$
> 对任意 $n \in \mathbb{N}$，$k_n \geq n$，
>
> 因此，当 $ n > N $ 时，有 $k_n \geq n > N$。从而
> $$|b_n - a| = |a_{k_n} - a| < \varepsilon.$$
> 这正表明 $\{b_n\}$ 收敛于 $a$。

---

