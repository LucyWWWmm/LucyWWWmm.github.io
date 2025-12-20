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

* 函数可以有参数，可以没有参数
* 函数名称的命名规则与变量命名基本一致
* 函数内部可以调用其他函数
* 可以没有return
* 一般不使用 `_` 开头

举个栗子：

```python
def conpute_gender(code):  #code是形参
	number = int(code[-2])
    if number %2 == 0:
        return "女"
    else:
        return "男"
    
id_code = input("请输入身份证号；")
print(compute_gender(id_code)) #id_code是实参，定义在此之前完成即可
```

函数可以有0个，一个多个返回值，没有返回值时为None

函数的多个返回值使用逗号将其分开，其实返回是一个元组

____

## lambda函数

一种函数匿名函数,定义简单的一行函数

`f=lambda<参数名>:<表达式>`

等同于return<列表>

```python
>>> f= lambda x,y:x+y
>>> type(f)
>>> f(10,12)
22
```



# 函数的参数传递

一般来说，实参的数目要与函数定义的实参数目一致

指定参数名称的时候可以任意调整参数顺序

```python
def power_self(x,y=2)#自定义函数，第二个参数可以不传递(用默认值)，也可以传递（用输入值）
```

> [!important]
>  注意：可选参数只能定义在可选参数后面，不然会报错

```python
def count(string,char="")#统计空格
```

可以设计可变数量参数： `*number` ，这样参数传递的是tuple类型，就不限制实参个数了

### 变量的作用域

分为全局变量，和局部变量

全局变量指在函数之外定义的变量，全程有效

局部变量指在函数内部的变量，退出函数变量将不存在

在函数内部，想要对全局变量重新赋值，需要对变量进行global声明。`global x`

> 任何数据类型,如果与全局变量同名,只要被重新赋值,那么重新赋值之后对该变量的修改仅在函数内部有效,不影响全局变量的值
>
>  组合数据类型，函数内部变量与全局变量同名,在函数内部改变该变量的元素会对其有影响



# 递归函数

在函数定义中调用自身的方式就称为递归

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

序列类型（字符串，元组，列表）；集合类型；映射类型（字典）

## 序列类型

存在先后关系,可以 **索引和切片** ，元组和列表的元素可以是不同的数据类别

`x in s` ` x not in s`

`s+t` 连接s与t

`s*n` 或者 `n*s` n为整数,将序列s复制n次

`s[i]`  索引，返回第i个元素

`s[i:j]` 切片，从第i个到第j个， **不包含第j个** （超出范围不报错，会修正到最能取到的部分，两侧都在一边的外侧返回空列表）

`len(s)` 序列s的元素个数；

 `s.index(x)` 序列s中第一次出现x的位置

`s.count(x)` 序列中出现x的总次数

### 1、元组

采用一对园括号（可选）和逗号来表示,元组的元素可以是任意数据类型

**一个元素的元组也要加逗号**

```python
T = (4) #这样相当于声明T=4
T = (4,)
```

`tuple()` 可以初始化一个空的元组，也可以强制转化为元组

元组类型的不可变：定义之后不能增加删除修改的，第一层子元素（集合，列表，字典）内部可以

### 2、列表

**可变的** 长度和内容都可变，采用逗号和一对中括号表示

`L=[]` 生成空列表

`list()`  可以初始化一个空的列表，也可以强制转化为列表

操作符同字符串

列表的操作 `s[i]=x` 把s的第i项改为x

`del s{i}` 删掉第i个；`del s[i:j]` 删除第i个到第j个, 不包含第j个

 `s.append(x)` 将x添加到列表末尾

`s.copy` 创建s的拷贝

`s.extend(t)` 用t的内容扩展s，等同于s+=t

`s.insert(i,x)` 在i索引位置将x插入s

`s.pop({i})` 提取i位置上的项，将其移除；

 `s.remove(x)`  删除s中第一个s[i]等于x的项目,当x不存在时报错

`s.reverse()` 直接对s操作,将元素逆序

`s.clear()` 从s中删除所有项

```python
#从列表1中删除在列表2存在的元素
for number in list2:
    if number in list1:
        list1.remove(number)
print(list1)

#生成列表
L=[]
for i in range(1,101):
    L.append(i**2)
print(L)
```

