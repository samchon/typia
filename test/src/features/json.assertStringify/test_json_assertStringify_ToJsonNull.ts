import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonNull } from "../../structures/ToJsonNull";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_ToJsonNull = _test_json_assertStringify(
  TypeGuardError,
)("ToJsonNull")<ToJsonNull>(ToJsonNull)((input) =>
  typia.json.assertStringify<ToJsonNull>(input),
);
