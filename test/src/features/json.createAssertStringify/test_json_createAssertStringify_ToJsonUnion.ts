import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_ToJsonUnion =
  _test_json_assertStringify(TypeGuardError)("ToJsonUnion")<ToJsonUnion>(
    ToJsonUnion,
  )(typia.json.createAssertStringify<ToJsonUnion>());
