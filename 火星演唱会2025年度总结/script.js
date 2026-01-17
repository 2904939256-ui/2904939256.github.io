// 火星演唱会2025年度报告 - JavaScript交互功能

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化演唱会选择功能
    initConcertSelector();
    
    // 初始化彩带收集功能
    initRibbonCollector();
    
    // 初始化歌曲选择功能
    initSongSelector();
    
    // 初始化留言板功能
    initMessageBoard();
    
    // 初始化照片上传功能
    initPhotoUploader();
    
    // 初始化图表
    initCharts();
    
    // 初始化滚动动画
    initScrollAnimations();
    
    console.log('火星演唱会2025年度报告加载完成！');
});

// 初始化演唱会选择功能
function initConcertSelector() {
    const venueBtns = document.querySelectorAll('.venue-btn');
    const attendanceCount = document.getElementById('attendanceCount');
    const selectedList = document.getElementById('selectedList');
    
    console.log('Found venue buttons:', venueBtns.length);
    
    // 从localStorage加载数据
    let selectedVenues = new Set(JSON.parse(localStorage.getItem('selectedVenues')) || []);
    
    // 为所有按钮添加cursor样式
    venueBtns.forEach(btn => {
        btn.style.cursor = 'pointer';
        btn.style.userSelect = 'none';
        btn.style.position = 'relative';
        btn.style.zIndex = '1';
        btn.style.pointerEvents = 'auto';
    });
    
    // 初始化UI
    venueBtns.forEach(btn => {
        const venue = btn.dataset.venue;
        if (selectedVenues.has(venue)) {
            btn.classList.add('selected');
            const listItem = document.createElement('li');
            listItem.textContent = venue;
            listItem.dataset.venue = venue;
            selectedList.appendChild(listItem);
        }
    });
    
    // 更新计数
    attendanceCount.textContent = selectedVenues.size;
    
    // 点击事件处理函数
    venueBtns.forEach((btn, index) => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            console.log('Button clicked:', index, this.dataset.venue);
            
            const venue = this.dataset.venue;
            
            // 切换选中状态
            this.classList.toggle('selected');
            
            if (this.classList.contains('selected')) {
                // 添加到已选择集合
                selectedVenues.add(venue);
                // 添加到已选择列表
                const listItem = document.createElement('li');
                listItem.textContent = venue;
                listItem.dataset.venue = venue;
                selectedList.appendChild(listItem);
            } else {
                // 从已选择集合中移除
                selectedVenues.delete(venue);
                // 从已选择列表中移除
                const listItem = selectedList.querySelector(`[data-venue="${venue}"]`);
                if (listItem) {
                    listItem.remove();
                }
            }
            
            // 更新计数
            attendanceCount.textContent = selectedVenues.size;
            
            // 保存到localStorage
            localStorage.setItem('selectedVenues', JSON.stringify(Array.from(selectedVenues)));
        });
        
        // 添加鼠标事件，验证按钮是否可交互
        btn.addEventListener('mouseenter', function() {
            console.log('Mouse enter button:', index);
        });
    });
}

