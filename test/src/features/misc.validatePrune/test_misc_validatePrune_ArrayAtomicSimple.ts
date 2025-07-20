import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_misc_validatePrune_ArrayAtomicSimple = (): void =>
  _test_misc_validatePrune("ArrayAtomicSimple")<ArrayAtomicSimple>(
    ArrayAtomicSimple,
  )((input) => typia.misc.validatePrune<ArrayAtomicSimple>(input));
