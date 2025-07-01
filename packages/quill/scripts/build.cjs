const { execSync } = require('child_process');
const path = require('path');

const mode = process.argv[2] || 'production';
const tscPath = path.join(__dirname, '../node_modules/.bin/tsc.cmd'); // Windows 需要 .cmd
const babelPath = path.join(__dirname, '../node_modules/.bin/babel.cmd');
const webpackPath = path.join(__dirname, '../node_modules/.bin/webpack.cmd');

try {
  // execSync(`"${tscPath}" --declaration --emitDeclarationOnly || true`, { stdio: 'inherit' });
  execSync(`"${babelPath}" src --out-dir dist --copy-files --no-copy-ignored --extensions .ts --source-maps`, { stdio: 'inherit' });
  execSync(`"${webpackPath}" --mode ${mode}`, { stdio: 'inherit' });
} catch (error) {
  process.exit(1);
}