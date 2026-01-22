import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_misc_clone_ArrayAtomicSimple = (): void =>
  _test_misc_clone("ArrayAtomicSimple")<ArrayAtomicSimple>(ArrayAtomicSimple)(
    (input) => typia.misc.clone<ArrayAtomicSimple>(input),
  );
