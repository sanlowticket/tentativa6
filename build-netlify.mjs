#!/usr/bin/env node

import { execSync } from 'child_process';
import { existsSync } from 'fs';

console.log('🚀 Starting Netlify build...');

try {
  // Verificar arquivos essenciais
  const requiredFiles = [
    'client/index.html',
    'client/src/main.tsx',
    'client/src/App.tsx',
    'package.json'
  ];
  
  console.log('📁 Checking required files...');
  for (const file of requiredFiles) {
    if (!existsSync(file)) {
      throw new Error(`Missing required file: ${file}`);
    }
    console.log(`✅ Found: ${file}`);
  }

  // Instalar dependências
  console.log('📦 Installing dependencies...');
  execSync('npm ci --silent', { stdio: 'inherit' });

  // Build frontend apenas
  console.log('🔨 Building frontend...');
  execSync('cd client && npx vite build --outDir ../dist/public --base ./', { stdio: 'inherit' });

  console.log('✅ Build completed successfully!');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