// 初始化彩带收集功能
function initRibbonCollector() {
    const ribbonBtns = document.querySelectorAll('.ribbon-btn');
    const ribbonCount = document.getElementById('ribbonCount');
    const ribbonList = document.getElementById('ribbonList');
    
    console.log('Found ribbon buttons:', ribbonBtns.length);
    
    // 从localStorage加载数据
    let selectedRibbons = new Set(JSON.parse(localStorage.getItem('selectedRibbons')) || []);
    
    // 为所有按钮添加cursor样式
    ribbonBtns.forEach(btn => {
        btn.style.cursor = 'pointer';
        btn.style.userSelect = 'none';
        btn.style.position = 'relative';
        btn.style.zIndex = '1';
        btn.style.pointerEvents = 'auto';
    });
    
    // 初始化UI
    ribbonBtns.forEach(btn => {
        const ribbon = btn.dataset.ribbon;
        if (selectedRibbons.has(ribbon)) {
            btn.classList.add('selected');
            const listItem = document.createElement('li');
            listItem.textContent = ribbon;
            listItem.dataset.ribbon = ribbon;
            ribbonList.appendChild(listItem);
        }
    });
    
    // 更新计数
    ribbonCount.textContent = selectedRibbons.size;
    
    // 点击事件处理函数
    ribbonBtns.forEach((btn, index) => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            console.log('Ribbon button clicked:', index, this.dataset.ribbon);
            
            const ribbon = this.dataset.ribbon;
            
            // 切换选中状态
            this.classList.toggle('selected');
            
            if (this.classList.contains('selected')) {
                // 添加到已选择集合
                selectedRibbons.add(ribbon);
                // 添加到已选择列表
                const listItem = document.createElement('li');
                listItem.textContent = ribbon;
                listItem.dataset.ribbon = ribbon;
                ribbonList.appendChild(listItem);
            } else {
                // 从已选择集合中移除
                selectedRibbons.delete(ribbon);
                // 从已选择列表中移除
                const listItem = ribbonList.querySelector(`[data-ribbon="${ribbon}"]`);
                if (listItem) {
                    listItem.remove();
                }
            }
            
            // 更新计数
            ribbonCount.textContent = selectedRibbons.size;
            
            // 保存到localStorage
            localStorage.setItem('selectedRibbons', JSON.stringify(Array.from(selectedRibbons)));
        });
        
        // 添加鼠标事件，验证按钮是否可交互
        btn.addEventListener('mouseenter', function() {
            console.log('Mouse enter ribbon button:', index);
        });
    });
}

// 初始化歌曲选择功能
function initSongSelector() {
    const songBtns = document.querySelectorAll('.song-btn');
    const songCount = document.getElementById('songCount');
    
    console.log('Found song buttons:', songBtns.length);
    
    // 从localStorage加载数据
    let selectedSongs = new Set(JSON.parse(localStorage.getItem('selectedSongs')) || []);
    
    // 为所有按钮添加cursor样式
    songBtns.forEach(btn => {
        btn.style.cursor = 'pointer';
        btn.style.userSelect = 'none';
        btn.style.position = 'relative';
        btn.style.zIndex = '1';
        btn.style.pointerEvents = 'auto';
    });
    
    // 初始化UI
    songBtns.forEach(btn => {
        const song = btn.dataset.song;
        if (selectedSongs.has(song)) {
            btn.classList.add('selected');
        }
    });
    
    // 更新计数
    songCount.textContent = selectedSongs.size;
    
    // 点击事件处理函数
    songBtns.forEach((btn, index) => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            console.log('Song button clicked:', index, this.dataset.song);
            
            const song = this.dataset.song;
            
            // 切换选中状态
            this.classList.toggle('selected');
            
            if (this.classList.contains('selected')) {
                // 添加到已选择集合
                selectedSongs.add(song);
            } else {
                // 从已选择集合中移除
                selectedSongs.delete(song);
            }
            
            // 更新计数
            songCount.textContent = selectedSongs.size;
            
            // 保存到localStorage
            localStorage.setItem('selectedSongs', JSON.stringify(Array.from(selectedSongs)));
        });
        
        // 添加鼠标事件，验证按钮是否可交互
        btn.addEventListener('mouseenter', function() {
            console.log('Mouse enter song button:', index);
        });
    });
}

