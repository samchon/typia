import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_misc_createClone_ConstantAtomicUnion = _test_misc_clone(
  "ConstantAtomicUnion",
)<ConstantAtomicUnion>(ConstantAtomicUnion)(
  typia.misc.createClone<ConstantAtomicUnion>(),
);
