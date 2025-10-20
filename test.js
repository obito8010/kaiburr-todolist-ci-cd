// test.js - Simple validation tests
console.log('🧪 Running TodoList App Tests...');

// Test 1: Check Node.js version
const nodeVersion = process.version;
console.log(`✅ Node.js version: ${nodeVersion}`);

// Test 2: Check if required files exist
const fs = require('fs');
const requiredFiles = ['index.html', 'style.css', 'script.js', 'server.js', 'package.json', 'Dockerfile'];

requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} exists`);
  } else {
    console.log(`❌ ${file} missing`);
    process.exit(1);
  }
});

// Test 3: Check package.json validity
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  console.log(`✅ package.json is valid JSON`);
  console.log(`✅ App name: ${packageJson.name}`);
} catch (error) {
  console.log('❌ package.json is invalid JSON');
  process.exit(1);
}

console.log('🎉 All tests passed!');
console.log('✅ Application is ready for CI/CD pipeline');