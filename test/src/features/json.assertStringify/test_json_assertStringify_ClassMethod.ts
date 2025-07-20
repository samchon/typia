import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_json_assertStringify_ClassMethod = (): void =>
  _test_json_assertStringify(TypeGuardError)("ClassMethod")<ClassMethod>(
    ClassMethod,
  )((input) => typia.json.assertStringify<ClassMethod>(input));
