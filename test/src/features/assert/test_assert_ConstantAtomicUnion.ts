import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

import { TypeGuardError } from "typia";

export const test_assert_ConstantAtomicUnion = _test_assert(TypeGuardError)(
  "ConstantAtomicUnion",
)<ConstantAtomicUnion>(ConstantAtomicUnion)((input) =>
  typia.assert<ConstantAtomicUnion>(input),
);
