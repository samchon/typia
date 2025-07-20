import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_misc_createClone_ArrayRecursiveUnionExplicitPointer =
  (): void =>
    _test_misc_clone(
      "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
      typia.misc.createClone<ArrayRecursiveUnionExplicitPointer>(),
    );
