import fs from "fs";

const directory: string[] = fs.readdirSync(`${__dirname}/../generate/output`);
for (const file of directory) {
  const content: string = fs.readFileSync(
    `${__dirname}/../generate/output/${file}`,
    "utf8",
  );
  if (content.includes("const $"))
    throw new Error(`$ is not allowed in Svelte5`);
}
