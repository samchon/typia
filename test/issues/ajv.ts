import Ajv from "ajv";
import fs from "fs";
import typia from "typia";

import { IPointer } from "../helpers/IPointer";
import { ObjectSimple } from "../structures/ObjectSimple";

const app = typia.json.application<[IPointer<ObjectSimple>], "ajv">();
fs.writeFileSync(__dirname + "/ajv.json", JSON.stringify(app, null, 4), "utf8");

const program = new Ajv({
    schemas: Object.values(app.components.schemas ?? {}),
    keywords: [
        "x-typia-tuple",
        "x-typia-typeTags",
        "x-typia-jsDocTags",
        "x-typia-required",
        "x-typia-optional",
        "x-typia-rest",
    ],
    strict: true,
    strictNumbers: false,
    code: {
        es5: true,
        lines: true,
        source: true,
        optimize: false,
    },
});
const is = program.compile(app.schemas[0]!);
fs.writeFileSync(
    __dirname + "/ajv.js",
    [
        is.source?.validateCode,
        ...Object.values(program.schemas).map(
            (s) => s?.validate?.source?.validateCode,
        ),
    ].join("\n\n\n"),
    "utf8",
);
