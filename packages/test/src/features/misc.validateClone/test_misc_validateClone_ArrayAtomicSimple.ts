import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_misc_validateClone_ArrayAtomicSimple =
  _test_misc_validateClone("ArrayAtomicSimple")<ArrayAtomicSimple>(
    ArrayAtomicSimple,
  )((input) => typia.misc.validateClone<ArrayAtomicSimple>(input));
