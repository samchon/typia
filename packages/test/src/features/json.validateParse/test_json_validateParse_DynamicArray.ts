import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_json_validateParse_DynamicArray = _test_json_validateParse(
  "DynamicArray",
)<DynamicArray>(DynamicArray)((input) =>
  typia.json.validateParse<DynamicArray>(input),
);