// 初始化图表函数 - 添加元素存在性检查避免空指针错误
function initCharts() {
    // 城市分布图表 - 检查元素是否存在
    const cityChart = document.getElementById('cityChart');
    if (cityChart) {
        const cityCtx = cityChart.getContext('2d');
        new Chart(cityCtx, {
        type: 'bar',
        data: {
            labels: ['北京', '上海', '广州', '深圳', '成都', '杭州', '武汉'],
            datasets: [{
                label: '演唱会场次',
                data: [5, 4, 3, 3, 2, 2, 2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                    'rgba(255, 205, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(201, 203, 207, 0.7)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: 'white'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: 'white'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'white'
                    }
                },
                title: {
                    display: true,
                    text: '各城市演唱会场次分布',
                    color: 'white',
                    font: {
                        size: 16
                    }
                }
            }
        }
    });
    }
    
    // 观众年龄分布图表 - 检查元素是否存在
    const ageChart = document.getElementById('ageChart');
    if (ageChart) {
        const ageCtx = ageChart.getContext('2d');
        new Chart(ageCtx, {
        type: 'pie',
        data: {
            labels: ['18-24岁', '25-34岁', '35-44岁', '45岁以上'],
            datasets: [{
                label: '观众年龄分布',
                data: [45, 35, 15, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                    'rgba(255, 205, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: 'white'
                    }
                },
                title: {
                    display: true,
                    text: '观众年龄分布',
                    color: 'white',
                    font: {
                        size: 16
                    }
                }
            }
        }
    });
    }
    
    // 票房收入图表 - 检查元素是否存在
    const salesChart = document.getElementById('salesChart');
    if (salesChart) {
        const salesCtx = salesChart.getContext('2d');
        new Chart(salesCtx, {
        type: 'line',
        data: {
            labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            datasets: [{
                label: '票房收入（万元）',
                data: [800, 1200, 900, 1500, 2000, 2500, 3000, 2800, 3200, 2600, 3500, 4000],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: 'white'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: 'white'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'white'
                    }
                },
                title: {
                    display: true,
                    text: '2025年票房收入趋势',
                    color: 'white',
                    font: {
                        size: 16
                    }
                }
            }
        }
    });
    }
}

