import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArraySimple } from "../../structures/ArraySimple";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_ArraySimple = _test_json_assertStringify(
  TypeGuardError,
)("ArraySimple")<ArraySimple>(ArraySimple)((input) =>
  typia.json.assertStringify<ArraySimple>(input),
);
