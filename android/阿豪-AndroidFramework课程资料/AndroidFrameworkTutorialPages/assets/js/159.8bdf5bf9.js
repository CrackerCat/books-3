(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{579:function(s,t,n){"use strict";n.r(t);var a=n(2),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("本文基于 AOSP android-10.0.0_r41 版本讲解，内核版本 android-goldfish-4.14-gchips")]),s._v(" "),t("p",[s._v("上一节我们分析了 init 进程的 selinux 初始化过程，最后会进入 second_stage 阶段：")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("SecondStageMain")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" argc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" argv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注册信号处理函数,出现一些严重错误时重启")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("REBOOT_BOOTLOADER_ON_PANIC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("InstallRebootSignalHandlers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//标准输入输出重定向到 /dev/null ")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("SetStdioToDevNull")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("argv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Init 阶段的 log 输出到 /dev/msg LOG PLOG")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("InitKernelLogging")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("argv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("LOG")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("INFO"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"init second stage started!"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("这部分和第一阶段类似：")]),s._v(" "),t("ul",[t("li",[s._v("注册信号处理函数,出现一些严重错误时重启系统")]),s._v(" "),t("li",[s._v("将标准输入输出重定向到 /dev/null")]),s._v(" "),t("li",[s._v("将 Init 阶段的 log （通过 LOG PLOG 宏）输出到 /dev/msg")])]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// oom_adj 表示进程的优先级，值越小，优先级越大")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置进程的优先级")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Set init and its forked children's oom_adj.")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("auto")]),s._v(" result "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("WriteFile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/proc/1/oom_score_adj"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-1000"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("result"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("LOG")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ERROR"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Unable to write -1000 to /proc/1/oom_score_adj: "')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" result"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("error")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("这里设置 init 进程的 oom_adj 值，oom_adj 表示进程的优先级，值越小，优先级越大。")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Secommp (SECure COMPuting) 是 Linux 内核 2.6.12 版本引入的安全模块，主要是用来限制某一进程可用的系统调用 (system call)，这里开启这个机制，了解即可")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Enable seccomp if global boot option was passed (otherwise it is enabled in zygote).")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("GlobalSeccomp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("Secommp (SECure COMPuting) 是 Linux 内核 2.6.12 版本引入的安全模块，主要是用来限制某一进程可用的系统调用 (system call)，这里开启这个机制，了解即可")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Set up a session keyring that all processes will have access to. It")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// will hold things like FBE encryption keys. No process should override")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// its session keyring.")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这里使用到的是内核提供给用户空间使用的 密钥保留服务 (key retention service)，它的主要意图是在 Linux 内核中缓存身份验证数据。远程文件系统和其他内核服务可以使用这个服务来管理密码学、身份验证标记、跨域用户映射和其他安全问题。它还使 Linux 内核能够快速访问所需的密钥，并可以用来将密钥操作（比如添加、更新和删除）委托给用户空间。")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 了解即可")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("keyctl_get_keyring_ID")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("KEY_SPEC_SESSION_KEYRING"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("这里使用到的是内核提供给用户空间使用的密钥保留服务 (key retention service)，它的主要意图是在 Linux 内核中缓存身份验证数据。远程文件系统和其他内核服务可以使用这个服务来管理密码学、身份验证标记、跨域用户映射和其他安全问题。它还使 Linux 内核能够快速访问所需的密钥，并可以用来将密钥操作（比如添加、更新和删除）委托给用户空间。了解即可")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//创建 /dev/.booting 文件，就是个标记，表示booting进行中")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Indicate that booting is in progress to background fw loaders, etc.")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("close")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/dev/.booting"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" O_WRONLY "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" O_CREAT "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" O_CLOEXEC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("创建 /dev/.booting 文件，就是个标记，表示 booting 进行中")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 属性系统初始化，基础组件篇已经讲过了")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("property_init")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("属性系统初始化，基础组件篇已经讲过了")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// If arguments are passed both on the command line and in DT,")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// properties set in DT always have priority over the command-line ones.")]),s._v("\n\n     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//uboot启动时可以给出启动参数： androidboot.android_dt_dir 指定一个路径")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 没有指定就是默认路径： /proc/device-tree/firmware/android/")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//一般这个路径中会设置一个 fstab， 用于指定 vendor 和其他分区的挂载点")]),s._v("\n\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 读取特定设备树信息，并设置 ro.boot. 开头的属性。")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("process_kernel_dt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 根据内核启动参数设置启动相关的属性：ro.boot 开头的属性")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将内核中 cmdline 中所有的有 = 号的参数，以及特殊的 androidboot.xx=xxx 的形式设置成相应的属性")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果是模拟器, bootargs 中包含： androidboot.hardware=ranchu 和 init=/init")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 就会设置ro.kernel.androidboot.hardware= ranchu  ro.kernel.init=/init 和ro.boot.hardware=ranchu, ")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果是真机， 只针对 androidboot.xx=xx 的参数设置， ")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如 androidboot.storagemedia=emmc, 就会有 ro.boot.storagemedia=emmc")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("process_kernel_cmdline")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Propagate the kernel variables to internal variables")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// used by init as well as the current required properties.")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将列表中特定属性的值设置到另外一个属性的值中去")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如将 ro.boot.serialno 的值设置到 ro.serialno 中去")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//一般 ro.boot 开头的属性很多都是来自内核的 cmdline")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("export_kernel_boot_props")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置 init 和 selinux 执行时间")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Make the time that init started available for bootstat to log.")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("property_set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ro.boottime.init"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getenv")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"INIT_STARTED_AT"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("property_set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ro.boottime.init.selinux"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getenv")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"INIT_SELINUX_TOOK"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置avb版本")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Set libavb version for Framework-only OTA match in Treble build.")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" avb_version "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getenv")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"INIT_AVB_VERSION"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("avb_version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("property_set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ro.boot.avb_version"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" avb_version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// See if need to load debug props to allow adb root, when the device is unlocked.")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" force_debuggable_env "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getenv")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"INIT_FORCE_DEBUGGABLE"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("force_debuggable_env "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AvbHandle")]),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("IsDeviceUnlocked")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        load_debug_prop "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),s._v("s "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" force_debuggable_env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Clean up our environment.")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("unsetenv")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"INIT_STARTED_AT"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("unsetenv")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"INIT_SELINUX_TOOK"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("unsetenv")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"INIT_AVB_VERSION"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("unsetenv")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"INIT_FORCE_DEBUGGABLE"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br")])]),t("p",[s._v("这里主要是设置一些属性和环境变量，了解一下")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Now set up SELinux for second stage.")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 第二阶段再次设置 Selinux 日志")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("SelinuxSetupKernelLogging")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 第二阶段再次设置安全上下文")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("SelabelInitialize")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//通过restorecon设置各个文件的默认安全上下文")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("SelinuxRestoreContext")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("Selinx 相关的配置，和第一阶段类似。")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 初始化epoll")]),s._v("\n    Epoll epoll"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("auto")]),s._v(" result "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" epoll"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Open")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("result"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("PLOG")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("FATAL"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" result"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("error")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 通过epoll监控子进程退出时发送SIGCHLD信号，并通过HandleSignalFd()进行处理")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("InstallSignalFdHandler")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("epoll"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("初始化一个 epoll，然后通过 epoll 监控子进程退出时发送 SIGCHLD 信号，并通过 HandleSignalFd() 进行处理")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 加载各个分区中的属性文件，如 prop.default, build.pro， default.prop，之前详细讲过属性文件")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("property_load_boot_defaults")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("load_debug_prop"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//卸载挂载点debug_ramdisk")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("UmountDebugRamdisk")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 主要是根据 ro.vndk.version 版本号，将/system/vendor_overlay/ 和 /product/vendor_overlay/ 挂载在 vendor 上")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fs_mgr_vendor_overlay_mount_all")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("export_oem_lock_status")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 开启属性服务")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("StartPropertyService")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("epoll"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    MountHandler "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount_handler")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("epoll"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 读取USB设备控制器的节点/sys/class/udc/xxx，如fe800000.dwc3，并设置属性sys.usb.controller=fe800000.dwc3")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set_usb_controller")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ......")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("p",[s._v("这里最核心的内容是调用 "),t("code",[s._v("StartPropertyService")]),s._v(" 开启属性服务.")]),s._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://blog.csdn.net/ldswfun/article/details/129291189?spm=1001.2014.3001.5501",target:"_blank",rel:"noopener noreferrer"}},[s._v("Android系统10 RK3399 init进程启动(四十九) init第二阶段分析"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://qiushao.net/2020/03/01/Android%E7%B3%BB%E7%BB%9F%E5%BC%80%E5%8F%91%E8%BF%9B%E9%98%B6/init.rc%E4%BB%8B%E7%BB%8D/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Android系统开发进阶-init.rc 详解"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);