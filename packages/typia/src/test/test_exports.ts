import * as fs from "fs";

import { HashMap } from "../container/HashMap";
import * as index from "../index";
import { sort } from "../ranges/algorithm/sorting";
import { ArrayUtil } from "./internal/ArrayUtil";

const MAIN = __dirname + "/..";
const HELPERS = [MAIN + "/benchmark", MAIN + "/test"];
const EXCLUDES = ["internal"];

async function from_dynamic(
  map: HashMap<object, string>,
  path: string,
): Promise<void> {
  const fileList: string[] = await fs.promises.readdir(path);
  for (const file of fileList) {
    const current: string = `${path}/${file}`;
    const stats: fs.Stats = await fs.promises.stat(current);

    if (
      stats.isDirectory() &&
      ArrayUtil.has(HELPERS, current) === false &&
      ArrayUtil.has(EXCLUDES, file) === false
    )
      await from_dynamic(map, current);
    else if (
      file.substr(-3) === __filename.substr(-3) &&
      __filename.substr(-5) !== ".d.ts"
    ) {
      const elem: any = await import(current);
      for (const key in elem) {
        const instance: any = elem[key];
        if (!instance) continue;

        const type: string = typeof instance;
        if (
          type === "function" ||
          (type === "object" &&
            !(
              instance.constructor === Object && key[0].toLowerCase() === key[0]
            ))
        )
          map.set(instance, key);
      }
    }
  }
}

function from_index(map: HashMap<object, string>, elem: any): void {
  if (map.has(elem) === true) return;

  for (const key in elem) {
    const instance: any = elem[key];
    const type: string = typeof instance;

    if (type === "object" && instance.constructor === Object)
      if (key[0].toUpperCase() === key[0]) map.set(instance, key);
      else from_index(map, instance);
    else if (typeof instance === "function" || typeof instance === "object")
      map.set(instance, key);
  }
}

export async function test_exports(): Promise<void> {
  const dynamicMap: HashMap<object, string> = new HashMap();
  const indexMap: HashMap<object, string> = new HashMap();

  await from_dynamic(dynamicMap, MAIN);
  from_index(indexMap, index);

  const ommissions: string[] = [];
  for (const tuple of dynamicMap)
    if (indexMap.has(tuple.first) === false) ommissions.push(tuple.second);

  if (ommissions.length !== 0) {
    sort(ommissions);
    throw new Error(
      "Error on module indexing: ommited " +
        ommissions.join(", ") +
        " components.",
    );
  }
}
