import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_misc_createValidateClone_ArrayRecursiveUnionExplicit =
  (): void =>
    _test_misc_validateClone(
      "ArrayRecursiveUnionExplicit",
    )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)(
      typia.misc.createValidateClone<ArrayRecursiveUnionExplicit>(),
    );
