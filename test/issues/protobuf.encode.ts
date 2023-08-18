import fs from "fs";
import typia from "typia";

import { ObjectUnionCompositePointer } from "../structures/ObjectUnionCompositePointer";

// TRACE ENCODE FUNCTION
const encode = typia.protobuf.createEncode<ObjectUnionCompositePointer>();

fs.writeFileSync(
    __dirname + "/protobuf.encode.js",
    [`const encode = ${encode.toString()}`].join("\n"),
    "utf8",
);
