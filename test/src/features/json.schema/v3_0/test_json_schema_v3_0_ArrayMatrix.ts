import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_json_schema_v3_0_ArrayMatrix = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "ArrayMatrix",
  })(typia.json.schema<ArrayMatrix, "3.0">());
