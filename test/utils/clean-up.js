const fs= require('fs-extra');
fs.emptyDir('reports/ui');
fs.emptyDir('reports/api');
fs.remove('.tmp')
console.log('Cleaned----->>')