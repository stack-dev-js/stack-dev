const fs = require('fs');
const path = require('path');

const LICENSE_SOURCE = './LICENSE';
const TARGET_DIRS = ['apps', 'packages', 'configs'];

if (!fs.existsSync(LICENSE_SOURCE)) {
    console.error('Source LICENSE file not found!');
    process.exit(1);
}

TARGET_DIRS.forEach(parentDir => {
    const parentPath = path.join(__dirname, '..', parentDir);

    if (!fs.existsSync(parentPath)) return;

    const children = fs.readdirSync(parentPath);

    children.forEach(child => {
        const childPath = path.join(parentPath, child);

        // Only copy if it's a directory (skip files like .DS_Store or READMEs)
        if (fs.lstatSync(childPath).isDirectory()) {
            const destination = path.join(childPath, 'LICENSE');
            fs.copyFileSync(LICENSE_SOURCE, destination);
            console.log(`Synced LICENSE to ${destination}`);
        }
    });
});