// 初始化留言板功能
function initMessageBoard() {
    const messageInput = document.getElementById('messageInput');
    const sendMessageBtn = document.getElementById('sendMessageBtn');
    const messagesList = document.getElementById('messagesList');
    const myMessagesList = document.getElementById('myMessagesList');
    const noMessages = document.getElementById('noMessages');
    
    // 弹幕数据
    let messages = [];
    // 当前播放索引
    let currentIndex = 0;
    // 弹幕播放间隔（毫秒）
    const interval = 2000;
    // 最大弹幕数量
    const maxMessages = 50;
    // 跟踪当前正在显示的弹幕ID
    const displayedMessageIds = new Set();
    
    // 初始化
    function init() {
        // 加载本地存储的留言
        loadMessages();
        
        // 发送按钮点击事件
        sendMessageBtn.addEventListener('click', function() {
            sendMessage();
        });
        
        // 回车键发送留言
        messageInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });
        
        // 启动弹幕循环
        startMessageLoop();
        
        // 显示我的留言
        displayMyMessages();
    }
    
    // 发送留言函数
    function sendMessage() {
        const messageContent = messageInput.value.trim();
        if (messageContent === '') {
            alert('请输入留言内容');
            return;
        }
        
        // 创建留言对象
        const message = {
            id: generateUniqueId(),
            content: messageContent,
            timestamp: new Date().toLocaleString('zh-CN')
        };
        
        // 保存到本地存储
        saveMessage(message);
        
        // 添加到弹幕列表
        messages.push(message);
        
        // 限制弹幕数量
        if (messages.length > maxMessages) {
            messages.shift();
        }
        
        // 立即显示新弹幕
        displayMessage(message);
        
        // 更新我的留言列表
        displayMyMessages();
        
        // 清空输入框
        messageInput.value = '';
    }
    
    // 生成唯一ID
    function generateUniqueId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    
    // 保存留言到本地存储
    function saveMessage(message) {
        let savedMessages = JSON.parse(localStorage.getItem('marsMessages')) || [];
        savedMessages.push(message);
        
        // 限制保存的消息数量
        if (savedMessages.length > maxMessages) {
            savedMessages.shift();
        }
        
        localStorage.setItem('marsMessages', JSON.stringify(savedMessages));
    }
    
    // 从本地存储加载留言
    function loadMessages() {
        messages = JSON.parse(localStorage.getItem('marsMessages')) || [];
        
        // 确保所有留言都有id字段
        messages = messages.map(function(message) {
            if (!message.id) {
                message.id = generateUniqueId();
            }
            return message;
        });
        
        // 保存更新后的留言列表
        localStorage.setItem('marsMessages', JSON.stringify(messages));
    }
    
    // 显示弹幕
    function displayMessage(message) {
        // 检查该留言是否已经在显示中
        if (displayedMessageIds.has(message.id)) {
            return; // 如果已经在显示，跳过
        }
        
        const messageItem = document.createElement('div');
        messageItem.className = 'message-item';
        
        const messageContent = document.createElement('span');
        messageContent.className = 'message-content';
        messageContent.textContent = message.content;
        
        const messageTime = document.createElement('span');
        messageTime.className = 'message-time';
        messageTime.textContent = `(${message.timestamp})`;
        
        messageItem.appendChild(messageContent);
        messageItem.appendChild(messageTime);
        
        // 设置随机轨道
        const track = Math.floor(Math.random() * 5);
        const trackPositions = [10, 30, 50, 70, 90]; // 不同轨道的顶部位置百分比
        messageItem.style.top = trackPositions[track] + '%';
        
        // 添加强度随机的动画延迟
        const delay = Math.random() * 2;
        messageItem.style.animationDelay = delay + 's';
        
        // 设置唯一ID
        messageItem.id = 'message-' + message.id;
        
        // 添加到显示集合
        displayedMessageIds.add(message.id);
        
        messagesList.appendChild(messageItem);
        
        // 动画结束后移除弹幕
        messageItem.addEventListener('animationend', function() {
            // 从显示集合中移除
            displayedMessageIds.delete(message.id);
            
            if (this.parentNode) {
                this.parentNode.removeChild(this);
            }
        });
    }
    
    // 启动弹幕循环
    let messageLoopInterval;
    
    function startMessageLoop() {
        // 清除现有定时器
        if (messageLoopInterval) {
            clearInterval(messageLoopInterval);
        }
        
        // 重置索引
        currentIndex = 0;
        
        messageLoopInterval = setInterval(function() {
            if (messages.length === 0) return;
            
            // 寻找一条不在显示中的留言
            let attempts = 0;
            let foundMessage = false;
            
            while (attempts < messages.length && !foundMessage) {
                // 确保索引在有效范围内
                if (currentIndex >= messages.length) {
                    currentIndex = 0;
                }
                
                const message = messages[currentIndex];
                
                // 如果这条留言不在显示中，就显示它
                if (!displayedMessageIds.has(message.id)) {
                    displayMessage(message);
                    foundMessage = true;
                }
                
                // 更新索引，无论是否显示了留言
                currentIndex++;
                attempts++;
            }
        }, interval);
    }
    
    // 显示我的留言列表
    function displayMyMessages() {
        // 清空现有列表
        myMessagesList.innerHTML = '';
        
        if (messages.length === 0) {
            // 显示无留言提示
            noMessages.style.display = 'block';
            return;
        }
        
        // 隐藏无留言提示
        noMessages.style.display = 'none';
        
        // 倒序显示留言（最新的在最上面）
        const reversedMessages = [...messages].reverse();
        
        reversedMessages.forEach(function(message) {
            const messageItem = document.createElement('div');
            messageItem.className = 'my-message-item';
            
            const messageContent = document.createElement('div');
            messageContent.className = 'my-message-content';
            messageContent.textContent = message.content;
            
            const messageInfo = document.createElement('div');
            messageInfo.className = 'my-message-info';
            
            const messageTimestamp = document.createElement('span');
            messageTimestamp.className = 'my-message-timestamp';
            messageTimestamp.textContent = message.timestamp;
            
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-message-btn';
            deleteBtn.textContent = '删除';
            deleteBtn.dataset.id = message.id;
            
            // 添加删除事件
            deleteBtn.addEventListener('click', function() {
                const messageId = this.dataset.id;
                deleteMessage(messageId);
            });
            
            messageInfo.appendChild(messageTimestamp);
            messageInfo.appendChild(deleteBtn);
            
            messageItem.appendChild(messageContent);
            messageItem.appendChild(messageInfo);
            
            myMessagesList.appendChild(messageItem);
        });
    }
    
    // 删除留言
    function deleteMessage(messageId) {
        if (confirm('确定要删除这条留言吗？')) {
            // 从数组中删除
            messages = messages.filter(function(message) {
                return message.id !== messageId;
            });
            
            // 保存到本地存储
            localStorage.setItem('marsMessages', JSON.stringify(messages));
            
            // 更新我的留言列表
            displayMyMessages();
            
            // 从显示集合中移除
            displayedMessageIds.delete(messageId);
            
            // 移除可能正在显示的弹幕
            const activeMessage = document.getElementById('message-' + messageId);
            if (activeMessage) {
                activeMessage.remove();
            }
            
            // 重启弹幕循环，确保使用最新的留言列表
            startMessageLoop();
        }
    }
    
    // 初始化
    init();
}

