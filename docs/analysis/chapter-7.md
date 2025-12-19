---
title: Chapter 7 L'Hosptial法则
permalink: /analysis/chapter-7/
createTime: 2025/12/08 14:56:43
---

## 3.6 洛必达法则

### 定理部分

设 $\underset{x \to x_0}{\lim}f(x)=l \in \mathbb{R}$ ，$\underset{x \to x_0}{\lim}g(x)=k \in \mathbb{R}$ ，求 $\underset{x \to x_0}{\lim}\frac{f(x)}{g(x)}$ ：

- $k \neq 0$ 时，$\underset{x \to x_0}{\lim}\frac{f(x)}{g(x)}=\frac{l}{k}$
- $k=0$ 时：
  - $l \neq 0$ ，$\underset{x \to x_0}{\lim}\frac{f(x)}{g(x)}=\infty$ （取倒数以后显而易见的）
  - $l=0$ ，为未定式，这一类“ $\dfrac{0}{0}$ 型”有下面的定理

>  **定理**：
>
> (1)设 $f(x),g(x)$ 在 $(a,b)$ 可导，且 $g'(x) \neq 0$（$\forall x \in (a,b)$）
>
> (2) $\underset{x \to a+0}{\lim}f(x)=\underset{x \to a+0}{\lim}g(x)=0$
>
> (3) $\underset{x \to a+0}{\lim}\frac{f'(x)}{g'(x)}$ 存在（有限或 $\infty$）
>
> 则 $\underset{x \to a+0}{\lim}\frac{f(x)}{g(x)}=\underset{x \to a+0}{\lim}\frac{f'(x)}{g'(x)}$

>  证明：
>
> 定义 $f(a)=0$ ，$g(a)=0$ ，则 $f(x),g(x)$ 在 $[a,b]$ 连续，在 $(a,b)$ 可导， $\forall x \in (a,b)$
>
> 由 Cauchy 中值定理，$\exists \xi \in (a,x)$ ，使得 $\dfrac{f(x)}{g(x)}=\dfrac{f(x)-f(a)}{g(x)-g(a)}=\dfrac{f'(\xi)}{g'(\xi)}$
>
> 当 $x \to a+0$ 时，$\xi \to a+0$ ，故 $\underset{x \to a+0}{\lim}\dfrac{f(x)}{g(x)}=\underset{\xi \to a+0}{\lim}\dfrac{f'(\xi)}{g'(\xi)}=\underset{x \to a+0}{\lim}\dfrac{f'(a)}{g'(a)}$


> [!important]
> 使用洛必达法则的时候，要检查定理的三个条件是否被满足
>
> 同时及时提前使用等价无穷小替换，提高效率

例：$\underset{x \to 0}{\lim}\dfrac{x-\sin x}{\sin x^3}=\underset{x \to 0}{\lim}\dfrac{x-\sin x}{x^3}=\underset{x \to 0}{\lim}\dfrac{1-\cos x}{3x^2}=\underset{x \to 0}{\lim}\dfrac{\sin x}{6x}=\dfrac{1}{6}$

---

我们来看另一种情况

>  **定理2:**
>
> (1)设 $f(x),g(x)$ 在 $(a,+\infty)$ 可导，且 $g'(x)\neq0$（$\forall x\in(a,+\infty)$）
>
> (2)  $\underset{x\to+\infty}{\lim}f(x)=\underset{x\to+\infty}{\lim}g(x)=\infty$
>
> (3)  $\underset{x\to+\infty}{\lim}\dfrac{f'(x)}{g'(x)}$ 存在（或为 $\infty$ ）
>
> 则 $\underset{x\to+\infty}{\lim}\dfrac{f(x)}{g(x)}=\underset{x\to+\infty}{\lim}\dfrac{f'(x)}{g'(x)}$



> 证明(利用了上一条)：
> $\underset{x\to+\infty}{\lim}\dfrac{f(x)}{g(x)}\xlongequal{x=\dfrac{1}{t}}\underset{t\to0^+}{\lim}\dfrac{f\left(\dfrac{1}{t}\right)}{g\left(\dfrac{1}{t}\right)}$（$x\to+\infty$时$t\to0^+$）
> $=\underset{t\to0^+}{\lim}\dfrac{f'\left(\dfrac{1}{t}\right)\cdot\left(-\dfrac{1}{t^2}\right)}{g'\left(\dfrac{1}{t}\right)\cdot\left(-\dfrac{1}{t^2}\right)}=\underset{t\to0^+}{\lim}\dfrac{f'\left(\dfrac{1}{t}\right)}{g'\left(\dfrac{1}{t}\right)}=\underset{x\to+\infty}{\lim}\dfrac{f'(x)}{g'(x)}$



