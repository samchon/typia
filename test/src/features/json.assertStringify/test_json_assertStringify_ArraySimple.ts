import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_json_assertStringify_ArraySimple = (): void =>
  _test_json_assertStringify(TypeGuardError)("ArraySimple")<ArraySimple>(
    ArraySimple,
  )((input) => typia.json.assertStringify<ArraySimple>(input));
