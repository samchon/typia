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

  if (fs.existsSync(absolute) === false) {
    console.log(`file not found: ${absolute}`);
    return "file not found: " + location;
  }

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
    if (name === "@typia/station") break;
  }
  return path.resolve(cwd);
});

const examples = new Singleton(async () => {
  cp.execSync("pnpm run build", {
    stdio: "inherit",
    cwd: path.resolve(`${await root.get()}/examples`),
  });
});
