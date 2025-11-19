---
title: Chapter 4 函数极限(2)
permalink: /analysis/chapter-4/
createTime: 2025/11/19 14:42:43
---



## 2.7 连续函数

**定义**：设 $f(x)$ 在 $x_0$ 附近有定义，若 $\lim_{x \to x_0} f(x) = f(x_0)$，则称 $f(x)$ 在 $x_0$ 点连续。

$\varepsilon-\delta$ 语言：$\forall \varepsilon > 0,\ \exists \delta = \delta(\varepsilon, x_0) > 0$，使得当 $|x - x_0| < \delta$ 时，$|f(x) - f(x_0)| < \varepsilon$


1. 常见连续函数：
	- $f(x) = c$（常数函数）：$\forall x_0 \in (-\infty, +\infty)$，$\lim_{x \to x_0} c = c = f(x_0)$ ，故处处连续
	- $f(x) = x$ ：$\lim_{x \to x_0} x = x_0 = f(x_0)$ ，处处连续
	- $f(x) = \sin x$ ：由 $|\sin x - \sin x_0| \leq |x - x_0|$ ，$\lim_{x \to x_0} \sin x = \sin x_0$ ，处处连续
	- $f(x) = \cos x$ ：同理处处连续


2. 单侧连续：
	(1) 右连续：设 $f(x)$ 在 $(x_0, x_0 + \delta_0)$ 有定义（ $\delta_0 > 0$ ），若 $\lim_{x \to x_0^+} f(x) = f(x_0)$，则 $f(x)$ 在 $x_0$ 点右连续  
	(2) 左连续：设 $f(x)$ 在 $(x_0 - \delta_0, x_0]$ 有定义（ $\delta_0 > 0$ ），若 $\lim_{x \to x_0^-} f(x) = f(x_0)$ ，则 $f(x)$ 在 $x_0$ 点左连续

	**定理**：$f(x)$ 在 $x_0$ 连续 $\iff f(x)$ 在 $x_0$ 既左连续又右连续

---

例：讨论 $f(x) = \begin{cases} x^3,\ &x \geq 0 \\ 1 + \frac{\sin x}{x},\ &x < 0 \end{cases}$ 的连续性

- $x > 0$ 时，$f(x) = x^3$ 连续；$x < 0$ 时，$f(x) = 1 + \frac{\sin x}{x}$ 连续
- 右连续：$\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} x^3 = 0 = f(0)$
- 左连续：$\lim_{x \to 0^-} f(x) = \lim_{x \to 0^-} \left(1 + \frac{\sin x}{x}\right) = 2 \neq f(0)$  
	故 $f(x)$ 在 $x = 0$ 不连续

---

证明 $y = a^x\ (a > 0, a \neq 1)$ 在 $(-\infty, +\infty)$ 处处连续

要证 $\forall x_0 \in (-\infty, +\infty)$，有 $\lim_{x \to x_0} a^x = a^{x_0}$，分两种情况：

（Ⅰ）当 $a > 1$ 时

1. 先证 $x = 0$ 处右连续：
	需证 $\lim_{x \to 0^+} a^x = a^0 = 1$。
	$\forall \varepsilon > 0$：
	① 取 $N \in \mathbb{N}$，使得 $a^{\frac{1}{N}} - 1 < \varepsilon$（由 $\lim_{n \to \infty} \sqrt[n]{a} = 1$）；
	② 取 $\delta = \frac{1}{N}$，则当 $0 < x < \delta$ 时，

$$
|a^x - 1| = a^x - 1 < a^{\frac{1}{N}} - 1 < \varepsilon
$$

   故 $\lim_{x \to 0^+} a^x = 1$，即 $x = 0$ 处右连续。


2. 再证 $x = 0$ 处左连续：
	需证 $\lim_{x \to 0^-} a^x = 1$。
	令 $y = -x$，当 $x \to 0^-$ 时，$y \to 0^+$，则

