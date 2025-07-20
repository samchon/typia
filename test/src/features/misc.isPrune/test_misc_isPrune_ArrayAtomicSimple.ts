import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_misc_isPrune_ArrayAtomicSimple = (): void =>
  _test_misc_isPrune("ArrayAtomicSimple")<ArrayAtomicSimple>(ArrayAtomicSimple)(
    (input) => typia.misc.isPrune<ArrayAtomicSimple>(input),
  );