```python
lst =[1,2,3]
lst *=[4,5]  #等效于lst=lst+[4,5],但是这里是原地修改
print(lst) #输出[1,2,3,4,5]

lst=[1,2]
lst *= 3
print(lst)  #输出[1,2,1,2,1,2]

lst=['a','b']
lst *= 'cd' #对于可迭代对象，逐个添加
print(lst)  #输出['a','b','c','d']

lst=['a','b']
lst += 'cd' #要求右侧是可迭代对象，遍历逐个添加
print(lst)  #输出['a','b','c','d']

lst=['a','b']
lst += ['cd']
print(lst)  #输出['a','b','cd']
```



# 列表的排序

`s.sort([key=None][,reverse=False])`

参数默认为None，False，从小到大排列

改为True从大到小排序

```python
#按照字符串长度从大到小排列
temp.sort(key=len,reverse=True)
```

`sorted()` 对可迭代对象排序，返回一个排序好的列表

```python
>>> temp=(1,2,3)
>>> sorted(temp)
[1,2,3]
>>> temp="hello"
>>> sorted(temp)
['e','h','l','l','o']
```



# 集合

**元素中不能用可变数据类型** ,可以有整数,浮点数,字符串,元组(不包含可变数据作为元素)

`set()` 函数生成空字典,或者将字符串,元组,列表强制转化成字典,并完成去重

`len(S)` ; 

`S.add(x)` 将x增加到s； 

`S.clear()` 移除S中所有数据项；

 `S.copy()` 返回一个拷贝

`S.pop()` 随机返回S中一个元素，集合不能为空集（KeyError）

`S.remove(x)` 移除元素，没有该元素（KeyError）

`S.discard(x)` 移除元素，没有该元素不会报错

交集（&）；并集（|）；差集（-）；补集（^）

```python
S-T s.difference(T)#返回新的集合，包含在S中但不在T中    
S-=T s.difference_update(T)#更新S
S&T S.intersection(T)
S&=T   S.intersection_update(T)
S^T S.symmetric_difference(T)#取包含S和T中元素，但是不包含同时在其中的元素  
S=^T  S.symmetric_difference_update(T)
S|T  S.union(T)#返回新的集合，包括两个集合中所有元素  
S|=T  S.update(T)
S<+T S.issubset(T)#S是T的子集返回True，可以用<判断真子集
S>=T  S.issuperset(T)
```



# 字典

键值对（key:value）是一种二元关系

字典是无序的，不提供索引和切片的操作，

 **key是不可变数据类型** （整数，浮点数，布尔值，字符串，不嵌套可变数据类型的元组）

`dict()` 初始化字典，转化字典（需要是二元的元素）

字典数值访问  `<字典变量>[<键>]` ，如果键不存在，返回KeyError

 `<字典变量>[<键>]=<>`  有这个key可以改对应的值,没有这个key就是增加一对键值对

`<d>.keys`  返回所有的键信息

`<d>.values` 返回所有的值信息

`<d>.items` 返回所有的键值对,每个键值对以元组(key,value)形式返回

`<d>.get(<key>,<default>)` 如果不存在对应的值返回default,存在则返回相应的值

`<d>.pop(<key>,<default>)` 如果不存在对应的值返回default,存在则返回相应的值并将键值对删除

`d.popitem()` 随机选取一个 键值对以元组(key,value)形式返回

`<d>.clear()` 删除所有键值对

`del <d>[<key>]` 删除字典中某一个键值对

`<key> in <d>` `<key> not in <d>`

字典遍历

```python
for key in D：#相当于for key in D.keys():
	print(key,D[key])
    
for key,value in D.items(): #键值对同步赋值key，value
    print(key,value)#或者 item  print(item[0],item[1])
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
word_list.sort(key=lambda x:x[1],reverse=True)

for item in word_list:
    print(item[0],item[1])
```



# python模块、包和库

模块：.py为后缀的文件；包：文件夹；库：标准库和第三方库

```python
import random #引入random库
<模块名称>.<常量或函数，方法>

from<模块名称>import<类名/函数名/常量> #后续引用不用加模块名称.
from<模块名称>import* #全部引入
```

