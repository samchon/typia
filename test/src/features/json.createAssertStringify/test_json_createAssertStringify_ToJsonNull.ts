import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonNull } from "../../structures/ToJsonNull";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_ToJsonNull =
  _test_json_assertStringify(TypeGuardError)("ToJsonNull")<ToJsonNull>(
    ToJsonNull,
  )(typia.json.createAssertStringify<ToJsonNull>());
