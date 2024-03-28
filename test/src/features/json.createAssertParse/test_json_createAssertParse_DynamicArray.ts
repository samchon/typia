import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_json_createAssertParse_DynamicArray = _test_json_assertParse(
  TypeGuardError,
)("DynamicArray")<DynamicArray>(DynamicArray)(
  typia.json.createAssertParse<DynamicArray>(),
);
