import fs from "fs";
import typia from "typia";

import { ObjectSimple } from "../structures/ObjectSimple";

const encode = typia.protobuf.createEncode<ObjectSimple>();
fs.writeFileSync(__dirname + "/protobuf.encode.js", encode.toString(), "utf8");
