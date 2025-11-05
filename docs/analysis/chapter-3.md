---
title: Chapter 3 函数极限
permalink: /analysis/chapter-3/
createTime: 2025/10/27 22:24:43
---

# 2.4 函数极限

设 $f: D \subset \mathbb{R} \to \mathbb{R}$，$x_0 \in D$，当 $x \to x_0$ 时，$f(x) \to A$。

### 定义1：函数极限

设 $f(x)$ 在 $x_0$ 某去心邻域有定义，$A \in \mathbb{R}$。若对任意给定的 $\varepsilon > 0$，$\exists \delta > 0$，使得当 $0 < |x - x_0| < \delta$ 时，有 $|f(x) - A| < \varepsilon$，

则称当 $x \to x_0$ 时，$f(x)$ 的极限是 $A$，记作 $\lim_{x \to x_0} f(x) = A$ 或 $f(x) \to A \ (x \to x_0)$。

> (1)与 $f(x)$ 在 $x = x_0$ 没有关系；  
> (2) $\delta = \delta(\varepsilon)$；  
> (3)   $\lim_{x \to x_0} f(x)$ 的极限只与 $f(x)$ 在 $x = x_0$ 附近的点有关。

​    

思考：设 $\lim_{x \to x_0} f(x) = A$ 存在，则 $\forall \varepsilon > 0$，$\exists \delta$，使得 $\{ x \mid |f(x) - A| < \varepsilon \}$。

$f(x) \to A \ (x \to x_0) \iff \exists \varepsilon > 0$， $\forall \delta > 0$ ， $\exists x_\delta$  满足 $0 < |x_\delta - x_0| < \delta$，且 $|f(x_\delta) - A| \geq \varepsilon$。

​    

证明 $\lim_{x \to 0} x \sin\frac{1}{x} = 0$：

>  对 $x \neq 0$，有 $\left| x \sin\frac{1}{x} \right| \leq |x|$。
>
> 对 $\forall \varepsilon > 0$，取 $\delta = \varepsilon$，则当 $|x - 0| < \delta$ 时，$\left| x \sin\frac{1}{x} - 0 \right| \leq |x - 0| < \varepsilon$，故 $\lim_{x \to 0} x \sin\frac{1}{x} = 0$。

​    

例：用“$\varepsilon - \delta$”证  $\lim_{x \to 1} \frac{x^2 - 1}{x^2 - x} = 2$。

> 化简：$\frac{x^2 - 1}{x^2 - x} = \frac{x + 1}{x} \ (x \neq 1)$。
>
> 计算绝对值：$\left| \frac{x^2 - 1}{x^2 - x} - 2 \right| = \frac{|x - 1|}{|x|} \ (x \neq 1)$。
>
> 限制范围：在  $0 < |x - 1| < \frac{1}{2}$ 时，$x \geq \frac{1}{2}$，故 $\frac{|x - 1|}{|x|} \leq 2|x - 1|$。
>
> 对 $\forall \varepsilon > 0$，取 $\delta = \min\left\{ \frac{\varepsilon}{2}, \frac{1}{2} \right\}$，则当 $0 < |x - 1| < \delta$ 时，$\left| \frac{x^2 - 1}{x^2 - x} - 2 \right| < \varepsilon$。

​    

例：$\lim_{x \to 3} (x^2 - 4x + 4) = 1$。

>  证：将 $x^2 - 4x + 4$ 凑 $(x - 3)$：$x^2 - 4x + 4 = (x - 3)^2 + 2(x - 3) + 1$。
>
> 计算绝对值：$|x^2 - 4x + 4 - 1| = |(x - 3)^2 + 2(x - 3)| = |x - 3| \cdot |(x - 3) + 2|$。
>
> 限制范围：当 $0 < |x - 3| \leq 1$ 时，$|x - 3| \cdot |(x - 3) + 2| \leq 3|x - 3|$。
>
> 对 $\forall \varepsilon > 0$，取 $\delta = \min\left\{ \frac{\varepsilon}{3}, 1 \right\}$，则当 $0 < |x - 3| < \delta$ 时，有 $|(x^2 - 4x + 4) - 1| < \varepsilon$。

> 一个结论：设 $P(x)$ 是多项式，$x_0 \in \mathbb{R}$，则 $\lim_{x \to x_0} P(x) = P(x_0)$。

