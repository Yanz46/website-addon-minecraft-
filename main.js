const uploadForm = document.getElementById('upload-form');
const videoInput = document.getElementById('video-input');
const uploadButton = document.getElementById('upload-button');
const videoContainer = document.getElementById('video-container');

uploadButton.addEventListener('click', (e) => {
    e.preventDefault();
    const videoFile = videoInput.files[0];
    const formData = new FormData();
    formData.append('video', videoFile);

    fetch('/upload-video', {
        method: 'POST',
        body: formData
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const videoElement = document.createElement('video');
        videoElement.src = data.videoUrl;
        videoElement.controls = true;
        videoContainer.appendChild(videoElement);
    })
    .catch((error) => console.error(error));
});
```

Untuk back-end, kita dapat menggunakan Node.js dan Express.js untuk membuat server yang dapat menerima dan mengolah video. Berikut adalah contoh kode Node.js:
```
const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/upload-video', upload.single('video'), (req, res) => {
    const videoFile = req.file;
    const videoUrl = `http://localhost:3000/${videoFile.filename}`;
    res.json({ videoUrl });
});

app.get('/video/:filename', (req, res) => {
    const filename = req.params.filename;
    res.sendFile(`${__dirname}/uploads/${filename}`);
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
const toggleMenu = document.querySelector('.toggle-menu');
const menuSampingan = document.querySelector('.menu-sampingan');

toggleMenu.addEventListener('click', () => {
  menuSampingan.classList.toggle('show');
});
const uploadForm = document.getElementById('upload-form');
const videoInput = document.getElementById('video-input');
const uploadButton = document.getElementById('upload-button');
const progressBar = document.getElementById('progress-bar');

uploadButton.addEventListener('click', (e) => {
  e.preventDefault();
  const videoFile = videoInput.files[0];
  const formData = new FormData();
  formData.append('video', videoFile);

  fetch('/upload-video', {
    method: 'POST',
    body: formData
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    progressBar.value = 100;
  })
  .catch((error) => console.error(error));
});