例： $\underset{x\to+\infty}{\lim}\dfrac{\dfrac{\pi}{2}-\arctan x}{\dfrac{1}{x}}=\underset{x\to+\infty}{\lim}\dfrac{-\dfrac{1}{1+x^2}}{-\dfrac{1}{x^2}}=\underset{x\to+\infty}{\lim}\dfrac{x^2}{1+x^2}=1$

>  **定理3**
>
> 设 $f(x),g(x)$ 在 $(a,b)$ 可导，且 $g'(x)\neq0$（ $\forall x\in(a,b)$ ）
>
> (1) $\underset{x\to a+0}{\lim}g(x)=\infty$
>
> (2) $\underset{x\to a+0}{\lim}\dfrac{f'(x)}{g'(x)}$ 存在（或为 $\infty$ ）
>
> (3) 则$\underset{x\to a+0}{\lim}\dfrac{f(x)}{g(x)}=\underset{x\to a+0}{\lim}\dfrac{f'(x)}{g'(x)}$（ $x\to a$ 或 $x\to\infty$ 时也成立）

注: **本条定理省去了一个条件** ：  $\underset{x\to+\infty}{lim}f(x)=0$ 

---

### 应用部分

非常需要注意的是以上三个定理都有一个必须满足的条件
$$
\underset{x\to a^+}{\lim}\dfrac{f'(x)}{g'(x)} exists.
$$
如果它不存在，那么不能使用洛必达法则

一个栗子：

$\underset{x\to\infty}{\lim}\frac{x+\sin x}{x} = \underset{x\to\infty}{\lim}\frac{1+\cos x}{1}$（极限不存在），故洛必达法则不适用；
正确解法：$\underset{x\to\infty}{\lim}\left(1+\dfrac{\sin x}{x}\right)=1$

---

无穷大量增长速度比较（$x\to+\infty$）

比较 $\ln x$、$x^\mu(\mu>0)$、$e^x$、$x^x$ 的增长速度：
$\underset{x\to+\infty}{\lim}\dfrac{\ln x}{x^\mu} = \underset{x\to+\infty}{\lim}\dfrac{\dfrac{1}{x}}{\mu x^{\mu-1}} = \dfrac{1}{\mu}\underset{x\to+\infty}{\lim}\dfrac{1}{x^\mu}=0$ ，即 $x^\mu$ 增长快于 $\ln x$

也有一直洛的情况： $\underset{x\to+\infty}{\lim}\dfrac{x^\mu}{e^x}=\mu\underset{x\to+\infty}{\lim}\dfrac{x^{\mu-1}}{e^x}=\mu(\mu -1)\underset{x\to+\infty}{\lim}\dfrac{x^{\mu-2}}{e^x}=\cdots =\mu(\mu -1)\cdots (\mu -n+1)\underset{x\to+\infty}{\lim}\dfrac{x^{\mu-n}}{e^x}=0$

此处 $n-1\leq \mu \leq n$ ,洛了n次 

一点都不洛的：$\underset{x\to+\infty}{\lim}\dfrac{e^x}{x^x}=\underset{x\to+\infty}{\lim}e^{x(1-lnx)}=0$

---

其他形式的类型也可以用适当的变换化作“ $\dfrac{0}{0}$ 型”和“ $\dfrac{\infin}{\infin}$ 型”

>  例:求 $\underset{x\to0^+}{\lim}x^\mu\ln x\ (\mu>0)$
>
> $\underset{x\to0^+}{\lim}x^\mu\ln x = \underset{x\to0^+}{\lim}\dfrac{\ln x}{x^{-\mu}} = \underset{x\to0^+}{\lim}\dfrac{\dfrac{1}{x}}{-\mu x^{-\mu-1}} = -\dfrac{1}{\mu}\underset{x\to0^+}{\lim}x^\mu=0$。
>
> 例：(幂指函数)求 $\underset{x\to0^+}{\lim}(\sin x)^x = \underset{x\to0^+}{\lim}e^{x\ln\sin x}$，其中：
> $\underset{x\to0^+}{\lim}x\ln\sin x = \underset{x\to0^+}{\lim}\dfrac{\ln\sin x}{\dfrac{1}{x}} = \underset{x\to0^+}{\lim}\dfrac{\dfrac{\cos x}{\sin x}}{-\dfrac{1}{x^2}} = \underset{x\to0^+}{\lim}\dfrac{-x^2\cos x}{\sin x}=0$，

