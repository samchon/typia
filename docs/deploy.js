const cp = require('child_process');
const deploy = require('gh-pages');

const clear = () => cp.execSync('rimraf docs', { stdio: 'inherit' });

clear();
cp.execSync('npx next build', { stdio: 'inherit' });
cp.execSync('npx next export', { stdio: 'inherit' });

deploy.publish(
    "out", 
    { 
        branch: "gh-pages",
        dotfiles: true,
    }, 
    (err) => {
        if (err) {
            console.log(err);
            process.exit(-1);
        } else clear();
    }
);