​    

例：符号函数 $\text{sgn}x = \begin{cases} 1, & x > 0 \\ 0, & x = 0 \\ -1, & x < 0 \end{cases}$，用 $\varepsilon - \delta$ 证明当 $x \to 0$ 时极限不存在。

>  证：（反证法）：假设 $\lim_{x \to 0} \text{sgn}x$ 存在且等于 $A$。
>
> 对 $\varepsilon = \frac{1}{2}$，则 $\exists \delta = \delta(\varepsilon) > 0$，当 $0 < |x - 0| < \delta$ 时，有 $|\text{sgn}x - A| < \frac{1}{2}$。
>
> 特取 $0 < x_1 < \delta$（此时 $\text{sgn}x_1 = 1$）和 $-\delta < x_2 < 0$（此时 $\text{sgn}x_2 = -1$），则：  
> $-\frac{1}{2} + A < 1 < \frac{1}{2} + A$，  
> $-\frac{1}{2} + A < -1 < \frac{1}{2} + A$。
>
> 由 $|1 - (-1)| \leq |1 - A| + |A - (-1)| < 1$，但 $|1 - (-1)| = 2$，矛盾，故极限不存在。

​    

例：证明 $\lim_{x \to 0} \sin\frac{1}{x}$ 不存在。

>  证:（反证法）：假设 $\lim_{x \to 0} \sin\frac{1}{x} = A$。
>
> 对 $\varepsilon = \frac{1}{4}$，则 $\exists \delta = \delta(\varepsilon) > 0$，当 $0 < |x - 0| < \delta$ 时，$|sin\frac{1}{x} -A|<\frac{1}{4}$

​      

### 定理1：海涅定理

$\lim_{x \to x_0} f(x) = A \iff \forall$ 满足$x_n \to x_0$ 且$x_n \neq x_0 \ (\forall n)$ 的数列 $\{x_n\}$，有 $f(x_n) \to A \ (n \to \infty)$。

>  证明（必要性，即 $\lim_{x \to x_0} f(x) = A \implies \forall \{x_n\}, f(x_n) \to A$ ）}：  
>
>  已知  $\lim_{x \to x_0} f(x) = A$，对  $\forall \{x_n\}$ 满足  $x_n \to x_0 \ (n \to \infty)$ 且 $x_n \neq x_0 \ (\forall n)$，下证$f(x_n) \to A \ (n \to \infty)$。
>
>  由函数极限的 $\varepsilon-\delta$ 定义：  
>  对$\forall \varepsilon > 0$，$\exists \delta = \delta(\varepsilon) > 0$，当 $0< |x - x_0| < \delta$ 时，有  $|f(x) - A| < \varepsilon$。
>
>  又由数列极限的定义：  
>  对上述 $\delta > 0$， $\exists N \in \mathbb{N}^+$，当 $n > N$ 时，有 $0 < |x_n - x_0| < \delta$ 。
>
>  因此，当 $n > N$ 时，$0 < |x_n - x_0| < \delta$，结合函数极限的条件可得：  
>  $|f(x_n) - A| < \varepsilon$。
>
>  故$\lim_{n \to \infty} f(x_n) = A$。
>
>  
>
>  (充分性，反证法)
>
>  不然 $\lim_{x \to x_0} f(x) \neq A$，即 $\exists \varepsilon_0 > 0$，$\forall \delta > 0$，$\exists x_\delta$ 满足 $0 < |x_\delta - x_0| < \delta$ 且 $|f(x_\delta) - A| \geq \varepsilon_0$。
>
>  
>
>  取 $\delta = 1$，$\exists x_1$ 满足 $0 < |x_1 - x_0| < 1$；
>
>  取 $\delta = \frac{1}{2}$，$\exists x_2$ 满足 $0 < |x_2 - x_0| < \frac{1}{2}$；
>
>  $\dots$
>
>  取 $\delta = \frac{1}{n}$，$\exists x_n$ 满足 $0 < |x_n - x_0| < \frac{1}{n}$；
>
>  则数列 $\{ x_n \}$ 满足 $x_n \to x_0$ 但  $f(x_n) \not\to A$，矛盾。

   

例：证明当 $x \to 0$ 时 $\text{sgn}x$ 不存在。

