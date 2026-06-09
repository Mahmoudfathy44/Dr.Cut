const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
  { url: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80', name: 'service1.jpg' },
  { url: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80', name: 'service2.jpg' },
  { url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80', name: 'service3.jpg' },
  { url: 'https://images.unsplash.com/photo-1521490683712-35a1cb235d1c?w=800&q=80', name: 'service4.jpg' },
  { url: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=600&q=80', name: 'barber1.jpg' },
  { url: 'https://images.unsplash.com/photo-1599351431613-18ef1fdd27e1?w=600&q=80', name: 'barber2.jpg' },
  { url: 'https://images.unsplash.com/photo-1546518994-4f31a1d8f6d3?w=600&q=80', name: 'barber3.jpg' },
  { url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80', name: 'barber4.jpg' },
  { url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80', name: 'branch1.jpg' },
  { url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80', name: 'branch2.jpg' },
  { url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1600&q=90', name: 'hero.jpg' },
  { url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1600&q=80', name: 'cta.jpg' },
  { url: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=85', name: 'about.jpg' },
  { url: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80', name: 'about2.jpg' },
];

const imgDir = path.join(__dirname, 'public', 'img');

if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(fs.createWriteStream(filepath))
          .on('error', reject)
          .once('close', () => resolve(filepath));
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
      } else {
        response.resume();
        reject(new Error(`Request Failed With a Status Code: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
};

const run = async () => {
  for (let i = 0; i < images.length; i++) {
    const { url, name } = images[i];
    const dest = path.join(imgDir, name);
    try {
      console.log(`Downloading ${name}...`);
      await downloadImage(url, dest);
      console.log(`Saved ${name}`);
    } catch (e) {
      console.error(`Error downloading ${name}:`, e);
    }
  }
};

run();
