import cp from "child_process";
import fs from "fs";

const execute = (str: string) =>
  cp.execSync(str, {
    cwd: `${__dirname}/..`,
    stdio: "inherit",
  });
execute("pnpm run build");
execute("pnpm pack");

const directory: string[] = fs.readdirSync(`${__dirname}/..`);
if (directory.includes("typia.tgz")) fs.unlinkSync(`${__dirname}/../typia.tgz`);

const found = directory.find((file) => file.endsWith(".tgz"));
if (found) {
  fs.renameSync(`${__dirname}/../${found}`, `${__dirname}/../typia.tgz`);
  console.log("tgz file created successfully.");
}
