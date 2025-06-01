import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

// Ensure we're using the wasm version of rollup
process.env.ROLLUP_WASM = 'true';

console.log('Installing @rollup/wasm-node...');
const npmInstall = spawn('npm', ['install', '@rollup/wasm-node', '--no-save']);

npmInstall.stdout.on('data', (data) => {
  console.log(data.toString());
});

npmInstall.stderr.on('data', (data) => {
  console.error(data.toString());
});

npmInstall.on('close', (code) => {
  if (code !== 0) {
    console.error(`npm install exited with code ${code}`);
    process.exit(code);
  }

  console.log('Running vite build with wasm rollup...');
  const viteBuild = spawn('npx', ['vite', 'build']);

  viteBuild.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  viteBuild.stderr.on('data', (data) => {
    console.error(data.toString());
  });

  viteBuild.on('close', (code) => {
    if (code !== 0) {
      console.error(`vite build exited with code ${code}`);
      process.exit(code);
    }
    console.log('Build completed successfully!');
  });
}); 