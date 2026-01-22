import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_misc_createValidateClone_ArrayAtomicSimple = (): void =>
  _test_misc_validateClone("ArrayAtomicSimple")<ArrayAtomicSimple>(
    ArrayAtomicSimple,
  )(typia.misc.createValidateClone<ArrayAtomicSimple>());
