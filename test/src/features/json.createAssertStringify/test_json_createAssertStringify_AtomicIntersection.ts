import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_json_createAssertStringify_AtomicIntersection = (): void =>
  _test_json_assertStringify(TypeGuardError)(
    "AtomicIntersection",
  )<AtomicIntersection>(AtomicIntersection)(
    typia.json.createAssertStringify<AtomicIntersection>(),
  );
