const cp = require("child_process");
const fs = require("fs");

cp.execSync("next-sitemap", {
  stdio: "inherit",
  cwd: `${__dirname}/..`,
});

for (const file of fs.readdirSync(`${__dirname}/../public`))
  if (
    file === "robots.txt" ||
    (file.startsWith("sitemap") && file.endsWith(".xml"))
  )
    fs.copyFileSync(
      `${__dirname}/../public/${file}`,
      `${__dirname}/../out/${file}`,
    );
