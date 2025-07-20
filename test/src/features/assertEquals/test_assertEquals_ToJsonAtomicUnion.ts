import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_assertEquals_ToJsonAtomicUnion = (): void =>
  _test_assertEquals(TypeGuardError)("ToJsonAtomicUnion")<ToJsonAtomicUnion>(
    ToJsonAtomicUnion,
  )((input) => typia.assertEquals<ToJsonAtomicUnion>(input));
