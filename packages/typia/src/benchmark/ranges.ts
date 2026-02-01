import fs from "fs";

import { TreeSet } from "../container/TreeSet";
import { Pair } from "../utility/Pair";

async function load(path: string): Promise<TreeSet<Pair<string, string>>> {
  const ret: TreeSet<Pair<string, string>> = new TreeSet();
  const directory: string[] = await fs.promises.readdir(path);

  for (const file of directory) {
    if (file.substr(-3) !== ".js" || file === "index.js") continue;

    const name: string = file.substr(0, file.length - 3);
    const functions: IModule = await import(`${path}/${file}`);

    for (const func in functions) ret.insert(new Pair(name, func));
  }
  return ret;
}

export async function main(): Promise<string> {
  const std: TreeSet<Pair<string, string>> = await load(
    __dirname + "/../algorithm",
  );
  const ranges: TreeSet<Pair<string, string>> = await load(
    __dirname + "/../ranges/algorithm",
  );

  const both: TreeSet<Pair<string, string>> = new TreeSet();
  both.push(...std);
  both.push(...ranges);

  let ret: string =
    "## `<algorithm>` \n" +
    " module | function | `std` | `std.ranges` \n" +
    "--------|----------|-------|--------------\n";
  for (const pair of both)
    ret += ` ${pair.first} | ${pair.second} | ${std.has(pair) ? "O" : "X"} | ${
      ranges.has(pair) ? "O" : "X"
    } \n`;
  return ret;
}

interface IModule {
  [key: string]: Function | undefined;
}
