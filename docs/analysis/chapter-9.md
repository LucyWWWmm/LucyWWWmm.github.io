---
title: Chapter 9 Taylor定理
permalink: /analysis/chapter-9/
createTime: 2025/12/08 15:01:43
---

## 4.2 带Peano余项的Taylor定理

设 $f(x)$ 在 $x_0$ 可微，则 $f(x)=f(x_0)+f'(x_0)(x-x_0)+o(x-x_0)\ (x\to x_0)$
$f'(x_0)$ 存在 $\implies f(x)$ 在 $x_0$ 附近存在

---

$f''(x)$ 存在时， $f(x)$ 能不能使得误差是比 $(x-x_0)^2$ 更高阶的无穷小？

若 $f(x)=A+B(x-x_0)+C(x-x_0)^2+o(x-x_0)^2\ (x\to x_0)$
令 $x\to x_0$  $\implies A=\underset{x\to x_0}{\lim}f(x)=f(x_0)$

 $\dfrac{f(x)-f(x_0)}{x-x_0}=B+C(x-x_0)+o(x-x_0)\ (x\to x_0)$

令 $x\to x_0$   $\implies B=f'(x_0)$

要求C需用到L'Hosptial定理：

$C=\underset{x\to x_0}{\lim}\dfrac{f(x)-(f(x_0)+f'(x_0)(x-x_0))}{(x-x_0)^2}=\dfrac{1}{2}\underset{x\to x_0}{\lim}\dfrac{f'(x)-f'(x_0)}{x-x_0}=\dfrac{1}{2}f''(x_0)$

这说明了只有唯一的一个二次多项式能满足需求

**定理：** 设 $f''(x_0)$ 存在，则 $\underset{x\to x_0}{\lim}\dfrac{f(x)-\left[f(x_0)+\dfrac{f'(x_0)}{1!}(x-x_0)+\dfrac{f''(x_0)}{2!}(x-x_0)^2\right]}{(x-x_0)^2}=0$

证：由洛必达法则， $\underset{x\to x_0}{\lim}\dfrac{f'(x)-[f'(x_0)+f''(x_0)(x-x_0)]}{2(x-x_0)}$ ，再由导数定义得 $\dfrac{1}{2}\underset{x\to x_0}{\lim}\dfrac{f'(x)-f'(x_0)}{x-x_0}-\dfrac{f''(x_0)}{2}=\dfrac{1}{2}f''(x_0)-\dfrac{f''(x_0)}{2}=0$

---

**定义：** 设函数 $f$ 在点 $x_0$ 处有直到 $n$ 阶的导数，$n$ 为任意给定的整数，令：
$T_n(f,x_0;x)=f(x_0)+\dfrac{1}{1!}f'(x_0)(x-x_0)+\dfrac{1}{2!}f''(x_0)(x-x_0)^2+\dots+\dfrac{1}{n!}f^{(n)}(x_0)(x-x_0)^n$
称 $T_n(f,x_0;x)$ 为 $f$ 在 $x_0$ 处的 $n$ 次Taylor多项式。

**定理：** 设函数 $f$ 在点 $x_0$ 处有直到 $n$ 阶的导数，则有：
$f(x)=T_n(f,x_0;x)+o((x-x_0)^n)\ (x\to x_0)$

>  证明（数学归纳法）
>
> $T_n'(f,x_0;x)=f'(x_0)+\dfrac{1}{1!}f''(x_0)(x-x_0)+\dfrac{1}{2!}f''(x_0)(x-x_0)^2+\dots+\dfrac{1}{n!}f^{(n-1)}(x_0)(x-x_0)^{n-1}=T_{n-1}(f',x_0 ;x)$ 
>
> $n=1$ 时，式 $f(x)=T_n(f,x_0;x)+o((x-x_0)^n)\ (x\to x_0)$ 成立；
>
> 设 $n=k$ 时式 $f(x)=T_n(f,x_0;x)+o((x-x_0)^n)\ (x\to x_0)$ 成立，
>
> 又 $T'_{k+1}(f,x_0;x)=T_k(f',x_0;x)$ 利用L'Hospital法则和归纳假定，得：
>
> $\underset{x\to x_0}{\lim}\dfrac{f(x)-T_{k+1}(f,x_0;x)}{(x-x_0)^{k+1}}=\dfrac{1}{k+1}\underset{x\to x_0}{\lim}\dfrac{f'(x)-T_k(f',x_0;x)}{(x-x_0)^k}=0$
>
> 故 $n=k+1$ 时 $f(x)=T_n(f,x_0;x)+o((x-x_0)^n)\ (x\to x_0)$ 也成立。

**Peano余项：**

令 $R_n(x)=f(x)-T_n(f,x_0;x)\ (n=1,2,\dots)$，称 $R_n(x)$ 为余项，

且满足： $\underset{x\to x_0}{\lim}\dfrac{R_n(x)}{(x-x_0)^n}=0$

$R_n(x)=o((x-x_0)^n)$ 该余项称为Peano（佩亚诺）余项

---

### Maclaurin展开式

$T_n(f,0;x)=f(0)+\dfrac{1}{1!}f'(0)x+\dfrac{1}{2!}f''(0)x^2+\dots+\dfrac{1}{n!}f^{(n)}(0)x^n$

$f(x)=T_n (f,0;x)+o(x^n)$ 

我们有六个常用的展开式，条件都是 $x\to 0$ 

$e^x = 1 + x + \dfrac{x^2}{2!} + \dfrac{x^3}{3!} + \dots + \dfrac{x^n}{n!} + o(x^n)$

$\sin x = x - \dfrac{x^3}{3!} + \dfrac{x^5}{5!} - \dots + (-1)^{n-1}\dfrac{x^{2n-1}}{(2n-1)!} + o(x^{2n})$

>  $f^{(k)}(x)=\sin\left(x+\dfrac{k\pi}{2}\right)$ ,所以展开式没有偶次项

$\cos x = 1 - \dfrac{x^2}{2!} + \dfrac{x^4}{4!} - \dots + (-1)^n\dfrac{x^{2n}}{(2n)!} + o(x^{2n+1})$

$\ln(1+x) = x - \dfrac{x^2}{2} + \dfrac{x^3}{3} - \dots + (-1)^{n-1}\dfrac{x^n}{n} + o(x^n)$

$(1+x)^\lambda = 1 + \lambda x + \dfrac{\lambda(\lambda-1)}{2!}x^2 + \dots + \dfrac{\lambda(\lambda-1)\dots(\lambda-n+1)}{n!}x^n + o(x^n)$
**符号约定**：二项式系数 $ \binom{\lambda}{k} = \dfrac{\lambda(\lambda-1)\dots(\lambda-k+1)}{k!} $，$ \binom{\lambda}{0}=1 $，展开式也可写为：
$ (1+x)^\lambda = \sum_{k=0}^n \binom{\lambda}{k}x^k + o(x^n) $

$ \arctan x = x - \dfrac{x^3}{3} + \dfrac{x^5}{5} - \dots + (-1)^n\dfrac{x^{2n+1}}{2n+1} + o(x^{2n+2}) $
**推导关键**：
1. 由 $f'(x)=\dfrac{1}{1+x^2}$，得恒等式 $ (1+x^2)f'(x)=1 $；
2. 两边对 $x$ 求 $n$ 阶导数（Leibniz公式）：$ (1+x^2)f^{(n+1)}(x)+2nxf^{(n)}(x)+n(n-1)f^{(n-1)}(x)=0 $；
3. 代入 $x=0$ 得递推式 $ f^{(n+1)}(0)=-(n-1)nf^{(n-1)}(0) $，结合 $f(0)=0,f'(0)=1$，得：
   $ f^{(n)}(0)= \begin{cases} 0, & n为偶数 \\ (-1)^k(2k)!, & n=2k+1 \end{cases} $；
4. 代入Taylor公式化简得到展开式。

