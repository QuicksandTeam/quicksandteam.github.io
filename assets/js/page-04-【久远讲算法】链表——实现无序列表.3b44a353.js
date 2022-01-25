(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{533:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("你好，我是久远，上周开始我们算是正式入门了数据结构，进行了数组的讲解。")]),t._v(" "),a("p",[t._v("我们现在来总结回顾一下数组的知识。")]),t._v(" "),a("ul",[a("li",[t._v("数组是什么？")])]),t._v(" "),a("p",[t._v("是由相同类型的元素的集合所组成的数据结构，分配一块连续的内存来存储。利用元素的索引（index）可以计算出该元素对应的存储地址。")]),t._v(" "),a("ul",[a("li",[t._v("数组的储存类型")])]),t._v(" "),a("p",[t._v("顺序存储：数组在内存中的顺序存储，具体是什么样子呢？")]),t._v(" "),a("p",[t._v("内存是由一个个连续的内存单元组成的，每一个内存单元都有自己的地址。在这些内存单元中，有些被他数据占用了，有些是空闲的。")]),t._v(" "),a("p",[t._v("数组中的每一个元素，都存储在小小的内存单元中，并且元素之间紧密排列，既不能打乱元素的存储顺序，也不能跳过某个存储单元进行存储。")]),t._v(" "),a("p",[t._v("既然有顺序存储，那么一定就有无序存储咯？我们今天要介绍的链表便是无序存储的类型。")]),t._v(" "),a("h2",{attrs:{id:"链表的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链表的使用"}},[t._v("#")]),t._v(" 链表的使用")]),t._v(" "),a("ul",[a("li",[t._v("我们为什么要学链表，它的存在又有什么作用呢？")])]),t._v(" "),a("p",[t._v("上周我们讲解到数组，数组的特点便是顺序存储，适用于查找和修改操作，如果要进行删除和插入元素的操作的时候，数组元素腾位置这件事就要花费不少时间，因此遇到一些经常要删除数据，插入数据的事情的时候，我们尽量不优先考虑用数组去解决这类问题，因为这样反复的使用数组，只会增加我们代码的运行时间，对我们其实是没什么好处的。")]),t._v(" "),a("p",[t._v("这种时候我们就可以使用链表了，链表主要是便于管理长度或数量不确定的数据，经常插入或者删除数据，链表轻而易举就能做到这些，花费的时间相对于数组少很多。")]),t._v(" "),a("ul",[a("li",[t._v("列表和链表名字很像，它们之间有什么关系么？")])]),t._v(" "),a("p",[t._v("列表是我们接触 python 以后，最经常用到的数据类型，列表非常的强大，它为我们提供了很多操作。但是其实不是所有的编程语言都有列表的，而没有列表的编程语言，就要通过别的方式去实现列表的功能。链表便可以帮助我们完成列表的实现。")]),t._v(" "),a("p",[t._v("而列表又分为有序列表和无序列表，我们平常是非常常见列表的，数组就可以用来实现有序列表，而链表则用来实现无序列表。")]),t._v(" "),a("ul",[a("li",[t._v("无序列表是什么？")])]),t._v(" "),a("p",[t._v("先从列表的定义来分析，列表是元素的集合，其中每一个元素都有一个相对于其他元素的位置。更具体地说，这种列表称为无序列表。可以认为列表有第一个元素、第二个元素、第三个元素，等等；也可以称第一个元素为列表的起点，称最后一个元素为列表的终点。为简单起见，我们假设列表中没有重复元素。")]),t._v(" "),a("h2",{attrs:{id:"什么是链表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是链表"}},[t._v("#")]),t._v(" 什么是链表")]),t._v(" "),a("p",[t._v("在计算机科学中，链表是一种常见的基础数据结构，是一种线性表，但是并不会按线性的顺序存储数据，而是在每一个节点里存到下一个节点的指针。效果如图：")]),t._v(" "),a("p",[t._v("看似随意的一组数字，通过指针可以将它们进行连接。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291551374.png",alt:""}})]),t._v(" "),a("p",[t._v("需要注意的是，必须指明链表中第一个元素的位置。一旦知道第一个元素的位置，就能根据\n其中的链接信息访问第二个元素，接着访问第三个元素，依此类推。指向链表第一个元素的引用被称作头。最后一个元素需要知道自己没有下一个元素。")]),t._v(" "),a("h2",{attrs:{id:"使用链表实现无序列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用链表实现无序列表"}},[t._v("#")]),t._v(" 使用链表实现无序列表")]),t._v(" "),a("h3",{attrs:{id:"node-类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-类"}},[t._v("#")]),t._v(" Node 类")]),t._v(" "),a("p",[t._v("上文我们提到了一个例子，一个链表如果存在，那么我们需要知道它第一个元素的位置，让计算机清楚它应该从哪里开始寻找元素，还要告诉最后一个元素它没有下一个元素，让计算机懂得停止寻找元素。因此在实现链表时，我们需要知道一个元素的位置，以及元素自身，以及这个元素指向的下一个元素是什么，只有这样我们才能顺藤摸瓜找到接下来的元素嘛，我们将这一系列所需的东西合在一起，称作节点。")]),t._v(" "),a("p",[t._v("节点是构建链表的基本数据结构。每一个节点都必须包含有两种内容。首先，节点必须包含要生成的链表的元素，我们称之为节点的数据变量。其次，节点必须保存指向下一个节点的引用。\n在构建节点时，需要为其提供初始值。执行下面的赋值语句会生成一个包含数据值20 的节点对象。")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("temp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \ntemp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#20")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("Node 类也包含访问和修改数据的方法，以及指向下一个元素的引用。")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("initdata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" initdata\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getNext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("newdata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newdata\n        \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setNext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("newnext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newnext\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("p",[t._v("对 Python 代码进行分析：")]),t._v(" "),a("p",[t._v("我们定义一个 Node 类，那就需要有初始化方法 _"),a("em",[t._v("init")]),t._v("_ ，其中定义了一个 data 元素，用来存放节点的数据，又定义了一个 next 元素，用来指向下一个节点。 next 的值默认初始化为 None ，指向 None 的引用代表着该元素后面没有其他元素。")]),t._v(" "),a("p",[t._v("getData 方法主要是用于获取当前节点的数据。")]),t._v(" "),a("p",[t._v("getNext 用于告诉使用者该链表当前节点指向的下一节点是什么。")]),t._v(" "),a("p",[t._v("setData 方法主要用于修改当前节点的数据，传入一个新的数据（newdata），然后将其赋值给节点的原数据，这样，当前节点的数据内容就修改成功啦。")]),t._v(" "),a("p",[t._v("setNext 方法主要用于插入新节点，当我们在当前节点的后面插入一个新的节点得时候，要告诉当前节点它的后面有了新的节点，所以才有了  self.next = newnext。")]),t._v(" "),a("h2",{attrs:{id:"无序列表类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#无序列表类"}},[t._v("#")]),t._v(" 无序列表类")]),t._v(" "),a("p",[t._v("由上文可知，节点是无序列表的构成要素之一。每一个节点都通过显式的引用指向下一个节点。只要知道第一个节点的位置，其后的每一个元素都能通过下一个引用找到。因此，无序列表类必须包含指向第一个节点的引用。")]),t._v(" "),a("p",[t._v("无序列表类的定义方法如下：")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UnorderedList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n         self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("对 python 代码进行讲解：")]),t._v(" "),a("p",[t._v("无序列表类的生成方法包括有一行代码，self.head = None 即默认该无序列表的头节点为空，不指向任何元素。")]),t._v(" "),a("p",[t._v("因此我们可以加以思考，当我们定义一个无序列表时，判断一个无序列表是否为空，我们只需要知道它的头节点是不是指向空就可以了。我们可以以此延伸出判断无序列表是否为空的方法 isEmpty().")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmpty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("仅仅一行代码，如果头节点不为空，那则说明头节点必定有指向别处的元素，如果头节点为空那说明这个列表只有这么长。")]),t._v(" "),a("p",[t._v("现在我们已经做好了十足的前期准备了，即知道了无序列表是怎么定义的，也可以通过 isEmpty 方法来判断它其中是否有元素了。现在要做的便是对我们新建的无序列表进行增上改查操作了。")]),t._v(" "),a("h2",{attrs:{id:"add-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-方法"}},[t._v("#")]),t._v(" Add 方法")]),t._v(" "),a("p",[t._v("想生成一个无序列表，我们首先要向其中添加元素，那么我们就需要实现 add 方法。但在实现之前，需要考虑一个问题：新元素要被放在哪个位置？")]),t._v(" "),a("p",[t._v("这个问题是否似曾相识？在数组章节中，我们考虑了很多情况，在末尾，在开头，在中间加入新的元素，尤其是将元素插入到数组中间，处理起来非常的费劲，插入一个元素，剩下的不少元素都要为它腾出位置。但是现在我们要实现的列表是无序的，因此新元素相对于已有元素的位置并不重要。新的元素可以在任意位置。因此，将新元素放在最简便的位置是最合理的选择。这里我们首先考虑元素在列表头部插入。")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        temp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        temp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getNext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" temp\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("代码讲解：")]),t._v(" "),a("p",[t._v("要向列表中加入新的元素，我们首先要记起，列表的组成单位为节点，想要成功插入一个元素，首先我们要生成一个包含有此元素的节点，因此我们使用了Node(data)，生成了一个包含有要插入的元素 data 的节点，并将其赋值给temp，以此这个节点的新名字就叫 temp 了，temp 节点想要加入到列表的首部，首先我们要让 temp 节点找到头节点，这样子才有说服力，如果连自己想要加入的列表队伍的首部都不认识，就算你说你是头节点了，你的后边没有队伍，也不算是加入到列表队伍中啊，因此才有了 temp.getNext(self.head) ,你找到了你要加入的列表的首部以后，你就可以名正言顺的成为第一名了，因此通过 self.head = temp 这行代码，你被冠名了列表首部这个名字。")]),t._v(" "),a("h2",{attrs:{id:"length-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#length-方法"}},[t._v("#")]),t._v(" length 方法")]),t._v(" "),a("p",[t._v("我们向列表中添加多个节点之后，想要计算当前列表的长度，我们引入 length 方法进行处理。")]),t._v(" "),a("p",[t._v("我们的具体做法是用一个外部引用从列表的头节点开始访问。随着访问每一个节点，然后根据每个节点的指针指向去寻找下一个节点，以此类推最后计算出列表的长度。")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        current "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head\n        cnt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" current "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            cnt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cnt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            current "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getNext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" cnt\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("代码讲解：")]),t._v(" "),a("p",[t._v("我们使用了一个叫做 current 的外部引用，让它从列表的头部开始进行访问，然后又引入了一个计数器 cnt ，用来计算节点的个数，之后我们要做的便是，寻找 current 所指向的节点是否为空，如果指向的节点不为空，则说明该节点后面还有另外的节点存在，计数器加1，如此循环直到 current 指向的节点为空，这就在提醒我们，该节点后没有别的节点了，已经到了列表的尾部，因此我们将返回计数器的个数即可。")]),t._v(" "),a("h2",{attrs:{id:"search-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#search-方法"}},[t._v("#")]),t._v(" Search 方法")]),t._v(" "),a("p",[t._v("既然我们能对列表的长度进行计算，那么我们能不能查找列表中的元素呢？当然可以，实现的基本思路和 length 方法是非常相似的，我们只需要加入一个boolean类型的变量found 来表示我们是否找到了我们要查找的那个元素即可。")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("search")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        current  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head\n        found "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" current "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" found"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                found "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                current "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getNext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" found\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("与在 length 方法中相似，遍历从列表的头部开始。我们使用布尔型变量 found 来标记是否找到所需的元素。默认一开始我们没有找到元素，found的值为 False ，当我们对列表进行遍历时，我们使用 getData 方法来进行判断节点元素的获取，如果获取到的元素和我们要查找的元素 item 相同，我们就告诉 found ，我们找到了 item 这个元素，因此有 found = True，如果通过 getData 方法获取到的元素与 item 不同，那么我们就继续寻找下一个节点，直到节点的元素与 item 相同为止，如果我们找遍了整个列表都没有找到 item 元素，那我们最终就要返回 found 的默认值了，即为 False 。")]),t._v(" "),a("h2",{attrs:{id:"remove-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remove-方法"}},[t._v("#")]),t._v(" remove 方法")]),t._v(" "),a("p",[t._v("我们通过 remove 方法来进行列表元素的删除。要删除列表中的某个元素，我们是否要考虑先找到这个元素我们才能对其进行删除操作呢，因此其实 remove 方法和 search 方法也是十分相像的，我们首先要使用 search 方法找到我们要删除的元素，然后对其进行删除即可。但是删除具体要怎么删除呢？我们回到最初的那副图片。假设我要删除 21 这个节点，以我们正常的思维去想的话，直接去掉 21 不就好了么！但是这会出现一个问题，那便是，34 本身是指向 21 的，而 21 又指向了 56 ，唐突的把 21 删掉的话，34又要指向哪里呢？56也没有被指向的对象了，整个列表就从 21 这里断开了！我们不能因为一个元素的删除，就使得整个列表因此作废，因此我们要考虑，如果删除21的同时，又使得列表继续存在。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291553273.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291553185.png",alt:""}})]),t._v(" "),a("p",[t._v("这时，我们就可以考虑，如果我把 21 删掉了的话，34 和 56 岂不是前后邻居了？那这样的话，我直接让 34 无视 21 ，转而指向 56 不就可以了，又因为列表的长度是通过节点指向进行计算的嘛，只要没有节点指向 21 ，就相当于 21 不存在于列表中，从而达到了 21 被删除的效果。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291553883.png",alt:""}})]),t._v(" "),a("p",[t._v("利用代码来实现 remove 方法：")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        cur "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head\n        pre "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v("\n        found "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" found "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                found "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                pre "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur\n                cur "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getNext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" pre "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getNext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            pre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("setNext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("getNext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("p",[t._v("代码讲解：")]),t._v(" "),a("p",[t._v("先提出一个问题 ：为什么这段代码里引入了 pre 变量，它有什么特殊的用法么？")]),t._v(" "),a("p",[t._v("当我们使用循环进行元素遍历时，查找到要删除的节点时，cur 已经指向了要被删除的节点，还记得我们刚刚说的么？要删除这个节点，我们就要将这个节点前面的节点（它的前邻居）指向它后面的节点（它的后邻居），无视该节点，达到删除该节点的效果，而我们定义的节点类里面之后 getNext() 方法，没有任何关于查找前节点的方法，因此我们只通过 cur 这一个变量，是无法完成删除操作的。为了解决这一问题，我们引入了一个新的变量  pre ，cur 与之前一样，标记在链表中的当前位置。新的引用 pre 总是指向 cur上一次访问的节点。这样一来，当\ncur指向需要被移除的节点时，pre 正好指向要删除节点的“前邻居”，可以起到修改前节点指向的作用。")]),t._v(" "),a("p",[t._v("一旦搜索过程结束，就需要执行删除操作。而删除操作又包括有以下两种情况：删除头节点，删除其他节点。")]),t._v(" "),a("p",[t._v("如果被删除的元素正好是链表的头节点所包含的元素的话，那么 cur会指向头节点，而 pre 则依旧为它的默认值 None，在这种情况下，我们只需要修改 cur 即可，告诉它头节点变成了它后面那个节点，而不再是它本身就可以了，无需修改 pre 的值。")]),t._v(" "),a("p",[t._v("如果 pre 的值不是 None，则说明需要移除的节点在链表结构中的某个位置。在这种情况下，pre 指向了 next 引用需要被修改的节点。我们对 pre 进行 setNext() 方法来进行节点的指向修改操作，这将意味着，pre 的下一个节点将指向 cur的下一个节点，而不再是指向 cur 本身了，修了指向，从而起到了删除 cur 的效果。")]),t._v(" "),a("p",[t._v("如果是删除最后的节点，我们应该告诉倒数第二个节点，它的下一个节点为空，即倒数第二个节点的指向为None。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("恭喜你，又完成了一个数据结构类型的学习，在本次的文章中，我主要通过实现无序列表的方式来对链表的操作进行了详细的讲解，至于为什么不单独进行链表的讲解，最主要还是因为 python 底层的代码写的非常的强大，它将数组和链表结合在一起进而实现了列表，数组和链表其实就是列表实现的本质，没有这两个数据结构类型，列表便不会存在。我们平常的 python 使用中，一般都更常用列表，因此我们以列表为由，引出了它的本质之一，链表。")]),t._v(" "),a("blockquote",[a("p",[t._v("流沙团队推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！")]),t._v(" "),a("p",[t._v("方法一："),a("a",{attrs:{href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"}},[t._v("QQ"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("方法二：微信：Jiabcdefh")])])])}),[],!1,null,null,null);s.default=e.exports}}]);