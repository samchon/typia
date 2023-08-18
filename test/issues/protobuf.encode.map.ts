import fs from "fs";
import pjs from "protobufjs";
import typia from "typia";

import { ArrayHierarchicalPointer } from "../structures/ArrayHierarchicalPointer";

const result: pjs.IParserResult = pjs.parse(
    typia.protobuf.message<ArrayHierarchicalPointer>(),
    {
        keepCase: true,
    },
);
const type: pjs.Type = result.root.lookupType("ArrayHierarchicalPointer");

fs.writeFileSync(
    __dirname + "/protobuf.encode.map.js",
    [
        "//-------------------------------------------------",
        "// TYPIA",
        "//-------------------------------------------------",
        ...typia.protobuf
            .message<ArrayHierarchicalPointer>()
            .split("\n")
            .map((str) => `// ${str}`),
        `const encode = ${typia.protobuf
            .createEncode<ArrayHierarchicalPointer>()
            .toString()}`,
        "",
        "//-------------------------------------------------",
        "// GOOGLE",
        "//-------------------------------------------------",
        pjs.encoder(type).toString(),
        ...["IDepartment", "IEmployee", "ITimestamp"].map((type) =>
            pjs
                .encoder(
                    result.root.lookupType(`ArrayHierarchicalPointer.${type}`),
                )
                .toString(),
        ),
    ].join("\n"),
    "utf8",
);
