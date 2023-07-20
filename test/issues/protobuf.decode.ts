import fs from "fs";
import typia from "typia";

import { ObjectSimple } from "../structures/ObjectSimple";

const decode = typia.protobuf.createDecode<ObjectSimple>();
fs.writeFileSync(__dirname + "/protobuf.decode.js", decode.toString(), "utf8");
