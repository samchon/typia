import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectDate } from "../../structures/ObjectDate";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_ObjectDate = _test_json_assertStringify(
  TypeGuardError,
)("ObjectDate")<ObjectDate>(ObjectDate)((input) =>
  typia.json.assertStringify<ObjectDate>(input),
);
