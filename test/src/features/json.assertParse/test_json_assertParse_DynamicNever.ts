import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_json_assertParse_DynamicNever = _test_json_assertParse(
  TypeGuardError,
)("DynamicNever")<DynamicNever>(DynamicNever)((input) =>
  typia.json.assertParse<DynamicNever>(input),
);
