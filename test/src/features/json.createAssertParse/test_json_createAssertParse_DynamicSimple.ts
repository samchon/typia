import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicSimple } from "../../structures/DynamicSimple";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_DynamicSimple = _test_json_assertParse(
  TypeGuardError,
)("DynamicSimple")<DynamicSimple>(DynamicSimple)(
  typia.json.createAssertParse<DynamicSimple>(),
);
