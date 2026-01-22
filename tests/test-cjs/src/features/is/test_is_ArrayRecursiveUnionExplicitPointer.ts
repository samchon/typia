import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_is_ArrayRecursiveUnionExplicitPointer = (): void =>
  _test_is(
    "ArrayRecursiveUnionExplicitPointer",
  )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
    (input) => typia.is<ArrayRecursiveUnionExplicitPointer>(input),
  );
