---
title: Chapter 11 函数的积分
permalink: /analysis/chapter-11/
createTime: 2025/12/23 21:02:43
---

 从这里开始积分学的学习

## 6.1 定积分

- 求曲边梯形面积

	设 $f(x)$ 在 $[a,b]$ 上有定义且 $f(x)>0$

	将 $[a,b]$ 分成 $n$ 个小区间，区间长度 $\Delta x_i = x_i - x_{i-1}$ ，取 $\xi_i \in [x_{i-1},x_i]$ 

	则面积近似为 $S \approx \sum_{i=1}^n f(\xi_i)\Delta x_i$ ；

	第二步，当分割的模 $\|\Pi\| = \max_{1\leq i\leq n}\{\Delta x_i\} \to 0$ 时

	 $S = \underset{\|\Pi\|\to0}{\lim}\sum_{i=1}^n f(\xi_i)\Delta x_i$ 

- 质点沿直线从 $a$ 到 $b$，水平变力为 $f(x)$，

	则做功 $W = \underset{\|\Pi\|\to0}{\lim}\sum_{i=1}^n f(\xi_i)\Delta x_i$ 

### 定积分的定义（Riemann积分）

设 $f(x)$ 在 $[a,b]$ 上有定义，

对 $[a,b]$ 作分割 $\Pi: a=x_0<x_1<\dots <x_{i-1}<x_{i} <\dots <x_n=b$ ，

取 $\xi_i \in [x_{i-1},x_i]$ ，作积分和 $\sum_{i=1}^n f(\xi_i)\Delta x_i$ 。

若 $I\in \R$ ，对 $\forall \varepsilon>0$ ，$\exists \delta>0$ ，当 $\|\Pi\|<\delta$ 时，无论 $\xi_i$ 如何选取，都有 $\left|I - \sum_{i=1}^n f(\xi_i)\Delta x_i\right| < \varepsilon$ ，

则称 $f(x)$ 在 $[a,b]$ 上**Riemann可积**，称 $I$ 是 $f$ 在 $[a,b]$ 上的Riemann积分

 记 $\int_a^b f(x)dx = \underset{\|\Pi\|\to0}{\lim}\sum_{i=1}^n f(\xi_i)\Delta x_i$ 。

###  定积分的基本性质

1. 若 $f(x)$ 在 $[a,b]$ 可积且 $f(x)\geq0$ ，则 $\int_a^b f(x)dx \geq 0$ 

2. 若 $f,g$ 在 $[a,b]$ 可积且 $f(x)\geq g(x)$ ，则 $\int_a^b f(x)dx \geq \int_a^b g(x)dx$ 

3. 若 $f,g$ 在 $[a,b]$ 可积，则 $\int_a^b [f(x)\pm g(x)]dx = \int_a^b f(x)dx \pm \int_a^b g(x)dx$ 

4. 对常数 $c$，$\int_a^b cf(x)dx = c\int_a^b f(x)dx$ 

	注： $\int_a^b 1dx = \underset{\|\Pi\|\to0}{\lim}\sum_{i=1}^n f(\xi_i)\Delta x_i=\underset{\|\Pi\|\to0}{\lim}\sum_{i=1}^n 1\Delta x_i=b-a$ 

	$\int_a^b cdx=c(b-a)$

问：哪些函数可积？

闭区间上有界且只有有限个间断点的函数可积

闭区间上的单调函数，函数在该区间可积

### Newton-Leibniz公式

>  [!important]
>
>  若 $f(x)$ 在 $[a,b]$ 连续，$f(x)$ 在 $[a,b]$ 可积
>
>  $F(x)$ 在 $[a,b]$ 可导，且 $F'(x)=f(x),\forall x\in (a,b)$ 
>
>  则 $\int_a^b f(x)dx = F(b) - F(a) = F(x)\big|_a^b$ 

证：

将 $[a,b]$ 作 $n$ 等分分割，分点为 $x_i = a + \frac{i(b-a)}{n}$（ $i=0,1,\dots,n$ 

拆分原函数差值： $F(b)-F(a) = \sum_{i=1}^n [F(x_i)-F(x_{i-1})]$ ；

由微分中值定理，对每个 $[x_{i-1},x_i]$ ，存在 $\xi_i \in (x_{i-1},x_i)$ ，使得 $F(x_i)-F(x_{i-1}) = F'(\xi_i)\Delta x = f(\xi_i)\Delta x$ ；

取极限：当 $n\to\infty$（即 $\|\Pi\|\to0$ ）时，积分和 $\sum_{i=1}^n f(\xi_i)\Delta x$ 收敛到定积分，故 $F(b)-F(a) = \int_a^b f(x)dx$ 。

计算示例：

1. $\int_0^1 xdx = \frac{1}{2}x^2\big|_0^1 = \frac{1}{2}$ ；
2. $\int_0^1 x^2dx = \frac{1}{3}x^3\big|_0^1 = \frac{1}{3}$ ；
3. $\int_0^\pi \sin xdx = -\cos x\big|_0^\pi = 2$ 。

