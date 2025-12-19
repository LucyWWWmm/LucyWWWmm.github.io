---
title: Chapter 8 微分
permalink: /analysis/chapter-8/
createTime: 2025/12/08 14:59:07 
---

## 4.1 函数的微分

$\Delta y=f(x_0+\Delta x)-f(x_0)$ 为 $y=f(x)$ 在 $x_0$ 处的增量
(若 $f(x)$ 在 $x_0$ 可导，则 $\underset{\Delta x\to0}{\lim}\dfrac{\Delta y}{\Delta x}=f'(x_0)$

**定义**：设 $f(x)$ 在 $x_0$ 附近有定义，若 $\exists \lambda\in\mathbb{R}$，使得 $f(x_0+\Delta x)-f(x_0)=\lambda\Delta x+o(\Delta x)\ (\Delta x\to0)$

则称 $\lambda\Delta x$ 是 $f(x)$ 在 $x_0$ 点关于 $\Delta x$ 的微分（$f(x)$ 在 $x_0$ 可微）

$\lambda\Delta x$ 为线性主要部分，记作 $dy|_{x=x_0}=df(x_0)=\lambda\Delta x$

> 同除上面式子 $\dfrac{f(x_0+\Delta x)-f(x_0)}{\Delta x}=\lambda +o(1)$
>
> 故 $\lambda =\underset{\Delta x\to0}{\lim} \dfrac{f(x_0+\Delta x)-f(x_0)}{\Delta x}=f'(x_0)$
>
> $df(x)=f'(x)\Delta x$ 对 $f(x)$ 有 $dx=(x)'\Delta x=\Delta x$
>
> 故 $df(x)=f'(x)dx$

**定理**：$f(x)$ 在 $x_0$ 可导 $\iff f(x)$ 在 $x_0$ 可微，此时 $dy|_{x=x_0}=f'(x_0)dx$，$f'(x_0)=\dfrac{dy}{dx}\bigg|_{x=x_0}$（微商）

$f(x)$ 在 $(a,b)$ 可导 $\iff f(x)$ 在 $(a,b)$ 可微，且 $df(x)=f'(x)dx=dy$

### 微分运算法则

- $d(f+g)=df+dg$
- $d\left(\dfrac{f}{g}\right)=\dfrac{gdf-fdg}{g^2}$
- $d(cf)=cd(f)$

### 复合函数的微分

设 $y=f(\varphi(t))$（即 $y=f(u),u=\varphi(t)$）：
1. $u$ 为自变量：$df(u)=f'(u)du$
2. $u$ 为中间变量：$dy=df(\varphi(t))=f'(\varphi(t))d\varphi(t)=f'(\varphi(t))\varphi'(t)dt=f'(u)du$

**一阶微分形式的不变性**：无论 $u$ 是自变量还是中间变量，$dy=f'(u)du$ 的形式不变



如果 $f(x)$ 二阶可导，能得到 $d^2 y = d(df(x))= (f''(x)dx)dx=f''(x)(dx)^2=f''(x)dx^2$

$dx=\Delta x$ 当成一个常数。如果还能导，可以得到 $d^n y = f^{(n)}dx^n$



**高阶微分不具有不变性**

$y = f(x)=5x,x=e^t$

$dy = 5e^t dt,d^2 y=5e^tdt^2$

假如还具有不变性，就会得到 $d^2 y$
