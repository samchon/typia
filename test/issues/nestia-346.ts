import fs from "fs";
import typia from "typia";

import { ArrayRepeatedUnionWithTuple } from "../structures/ArrayRepeatedUnionWithTuple";

fs.writeFileSync(
    __dirname + "/nestia-346.out.js",
    typia.createIs<ArrayRepeatedUnionWithTuple>().toString(),
    "utf8",
);
