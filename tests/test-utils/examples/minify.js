const fs = require("fs");

const iterate = async (location) => {
  for (const file of await fs.promises.readdir(location)) {
    const next = `${location}/${file}`;
    const stat = await fs.promises.stat(next);
    if (stat.isDirectory()) await iterate(next);
    else if (file.endsWith(".json")) {
      const content = await fs.promises.readFile(next, "utf8");
      const minified = JSON.stringify(JSON.parse(content));
      await fs.promises.writeFile(next, minified, "utf8");
    }
  }
};
iterate(__dirname).catch(console.error);