$$
\lim_{x \to 0^-} a^x = \lim_{y \to 0^+} a^{-y} = \lim_{y \to 0^+} \frac{1}{a^y} = \frac{1}{1} = 1
$$

   故 $y = a^x$ 在 $x = 0$ 处连续。


3. 证 $\forall x_0 \in (-\infty, +\infty)$ 处连续：
	对任意 $x_0$，令 $t = x - x_0$，则当 $x \to x_0$ 时，$t \to 0$，因此

$$
\lim_{x \to x_0} a^x = \lim_{t \to 0} a^{x_0 + t} = a^{x_0} \cdot \lim_{t \to 0} a^t = a^{x_0} \cdot a^0 = a^{x_0}
$$

（Ⅱ）当 $0 < a < 1$ 时

令 $b = \frac{1}{a} > 1$，则 $a^x = \frac{1}{b^x}$。
由 $b > 1$ 时 $b^x$ 在 $(-\infty, +\infty)$ 处处连续，且连续函数的倒数仍连续，故
$$
\lim_{x \to x_0} a^x = \lim_{x \to x_0} \frac{1}{b^x} = \frac{1}{b^{x_0}} = a^{x_0}
$$


综上，$y = a^x \ (a > 0, a \neq 1)$ 在 $(-\infty, +\infty)$ 处处连续。

## 2.8 连续函数与极限函数

 例1：求极限

1. $\lim_{x \to 0}\frac{\ln(1+x)}{x}$
2. $\lim_{x \to 0}\frac{a^x - 1}{x} \ (a > 0, a \neq 1)$
3. $\lim_{x \to 0}\frac{(1+x)^\alpha - 1}{x} \ (\alpha \in \mathbb{R})$

 ① 求解 $\lim_{x \to 0}\frac{\ln(1+x)}{x}$

$f(x)=\ln(1+x)$ 在 $x > -1$ 处连续，且为“$\frac{0}{0}$”型，利用连续函数性质：
$$
\lim_{x \to 0}\frac{\ln(1+x)}{x}=\lim_{x \to 0}\ln(1+x)^{\frac{1}{x}}=\ln e=1
$$

② 求解 $\lim_{x \to 0}\frac{a^x - 1}{x}$

“$\frac{0}{0}$”型，令 $t=a^x - 1$，则 $x=\log_a(t+1)^{1/t}$；当 $x \to 0$ 时，$t \to 0$，因此：
$$
\lim_{x \to 0}\frac{a^x - 1}{x}=\lim_{t \to 0}\frac{t}{\log_a(t+1)^{1/t}}=\frac{1}{\log_a e}=\ln a
$$

③ 求解 $\lim_{x \to 0}\frac{(1+x)^\alpha - 1}{x}$

$(1+x)^\alpha$ 在 $x > -1$ 处连续：
$$
\lim_{x \to 0}\frac{(1+x)^\alpha - 1}{x}=\lim_{x \to 0}\frac{e^{\alpha \ln(1+x)} - 1}{x}=\lim_{x \to 0}\frac{\alpha \ln(1+x)}{x}=\alpha
$$

 — 

例：求 $\lim_{x \to 1}\frac{x^m - 1}{x^n - 1} \ (n, m \in \mathbb{N}, n \geq 1)$

 方法1：因式分解
$$
\lim_{x \to 1}\frac{(x-1)(x^{m-1}+x^{m-2}+\dots+1)}{(x-1)(x^{n-1}+x^{n-2}+\dots+1)}=\frac{m}{n}
$$

 方法2：等价无穷小（令 $t=x-1$，$x \to 1$ 时 $t \to 0$）

由 $(1+t)^k=1+kt+o(t) \ (t \to 0)$，得 $(1+t)^k - 1 \sim kt$，因此：
$$
\lim_{x \to 1}\frac{x^m - 1}{x^n - 1}=\lim_{t \to 0}\frac{(1+t)^m - 1}{(1+t)^n - 1}=\lim_{t \to 0}\frac{mt+o(t)}{nt+o(t)}=\frac{m}{n}
$$

---

