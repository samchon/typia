import fs from "fs";
import typia from "typia";

import { ArraySimpleProtobuf } from "../structures/ArraySimpleProtobuf";

fs.writeFileSync(
    `${__dirname}/protobuf.message.proto`,
    typia.protobuf.message<ArraySimpleProtobuf>(),
    "utf8",
);
