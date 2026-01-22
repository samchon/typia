import fs from "fs";

const main = async () => {
  const issue: string | undefined = process.argv[2];
  if (issue === undefined) throw new Error("Target issue not provided.");

  const directory: string[] = await fs.promises.readdir(
    `${__dirname}/src/features/issues`,
  );
  const targets: string[] = directory.filter((f) => f.includes(issue));
  for (const file of targets) {
    console.log(file);
    const modulo = await import(`./src/features/issues/${file}`);
    for (const value of Object.values(modulo))
      if (typeof value === "function") await value();
  }
};
main().catch((exp) => {
  console.error(exp);
  process.exit(-1);
});
