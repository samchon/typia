import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_misc_validatePrune_ArrayAtomicAlias = (): void =>
  _test_misc_validatePrune("ArrayAtomicAlias")<ArrayAtomicAlias>(
    ArrayAtomicAlias,
  )((input) => typia.misc.validatePrune<ArrayAtomicAlias>(input));