来玩猜数字！

```python
import random
random_number = random.randint(1,100) #生成[1,100]中一个随机整数，注意是闭区间
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
#randon库常用方法
random() #生成[0.0,1.0)的随机小数
randint(a,b) #生成[a,b]之间的整数
uniform(a,b) #生成[a,b]之间的随机小数
choice(seq) #在序列类型（如列表）里随机返回一个元素
shuffle(seq)  #将列表元素随机排列
```



```python
import ngender
ngender.guess()#猜一下名字的性别
```

包的引用

```python
import<包名称>[.<子包名称>].<模块名称>
from<包名称>[.<子包名称>].<模块名称>import<类名/函数名/常量>
```

```python
import jieba.posseg
result = jieba.posseg.cut("一串字符") #返回词和词性
```

as的用法:给函数起别名,在import最后加j

```python
import jieba.posseg as pg
result=pg.cut("一串字符")
```

安装与卸载

pip install<库名>

pip uninstall <库名>(不要卸载pip库)

pip list 查看所有安装的第三方库

```python
import jieba
jieba.lcut("一串字符") #切分得到单词列表
```



# 文件

文件是数据的组合和抽象，分为文本文件和二进制文件

最主要的区别是是否有统一的字符编码（前者有）

## 文件的打开

```py
<变量名>=open(<文件名>,<打开模式>)
```

有七种基本的打开模式

‘r’  只读模式,文件不存在返回异常,默认值

‘w’  覆盖写模式,文件不存在即创建,存在则完全覆盖原文件

‘x’  创建写模式,文件不存在即创建,存在则返回异常

‘a’  追加写模式,文件不存在即创建,存在即在原文件最后追加内容

‘b’  二进制文件模式

‘t’  文本文件模式,默认值

‘+’ 与r/w/x/a 一同使用,在原功能基础上增加同时读写功能

**用open函数打开了，最后就要用close关上**

## 文件的读取

`<file>.read()` 读取整个文件内容

`<file>.readline()` 读取行

`<file>.readlines()` 读入所有行,每行为一个元素,形成一个列表

遍历读取

```python
fo = open(fname,"r")
for line in fo:
    #处理一行数据
fo.close()
```

不管什么读取方法,都会将换行符读取,默认在每行结尾加上\n换行符

[‘这是第一行\n’,’这是第二行\n’,’这是第三行’]

## 文件的写入

`<file>.write(s)` 向文件写入一个字符串或者字节流(在b模式下),不能直接写入数字

`<file>.writelines(lines)` 向文件中写入一序列字符串,这一序列字符串可以是由迭代对象产生,如一个字符串列表,直接拼接写入

`<file>.seek(offset)` 改变文件操作指针的位置,offset指从文件开头的偏移位置

`<file>.flash()` 刷新缓冲区,将缓冲区的数据立即写入文件



```python
with open("文件名称.","rt") as fo:#不用close
```



## CSV文件

——以纯文本形式存储 **二维表格数据** 的轻量级文件格式，

字段格式整齐， 每条记录被分隔符分隔为字段一般为半角逗号和制表符

每行开头无空格,行之间无空行

```python
with open("movies.csv","rt") as fo:
    header = fo.readline()
    for line in fo:
        line = line.replace("\n","")#替换尾部的换行
        row = line.split(",")
```

普通方式按行写入文本文件

```python
header=['序号','电影名称','电影年份','电影评分']  #字段行
data_list=[[1,'电影1',2015,9.1],[2,'电影2',2016,7.5],[3,'电影3',2016,5.9]]

with open("movies.csv","wt") as fw:
	fw.write(",".join(header)+"\n") #写入字段行
    for row in data_list:
        fw.write('{},{},{},{}\n'.format(row[0],row[1],row[2],row[3]))
    
```

数据内部有分隔符时,不普通方式（CSV库：python内置）

```python
import csv
data_list = []
with open("","rt",newline='')as fo:
    reader = csv.reader(fo) 
    header = next(reader) #获取字段行
    data_list.append(row)
with open("new.csv",'wt',newline='') as fw:
    writer = csv.writer(fw)
    writer.writerow(header) #写入字段行
    for row in date_list:
        writer.writerow(row)
```

## 
