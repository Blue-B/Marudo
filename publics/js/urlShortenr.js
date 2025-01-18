document.getElementById('urlShortener').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const longUrl = document.getElementById('longUrl').value;
    
    const script = document.createElement('script');
    script.src = `https://is.gd/create.php?format=json&callback=handleResponse&url=${encodeURIComponent(longUrl)}`;
    document.body.appendChild(script);

    // 글로벌 스코프에 함수 정의
    window.handleResponse = function(data) {
        if (data.shorturl) {
            document.getElementById('result').innerHTML = `<p>단축된 URL: <a href="${data.shorturl}" target="_blank">${data.shorturl}</a></p>`;
        } else {
            document.getElementById('result').innerHTML = `<p>오류: ${data.errormsg}</p>`;
        }
        // 콜백 함수 사용 후 삭제
        delete window.handleResponse;
        document.body.removeChild(script);
    };
});