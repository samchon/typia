const cp = require("child_process");
const fs = require("fs");
const deploy = require("gh-pages");

cp.execSync("npm run build", { stdio: "inherit" });

for (const file of fs.readdirSync(`${__dirname}/../public`))
  if (
    file === "robots.txt" ||
    (file.startsWith("sitemap") && file.endsWith(".xml"))
  )
    fs.copyFileSync(
      `${__dirname}/../public/${file}`,
      `${__dirname}/../out/${file}`,
    );

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
  },
);
