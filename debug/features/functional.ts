import fs from "fs";
import typia from "typia";

try {
  fs.mkdirSync(__dirname + "/../bin");
} catch {}
const func = typia.functional.validateFunction(
  (x: number, y: number): number => x + y,
);
fs.writeFileSync(`${__dirname}/../bin/functional.js`, func.toString(), "utf8");

console.log(func(3, 4));
