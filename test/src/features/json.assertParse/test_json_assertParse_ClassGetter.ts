import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ClassGetter } from "../../structures/ClassGetter";

import { TypeGuardError } from "typia";

export const test_json_assertParse_ClassGetter = _test_json_assertParse(
  TypeGuardError,
)("ClassGetter")<ClassGetter>(ClassGetter)((input) =>
  typia.json.assertParse<ClassGetter>(input),
);
