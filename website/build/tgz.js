const cp = require("child_process");
const fs = require("fs");

const build = (name) => {
  // clear tgz files
  fs.rmSync(`${__dirname}/../../packages/${name}/*.tgz`, {
    force: true,
  });

  console.log("Building package (tgz):", name);
  cp.execSync("pnpm pack", {
    stdio: "inherit",
    cwd: `${__dirname}/../../packages/${name}`,
  });

  // copy tgz file
  const file = fs
    .readdirSync(`${__dirname}/../../packages/${name}`)
    .find((f) => f.endsWith(".tgz"));
  fs.copyFileSync(
    `${__dirname}/../../packages/${name}/${file}`,
    `${__dirname}/../packages/${name}.tgz`,
  );
};

// make directory
if (fs.existsSync(`${__dirname}/../packages`))
  fs.rmSync(`${__dirname}/../packages`, {
    force: true,
    recursive: true,
  });
fs.mkdirSync(`${__dirname}/../packages`);

// build packages
for (const package of fs.readdirSync(`${__dirname}/../../packages`)) {
  const stat = fs.statSync(`${__dirname}/../../packages/${package}`);
  if (stat.isDirectory()) build(package);
}
