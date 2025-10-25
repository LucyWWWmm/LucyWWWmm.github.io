---
title: practice
permalink: /python/practice/
createTime: 2025/10/25 12:24:43
---

这里会记录一部分上课写的作业，准确性不明，但测评的确过了（不负责任的一个人）



请用户随机输入一行字符，用程序分别统计出其中字母（包含大写字母和小写字母）、空格、数字和其它字符的个数。

```python
temp = input("请输入一个字符串：")
a=0
b=0
d=0
e=0
for c in temp:
    if c.isalpha():
        a +=1
    elif c.isspace():
        b +=1
    elif c.isdigit():
        d +=1
    else:
        e +=1

print(f"该字符串中字母数目为： {a}")
print(f"该字符串中数字数目为： {d}")
print(f"该字符串中空格数目为： {b}")
print(f"该字符串中其他字符数目为： {e}")
```

>  注： `+=` 表示加后面的数字再带入回去



请用户输入一个身份证号，输出该人出生年份的天干地支表示法。比如用户输入"386486200812128888"，程序输出"您出生于2008年，是农历戊子年。"已知1924、1984年是甲子年，十天干顺序是“甲、乙、丙、丁、戊、己、庚、辛、壬、癸”，十二地支顺序是“子、丑、寅、卯、辰、巳、午、未、申、酉、戌、亥”。

```python
tiangan = ["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
dizhi = ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
id_code = input("请输入一个身份证号：")
year = int(id_code[6:10])
a = year - 1924
if a<=60:
    t = tiangan[a%10]
    d = dizhi[a%12]
else:
    b =a-60
    t = tiangan[b%10]
    d = dizhi[b%12]

print(f"您出生于{year}年，是农历{t}{d}年。")
```

> 注意整除与集合的运用





【输入形式】
从键盘输入三个浮点数，分别为电源电压U、电阻R和电流I，各数之间以空格隔开。
【输出形式】
在屏幕上分两行显示结果：
第一行为电压降ΔU，浮点数形式输出，小数点后保留两位小数；
第二行为剩余电压U-ΔU，浮点数形式输出，小数点后保留两位小数。

```python
temp = input("")
origin = temp.split()
a = float(origin[0])
b = float(origin[1])
c = float(origin[2])
deltaU = b*c
U = a - deltaU
print(f"{deltaU:.2f}")
print(f"{U:.2f}")
```

> 首先，分割字符串的方法
>
> 然后是保留小数的方法（这个方法不会像round一样吞掉0）