>  证：取 $x_n = \frac{1}{n} \to 0 \ (n \to \infty)$，$y_n = -\frac{1}{n} \to 0 \ (n \to \infty)$，则  $\text{sgn}x_n \to 1$， $\text{sgn}y_n \to -1$。
>
>  由海涅定理，$\lim_{x \to 0} \text{sgn}x$ 不存在。

​    

例：证明 $\lim_{x \to 0} \sin\frac{1}{x}$ 不存在。

>  证：取 $x_n = \frac{1}{2n\pi + \frac{\pi}{2}} \to 0 \ (n \to \infty)$，则 $\sin\frac{1}{x_n} \to$；
>
>  取 $y_n = \frac{1}{2n\pi - \frac{\pi}{2}} \to 0 \ (n \to \infty)$，则 $\sin\frac{1}{y_n} \to -1$。
>
>  由海涅定理，$\lim_{x \to 0} \sin\frac{1}{x}$ 不存在。

​    

例：狄利克雷函数 $D(x) = \begin{cases} 1, & x \in \mathbb{Q} \\ 0, & x \in \mathbb{R} \setminus \mathbb{Q} \end{cases}$，证 $\lim_{x \to x_0} D(x)$ 不存在。

>  证：取 $\{ x_n \} \subset (x_0 - \frac{1}{n}, x_0 + \frac{1}{n}) \cap \mathbb{Q}$，则 $x_n \to x_0$ 且 $x_n \neq x_0$，故 $D(x_n) \to 1$；
>
>  取 $\{ y_n \} \subset (x_0 - \frac{1}{n}, x_0 + \frac{1}{n}) \cap (\mathbb{R} \setminus \mathbb{Q})$，则 $y_n \to x_0$ 且 $y_n \neq x_0$，故 $D(y_n) \to 0$。
>
>  由海涅定理，$\lim_{x \to x_0} D(x)$ 不存在。

​    

### 定理2：设  $\lim_{x \to x_0} f(x)$ 存在，则它的极限唯一。

>  证（反证法）：假设 $\lim_{x \to x_0} f(x) = l_1$ 且 $\lim_{x \to x_0} f(x) = l_2$，$l_1 \neq l_2$。
>
>  取 $\varepsilon = \frac{|l_1 - l_2|}{2} > 0$，由极限定义：
>
>  $\exists \delta_1 > 0$，当 $0 < |x - x_0| < \delta_1$ 时，$|f(x) - l_1| < \varepsilon$；
>
>  $\exists \delta_2 > 0$，当 $0 < |x - x_0| < \delta_2$ 时，$|f(x) - l_2| < \varepsilon$。
>
>  取 $\delta = \min\{ \delta_1, \delta_2 \}$，则当 $0 < |x - x_0| < \delta$ 时：
>
>  $|l_1 - l_2| \leq |f(x) - l_1| + |f(x) - l_2| < 2\varepsilon = |l_1 - l_2|$，矛盾，故极限唯一。

​    

### 定理3：设 $\lim_{x \to x_0} f(x)$ 存在，则 $f(x)$ 在 $x_0$ 某去心邻域有界。

>  证：设 $\lim_{x \to x_0} f(x) = l$，取 $\varepsilon = 1$，则 $\exists \delta > 0$，当 $0 < |x - x_0| < \delta$ 时，$|f(x) - l| < 1$。
>
>  由三角不等式，$|f(x)| \leq |f(x) - l| + |l| < 1 + |l|$，即 $f(x)$ 在 $B^\circ(x_0, \delta)$ 内有界（记 $M = 1 + |l|$）。

   

### 定理4：四则运算

设 $\lim_{x \to x_0} f(x) = l_1$，$\lim_{x \to x_0} g(x) = l_2$，则：

  $\lim_{x \to x_0} [f(x) \pm g(x)] = l_1 \pm l_2$；

  $\lim_{x \to x_0} f(x)g(x) = l_1 l_2$；
​        

若 $l_2 \neq 0$，则 $\lim_{x \to x_0} \frac{f(x)}{g(x)} = \frac{l_1}{l_2}$。