// 初始化照片上传功能
function initPhotoUploader() {
    const 照片Upload = document.getElementById('照片Upload');
    const 照片sContainer = document.getElementById('照片sContainer');
    
    // 从localStorage加载照片
    let uploadedPhotos = JSON.parse(localStorage.getItem('uploadedPhotos')) || [];
    
    // 初始化显示已上传的照片
    function loadPhotos() {
        照片sContainer.innerHTML = '';
        
        uploadedPhotos.forEach((照片Data, index) => {
            // 创建照片容器
            const 照片Wrapper = document.createElement('div');
            照片Wrapper.className = '照片-wrapper';
            照片Wrapper.dataset.index = index;
            
            // 创建图片元素
            const img = document.createElement('img');
            img.src = 照片Data;
            img.className = 'uploaded-照片';
            img.alt = '用户上传的火星瞬间';
            
            // 创建删除按钮
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-照片-btn';
            deleteBtn.innerHTML = '&times;';
            deleteBtn.title = '删除照片';
            
            // 添加删除事件监听器
            deleteBtn.addEventListener('click', function() {
                if (confirm('是否确定删除？')) {
                    // 从数组中删除
                    const index = parseInt(照片Wrapper.dataset.index);
                    uploadedPhotos.splice(index, 1);
                    
                    // 保存到localStorage
                    localStorage.setItem('uploadedPhotos', JSON.stringify(uploadedPhotos));
                    
                    // 重新加载照片
                    loadPhotos();
                }
            });
            
            // 添加点击事件监听器，显示大图
            img.addEventListener('click', function() {
                showModal(照片Data, '火星瞬间 ' + (index + 1));
            });
            
            // 组装照片容器
            照片Wrapper.appendChild(img);
            照片Wrapper.appendChild(deleteBtn);
            
            // 添加到照片容器
            照片sContainer.appendChild(照片Wrapper);
        });
    }
    
    // 加载已保存的照片
    loadPhotos();
    
    // 监听文件选择变化事件
    照片Upload.addEventListener('change', function(e) {
        const files = e.target.files;
        
        // 遍历所有选中的文件
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            
            // 验证文件类型
            if (!file.type.startsWith('image/')) {
                alert('请选择图片文件');
                continue;
            }
            
            // 创建文件读取器
            const reader = new FileReader();
            
            // 文件读取完成后处理
            reader.onload = function(e) {
                // 添加到照片数组
                uploadedPhotos.push(e.target.result);
                
                // 保存到localStorage
                localStorage.setItem('uploadedPhotos', JSON.stringify(uploadedPhotos));
                
                // 重新加载照片
                loadPhotos();
            };
            
            // 读取文件
            reader.readAsDataURL(file);
        }
        
        // 清空文件选择，允许重新选择相同的文件
        e.target.value = '';
    });
}

// 初始化滚动动画函数
function initScrollAnimations() {
    const sections = document.querySelectorAll('.section');
    
    // 监听滚动事件
    window.addEventListener('scroll', function() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            // 当元素进入视口时添加动画类
            if (sectionTop < windowHeight * 0.8) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    });
    
    // 初始化所有区块的初始状态
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    // 手动触发一次滚动事件，确保可见区域的元素显示
    window.dispatchEvent(new Event('scroll'));
}

// 平滑滚动功能
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// 添加鼠标跟随效果（可选）
function initMouseFollow() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
}

// 添加点击波纹效果
function initRippleEffect() {
    const buttons = document.querySelectorAll('.btn, .nav-item, .gallery-item');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.className = 'ripple';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// 可选功能：数字动画效果
function animateNumbers() {
    const numbers = document.querySelectorAll('.stat-number');
    
    numbers.forEach(number => {
        const target = parseInt(number.textContent.replace(/[^0-9]/g, ''));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (number.textContent.includes('+')) {
                number.textContent = Math.floor(current) + '+';
            } else {
                number.textContent = Math.floor(current);
            }
        }, 16);
    });
}

