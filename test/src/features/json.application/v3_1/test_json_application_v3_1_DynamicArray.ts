import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_json_application_v3_1_DynamicArray = _test_json_application({
  version: "3.1",
  name: "DynamicArray",
})(typia.json.application<DynamicArrayApplication, "3.1">());

interface DynamicArrayApplication {
  insert(first: DynamicArray): Promise<void>;
  reduce(
    first: DynamicArray,
    second: DynamicArray | null,
  ): Promise<DynamicArray>;
  coalesce(
    first: DynamicArray | null,
    second: DynamicArray | null,
    third?: DynamicArray | null,
  ): Promise<DynamicArray | null>;
}
