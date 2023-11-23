import typia from "typia";

import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";

export const test_misc_prune_ConstantAtomicSimple = _test_misc_prune(
  "ConstantAtomicSimple",
)<ConstantAtomicSimple>(ConstantAtomicSimple)((input) =>
  ((input: ConstantAtomicSimple): void => {})(input),
);
