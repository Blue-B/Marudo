document.getElementById('openUrls').addEventListener('click', function () {
    const urls = document.getElementById('urlInput').value.split(/\s+/); // 줄바꿈 또는 공백으로 분리
    urls.forEach(url => {
        if (url.trim()) { // 빈 줄 제외
            const fullUrl = url.startsWith('http') ? url : `http://${url}`; // URL이 http로 시작하지 않으면 추가
            window.open(fullUrl, '_blank'); // 새 창으로 열기
        }
    });
});
