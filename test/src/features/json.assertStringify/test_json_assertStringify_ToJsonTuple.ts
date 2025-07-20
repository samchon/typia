import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_json_assertStringify_ToJsonTuple = (): void =>
  _test_json_assertStringify(TypeGuardError)("ToJsonTuple")<ToJsonTuple>(
    ToJsonTuple,
  )((input) => typia.json.assertStringify<ToJsonTuple>(input));
