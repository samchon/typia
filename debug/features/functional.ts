import fs from "fs";
import typia from "typia";

type Something = Promise<number>;
const plus = async (x: number, y: number): Something => x + y;

try {
  fs.mkdirSync(__dirname + "/../bin");
} catch {}
const func = typia.functional.isReturn(plus);
fs.writeFileSync(`${__dirname}/../bin/functional.js`, func.toString(), "utf8");

console.log(func(3, 4));
