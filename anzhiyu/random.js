var posts=["2024/05/05/OCS网课助手实现网课自动刷课/","2024/05/05/同款博客搭建教程/","2024/05/09/虚拟机安装W7-W10优化精简版/","2024/05/10/python学习笔记一基础语法/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };