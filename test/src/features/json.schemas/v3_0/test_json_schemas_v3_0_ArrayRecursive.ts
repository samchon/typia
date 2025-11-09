import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";

export const test_json_schemas_v3_0_ArrayRecursive = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "ArrayRecursive",
  })(typia.json.schemas<[ArrayRecursive], "3.0">());
