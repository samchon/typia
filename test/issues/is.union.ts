import { writeFileSync } from "fs";
import typia from "typia";

import { ArrayRecursiveUnionImplicit } from "../structures/ArrayRecursiveUnionImplicit";

writeFileSync(
    __dirname + "/is.union.js",
    typia.createIs<ArrayRecursiveUnionImplicit>().toString(),
    "utf8",
);
