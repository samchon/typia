import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicArray } from "../../structures/DynamicArray";

import { TypeGuardError } from "typia";

export const test_json_assertParse_DynamicArray = _test_json_assertParse(
  TypeGuardError,
)("DynamicArray")<DynamicArray>(DynamicArray)((input) =>
  typia.json.assertParse<DynamicArray>(input),
);
