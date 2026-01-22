import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_json_createAssertStringify_ToJsonNull = (): void =>
  _test_json_assertStringify(TypeGuardError)("ToJsonNull")<ToJsonNull>(
    ToJsonNull,
  )(typia.json.createAssertStringify<ToJsonNull>());
