import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_createAssertCustom_AtomicUnion = (): void =>
  _test_assert(CustomGuardError)("AtomicUnion")<AtomicUnion>(AtomicUnion)(
    typia.createAssert<AtomicUnion>((p) => new CustomGuardError(p)),
  );
