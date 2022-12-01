import fs from "fs";

import TSON from "../../src";
import { ArrayHierarchical } from "../structures/ArrayHierarchical";
import { ArrayRecursiveUnionExplicit } from "../structures/ArrayRecursiveUnionExplicit";
import { ObjectHierarchical } from "../structures/ObjectHierarchical";
import { ObjectUnionExplicit } from "../structures/ObjectUnionExplicit";

fs.writeFileSync(
    __dirname + "/internal/364/ObjectHierarchical.proto",
    TSON.message<ObjectHierarchical>(),
    "utf8",
);

fs.writeFileSync(
    __dirname + "/internal/364/ArrayHierarchical.proto",
    TSON.message<ArrayHierarchical>(),
    "utf8",
);

fs.writeFileSync(
    __dirname + "/internal/364/ObjectUnionExplicit.proto",
    TSON.message<ObjectUnionExplicit>(),
    "utf8",
);

fs.writeFileSync(
    __dirname + "/internal/364/ArrayRecursiveUnionExplicit.proto",
    TSON.message<ArrayRecursiveUnionExplicit>(),
    "utf8",
);

console.log(TSON.message<Date | boolean[] | string[][] | number[][][]>());
