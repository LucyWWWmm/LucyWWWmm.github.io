---
title: Chapter-2
permalink: /python/chapter-2/
createTime: 2025/10/30 15:22:43
---

# 程序的控制结构

“结构化程序设计”： **顺序，分支，循环** 这三种基本控制结构，提高可读性，易维护性和可调性

程序流程图用一系列图形，流程线和文字说明描述程序流程

### 顺序结构

按照线性顺序依次执行

### 循环结构

包括 **条件循环** 和 **遍历循环**

条件循环：符合条件即循环，直到不符合条件（不清楚次数）

遍历循环：按顺序获取遍历结构中元素，直到遍历完成（清楚次数）

流程图里会看到“圈环”

### 分支结构

#### 单分支结构：if语句，用缩进表示包含结构

例：绝对值计算

```python
R_S = input("请输入")
R = float(R_S)
if R<0:
    R = -R
print("绝对值是"R)
```

不知道填什么时，要用 **pass** 关键字进行占位

```python
if len(id_code) ==18:
    pass
```



#### 二分支结构：if-else语句

更简洁的表达方式：<表达式1>if<条件>else<表达式2>

为True执行表达式1，否则执行2，一般不建议使用

#### 多分支语句：if-elif-else语句

else是可选的

条件为false则继续向下，从上到下找到了第一个True条件，执行该条件的语句块后， **跳出** 整个if-elif-else结构

---

# 逻辑运算符与布尔表达式

`and`  与； `or` 或； `not` 非

#### 逻辑运算符的中断执行

```python
temp = 80
temp > "abc"#一定会报错

temp > 80 or temp > "abc"#这个可能不报错了
```

and前面判断为false，中断执行；or前面判断为true，中断执行

#### 布尔值的判定

下面这些布尔值为False，其他为True

* None
* 值为0的数值：0，0.0，0j
* 任何空的数值类型：空字符串“”,(),[],{},set()

---

# 程序循环结构

python有两种循环：条件循环-while循环；遍历循环-for循环

```python
number = int(input("请输入数字"))

result=0
count=1

while count <=number:
    result += count
    count += 1
    
print("累和结果为",result)   
```

循环进行

```python
while True:
```

```python
id_code = input("请输入18位身份证号（输入n或N终止程序）")
while id_code.lower() !='n':
    number =int(id_code[-2])
    #省略一个分支结构
    id_code= input("请输入18位身份证号（输入n或N终止程序）")#给用户重新输入的机会，否则会一直循环
```

注意：

```python
while id_code != 'n'or'N'#因为逻辑运算符的优先级低，后面的‘N’被认为是true
while id_code != ('n'or'N')#这样是对的
```

## break和continue

break跳出之后程序从循环后代码开始；如果程序是多层循环嵌套，break只能跳出所在层的循环

continue结束本次循环，不跳出当前循环；即跳过循环体中下面尚未执行的语句，开始新的循环

---



# 嵌套循环

```python
for i in range(5):
    for j in range(10):
        print("*",end='')
```

连续打印了50个*，每十个中间有空格

```python
for i in range(5):
    for j in range(10):
        print("*",end='')
    print("")#默认结尾为换行符
```

分五行，每行10个*

### range()函数

具有两种形式

`range(stop) `生成从0到stop的整数列表，不包含stop

`range(start,stop)` 生成从start到stop的整数列表，不包括stop

# 异常处理

```python
try:
    <语句块1>
except<异常类型>:
	<语句块2>
```

