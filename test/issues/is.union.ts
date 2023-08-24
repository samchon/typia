import { writeFileSync } from "fs";
import typia from "typia";

import { TagArray } from "../structures/TagArray";

writeFileSync(
    __dirname + "/is.union.js",
    typia.createIs<TagArray>().toString(),
    "utf8",
);
