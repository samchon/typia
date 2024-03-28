import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_assertEqualsCustom_AtomicUnion = _test_assertEquals(
  CustomGuardError,
)("AtomicUnion")<AtomicUnion>(AtomicUnion)((input) =>
  typia.assertEquals<AtomicUnion>(input, (p) => new CustomGuardError(p)),
);
