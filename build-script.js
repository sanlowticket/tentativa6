#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting Netlify build process...');

try {
  // Verificar estrutura
  console.log('📁 Checking project structure...');
  
  const requiredFiles = [
    'client/index.html',
    'client/src/main.tsx',
    'package.json',
    'vite-netlify.config.ts'
  ];
  
  requiredFiles.forEach(file => {
    if (!fs.existsSync(file)) {
      throw new Error(`Required file missing: ${file}`);
    }
    console.log(`✅ Found: ${file}`);
  });

  // Instalar dependências
  console.log('📦 Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });

  // Atualizar browserslist
  console.log('🔄 Updating browserslist...');
  try {
    execSync('npx update-browserslist-db@latest', { stdio: 'inherit' });
  } catch (e) {
    console.log('⚠️ Browserslist update failed, continuing...');
  }

  // Build com Vite
  console.log('🔨 Building with Vite...');
  execSync('npx vite build --config vite-netlify.config.ts', { stdio: 'inherit' });

  console.log('✅ Build completed successfully!');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
