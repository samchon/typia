import fs from "fs";
import typia from "typia";

import { SetUnion } from "../structures/SetUnion";

const factory = typia.createRandom<SetUnion>();

fs.writeFileSync(__dirname + "/random.js", factory.toString(), "utf8");

for (let i: number = 0; i < 1000; ++i) {
    const data: SetUnion = factory();
    typia.assert(data);
    console.log(i + 1);
}
