import fs from "fs";
import typia from "typia";

import { ArrayRepeatedUnion } from "../structures/ArrayRepeatedUnion";

const func = typia.createStringify<ArrayRepeatedUnion[]>();
const generate = typia.createRandom<ArrayRepeatedUnion>();

const script = [
    `const fs = require("fs");`,
    `const typia_1 = require("../../lib");`,
    ``,
    `const func = ${func.toString()};`,
    `const generate = ${generate.toString()};`,
    ``,
    `const data = new Array(100).fill("").map(generate);`,
    `fs.writeFileSync(__dirname + "/nestia-346.json", JSON.stringify(JSON.parse(func(data)), null, 4), "utf8");`,
].join("\n");

fs.writeFileSync(__dirname + "/nestia-346.out.js", script, "utf8");
import(__dirname + "/nestia-346.out.js").catch((exp) => {
    console.log(exp);
});
