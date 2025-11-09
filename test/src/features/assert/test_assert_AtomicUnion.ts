import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_assert_AtomicUnion = (): void =>
  _test_assert(TypeGuardError)("AtomicUnion")<AtomicUnion>(AtomicUnion)(
    (input) => typia.assert<AtomicUnion>(input),
  );
