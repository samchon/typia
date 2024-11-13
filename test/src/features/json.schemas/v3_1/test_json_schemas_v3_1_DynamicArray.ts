import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_json_schemas_v3_1_DynamicArray = _test_json_schemas({
  version: "3.1",
  name: "DynamicArray",
})(typia.json.schemas<[DynamicArray], "3.1">());
