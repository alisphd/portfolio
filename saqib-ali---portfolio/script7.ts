import fs from 'fs';

const filePath = 'src/App.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

content = content.replace(/sky/g, 'teal');

fs.writeFileSync(filePath, content);
console.log('Replaced sky with teal in App.tsx');
