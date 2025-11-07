import cp from "child_process";
import fs from "fs";
import path from "path";
import { Singleton, VariadicSingleton } from "tstl";

export function getLocalSourceFile(location: string): Promise<string> {
  return loader.get(location);
}

const loader = new VariadicSingleton(async (location: string) => {
  await examples.get();
  const absolute: string = `${await root.get()}/${location}`;
  const content: string = await fs.promises.readFile(absolute, "utf8");
  return location.endsWith(".d.ts")
    ? content.split("    ").join("  ")
    : content;
});

const root = new Singleton(async () => {
  let cwd: string = `${__dirname}/../..`;
  while (true) {
    cwd += "/..";
    if (fs.existsSync(`${cwd}/package.json`) === false) continue;
    const { name } = JSON.parse(
      await fs.promises.readFile(`${cwd}/package.json`, "utf8"),
    );
    if (name === "typia") break;
  }
  return path.resolve(cwd);
});

const examples = new Singleton(async () => {
  cp.execSync("npm run build", {
    stdio: "ignore",
    cwd: `${await root.get()}/examples`,
  });
});
