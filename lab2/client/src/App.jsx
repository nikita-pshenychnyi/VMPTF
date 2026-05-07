import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [videos, setVideos] = useState([]);

  
  useEffect(() => {
    fetch('http://localhost:3000/api/videos')
      .then(response => response.json())
      .then(data => setVideos(data))
      .catch(error => console.error("Помилка завантаження:", error));
  }, []);

  return (
    <div className="app-container">
      <header>
        <h1>Лабораторна робота №2: Відеохостинг</h1>
      </header>
      
      <main className="video-grid">
        {videos.map(video => (
          <div key={video.id} className="video-card">
            <h3>{video.title}</h3>
            
            
            <iframe 
              width="100%" 
              height="250" 
              src={video.url} 
              title={video.title} 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              style={{ borderRadius: '8px', marginBottom: '10px' }}
            ></iframe>
            
            <p className="description">{video.description}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;