// 初始化年度报告功能
function initAnnualReport() {
    // 获取DOM元素
    const concertCountEl = document.getElementById('reportConcertCount');
    const hoursSpentEl = document.getElementById('reportHoursSpent');
    const ribbonCountEl = document.getElementById('reportRibbonCount');
    const songsCountEl = document.getElementById('reportSongsCount');
    const userMessageEl = document.getElementById('userMessage');
    const backgroundPhotosEl = document.querySelector('.background-照片s');
    
    // 从localStorage获取数据
    const selectedVenues = JSON.parse(localStorage.getItem('selectedVenues')) || [];
    const selectedRibbons = JSON.parse(localStorage.getItem('selectedRibbons')) || [];
    const selectedSongs = JSON.parse(localStorage.getItem('selectedSongs')) || [];
    const userMessages = JSON.parse(localStorage.getItem('marsMessages')) || [];
    const uploadedPhotos = JSON.parse(localStorage.getItem('uploadedPhotos')) || [];
    
    // 1. 统计参与演唱会次数
    const concertCount = selectedVenues.length;
    concertCountEl.textContent = concertCount;
    
    // 2. 计算在火星度过的小时数
    // 7小时演唱会的列表
    const sevenHourConcerts = [
        '2025.5.2 佛山 佛山千岛湖音乐秀场',
        '2025.5.3 佛山 佛山千岛湖音乐秀场',
        '2025.5.4 佛山 佛山千岛湖音乐秀场',
        '2025.10.4 南京 南京汤山音乐谷',
        '2025.10.5 南京 南京汤山音乐谷',
        '2025.10.6 南京 南京汤山音乐谷',
        '2025.11.28 海口 海南长影奇幻乐园',
        '2025.11.29 海口 海南长影奇幻乐园',
        '2025.11.30 海口 海南长影奇幻乐园'
    ];
    
    let hoursSpent = 0;
    selectedVenues.forEach(venue => {
        if (sevenHourConcerts.includes(venue)) {
            hoursSpent += 7;
        } else {
            hoursSpent += 3;
        }
    });
    hoursSpentEl.textContent = hoursSpent;
    
    // 3. 统计获得的彩带数量
    ribbonCountEl.textContent = selectedRibbons.length;
    
    // 4. 统计听过的歌曲数量
    songsCountEl.textContent = selectedSongs.length;
    
    // 5. 显示用户想对华晨宇/火星说的话
    if (userMessages.length > 0) {
        // 将多条留言合并，用换行符分隔
        const messagesText = userMessages.map(message => message.content).join('\n');
        userMessageEl.textContent = messagesText;
    } else {
        userMessageEl.textContent = '暂无留言';
    }
    
    // 6. 设置背景照片轮播
    if (uploadedPhotos.length > 0 && backgroundPhotosEl) {
        // 清空现有图片
        backgroundPhotosEl.innerHTML = '';
        
        // 创建图片元素
        uploadedPhotos.forEach(照片Data => {
            const img = document.createElement('img');
            img.src = 照片Data;
            img.alt = '用户上传的火星瞬间';
            backgroundPhotosEl.appendChild(img);
        });
        
        // 开始轮播
        let currentPhotoIndex = 0;
        const 照片s = backgroundPhotosEl.querySelectorAll('img');
        
        // 显示第一张照片
        if (照片s.length > 0) {
            照片s[currentPhotoIndex].classList.add('active');
        }
        
        // 轮播定时器
        setInterval(() => {
            // 隐藏当前照片
            if (照片s[currentPhotoIndex]) {
                照片s[currentPhotoIndex].classList.remove('active');
            }
            
            // 计算下一张照片索引
            currentPhotoIndex = (currentPhotoIndex + 1) % 照片s.length;
            
            // 显示下一张照片
            if (照片s[currentPhotoIndex]) {
                照片s[currentPhotoIndex].classList.add('active');
            }
        }, 10000); // 每张照片显示10秒
    }
    
    // 7. 显示年度瞬间照片
    const annualPhotosEl = document.getElementById('annualPhotos');
    if (annualPhotosEl) {
        if (uploadedPhotos.length > 0) {
            annualPhotosEl.innerHTML = '';
            
            // 创建照片容器
            const 照片sContainer = document.createElement('div');
            照片sContainer.className = '照片s-container';
            
            // 添加所有照片并为每个照片添加点击事件监听器
            uploadedPhotos.forEach((照片Data, index) => {
                const 照片Wrapper = document.createElement('div');
                照片Wrapper.className = '照片-wrapper';
                
                const img = document.createElement('img');
                img.src = 照片Data;
                img.alt = '年度瞬间 ' + (index + 1);
                
                // 添加点击事件监听器
                img.addEventListener('click', function() {
                    showModal(照片Data, '年度瞬间 ' + (index + 1));
                });
                
                照片Wrapper.appendChild(img);
                照片sContainer.appendChild(照片Wrapper);
            });
            
            annualPhotosEl.appendChild(照片sContainer);
        } else {
            annualPhotosEl.innerHTML = '<p>暂无照片</p>';
        }
    }
}