例2：求 $\lim_{x \to 1}\left( \frac{m}{x^m - 1} - \frac{n}{x^n - 1} \right) \ (n, m \in \mathbb{N}, n \geq 1)$

令 $t=x-1$，$x \to 1$ 时 $t \to 0$，则 $x=1+t$，代入得：
$$
\lim_{t \to 0}\left[ \frac{m}{(1+t)^m - 1} - \frac{n}{(1+t)^n - 1} \right]
$$
由 $(1+t)^k=1+kt+\frac{k(k-1)}{2}t^2+o(t^2)$，得 $(1+t)^k - 1=kt+\frac{k(k-1)}{2}t^2+o(t^2)$，因此：
$$
\begin{align*}
\text{原式}&=\lim_{t \to 0}\frac{m[(1+t)^n - 1] - n[(1+t)^m - 1]}{[(1+t)^m - 1][(1+t)^n - 1]} \\
&=\lim_{t \to 0}\frac{m\left( nt+\frac{n(n-1)}{2}t^2 \right) - n\left( mt+\frac{m(m-1)}{2}t^2 \right)+o(t^2)}{mnt^2+o(t^2)} \\
&=\lim_{t \to 0}\frac{\frac{mn(n-m)}{2}t^2+o(t^2)}{mnt^2+o(t^2)} \\
&=\frac{n - m}{2}
\end{align*}
$$

---

多项式商的极限（$p(x), q(x)$ 为多项式）

1. 若 $q(x_0) \neq 0$：$\lim_{x \to x_0}\frac{p(x)}{q(x)}=\frac{p(x_0)}{q(x_0)}$
2. 若 $q(x_0)=0$：
   - 若 $p(x_0) \neq 0$：$\lim_{x \to x_0}\frac{p(x)}{q(x)}=\infty$
   - 若 $p(x_0)=0$：设 $p(x)=(x-x_0)^\alpha p_1(x)$，$q(x)=(x-x_0)^\beta q_1(x)$（$p_1(x_0) \neq 0, q_1(x_0) \neq 0$），则：
     - $\alpha > \beta$ 时，极限为 $0$；
     - $\alpha = \beta$ 时，极限为 $\frac{p_1(x_0)}{q_1(x_0)}$；
     - $\alpha < \beta$ 时，极限为 $\infty$

---

重要极限 $\lim_{x \to \infty}\left( 1+\frac{1}{x} \right)^x=e$ 的应用（幂指函数 $u(x)^{v(x)}$ ,不是初等函数）

例：若 $\lim u(x)=e$，$\lim v(x)=\lambda$，则 $\lim u(x)^{v(x)}=\lim e^{v(x) ln u(x)} = e^\lambda$；

例：若 $\lim u(x)=1$，$\lim v(x)=\infty$，且 $\lim (u(x)-1)v(x)=\lambda$，

则 $\lim u(x)^{v(x)}= lim [1+u(x) 1-1]^{\frac{1}{v(x)-1}(u(x)-1)v(x)} =e^\lambda$。

 例：求 $\lim_{x \to \infty}\left( \cos \frac{1}{x} \right)^{x^2}$

令 $t=\frac{1}{x}$，$x \to \infty$ 时 $t \to 0$，则：
$$
\lim_{t \to 0}(\cos t)^{\frac{1}{t}}=\lim_{t \to 0}\left[ 1+(\cos t - 1) \right]^{\frac{1}{\cos t - 1} \cdot \frac{\cos t - 1}{t^2}}
$$
由 $\cos t - 1 \sim -\frac{1}{2}t^2 \ (t \to 0)$，得：
$$
\lim_{t \to 0}\frac{\cos t - 1}{t^2}=\lim_{t \to 0}\frac{-\frac{1}{2}t^2}{t^2}=\frac{1}{2}
$$

#### 连续函数的运算性质

**定理**：若 $f(x)$ 和 $g(x)$ 在 $x_0$ 处连续，则 $f(x) \pm g(x)$、$f(x)g(x)$ 在 $x_0$ 处连续；若 $g(x_0) \neq 0$，则 $\frac{f(x)}{g(x)}$ 在 $x_0$ 处连续。

