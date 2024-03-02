import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_json_createAssertParse_ClassMethod = _test_json_assertParse(
  TypeGuardError,
)("ClassMethod")<ClassMethod>(ClassMethod)(
  typia.json.createAssertParse<ClassMethod>(),
);