// 初始化模态框事件监听器
function initModalListeners() {
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    
    // 点击关闭按钮
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // 点击模态框背景关闭
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // 按ESC键关闭
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
}

// 创建自定义输入对话框
function createCustomPrompt(message, defaultValue, callback) {
    // 创建对话框HTML
    const promptHTML = `
        <div class="custom-prompt-overlay">
            <div class="custom-prompt-content">
                <div class="custom-prompt-header">
                    <h3>请输入信息</h3>
                </div>
                <div class="custom-prompt-body">
                    <p>${message}</p>
                    <input type="text" id="customPromptInput" value="${defaultValue}" class="custom-prompt-input">
                </div>
                <div class="custom-prompt-footer">
                    <button id="customPromptCancel" class="custom-prompt-btn cancel-btn">取消</button>
                    <button id="customPromptOk" class="custom-prompt-btn ok-btn">确定</button>
                </div>
            </div>
        </div>
    `;
    
    // 创建对话框容器
    const promptContainer = document.createElement('div');
    promptContainer.id = 'customPrompt';
    promptContainer.innerHTML = promptHTML;
    
    // 添加到页面
    document.body.appendChild(promptContainer);
    
    // 获取元素
    const input = promptContainer.querySelector('#customPromptInput');
    const okBtn = promptContainer.querySelector('#customPromptOk');
    const cancelBtn = promptContainer.querySelector('#customPromptCancel');
    const overlay = promptContainer.querySelector('.custom-prompt-overlay');
    
    // 聚焦输入框
    input.focus();
    input.select();
    
    // 绑定事件
    const closeDialog = function(result) {
        document.body.removeChild(promptContainer);
        callback(result);
    };
    
    okBtn.addEventListener('click', function() {
        closeDialog(input.value.trim());
    });
    
    cancelBtn.addEventListener('click', function() {
        closeDialog(null);
    });
    
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closeDialog(null);
        }
    });
    
    // 按Enter键确认，按Esc键取消
    document.addEventListener('keydown', function handleKeyDown(e) {
        if (e.key === 'Enter') {
            closeDialog(input.value.trim());
            document.removeEventListener('keydown', handleKeyDown);
        } else if (e.key === 'Escape') {
            closeDialog(null);
            document.removeEventListener('keydown', handleKeyDown);
        }
    });
}

// 初始化生成图片功能
function initImageGenerator() {
    const generateImageBtn = document.getElementById('generateImageBtn');
    if (generateImageBtn) {
        generateImageBtn.addEventListener('click', function() {
            // 使用自定义对话框询问用户称呼
            createCustomPrompt('希望称呼你为（）', '火星人', function(userName) {
                if (userName !== null && userName !== '') {
                    // 生成报告预览
                    generateReportPreview(userName);
                }
            });
        });
    }
}

