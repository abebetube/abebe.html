<!DOCTYPE html>
<html lang="he">
<head>
  <meta charset="UTF-8">
  <title>חיפוש YouTube ללא פרסומות</title>
  <style>
    body { font-family: sans-serif; direction: rtl; padding: 20px; }
    input { width: 300px; padding: 8px; font-size: 16px; }
    button { padding: 8px 12px; font-size: 16px; }
    iframe { margin-top: 20px; width: 560px; height: 315px; }
    #ad-warning { color: red; font-weight: bold; margin-top: 10px; }
  </style>
</head>
<body>
  <h1>חיפוש סרטון YouTube</h1>
  <input type="text" id="query" placeholder="הכנס מילות חיפוש">
  <button onclick="searchYouTube()">חפש</button>
  <div id="ad-warning"></div>
  <div id="player"></div>

  <script>
    const apiKey = 'AIzaSyCKWg2Po9gpQTx2-SSadDOouTB04jBFAAU'; 

    function searchYouTube() {
      const query = document.getElementById('query').value;
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=1&q=${encodeURIComponent(query)}&key=${apiKey}`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          const videoId = data.items[0].id.videoId;
          const title = data.items[0].snippet.title;

          // הצגת הסרטון
          document.getElementById('player').innerHTML = `
            <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" frameborder="0" allowfullscreen></iframe>
          `;

          // "זיהוי" פרסומת (באופן מלאכותי — אין דרך אמיתית דרך ה-API לזהות פרסומת)
          if (title.toLowerCase().includes('ad') || title.toLowerCase().includes('פרסומת')) {
            document.getElementById('ad-warning').innerText = 'פרסום מזוהה!';
          } else {
            document.getElementById('ad-warning').innerText = '';
          }
        })
        .catch(err => alert("שגיאה: " + err));
    }
  </script>
</body>
</html>
