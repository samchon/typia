import fs from "fs";
import typia from "typia";

import { primitive_equal_to } from "../helpers/primitive_equal_to";
import { ObjectUnionCompositePointer } from "../structures/ObjectUnionCompositePointer";

fs.writeFileSync(
    __dirname + "/protobuf.encode.composite.js",
    [
        "//-----------------------------------------------",
        "// ENCODER",
        "//-----------------------------------------------",
        typia.protobuf.createEncode<ObjectUnionCompositePointer>().toString(),
        "",
        "//-----------------------------------------------",
        "// DECODER",
        "//-----------------------------------------------",
        typia.protobuf.createDecode<ObjectUnionCompositePointer>().toString(),
    ].join("\n"),
    "utf8",
);

const data: ObjectUnionCompositePointer =
    ObjectUnionCompositePointer.generate();
const buffer = typia.protobuf.encode<ObjectUnionCompositePointer>(data);
const decoded = typia.protobuf.decode<ObjectUnionCompositePointer>(buffer);

console.log(buffer.length);

if (primitive_equal_to(data, decoded) === false) {
    fs.writeFileSync(
        __dirname + "/protobuf.encode.composite.json",
        JSON.stringify(data, null, 4),
        "utf8",
    );
    fs.writeFileSync(
        __dirname + "/protobuf.encode.composite.decoded.json",
        JSON.stringify(decoded, null, 4),
        "utf8",
    );
}