- 多项式 $p(x)$ 在 $(-\infty, +\infty)$ 处处连续；多项式也满足
- $\tan x=\frac{\sin x}{\cos x}$ 在 $\cos x \neq 0$ 处连续（即 $x \neq k\pi + \frac{\pi}{2}$）。

#### 复合函数的连续性
**定理**：若 $g(x)$ 在 $x_0$ 处连续，$f(u)$ 在 $u_0=g(x_0)$ 处连续，则 $f(g(x))$ 在 $x_0$ 处连续。

证明：
$$
\lim_{x \to x_0}f(g(x))\xlongequal{u=g(x)}\lim_{u \to u_0}f(u)=f(u_0)=f(g(x_0))
$$

#### 闭区间上的连续函数
**定义**：$f(x)$ 在 $[a,b]$ 上连续 $\iff f(x)$ 在 $(a,b)$ 处处连续，且在 $x=a$ 处右连续、$x=b$ 处左连续。

#### 反函数的连续性
**定理**：若 $f(x)$ 在区间 $I$ 上严格单调且连续，则 $f^{-1}(x)$ 在 $f(I)$ 上也严格单调且连续。

- $y=x^n \ (n \in \mathbb{N}, n \geq 1)$ 在 $(-\infty, +\infty)$ 严格增且连续，故 $y=x^{\frac{1}{n}}$ 在 $(0, +\infty)$ 连续且严格增；
- $y=a^x \ (a > 1)$ 在 $(-\infty, +\infty)$ 严格增且连续，故 $y=\log_a x$ 在 $(0, +\infty)$ 连续且严格增；
- $y=\sin x$ 在 $[-\frac{\pi}{2}, \frac{\pi}{2}]$ 严格增且连续，故 $y=\arcsin x$ 在 $[-1,1]$ 连续且严格增；
- $y=\cos x$ 在 $[0, \pi]$ 严格减且连续，故 $y=\arccos x$ 在 $[-1,1]$ 连续且严格减；
- $y=\tan x$ 在 $(-\frac{\pi}{2}, \frac{\pi}{2})$ 严格增且连续，故 $y=\arctan x$ 在 $(-\infty, +\infty)$ 连续且严格增。

#### 基本初等函数的连续性
**定理**：基本初等函数（幂函数、三角函数、指数函数、对数函数、反三角函数）在其定义域内连续；

初等函数（基本初等函数经有限次四则运算/复合得到）在其定义区间内连续。

#### 间断点的定义与分类
**定义**：若 $x_0$ 不是 $f(x)$ 的连续点，则称 $x_0$ 为 $f(x)$ 的间断点。

##### 分类（按左右极限是否存在）
1. **第一类间断点**（左右极限均存在）：
   - 可去间断点：$\lim_{x \to x_0^-}f(x)=\lim_{x \to x_0^+}f(x) \neq f(x_0)$（或 $f(x_0)$ 无定义）；
   - 跳跃间断点：$\lim_{x \to x_0^-}f(x) \neq \lim_{x \to x_0^+}f(x)$

2. **第二类间断点**（左右极限至少一个不存在）：
   - 无穷间断点：$\lim_{x \to x_0}f(x)=\infty$（或 $\pm\infty$）；
   - 振荡间断点：$\lim_{x \to x_0}f(x)$ 振荡不存在（如 $f(x)=\sin \frac{1}{x}$ 在 $x=0$ 处）。

例：判断间断点类型

- $f(x)=\begin{cases} \frac{\sin x}{x}, & x \not= 0 \\ 2, & x = 0 \end{cases}$：$\lim_{x \to 0}f(x)=1 \not= f(0)$ ,$x=0$ 是 $f(x)$ 可去间断点

	注：若 $x=0$ 时， $f(x)=1$ ,则在 $x=0$ 连续



---

## 2.9 函数一致连续性

#### 一致连续与连续的关系

函数 $f(x)$ 在 $[a,b]$ 连续 $\iff \forall x_0 \in [a,b]$，$\lim_{x \to x_0}f(x)=f(x_0)$，

