import fs from "fs";
import pjs from "protobufjs";
import typia from "typia";

import { TagDefault } from "../structures/TagDefault";

const result: pjs.IParserResult = pjs.parse(
    typia.protobuf.message<TagDefault>(),
    {
        keepCase: true,
    },
);
const type: pjs.Type = result.root.lookupType("TagDefault");

fs.writeFileSync(
    __dirname + "/protobuf.encode.union.js",
    [
        "//-------------------------------------------------",
        "// TYPIA",
        "//-------------------------------------------------",
        ...typia.protobuf
            .message<TagDefault>()
            .split("\n")
            .map((str) => `// ${str}`),
        `const encode = ${typia.protobuf
            .createEncode<TagDefault>()
            .toString()}`,
        "",
        "//-------------------------------------------------",
        "// GOOGLE",
        "//-------------------------------------------------",
        pjs.encoder(type).toString(),
    ].join("\n"),
    "utf8",
);
