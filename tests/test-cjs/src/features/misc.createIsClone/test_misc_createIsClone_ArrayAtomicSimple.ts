import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_misc_createIsClone_ArrayAtomicSimple = (): void =>
  _test_misc_isClone("ArrayAtomicSimple")<ArrayAtomicSimple>(ArrayAtomicSimple)(
    typia.misc.createIsClone<ArrayAtomicSimple>(),
  );
