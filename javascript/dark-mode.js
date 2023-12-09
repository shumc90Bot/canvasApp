// 获取切换按钮和 body 元素
const toggleButton = document.getElementById('toggleDarkMode');
const body = document.body;

// 添加点击事件监听器
toggleButton.addEventListener('click', () => {
    // 切换 body 上的类名
    body.classList.toggle('dark-mode');
});