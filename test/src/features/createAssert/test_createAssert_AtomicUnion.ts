import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_createAssert_AtomicUnion = _test_assert(TypeGuardError)(
  "AtomicUnion",
)<AtomicUnion>(AtomicUnion)(typia.createAssert<AtomicUnion>());