>  证（例：商的极限）：对 $\forall x_n \to x_0$ 且 $x_n \neq x_0 \ (\forall n)$，
>
>  由海涅定理，$f(x_n) \to l_1$，$g(x_n) \to l_2$，故 $\frac{f(x_n)}{g(x_n)} \to \frac{l_1}{l_2}$，即 $\lim_{x \to x_0} \frac{f(x)}{g(x)} = \frac{l_1}{l_2}$。

  例：$\lim_{x \to 1} \frac{1}{x^4 + x + 1} = \lim_{x \to 1} (x^4 + x + 1)^{-1} = \frac{1}{1 + 1 + 1} = \frac{1}{3}$。

   

### 定理5：夹逼定理

设 $f(x), g(x), h(x)$ 在 $x_0$ 某去心邻域有定义，且 $f(x) \leq h(x) \leq g(x)$，若 $\lim_{x \to x_0} f(x) = \lim_{x \to x_0} g(x) = l$，则 $\lim_{x \to x_0} h(x) = l$

> 证：对 $\forall \varepsilon > 0$，
>
> 由 $\lim_{x \to x_0} f(x) = l$，$\exists \delta_1 > 0$，当 $0 < |x - x_0| < \delta_1$ 时，$f(x) > l - \varepsilon$；
>
> 由 $\lim_{x \to x_0} g(x) = l$，$\exists \delta_2 > 0$，当 $0 < |x - x_0| < \delta_2$ 时，$g(x) < l + \varepsilon$。
>
> 取 $\delta = \min\{ \delta_1, \delta_2 \}$，则当 $0 < |x - x_0| < \delta$ 时，
>
> $l - \varepsilon < f(x) \leq h(x) \leq g(x) < l + \varepsilon$，故 $\lim_{x \to x_0} h(x) = l$。

  

### 定理6：保号性
(1) $f(x) \leq g(x)$，$\forall x \in B(x_0, r)$（$r > 0$）

(2) $\lim_{x \to x_0} f(x) = A$，$\lim_{x \to x_0} g(x) = B$ 都存在，则 $A \leq B$

> 证法一：取 $x_n = x_0 - \frac{1}{n}$（$n \geq N_0(r)$），$x_n \to x_0$ ，（为了使 $x_n \rightarrow x_0$ ，且 $x_n$ 落在去心邻域内。）  
> 则 $f(x_n) \leq g(x_n)$，$\forall n \geq N_0$。  
> 由海涅定理，得 $A \leq B$。  
>
> 证法二（反证法）：设 $A > B$，取 $\varepsilon = \frac{A - B}{2}$。  
> 取 $\delta_1 > 0$，当 $0 < |x - x_0| < \delta_1$ 时，$A + \varepsilon > f(x) > A - \varepsilon = \frac{A + B}{2}$  ①  
> 取 $\delta_2 > 0$，当 $0 < |x - x_0| < \delta_2$ 时，$B + \varepsilon > g(x) > B - \varepsilon = \frac{A + B}{2}$  ②  
> 取 $\delta = \min\{\delta_1, \delta_2\} > 0$，则当 $0 < |x - x_0| < \delta$ 时，①②成立，得 $f(x) > g(x)$，矛盾。

推论：若 $\lim_{x \to x_0} f(x) = A > 0$，则存在 $x \in B(x_0, \delta)$，使得 $f(x) > 0$。

  

### 定理7：柯西收敛原理
$\lim_{x \to x_0} f(x)$ 存在 $\iff \forall \varepsilon > 0$，$\exists \delta = \delta(\varepsilon)$，当 $x_1, x_2$ 满足 $x_1, x_2 \in B(x_0, \delta)$ 时，有 $|f(x_1) - f(x_2)| < \varepsilon$。

> 证 $\implies$：设 $\lim_{x \to x_0} f(x) = L$，$\forall \varepsilon > 0$，由 $\lim_{x \to x_0} f(x) = L$，$\exists \delta = \delta(\varepsilon) > 0$，当 $0 < |x - x_0| < \delta$ 时，$|f(x) - L| < \frac{\varepsilon}{2}$  
> 对 $\forall x_1, x_2 \in B(x_0, \delta)$，有 $|f(x_1) - f(x_2)| \leq |f(x_1) - L| + |f(x_2) - L| < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon$。
>
> 证 $\impliedby$：  
> ① 对 $\forall x_n \to x_0$，$x_n \neq x_0$（$\forall n$），先证 $\{f(x_n)\}$ 收敛，即证 $\{f(x_n)\}$ 是柯西列。  
> $\forall \varepsilon > 0$，$\exists \delta = \delta(\varepsilon) > 0$，当 $x_1, x_2 \in B(x_0, \delta)$ 时，有 $|f(x_1) - f(x_2)| < \varepsilon$。   
> 取 $N(\varepsilon) = N(\delta)$，当 $n > N$ 时，$x_n \in B(x_0, \delta)$。  
> 验证：当 $n, m > N$ 时，$|f(x_n) - f(x_m)| < \varepsilon$，故 $\{f(x_n)\}$ 是柯西列。

  

