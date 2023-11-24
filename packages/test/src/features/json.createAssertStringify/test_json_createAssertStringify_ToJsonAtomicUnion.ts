import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_json_createAssertStringify_ToJsonAtomicUnion =
  _test_json_assertStringify("ToJsonAtomicUnion")<ToJsonAtomicUnion>(
    ToJsonAtomicUnion,
  )(typia.json.createAssertStringify<ToJsonAtomicUnion>());