即 $\forall x_0 \in [a,b],\forall \varepsilon>0,\exists \delta(\varepsilon,x_0)>0$，当 $|x-x_0|<\delta$ 时，$|f(x)-f(x_0)|<\varepsilon$。


#### 一致连续的定义
设 $f(x)$ 在区间 $I$ 有定义，若 $\forall \varepsilon>0,\exists \delta=\delta(\varepsilon)>0$，

当 $x_1,x_2 \in I$ 且 $|x_1-x_2|<\delta$ 时，有 $|f(x_1)-f(x_2)|<\varepsilon$，

则称 $f(x)$ 在 $I$ 一致连续。


#### 一致连续的性质
若 $f(x)$ 在 $(a,b)$ 或 $[a,b]$ 一致连续，则 $f(x)$ 在 $I$ 上连续。
证明：$\forall x_0 \in I$，下证 $\lim_{x \to x_0}f(x)=f(x_0)$

$\forall \varepsilon>0$ ，取一致连续对应的 $\delta=\delta(\varepsilon)$，当 $|x-x_0|<\delta$ 时，$|f(x)-f(x_0)|<\varepsilon$，故连续。


#### 非一致连续的定义
若 $\exists \varepsilon_0>0,\forall n \in \mathbb{N},\exists x_n^{(1)},x_n^{(2)} \in I$，使得 $|x_n^{(1)}-x_n^{(2)}| \to 0\ (n \to \infty)$，

且 $|f(x_n^{(1)})-f(x_n^{(2)})| \geq \varepsilon_0$，则 $f(x)$ 在 $I$ 非一致连续。


#### 例：一致连续/非一致连续的证明
1. **证明 $f(x)=\sin x$ 在 $(-\infty,+\infty)$ 一致连续**
   由三角不等式：$|\sin x_1 - \sin x_2| \leq |x_1-x_2|\ (\forall x_1,x_2 \in \mathbb{R})$。
   $\forall \varepsilon>0$，取 $\delta=\varepsilon$，当 $|x_1-x_2|<\delta$ 时，

   $|\sin x_1 - \sin x_2| \leq |x_1-x_2|<\delta=\varepsilon$ ，故 $\sin x$ 在 $(-\infty,+\infty)$ 一致连续。

2. **证明 $f(x)=\frac{1}{x}$ 在 $(0,1)$ 非一致连续**
   取 $\varepsilon_0=1$，$\forall n \in \mathbb{N}$，取 $x_n^{(1)}=\frac{1}{n},x_n^{(2)}=\frac{1}{n+1} \in (0,1)$，

   则 $|x_n^{(1)}-x_n^{(2)}|=\frac{1}{n(n+1)} \to 0\ (n \to \infty)$，且 $|f(x_n^{(1)})-f(x_n^{(2)})|=|n-(n+1)|=1 \geq \varepsilon_0$，故 $y=\frac{1}{x}$ 在 $(0,1)$ 非一致连续。


#### 更多示例
1. **证明 $f(x)=x$ 在 $[0,+\infty)$ 一致连续**
   $\forall \varepsilon>0$，取 $\delta=\varepsilon$，当 $|x_1-x_2|<\delta$ 时，

   $|f(x_1)-f(x_2)|=|x_1-x_2|<\varepsilon$，故一致连续。

2. **证明 $f(x)=x^k\ (k \in \mathbb{N},k \geq 2)$ 在 $[0,+\infty)$ 非一致连续**

   取 $x_n^{(1)}=n+\frac{1}{n},x_n^{(2)}=n$，则 $|x_n^{(1)}-x_n^{(2)}|=\frac{1}{n} \to 0\ (n \to \infty)$，且 

   $|f(x_n^{(1)})-f(x_n^{(2)})|=(n+\frac{1}{n})^k - n^k > n^k\left[(1+\frac{1}{n^2})^k-1\right]> n^k\left[1+k \cdot \frac{1}{n}-1\right]=n^k \to \infty$ ，故非一致连续。

