import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_json_createAssertStringify_ToJsonTuple =
  _test_json_assertStringify(TypeGuardError)("ToJsonTuple")<ToJsonTuple>(
    ToJsonTuple,
  )(typia.json.createAssertStringify<ToJsonTuple>());
