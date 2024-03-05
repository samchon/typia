import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_json_createAssertStringify_AtomicUnion =
  _test_json_assertStringify(TypeGuardError)("AtomicUnion")<AtomicUnion>(
    AtomicUnion,
  )(typia.json.createAssertStringify<AtomicUnion>());
