import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicArray } from "../../structures/DynamicArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_DynamicArray = _test_json_assertParse(
  CustomGuardError,
)("DynamicArray")<DynamicArray>(DynamicArray)((input) =>
  typia.json.assertParse<DynamicArray>(input, (p) => new CustomGuardError(p)),
);
