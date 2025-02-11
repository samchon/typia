import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_functional_equalsFunctionAsync_ArrayRecursiveUnionExplicitPointer = _test_functional_equalsFunctionAsync(
  "ArrayRecursiveUnionExplicitPointer"
)(ArrayRecursiveUnionExplicitPointer)(
  (p: (input: ArrayRecursiveUnionExplicitPointer) => Promise<ArrayRecursiveUnionExplicitPointer>) =>
    typia.functional.equalsFunction(p),
)