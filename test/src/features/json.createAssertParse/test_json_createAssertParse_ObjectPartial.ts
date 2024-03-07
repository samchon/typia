import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectPartial } from "../../structures/ObjectPartial";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_ObjectPartial = _test_json_assertParse(
  TypeGuardError,
)("ObjectPartial")<ObjectPartial>(ObjectPartial)(
  typia.json.createAssertParse<ObjectPartial>(),
);
