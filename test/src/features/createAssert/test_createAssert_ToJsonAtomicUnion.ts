import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_createAssert_ToJsonAtomicUnion = (): void =>
  _test_assert(TypeGuardError)("ToJsonAtomicUnion")<ToJsonAtomicUnion>(
    ToJsonAtomicUnion,
  )(typia.createAssert<ToJsonAtomicUnion>());
