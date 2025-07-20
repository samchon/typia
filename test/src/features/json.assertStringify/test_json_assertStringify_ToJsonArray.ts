import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_json_assertStringify_ToJsonArray = (): void =>
  _test_json_assertStringify(TypeGuardError)("ToJsonArray")<ToJsonArray>(
    ToJsonArray,
  )((input) => typia.json.assertStringify<ToJsonArray>(input));
