import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_createAssert_AtomicSimple = (): void =>
  _test_assert(TypeGuardError)("AtomicSimple")<AtomicSimple>(AtomicSimple)(
    typia.createAssert<AtomicSimple>(),
  );
