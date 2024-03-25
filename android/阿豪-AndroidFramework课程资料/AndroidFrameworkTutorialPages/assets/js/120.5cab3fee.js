(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{545:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("本文摘自写给应用开发的 Android Framework 教程，完整教程请查阅 https://yuandaimaahao.github.io/AndroidFrameworkTutorialPages/")]),s._v(" "),t("h2",{attrs:{id:"什么是-io-多路复用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-io-多路复用"}},[s._v("#")]),s._v(" 什么是 IO 多路复用")]),s._v(" "),t("p",[s._v("在 Linux 中：")]),s._v(" "),t("ul",[t("li",[s._v("IO 就是对文件的读写操作")]),s._v(" "),t("li",[s._v("多路是指同时读写多个文件")]),s._v(" "),t("li",[s._v("复用是指使用一个程序处理多个文件的同时读写")])]),s._v(" "),t("p",[s._v("问题来了，为什么需要多路复用，为了快，要给每一个 fd 通道最快的感受，要让每一个 fd 觉得，你只在给他一个人跑腿。")]),s._v(" "),t("p",[s._v("为了更快的处理多路 IO，大体有两种方案：")]),s._v(" "),t("ul",[t("li",[s._v("一种方案是：一个 IO 请求（比如 write ）对应一个线程来处理，但是线程数多了，性能反倒会差。")]),s._v(" "),t("li",[s._v("另外一种方案是： IO 多路复用")])]),s._v(" "),t("p",[s._v("接下来，我们就来看看 IO 多路复用：")]),s._v(" "),t("p",[s._v("我不用任何其他系统调用，能否实现 IO 多路复用？")]),s._v(" "),t("p",[s._v("可以的，写个 for 循环，每次都尝试 IO 一下，读/写到了就处理，读/写不到就 sleep 下。")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    foreach fd数组 \n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        read"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 参数 */")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("默认情况下，我们没有加任何参数 create 出的 fd 是阻塞类型的。我们读数据的时候，如果数据还没准备好，是会需要等待的，当我们写数据的时候，如果还没准备好，默认也会卡住等待。所以，在上面伪代码中的 "),t("code",[s._v("read/write")]),s._v(" 是可能被直接卡死，而导致整个线程都得到不到运行。只需要把 fd 都设置成非阻塞模式。这样 "),t("code",[s._v("read/write")]),s._v(" 的时候，如果数据没准备好，返回 EAGIN 的错误即可，不会卡住线程，从而整个系统就运转起来了。")]),s._v(" "),t("p",[s._v("这个实现只是为了帮助我们理解 IO 多路复用，实际上，上面的实现在性能上有很大的缺陷。for 循环每次要定期 sleep 1s，这个会导致吞吐能力极差，因为很可能在刚好要 sleep 的时候，所有的 fd 都准备好 IO 数据，而这个时候却要硬生生的等待 1s。")]),s._v(" "),t("p",[s._v("IO 多路复用就是 1 个线程处理 多个 fd 的模式。我们的要求是：这个 “1” 就要尽可能的快，避免一切无效工作，要把所有的时间都用在处理句柄的 IO 上，不能有任何空转，sleep 的时间浪费。")]),s._v(" "),t("p",[s._v("为了实现上诉的功能，内核提供了 3 种系统调用 select，poll，epoll。")]),s._v(" "),t("p",[s._v("这 3 种系统调用都能够管理 fd 的可读可写事件，在所有 fd 不可读不可写无所事事的时候，可以阻塞线程，切走 cpu 。fd 可读写的时候，对应线程会被唤醒。")]),s._v(" "),t("p",[s._v("三者的差异主要是在性能上，epoll 的性能是强于 select 和 poll 的，我们接下来就来看看 epoll 的具体使用。")]),s._v(" "),t("h2",{attrs:{id:"epoll-的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#epoll-的使用"}},[s._v("#")]),s._v(" epoll 的使用")]),s._v(" "),t("p",[s._v("使用 epoll 需要以下三个系统调用：")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//头文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("<sys/epoll.h>")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("epoll_create")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" size"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("epoll_ctl")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" epfd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" op"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" fd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("epoll_event")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("event"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("epoll_wait")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" epfd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("epoll_event")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" events"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" maxevents"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" timeout"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ul",[t("li",[s._v("epollcreate 负责创建一个池子，一个监控和管理句柄 fd 的池子；")]),s._v(" "),t("li",[s._v("epollctl 负责管理这个池子里的 fd 增、删、改；")]),s._v(" "),t("li",[s._v("epollwait 就是负责打盹的，让出 CPU 调度，但是只要有“事”，立马会从这里唤醒；")])]),s._v(" "),t("p",[s._v("接下来我们看个示例程序：")]),s._v(" "),t("p",[s._v("使用 epoll_create 创建一个管理 fd 的池子")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("epollfd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("epoll_create")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("epollfd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("perror")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"epoll_create"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("exit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("EXIT_FAILURE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("这个池子对我们来说是黑盒，这个黑盒是用来装 fd 的，我们暂不纠结其中细节。我们拿到了一个 epollfd ，这个 epollfd 就能唯一代表这个 epoll 池。")]),s._v(" "),t("p",[s._v("然后，我们就要往这个 epoll 池里放 fd 了，这就要用到 epoll_ctl 了")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("epoll_ctl")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("epollfd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" EPOLL_CTL_ADD"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" fd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("ev"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("perror")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"epoll_ctl: listen_sock"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("exit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("EXIT_FAILURE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("我们就把 fd 放到这个池子里了，EPOLL_CTL_ADD 表明操作是增加 fd，最后一个参数是 epoll_event 结构体：")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("epoll_event")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  __uint32_t events"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Epoll 事件 */")]),s._v("\n  epoll_data_t data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 用户数据 */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("epoll_event 的第一个成员 events 用于指定我们监听的 fd 事件类型，常见的值有：")]),s._v(" "),t("ul",[t("li",[s._v("EPOLLIN：可读事件")]),s._v(" "),t("li",[s._v("EPOLLOUT：可写事件\n")])]),s._v(" "),t("p",[s._v("多个值可以通过或操作同时生效：")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("epoll_event event"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 同时监听可读可写事件")]),s._v("\nevent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("events "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" EPOLLIN "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" EPOLLOUT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),s._v(" "),t("p",[s._v("最后，我们需要调用 epoll_wait 进入休眠状态，可读或可写事件到来时，醒休眠中的程序从 epoll_wait 处被唤醒。")]),s._v(" "),t("p",[s._v("其使用方法，通常如下：")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("   \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// epollfd 是 epoll_create 的返回值")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// events 是一个 epoll_event 的数组，用于存储收到的多个事件")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// EPOLL_SIZE 用于设定最多监听多少个事件")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 最后一个参数 -1 用于指定阻塞时间上限，-1：表示调用将一直阻塞")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" count "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("epoll_wait")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("epollfd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" events"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" EPOLL_SIZE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("count "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("perror")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"epoll failed"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//处理可读或可写事件")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/393747291",target:"_blank",rel:"noopener noreferrer"}},[s._v("深入理解 Linux 的 epoll 机制"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://blog.csdn.net/JMW1407/article/details/107939268",target:"_blank",rel:"noopener noreferrer"}},[s._v("Linux下的I/O复用技术 之 epoll为什么更高效 ？"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://blog.csdn.net/JMW1407/article/details/107963618",target:"_blank",rel:"noopener noreferrer"}},[s._v("epoll如何使用（epoll_create、epoll_ctl、epoll_wait） 以及 LT/ET 使用过程解析"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1636224",target:"_blank",rel:"noopener noreferrer"}},[s._v("epoll LT 模式和 ET 模式详解"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"关于"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于"}},[s._v("#")]),s._v(" 关于")]),s._v(" "),t("p",[s._v("我叫阿豪，2015 年本科毕业于国防科学技术大学指挥信息系统专业，毕业后从事信息化装备的研发工作，主要研究方向是 Android Framework 与 Linux Kernel。")]),s._v(" "),t("p",[s._v("如果你对 Android Framework 感兴趣或者正在学习 Android Framework，可以关注我的微信公众号和抖音，我会持续分享我的学习经验，帮助正在学习的你少走一些弯路。学习过程中如果你有疑问或者你的经验想要分享给大家可以添加我的微信，我拉你进技术交流群。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zzh0838/MyImages@main/img/%E4%BA%8C%E7%BB%B4%E7%A0%81.jpg",alt:""}})])])}),[],!1,null,null,null);t.default=e.exports}}]);