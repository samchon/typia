import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

import { TypeGuardError } from "typia";

export const test_assertEquals_ToJsonAtomicSimple = _test_assertEquals(
  TypeGuardError,
)("ToJsonAtomicSimple")<ToJsonAtomicSimple>(ToJsonAtomicSimple)((input) =>
  typia.assertEquals<ToJsonAtomicSimple>(input),
);
