import fs from "fs";
import typia from "typia";

import { ArrayRecursive } from "../structures/ArrayRecursive";

const generator = typia.createRandom<ArrayRecursive>();
fs.writeFileSync(__dirname + "/random.out.js", generator.toString(), "utf8");

const app = typia.metadata<[ArrayRecursive]>();
console.log(
    app.collection.objects.map((o) => [o.name, o.recursive]),
    app.collection.arrays.map((a) => [a.name, a.recursive]),
);
