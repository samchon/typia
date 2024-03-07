import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicNever } from "../../structures/DynamicNever";

import { TypeGuardError } from "typia";

export const test_json_assertParse_DynamicNever = _test_json_assertParse(
  TypeGuardError,
)("DynamicNever")<DynamicNever>(DynamicNever)((input) =>
  typia.json.assertParse<DynamicNever>(input),
);
