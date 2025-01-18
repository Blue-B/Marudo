// script.js
document.getElementById('urlShortener').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const longUrl = document.getElementById('longUrl').value;
    
    try {
        const response = await fetch(`/shorten-url?longUrl=${encodeURIComponent(longUrl)}`);
        const data = await response.json();
        
        if (data.shortUrl) {
            document.getElementById('result').innerHTML = `<p>단축된 URL: <a href="${data.shortUrl}" target="_blank">${data.shortUrl}</a></p>`;
        } else {
            document.getElementById('result').innerHTML = `<p>오류: ${data.error}</p>`;
        }
    } catch (error) {
        document.getElementById('result').innerHTML = `<p>오류: ${error.message}</p>`;
    }
});