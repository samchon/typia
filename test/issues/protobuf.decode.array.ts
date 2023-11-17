import fs from "fs";
import pjs from "protobufjs";
import typia from "typia";

import { ArraySimpleProtobuf } from "../structures/ArraySimpleProtobuf";

const result: pjs.IParserResult = pjs.parse(
  typia.protobuf.message<ArraySimpleProtobuf>(),
);
const type: pjs.Type = result.root.lookupType("ArraySimpleProtobuf");
const data: ArraySimpleProtobuf = ArraySimpleProtobuf.generate();

fs.writeFileSync(
  __dirname + "/protobuf.decode.array.js",
  [
    "//-------------------------------------------------",
    "// MESSAGE",
    "//-------------------------------------------------",
    ...typia.protobuf
      .message<ArraySimpleProtobuf>()
      .split("\n")
      .map((line) => `// ${line}`),
    "",
    "//-------------------------------------------------",
    "// TYPIA",
    "//-------------------------------------------------",
    `const encode = ${typia.protobuf
      .createDecode<ArraySimpleProtobuf>()
      .toString()}`,
    "",
    "//-------------------------------------------------",
    "// GOOGLE",
    "//-------------------------------------------------",
    pjs.decoder(type).toString(),
  ].join("\n"),
  "utf8",
);
