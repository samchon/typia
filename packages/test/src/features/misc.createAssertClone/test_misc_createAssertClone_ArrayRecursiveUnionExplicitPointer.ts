import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_misc_createAssertClone_ArrayRecursiveUnionExplicitPointer =
  _test_misc_assertClone(
    "ArrayRecursiveUnionExplicitPointer",
  )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
    typia.misc.createAssertClone<ArrayRecursiveUnionExplicitPointer>(),
  );
