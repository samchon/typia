import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ClassMethod } from "../../structures/ClassMethod";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_ClassMethod = _test_json_assertStringify(
  TypeGuardError,
)("ClassMethod")<ClassMethod>(ClassMethod)((input) =>
  typia.json.assertStringify<ClassMethod>(input),
);