### 定理8:复合函数极限

设 $\lim_{x \to x_0} f(x) = l$，$\lim_{t \to t_0} g(t) = x_0$，且在 $t_0$ 的某去心邻域 $B(\dot{t_0}, \eta)$ 内有 $g(t) \neq x_0$，则 $\lim_{t \to t_0} f(g(t)) = l$。

注：$y = f(x)$，$x = g(t)$，$y = f(g(t))$ 为复合函数，$x$ 为中间变量。

> 证（用海涅定理）：只需证 $\forall$ 满足 $t_n \to t_0 \ (n \to \infty)$ 且 $t_n \neq t_0 \ (\forall n)$ 的数列 $\{ t_n \}$，有 $f(g(t_n)) \to l \ (n \to \infty)$。
>
> 由 $\lim_{t \to t_0} g(t) = x_0$，对数列 $\{ t_n \}$，有 $g(t_n) \to x_0 \ (n \to \infty)$，且因 $t_n \neq t_0$，故 $g(t_n) \neq x_0 \ (\forall n)$。
>
> 又由 $\lim_{x \to x_0} f(x) = l$，对数列 $\{ g(t_n) \}$（满足 $g(t_n) \to x_0$ 且 $g(t_n) \neq x_0 \ (\forall n)$），有 $f(g(t_n)) \to l \ (n \to \infty)$。
>
> 由海涅定理，$\lim_{t \to t_0} f(g(t)) = l$。

  

**例6** :证明 $\lim_{x \to 0} \frac{\sin x}{x} = 1$

> $\lim_{x \to x_0} \sin x = \sin x_0$  
> $|\sin x - \sin x_0| \leq |x - x_0|$  
> $|\sin x| \leq |x|$，$\forall x \in \mathbb{R}$
>
> (1) 先证不等式 $\sin x < x < \tan x$，$\forall 0 < x < \frac{\pi}{2}$  
> $S_{\triangle OAB} < S_{\text{扇} OAB} < S_{\triangle OAC}$
>
> (2) $\cos x < \frac{\sin x}{x} < 1$，$\forall x \in (0, \frac{\pi}{2})$  
> 偶函数，$\forall x \in (-\frac{\pi}{2}, \frac{\pi}{2}) \setminus \{0\}$  
> $0 \leq \left| \frac{\sin x}{x} - 1 \right| < 1 - \cos x = 2\sin^2 \frac{x}{2} \leq \frac{x^2}{2}$  
> 由夹逼定理可得

**例** $\lim_{x \to 0} \dfrac{1 - \cos x}{x^2} = \lim_{x \to 0} \dfrac{2\sin^2 \frac{x}{2}}{x^2} = \lim_{x \to 0} \dfrac{1}{2} \cdot \dfrac{\sin^2 \frac{x}{2}}{(\frac{x}{2})^2} = \frac{1}{2} \lim_{x \to 0} \left( \dfrac{\sin \frac{x}{2}}{\frac{x}{2}} \right)^2 = \frac{1}{2} \cdot 1^2 = \frac{1}{2}$

  

### 定义2:单侧极限

设 $f(x)$ 在 $(x_0, x_0 + r) (r > 0)$ 有定义  
若 $\forall \varepsilon > 0, \exists \delta = \delta(\varepsilon) > 0 (\delta < r)$，当 $x_0 < x < x_0 + \delta$ 时，有 $|f(x) - l| < \varepsilon$

当 $x \to x_0^+$ 时，$f(x)$ 有极限 $l$，记 $\lim_{x \to x_0} f(x) = l$，$l = f(x_0 + 0)$（单侧右极限）  
记为 $\lim_{x \to x_0 + 0} f(x) = l$

