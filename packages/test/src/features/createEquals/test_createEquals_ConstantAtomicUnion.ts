import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_createEquals_ConstantAtomicUnion = _test_equals(
  "ConstantAtomicUnion",
)<ConstantAtomicUnion>(ConstantAtomicUnion)(
  typia.createEquals<ConstantAtomicUnion>(),
);