> 求 $\lim_{n\to\infty} \left[(1+\frac{1}{n})(1+\frac{2}{n})\dots(1+\frac{n}{n})\right]^{\frac{1}{n}}$ 
>
> 设 $A_n = e^{{\frac{1}{n}}\left[(1+\frac{1}{n})(1+\frac{2}{n})\dots(1+\frac{n}{n})\right]}$ 
>
> 则 $\ln A_n = \frac{1}{n}\sum_{i=1}^n \ln(1+\frac{i}{n})$ 
>
> 当 $n\to\infty$ 时， $\frac{1}{n}\sum_{i=1}^n \ln(1+\frac{i}{n})$ 是函数 $f(x)=\ln(1+x)$ 在 $[0,1]$ 上的积分和，
>
> 即 $\lim_{n\to\infty} \ln A_n = \int_0^1 \ln(1+x)dx$ ；
>
> 分部积分计算定积分：
>
> $\int_0^1 \ln(1+x)dx = x\ln(1+x)\big|_0^1 - \int_0^1 \frac{x}{1+x}dx = \ln2 - \int_0^1 (1 - \frac{1}{1+x})dx$
>
> $= \ln2 - [x - \ln(1+x)]\big|_0^1 = 2\ln2 - 1$ 
>
> $\lim_{n\to\infty} A_n = e^{2\ln2 -1} = \frac{4}{e}$ 。



## 6.2 可积函数的性质

### 定理1：可积必有界

>  若 $f(x)$ 在 $[a,b]$ 可积，则 $f(x)$ 在 $[a,b]$ 上有界

 例:

函数 $f(x)=
\begin{cases}
\dfrac{1}{\sqrt{x}}, & x\in(0,1] \\
1, & x=0
\end{cases}$ 在 $[0,1]$ 上无界，故在 $[0,1]$ 上不可积。

证明过程:

(一)取 $\varepsilon=1$，存在 $\delta=\delta(1)>0$

对 $[a,b]$ 的任意分割 $\Pi: a=x_0<x_1<\dots<x_n=b$，当 $\|\Pi\|<\delta$ 时，

对任意 $\xi_i\in[x_{i-1},x_i]$，有 $\left|\sum_{i=1}^n f(\xi_i)\Delta x_i - I\right|<1$ ,其中 $I=\int_a^b f(x)dx$）

(二)取定一个满足 $\|\Pi\|<\delta$ 的分割，令 $\xi_i=x_i$（$i\geq2$），则 $\left|f(\xi_1)\Delta x_1 + \sum_{i=2}^n f(\xi_i)\Delta x_i - I\right|<1$；

由绝对值不等式得：$\left|f(\xi_1)\Delta x_1\right| \leq 1 + |I| + \left|\sum_{i=2}^n f(\xi_i)\Delta x_i\right|$，进而 $\left|f(\xi_1)\right| \leq \dfrac{1 + |I| + \left|\sum_{i=2}^n f(\xi_i)\Delta x_i\right|}{\Delta x_1}$，即 $f(x)$ 在 $[x_0,x_1]$ 上有界；

同理可证 $f(x)$ 在 $[x_{i-1},x_i]$（$n\geq i\geq2$）上均有界，故 $f(x)$ 在 $[a,b]$ 上有界。

### 定理2：区间可加性
> 设 $c\in(a,b)$ ，则 $f(x)$ 在 $[a,b]$ 可积 $\iff f(x)$ 在 $[a,c]$ 和 $[c,b]$ 都可积
>
> 且 $\int_a^b f(x)dx = \int_a^c f(x)dx + \int_c^b f(x)dx$ 。

**推论** ：若 $f(x)$ 在 $[a,b]$ 可积，$[c,d]\subset[a,b]$ ，则 $f(x)$ 在 $[c,d]$ 可积。

**示例** ：$\int_{-1}^1 |x|dx = \int_{-1}^0 (-x)dx + \int_0^1 xdx = 1$ 。

### 规定

1. 之前定义过，若 $b>a$ ， $\int_a^b f(x)dx$
2. 由可加性， $\int_a^b f(x)dx +\int_b^a f(x)dx=\int_a^a f(x)dx = 0$ ；
3. 若 $a>b$，则 $\int_a^b f(x)dx = -\int_b^a f(x)dx$ 。

### 定理3：非负连续函数的积分性质
> 若 $f(x)$ 在 $[a,b]$ 上连续，非负且不恒等于0，则 $\int_a^b f(x)dx > 0$ 。

**证明思路**：

取 $x_0\in[a,b]$ 使 $f(x_0)>0$，由连续性，存在 $[\alpha,\beta]\subset[a,b]$，使得 $f(x)>\frac{1}{2}f(x_0)$（$\forall x\in[\alpha,\beta]$），

则：

$\int_a^b f(x)dx = \int_a^\alpha f(x)dx + \int_\alpha^\beta f(x)dx + \int_\beta^b f(x)dx \geq \int_\alpha^\beta \frac{1}{2}f(x_0)dx = \frac{1}{2}f(x_0)(\beta-\alpha) > 0$。

### 定理4：绝对值可积性
> 若 $f(x)$ 在 $[a,b]$ 上可积，则 $|f(x)|$ 在 $[a,b]$ 上可积，且 $\left|\int_a^b f(x)dx\right| \leq \int_a^b |f(x)|dx$。