// 生成报告预览
function generateReportPreview(userName) {
    // 获取报告数据
    const concertCount = document.getElementById('reportConcertCount').textContent;
    const hoursSpent = document.getElementById('reportHoursSpent').textContent;
    const ribbonCount = document.getElementById('reportRibbonCount').textContent;
    const songsCount = document.getElementById('reportSongsCount').textContent;
    const userMessage = document.getElementById('userMessage').textContent;
    
    // 获取上传的照片
    const uploadedPhotos = JSON.parse(localStorage.getItem('uploadedPhotos')) || [];
    
    // 创建照片HTML
    let 照片sHTML = '';
    if (uploadedPhotos.length > 0) {
        照片sHTML = `
            <div class="preview-照片s">
                <h3>你在火星的年度瞬间：</h3>
                <div class="preview-照片s-grid">
        `;
        
        uploadedPhotos.forEach((照片Data, index) => {
            照片sHTML += `
                <div class="preview-照片-item">
                    <img src="${照片Data}" alt="年度瞬间 ${index + 1}" class="preview-照片">
                </div>
            `;
        });
        
        照片sHTML += `
                </div>
            </div>
        `;
    }
    
    // 创建简单的报告预览HTML
    const reportHTML = `
        <div class="report-preview-overlay">
            <div class="report-preview-content">
                <div class="report-preview-header">
                    <h2>属于${userName}的火星2025年度报告</h2>
                    <button class="close-preview-btn">×</button>
                </div>
                <div class="report-preview-body">
                    <div class="preview-item">
                        <span class="preview-label">本年度你共参与</span>
                        <strong class="preview-value">${concertCount}</strong>
                        <span class="preview-label">次火星演唱会</span>
                    </div>
                    <div class="preview-item">
                        <span class="preview-label">今年你在火星度过</span>
                        <strong class="preview-value">${hoursSpent}</strong>
                        <span class="preview-label">个小时</span>
                    </div>
                    <div class="preview-item">
                        <span class="preview-label">你今年获得了</span>
                        <strong class="preview-value">${ribbonCount}</strong>
                        <span class="preview-label">条彩带</span>
                    </div>
                    <div class="preview-item">
                        <span class="preview-label">你今年在火星听过</span>
                        <strong class="preview-value">${songsCount}</strong>
                        <span class="preview-label">首歌</span>
                    </div>
                    <div class="preview-message">
                        <strong class="preview-message-title">你想对华晨宇/火星说：</strong>
                        <p class="preview-message-content">"${userMessage}"</p>
                    </div>
                    ${照片sHTML}
                </div>
                <div class="report-preview-footer">
                    <p class="preview-tip">请使用截图功能保存这份报告：</p>
                    <ul class="preview-tip-list">
                        <li>Windows：按 PrtScn 键</li>
                        <li>Mac：按 Command+Shift+3 键</li>
                        <li>手机：使用系统截图功能</li>
                    </ul>
                    <p class="preview-copyright">&copy; 2025 火星演唱会</p>
                </div>
            </div>
        </div>
    `;
    
    // 创建预览容器
    const previewContainer = document.createElement('div');
    previewContainer.id = 'reportPreview';
    previewContainer.innerHTML = reportHTML;
    
    // 添加到页面
    document.body.appendChild(previewContainer);
    
    // 绑定关闭事件
    const closeBtn = previewContainer.querySelector('.close-preview-btn');
    const overlay = previewContainer.querySelector('.report-preview-overlay');
    
    closeBtn.addEventListener('click', function() {
        document.body.removeChild(previewContainer);
    });
    
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            document.body.removeChild(previewContainer);
        }
    });
}



// 显示图片模态框
function showModal(照片Data, caption) {
    const modal = document.getElementById('modal');
    const modalImage = document.querySelector('.modal-image');
    const modalCaption = document.querySelector('.modal-caption');
    
    // 设置图片和标题
    modalImage.style.backgroundImage = `url('${照片Data}')`;
    modalCaption.textContent = caption;
    
    // 显示模态框
    modal.style.display = 'block';
}

// 在DOM加载完成后初始化年度报告功能
// 因为其他功能已经在DOMContentLoaded事件中初始化了
window.addEventListener('load', function() {
    // 初始化模态框事件监听器
    initModalListeners();
    
    // 初始化生成图片功能
    initImageGenerator();
    
    // 初始化年度报告功能
    try {
        initAnnualReport();
        console.log('初始化年度报告功能完成');
    } catch (error) {
        console.error('初始化年度报告功能失败:', error);
    }
    
    // 初始化数字动画
    try {
        animateNumbers();
        console.log('初始化数字动画完成');
    } catch (error) {
        console.error('初始化数字动画失败:', error);
    }
});