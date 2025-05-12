import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";

export const test_json_schemas_v3_1_ArrayRepeatedRequired = _test_json_schemas({
  version: "3.1",
  name: "ArrayRepeatedRequired",
})(typia.json.schemas<[ArrayRepeatedRequired], "3.1">());
