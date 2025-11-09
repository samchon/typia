import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_standardSchema_createValidate_ArrayRecursiveUnionExplicitPointer =
  (): void =>
    _test_standardSchema_validate(
      "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
      typia.createValidate<ArrayRecursiveUnionExplicitPointer>(),
    );
