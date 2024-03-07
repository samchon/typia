import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

import { TypeGuardError } from "typia";

export const test_assertEquals_ConstantAtomicUnion = _test_assertEquals(
  TypeGuardError,
)("ConstantAtomicUnion")<ConstantAtomicUnion>(ConstantAtomicUnion)((input) =>
  typia.assertEquals<ConstantAtomicUnion>(input),
);
