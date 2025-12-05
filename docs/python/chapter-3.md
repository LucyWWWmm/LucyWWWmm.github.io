---
title: Chapter-3
permalink: /python/chapter-3/
createTime: 2025/11/06 15:22:43
---

# 函数

Python定义函数使用 **def** 保留字

```python
def <函数名字>(<参数列表>):
	<语句块>
    return<返回值>
```

* 函数内部可以调用其他函数
* 可以没有return
* 一般不使用 `_` 开头

举个栗子：

```python
def conpute_gender(code):#code是形参
	number = int(code[-2])
    if number %2 == 0:
        return"女"
    else:
        return"男"
    
id_code = input("请输入身份证号；")
print(compute_gender(id_code)) #id_code是实参，定义在此之前完成即可
```

函数的多个返回值是一个元组

____

## lambda函数

一种函数匿名函数,定义简单的一行函数

`f=lambda<参数名>:<列表>`

等同于return<列表>

# 函数的参数传递

一般来说，实参的数目要与函数定义的实参数目一致

指定参数名称的时候可以任意调整参数顺序

```python
def power_self(x,y=2)#自定义函数，第二个参数可以不传递(用默认值)，也可以传递
```

>  注意：可选参数只能定义在后面

```python
def count(string,char="")#统计空格
```

可以设计可变数量参数： `*number`

在函数内部，想要对全局变量重新赋值，需要对变量进行global声明。`global x`

组合数据类型，与全局变量同名会对其有影响



# 递归函数

用递归实现字符串反转

```python
def reverse(s):
    if(len(s)==1):
		return s
    else:
        return reverse(s[1:])+s[0]
print(reverse("ABC"))
```

阶乘

```python
def fact(n):
    if n==0:
        return 1
    else:
        return n*fact(n-1)
num = eval(input("请输入一个整数"))
print(fact(abs(int(num))))
```

---

# 组合数据类型

序列（字符串，元组，列表）；集合；映射（字典）

## 序列

可以索引和切片，元组和列表的元素可以是不同的数据类别

`s[i]`  索引，返回第i个元素

`s[i:j]` 切片，从第i个到第j个， **不包含第j个** 

`len(s)` 序列s的元素个数； `s.index(x)` 序列s中第一次出现x的位置

### 1、元组

采用一对园括号（可选）和逗号来表示

**一个元素的元组也要加逗号**

`tuple()` 可以初始化一个空的元组，也可以强制转化为元组

元组类型的不可变：定义之后不能增加删除修改的，第一层子元素（集合，列表，字典）内部可以

### 2、列表

可变的，采用逗号和一对中括号表示

`list()`  可以初始化一个空的列表，也可以强制转化为列表

操作符同字符串

列表类型的操作 `s[i]=x` 把s的第i项改为x

`del s{i}` 删掉第i个； `s.append(x)` 将x添加到列表末尾

`s.extend(t)` 用t的内容扩展s，等同于s+=t

`s.insert(i,x)` 在i索引位置将x插入s

`s.pop({i})` 提取i位置上的项，将其移除； `s.remove()`

# 列表的排序

`s.sort([key=None][,reverse=False])`

参数默认为None，False，从小到大排列

改为True从大到小排序

`sorted()` 对可迭代对象排序，返回一个排序好的列表

# 集合

元素中不能用可变数据类型

`set()` 函数

`len(S)` ; `S.add(x)` 将x增加到s； `S.clear()` 移除S中所有数据项； `S.copy()` 返回一个拷贝

`S.pop()` 随机返回S中一个元素，集合不能为空集（KeyError）

`S.remove(x)` 移除元素，没有该元素（KeyError）

交集（&）；并集（|）；差集（-）；补集（^）

# 字典

键值对（key：value）是一种二元关系

字典是无序的，不提供索引和切片的操作， **key是不可变数据类型** （整数，浮点数，布尔值，字符串，不嵌套可变数据类型的元组）

`dict()` 初始化字典，转化字典（需要是二元的元素）

字典数值访问  `<字典变量>[<键>]` ，如果键不存在，返回KeyError

字典遍历

```python
for key in D：#相当于for key in D.keys():
	print(key,D[key])
    
for item in D.items():
    print(key, value)#或者 print(item[0],item[1])
```

`<d>.get(<key>,<default>)` 键存在则返回相应值

```python
D.get('英国'，'不存在') #键不在不会报错
del D["中国"] #删掉一对
D.clear()#清空
```



### 词频统计

```python
word_count = {}
for line in song:
    words = line.split()
    for w in words:
        word_count[w] = word_count.get(w,0)+1

word_list = list(word_count.items())
print(word_list)
word_list.sort(key = lambda x:x[1],reverse=True)

for item in word_list:
    print(item[0],item[1])
```



# python模块、包和库

模块：.py为后缀的文件；包：文件夹；库：标准库和第三方库

```python
import random #引入random库
```

来玩猜数字！

```python
import random
random_number = random.randint(1,100)
times = 0
while True:
    num = int(input("请输入："))
    times += 1
    if num >random_number:
        print("小一点")
    elif num <random_number:
        print("大一点")
    else:
        print("猜对了")
        print(f"你总共猜了{times}次")
        break
if times>7:
    print("你的智商余额明显不足！")
```

```python
import ngender
ngender.guess()#猜一下名字的性别
```



# 文件