3. **证明 $f(x)=\sqrt{x}$ 在 $[0,+\infty)$ 一致连续**

   先证 $[1,+\infty)$ 一致连续：$\forall x_1,x_2 \in [1,+\infty)$，$|\sqrt{x_2}-\sqrt{x_1}|=\frac{|x_2-x_1|}{\sqrt{x_2}+\sqrt{x_1}} \leq \frac{1}{2}|x_2-x_1|$，$\forall \varepsilon>0$，取 $\delta=2\varepsilon$ 即可。

   再证 $[0,2]$ 一致连续，故 $f(x)$ 在 $[0,+\infty)$ 一致连续。

4. **证明 $y=\sin \frac{1}{x}$ 在 $(0,1)$ 非一致连续**

   取 $x_n^{(1)}=\frac{1}{2n\pi+\frac{\pi}{2}},x_n^{(2)}=\frac{1}{2n\pi}$，则 $|x_n^{(1)}-x_n^{(2)}| \to 0\ (n \to \infty)$，且 $|\sin \frac{1}{x_n^{(1)}}-\sin \frac{1}{x_n^{(2)}}|=|1-0|=1$，故非一致连续。

----

## 2.10 闭区间 $[a,b]$ 上连续函数的性质

#### 定理1：闭区间连续函数必一致连续
**证明（反证法）**：若 $[a,b]$ 上 $f(x)$ 非一致连续，

则 $\exists \varepsilon_0>0,\exists x_n^{(1)},x_n^{(2)} \in [a,b]$，使得 $|x_n^{(1)}-x_n^{(2)}| \to 0\ (n \to \infty)$ 且 $|f(x_n^{(1)})-f(x_n^{(2)})| \geq \varepsilon_0$。

由有界数列收敛定理，$\{x_n^{(1)}\}$ 有收敛子列 $x_{n_k}^{(1)} \to x^* \in [a,b]$，则 $x_{n_k}^{(2)} \to x^*$，

由连续性得 $f(x_{n_k}^{(1)}) \to f(x^*),f(x_{n_k}^{(2)}) \to f(x^*)$，与 $|f(x_{n_k}^{(1)})-f(x_{n_k}^{(2)})| \geq \varepsilon_0$ 矛盾。


#### 定理2：闭区间连续函数必有界
即 $\exists M>0$，使得 $|f(x)| \leq M\ (\forall x \in [a,b])$。
**证明（反证法）**：若 $f(x)$ 无界，则 $\forall M>0,\exists x_M \in [a,b]$ 使得 $|f(x_M)|>M$。

取 $M=n$，得 $x_n \in [a,b]$ 满足 $|f(x_n)|>n$。

 $\{x_n\}$ 有界，故有收敛子列 $x_{n_k} \to x^* \in [a,b]$，

由连续性得 $f(x_{n_k}) \to f(x^*)$，与 $|f(x_{n_k})|>n_k \to \infty$ 矛盾。


#### 定理3：闭区间连续函数必有最大值与最小值
即 $\exists x_1,x_2 \in [a,b]$，使得 $f(x_1)=\max_{x \in [a,b]}f(x),f(x_2)=\min_{x \in [a,b]}f(x)$。
**注**：$f(x)=\frac{1}{x}$ 在 $(0,1)$ 连续但无最值。


#### 定理4：零点存在定理
设 $f(x)$ 在 $[a,b]$ 连续，且 $f(a)f(b)<0$，则 $\exists c \in (a,b)$ 使得 $f(c)=0$。

**例**：证明 $2^x-4x=0$ 在 $(0,\frac{1}{2})$ 至少有一个解。
令 $f(x)=2^x-4x$，$f(x)$ 在 $(0,\frac{1}{2})$ 连续，且 $f(0)=1>0,f(\frac{1}{2})=\sqrt{2}-2<0$，由零点定理得证。


