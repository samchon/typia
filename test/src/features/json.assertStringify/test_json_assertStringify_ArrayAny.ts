import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayAny } from "../../structures/ArrayAny";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_ArrayAny = _test_json_assertStringify(
  TypeGuardError,
)("ArrayAny")<ArrayAny>(ArrayAny)((input) =>
  typia.json.assertStringify<ArrayAny>(input),
);
