import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_ToJsonTuple = _test_json_assertStringify(
  TypeGuardError,
)("ToJsonTuple")<ToJsonTuple>(ToJsonTuple)((input) =>
  typia.json.assertStringify<ToJsonTuple>(input),
);
