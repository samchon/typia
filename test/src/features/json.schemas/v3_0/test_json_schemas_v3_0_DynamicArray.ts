import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_json_schemas_v3_0_DynamicArray = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "DynamicArray",
  })(typia.json.schemas<[DynamicArray], "3.0">());
