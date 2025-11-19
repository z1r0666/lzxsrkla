// 倒计时
function updateCountdown() {
    const targetDate = new Date("2025-12-31"); // 设置目标日期为生日
    const currentDate = new Date();
    const timeDiff = targetDate - currentDate;
    const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    
    document.getElementById("countdown").innerText = `离生日还有 ${daysLeft} 天！`;
}
setInterval(updateCountdown, 1000); // 每秒更新倒计时

// 祝福语切换
function changeMessage() {
    const messages = [
        "愿你的每一天都充满快乐和笑声！",
        "祝你在新的一岁里更加智慧与勇敢！",
        "愿你梦想成真，心想事成！",
        "祝你每一个努力都开花结果，生活越来越精彩！"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("birthdayMessage").innerText = randomMessage;
}

// 播放生日祝福音效
function showWish() {
    const audio = document.getElementById("birthdayAudio");
    audio.play(); // 播放音频
    alert("祝你生日快乐，李紫菥！🎉");
}

// 粒子背景动画
function createParticles() {
    const numParticles = 50; // 粒子数量
    const particlesContainer = document.getElementById('particles');

    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.width = `${Math.random() * 10 + 5}px`; // 粒子大小随机
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * window.innerWidth}px`;
        particle.style.top = `${Math.random() * window.innerHeight}px`;

        // 给粒子添加运动方向
        const xOffset = Math.random() * 300 - 150; // X轴随机偏移
        const yOffset = Math.random() * 300 - 150; // Y轴随机偏移
        particle.style.setProperty('--x', `${xOffset}px`);
        particle.style.setProperty('--y', `${yOffset}px`);

        particlesContainer.appendChild(particle);
    }
}

createParticles(); // 创建粒子效果