当 $x \to x_0^-$ 时，$f(x)$ 有极限 $l$，记 $\lim_{x \to x_0} f(x) = l$，$l = f(x_0 - 0)$（单侧左极限）  
记为 $\lim_{x \to x_0 - 0} f(x) = l$

定理 $\lim_{x \to x_0} f(x) = l \iff f(x_0 - 0)$ 与 $f(x_0 + 0)$ 都存在且等于 $l$

> **证 $\implies$** $\forall \varepsilon > 0, \exists \delta > 0$，当 $0 < |x - x_0| < \delta$ 时，$|f(x) - l| < \varepsilon$  
> $\therefore$ 当 $x_0 < x < x_0 + \delta$ 时，$|f(x) - l| < \varepsilon$，故 $f(x_0 + 0) = l$  
> 当 $x_0 - \delta < x < x_0$ 时，$|f(x) - l| < \varepsilon$，故 $f(x_0 - 0) = l$
>
> $\impliedby$ $\forall \varepsilon > 0$，$\because f(x_0 + 0) = l$，$\therefore \exists \delta_1 > 0$，当 $x_0 < x < \delta_1$ 时，$|f(x) - l| < \varepsilon$  
> $\because f(x_0 - 0) = l$，$\therefore \exists \delta_2 > 0$，当 $\delta_2 < x < x_0$ 时，$|f(x) - l| < \varepsilon$  
> 取 $\delta = \min\{\delta_1, \delta_2\}$，则当 $0 < |x - x_0| < \delta$ 时，$|f(x) - l| < \varepsilon$  
> $\therefore \lim_{x \to x_0} f(x) = l$

  

**例** $f(x) = \begin{cases}
x - 5, & 1 < x \leq 2 \\
10, & x = 1 \\
x + 2, & 0 \leq x < 1
\end{cases}$

> 求 $\lim_{x \to 1 + 0} f(x) = \lim_{x \to 1 + 0} (x - 5) = -4$
> $\lim_{x \to 1 - 0} f(x) = \lim_{x \to 1 - 0} (x + 2) = 3$
> 故 $\lim_{x \to 1} f(x)$ 不存在

  

**例** $f(x) = \begin{cases}
x^2, & x \geq 1 \\
ax, & x < 1
\end{cases}$

> 求 $f(1 - 0)$，$f(1 + 0)$
> 解 $f(1 + 0) = \lim_{x \to 1 + 0} f(x) = \lim_{x \to 1 + 0} x^2 = \lim_{x \to 1} x^2 = 1$
> $f(1 - 0) = a$

   

习题：证 $\lim_{x \to x_0} x^n = x_0^n$，$n \in \mathbb{N}$

> 证一：$\lim_{x \to x_0} x = x$  
> $\therefore \lim_{x \to x_0} x^n = \left( \lim_{x \to x_0} x \right)^n = x_0^n$  
>
> 证二：(I) $x_0 = 0$，证 $\lim_{x \to 0} x^n = 0$  
> $\forall \varepsilon > 0$，要使 $|x^n - 0| = |x|^n < \varepsilon$，只要 $|x| < \varepsilon^{\frac{1}{n}}$  
> 取 $\delta = \varepsilon^{\frac{1}{n}}$，则当 $0 < |x| < \delta$ 时，$|x^n - 0| < \varepsilon$  
> (II) $x_0 \neq 0$  
> $|x^n - x_0^n| = |x - x_0|(x^{n-1} + x^{n-2}x_0 + \dots + x_0^{n-1})| \leq M|x - x_0|$  
> 设 $|x - x_0| < 1 \implies |x| \leq |1 + x_0|$  
> $\implies \lim_{x \to x_0} x^n = x_0^n$

---

 

# 2.5 其它极限

**例**：$f(x) = \frac{1}{x}$，$\lim_{x \to \infty} \frac{1}{x} = 0$

#### 定义：

设 $f(x)$ 在 $|x| > X_0$ 有定义，$l \in \mathbb{R}$，若 $\forall \varepsilon > 0, \exists X(\varepsilon)$，当 $|x| > X$ 时，$|f(x) - l| < \varepsilon$  
称 $f(x)$ 当 $x \to \infty$ 时极限是 $l$，记 $\lim_{x \to \infty} f(x) = l$，即 $f(x) \to l (x \to \infty)$

