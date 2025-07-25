import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_json_schemas_v3_1_ArrayMatrix = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "ArrayMatrix",
  })(typia.json.schemas<[ArrayMatrix], "3.1">());
