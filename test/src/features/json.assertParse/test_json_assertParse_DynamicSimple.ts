import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicSimple } from "../../structures/DynamicSimple";

import { TypeGuardError } from "typia";

export const test_json_assertParse_DynamicSimple = _test_json_assertParse(
  TypeGuardError,
)("DynamicSimple")<DynamicSimple>(DynamicSimple)((input) =>
  typia.json.assertParse<DynamicSimple>(input),
);
