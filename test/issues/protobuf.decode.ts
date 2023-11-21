import fs from "fs";
import typia from "typia";

interface Something {
  id: string;
  not_required: string | undefined;
  optional?: string;
  optional_and_not_required?: string | undefined;
}

const decode = typia.protobuf.createDecode<Something>();
fs.writeFileSync(__dirname + "/protobuf.decode.js", decode.toString(), "utf8");
