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

```

---

# 组合数据类型

序列（字符串，元组，列表）；集合；映射（字典）

## 序列

可以索引和切片，元组和列表的元素可以是不同的数据类别

### 1、元组

采用一对园括号（可选）和逗号来表示

**一个元素的元组也要加逗号**

`tuple()` 可以初始化一个空的元组，也可以强制转化为元组

元组类型的不可变：定义之后不能增加删除修改的，第一层子元素（集合，列表，字典）内部可以

### 2、列表

可变的，采用逗号和一对中括号表示

`list()`  可以初始化一个空的列表，也可以强制转化为列表

操作符同字符串
