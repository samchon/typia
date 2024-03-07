import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ClassGetter } from "../../structures/ClassGetter";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_ClassGetter = _test_json_assertParse(
  TypeGuardError,
)("ClassGetter")<ClassGetter>(ClassGetter)(
  typia.json.createAssertParse<ClassGetter>(),
);
