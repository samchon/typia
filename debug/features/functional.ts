import fs from "fs";
import typia from "typia";

try {
  fs.mkdirSync(__dirname + "/../bin");
} catch {}
const func = typia.functional.assertFunction(
  (x: number, y: number): number => x + y,
  (p) => new typia.TypeGuardError(p),
);
fs.writeFileSync(`${__dirname}/../bin/functional.js`, func.toString(), "utf8");