#### 定理5：介值定理
设 $f(x)$ 在 $[a,b]$ 连续，$f(a) \neq f(b)$，若 $f(a)<\xi<f(b)$（或 $f(b)<\xi<f(a)$），则 $\exists c \in (a,b)$ 使得 $f(c)=\xi$。

**证明**：令 $g(x)=f(x)-\xi$，则 $g(x)$ 在 $[a,b]$ 连续，

且 $g(a)=f(a)-\xi<0,g(b)=f(b)-\xi>0$，

由零点定理得 $\exists c \in (a,b)$ 使得 $g(c)=0$，即 $f(c)=\xi$。


### 补充极限计算示例
1. **求 $\lim_{x \to \infty}(\sqrt{x^2-x+1}-ax-b)=0$ 中的 $a,b$**
   先化简：$\sqrt{x^2-x+1}=x\sqrt{1-\frac{1}{x}+\frac{1}{x^2}} \sim x-\frac{1}{2}\ (x \to \infty)$，故 $a=1$；
   再计算 $b$：
   $$
   b=\lim_{x \to \infty}(\sqrt{x^2-x+1}-x)=\lim_{x \to \infty}\frac{-x+1}{\sqrt{x^2-x+1}+x}=\lim_{x \to \infty}\frac{-1+\frac{1}{x}}{\sqrt{1-\frac{1}{x}+\frac{1}{x^2}}+1}=-\frac{1}{2}
   $$

2. **求 $\lim_{x \to \infty}(\sin\sqrt{x+1}-\sin\sqrt{x-1})$**
   由三角公式：$|\sin\sqrt{x+1}-\sin\sqrt{x-1}|=2\left|\sin\frac{\sqrt{x+1}-\sqrt{x-1}}{2}\cos\frac{\sqrt{x+1}+\sqrt{x-1}}{2}\right| \leq |\sqrt{x+1}-\sqrt{x-1}|=\frac{2}{\sqrt{x+1}+\sqrt{x-1}} \to 0$，故极限为 $0$。

3. **求 $\lim_{n \to \infty}\sin(\pi\sqrt{n^2+1})$**
   由三角公式：$|\sin(\pi\sqrt{n^2+1})-\sin(n\pi)|=2\left|\sin\frac{\pi(\sqrt{n^2+1}-n)}{2}\cos\frac{\pi(\sqrt{n^2+1}+n)}{2}\right| \leq \pi(\sqrt{n^2+1}-n)=\frac{\pi}{\sqrt{n^2+1}+n} \to 0$，故极限为 $0$。

4. **求 $\lim_{x \to 0}\frac{\sin(\sin x)}{x}$**
   由等价无穷小 $\sin x \sim x\ (x \to 0)$，得 $\sin(\sin x) \sim \sin x \sim x$，故极限为 $1$。

5. **求 $\lim_{x \to 1}\frac{\sqrt[m]{x}-1}{\sqrt[n]{x}-1}\ (m,n \in \mathbb{N}^+)$**
   令 $t=x^{mn}$，则 $x \to 1$ 时 $t \to 1$，故：
   $$
   \lim_{x \to 1}\frac{\sqrt[m]{x}-1}{\sqrt[n]{x}-1}=\lim_{t \to 1}\frac{t^n-1}{t^m-1}=\lim_{t \to 1}\frac{(t-1)(t^{n-1}+\dots+1)}{(t-1)(t^{m-1}+\dots+1)}=\frac{n}{m}
   $$

6. **求 $\lim_{n \to \infty}\cos^n\frac{x}{\sqrt{n}}$**
   令 $y=\sqrt{n}$，则 $n \to \infty$ 时 $y \to \infty$，故：
   $$
   \lim_{n \to \infty}\cos^n\frac{x}{\sqrt{n}}=\lim_{y \to \infty}\left[1+\left(\cos\frac{x}{y}-1\right)\right]^{y^2 \cdot \frac{x^2}{y^2(\cos\frac{x}{y}-1)}}=e^{\lim_{y \to \infty}\frac{x^2(\cos\frac{x}{y}-1)}{\frac{x^2}{y^2}}}=e^{-\frac{x^2}{2}}
   $$