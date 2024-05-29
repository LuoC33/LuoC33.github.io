var posts=["2024/05/29/51蓝牙循迹超声波急停避障小车/","2024/05/10/python学习笔记---判断循环语法/","2024/05/05/OCS网课助手实现网课自动刷课/","2024/05/09/虚拟机安装W7-W10优化精简版/","2024/05/10/python学习笔记---变量与空操作/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };