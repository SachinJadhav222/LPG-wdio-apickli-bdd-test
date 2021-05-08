const fs= require('fs-extra');
fs.emptyDir('reports/ui');
fs.emptyDir('reports/screenshots');
fs.emptyDir('reports/api');
fs.remove('.tmp')
fs.remove('cucumber.json')
console.log('Cleaned----->>')