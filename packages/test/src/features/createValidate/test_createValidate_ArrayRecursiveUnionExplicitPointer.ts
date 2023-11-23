import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_createValidate_ArrayRecursiveUnionExplicitPointer =
  _test_validate(
    "ArrayRecursiveUnionExplicitPointer",
  )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
    typia.createValidate<ArrayRecursiveUnionExplicitPointer>(),
  );
