import fs from "fs";
import pjs from "protobufjs";
import typia from "typia";

import { ArrayRecursiveUnionExplicitPointer } from "../structures/ArrayRecursiveUnionExplicitPointer";

const message = typia.protobuf.message<ArrayRecursiveUnionExplicitPointer>();
const result: pjs.IParserResult = pjs.parse(message);
const typeList: pjs.Type[] = result.root
    .lookupType("ArrayRecursiveUnionExplicitPointer")
    .nestedArray.filter((nested) => nested instanceof pjs.Type)
    .map((nested) => nested as pjs.Type);

fs.writeFileSync(
    `${__dirname}/protobuf.message.js`,
    [
        "//---------------------------------------------------------",
        "// MESSAGE",
        "//---------------------------------------------------------",
        ...message.split("\n").map((line) => `// ${line}`),
        "",
        "//---------------------------------------------------------",
        "// ENCODER",
        "//---------------------------------------------------------",
        ...typeList.map((type) => pjs.encoder(type).toString()),
        "",
        "//---------------------------------------------------------",
        "// DECODER",
        "//---------------------------------------------------------",
        ...typeList.map((type) => pjs.decoder(type).toString()),
    ].join("\n"),
    "utf8",
);