当 $x > X$ 时，$\lim_{x \to +\infty} f(x) = l$  
当 $x < -X$ 时，$\lim_{x \to -\infty} f(x) = l$

**命题** $\lim_{x \to \infty} f(x) = l \iff \lim_{x \to +\infty} f(x) = l = \lim_{x \to -\infty} f(x)$

> **例**：设 $f(x) = \left(1 + \frac{1}{[x]}\right)^{[x] + 1}$，$x \geq 1$，证明 $\lim_{x \to +\infty} f(x) = e$
> 证：$\forall \varepsilon > 0$ ① 取 $N(\varepsilon)$，当 $n > N$ 时，$0 \leq \left(1 + \frac{1}{n}\right)^{n + 1} - e < \varepsilon$
> ② 取 $X = N(\varepsilon)$，则当 $x > X$ 时，$[x] \geq x - 1 > N - 1$
> $\implies \left(1 + \frac{1}{x}\right)^{[x] + 1} - e \leq \left(1 + \frac{1}{n}\right)^{n + 1} - e < \varepsilon$

> **例** $\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = e$
> 先证 $\lim_{x \to +\infty} \left(1 + \frac{1}{x}\right)^x = e$（再证 $\lim_{x \to -\infty} \left(1 + \frac{1}{x}\right)^x = e$ 后面再说）
> 证：$x \geq 2$，$[x] \leq x < [x] + 1$
> $\left(1 + \frac{1}{[x] + 1}\right)^{[x]} \leq \left(1 + \frac{1}{x}\right)^x \leq \left(1 + \frac{1}{[x]}\right)^{[x] + 1} \to e$
> $\lim_{x \to \infty} \left(1 + \frac{1}{[x]}\right)^{[x]} = e$，由夹逼定理

---

  

# 2.6 无穷大

**例** $f(x) = \frac{1}{x}$，$x \to 0$，$\lim_{x \to 0} \frac{1}{x} = \infty$

#### 定义：

设 $f(x)$ 在 $x_0$ 某去心邻域有定义，若 $\forall A > 0, \exists \delta = \delta(A)$，当 $0 < |x - x_0| < \delta$ 时，$|f(x)| > A$
称 $f(x)$ 当 $x \to x_0$ 时极限是 $\infty$，记 $\lim_{x \to x_0} f(x) = \infty$
$f(x) \to +\infty$ 即 $\lim_{x \to x_0} f(x) = +\infty$

> **例** 证 $\lim_{x \to 0^+} \frac{1}{x} = +\infty$
> 证：$\forall A > 0$，要使 $\frac{1}{x} > A (x > 0)$，只要 $x < \frac{1}{A}$
> 取 $\delta = \frac{1}{A}$，则当 $0 < x < \delta$ 时，$\frac{1}{x} > A$
> $\therefore \lim_{x \to 0^+} \frac{1}{x} = +\infty$

> **例** $\lim_{x \to \infty} \frac{1}{x^n} = 0 (n \geq 1, n \in \mathbb{N})$
> 证：$\forall \varepsilon > 0$，要使 $\left| \frac{1}{x^n} - 0 \right| < \varepsilon$，只要 $|x| > \frac{1}{\varepsilon^{\frac{1}{n}}}$
> 取 $X = \frac{1}{\varepsilon^{\frac{1}{n}}}$，则当 $|x| > X$ 时，$\left| \frac{1}{x^n} - 0 \right| < \varepsilon$
> $\therefore \lim_{x \to \infty} \frac{1}{x^n} = 0$

#### 定理

 $\lim_{x \to x_0} f[g(x)] = l \iff$ 当 $x \to x_0$ 时 $g(x) \to \infty$ 且 $\lim_{n \to \infty} f(n) = l$

> **例** 证 $\lim_{x \to -\infty} \left(1 + \frac{1}{x}\right)^x = e$
> $\lim_{x \to -\infty} \left(1 + \frac{1}{x}\right)^x \stackrel{x = -y}{=} \lim_{y \to +\infty} \left(1 - \frac{1}{y}\right)^{-y}$
> 当 $x \to -\infty$ 时，$y \to +\infty$
> $\lim_{y \to +\infty} \frac{1}{\left(1 - \frac{1}{y}\right)^{-y}} = \lim_{y \to \infty} \frac{1}{\left(1 - \frac{1}{y}\right)^y} = \frac{1}{e}$