**证明** ：

$|f|$ 的可积性见6.6.由 $-|f(x)| \leq f(x) \leq |f(x)|$（$\forall x\in[a,b]$），$-\int_a^b |f(x)|dx \leq \int_a^b f(x)dx \leq \int_a^b |f(x)|dx$

### 定理5：积分中值定理

> 若 $f(x)$ 在 $[a,b]$ 上连续，$g(x)$ 在 $[a,b]$ 上可积且不变号，则存在 $\xi\in[a,b]$ ，使得：
>
> $\int_a^b f(x)g(x)dx = f(\xi)\int_a^b g(x)dx$ 。

**证明思路** ：

设 $g(x)\geq0$ ，记 $M=\max_{[a,b]}f(x)$，$m=\min_{[a,b]}f(x)$，则 $mg(x)\leq f(x)g(x)\leq Mg(x)$，

积分得 $m\int_a^b g(x)dx \leq \int_a^b f(x)g(x)dx \leq M\int_a^b g(x)dx$ ；

若 $\int_a^b g(x)dx>0$，$m \leq \int_a^b f(x)g(x)dx(\int_a^b g(x)dx)^{-1} \leq M$ 

由连续函数介值定理，存在 $\xi\in[a,b]$ ，使得： $\int_a^b f(x)g(x)dx(\int_a^b g(x)dx)^{-1}=f(\xi)$

> 推论
>
> 若 $f(x)$ 在 $[a,b]$ 上连续，取 $g(x)=1$，则存在 $\xi\in[a,b]$，使得：
> $\int_a^b f(x)dx = f(\xi)(b-a)$

意味着将曲边梯形转化为矩形面积

## 6.3 微积分基本定理

若 $f(x)$ 在 $[a,b]$ 上可积，对任意 $x\in[a,b]$，定义 $F(x) = \int_a^x f(t)dt$ ，

称 $F(x)$ 为 $f(x)$ 的 **变上限函数**

> 定理：若 $f(x)$ 在 $[a,b]$ 上可积，则 $F(x) = \int_a^x f(t)dt$ 在 $[a,b]$ 上连续。

**证明思路**：

因 $f(x)$ 可积故有界，即 $|f(x)|\leq M$（$\forall x\in[a,b]$）。

对任意 $x_0\in[a,b]$，

$|F(x_0+h)-F(x_0)| = \left|\int_{x_0}^{x_0+h} f(t)dt\right| \leq \int_a^b |f(t)|dt \leq M|h|$

令 $h\to0$，得 $\lim_{h\to0}F(x_0+h)=F(x_0)$，故 $F(x)$ 在 $x_0$ 处连续。



> 定理2：若 $f(x)$ 在 $[a,b]$ 上可积，且在 $x_0\in[a,b]$ 处连续，则 $F(x) = \int_a^x f(t)dt$ 在 $x_0$ 处可导，且 $F'(x_0)=f(x_0)$。
> **特殊情形**：若 $f(x)$ 在 $[a,b]$ 上连续，则 $F(x) = \int_a^x f(t)dt$ 在 $[a,b]$ 上可导，且 $F'(x)=f(x)$。

### 定理3：微积分基本定理

若 $f(x)$ 在 $[a,b]$ 连续，则变上限积分 $F(x) = \int_a^x f(t)dt$ 在 $[a,b]$ 可导，

且 $F'(x)=f(x)$ ，即 $\dfrac{d}{dx}\int_a^x f(t)dt = f(x)$ 。

**推论**：区间上的连续函数一定有原函数。

### 变上限积分求导的应用
**例1**：设 $f(x) = \int_{x^2}^{x^3} \sqrt{1+t^4}dt$ ，则 $f'(x) = \sqrt{1+(x^3)^4}\cdot 3x^2 - \sqrt{1+(x^2)^4}\cdot 2x = 3x^2\sqrt{1+x^{12}} - 2x\sqrt{1+x^8}$ 。

**例2**：求 $\underset{x\to0}{\lim}\dfrac{\int_{\cos x}^1 e^{-t^2}dt}{x^2}$ ，由洛必达法则：$ \underset{x\to0}{\lim}\dfrac{-e^{-\cos^2 x}\cdot(-\sin x)}{2x} = \dfrac{1}{2e}$ 。

### 积分不等式证明

1. **Cauchy-Schwarz不等式**：若 $f,g$ 在 $[a,b]$ 连续，则 $\left(\int_a^b f(x)g(x)dx\right)^2 \leq \int_a^b f^2(x)dx \cdot \int_a^b g^2(x)dx$ 。
   **证明思路**：构造 $\lambda(t) = \int_a^b [f(x)+tg(x)]^2dx \geq 0$ ，展开后利用二次函数非负的条件 $\Delta \leq 0$ 得证。

2. **积分估计不等式**：若 $f(a)=0$ ，$f'(x)$ 在 $[a,b]$ 连续，则 $\int_a^b f^2(x)dx \leq \dfrac{1}{2}(b-a)^2\int_a^b [f'(x)]^2dx$ 。