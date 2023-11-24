import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_misc_createValidateClone_ArrayAtomicAlias =
  _test_misc_validateClone("ArrayAtomicAlias")<ArrayAtomicAlias>(
    ArrayAtomicAlias,
  )(typia.misc.createValidateClone<ArrayAtomicAlias>());
