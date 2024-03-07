import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicConstant } from "../../structures/DynamicConstant";

import { TypeGuardError } from "typia";

export const test_json_assertParse_DynamicConstant = _test_json_assertParse(
  TypeGuardError,
)("DynamicConstant")<DynamicConstant>(DynamicConstant)((input) =>
  typia.json.assertParse<DynamicConstant>(input),
);
